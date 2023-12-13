import { Serializer as БазДанSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-2-баз-дан';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БазДанSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
