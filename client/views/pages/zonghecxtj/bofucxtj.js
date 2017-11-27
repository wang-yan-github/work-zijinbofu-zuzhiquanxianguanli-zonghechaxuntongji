Template.gongchengzjcxtj.onCreated(function () {
    // 码表信息
    this.mabiaoxx = new ReactiveVar(0);
    // 原始-码表信息
    this.yuanshi_mabiaoxx = new ReactiveVar(0);
    // 订阅-资金拨付-码表信息
    this.subscribe('zijinbofu_mabiaoxx');

    Tracker.autorun(function () {
        Template.instance().yuanshi_mabiaoxx.set(ts_gc_mabiaoxx.find())
        Template.instance().mabiaoxx.set(Template.instance().yuanshi_mabiaoxx.get());
    })
})

Template.gongchengzjcxtj.helpers({
    niandu:function () {
        return mabiaoffmz('年度');
    },
    xiangmuzt:function () {
        return mabiaoffmz('项目状态');
    },
    xiangmufl:function () {
        return mabiaoffmz('项目分类');
    },
    fuwulx:function () {
        return mabiaoffmz('服务类型');
    }

});

// 码表返回码值
function mabiaoffmz(mabiaomc) {
    // 码表数据源
    var mabiaoxx = Template.instance().mabiaoxx.get().fetch();
    // 返回-码表信息码值
    var fanhui_mabiaoxxmz = new Array();

    for(var i in mabiaoxx){
        if(mabiaoxx[i].mabiaomc == mabiaomc){
            for(var j in mabiaoxx[i].mabiaoxx){
                var mabiaoxxobj = new Object();

                mabiaoxxobj.mazhi = mabiaoxx[i].mabiaoxx[j].mazhi;
                fanhui_mabiaoxxmz.push(mabiaoxxobj);
            }
        }
    }
    return fanhui_mabiaoxxmz;
}