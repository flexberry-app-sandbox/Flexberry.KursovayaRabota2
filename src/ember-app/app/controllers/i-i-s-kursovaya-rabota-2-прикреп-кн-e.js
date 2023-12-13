import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-kursovaya-rabota-2-прикреп-кн-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-kursovaya-rabota-2-баз-дан+спрСтуд':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фио Студента',
            required: true,
            relationName: 'спрСтуд',
            projection: 'СпрСтудL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-kursovaya-rabota-2-баз-дан+материал':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование Материала',
            required: true,
            relationName: 'материал',
            projection: 'МатериалL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
