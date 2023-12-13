import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДисциплинаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-2-дисциплина';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДисциплинаMixin, Validations, {
});

defineProjections(Model);

export default Model;
