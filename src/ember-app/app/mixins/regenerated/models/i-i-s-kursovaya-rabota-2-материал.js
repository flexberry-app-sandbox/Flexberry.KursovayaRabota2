import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  вид: DS.attr('i-i-s-kursovaya-rabota-2-вид'),
  наименование: DS.attr('string'),
  дисциплина: DS.belongsTo('i-i-s-kursovaya-rabota-2-дисциплина', { inverse: null, async: false })
});

export let ValidationRules = {
  вид: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-2-материал.validations.вид.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-2-материал.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дисциплина: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-2-материал.validations.дисциплина.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МатериалE', 'i-i-s-kursovaya-rabota-2-материал', {
    наименование: attr('Название', { index: 0 }),
    вид: attr('Вид учебного материала', { index: 1 }),
    дисциплина: belongsTo('i-i-s-kursovaya-rabota-2-дисциплина', 'Наименование Дисциплины', {
      наименование: attr('Наименование Дисциплины', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('МатериалL', 'i-i-s-kursovaya-rabota-2-материал', {
    наименование: attr('Название', { index: 0 }),
    вид: attr('Вид учебного материала', { index: 1 }),
    дисциплина: belongsTo('i-i-s-kursovaya-rabota-2-дисциплина', 'Наименование дисциплины', {
      наименование: attr('Наименование дисциплины', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
