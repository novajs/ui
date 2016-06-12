import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: 'http://127.0.0.1:8000',
  namespace: 'v1',
  headers: Ember.computed(() => {
    return {
      'Authentication': Ember.get(document.cookie.match(/apiKey\=([^;]*)/), '1'),
      'ANOTHER_HEADER': 'Some header value'
    };
  }).volatile()
});
