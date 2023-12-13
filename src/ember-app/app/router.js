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
  this.route('i-i-s-kursovaya-rabota-2-материал-l');
  this.route('i-i-s-kursovaya-rabota-2-материал-e',
  { path: 'i-i-s-kursovaya-rabota-2-материал-e/:id' });
  this.route('i-i-s-kursovaya-rabota-2-материал-e.new',
  { path: 'i-i-s-kursovaya-rabota-2-материал-e/new' });
  this.route('i-i-s-kursovaya-rabota-2-прикреп-кн-l');
  this.route('i-i-s-kursovaya-rabota-2-прикреп-кн-e',
  { path: 'i-i-s-kursovaya-rabota-2-прикреп-кн-e/:id' });
  this.route('i-i-s-kursovaya-rabota-2-прикреп-кн-e.new',
  { path: 'i-i-s-kursovaya-rabota-2-прикреп-кн-e/new' });
  this.route('i-i-s-kursovaya-rabota-2-спр-сотр-l');
  this.route('i-i-s-kursovaya-rabota-2-спр-сотр-e',
  { path: 'i-i-s-kursovaya-rabota-2-спр-сотр-e/:id' });
  this.route('i-i-s-kursovaya-rabota-2-спр-сотр-e.new',
  { path: 'i-i-s-kursovaya-rabota-2-спр-сотр-e/new' });
  this.route('i-i-s-kursovaya-rabota-2-спр-студ-l');
  this.route('i-i-s-kursovaya-rabota-2-спр-студ-e',
  { path: 'i-i-s-kursovaya-rabota-2-спр-студ-e/:id' });
  this.route('i-i-s-kursovaya-rabota-2-спр-студ-e.new',
  { path: 'i-i-s-kursovaya-rabota-2-спр-студ-e/new' });
});

export default Router;
