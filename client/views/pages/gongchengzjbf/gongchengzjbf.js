var gongdanxzbyxx = {};
var gongdanxz = {
    "xiangmund" : "",
    "shenpibbh" : "",
    "zhihuibbh" : "",
    "zhihuibmc" : "",
    "shoukuandw" : "",
    "fuwulxbh" : "",
    "fuwulxmc" : "",
    "xiangmuflbh" : "",
    "xiangmuflmc" : "",
    "xiangmubh" : "",
    "xiangmumc" : "",
    "gongchengxz" : "",
    "gongchengzt" : "",
    "biaoduanmc" : "",
    "xiangmunrgm" : "",
    "bokuanyj" : "",
    "hetongbh" : "",
    "hetongje" : "",
    "zandingje" : "",
    "hetongqdj" : "",
    "anquanjf" : "",
    "jiliangzfsdzj" : "",
    "zhishangqljbfzj" : "",
    "weifuzj" : "",
    "zhibaojkc" : "",
    "yingfuzj" : "",
    "benqisqje" : "",
    "benqihdbfje" : "",
    "benqiljbfzj" : "",
    "jihuafwfy" : "",
    "shenqingly" : "",
    "dangqiangdzt" : "",
    "dangqianclzt" : "",
    "xiayibclzt" : "",
    "shenpixx" : [
        {
            "buzhoubh" : "1",
            "buzhoumc" : "填报",
            "chuliyj" : "",
            "xingming" : "",
            "riqi" : ""
        },
        {
            "buzhoubh" : "2",
            "buzhoumc" : "初审",
            "chuliyj" : "",
            "xingming" : "",
            "riqi" : ""
        },
        {
            "buzhoubh" : "3",
            "buzhoumc" : "签批",
            "chuliyj" : "",
            "xingming" : "",
            "riqi" : ""
        },
        {
            "buzhoubh" : "4",
            "buzhoumc" : "拨付",
            "chuliyj" : "",
            "xingming" : "",
            "riqi" : ""
        }
    ]
};
var shifoukkqxlc = false;
Template.gongchengzjbf.onCreated(function () {
    //订阅：工程资金拨付审批表
    this.subscribe('zijinbofu_gongdanxx',Session.get('user').quanxianxx);
    //订阅：项目库-新增工程资金拨付审批表时需要
    handle_xmk = this.subscribe('zijinbofu_xiangmuk',Session.get('user').quanxianxx);
    //订阅：编号信息
    this.subscribe('xitongguanli_bianhaoxx');
    /*显示工程资金拨付工单信息*/
    //当前显示在页面上的审批表数据
    this.zijinbflcxx = new ReactiveVar(0);
    //原始审批表数据
    this.yuanshi_zijinbflcxx = new ReactiveVar(0);
    /*新增工程资金拨付审批表*/
    //新增工程资金拨付审批表中需要的项目库信息
    this.xiangmukxx = new ReactiveVar(0);
    //编号信息
    this.bianhaoxx = new ReactiveVar(0);
    Tracker.autorun(function () {
        //获取原始审批表数据
        Template.instance().yuanshi_zijinbflcxx.set(tb_gc_zijinbflcxx.find({}));
        //获取当前显示在页面上的审批表数据-初始化时和原始数据相同 
        Template.instance().zijinbflcxx.set(Template.instance().yuanshi_zijinbflcxx.get());
        //获取项目库信息
        Template.instance().xiangmukxx.set(tb_gc_xiangmuk.find({}));
        //获取审批表编号
        Template.instance().bianhaoxx.set(ts_gc_bianhaoxx.find({}));
    });
});
Template.gongchengzjbf.onRendered(function () {
    Tracker.autorun( function(computation) {
        if(handle_xmk.ready()){
            Tracker.afterFlush( () => {
                $("#wizard").steps({
                    /*事件*/
                    onStepChanging: function (event, currentIndex, newIndex) {
                        switch(currentIndex){
                            case 0:
                                if(!gongdanxzbyxx.gongchengxz){
                                    alert('请选择工单类型');
                                    return false;
                                }
                                break;
                            case 1:
                                if(newIndex == 0){
                                    return true;
                                }else{
                                    if(!gongdanxzbyxx.xiangmund){
                                        alert('请选择项目年度');
                                        return false;
                                    }else if(!gongdanxzbyxx.xiangmubh){
                                        alert('请选择项目');
                                        return false;
                                    }else if(!gongdanxzbyxx.hetongbh){
                                        alert('请选择收款单位/标段名称');
                                        return false;
                                    }else if(!shifoukkqxlc){
                                        alert('存在未结束的工单');
                                        return false;
                                    }
                                }
                                break;
                            case 2:
                                if(newIndex == 1){
                                    return true;
                                }else{
                                    if(!gongdanxz.bokuanyj){
                                        alert('请输入拨款依据');
                                        return false;
                                    }else if(!gongdanxz.jiliangzfsdzj){
                                        alert('请输入计量支付审定资金');
                                        return false
                                    }else if(!gongdanxz.benqisqje){
                                        alert('请输入本期申请金额');
                                        return false;
                                    }else if(!gongdanxz.benqihdbfje){
                                        alert('请输入本期核定拨付金额');
                                        return false;
                                    }else if(!gongdanxz.shenqingly){
                                        alert('请输入申请理由');
                                        return false;
                                    }
                                }
                                break;
                        }
                        return true;
                    },
                    onStepChanged: function (event, currentIndex) {
                        switch(currentIndex){
                            case 3:
                                //审批表编号
                                $('[name="yulan_shenpibbh"]').text(gongdanxz.shenpibbh);
                                //指挥部名称
                                $('[name="yulan_zhihuibumc"]').text(gongdanxz.zhihuibmc);
                                //审批单编号
                                $('[name="yulan_shenpidbh"]').text(gongdanxz.shenpidbh);
                                //收款单位
                                $('[name="yulan_shoukuandw"]').text(gongdanxz.shoukuandw);
                                //服务类型
                                $('[name="yulan_fuwulxmc"]').text(gongdanxz.fuwulxmc);
                                //项目名称
                                $('[name="yulan_xiangmumc"]').text(gongdanxz.xiangmumc);
                                //工程性质
                                $('[name="yulan_xiangmuxz"]').text(gongdanxz.gongchengxz);
                                //标段名称
                                $('[name="yulan_biaoduanmc"]').text(gongdanxz.biaoduanmc);
                                //项目内容规模
                                $('[name="yulan_xiangmunrgm"]').text(gongdanxz.xiangmunrgm);
                                //拨款依据
                                $('[name="yulan_bokuanyj"]').text(gongdanxz.bokuanyj);
                                //工程状态
                                $('[name="yulan_gongchengzt"]').text(gongdanxz.gongchengzt);
                                //暂定金额
                                $('[name="yulan_zandingje"]').text(gongdanxz.zandingje);
                                //合同金额
                                $('[name="yulan_hetongje"]').text(gongdanxz.hetongje);
                                //合同清单价
                                $('[name="yulan_hetongqdj"]').text(gongdanxz.hetongqdj);
                                //安全经费
                                $('[name="yulan_anquanjf"]').text(gongdanxz.anquanjf);
                                //计量支付审定资金
                                $('[name="yulan_jiliangzfsdzj"]').text(gongdanxz.jiliangzfsdzj);
                                //至上期累计拨付资金
                                $('[name="yulan_zhishangqljbfzj"]').text(gongdanxz.zhishangqljbfzj);
                                //未付资金
                                $('[name="yulan_weifuzj"]').text(gongdanxz.weifuzj);
                                //质保金扣除
                                $('[name="yulan_zhbaojkc"]').text(gongdanxz.zhibaojkc);
                                //应付资金
                                $('[name="yulan_yingfuzj"]').text(gongdanxz.yingfuzj);
                                //本期申请资金
                                $('[name="yulan_benqisqzj"]').text(gongdanxz.benqisqje);
                                //本期核定拨付资金
                                $('[name="yulan_benqihdbfzj"]').text(gongdanxz.benqihdbfje);
                                //本期累计拨付资金
                                $('[name="yulan_benqiljbfzj"]').text(gongdanxz.benqiljbfzj);
                                //申请理由
                                $('[name="yulan_shenqingly"]').text(gongdanxz.shenqingly);

                                /*获取处理意见*/
                                //填报处理意见
                                gongdanxz.shenpixx[0].chuliyj = '通过';
                                $('[name="yulan_tianbaoyj"]').text(gongdanxz.shenpixx[0].chuliyj);
                                //填报人
                                gongdanxz.shenpixx[0].xingming = Session.get('user').username;
                                $('[name="yulan_tianbaor"]').text(gongdanxz.shenpixx[0].xingming);
                                //填报日期
                                var date = new Date();
                                gongdanxz.shenpixx[0].riqi = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
                                $('[name="yulan_tianbaorq"]').text(gongdanxz.shenpixx[0].riqi);
                                break;
                        }
                    },
                    onFinished: function (event, currentIndex)
                    {
                        $('#xinjianzjbfspb').modal('hide');
                        swal({
                                title: "是否需要提交?",
                                text: "将此资金拨付申请表提交给下一个处理人员!",
                                type: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "提交",
                                cancelButtonText: "仅保存",
                                closeOnConfirm: false,
                                closeOnCancel: false },
                            function (isConfirm) {
                                gongdanxz.dangqiangdzt = '正常';
                                if (isConfirm) {
                                    gongdanxz.dangqianclzt = '初审';
                                    swal("提交!", "您的表单提交成功!", "success");
                                } else {
                                    gongdanxz.dangqianclzt = '填报';
                                    swal("保存!", "您的表单保存成功!", "success");
                                }
                                tb_gc_zijinbflcxx.insert(gongdanxz,(error) => {
                                    if(error){
                                        console.log('插入失败！');
                                    }else{
                                        //更新编号信息
                                        ts_gc_bianhaoxx.update({_id:gongdanxzbyxx._id},{$set:{shenpibbh:(Array(5).join('0') + (parseInt(gongdanxzbyxx.shenpibbh)+1)).slice(-5)}});
                                        window.location.reload();
                                    }
                                });
                            });
                    },
                    /*标签*/
                    labels: {
                        cancel: "取消",
                        current: "当前步骤:",
                        pagination: "分页",
                        finish: "完成",
                        next: "下一步",
                        previous: "上一步",
                        loading: "加载中..."
                    }
                });
                $(function () { $("[data-toggle='tooltip']").tooltip({html : true });});
                $('.select-chosen').chosen({width: "100%",no_results_text: "没有结果"});
                computation.stop();
            });
        }
    });
});
Template.gongchengzjbf.helpers({
    shuju_gongdanlb:function () {
        return Template.instance().zijinbflcxx.get();
    },
    shuju_xiangmund:function () {
        return _.union(_.pluck(Template.instance().xiangmukxx.get().fetch(),'xiangmund'));
    },
    user:function () {
        return Session.get('user');
    }
});
Template.gongchengzjbf.events({
    /*查看未完成工单点击事件*/
    'click #chakanwwcgd':function (event) {
        Template.instance().zijinbflcxx.set(_.filter(Template.instance().yuanshi_zijinbflcxx.get().fetch(),function (obj) {
            return obj.dangqiangdzt == '正常' && obj.dangqianclzt != '完成';
        }));
    },
    /*查看已完成工单点击事件*/
    'click #chakanywcgd':function (event) {
        Template.instance().zijinbflcxx.set(_.filter(Template.instance().yuanshi_zijinbflcxx.get().fetch(),function (obj) {
            return obj.dangqiangdzt == '正常' && obj.dangqianclzt == '完成';
        }));
    },
    /*查看作废工单点击事件*/
    'click #chakanzfgd':function (event) {
        Template.instance().zijinbflcxx.set(_.filter(Template.instance().yuanshi_zijinbflcxx.get().fetch(),function (obj) {
            return obj.dangqiangdzt == '作废';
        }));
    },
    /*查看全部工单点击事件*/
    'click #chakanqbgd':function (event) {
        Template.instance().zijinbflcxx.set(Template.instance().yuanshi_zijinbflcxx.get());
    },
    /*查看未处理工单点击事件*/
    'click #chakanwclgd':function (event) {
        if(Session.get('user').zhanghaolx == '普通'){
            Template.instance().zijinbflcxx.set(_.filter(Template.instance().yuanshi_zijinbflcxx.get().fetch(),function (obj) {
                return obj.dangqiangdzt == '正常' && (obj.dangqianclzt == '填报' || obj.dangqianclzt == '签批');
            }));
        }else if(Session.get('user').zhanghaolx == '财务'){
            Template.instance().zijinbflcxx.set(_.filter(Template.instance().yuanshi_zijinbflcxx.get().fetch(),function (obj) {
                return obj.dangqiangdzt == '正常' && (obj.dangqianclzt == '初审' || obj.dangqianclzt == '拨付');
            }));
        }else if(Session.get('user').zhanghaolx == '管理员'){
            Template.instance().zijinbflcxx.set(_.filter(Template.instance().yuanshi_zijinbflcxx.get().fetch(),function (obj) {
                return obj.dangqiangdzt == '正常' && obj.dangqianclzt != '完成';
            }));
        }
    },
    /*选择搜索类型为项目名称点击事件*/
    'click #sousuoxx_xmmc':function (event) {
        $('#sousuoxx').text('项目名称');
        $('#sousuokuang').typeahead('destroy');
        $('#sousuokuang').typeahead({
            source: Template.instance().yuanshi_zijinbflcxx.get().fetch(),
            displayText:function (item) {
                return item.xiangmumc;
            }
        });
    },
    /*选择搜索类型为收款单位点击事件*/
    'click #sousuoxx_skdw':function (event) {
        $('#sousuoxx').text('收款单位');
        $('#sousuokuang').typeahead('destroy');
        $('#sousuokuang').typeahead({
            source: Template.instance().yuanshi_zijinbflcxx.get().fetch(),
            displayText:function (item) {
                return item.shoukuandw;
            }
        });
    },
    /*选择搜索类型为服务类型点击事件*/
    'click #sousuoxx_fwlx':function (event) {
        $('#sousuoxx').text('服务类型');
        $('#sousuokuang').typeahead('destroy');
        $('#sousuokuang').typeahead({
            source: Template.instance().yuanshi_zijinbflcxx.get().fetch(),
            displayText:function (item) {
                return item.fuwulxmc;
            }
        });
    },
    /*选择搜索类型为模糊匹配点击事件*/
    'click #sousuoxx_mhpp':function (event) {
        $('#sousuoxx').text('模糊匹配');
        $('#sousuokuang').typeahead('destroy');
        $('#sousuokuang').typeahead({
            //TODO:模糊匹配
            source: Template.instance().yuanshi_zijinbflcxx.get().fetch(),
            displayText:function (item) {
                return item.xiangmumc;
            }
        });
    },
    /*搜索点击事件*/
    'click #sousuo':function (event) {
        if($('#sousuoxx').text() === '请选择搜索类型'){
            alert('请选择搜索类型');
        }else{
            var sousuokuang = $('#sousuokuang').val();
            switch ($('#sousuoxx').text()){
                case '项目名称':
                    Template.instance().zijinbflcxx.set(_.filter(Template.instance().yuanshi_zijinbflcxx.get().fetch(),function (obj) {
                        return obj.xiangmumc === sousuokuang;
                    }));
                    break;
                case '收款单位':
                    Template.instance().zijinbflcxx.set(_.filter(Template.instance().yuanshi_zijinbflcxx.get().fetch(),function (obj) {
                        return obj.shoukuandw === sousuokuang;
                    }));
                    break;
                case '服务类型':
                    Template.instance().zijinbflcxx.set(_.filter(Template.instance().yuanshi_zijinbflcxx.get().fetch(),function (obj) {
                        return obj.fuwulxmc === sousuokuang;
                    }));
                    break;
                case '模糊匹配':
                    Template.instance().zijinbflcxx.set(_.filter(Template.instance().yuanshi_zijinbflcxx.get().fetch(),function (obj) {
                        return obj.xiangmumc === sousuokuang;
                    }));
                    break;
            }
        }
    },
    /*新增工程资金拨付审批表*/
    //触发自动保存内容
    'click #xinzenggczjbfspb':function () {
        Session.set('gongdanxz',gongdanxz);
    },
    //选择新增工程资金拨付审批表类型
    'click .p-xl':function (event) {
        if(event.target.innerText == '施工类资金拨付审批单'){
            gongdanxzbyxx.gongchengxz = '施工类';
        }else if(event.target.innerText == '其他类资金拨付审批单'){
            gongdanxzbyxx.gongchengxz = '其他类';
        }
        //Session.update('gongdanxzbyxx',gongdanxzbyxx);
    },
    //选择项目年度
    'change #xiangmundlb':function (event) {
        gongdanxzbyxx.xiangmund = event.target.value;
        //Session.update('gongdanxzbyxx',gongdanxzbyxx);
        var xiangmulb = _.filter(Template.instance().xiangmukxx.get().fetch(),function (obj) {
            return obj.xiangmund == gongdanxzbyxx.xiangmund;
        });
        $('#xiangmumclb').empty();
        $('#xiangmumclb').append('<option></option>');
        for(var i = 0 ;i < xiangmulb.length;i++){
            $('#xiangmumclb').append('<option value="'+xiangmulb[i].xiangmubh+'">'+xiangmulb[i].xiangmumc+'</option>');
        }
        $('#xiangmumclb').trigger('chosen:updated');
    },
    //选择项目名称
    'change #xiangmumclb':function (event) {
        gongdanxzbyxx.xiangmubh = event.target.value;
        //Session.update('gongdanxzbyxx',gongdanxzbyxx);
        $('#shoukuandwmclb').empty();
        $('#shoukuandwmclb').append('<option></option>');
        var hetonglb;
        if(gongdanxzbyxx.gongchengxz == '施工类'){
            hetonglb = _.findWhere(Template.instance().xiangmukxx.get().fetch(),{xiangmubh:gongdanxzbyxx.xiangmubh}).biaoduanhtxx;
            for(var i = 0 ;i < hetonglb.length;i++){
                $('#shoukuandwmclb').append('<option value="'+hetonglb[i].hetongbh+'">'+hetonglb[i].biaoduanmc+'</option>');
            }
        }else if(gongdanxzbyxx.gongchengxz == '其他类') {
            hetonglb = _.findWhere(Template.instance().xiangmukxx.get().fetch(), {xiangmubh: gongdanxzbyxx.xiangmubh}).xiangmuhtxx;
            for (var i = 0; i < hetonglb.length; i++) {
                $('#shoukuandwmclb').append('<option value="' + hetonglb[i].hetongbh + '">' + hetonglb[i].danweimc + '</option>');
            }
        }
        $('#shoukuandwmclb').trigger('chosen:updated');
    },
    //选择收款单位
    'change #shoukuandwmclb':function (event) {
        /*新增工单并读取信息*/
        gongdanxzbyxx.hetongbh = event.target.value;
        /*检查是否存在为结束的工单流程*/
        var cunzai =_.filter(_.where(Template.instance().yuanshi_zijinbflcxx.get().fetch(),{hetongbh:gongdanxzbyxx.hetongbh}),function (obj) {
            //当不是完成或者拨付状态时不能开启新的资金拨付流程
            return obj.dangqianclzt != '完成' && obj.dangqiangdzt == '正常';
        }).length;
        if(cunzai === 0){
            shifoukkqxlc = true;
        }
        var bianhaoxx = Template.instance().bianhaoxx.get().fetch()[0];
        gongdanxzbyxx._id = bianhaoxx._id;
        gongdanxzbyxx.shenpibbh = bianhaoxx.shenpibbh;
        //获取项目信息
        var xiangmuxx = _.findWhere(Template.instance().xiangmukxx.get().fetch(),{xiangmubh:gongdanxzbyxx.xiangmubh});
        //获取合同信息
        var hetongxx = {};
        /*生成审批单编号*/
        var shenpibbh = xiangmuxx.zhihuibbh+xiangmuxx.xiangmuflbh+xiangmuxx.xiangmund;
        if(gongdanxzbyxx.gongchengxz == '施工类'){
            //当前选择为施工类项目，标段名称赋值，获取收款单位
            hetongxx = _.findWhere(xiangmuxx.biaoduanhtxx,{hetongbh:gongdanxzbyxx.hetongbh});
            shenpibbh += '1'+hetongxx.xulieh+bianhaoxx.shenpibbh;
        }else if(gongdanxzbyxx.gongchengxz == '其他类'){
            //当前选择为其他类项目，收款单位赋值，标段名称为空
            hetongxx = _.findWhere(xiangmuxx.xiangmuhtxx,{hetongbh:gongdanxzbyxx.hetongbh});
            shenpibbh += '2'+hetongxx.xulieh+bianhaoxx.shenpibbh;
        }
        gongdanxz.shenpibbh = shenpibbh;
        /*显示历史资金拨付信息*/
        var biaoge = $('#lishibfxx').children('tbody');
        biaoge.empty();
        if(hetongxx.zijinbfxx.length == 0){
            biaoge.append('<tr><td colspan="6">没有历史拨付信息</td></tr>');
        }else{
            for(var i = 0;i < hetongxx.zijinbfxx.length;i++){
                biaoge.append('<tr><td>'+hetongxx.zijinbfxx[i].shenpibbh+
                    '</td><td>'+hetongxx.zijinbfxx[i].querenzfsj+
                    '</td><td>'+hetongxx.zijinbfxx[i].zhifuje+
                    '</td><td>'+hetongxx.zijinbfxx[i].zhishangqljbfje+
                    '</td><td>'+hetongxx.zijinbfxx[i].shendingje+
                    '</td><td><a target="_blank" href="'+hetongxx.zijinbfxx[i].shenpifj+'">审批表</a></td></tr>');
            }
        }

        /*将项目信息保存在session中，1、为了自动保存。2、为了展现在下一步上*/
        //项目年度
        gongdanxz.xiangmund = xiangmuxx.xiangmund;
        //指挥部编号
        gongdanxz.zhihuibbh = xiangmuxx.zhihuibbh;
        //指挥部名称
        gongdanxz.zhihuibmc = xiangmuxx.zhihuibmc;
        //项目编号
        gongdanxz.xiangmubh = xiangmuxx.xiangmubh;
        //项目名称
        gongdanxz.xiangmumc = xiangmuxx.xiangmumc;
        //工程性质
        gongdanxz.gongchengxz = xiangmuxx.gongchengxz;
        //工程状态
        gongdanxz.gongchengzt = xiangmuxx.gongchengzt;
        //项目内容规模
        gongdanxz.xiangmunrgm = xiangmuxx.xiangmujj;
        //项目分类编号
        gongdanxz.xiangmuflbh = xiangmuxx.xiangmuflbh;
        //项目分类名称
        gongdanxz.xiangmuflmc = xiangmuxx.xiangmuflmc;
        /*获取项目信息并添加至资金拨付审批表中:
            指挥部编号、指挥部名称、收款单位、服务类型编号、服务类型名称、
            项目编号、项目名称、工程性质、项目内容规模、合同金额、暂定金额、计量支付审定资金、质保金扣除*/
        //审批表编号
        $('[name="shenpibbh"]').text(gongdanxz.shenpibbh);
        //指挥部名称
        $('[name="zhihuibmc"]').text(xiangmuxx.zhihuibmc);
        //项目名称
        $('[name="xiangmumc"]').text(xiangmuxx.xiangmumc);
        //工程性质
        $('[name="gongchengxz"]').text(xiangmuxx.gongchengxz);
        //项目内容规模
        $('[name="xiangmunrgm"]').text(xiangmuxx.xiangmujj);
        //工程状态
        $('[name="gongchengzt"]').text(xiangmuxx.gongchengzt);

        /*将收款单位信息保存在session中，1、为了自动保存。2、为了展现在下一步上*/
        //收款单位
        gongdanxz.shoukuandw = hetongxx.danweimc;
        //服务类型编号
        gongdanxz.fuwulxbh = hetongxx.fuwulxbh;
        //服务类型名称
        gongdanxz.fuwulxmc = hetongxx.fuwulxmc;
        //标段名称
        gongdanxz.biaoduanmc = hetongxx.biaoduanmc;
        //合同金额
        gongdanxz.hetongje = hetongxx.hetongje;
        //暂定金额
        gongdanxz.zandingje = hetongxx.zandingje;
        //合同清单价
        gongdanxz.hetongqdj = hetongxx.hetongqdj;
        //暂时计量支付审定资金
        gongdanxz.jiliangzfsdzj = hetongxx.jiliangzfsdzj;
        //合同编号
        gongdanxz.hetongbh = hetongxx.hetongbh;

        //标段名称
        $('[name="biaoduanmc"]').text(hetongxx.biaoduanmc);
        //收款单位
        $('[name="shoukuandw"]').text(hetongxx.danweimc);
        //服务类型
        $('[name="fuwulxmc"]').text(hetongxx.fuwulxmc);
        //暂定金额
        $('[name="zandingje"]').text(hetongxx.zandingje);
        //合同金额
        $('[name="hetongje"]').text(hetongxx.hetongje);
        //合同清单价
        $('[name="hetongqdj"]').text(hetongxx.hetongqdj);

        /*将自动计算信息保存在session中，1、为了自动保存。2、为了展现在下一步上*/
        //安全经费
        gongdanxz.anquanjf = (parseFloat(hetongxx.hetongje)*0.03).toFixed(6);

        //以下为计算得出
        //至上期累计拨付资金
        $('[name="zhishangqljbfzj"]').text(function () {
            return (_.reduce(_.pluck(hetongxx.zijinbfxx, 'zhifuje'), function(memo, num){ return memo + parseFloat(num); }, 0)).toFixed(6);
        });
        //安全经费
        $('[name="anquanjf"]').text(function () {
            return (parseFloat(hetongxx.hetongje)*0.03).toFixed(6);
        });
        //至上期累计拨付资金
        gongdanxz.zhishangqljbfzj = $('[name="zhishangqljbfzj"]').text();

        //更新Session中的gongdanxz
        Session.update('gongdanxz',gongdanxz);
    },
    /*本期申请资金变更事件*/
    'change [name="benqisqzj"]':function () {
        gongdanxz.benqisqje = $('[name="benqisqzj"]').val();
        //更新Session中的gongdanxz
        Session.update('gongdanxz',gongdanxz);
    },
    /*计量支付审定资金变更事件*/
    'change [name="jiliangzfsdzj"]':function () {
        //未付资金=总计量支付审定资金-至上期累计拨付资金
        var weifuzj = (parseFloat($('[name="jiliangzfsdzj"]').val()) + parseFloat(gongdanxz.jiliangzfsdzj) - parseFloat($('[name="zhishangqljbfzj"]').text())).toFixed(6);
        $('[name="weifuzj"]').text(function () {
            return weifuzj;
        });
        //应付资金=本期计量支付审定资金-质保金扣除
        var yingfuzj = (parseFloat($('[name="jiliangzfsdzj"]').val())*0.97).toFixed(6);
        $('[name="yingfuzj"]').text(function () {
            return yingfuzj;
        });
        //质保金扣除
        $('[name="zhibaojkc"]').text((parseFloat($('[name="jiliangzfsdzj"]').val())*0.03).toFixed(6));
        //将应付资金、未付资金与计量支付审定资金加入本次新增工单中
        gongdanxz.zhibaojkc = (parseFloat($('[name="jiliangzfsdzj"]').val())*0.03).toFixed(6);
        gongdanxz.yingfuzj = yingfuzj;
        gongdanxz.weifuzj = weifuzj;
        gongdanxz.jiliangzfsdzj = $('[name="jiliangzfsdzj"]').val();
        //更新Session中的gongdanxz
        Session.update('gongdanxz',gongdanxz);
    },
    /*拨款依据变更事件*/
    'change [name="bokuanyj"]':function () {
        gongdanxz.bokuanyj = $('[name="bokuanyj"]').val();
        //更新Session中的gongdanxz
        Session.update('gongdanxz',gongdanxz);
    },
    /*本期核定拨付资金*/
    'change [name="benqihdbfzj"]':function () {
        gongdanxz.benqihdbfje = $('[name="benqihdbfzj"]').val();
        //输出本期累计拨付资金
        gongdanxz.benqiljbfzj = (parseFloat($('[name="benqihdbfzj"]').val()) + parseFloat($('[name="zhishangqljbfzj"]').text())).toFixed(6);
        $('[name="benqiljbfzj"]').text(gongdanxz.benqiljbfzj);
        //更新Session中的gongdanxz
        Session.update('gongdanxz',gongdanxz);
    },
    /*申请理由变更事件*/
    'change [name="shenqingly"]':function () {
        gongdanxz.shenqingly = $('[name="shenqingly"]').val();
        //更新Session中的gongdanxz
        Session.update('gongdanxz',gongdanxz);
    }
});
Template.gongchengzjbf.onDestroyed(function () {

});