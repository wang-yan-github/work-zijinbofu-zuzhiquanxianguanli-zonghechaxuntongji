Meteor.startup(function () {
    Meteor.publish('zijinbofu_gongdanxx', function () {
        return tb_gc_zijinbflcxx.find({}/*,{fields:{
            'shenpidbh':true,
            'shoukuandw':true,
            'fuwulxbh':true,
            'fuwulxmc':true,
            'xiangmubh':true,
            'xiangmumc':true,
            'gongchengxz':true,
            'hetongje':true,
            'hetongqdj':true,
            'zhishangqljbfzj':true,
            'dangqiangdzt':true,
            'dangqianclzt':true,
        }}*/);
    });
});
