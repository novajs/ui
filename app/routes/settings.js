import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let triton = new Triton(Ember.$)
    return triton.get('users').then(function(data) {
      data.image = 'https://www.gravatar.com/avatar/' + md5(data.email);

      return data;
    });
  }
});
