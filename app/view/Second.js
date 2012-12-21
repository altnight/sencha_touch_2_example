Ext.define('moge.view.Second', {
  extend: 'Ext.navigation.View',
  xtype: 'Second',
  requires: [
    'moge.store.ContactStore',
    'Ext.dataview.List'
  ],

  config: {
    tabBarPosition: 'bottom',
    title: 'second',
    iconCls: 'add',

    items: [{
             title: 'second title',
             xtype: 'list',

             styleHtmlContent: true,
             scrollable: true,
             store: 'ContactStore',
             itemTpl: '<div class="contact"><strong>{firstName}</strong> {lastName}</div>',
             grouped: true,
             indexBar: true
           }]
  }
});
