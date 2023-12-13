import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya_Rabota_2ДолжностьLForm from './forms/i-i-s-kursovaya-rabota-2-должность-l';
import IISKursovaya_Rabota_2ДолжностьEForm from './forms/i-i-s-kursovaya-rabota-2-должность-e';
import IISKursovaya_Rabota_2ДолжностьModel from './models/i-i-s-kursovaya-rabota-2-должность';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-rabota-2-должность': IISKursovaya_Rabota_2ДолжностьModel
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
    'i-i-s-kursovaya-rabota-2-должность-l': IISKursovaya_Rabota_2ДолжностьLForm,
    'i-i-s-kursovaya-rabota-2-должность-e': IISKursovaya_Rabota_2ДолжностьEForm
  },

});

export default translations;
