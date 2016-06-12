/**
 * Work with the NovaJS API.
 *
 * Not going to lie, I *really* hate frontend development.
 **/

import Ember from 'ember';

export function api(params/*, hash*/) {
  return params;
}

export default Ember.Helper.helper(api);

'use strict';

var NovaJS = function() {
  this.url = 'http://127.0.0.1:8000/v1';

  console.log('NovaJS initialized.')
  console.log('URL:', this.url);
}

NovaJS.prototype.request = function(METHOD, URL, PARAMS) {
  let that = this;
  return new Promise(function(fulfill, reject) {
    $.ajax({
      url: that.url+'/'+URL,
      method: METHOD,
      body: PARAMS,
      dataType: 'json',
      cache: false,
      success: function(data) {
        return fulfill(data);
      },
      failure: function(xhr, status, err) {
        console.error(that.url, status, err.toString());
        return reject(err)
      }
    });
  })
}

NovaJS.prototype.get     = function(URL, PARAMS) {
  return this.request('GET', URL, PARAMS);
}

NovaJS.prototype.post    = function(URL, PARAMS) {
  return this.request('POST', URL, PARAMS);
}



var novajs = new NovaJS();
