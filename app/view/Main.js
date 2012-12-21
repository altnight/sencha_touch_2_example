Ext.define('moge.view.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'Main',

  config: {
    tabBarPosition: 'bottom',
    title: 'main',

    items: [
           { xtype: 'Second' },
           { xtype: 'Third' }
           ]
  }
});
