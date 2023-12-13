import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya_Rabota_2ГруппаLForm from './forms/i-i-s-kursovaya-rabota-2-группа-l';
import IISKursovaya_Rabota_2ДисциплинаLForm from './forms/i-i-s-kursovaya-rabota-2-дисциплина-l';
import IISKursovaya_Rabota_2ДолжностьLForm from './forms/i-i-s-kursovaya-rabota-2-должность-l';
import IISKursovaya_Rabota_2СпрСотрLForm from './forms/i-i-s-kursovaya-rabota-2-спр-сотр-l';
import IISKursovaya_Rabota_2СпрСтудLForm from './forms/i-i-s-kursovaya-rabota-2-спр-студ-l';
import IISKursovaya_Rabota_2ГруппаEForm from './forms/i-i-s-kursovaya-rabota-2-группа-e';
import IISKursovaya_Rabota_2ДисциплинаEForm from './forms/i-i-s-kursovaya-rabota-2-дисциплина-e';
import IISKursovaya_Rabota_2ДолжностьEForm from './forms/i-i-s-kursovaya-rabota-2-должность-e';
import IISKursovaya_Rabota_2СпрСотрEForm from './forms/i-i-s-kursovaya-rabota-2-спр-сотр-e';
import IISKursovaya_Rabota_2СпрСтудEForm from './forms/i-i-s-kursovaya-rabota-2-спр-студ-e';
import IISKursovaya_Rabota_2ГруппаModel from './models/i-i-s-kursovaya-rabota-2-группа';
import IISKursovaya_Rabota_2ДисциплинаModel from './models/i-i-s-kursovaya-rabota-2-дисциплина';
import IISKursovaya_Rabota_2ДолжностьModel from './models/i-i-s-kursovaya-rabota-2-должность';
import IISKursovaya_Rabota_2СпрСотрModel from './models/i-i-s-kursovaya-rabota-2-спр-сотр';
import IISKursovaya_Rabota_2СпрСтудModel from './models/i-i-s-kursovaya-rabota-2-спр-студ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-rabota-2-группа': IISKursovaya_Rabota_2ГруппаModel,
    'i-i-s-kursovaya-rabota-2-дисциплина': IISKursovaya_Rabota_2ДисциплинаModel,
    'i-i-s-kursovaya-rabota-2-должность': IISKursovaya_Rabota_2ДолжностьModel,
    'i-i-s-kursovaya-rabota-2-спр-сотр': IISKursovaya_Rabota_2СпрСотрModel,
    'i-i-s-kursovaya-rabota-2-спр-студ': IISKursovaya_Rabota_2СпрСтудModel
  },

  'application-name': 'Kursovaya_ rabota_2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya_ rabota_2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya_ rabota_2',
          title: 'Kursovaya_ rabota_2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya-rabota-2-группа-l': IISKursovaya_Rabota_2ГруппаLForm,
    'i-i-s-kursovaya-rabota-2-дисциплина-l': IISKursovaya_Rabota_2ДисциплинаLForm,
    'i-i-s-kursovaya-rabota-2-должность-l': IISKursovaya_Rabota_2ДолжностьLForm,
    'i-i-s-kursovaya-rabota-2-спр-сотр-l': IISKursovaya_Rabota_2СпрСотрLForm,
    'i-i-s-kursovaya-rabota-2-спр-студ-l': IISKursovaya_Rabota_2СпрСтудLForm,
    'i-i-s-kursovaya-rabota-2-группа-e': IISKursovaya_Rabota_2ГруппаEForm,
    'i-i-s-kursovaya-rabota-2-дисциплина-e': IISKursovaya_Rabota_2ДисциплинаEForm,
    'i-i-s-kursovaya-rabota-2-должность-e': IISKursovaya_Rabota_2ДолжностьEForm,
    'i-i-s-kursovaya-rabota-2-спр-сотр-e': IISKursovaya_Rabota_2СпрСотрEForm,
    'i-i-s-kursovaya-rabota-2-спр-студ-e': IISKursovaya_Rabota_2СпрСтудEForm
  },

});

export default translations;
