import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фио: DS.attr('string')
});

export let ValidationRules = {
  фио: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-2-спр-студ.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрСтудE', 'i-i-s-kursovaya-rabota-2-спр-студ', {
    фио: attr('Фио Студента', { index: 0 })
  });

  modelClass.defineProjection('СпрСтудL', 'i-i-s-kursovaya-rabota-2-спр-студ', {
    фио: attr('Фио Студента', { index: 0 })
  });
};
