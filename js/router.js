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
      Pace.start();

      let page = document.location.hash.replace(/^#/, '');

      console.log('router: page ->', page);

      $('#dom').css('background', '#FFFFFF');
      if(page !== '/login') {
        $('#bg-stars').hide();
      } else {
        $('#bg-stars').show();
      }

      let i = 0;
      this.routes.forEach(p => {

        if(p.path !== page) return;

        console.log('router: page hit on index:', i)
        console.log('router: route ->', p);-

        p.code();

        i++;
      });

      $(document).ready(() => {
        console.log('router: finished loading anything');

        console.log('router: executing bind(s)')
        this.binds.forEach(b => {
          b.code();
        });

        Pace.stop();
      })
    };

    window.onhashchange = resolver;

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
login.use(() => {
  $('#dom').css('background', "url('/css/img/bg-main.png')")
  $('#dom').html(TRITON.templates["login"]());
})

let index  = new Route('/');
index.use(() => {
  $('#dom').html(TRITON.templates["index"]());
});

let dash   = new Route('/dashboard');
dash.use(() => {
  triton.get('users').then((data) => {
    let image = 'http://www.gravatar.com/avatar/' + md5(data.email);
    let info  = data.display_name;

    triton.get('assignments/list').then(function(ASL) {
      // still feeling the pain of missing Ember.js while hating it. Hmmmm...
      $('#dom').html(TRITON.templates["dashboard"]({
        header: TRITON.templates["dash_header"]({
          image: image,
          info: info
        }),
        assignments: ASL,
        footer: TRITON.templates["dash_footer"]()
      }));
    });
  });
});

let sett   = new Route('/dashboard/settings');
sett.use(() => {
  triton.get('users').then((data) => {
    let image = 'http://www.gravatar.com/avatar/' + md5(data.email);
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
  });
});

let logout = new Route('/dashboard/logout');
logout.use(() => {
  triton.invalidateCache('assignments/list');

  $.cookie('triton_userapikey', undefined);

  window.location = '/';

  console.log('logged out user');
});

router.use(index);
router.use(login);
router.use(dash);
router.use(sett);
router.use(logout);

window['ROUTER'] = router;

router.hook();
