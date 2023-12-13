import {
  defineNamespace,
  defineProjections,
  Model as СпрСтудMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-2-спр-студ';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпрСтудMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
