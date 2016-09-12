this["TRITON"] = this["TRITON"] || {};
this["TRITON"]["templates"] = this["TRITON"]["templates"] || {};
this["TRITON"]["templates"]["dash_footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "</div>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-default bottom\">\n<div class='bottom-credit pull-left'>\n  &copy; 2016 Jared Allard\n</div>\n\n<div class='actions pull-right'>\n  <a href=\"https://github.com/tritonjs\">github.com/tritonjs</a>\n</div>\n</div>\n";
},"useData":true});
this["TRITON"]["templates"]["dash_header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"navbar navbar-default\">\n  <div>\n    <div class=\"navbar-header\">\n      <img src=\"/css/img/tbN.png\" />\n    </div>\n  </div>\n</div>\n\n<!-- UI Wrapper -->\n<div class='ui'>\n  <div class='sidebar'>\n    <div class='user-profile'>\n      <div class='user-image-dash'>\n        <img src=\""
    + alias3(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" />\n      </div>\n\n      <div class='user-info'>\n        "
    + alias3(((helper = (helper = helpers.info || (depth0 != null ? depth0.info : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"info","hash":{},"data":data}) : helper)))
    + "\n      </div>\n\n\n      <ul class='nav-links'>\n        <li><a href=\"#/dashboard\">Assignments</a></li>\n        <li><a href=\"#/dashboard/settings\">Settings</a></li>\n        <li><a href=\"#/contact\">Contact</a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class='content'>\n";
},"useData":true});
this["TRITON"]["templates"]["dashboard"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "    <div class='Assignment'>\n      <div class=\"recent-header\">\n        <h2>"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + "</h2>\n      </div>\n\n      <div class='recent-inner'>\n\n        <div class=\"recent-desc\">\n          "
    + alias2(alias1(((stack1 = ((stack1 = blockParams[0][0]) != null ? stack1.info : stack1)) != null ? stack1.desc : stack1), depth0))
    + "\n        </div>\n\n      </div>\n\n      <div class=\"recent-info\">\n\n      </div>\n    </div>\n";
},"3":function(depth0,helpers,partials,data) {
    return "    <h1>Failed to Obtain Assignment List</h1>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return ((stack1 = ((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"header","hash":{},"data":data,"blockParams":blockParams}) : helper))) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.assignments : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 1, blockParams),"inverse":this.program(3, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ((stack1 = ((helper = (helper = helpers.footer || (depth0 != null ? depth0.footer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"footer","hash":{},"data":data,"blockParams":blockParams}) : helper))) != null ? stack1 : "")
    + "\n";
},"useData":true,"useBlockParams":true});
this["TRITON"]["templates"]["index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class='index-wrapper'>\n  <div class='index-inner'>\n    <div class='index-head'>\n      <div class='logo'>\n        <span>TRITON</span>\n      </div>\n    </div>\n\n    <div class='index-image'>\n      <div class='index-image-toolbar'>\n        <div class='toolbar-init'></div>\n        <div class='toolbar-btn toolbar-btn-red'></div>\n        <div class='toolbar-btn toolbar-btn-yellow'></div>\n        <div class='toolbar-btn toolbar-btn-green'></div>\n      </div>\n      <img src=\"/css/img/dashboard.png\" />\n    </div>\n\n    <div class='index-container'>\n      <div class='index-wrap'>\n        <div class='index-intro'>\n          <div class='index-dash'>&nbsp;</div>\n          A <i>modern</i> classroom.\n        </div>\n\n        <div class='index-btns' onclick='window.location = \"#/login\"'>\n          <div class='index-login-btn'>\n            <p>LOGIN</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class='info'>\n\n    </div>\n  </div>\n</div>\n";
},"useData":true});
this["TRITON"]["templates"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class='login'>\n  <div class=\"container\">\n\n    <div class='login-header'>\n      <img src=\"/css/img/twN.png\" />\n    </div>\n\n    <div class='login-container'>\n      <div class='user-image'>\n        <img id='login-image' src=\"/css/img/user.png\" />\n      </div>\n\n      <!-- Email Form -->\n      <form role=\"form\" class=\"form-group label-floating\" data-toggle=\"validator\">\n        <label for=\"email\" class=\"control-label\">Email</label>\n        <input id=\"login-email\" type=\"email\" class=\"form-control\" data-error=\"Email please.\" required autofocus autocomplete=\"off\">\n        <div class=\"help-block with-errors\"></div>\n      </form>\n\n      <form class=\"form-group label-floating is-empty\">\n        <label for=\"password\" class=\"control-label\">Password</label>\n        <input id=\"login-password\" type=\"password\" class=\"form-control\" required>\n      </form>\n\n      <br />\n      <button id='login-submit' class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n          Sign in\n      </button>\n\n      <br />\n    </div>\n    <div class='signup'>\n      Don't have an account?&nbsp;&nbsp;<a href=\"/register\" class=\"new-account\">Sign Up</a>\n    </div\n  </div>\n</div>\n";
},"useData":true});
this["TRITON"]["templates"]["newassignment"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["TRITON"]["templates"]["settings"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return ((stack1 = ((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"header","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  <div class='settings-wrapper'>\n    <div class='settings-title'>\n      <h1>Settings</h1>\n    </div>\n\n    <div class='settings-options'>\n      <form class='form-group settings-option'>\n        <label class='control-label' for='setting-display_name'>Display Name</label>\n        <input id='setting-display_name' class='settings-input form-control' type='text' placeholder='"
    + alias3(((helper = (helper = helpers.display_name || (depth0 != null ? depth0.display_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"display_name","hash":{},"data":data}) : helper)))
    + "'/>\n        <div class=\"help-block with-errors\"></div>\n      </form>\n\n      <form class='form-group settings-option' data-toggle=\"validator\">\n        <label class='control-label' for='setting-email'>E-mail</label>\n        <input id='setting-email' class='settings-input form-control' type='email' placeholder='"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "'/>\n        <div class=\"help-block with-errors\"></div>\n      </form>\n\n      <form class='form-group settings-option' data-toggle=\"validator\">\n        <label class='control-label' for='setting-password'>Password</label>\n        <input id='setting-password' class='settings-input form-control' type='password' placeholder='Required: Password' required/>\n        <div class=\"help-block with-errors\"></div>\n      </form>\n\n      <br />\n\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" onclick='updateUserInfo($(\"#setting-email\"), $(\"#setting-password\"), $(\"#setting-display_name\"))'>\n          Submit\n      </button>\n    </div>\n  </div>\n"
    + ((stack1 = ((helper = (helper = helpers.footer || (depth0 != null ? depth0.footer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"footer","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"useData":true});
this["TRITON"]["templates"]["assignment-box"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class='Assignment'>\n  <div class=\"recent-header\">\n    <h2>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n  </div>\n\n  <div class='recent-inner'>\n\n    <div class=\"recent-desc\">\n      "
    + alias3(((helper = (helper = helpers['yield'] || (depth0 != null ? depth0['yield'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"yield","hash":{},"data":data}) : helper)))
    + "\n    </div>\n\n  </div>\n\n  <div class=\"recent-info\">\n\n  </div>\n</div>\n";
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