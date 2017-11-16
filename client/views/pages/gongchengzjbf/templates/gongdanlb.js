Template.gongdanlb.onCreated(function () {
    this.zijinbfspb = new ReactiveVar(0);
});
Template.gongdanlb.events({
    /*查看功能点击事件*/
    'click #chakanzjbfspb':function (event) {
        //console.log(tb_gc_zijinbflcxx.find({shenpidbh:this.data_gongdan.shenpidbh}).fetch()[0]);
        Template.instance().zijinbfspb.set(tb_gc_zijinbflcxx.find({shenpidbh:this.data_gongdan.shenpidbh}).fetch()[0]);
    }
});
Template.gongdanlb.helpers({
    /*查看功能数据源*/
    zijinbfspb:function () {
        return Template.instance().zijinbfspb.get();
    },
    /*获取处理意见方法*/
    huoquclyj(n){
        return _.findWhere(Template.instance().zijinbfspb.get().shenpixx,{buzhoubh:n});
    }
});