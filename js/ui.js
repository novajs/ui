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
		secure: options.secure || (location.protocol === 'https:'),
		backup: options.backup || ""
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
			size: "100",
			backup: $('#login-image').attr('src')
		});

    console.log('email', email);
    console.log('gravatar', gratr);

    $('#login-image').attr('src', gratr);
		$('#login-image').attr('data-md5', md5(email));

  });

	$('#login-submit').on('click', function() {
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
			url: 'http://127.0.0.1:8000/v1/users/authflow',
			data: JSON.stringify({
				email: EMAIL,
				password: PASS
			}),
			success: function(data) {
				if(!data) return console.error('Invalid Response from Server', data);
				if(!data.success) return console.error('Recieved success=false', data);

				var API_KEY = data.data.public+':'+data.data.secret;
				$.cookie('triton_userapikey', API_KEY);

				window.location.hash = '/dashboard';

				console.log('BUILT:', API_KEY);
			}
		})
	});

	// initialize material UI
	$.material.init()
};

if(router) {
	console.log('ui is binding to router.')

	window['ROUTER'].bind(main);
}
