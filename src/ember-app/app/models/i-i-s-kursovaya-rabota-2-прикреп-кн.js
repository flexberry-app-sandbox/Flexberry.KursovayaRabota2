import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПрикрепКнMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-2-прикреп-кн';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПрикрепКнMixin, Validations, {
});

defineProjections(Model);

export default Model;
