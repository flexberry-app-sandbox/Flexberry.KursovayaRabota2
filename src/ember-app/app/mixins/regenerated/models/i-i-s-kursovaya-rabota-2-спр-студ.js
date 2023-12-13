import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фио: DS.attr('string'),
  группа: DS.belongsTo('i-i-s-kursovaya-rabota-2-группа', { inverse: null, async: false }),
  дисциплина: DS.belongsTo('i-i-s-kursovaya-rabota-2-дисциплина', { inverse: null, async: false })
});

export let ValidationRules = {
  фио: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-2-спр-студ.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  группа: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-2-спр-студ.validations.группа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  дисциплина: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-2-спр-студ.validations.дисциплина.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрСтудE', 'i-i-s-kursovaya-rabota-2-спр-студ', {
    фио: attr('Фио Студента', { index: 0 }),
    группа: belongsTo('i-i-s-kursovaya-rabota-2-группа', 'Наименование Группы', {
      наименование: attr('Наименование Группы', { index: 2 })
    }, { index: 1 }),
    дисциплина: belongsTo('i-i-s-kursovaya-rabota-2-дисциплина', 'Наименование Дисциплины ', {
      наименование: attr('Наименование Дисциплины ', { index: 4 })
    }, { index: 3 })
  });

  modelClass.defineProjection('СпрСтудL', 'i-i-s-kursovaya-rabota-2-спр-студ', {
    фио: attr('Фио Студента', { index: 0 }),
    группа: belongsTo('i-i-s-kursovaya-rabota-2-группа', 'Наименование Группы', {
      наименование: attr('Наименование Группы', { index: 1 })
    }, { index: -1, hidden: true }),
    дисциплина: belongsTo('i-i-s-kursovaya-rabota-2-дисциплина', 'Наименование Дисциплины', {
      наименование: attr('Наименование Дисциплины', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
