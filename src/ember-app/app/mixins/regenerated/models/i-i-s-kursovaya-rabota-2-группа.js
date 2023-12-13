import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-2-группа.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГруппаE', 'i-i-s-kursovaya-rabota-2-группа', {
    наименование: attr('Наименование Группы', { index: 0 })
  });

  modelClass.defineProjection('ГруппаL', 'i-i-s-kursovaya-rabota-2-группа', {
    наименование: attr('Наименование Группы', { index: 0 })
  });
};
