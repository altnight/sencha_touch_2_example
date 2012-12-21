Ext.define('moge.view.Third', {
  extend: 'Ext.navigation.View',
  xtype: 'Third',

  config: {
    tabBarPosition: 'bottom',
    title: 'third',
    iconCls: 'add',

    items: [{
             title: 'third title',
             items: [
               {xtype: 'button', text: 'text!!!', ui: 'round', id: 'tx'}
             ]
           }]
  }
});
