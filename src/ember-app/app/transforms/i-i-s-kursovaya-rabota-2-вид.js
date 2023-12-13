import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидEnum from '../enums/i-i-s-kursovaya-rabota-2-вид';

export default FlexberryEnum.extend({
  enum: ВидEnum,
  sourceType: 'IIS.Kursovaya_Rabota_2.Вид'
});
