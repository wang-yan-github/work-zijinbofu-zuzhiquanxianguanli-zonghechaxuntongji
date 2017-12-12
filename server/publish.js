/*
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
        }});
    });
});*/

Meteor.startup(function () {
    Meteor.publish('xitongguanli_rizhixx', function () {
        return ts_gc_rizhixx.find({});
    });
    Meteor.publish('xitongguanli_mabiaoxx', function () {
        return ts_gc_mabiaoxx.find({});
    });
    Meteor.publish('zijinbofu_gongdanxx', function (quanxianxx) {
        var chaxuntj = [];
        if(quanxianxx){
            for(var i = 0;i < quanxianxx.length;i++){
                chaxuntj.push({"xiangmuflbh":quanxianxx[i]});
            }
            return tb_gc_zijinbflcxx.find({$or:chaxuntj});
        }
        return tb_gc_zijinbflcxx.find({});
    });
    Meteor.publish('zijinbofu_xiangmuk', function (quanxianxx) {
        var chaxuntj = [];
        if(quanxianxx){
            for(var i = 0;i < quanxianxx.length;i++){
                chaxuntj.push({"xiangmuflbh":quanxianxx[i]});
            }
            return tb_gc_xiangmuk.find({$or:chaxuntj});
        }
        return tb_gc_xiangmuk.find({});
    });
    //编号信息
    Meteor.publish('xitongguanli_bianhaoxx', function () {
        return ts_gc_bianhaoxx.find({});
    });
    //消息列表
    Meteor.publish('tongyonggn_xiaoxilb',function (zhanghaobh) {
        return ts_gc_jishitx.find({'xiaoxilx':'消息列表','faqirzhbh':'000','mubiaorzhbh':zhanghaobh});
    });
});





