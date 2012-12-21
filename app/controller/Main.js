Ext.define('moge.controller.Main',{
  extend: 'Ext.app.Controller',

  config: {

    refs: {
      third: '#tx',
      second: 'Second > list'
    },

    control: {
      third: {
        tap: 'onFire'
      },
      second: {
        itemtap: 'onList'
      }
    }
  },

  onFire: function(el, ev){
    alert(el);
  },
  onList: function(list, index, item, record){
    alert(index);
  }
});
