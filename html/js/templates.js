this["TRITON"] = this["TRITON"] || {};
this["TRITON"]["templates"] = this["TRITON"]["templates"] || {};
this["TRITON"]["templates"]["admindash"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return ((stack1 = ((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"header","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  <script type=\"text/javascript\">if(!window.isadmin) window.location.hash = '/dashboard'</script>\n  \n  <h1>Hello, admin!</h1>\n\n  <script type=\"text/javascript\">\n    /* $('.Assignment').on('click', function(elem) {\n      var json = $(this).attr('data-json');\n      $.cookie('triton_assignmentinfo', json, {\n        path: '/',\n        domain: window.API_CONFIG.domain\n      })\n      window.location.hash = '/dashboard/assignment';\n    }) */\n  </script>\n"
    + ((stack1 = ((helper = (helper = helpers.footer || (depth0 != null ? depth0.footer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"footer","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"useData":true});
this["TRITON"]["templates"]["admindash_header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"navbar navbar-default\">\n  <div>\n    <div class=\"navbar-header\">\n      <img src=\"/css/img/tbN.png\" />\n    </div>\n  </div>\n</div>\n\n<!-- UI Wrapper -->\n<div class='ui'>\n  <div class='sidebar'>\n    <div class='user-profile'>\n      <div class='user-image-dash'>\n        <img src=\""
    + alias3(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" />\n      </div>\n\n      <div class='user-info'>\n        "
    + alias3(((helper = (helper = helpers.info || (depth0 != null ? depth0.info : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"info","hash":{},"data":data}) : helper)))
    + "\n      </div>\n\n\n      <ul class='nav-links'>\n        <a id='nu' href=\"#/dashboard\"><li>Settings</li></a>\n      </ul>\n    </div>\n  </div>\n\n  <div class='content'>\n";
},"useData":true});
this["TRITON"]["templates"]["assigninfo"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.lambda, alias4=this.escapeExpression;

  return ((stack1 = ((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"header","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  <div class='settings-wrapper'>\n    <div class='settings-title'>\n      <h1 style='font-size:2em;'>"
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.assignment : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h1>\n    </div>\n\n    <br /><br />\n    <div class='assigninfo'>\n      <h3>Description</h3>\n      <p>\n        "
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.assignment : depth0)) != null ? stack1.info : stack1)) != null ? stack1.desc : stack1), depth0))
    + "\n      </p>\n\n      <h3>Created</h3>\n      <div style='display: none' id='created-before'>"
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.assignment : depth0)) != null ? stack1.created : stack1), depth0))
    + "</div>\n      <p id='created-after'></p>\n\n      <h3>Due Date</h3>\n      <p>Not Implemented</p>\n\n      <h3>Actions</h3>\n      <div class='assignopts'>\n        <button id='assignopt' class='btn btn-primary' data-action='finish' disabled>\n          Turn In\n        </button>\n\n        <button id='assignopt' class='btn btn-primary btn-danger' data-action='reset' disabled>\n          Reset\n        </button>\n      </div>\n\n      <br /><br />\n\n      <script type=\"text/javascript\">\n        var created = parseInt($('#created-before').html().replace(/\\s/g, \"\"));\n        console.log('JIT parse date:', created);\n        $('#created-after').html(new moment(created).format(\n          'MM/DD/YY'\n        ));\n\n        $('#assignopt').on('click', function() {\n          var selector = $(this).attr('data-action');\n\n          console.log('ASSIGNINFO: action ->', selector);\n          if(selector === 'reset') { // reset assignment\n\n          } else if(selector === 'finish') {\n\n          }\n        })\n      </script>\n    </div>\n  </div>\n"
    + ((stack1 = ((helper = (helper = helpers.footer || (depth0 != null ? depth0.footer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"footer","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"useData":true});
this["TRITON"]["templates"]["dash_footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "</div>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-default bottom\">\n<div class='bottom-credit pull-left'>\n  &copy; 2016 Jared Allard\n</div>\n\n<div class='actions pull-right'>\n  <a href=\"https://github.com/tritonjs\">github.com/tritonjs</a>\n</div>\n</div>\n";
},"useData":true});
this["TRITON"]["templates"]["dash_header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"navbar navbar-default\">\n  <div>\n    <div class=\"navbar-header\">\n      <img src=\"/css/img/tbN.png\" />\n    </div>\n  </div>\n</div>\n\n<!-- UI Wrapper -->\n<div class='ui'>\n  <div class='sidebar'>\n    <div class='user-profile'>\n      <div class='user-image-dash'>\n        <img src=\""
    + alias3(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" />\n      </div>\n\n      <div class='user-info'>\n        "
    + alias3(((helper = (helper = helpers.info || (depth0 != null ? depth0.info : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"info","hash":{},"data":data}) : helper)))
    + "\n      </div>\n\n\n      <ul class='nav-links'>\n        <a id='nu' href=\"#/dashboard\"><li>Assignments</li></a>\n        <a id='nu' href=\"#/dashboard/settings\"><li>Settings</li></a>\n        <a id='nu' href=\"#/contact\"><li>Contact</li></a>\n      </ul>\n    </div>\n  </div>\n\n  <div class='content'>\n";
},"useData":true});
this["TRITON"]["templates"]["dashboard"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "    <div class='Assignment' data-json=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.json : stack1), depth0))
    + "\">\n      <div class=\"recent-header\">\n        <h2>"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + "</h2>\n      </div>\n\n      <div class='recent-inner'>\n\n        <div class=\"recent-desc\">\n          "
    + alias2(alias1(((stack1 = ((stack1 = blockParams[0][0]) != null ? stack1.info : stack1)) != null ? stack1.desc : stack1), depth0))
    + "\n        </div>\n\n      </div>\n\n      <div class=\"recent-info\">\n        <a href=\"javascript:assignment('"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.id : stack1), depth0))
    + "')\">\n          <button id='assignac' class='btn btn-primary btn-block'>\n            Start\n          </button>\n        </a>\n        <span class='date'>"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.created : stack1), depth0))
    + "</span>\n      </div>\n    </div>\n";
},"3":function(depth0,helpers,partials,data) {
    return "    <h1>Failed to Obtain Assignment List</h1>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return ((stack1 = ((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"header","hash":{},"data":data,"blockParams":blockParams}) : helper))) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.assignments : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 1, blockParams),"inverse":this.program(3, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\n  <script type=\"text/javascript\">\n    /* $('.Assignment').on('click', function(elem) {\n      var json = $(this).attr('data-json');\n      $.cookie('triton_assignmentinfo', json, {\n        path: '/',\n        domain: window.API_CONFIG.domain\n      })\n      window.location.hash = '/dashboard/assignment';\n    }) */\n  </script>\n"
    + ((stack1 = ((helper = (helper = helpers.footer || (depth0 != null ? depth0.footer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"footer","hash":{},"data":data,"blockParams":blockParams}) : helper))) != null ? stack1 : "")
    + "\n";
},"useData":true,"useBlockParams":true});
this["TRITON"]["templates"]["index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class='index-wrapper'>\n  <div class='index-inner'>\n    <div class='index-head'>\n      <!-- <div class='notice'>\n        <p class='text'>\n\n        </p>\n      </div> -->\n\n      <div class='logo'>\n        <span>TRITON</span>\n      </div>\n    </div>\n\n    <div class='index-image'>\n      <div class='index-image-toolbar'>\n        <div class='toolbar-init'></div>\n        <div class='toolbar-btn toolbar-btn-red'></div>\n        <div class='toolbar-btn toolbar-btn-yellow'></div>\n        <div class='toolbar-btn toolbar-btn-green'></div>\n      </div>\n      <img src=\"/css/img/dashboard.png\" />\n    </div>\n\n    <div class='index-container'>\n      <div class='index-wrap'>\n        <div class='index-intro'>\n          <div class='index-dash'>&nbsp;</div>\n          A <i>modern</i> classroom.\n        </div>\n\n        <div class='index-btns' onclick='window.location = \"#/login\"'>\n          <div class='index-login-btn'>\n            <p>LOGIN</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class='info'>\n\n    </div>\n  </div>\n</div>\n";
},"useData":true});
this["TRITON"]["templates"]["loading"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class='loading-wrapper'>\n  <style>\n    html, body {\n      background-color: #FFFFFF;\n    }\n  </style>\n\n  <div class='loading-text'>\n    <h1>loading workspace </h1>\n    <br />\n    <h1 id='loading-text'>&nbsp;</h1>\n  </div>\n\n  <script type='text/javascript'>\n    var cnt = 0;\n    var loop = function() {\n      if(cnt == 3) cnt = 0;\n      cnt++;\n      $('#loading-text').text('.'.repeat(cnt))\n    }\n\n    // loading loop.\n    setInterval(loop, 700);\n\n    var assignment_id = localStorage.getItem('assignment_id');\n\n    console.log('I: Loading assignment -> ', assignment_id);\n\n    $.ajax({\n      type: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Authentication': $.cookie('triton_userapikey')\n      },\n      url: triton.url+'/workspaces/mine/start',\n      data: JSON.stringify({\n        id: assignment_id\n      }),\n      success: function(data) {\n        if(!data) return console.error('Invalid Response from Server', data);\n        if(!data.success) return console.error('Recieved success=false', data);\n\n        console.log('I: Workspace start, got:', data);\n\n        console.log('I: Workspace started, giving grace period.')\n        setTimeout(function() {\n          window.location.href = window.API_CONFIG.ide;\n        }, 10000)\n      }\n    })\n  </script>\n</div>\n";
},"useData":true});
this["TRITON"]["templates"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class='login'>\n  <div class=\"container\">\n\n    <div class='login-header'>\n      <img src=\"/css/img/twN.png\" />\n    </div>\n\n    <div class='login-container'>\n      <div class='user-image'>\n        <img id='login-image' src=\"/css/img/user.png\" />\n      </div>\n\n      <!-- Email Form -->\n      <form role=\"form\" class=\"form-group label-floating\" data-toggle=\"validator\">\n        <label for=\"email\" class=\"control-label\">Email</label>\n        <input id=\"login-email\" type=\"email\" class=\"form-control\" data-error=\"Email please.\" required autofocus autocomplete=\"off\">\n        <div class=\"help-block with-errors\"></div>\n      </form>\n\n      <form class=\"form-group label-floating is-empty\">\n        <label for=\"password\" class=\"control-label\">Password</label>\n        <input id=\"login-password\" type=\"password\" class=\"form-control\" required>\n      </form>\n\n      <div id='login-error' class='error has-error has-danger' style='text-align:center;display:none;'>\n        <span style='color:red;'>Invalid Credentials</span>\n      </div>\n\n      <br />\n      <button id='login-submit' class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n          Sign in\n      </button>\n\n      <br />\n    </div>\n    <div class='signup'>\n      Don't have an account?&nbsp;&nbsp;<a href=\"/#/register\" class=\"new-account\">Sign Up</a>\n    </div\n  </div>\n</div>\n\n<script type=\"text/javascript\">\n  $(\"#login-password\").keyup(function(event){\n      if(event.keyCode == 13){\n          login();\n      }\n  });\n</script>\n";
},"useData":true});
this["TRITON"]["templates"]["newassignment"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["TRITON"]["templates"]["register"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class='login'>\n  <div class=\"container\">\n\n    <div class='login-header'>\n      <img src=\"/css/img/twN.png\" />\n    </div>\n\n    <div class='login-container'>\n      <div class='login-header-text'>\n        <h2>Register</h2>\n      </div>\n\n      <!-- Email Form -->\n      <form role=\"form\" class=\"form-group label-floating\" data-toggle=\"validator\">\n        <label for=\"text\" class=\"control-label\">Display Name</label>\n        <input id=\"register-dn\" type=\"text\" class=\"form-control\" data-error=\"Required\" required autofocus autocomplete=\"off\">\n        <div class=\"help-block with-errors\"></div>\n      </form>\n\n      <form id='un-form' role=\"form\" class=\"form-group label-floating\" data-toggle=\"validator\">\n        <label for=\"text\" class=\"control-label\">Username</label>\n        <input id=\"register-un\" type=\"text\" class=\"form-control\" data-error=\"Username please.\" required autofocus autocomplete=\"off\">\n        <div class=\"help-block with-errors\"></div>\n      </form>\n\n      <form role=\"form\" class=\"form-group label-floating\" data-toggle=\"validator\">\n        <label for=\"email\" class=\"control-label\">Email</label>\n        <input id=\"register-email\" type=\"email\" class=\"form-control\" data-error=\"Email please.\" required autofocus autocomplete=\"off\">\n        <div class=\"help-block with-errors\"></div>\n      </form>\n\n      <form class=\"form-group label-floating is-empty\">\n        <label for=\"password\" class=\"control-label\">Password</label>\n        <input id=\"register-password\" type=\"password\" class=\"form-control\" required>\n      </form>\n\n      <br />\n      <button id='register-submit' class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n          Sign in\n      </button>\n    </div>\n\n    <div class='signup'>\n      No wait, I have an account!&nbsp;&nbsp;<a href=\"/#/login\" class=\"new-account\">Sign In</a>\n    </div\n  </div>\n</div>\n\n<script type=\"text/javascript\">\n  $('#register-submit').on('click', () => {\n    register();\n  });\n  $(\"#register-password\").keyup(function(event){\n      if(event.keyCode == 13){\n          register()\n      }\n  });\n\n  function errorElem(elem) {\n    elem.addClass('has-error');\n    elem.addClass('has-danger')\n    var err = ' \\\n    <ul class=\"list-unstyled\"> \\\n       <li>"
    + alias3(((helper = (helper = helpers.TEXT || (depth0 != null ? depth0.TEXT : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"TEXT","hash":{},"data":data}) : helper)))
    + "</li> \\\n    </ul> \\\n    ';\n\n    err = err.replace('"
    + alias3(((helper = (helper = helpers.TEXT || (depth0 != null ? depth0.TEXT : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"TEXT","hash":{},"data":data}) : helper)))
    + "', elem.find($('input')).attr('data-error'))\n    console.log('err:', err);\n\n    elem.find($('.help-block')).html(err)\n  }\n\n  function unerrorElem(elem) {\n    elem.removeClass('has-error');\n    elem.removeClass('has-danger');\n\n    elem.find($('.help-block')).html('')\n  }\n\n  $('#register-un').focusout(function() {\n    // validate non \\W, and check if username is available.\n    var elem   = $('#register-un');\n    var parent = $('#un-form');\n    var val    = elem.val();\n\n    if(/\\W/.test(val)) {\n      elem.attr('data-error', 'Invalid Input, A-Z0-9_ only.')\n      errorElem(parent)\n      return;\n    }\n\n    unerrorElem(parent);\n  });\n</script>\n";
},"useData":true});
this["TRITON"]["templates"]["settings"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return ((stack1 = ((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"header","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  <div class='settings-wrapper'>\n    <div class='settings-title'>\n      <h1>Settings</h1>\n    </div>\n\n    <div class='settings-options'>\n      <form class='form-group settings-option'>\n        <label class='control-label' for='setting-display_name'>Display Name</label>\n        <input id='setting-display_name' class='settings-input form-control' type='text' placeholder='"
    + alias3(((helper = (helper = helpers.display_name || (depth0 != null ? depth0.display_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"display_name","hash":{},"data":data}) : helper)))
    + "'/>\n        <div class=\"help-block with-errors\"></div>\n      </form>\n\n      <form class='form-group settings-option' data-toggle=\"validator\">\n        <label class='control-label' for='setting-email'>E-mail</label>\n        <input id='setting-email' class='settings-input form-control' type='email' placeholder='"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "'/>\n        <div class=\"help-block with-errors\"></div>\n      </form>\n\n      <form class='form-group settings-option' data-toggle=\"validator\">\n        <label class='control-label' for='setting-password'>Password</label>\n        <input id='setting-password' class='settings-input form-control' type='password' placeholder='Required: Password' required/>\n        <div class=\"help-block with-errors\"></div>\n      </form>\n\n\n      <h3>Profile Image</h3>\n      <p>Modify it on <a href=\"https://gravatar.com/\">Gravatar</a> using your email</p>\n      <br />\n\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" onclick='updateUserInfo($(\"#setting-email\"), $(\"#setting-password\"), $(\"#setting-display_name\"))'>\n          Submit\n      </button>\n    </div>\n  </div>\n"
    + ((stack1 = ((helper = (helper = helpers.footer || (depth0 != null ? depth0.footer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"footer","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"useData":true});
this["TRITON"]["templates"]["assignment-box"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class='Assignment'>\n  <div class=\"recent-header\">\n    <h2>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n  </div>\n\n  <div class='recent-inner'>\n\n    <div class=\"recent-desc\">\n      "
    + alias3(((helper = (helper = helpers['yield'] || (depth0 != null ? depth0['yield'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"yield","hash":{},"data":data}) : helper)))
    + "\n    </div>\n\n  </div>\n\n  <div class=\"recent-info\">\n    Test\n  </div>\n</div>\n";
},"useData":true});
this["TRITON"]["templates"]["dashboard-header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"navbar navbar-default\">\n  <div>\n    <div class=\"navbar-header\">\n      <img src=\"/css/img/tbN.png\" />\n    </div>\n  </div>\n</div>\n\n<!-- UI Wrapper -->\n<div class='ui'>\n  <div class='sidebar'>\n    <div class='user-profile'>\n      <div class='user-image-dash'>\n        <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.image : stack1), depth0))
    + "\" />\n      </div>\n\n      <div class='user-info'>\n        "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.display_name : stack1), depth0))
    + "\n      </div>\n\n\n      <ul class='nav-links'>\n        <li><a href=\"/dashboard\">Assignments</a></li>\n        <li><a href=\"/dashboard/settings\">Settings</a></li>\n        <li><a href=\"contact\">Contact</a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class='content'>\n    "
    + alias2(((helper = (helper = helpers['yield'] || (depth0 != null ? depth0['yield'] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"yield","hash":{},"data":data}) : helper)))
    + "\n  </div>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-default bottom\">\n  <div class='bottom-credit pull-left'>\n    &copy; 2016 Jared Allard\n  </div>\n\n  <div class='actions pull-right'>\n    <a href=\"https://github.com/tritonjs\">github.com/tritonjs</a>\n  </div>\n</div>\n";
},"useData":true});