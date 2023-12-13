import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-2-спр-студ', 'Unit | Serializer | i-i-s-kursovaya-rabota-2-спр-студ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-rabota-2-спр-студ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-kursovaya-rabota-2-баз-дан',
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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
