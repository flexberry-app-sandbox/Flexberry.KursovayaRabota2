import { Serializer as ДисциплинаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-2-дисциплина';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДисциплинаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
