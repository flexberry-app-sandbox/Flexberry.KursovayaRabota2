import {
  defineNamespace,
  defineProjections,
  Model as ДисциплинаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-2-дисциплина';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДисциплинаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
