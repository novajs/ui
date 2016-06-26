/**
 * API Library for TritonJS.
 *
 * @author Jared Allard <jaredallard@outlook.com>
 * @version 1.0.0
 * @license MIT
 **/

'use strict';


class Triton {
  constructor(jQuery) {
    if(typeof window.API_CONFIG === 'object') {
      this.url = window.API_CONFIG.host.replace(/\/$/g, '')+'/v'+window.API_CONFIG.version

      console.log('TRITON: #API_CONFIG ->', this.url);
    }

    this.url = 'http://127.0.0.1:8000/v1';
    this.$   = jQuery || $;

    console.log('Triton API initialized.')
  }

  request(method, url, params) {
    let that = this;

    if(!params) {
      params = {};
    }

    let endpoint = this.url+'/'+url;

    return new Promise(function(fulfill, reject) {
      console.log('TRITON:', method.toUpperCase(), endpoint);

      let reqopts = {
        url: endpoint,
        method: method,
        headers: {
          'Authentication': $.cookie('triton_userapikey')
        },
        cache: false,
        success: function(data) {
          if(!data.success) {
            return console.error('API Reported Error', data);
          }

          // hotlink.
          data = data.data;

          // add to cache.
          that.setCache(url, data);

          return fulfill(data);
        },
        failure: function(xhr, status, err) {
          console.error(that.url, status, err.toString());
          return reject(err)
        }
      };

      if(method !== 'get') {
        console.log('triton: modifying reqopts to use JSON as data.')
        reqopts.data = params
        reqopts.dataType = 'json';
      }

      that.$.ajax(reqopts);
    })
  }

  post(url, params) {
    return this.request('post', url, params);
  }

  get(url, params) {
    if(this.isCached(url)) {
      return this.getCache(url);
    }

    return this.request('get', url, params);
  }

  setCache(ENDPOINT, data) {
    console.log('TRITON: CACHED ->', ENDPOINT);

    var PARSED = JSON.stringify(data);
    localStorage.setItem('cached_endpoint_'+encodeURIComponent(ENDPOINT), PARSED);
  }

  getCache(ENDPOINT) {
    console.log('TRITON: USE CACHE ->', ENDPOINT);

    return new Promise(function(fulfill, reject) {
      var loc = localStorage.getItem('cached_endpoint_'+encodeURIComponent(ENDPOINT));
      var PARSED = JSON.parse(loc);
      return fulfill(PARSED);
    });
  }

  invalidateCache(ENDPOINT) {
    localStorage.removeItem('cached_endpoint_'+encodeURIComponent(ENDPOINT));
  }

  isCached(ENDPOINT) {
    if(!localStorage.getItem('cached_endpoint_'+encodeURIComponent(ENDPOINT))) return false;
    return true;
  }
}
