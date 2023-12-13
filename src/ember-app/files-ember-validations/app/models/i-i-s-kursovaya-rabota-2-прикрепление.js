import {
  defineNamespace,
  defineProjections,
  Model as ПрикреплениеMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-2-прикрепление';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПрикреплениеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
