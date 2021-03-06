/**
 * Page Router.
 *
 * @author Jared Allard <jaredallard@outlook.com>
 * @version 1.0.0
 * @license MIT
 **/

'use strict';

class Route {
  constructor(path, use) {
    console.log('constructed a new route');

    if(path) this._path  = path;
    if(use) this._code   = use;
  }

  use(use) {
    this._code = use;
  }

  path(path) {
    this._path = path;
  }
}

class Router {
  constructor() {
    console.log('constructed router.');

    this.active = false;
    this.routes = [];
    this.binds  = [];
  }

  hook() {
    this.active = true;
    console.log('router hooked into page.');

    let resolver = () => {
      console.log('router: started pace');

      let page = document.location.hash.replace(/^#/, '');
      if(page === '') page = '/'; // check for non-existent index route.

      console.log('router: page ->', page);

      $('#dom').css('background', '#FFFFFF');
      $('#dom').html('')

      let i = 0;
      this.routes.forEach(p => {

        if(p.path !== page) return;

        console.log('router: page hit on index:', i);
        console.log('router: route ->', p);

        // TODO: This is a race condition; fix.
        p.code(() => {
          // done state.
          $(document).ready(() => {
            console.log('router: finished loading anything');

            console.log('router: executing bind(s)')
            this.binds.forEach(b => {
              b.code();
            });

            Pace.stop();
          })
        });

        i++;
      });
    };

    window.onhashchange = () => {
      Pace.start({
        document: false
      });

      resolver();
    }

    resolver();
  }

  isActive() {
    return this.active;
  }

  use(route) {
    if(!route._path || !route._code) {
      return false;
    }

    this.routes.push({
      path: route._path,
      code: route._code,
      object: route
    });

    console.log('registered route', route._path, 'onto Router');
  }

  /**-
   * Add to the changed queue, which runs each time a page is loaded.
   **/
  bind(code) {
    this.binds.push({
      code: code
    });

    console.log('router: new bind added, total:', this.binds.length);
  }
}

let triton = new Triton($)


let router = new Router();

let login  = new Route('/login');
login.use(done => {
  if($.cookie('triton_userapikey')) {
    console.log('LOGIN: already set cookie, go ahead...');
    return window.location.hash = '/dashboard';
  }

  $('#dom').html(TRITON.templates["login"]());

  return done();
})

let register  = new Route('/register');
register.use(done => {
  $('#dom').html(TRITON.templates["register"]());

  return done();
})

let index  = new Route('/');
index.use(done => {
  $('#dom').html(TRITON.templates["index"]());
  return done();
});

let dash   = new Route('/dashboard');
dash.use(done => {
  if(!$.cookie('triton_userapikey')) {
    return window.location.hash = '/login';
  }

  triton.get('users').then((data) => {
    let image = gravatar(data.email, {
      size: 200
    })
    let info  = data.display_name;

    triton.get('assignments/list').then(ASL => {
      ASL.forEach(assignment => {
        let date = assignment.created;

        let created = new moment(assignment.created).format(
          'MM/DD/YY'
        );
        console.log('eval date to', created)

        assignment.json    = JSON.stringify(assignment);
        assignment.created = created;
      })

      // still feeling the pain of missing Ember.js while hating it. Hmmmm...
      $('#dom').html(TRITON.templates["dashboard"]({
        header: TRITON.templates["dash_header"]({
          image: image,
          info: info
        }),
        assignments: ASL,
        footer: TRITON.templates["dash_footer"]()
      }));

      return done();
    });
  });
});

let sett   = new Route('/dashboard/settings');
sett.use(done => {
  triton.get('users').then((data) => {
    let image = gravatar(data.email, {
      size: 200
    })
    let info  = data.display_name;

    $('#dom').html(TRITON.templates["settings"]({
      header: TRITON.templates["dash_header"]({
        image: image,
        info: info
      }),
      footer: TRITON.templates["dash_footer"](),
      display_name: data.display_name,
      email: data.email
    }));

    return done();
  });
});

let logout = new Route('/dashboard/logout');
logout.use(done => {
  triton.invalidateCache('assignments/list');

  $.removeCookie('triton_userapikey', {
    path: '/',
    domain: window.API_CONFIG.cdomain
  });
  $.removeCookie('triton_username',  {
    path: '/',
    domain: window.API_CONFIG.cdomain
  })
  $.removeCookie('triton_isadmin');

  window.location.href = '/';

  console.log('DEBUG: cdomain ->', window.API_CONFIG.cdomain);
  console.log('LOGIN: Logged out current user');

  return done();
});

let loading = new Route('/workspace');
loading.use(done => {
  $('#dom').html(TRITON.templates["loading"]());

  return done();
})

let assigninfo = new Route('/dashboard/assignment');
assigninfo.use(done => {
  if(!$.cookie('triton_assignmentinfo')) {
    return window.location.hash = '/dashboard';
  }

  var assignment;

  // prevent fail from ruining *everything*
  try {
    assignment = JSON.parse($.cookie('triton_assignmentinfo'));
  } catch(err) {
    $.cookie('triton_assignmentinfo', undefined);
    return window.location.hash = '/dashboard';
  }
  triton.get('users').then((data) => {
    let image = gravatar(data.email, {
      size: 200
    })
    let info  = data.display_name;

    $('#dom').html(TRITON.templates["assigninfo"]({
      header: TRITON.templates["dash_header"]({
        image: image,
        info: info
      }),
      footer: TRITON.templates["dash_footer"](),
      assignment: assignment
    }));

    return done();
  });
});

let admindash   = new Route('/admin');
admindash.use(done => {
  triton.get('users').then(data => {
    console.log('users:', data);
    let image = gravatar(data.email, {
      size: 200
    })
    let info  = data.display_name;

    $('#dom').html(TRITON.templates["admindash"]({
      header: TRITON.templates["admindash_header"]({
        image: image,
        info: info
      }),
      name: data.display_name.split(' ')[0],
      footer: TRITON.templates["dash_footer"]()
    }));

    return done();
  });
});

router.use(index);
router.use(login);
router.use(dash);
router.use(admindash);
router.use(sett);
router.use(logout);
router.use(loading);
router.use(register);
router.use(assigninfo);


window['ROUTER'] = router;

router.hook();
