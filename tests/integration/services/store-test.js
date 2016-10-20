import { moduleFor, test } from 'ember-qunit';

import Pretender from 'pretender';

function json(data) {
  return [200, {}, JSON.stringify(data)];
};

moduleFor('service:store', 'Integration | Service | store', {
  integration:true
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();

  this.server = new Pretender();
  this.server.get('/users/me', () => {
    return json({
      data: {
        type: 'user',
        id: '1'
      }
    });
  });
  Ember.run(() => {
    let user = service.findRecord('user', 'me').then(() => {
      let recordIdMap = service.typeMapFor('user').idToRecord;
      service.peekRecord('user', 'me');
    });
  });
});
