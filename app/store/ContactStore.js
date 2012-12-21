Ext.define('moge.store.ContactStore',{
  extend: 'Ext.data.Store',

  config:{
    model: 'moge.model.Contact',
    sorters: 'firstName',
    grouper: function(record){
      return record.get('firstName')[0];
    },
    data: [
      {firstName: 'hoge', lastName: 'moge'},
      {firstName: 'joge', lastName: 'mlge'},
      {firstName: 'moge', lastName: 'mjge'},
      {firstName: 'doge', lastName: 'mage'},
      {firstName: 'doge', lastName: 'msge'},
      {firstName: 'aoge', lastName: 'mdge'}
    ]
  }
});
