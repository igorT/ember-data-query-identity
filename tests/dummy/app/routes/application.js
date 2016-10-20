import Ember from 'ember';


export default Ember.Route.extend({

  model() {
    let hi  = this.get('store').hello;
    debugger

  }
});
