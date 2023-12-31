import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  спрСотр: DS.belongsTo('i-i-s-kursovaya-rabota-2-спр-сотр', { inverse: null, async: false }),
  базДан: DS.hasMany('i-i-s-kursovaya-rabota-2-баз-дан', { inverse: 'прикрепКн', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-2-прикреп-кн.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  спрСотр: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-2-прикреп-кн.validations.спрСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  базДан: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-2-прикреп-кн.validations.базДан.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПрикрепКнE', 'i-i-s-kursovaya-rabota-2-прикреп-кн', {
    спрСотр: belongsTo('i-i-s-kursovaya-rabota-2-спр-сотр', 'Фио Сотрудника', {
      фио: attr('Фио Сотрудника', { index: 1 }),
      группа: belongsTo('i-i-s-kursovaya-rabota-2-группа', '', {
        наименование: attr('Наименование Группы', { index: 2 })
      }, { index: -1, hidden: true }),
      дисциплина: belongsTo('i-i-s-kursovaya-rabota-2-дисциплина', '', {
        наименование: attr('Наименование Дисциплины', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фио Сотрудника' }),
    базДан: hasMany('i-i-s-kursovaya-rabota-2-баз-дан', 'База Данных', {
      спрСтуд: belongsTo('i-i-s-kursovaya-rabota-2-спр-студ', 'Фио Студента', {
        фио: attr('Фио Студента', { index: 1 }),
        группа: belongsTo('i-i-s-kursovaya-rabota-2-группа', '', {
          наименование: attr('Наименование Группы', { index: 2 })
        }, { index: -1, hidden: true }),
        дисциплина: belongsTo('i-i-s-kursovaya-rabota-2-дисциплина', '', {
          наименование: attr('Наименование Дисциплины', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'фио Студента' }),
      материал: belongsTo('i-i-s-kursovaya-rabota-2-материал', 'Материал', {
        наименование: attr('Наименование Материала', { index: 5 }),
        вид: attr('Вид Материала', { index: 6 })
      }, { index: 4, displayMemberPath: 'наименование Материала' })
    })
  });

  modelClass.defineProjection('ПрикрепКнL', 'i-i-s-kursovaya-rabota-2-прикреп-кн', {
    спрСотр: belongsTo('i-i-s-kursovaya-rabota-2-спр-сотр', ' Фио Сотрудника', {
      фио: attr(' Фио Сотрудника', { index: 0 }),
      группа: belongsTo('i-i-s-kursovaya-rabota-2-группа', '', {
        наименование: attr('Наименование Группы', { index: 1 })
      }, { index: -1, hidden: true }),
      дисциплина: belongsTo('i-i-s-kursovaya-rabota-2-дисциплина', '', {
        наименование: attr('Наименование Дисциплины', { index: 2 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
