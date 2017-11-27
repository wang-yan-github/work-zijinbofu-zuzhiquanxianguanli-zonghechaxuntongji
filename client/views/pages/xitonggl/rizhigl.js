Template.rizhigl.onCreated(function () {
    handle = this.subscribe("xitongguanli_rizhixx");
    this.yuanshi_rizhixx = new ReactiveVar(0);
    this.rizhixinxi = new ReactiveVar(0);
    
    Tracker.autorun(function () {
        Session.set('yuanshi_rizhixx',_.flatten(_.pluck(ts_gc_rizhixx.find({}).fetch(),'rizhixx')));
        Session.set('rizhixinxi',_.flatten(_.pluck(ts_gc_rizhixx.find({}).fetch(),'rizhixx')));
        
    });
});

Template.rizhigl.onRendered(function () {
    //时间选择器
    $('#rizhisj .input-group.date').datepicker({
        todayBtn: "linked",
        language: 'cn',
        format: 'yyyy/mm/dd',
        keyboardNavigation: false,
        forceParse: false,
        calendarWeeks: false,
        autoclose: true
    });

    //表格
    $('.footable').footable()
});

Template.rizhigl.helpers({
    shuju_rizhixx: function () {
        return Session.get('rizhixinxi');
    }
    
});


Template.rizhigl.events({
    'click #rizhichaxun': function (event, template) {
        var date = new Date($("#rizhisj .input-group.date").datepicker("getDate"));
        var sousuokuang_shijian = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
        var sousuokuang_zhanghao = $('#sousuokuang_zhanghao').val();
        var sousuokuang_ipxx = $('#sousuokuang_ipxx').val();
        //console.log($("#rizhisj .input-group.date").val());
        var sousuotiaojian = {};
        if (sousuokuang_shijian != NaN+'/'+NaN+'/'+NaN){
            sousuotiaojian.shijian = sousuokuang_shijian;
        }
        if (sousuokuang_zhanghao != ''){
            sousuotiaojian.zhanghaobh = sousuokuang_zhanghao;
        }
        if (sousuokuang_ipxx != ''){
            sousuotiaojian.ipxx = sousuokuang_ipxx;
        }
        //console.log(sousuotiaojian);
        Session.set('rizhixinxi',_.where(Session.get('yuanshi_rizhixx'),sousuotiaojian));
          
    },
    'click #rizhichongzhi': function (event, template) {
        
       //Session.set('rizhixinxi',_.where(Session.get('yuanshi_rizhixx')));
        
       
    }
});

