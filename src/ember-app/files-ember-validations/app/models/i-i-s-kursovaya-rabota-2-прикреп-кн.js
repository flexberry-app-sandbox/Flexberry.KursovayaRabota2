import {
  defineNamespace,
  defineProjections,
  Model as ПрикрепКнMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-2-прикреп-кн';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПрикрепКнMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
