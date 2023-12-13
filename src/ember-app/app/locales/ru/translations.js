import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovaya_Rabota_2ГруппаLForm from './forms/i-i-s-kursovaya-rabota-2-группа-l';
import IISKursovaya_Rabota_2ДисциплинаLForm from './forms/i-i-s-kursovaya-rabota-2-дисциплина-l';
import IISKursovaya_Rabota_2ДолжностьLForm from './forms/i-i-s-kursovaya-rabota-2-должность-l';
import IISKursovaya_Rabota_2МатериалLForm from './forms/i-i-s-kursovaya-rabota-2-материал-l';
import IISKursovaya_Rabota_2ПрикрепКнLForm from './forms/i-i-s-kursovaya-rabota-2-прикреп-кн-l';
import IISKursovaya_Rabota_2СпрСотрLForm from './forms/i-i-s-kursovaya-rabota-2-спр-сотр-l';
import IISKursovaya_Rabota_2СпрСтудLForm from './forms/i-i-s-kursovaya-rabota-2-спр-студ-l';
import IISKursovaya_Rabota_2ГруппаEForm from './forms/i-i-s-kursovaya-rabota-2-группа-e';
import IISKursovaya_Rabota_2ДисциплинаEForm from './forms/i-i-s-kursovaya-rabota-2-дисциплина-e';
import IISKursovaya_Rabota_2ДолжностьEForm from './forms/i-i-s-kursovaya-rabota-2-должность-e';
import IISKursovaya_Rabota_2МатериалEForm from './forms/i-i-s-kursovaya-rabota-2-материал-e';
import IISKursovaya_Rabota_2ПрикрепКнEForm from './forms/i-i-s-kursovaya-rabota-2-прикреп-кн-e';
import IISKursovaya_Rabota_2СпрСотрEForm from './forms/i-i-s-kursovaya-rabota-2-спр-сотр-e';
import IISKursovaya_Rabota_2СпрСтудEForm from './forms/i-i-s-kursovaya-rabota-2-спр-студ-e';
import IISKursovaya_Rabota_2БазДанModel from './models/i-i-s-kursovaya-rabota-2-баз-дан';
import IISKursovaya_Rabota_2ГруппаModel from './models/i-i-s-kursovaya-rabota-2-группа';
import IISKursovaya_Rabota_2ДисциплинаModel from './models/i-i-s-kursovaya-rabota-2-дисциплина';
import IISKursovaya_Rabota_2ДолжностьModel from './models/i-i-s-kursovaya-rabota-2-должность';
import IISKursovaya_Rabota_2МатериалModel from './models/i-i-s-kursovaya-rabota-2-материал';
import IISKursovaya_Rabota_2ПрикрепКнModel from './models/i-i-s-kursovaya-rabota-2-прикреп-кн';
import IISKursovaya_Rabota_2СпрСотрModel from './models/i-i-s-kursovaya-rabota-2-спр-сотр';
import IISKursovaya_Rabota_2СпрСтудModel from './models/i-i-s-kursovaya-rabota-2-спр-студ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-rabota-2-баз-дан': IISKursovaya_Rabota_2БазДанModel,
    'i-i-s-kursovaya-rabota-2-группа': IISKursovaya_Rabota_2ГруппаModel,
    'i-i-s-kursovaya-rabota-2-дисциплина': IISKursovaya_Rabota_2ДисциплинаModel,
    'i-i-s-kursovaya-rabota-2-должность': IISKursovaya_Rabota_2ДолжностьModel,
    'i-i-s-kursovaya-rabota-2-материал': IISKursovaya_Rabota_2МатериалModel,
    'i-i-s-kursovaya-rabota-2-прикреп-кн': IISKursovaya_Rabota_2ПрикрепКнModel,
    'i-i-s-kursovaya-rabota-2-спр-сотр': IISKursovaya_Rabota_2СпрСотрModel,
    'i-i-s-kursovaya-rabota-2-спр-студ': IISKursovaya_Rabota_2СпрСтудModel
  },

  'application-name': 'Kursovaya_ rabota_2',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya_ rabota_2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya_ rabota_2',
          title: 'Kursovaya_ rabota_2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'kursovaya-rabota-2': {
          caption: 'Kursovaya_Rabota_2',
          title: 'Kursovaya_Rabota_2',
          'i-i-s-kursovaya-rabota-2-должность-l': {
            caption: 'Справочник Должности',
            title: ''
          },
          'i-i-s-kursovaya-rabota-2-спр-сотр-l': {
            caption: 'Справочник Сотрудники',
            title: ''
          },
          'i-i-s-kursovaya-rabota-2-группа-l': {
            caption: 'Справочник Группы',
            title: ''
          },
          'i-i-s-kursovaya-rabota-2-дисциплина-l': {
            caption: 'Справочник Дисциплины',
            title: ''
          },
          'i-i-s-kursovaya-rabota-2-спр-студ-l': {
            caption: 'Справочник Студенты',
            title: ''
          },
          'i-i-s-kursovaya-rabota-2-прикреп-кн-l': {
            caption: 'Функция: Прикрепление методических материалов на курс',
            title: ''
          },
          'i-i-s-kursovaya-rabota-2-материал-l': {
            caption: 'Учебный материал',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovaya-rabota-2-группа-l': IISKursovaya_Rabota_2ГруппаLForm,
    'i-i-s-kursovaya-rabota-2-дисциплина-l': IISKursovaya_Rabota_2ДисциплинаLForm,
    'i-i-s-kursovaya-rabota-2-должность-l': IISKursovaya_Rabota_2ДолжностьLForm,
    'i-i-s-kursovaya-rabota-2-материал-l': IISKursovaya_Rabota_2МатериалLForm,
    'i-i-s-kursovaya-rabota-2-прикреп-кн-l': IISKursovaya_Rabota_2ПрикрепКнLForm,
    'i-i-s-kursovaya-rabota-2-спр-сотр-l': IISKursovaya_Rabota_2СпрСотрLForm,
    'i-i-s-kursovaya-rabota-2-спр-студ-l': IISKursovaya_Rabota_2СпрСтудLForm,
    'i-i-s-kursovaya-rabota-2-группа-e': IISKursovaya_Rabota_2ГруппаEForm,
    'i-i-s-kursovaya-rabota-2-дисциплина-e': IISKursovaya_Rabota_2ДисциплинаEForm,
    'i-i-s-kursovaya-rabota-2-должность-e': IISKursovaya_Rabota_2ДолжностьEForm,
    'i-i-s-kursovaya-rabota-2-материал-e': IISKursovaya_Rabota_2МатериалEForm,
    'i-i-s-kursovaya-rabota-2-прикреп-кн-e': IISKursovaya_Rabota_2ПрикрепКнEForm,
    'i-i-s-kursovaya-rabota-2-спр-сотр-e': IISKursovaya_Rabota_2СпрСотрEForm,
    'i-i-s-kursovaya-rabota-2-спр-студ-e': IISKursovaya_Rabota_2СпрСтудEForm
  },

});

export default translations;
