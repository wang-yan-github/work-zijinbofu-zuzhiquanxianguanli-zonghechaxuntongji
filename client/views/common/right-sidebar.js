Template.rightSidebar.onCreated(function () {
    //订阅：工程资金拨付审批表
    this.subscribe('zijinbofu_gongdanxx',Session.get('user').quanxianxx);
    //订阅：即时通讯消息列表
    this.subscribe('tongyonggn_xiaoxilb',Session.get('user').zhanghaobh);
    //当前显示在页面上的审批表数据
    this.zijinbflcxx = new ReactiveVar(0);
    //当前显示在页面上的消息信息
    this.xiaoxixx = new ReactiveVar(0);
    Tracker.autorun(function () {
        //获取当前显示在页面上的审批表数据-初始化时和原始数据相同
        if(Session.get('user').zhanghaolx === '普通'){
            Template.instance().zijinbflcxx.set(tb_gc_zijinbflcxx.find({'dangqianclzt':'签批'}));
        }else{
            Template.instance().zijinbflcxx.set(tb_gc_zijinbflcxx.find({$or:[{'dangqianclzt':'初审'},{'dangqianclzt':'拨付'}]}));
        }
        Template.instance().xiaoxixx.set(ts_gc_jishitx.find({}));
    });
});
Template.rightSidebar.helpers({
    zijinbflcxx:function () {
        return Template.instance().zijinbflcxx.get();
    },
    daichulgdsl:function () {
        return Template.instance().zijinbflcxx.get().count();
    },
    xiaoxixx:function () {
        return Template.instance().xiaoxixx.get();
    },
    dangqianxxsl:function () {
        return Template.instance().xiaoxixx.get().count();
    }
});
Template.rightSidebar.rendered = function(){

    // Initialize slimscroll for right sidebar
    $('.sidebar-container').slimScroll({
        height: '100%',
        railOpacity: 0.4,
        wheelStep: 10
    });


    // Move right sidebar top after scroll
    $(window).scroll(function(){
        if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav') ) {
            $('#right-sidebar').addClass('sidebar-top');
        } else {
            $('#right-sidebar').removeClass('sidebar-top');
        }
    });
    Tracker.autorun(() =>{
        var weiduxx = _.where(this.xiaoxixx.get().fetch(),{'xiaoxizt':'未读'});
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "progressBar": true,
            "preventDuplicates": false,
            "positionClass": "toast-top-right",
            "showDuration": "400",
            "hideDuration": "1000",
            "timeOut": "70000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        for(var i = 0;i < weiduxx.length;i++){
            toastr.success(weiduxx[i].xinxinr,'您有一条新的消息！');
            ts_gc_jishitx.update({_id:weiduxx[i]._id},{$set:{'xiaoxizt':'已读'}});
        }
    });
};