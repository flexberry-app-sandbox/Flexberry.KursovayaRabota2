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
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-2-спр-сотр-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-спр-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-спр-сотр-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-2-группа-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-группа-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-группа-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-2-дисциплина-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-дисциплина-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-дисциплина-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-2-спр-студ-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-спр-студ-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-спр-студ-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-2-прикреп-кн-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-прикреп-кн-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-прикреп-кн-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-2-материал-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-материал-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-2.i-i-s-kursovaya-rabota-2-материал-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})