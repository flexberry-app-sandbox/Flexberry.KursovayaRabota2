import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya-rabota-2.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya-rabota-2.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-2-должность-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-должность-l.title'),
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-2-спр-сотр-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-спр-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-спр-сотр-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-2-группа-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-группа-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-группа-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-2-дисциплина-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-дисциплина-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-дисциплина-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})