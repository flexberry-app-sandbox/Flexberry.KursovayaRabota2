import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya-rabota-2-должность-l');
  this.route('i-i-s-kursovaya-rabota-2-должность-e',
  { path: 'i-i-s-kursovaya-rabota-2-должность-e/:id' });
  this.route('i-i-s-kursovaya-rabota-2-должность-e.new',
  { path: 'i-i-s-kursovaya-rabota-2-должность-e/new' });
});

export default Router;
