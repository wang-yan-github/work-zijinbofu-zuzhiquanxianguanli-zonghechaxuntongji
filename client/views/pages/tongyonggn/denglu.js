Template.denglu.events({
    'submit form':function (event) {
        event.preventDefault();
        var username = $('[type=email]').val();
        var password = $('[type=password]').val();
        //TODO:登录验证
        if(username === 'sys@cnliren.cn' && password === 'CNliren123'){
            Session.setAuth('user',{'xingming':'管理员','username':username, 'zhanghaobh':'000','zhanghaolx':'管理员'});
            FlowRouter.go('/gongchengzjbf');
        }else if(username === 'caiwu@cnliren.cn' && password === 'CNliren123'){
            Session.setAuth('user',{'xingming':'小宇','username':username, 'zhanghaobh':'002','zhanghaolx':'财务', 'quanxianxx':['001','002']});
            FlowRouter.go('/gongchengzjbf');
        }else if(username === 'putong@cnliren.cn' && password === 'CNliren123'){
            Session.setAuth('user',{'xingming':'马旭成','username':username, 'zhanghaobh':'001','zhanghaolx':'普通', 'quanxianxx':['001','002']});
            FlowRouter.go('/gongchengzjbf');
        }else{
            alert('用户名或密码错误！');
        }
    }
});