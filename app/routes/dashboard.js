import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let triton = new Triton(Ember.$)
    return triton.get('users').then(function(data) {
      if(!data.success) {
        return console.error('API Reported Error', data);
      }

      // hotlink.
      data = data.data;

      data.image = 'http://www.gravatar.com/avatar/' + md5(data.email);
      return data;
    });
  }
});
