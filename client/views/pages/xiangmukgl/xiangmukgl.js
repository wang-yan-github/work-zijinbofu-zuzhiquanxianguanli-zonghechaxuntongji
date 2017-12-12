Template.xiangmukgl.onCreated(function () {
    //订阅：码表库
    handle_mbk = this.subscribe('xitongguanli_mabiaoxx');
    //订阅：项目库
    handle_xmk = this.subscribe('zijinbofu_xiangmuk',Session.get('user').quanxianxx);
    //订阅：编号信息
    this.subscribe('xitongguanli_bianhaoxx');
    //保存原始数据的变量
    this.yuanshi_xiangmukxx = new ReactiveVar(0);
    //保存显示页面的变量
    this.xiangmukxx = new ReactiveVar(0);
    //保存当前现实页面的模版名称
    this.mobanmc = new ReactiveVar('xiangmukplb');
    //模版参数传值
    this.shuju = new ReactiveVar(0);
    //保存码表信息
    mabiaoxx = new ReactiveVar(0);
    //保存编号信息
    this.bianhaoxx = new ReactiveVar(0);
    Tracker.autorun(() => {
        Template.instance().yuanshi_xiangmukxx.set(tb_gc_xiangmuk.find({}));
        Template.instance().xiangmukxx.set(Template.instance().yuanshi_xiangmukxx.get());
        Template.instance().shuju.set(Template.instance().yuanshi_xiangmukxx.get());
        mabiaoxx.set(ts_gc_mabiaoxx.find({}));
        Template.instance().bianhaoxx.set(ts_gc_bianhaoxx.find({}));
    });
});

Template.xiangmukgl.helpers({
    shuju:function () {
        return Template.instance().shuju.get();
    },
    dangqianmbmc:function () {
        return Template.instance().mobanmc.get();
    },
    //码表：指挥部信息
    mabiao_zhihuibxx:function () {
        if(handle_mbk.ready()){
            return _.findWhere(mabiaoxx.get().fetch(),{mabiaomc:'指挥部'}).mabiaoxx;
        }
    },
    //码表：年度信息
    mabiao_nianduxx:function () {
        if(handle_mbk.ready()){
            return _.findWhere(mabiaoxx.get().fetch(),{mabiaomc:'年度'}).mabiaoxx;
        }
    },
    //码表：项目分类信息
    mabiao_xiangmuflxx:function () {
        if(handle_mbk.ready()){
            return _.findWhere(mabiaoxx.get().fetch(),{mabiaomc:'项目分类'}).mabiaoxx;
        }
    },
    //码表：工程性质信息
    mabiao_gongchengxzxx:function () {
        if(handle_mbk.ready()){
            return _.findWhere(mabiaoxx.get().fetch(),{mabiaomc:'工程性质'}).mabiaoxx;
        }
    },
    //码表：服务类型信息
    mabiao_fuwulxxx:function () {
        if(handle_mbk.ready()){
            return _.findWhere(mabiaoxx.get().fetch(),{mabiaomc:'服务类型'}).mabiaoxx;
        }
    }
});
Template.xiangmukgl.events({
    //重置项目树
    'click #chongzhixms':function () {
        Template.instance().shuju.set(Template.instance().yuanshi_xiangmukxx.get());
        Template.instance().mobanmc.set('xiangmukplb');
        $('#sousuoxms').val('');
        $('#sousuoxms').trigger('keyup');
    },
    //筛选项目树：分类
    'click [name="shaixuan_fenlei"]':function (event) {
        var fenlei = event.currentTarget.innerText;
        $('#sousuoxms').val(fenlei);
        console.log(fenlei);
        $('#sousuoxms').trigger('keyup');
    },
    //项目树点击事件
    'click #xuanzexm':function (event,instance,data) {
        if(data.endsWith('ndgc')){
            Template.instance().shuju.set(_.where(Template.instance().yuanshi_xiangmukxx.get().fetch(),{xiangmund:data.replace('ndgc','')}));
            Template.instance().mobanmc.set('xiangmukplb');
        }else if(data.endsWith('xmbh') ){
            Template.instance().shuju.set(_.findWhere(Template.instance().yuanshi_xiangmukxx.get().fetch(), {xiangmubh: data.replace('xmbh','')}));
            Template.instance().mobanmc.set('xiangmuxq');
        }else if(data.endsWith('gcjbxx') ){
            Template.instance().shuju.set(_.findWhere(Template.instance().yuanshi_xiangmukxx.get().fetch(), {xiangmubh: data.replace('gcjbxx','')}));
            Template.instance().mobanmc.set('xiangmuxq');
        }else if(data.endsWith('xmhtxx') ){
            Template.instance().shuju.set(_.findWhere(Template.instance().yuanshi_xiangmukxx.get().fetch(), {xiangmubh: data.replace('xmhtxx','')}));
            Template.instance().mobanmc.set('xiangmuxq');
        }else if(data.endsWith('bdhtxx') ){
            Template.instance().shuju.set(_.findWhere(Template.instance().yuanshi_xiangmukxx.get().fetch(), {xiangmubh: data.replace('bdhtxx','')}));
            Template.instance().mobanmc.set('xiangmuxq');
        }else if(data.endsWith('xmhtbh' )){
            var xiangmubh = data.replace('xmhtbh','').split('-')[0];
            var hteongbh = data.replace('xmhtbh','').split('-')[1];
            Template.instance().shuju.set(_.findWhere(_.findWhere(Template.instance().yuanshi_xiangmukxx.get().fetch(),{xiangmubh:xiangmubh}).xiangmuhtxx,{hetongbh:hteongbh}));
            Template.instance().mobanmc.set('xiangmuhtxq');
        }else if(data.endsWith('bdhtbh' )){
            var xiangmubh = data.replace('bdhtbh','').split('-')[0];
            var hetongbh = data.replace('bdhtbh','').split('-')[1];
            Template.instance().shuju.set(_.findWhere(_.findWhere(Template.instance().yuanshi_xiangmukxx.get().fetch(),{xiangmubh:xiangmubh}).biaoduanhtxx,{hetongbh:hetongbh}));
            Template.instance().mobanmc.set('xiangmuhtxq');
        }
    },
    //跳转项目详情按钮
    'click .xiangmuxq':function (event) {
        Template.instance().shuju.set(_.findWhere(Template.instance().yuanshi_xiangmukxx.get().fetch(), {xiangmubh: event.currentTarget.name}));
        Template.instance().mobanmc.set('xiangmuxq');
    },
    //项目详情返回项目卡片列表页面
    'click #xiangmuxqfh':function () {
        Template.instance().mobanmc.set('xiangmukplb');
        Template.instance().shuju.set(Template.instance().xiangmukxx.get());
    },
    //新增项目提交事件
    'submit #xinzengxm':function (event) {
        event.preventDefault();
        var xiangmuxz = {
            "xiangmubh": "",
            "xiangmumc": "",
            "zhihuibbh": "",
            "zhihuibmc": "",
            "xiangmuflbh": "",
            "xiangmuflmc": "",
            "xiangmund": "",
            "gongchengxz": "",
            "gongchengbh": "",
            "xiangmujj": "",
            "xiangmusm": "",
            "gongchengzt": "",
            "xiangmuhtxx": [],
            "biaoduanhtxx": []
        };
        var bianhaoxx = Template.instance().bianhaoxx.get().fetch()[0];
        //获取项目名称
        xiangmuxz.xiangmumc = event.target.xiangmuxz_xiangmumc.value;
        //获取项目编号
        var dangqianxmbh = parseInt(bianhaoxx.xiangmubh);
        xiangmuxz.xiangmubh = (Array(5).join('0') + (dangqianxmbh+1)).slice(-5);
        //获取项目指挥部名称
        xiangmuxz.zhihuibmc = event.target.xiangmuxz_zhihuib.options[event.target.xiangmuxz_zhihuib.selectedIndex].text;
        //获取项目指挥部编号
        xiangmuxz.zhihuibbh = event.target.xiangmuxz_zhihuib.value;
        //获取项目年度
        xiangmuxz.xiangmund = event.target.xiangmuxz_xiangmund.options[event.target.xiangmuxz_xiangmund.selectedIndex].text;
        //获取项目分类名称
        xiangmuxz.xiangmuflmc = event.target.xiangmuxz_xiangmufl.options[event.target.xiangmuxz_xiangmufl.selectedIndex].text;
        //获取项目分类编号
        xiangmuxz.xiangmuflbh = event.target.xiangmuxz_xiangmufl.value;
        //获取工程性质编号
        xiangmuxz.gongchengxz = event.target.xiangmuxz_gongchengxz.value;
        //获取工程性质名称
        xiangmuxz.gongchengxz = event.target.xiangmuxz_gongchengxz.options[event.target.xiangmuxz_gongchengxz.selectedIndex].text;
        //获取项目简介
        xiangmuxz.xiangmujj = event.target.xiangmuxz_xiangmujj.value;
        //TODO:插入数据检验
        tb_gc_xiangmuk.insert(xiangmuxz,function (error,result) {
            if(error){
                console.log('插入失败');
            }else{
                bianhaoxx.xiangmubh = xiangmuxz.xiangmubh;
                ts_gc_bianhaoxx.update({_id:bianhaoxx._id},{$set:bianhaoxx});
                $('#xinjianxmxx').modal('hide');
                //TODO:清空信息
            }
        });
    }
});
Template.xiangmukgl.onRendered(function () {
    this.$('.fullscreen').height($(document.body).outerHeight(true)-215);
    Tracker.autorun((computation) => {
        if(handle_xmk.ready() && handle_mbk.ready()){
            Tracker.afterFlush(() => {
                var xiangmukxx = this.xiangmukxx.get().fetch();
                //拼接项目数信息
                var data = [];
                //获取项目所有项目年度信息
                var xiangmundxx = _.sortBy(_.uniq(_.pluck(xiangmukxx, 'xiangmund')));
                _.each(xiangmundxx,function (obj) {
                    //年度工程
                    data.push({ 'id' : obj+'ndgc', 'parent' : '#', 'text' : obj+'年度工程'});
                });
                _.each(xiangmukxx,function (obj) {
                    //项目名称
                    data.push({ 'id' : obj.xiangmubh+'xmbh', 'parent' : obj.xiangmund+'ndgc', 'text' : obj.xiangmuflmc+'-'+obj.xiangmumc });
                    //工程基本信息、合同信息
                    data.push({ 'id' : obj.xiangmubh+'gcjbxx', 'parent' : obj.xiangmubh+'xmbh', 'text' : '工程基本信息' });
                    data.push({ 'id' : obj.xiangmubh+'xmhtxx', 'parent' : obj.xiangmubh+'xmbh', 'text' : '项目合同信息' });
                    //项目合同信息
                    _.each(obj.xiangmuhtxx,function (htxx) {
                        data.push({ 'id' : obj.xiangmubh+'-'+htxx.hetongbh+'xmhtbh', 'parent' : obj.xiangmubh+'xmhtxx', 'text' : htxx.fuwulxmc+'-'+htxx.danweimc });
                    });
                    data.push({ 'id' : obj.xiangmubh+'bdhtxx', 'parent' : obj.xiangmubh+'xmbh', 'text' : '标段合同信息' });
                    //标段合同信息
                    _.each(obj.biaoduanhtxx,function (htxx) {
                        data.push({ 'id' : obj.xiangmubh+'-'+htxx.hetongbh+'bdhtbh', 'parent' : obj.xiangmubh+'bdhtxx', 'text' : htxx.fuwulxmc+'-'+htxx.biaoduanmc+'-'+htxx.danweimc });
                    });
                });
                $('#gongchengxxxms').jstree({
                    'core': {
                        'check_callback': true,
                        data:data
                    },
                    'plugins': ['types', 'search'],
                    'types': {
                        'default': {
                            'icon': 'fa fa-folder'
                        },
                        'html': {
                            'icon': 'fa fa-file-code-o'
                        },
                        'svg': {
                            'icon': 'fa fa-file-picture-o'
                        },
                        'css': {
                            'icon': 'fa fa-file-code-o'
                        },
                        'img': {
                            'icon': 'fa fa-file-image-o'
                        },
                        'js': {
                            'icon': 'fa fa-file-text-o'
                        }

                    }
                })
                //单击事件
                .bind('click.jstree', function(event) {
                    var eventNodeName = event.target.nodeName;
                    if (eventNodeName == 'INS') {
                        return;
                    } else if (eventNodeName == 'A') {
                        $('#xuanzexm').trigger('click', $(event.target).parents('li').attr('id'));
                    }
                });
                //jstree搜索插件
                var sousuozt = false;
                $('#sousuoxms').keyup(function () {
                    if (sousuozt) {
                        clearTimeout(sousuozt);
                    }
                    sousuozt = setTimeout(function () {
                        var sousuonr = $('#sousuoxms').val();
                        $('#gongchengxxxms').jstree(true).search(sousuonr);
                    }, 250);
                });
                $('.select-chosen').chosen({width: "100%",no_results_text: "没有结果"});
                computation.stop();
            });
        }
    });
});