import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya-rabota-2-группа-l');
  this.route('i-i-s-kursovaya-rabota-2-группа-e',
  { path: 'i-i-s-kursovaya-rabota-2-группа-e/:id' });
  this.route('i-i-s-kursovaya-rabota-2-группа-e.new',
  { path: 'i-i-s-kursovaya-rabota-2-группа-e/new' });
  this.route('i-i-s-kursovaya-rabota-2-дисциплина-l');
  this.route('i-i-s-kursovaya-rabota-2-дисциплина-e',
  { path: 'i-i-s-kursovaya-rabota-2-дисциплина-e/:id' });
  this.route('i-i-s-kursovaya-rabota-2-дисциплина-e.new',
  { path: 'i-i-s-kursovaya-rabota-2-дисциплина-e/new' });
  this.route('i-i-s-kursovaya-rabota-2-должность-l');
  this.route('i-i-s-kursovaya-rabota-2-должность-e',
  { path: 'i-i-s-kursovaya-rabota-2-должность-e/:id' });
  this.route('i-i-s-kursovaya-rabota-2-должность-e.new',
  { path: 'i-i-s-kursovaya-rabota-2-должность-e/new' });
  this.route('i-i-s-kursovaya-rabota-2-спр-сотр-l');
  this.route('i-i-s-kursovaya-rabota-2-спр-сотр-e',
  { path: 'i-i-s-kursovaya-rabota-2-спр-сотр-e/:id' });
  this.route('i-i-s-kursovaya-rabota-2-спр-сотр-e.new',
  { path: 'i-i-s-kursovaya-rabota-2-спр-сотр-e/new' });
});

export default Router;
