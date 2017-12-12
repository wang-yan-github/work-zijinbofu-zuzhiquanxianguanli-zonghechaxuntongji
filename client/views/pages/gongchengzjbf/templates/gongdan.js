Template.gongdan.helpers({
    math_except_percent(exp1,exp2) {
        return (exp1/exp2*100).toFixed(2);
    },
    tianbaorxx:function () {
        return Template.instance().data.shenpixx[0];
    },
    user:function () {
        return Session.get('user');
    }
});
