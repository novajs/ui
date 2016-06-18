/**
 * API Library for TritonJS.
 *
 * @author Jared Allard <jaredallard@outlook.com>
 * @version 1.0.0
 * @license MIT
 **/

'use strict';

var Triton = function(jQuery) {
  this.url = 'http://127.0.0.1:8000/v1';
  this.$   = jQuery || $;

  console.log('Triton API initialized.')
}


Triton.prototype.request = function(method, url, params) {
  let that = this;

  let endpoint = this.url+'/'+url;

  return new Promise(function(fulfill, reject) {
    console.log('TRITON:', method.toUpperCase(), endpoint);
    that.$.ajax({
      url: endpoint,
      method: method,
      headers: {
        'Authentication': $.cookie('triton_userapikey')
      },
      body: params,
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

Triton.prototype.get = function(url, params) {
    return this.request('get', url, params);
}

Triton.prototype.post = function(url, params) {
  return this.request('post', url, params);
}
