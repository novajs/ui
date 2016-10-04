'use strict';

var triton = new Triton($);

var gravatar = function(email, options) {
	//check to make sure you gave us something
	var options = options || {},
		base,
		params = [];

	//set some defaults, just in case
	options = {
		size: options.size || "50",
		rating: options.rating || "g",
    secure: true,
		backup: "https://tritonjs.com/css/img/user.png"
	};

	//setup the email address
	email = email.trim().toLowerCase();

	//determine which base to use
	base = options.secure ? 'https://secure.gravatar.com/avatar/' : 'http://www.gravatar.com/avatar/';

	//add the params
	if (options.rating) {params.push("r=" + options.rating)};
	if (options.backup) {params.push("d=" + encodeURIComponent(options.backup))};
	if (options.size) {params.push("s=" + options.size)};

	//now throw it all together
	return base + md5(email) + "?" + params.join("&");
}


function updateUserInfo(emailElm, passwordElem, displaynameElm) {
	var password    = passwordElem.val();
	var email       = emailElm.val();
	var displayname = displaynameElm.val();

	if(!password) {
		return passwordElem.parent().addClass('has-error');
	}

	var allOpts = [
		{
			type: 'email',
			val:  email
		},
		{
			type: 'display_name',
			val:  displayname
		}
	];

	var body = {}

	allOpts.forEach(function(o) {
		if(o.val === '' || typeof o.val === 'undefined' || o.val === null || o.val === ' ') {
			console.log('invalid value for opt type:', o.type);
			return;
		}

		body[o.type] = o.val;
	});

	triton.post('users/update', body)
	.then(function(res) {
		triton.invalidate('users'); // invalidate the users info.
	})
	.catch(function(err) {
		console.log(err);
	})
}

let main = () => {
	var TRITON_EMAIL = $.cookie('triton_useremail');

	if(TRITON_EMAIL) {
		$('#login-email').val(TRITON_EMAIL);

		var gratr = gravatar(TRITON_EMAIL, {
			size: "100",
			backup: $('#login-image').attr('src')
		});

		var keyVal = 65;

		$('#login-image').attr('src', gratr);
		$('#login-image').attr('data-md5', md5(TRITON_EMAIL));
	}

  $('#login-email').on('focusout', function() {
    var email = $('#login-email').val();

		if(md5(email) === $('#login-image').attr('data-md5')) {
			console.log('MD5 is same, ignore.');
			return;
		}

		// basic validation
		if(email === '' || email == null || email === ' ') return;

    var gratr = gravatar(email, {
			size: 200,
			backup: $('#login-image').attr('src')
		});

    console.log('email', email);
    console.log('gravatar', gratr);

    $('#login-image').attr('src', gratr);
		$('#login-image').attr('data-md5', md5(email));

  });

	$('#login-submit').on('click', login);

	// initialize material UI
	$.material.init()
};

let login = () => {
  $('#login-error').hide();
  console.log('BEGIN LAUNCH SEQUENCES');

  var TRITON_EMAIL_STAGING = $('#login-email').val();

  if(!TRITON_EMAIL_STAGING || TRITON_EMAIL_STAGING === ' ' || TRITON_EMAIL_STAGING === '') return;

  console.log('set triton_useremail cookie');
  $.cookie('triton_useremail', TRITON_EMAIL_STAGING);

  var EMAIL = $('#login-email').val();
  var PASS  = $('#login-password').val();

  console.log('POST:', EMAIL, '<pass>');

  $.ajax({
    type: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    url: triton.url+'/users/authflow',
    data: JSON.stringify({
      email: EMAIL,
      password: PASS
    }),
    success: function(data) {
      if(!data) return console.error('Invalid Response from Server', data);
      if(!data.success) console.error('Recieved success=false', data);

      if(!data.success) {
        return $('#login-error').show();
      }

      console.log('login: writing cookies to API_CONFIG.cdomain ->', window.API_CONFIG.cdomain)

      var API_KEY = data.data.public+':'+data.data.secret;
      $.cookie('triton_userapikey', API_KEY, {
        path: '/',
        domain: window.API_CONFIG.cdomain
      });
      $.cookie('triton_username', data.data.username, {
        path: '/',
        domain: window.API_CONFIG.cdomain
      })

			if(data.data.role === 'admin') {
				window.isadmin = true;
				return window.location.hash = '/admin';
			}

			// Default show dash.
      window.location.hash = '/dashboard';
    }
  })
}

let register = () => {
  $('#register-submit').html('<img src="css/img/balls.gif" />');

  let EMAIL    = $('#register-email').val();
  let PASSWORD = $('#register-password').val()
  let USERNAME = $('#register-un').val();
  let DISPLAYN = $('#register-dn').val();

  $.ajax({
    type: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    url: triton.url+'/users/new',
    data: JSON.stringify({
      email: EMAIL,
      password: PASSWORD,
      display_name: DISPLAYN,
      username: USERNAME
    }),
    success: function(data) {
      if(!data) return console.error('Invalid Response from Server', data);
      if(!data.success) console.error('Recieved success=false', data);

      if(!data.success) {
        if(data.data === 'USER_EXISTS') {
          errorElem($('#un-form'))
        }
      }

      window.location.href = '/#/login'
    }
  })
}

let assignment = id => {
	console.log('I: Start assignment ->', id)

	window.location.href = '/#/workspace';

	localStorage.setItem('assignment_id', id);
}

if(router) {
	console.log('ui is binding to router.')

	window['ROUTER'].bind(main);
}

/**
 * Prevent from submitting on enter, on some cases.
 **/
$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});
