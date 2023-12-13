import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СпрСтудMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-2-спр-студ';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СпрСтудMixin, Validations, {
});

defineProjections(Model);

export default Model;
