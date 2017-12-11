var dangqianym = '年度';
var dangqianbjxb = 0;
Template.mabiaogl.onCreated(function () {
    handle = this.subscribe("xitongguanli_mabiaoxx");
    /*订阅并获取数据*/
    Tracker.autorun(function (computation) {
        if (handle.ready()){
            Session.set('yuanshi_mabiaoxx',ts_gc_mabiaoxx.find({}).fetch());
            Session.set('mabiaoxx',_.findWhere(ts_gc_mabiaoxx.find({}).fetch(),{'mabiaomc': '年度'}).mabiaoxx);
            computation.stop();
        }
    });
    
    
});

Template.mabiaogl.onRendered(function () {
    //树形目录
    $('#jstree').jstree({
        'core' : {
            'check_callback' : true
        },
        'plugins' : [ 'types', 'dnd' ],
        'types' : {
            'default' : {
                'icon' : 'fa fa-folder'
            },
            'html' : {
                'icon' : 'fa fa-file-code-o'
            },
            'svg' : {
                'icon' : 'fa fa-file-picture-o'
            },
            'css' : {
                'icon' : 'fa fa-file-code-o'
            },
            'img' : {
                'icon' : 'fa fa-file-image-o'
            },
            'js' : {
                'icon' : 'fa fa-file-text-o'
            }
        }
    });
    
    
    $('#jstree').on('changed.jstree', function (e, data) {
        $('#jstree').jstree(true).toggle_node(data.selected);
        
        
    });
    
    
    //表格
    $('.footable').footable();
});


Template.mabiaogl.helpers({
    shuju_mabiaoxx: function () {
        return Session.get('mabiaoxx');
    }
});

Template.mabiaogl.events({
    'click #mabiao_niandu':function (event) {
        Session.set('mabiaoxx',_.findWhere(Session.get('yuanshi_mabiaoxx'),{mabiaomc: "年度"}).mabiaoxx);
        dangqianym = '年度';
    },
    'click #mabiao_zhihuib':function (event) {
        Session.set('mabiaoxx',_.findWhere(Session.get('yuanshi_mabiaoxx'),{mabiaomc: "指挥部"}).mabiaoxx);
        dangqianym = '指挥部';
    },
    'click #mabiao_gongchengzt':function (event) {
        Session.set('mabiaoxx',_.findWhere(Session.get('yuanshi_mabiaoxx'),{mabiaomc: "工程状态"}).mabiaoxx);
        dangqianym = '工程状态';
    },
    'click #mabiao_xiangmufl':function (event) {
        Session.set('mabiaoxx',_.findWhere(Session.get('yuanshi_mabiaoxx'),{mabiaomc: "项目分类"}).mabiaoxx);
        dangqianym = '项目分类';
    },
    'click #mabiao_fuwulx':function (event) {
        Session.set('mabiaoxx',_.findWhere(Session.get('yuanshi_mabiaoxx'),{mabiaomc: "服务类型"}).mabiaoxx);
        dangqianym = '服务类型';
    },
    
    'click #xinzengbc':function (event) {
        var xinzengbh = $('#xinzengbh').val();
        var xinzengmz = $('#xinzengmz').val();
        var mabiao = _.findWhere(Session.get('yuanshi_mabiaoxx'),{mabiaomc:dangqianym});
        mabiao.mabiaoxx.push({bianhao:xinzengbh,mazhi:xinzengmz});
        Session.set('mabiaoxx',mabiao.mabiaoxx);
        ts_gc_mabiaoxx.update({_id:mabiao._id},{$set:mabiao});
        $('input').val('');
        $('#myModal').modal('hide');
    },
    
    'click #mazhisc':function (event) {
        var mabiao = _.findWhere(Session.get('yuanshi_mabiaoxx'),{mabiaomc:dangqianym});
        mabiao.mabiaoxx = _.without(mabiao.mabiaoxx,_.findWhere(mabiao.mabiaoxx,{bianhao:event.target.name}));
        Session.set('mabiaoxx',mabiao.mabiaoxx);
        ts_gc_mabiaoxx.update({_id:mabiao._id},{$set:mabiao});
        
    },
    
    'click #mazhibj':function (event) {
        var mabiao = _.findWhere(Session.get('yuanshi_mabiaoxx'), {mabiaomc: dangqianym});
        var dangqian = _.findWhere(mabiao.mabiaoxx,{bianhao:event.target.name});
        $('#bianjibh').val( dangqian.bianhao);
        $('#bianjimz').val( dangqian.mazhi);
        dangqianbjxb = mabiao.mabiaoxx.indexOf(dangqian);
    },
        
    'click #bianjibc':function (event) {
         var bianjibh = $('#bianjibh').val();
         var bianjimz = $('#bianjimz').val();
         var mabiao = _.findWhere(Session.get('yuanshi_mabiaoxx'),{mabiaomc:dangqianym});
         mabiao.mabiaoxx[dangqianbjxb].bianhao = bianjibh;
         mabiao.mabiaoxx[dangqianbjxb].mazhi = bianjimz;
         Session.set('mabiaoxx',mabiao.mabiaoxx);
         ts_gc_mabiaoxx.update({_id:mabiao._id},{$set:mabiao});
         $('#myModal1').modal('hide');
    }
   
});


Template.mabiaogl.onDestroyed(function () {
    
});