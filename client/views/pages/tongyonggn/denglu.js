Template.denglu.events({
    'submit form':function (event) {
        event.preventDefault();
        var username = $('[type=email]').val();
        var password = $('[type=password]').val();
        //TODO:登录验证
        if(username === 'sys@cnliren.cn' && password === 'CNliren123'){
            Session.setAuth('user',{'username':username, 'zhanghaobh':'007','zhanghaolx':'财务', 'quanxianxx':['001','002']});
            FlowRouter.go('/gongchengzjbf');
        }else{
            alert('用户名或密码错误！');
        }
    }
});