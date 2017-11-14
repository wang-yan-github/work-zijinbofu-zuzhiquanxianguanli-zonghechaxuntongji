
FlowRouter.route('/', {
    action: function() {
        FlowRouter.go('/denglu');
    }
});
/*综合查询统计*/
/*项目资金拨付统计*/
FlowRouter.route('/bofutj', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "bofutj"});
    }
});
/*综合查询统计*/
/*项目资金拨付明细*/
FlowRouter.route('/bofumx', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "bofumx"});
    }
});
/*综合查询统计*/
/*项目资金拨付汇总*/
FlowRouter.route('/bofuhz', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "bofuhz"});
    }
});
/*项目库管理模块*/
/*工程资金拨付模块*/
FlowRouter.route('/gongchengzjbf', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "gongchengzjbf"});
    }
});
/*综合查询统计模块*/
/*系统管理模块*/
/*通用功能模块*/
var test = FlowRouter.route('/denglu', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "denglu"});
    }
});
/*404页面*/
FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "error404"});
    }
};
/*全局触发器*/
FlowRouter.triggers.enter([function() {
    if(Session.get("user") === undefined){
        FlowRouter.go('/denglu');
    }
}], {except: ["denglu"]});

