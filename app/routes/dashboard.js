import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:8000/v1/users',
      headers: {
        'Authentication': $.cookie('triton_userapikey')
      }
    }).then(function(data) {
      if(!data.success) return console.error('API Reported Error', data);

      // hotlink.
      data = data.data;

      data.image = 'http://www.gravatar.com/avatar/' + md5(data.email);
      return data;
    });
  }
});
