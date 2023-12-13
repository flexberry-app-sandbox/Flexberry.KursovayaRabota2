import { Serializer as ПрикрепКнSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-2-прикреп-кн';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПрикрепКнSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
