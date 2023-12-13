import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фио: DS.attr('string'),
  группа: DS.belongsTo('i-i-s-kursovaya-rabota-2-группа', { inverse: null, async: false }),
  дисциплина: DS.belongsTo('i-i-s-kursovaya-rabota-2-дисциплина', { inverse: null, async: false }),
  должность: DS.belongsTo('i-i-s-kursovaya-rabota-2-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  фио: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-2-спр-сотр.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  группа: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-2-спр-сотр.validations.группа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  дисциплина: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-2-спр-сотр.validations.дисциплина.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-2-спр-сотр.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрСотрE', 'i-i-s-kursovaya-rabota-2-спр-сотр', {
    фио: attr('Фио Сотрудника', { index: 0 }),
    должность: belongsTo('i-i-s-kursovaya-rabota-2-должность', 'Должность', {
      наименование: attr('Должность', { index: 2 })
    }, { index: 1 }),
    группа: belongsTo('i-i-s-kursovaya-rabota-2-группа', 'Наименование Группы', {
      наименование: attr('Наименование Группы', { index: 4 })
    }, { index: 3 }),
    дисциплина: belongsTo('i-i-s-kursovaya-rabota-2-дисциплина', 'Наименование дисциплины', {
      наименование: attr('Наименование дисциплины', { index: 6 })
    }, { index: 5 })
  });

  modelClass.defineProjection('СпрСотрL', 'i-i-s-kursovaya-rabota-2-спр-сотр', {
    фио: attr('Фио Сотрудника', { index: 0 }),
    должность: belongsTo('i-i-s-kursovaya-rabota-2-должность', 'Должность', {
      наименование: attr('Должность', { index: 1 })
    }, { index: -1, hidden: true }),
    группа: belongsTo('i-i-s-kursovaya-rabota-2-группа', 'Наименование группы', {
      наименование: attr('Наименование группы', { index: 2 })
    }, { index: -1, hidden: true }),
    дисциплина: belongsTo('i-i-s-kursovaya-rabota-2-дисциплина', 'Наименование дисциплины', {
      наименование: attr('Наименование дисциплины', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
