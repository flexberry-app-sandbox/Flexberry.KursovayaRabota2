import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-2-спр-студ', 'Unit | Model | i-i-s-kursovaya-rabota-2-спр-студ', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya-rabota-2-группа',
    'model:i-i-s-kursovaya-rabota-2-дисциплина',
    'model:i-i-s-kursovaya-rabota-2-должность',
    'model:i-i-s-kursovaya-rabota-2-прикреп-кн',
    'model:i-i-s-kursovaya-rabota-2-спр-сотр',
    'model:i-i-s-kursovaya-rabota-2-спр-студ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
