import { Serializer as ПрикреплениеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-2-прикрепление';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПрикреплениеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
