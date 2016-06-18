![Triton](https://github.com/tritonjs/ui/raw/master/public/css/img/tb.png)

User Interface for a Modern Open Source Classroom.

## TODO

* [ ] Create Settings Dialog, implement ontop of /v1/user/update
* [ ] Create Assignment management UI.
* [ ] Polish the dashboard UI, try to theme it more.
* [ ] To the stars when moving to workspace.
* [ ] Write UI tests.


## Prerequisites

You will need the following things properly installed on your computer for UI development.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/tritonjs/ui`
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* App is running at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

App should, by default, access the backend on http://127.0.0.1:8000. Modify application
adapter if you have any changes (or for deployment until we finish something to
manage this).

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
