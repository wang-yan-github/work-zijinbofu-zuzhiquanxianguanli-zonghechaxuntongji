var bianjigongdanxx = {};
var chushengongdanxx = {};
var qianpigongdanxx = {};
var bofugongdanxx = {};
var shangchuansmj_biaoshi = false;
Template.gongdanlb.onCreated(function () {
    this.chakanzjbfspb = new ReactiveVar(0);
    this.bianjizjbfspb = new ReactiveVar(0);
    this.chushenzjbfspb = new ReactiveVar(0);
    this.qianpizjbfspb = new ReactiveVar(0);
});
Template.gongdanlb.onRendered(function () {
    $('#zijinbfspbbj').on('hidden.bs.modal', function (e) {
        //清空编辑模态框
        $('[name="bianji_zhibaojkc"]').text('');
        $('[name="bianji_weifuzj"]').text('');
        $('[name="bianji_yingfuzj"]').text('');
        $('[name="bianji_jiliangzfsdzj"]').val('');
        $('[name="bianji_benqisqje"]').val('');
        $('[name="bianji_bokuanyj"]').val('');
        $('[name="bianji_benqihdbfzj"]').val('');
        $('[name="bianji_benqiljbfzj"]').text('');
        $('[name="bianji_shenqingly"]').val('');
    });
    $('#zijinbfspbsmj')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','zijinbfspbsmj');
    });
    $('#zijinbfspbsmj')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        var lishizjbfxx = {
            "shenpibbh" : "",
            "zhifuje" : "",
            "querenzfsj" : "",
            "zhishangqljbfje" : "",
            "shendingje" : "",
            "tianbaor" : "",
            "chushenr" : "",
            "shenpifj" : ""
        };
        //审批表编号
        lishizjbfxx.shenpibbh = qianpigongdanxx.shenpibbh;
        //至上期累计拨付金额
        lishizjbfxx.zhishangqljbfje = qianpigongdanxx.zhishangqljbfzj;
        //审定金额
        lishizjbfxx.shendingje = qianpigongdanxx.jiliangzfsdzj;
        //填报人
        lishizjbfxx.tianbaor = qianpigongdanxx.shenpixx[0].xingming;
        //初审人
        lishizjbfxx.chushenr = qianpigongdanxx.shenpixx[1].xingming;
        //审批表附件
        lishizjbfxx.shenpifj = xiangying.baseUrl+xiangying.path;
        //添加到项目库中
        var xiangmuxx = _.findWhere(tb_gc_xiangmuk.find({}).fetch(),{xiangmubh:qianpigongdanxx.xiangmubh});
        var hetongxx;
        if(qianpigongdanxx.fuwulxmc == '施工'){
            hetongxx = _.findWhere(xiangmuxx.biaoduanhtxx,{hetongbh:qianpigongdanxx.hetongbh});
        }else{
            hetongxx = _.findWhere(xiangmuxx.gongchenghtxx,{hetongbh:qianpigongdanxx.hetongbh});
        }
        hetongxx.zijinbfxx.push(lishizjbfxx);
        tb_gc_xiangmuk.update({_id:xiangmuxx._id},{$set:xiangmuxx});
        //上传完成标识
        shangchuansmj_biaoshi = true;
    });
});
Template.gongdanlb.events({
    /*查看功能点击事件*/
    'click #chakanzjbfspb':function (event) {
        Template.instance().chakanzjbfspb.set(_.findWhere(Template.instance().data.shuju_gongdanlb.fetch(),{shenpibbh:this.shuju_gongdan.shenpibbh}));
    },
    /*初审功能点击事件*/
    'click #chushenzjbfspb':function (event) {
        Template.instance().chushenzjbfspb.set(_.findWhere(Template.instance().data.shuju_gongdanlb.fetch(),{shenpibbh:this.shuju_gongdan.shenpibbh}));
        chushengongdanxx = Template.instance().chushenzjbfspb.get();
    },
    /*提交初审资金拨付审批表点击事件*/
    'click #tijiaocszjbfspb':function (event) {
        $('#zijinbfspbcs').modal('hide');
        swal({
                title: "是否通过初审?",
                text: "将此资金拨付申请表提交给下一个处理人员!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "通过",
                cancelButtonText: "打回",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function (isConfirm) {
                var date = new Date();
                if (isConfirm) {
                    chushengongdanxx.dangqianclzt = '签批';
                    chushengongdanxx.shenpixx[1].chuliyj = '通过';
                    chushengongdanxx.shenpixx[1].xingming = Session.get('user').username;
                    chushengongdanxx.shenpixx[1].riqi = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
                    swal("通过!", "表单初审通过!", "success");
                } else {
                    chushengongdanxx.dangqiangdzt = '作废';
                    chushengongdanxx.shenpixx[1].chuliyj = '未通过';
                    chushengongdanxx.shenpixx[1].xingming = Session.get('user').username;
                    chushengongdanxx.shenpixx[1].riqi = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
                    swal("打回!", "表单初审未通过!", "error");
                }
                tb_gc_zijinbflcxx.update({_id:chushengongdanxx._id},{$set:chushengongdanxx});
            });
    },
    /*签批功能点击事件*/
    'click #qianpizjbfspb':function (event) {
        Template.instance().qianpizjbfspb.set(_.findWhere(Template.instance().data.shuju_gongdanlb.fetch(),{shenpibbh:this.shuju_gongdan.shenpibbh}));
        qianpigongdanxx = Template.instance().qianpizjbfspb.get();
    },
    /*提交签批资金拨付审批表点击事件*/
    'click #tijiaoqpzjbfspb':function (event) {
        if($('#zijinbfspbsmj')[0].dropzone.files.length == 0){
            alert('请选择扫描件！');
        }else{
            $('#zijinbfspbscsmj').modal('hide');
            swal({
                    title: "是否进行提交?",
                    text: "将此资金拨付申请表提交给下一个处理人员!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "提交",
                    cancelButtonText: "取消",
                    closeOnConfirm: false,
                    closeOnCancel: false
                },
                function (isConfirm) {
                    $('#zijinbfspbsmj')[0].dropzone.processQueue();
                    var date = new Date();
                    qianpigongdanxx.dangqianclzt = '拨付';
                    qianpigongdanxx.shenpixx[2].chuliyj = '通过';
                    qianpigongdanxx.shenpixx[2].xingming = Session.get('user').xingming;
                    qianpigongdanxx.shenpixx[2].riqi = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
                    if (isConfirm) {
                        var int = setInterval(function () {
                            if(shangchuansmj_biaoshi){
                                tb_gc_zijinbflcxx.update({_id:qianpigongdanxx._id},{$set:qianpigongdanxx});
                                swal("通过!", "表单提交成功!", "success");
                                shangchuansmj_biaoshi = false;
                                window.clearInterval(int);
                            }
                        },50);

                    } else {
                        swal("取消!", "表单未提交!", "error");
                    }
                });
        }
    },
    /*编辑功能点击事件*/
    'click #bianjizjbfspb':function (event) {
        Template.instance().bianjizjbfspb.set(_.findWhere(Template.instance().data.shuju_gongdanlb.fetch(),{shenpibbh:this.shuju_gongdan.shenpibbh}));
        bianjigongdanxx = Template.instance().bianjizjbfspb.get();
    },
    /*编辑计量支付审定资金更改事件*/
    'change [name="bianji_jiliangzfsdzj"]':function () {
        //未付资金=总计量支付审定资金-至上期累计拨付资金
        var weifuzj = parseFloat($('[name="bianji_jiliangzfsdzj"]').val()) - parseFloat(bianjigongdanxx.jiliangzfsdzj) + parseFloat(bianjigongdanxx.weifuzj);
        $('[name="bianji_weifuzj"]').text(function () {
            return weifuzj;
        });
        //应付资金=本期计量支付审定资金-质保金扣除
        var yingfuzj = parseFloat($('[name="bianji_jiliangzfsdzj"]').val())*0.95;
        $('[name="bianji_yingfuzj"]').text(function () {
            return yingfuzj;
        });
        //质保金扣除
        $('[name="bianji_zhibaojkc"]').text(parseFloat($('[name="bianji_jiliangzfsdzj"]').val())*0.05);
        //将应付资金、未付资金与计量支付审定资金加入本次新增工单中
        bianjigongdanxx.zhibaojkc = parseFloat($('[name="bianji_jiliangzfsdzj"]').val())*0.05;
        bianjigongdanxx.yingfuzj = yingfuzj;
        bianjigongdanxx.weifuzj = weifuzj;
        bianjigongdanxx.jiliangzfsdzj = $('[name="bianji_jiliangzfsdzj"]').val();
    },
    /*本期申请资金更改事件*/
    'change [name="bianji_benqisqje"]':function () {
        bianjigongdanxx.benqisqje = $('[name="bianji_benqisqje"]').val();
    },
    /*拨款依据变更事件*/
    'change [name="bianji_bokuanyj"]':function () {
        bianjigongdanxx.bokuanyj = $('[name="bianji_bokuanyj"]').val();
    },
    /*本期核定拨付资金变更事件*/
    'change [name="bianji_benqihdbfzj"]':function () {
        bianjigongdanxx.benqihdbfje = $('[name="bianji_benqihdbfzj"]').val();
        //输出本期累计拨付资金
        bianjigongdanxx.benqiljbfzj = parseFloat($('[name="bianji_benqihdbfzj"]').val()) + parseFloat($('[name="bianji_zhishangqljbfzj"]').text());
        $('[name="bianji_benqiljbfzj"]').text(bianjigongdanxx.benqiljbfzj);
    },
    /*申请理由变更事件*/
    'change [name="bianji_shenqingly"]':function () {
        bianjigongdanxx.shenqingly = $('[name="bianji_shenqingly"]').val();
    },
    /*提交编辑资金拨付审批表点击事件*/
    'click #tijiaobjzjbfspb':function (event) {
        $('#zijinbfspbbj').modal('hide');
        swal({
                title: "是否需要提交?",
                text: "将此资金拨付申请表提交给下一个处理人员!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "提交",
                cancelButtonText: "仅保存",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function (isConfirm) {
                if (isConfirm) {
                    bianjigongdanxx.dangqianclzt = '初审';
                    swal("提交!", "您的表单提交成功!", "success");
                } else {
                    swal("保存!", "您的表单保存成功!", "success");
                }
                tb_gc_zijinbflcxx.update({_id:bianjigongdanxx._id},{$set:bianjigongdanxx});
            });
    },
    /*拨付资金拨付审批表点击事件*/
    'click #bofuzjbfspb':function (event) {
        bofugongdanxx = _.findWhere(Template.instance().data.shuju_gongdanlb.fetch(),{shenpibbh:this.shuju_gongdan.shenpibbh});
        /*swal({
                title: "是否确认拨付?",
                text: "结束此次资金拨付流程!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "确认",
                cancelButtonText: "取消",
                closeOnConfirm: false,
                closeOnCancel: false,
                content: {
                    element: "input",
                    attributes: {
                        placeholder: "Type your password",
                        type: "password",
                    },
                }
            },
            function (isConfirm) {
                var date = new Date();
                if (isConfirm) {
                    bofugongdanxx.dangqianclzt = '完成';
                    bofugongdanxx.shenpixx[3].chuliyj = '确认拨付';
                    bofugongdanxx.shenpixx[3].xingming = Session.get('user').username;
                    bofugongdanxx.shenpixx[3].riqi = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
                    swal("完成!", "已确认拨付!", "success");
                } else {
                    swal("取消!", "未确认拨付!", "error");
                }
                tb_gc_zijinbflcxx.update({_id:bofugongdanxx._id},{$set:bofugongdanxx});
            });*/
    },
    /*提交资金拨付审批表点击事件*/
    'click #tijiaobfzjbfspb':function (event) {
        var zhifuje = $('#zhifuje').val();
        var querenbfsj = $('#querenbfsj').val();
        if(!zhifuje){
            alert('请填写支付金额');
        }else if(!querenbfsj){
            alert('请填写支付时间');
        }else{
            var xiangmuxx = _.findWhere(tb_gc_xiangmuk.find({}).fetch(),{xiangmubh:bofugongdanxx.xiangmubh});
            var hetongxx;
            if(bofugongdanxx.fuwulxmc == '施工'){
                hetongxx = _.findWhere(xiangmuxx.biaoduanhtxx,{hetongbh:bofugongdanxx.hetongbh});
            }else{
                hetongxx = _.findWhere(xiangmuxx.gongchenghtxx,{hetongbh:bofugongdanxx.hetongbh});
            }
            hetongxx.zijinbfxx[hetongxx.zijinbfxx.indexOf(_.findWhere(hetongxx.zijinbfxx,{shenpibbh:bofugongdanxx.shenpibbh}))].querenzfsj = querenbfsj;
            hetongxx.zijinbfxx[hetongxx.zijinbfxx.indexOf(_.findWhere(hetongxx.zijinbfxx,{shenpibbh:bofugongdanxx.shenpibbh}))].zhifuje = zhifuje;
            console.log(xiangmuxx);
            tb_gc_xiangmuk.update({_id:xiangmuxx._id},{$set:xiangmuxx});
            $('#zijinbfspbbf').modal('hide');
            var date = new Date();
            bofugongdanxx.dangqianclzt = '完成';
            bofugongdanxx.shenpixx[3].chuliyj = '确认拨付';
            bofugongdanxx.shenpixx[3].xingming = Session.get('user').xingming;
            bofugongdanxx.shenpixx[3].riqi = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
            tb_gc_zijinbflcxx.update({_id:bofugongdanxx._id},{$set:bofugongdanxx});
        }
    }
});
Template.gongdanlb.helpers({
    /*查看功能数据源*/
    shuju_chakanzjbfspb:function () {
        return Template.instance().chakanzjbfspb.get();
    },
    /*初审功能数据源*/
    shuju_chushenzjbfspb:function () {
        return Template.instance().chushenzjbfspb.get();
    },
    /*签批功能数据源*/
    shuju_qianpizjbfspb:function () {
        return Template.instance().qianpizjbfspb.get();
    },
    /*编辑功能数据源*/
    shuju_bianjizjbfspb:function () {
        return Template.instance().bianjizjbfspb.get();
    },
    /*获取处理意见方法*/
    huoquclyj(shuju,n){
        return _.findWhere(shuju,{buzhoubh:n});
    }
});