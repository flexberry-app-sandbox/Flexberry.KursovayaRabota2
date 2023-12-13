import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('date'),
  спрСтуд: DS.belongsTo('i-i-s-kursovaya-rabota-2-спр-студ', { inverse: null, async: false }),
  прикрепКн: DS.belongsTo('i-i-s-kursovaya-rabota-2-прикреп-кн', { inverse: 'базДан', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-2-баз-дан.validations.время.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  спрСтуд: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-2-баз-дан.validations.спрСтуд.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  прикрепКн: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-2-баз-дан.validations.прикрепКн.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БазДанE', 'i-i-s-kursovaya-rabota-2-баз-дан', {
    спрСтуд: belongsTo('i-i-s-kursovaya-rabota-2-спр-студ', 'Фио Студента', {
      фио: attr('Фио Студента', { index: 1 }),
      группа: belongsTo('i-i-s-kursovaya-rabota-2-группа', '', {
        наименование: attr('Наименование Группы', { index: 2 })
      }, { index: -1, hidden: true }),
      дисциплина: belongsTo('i-i-s-kursovaya-rabota-2-дисциплина', '', {
        наименование: attr('Наименование Дисциплины', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фио Студента' })
  });
};
