import { Serializer as СпрСтудSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-2-спр-студ';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СпрСтудSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
