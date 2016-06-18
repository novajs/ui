import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let triton = new Triton(Ember.$)
    return triton.get('users').then(function(data) {
      data.image = 'http://www.gravatar.com/avatar/' + md5(data.email);

      return triton.get('assignments/list').then(function(ASL) {
        data.assignments = ASL;

        console.log('GOT', data.assignments);
        return data;
      })
    });
  }
});
