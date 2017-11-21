var gongchengzjbfspbxz = {

};
Template.gongchengzjbf.onCreated(function () {
    //订阅：工程资金拨付审批表
    this.subscribe('zijinbofu_gongdanxx');
    //订阅：项目库-新增工程资金拨付审批表时需要
    handle_xmk = this.subscribe('zijinbofu_xiangmuk');
    /*显示工程资金拨付工单信息*/
    //当前显示在页面上的审批表数据
    this.zijinbflcxx = new ReactiveVar(0);
    //原始审批表数据
    this.yuanshi_zijinbflcxx = new ReactiveVar(0);
    /*新增工程资金拨付审批表*/
    //新增工程资金拨付审批表中需要的项目库信息
    this.xiangmukxx = new ReactiveVar(0);
    Tracker.autorun(function () {
        //获取原始审批表数据
        Template.instance().yuanshi_zijinbflcxx.set(tb_gc_zijinbflcxx.find({}));
        //获取当前显示在页面上的审批表数据-初始化时和原始数据相同
        Template.instance().zijinbflcxx.set(Template.instance().yuanshi_zijinbflcxx.get());
        //获取项目库信息
        Template.instance().xiangmukxx.set(tb_gc_xiangmuk.find({}));
    });
});
Template.gongchengzjbf.onRendered(function () {
    Tracker.autorun(function () {
        if(handle_xmk.ready()){
            Tracker.afterFlush(function () {
                $(function () { $("[data-toggle='tooltip']").tooltip({html : true });});
                $("#wizard").steps({
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
                                if (isConfirm) {
                                    swal("提交!", "您的表单提交成功!", "success");
                                } else {
                                    swal("保存!", "您的表单保存成功!", "success");
                                }
                            });
                    }
                });
                $('.select-chosen').chosen({width: "100%",no_results_text: "没有结果"});
                Dropzone.options.dropzoneForm = {
                    paramName: "file", // The name that will be used to transfer the file
                    maxFilesize: 16, // MB
                    dictDefaultMessage: "<strong>拖拽文件到此处或者点击此处上传。 </strong></br> 可上传文件大小不高于16M,可选文件格式为常用文件格式。",
                    addRemoveLinks:true
                };
                $('#chuxianxgd').click(function (){
                    // Display a success toast, with a title
                    toastr.options = {
                        "closeButton": true,
                        "debug": false,
                        "progressBar": true,
                        "preventDuplicates": false,
                        "positionClass": "toast-top-right",
                        "showDuration": "400",
                        "hideDuration": "1000",
                        "timeOut": "7000",
                        "extendedTimeOut": "1000",
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
                    };
                    toastr.options.onclick = function() {
                        $('#zijinbfspbscsmj').modal('show');
                    };
                    toastr.success('您有一条新的工单','点击查看详情！');
                });
            });
        }
    });
    function preview() {
        $("#zijinbfsqb").print({
            //Use Global styles
            globalStyles : false,
            //Add link with attrbute media=print
            mediaPrint : false,
            //Custom stylesheet
            stylesheet : "css/bootstrap.min.css",
            //Print in a hidden iframe
            iframe : false,
            //Don't print this
            noPrintSelector : ".avoid-this",
            //Log to console when printing is done via a deffered callback
            deferred: $.Deferred().done(function() { console.log('Printing done', arguments); })
        });
    };
    function chushen() {
        $('#zijinbfspbcs').modal('hide');
        swal({
                title: "是否审核通过?",
                text: "将此资金拨付申请表提交给下一个处理人员!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "通过",
                cancelButtonText: "打回",
                closeOnConfirm: false,
                closeOnCancel: false },
            function (isConfirm) {
                if (isConfirm) {
                    swal("通过!", "表单审核通过!", "success");
                } else {
                    swal("未通过!", "表单审核未通过!", "error");
                }
            });
    };
    function shangchuansmj() {
        $('#zijinbfspbscsmj').modal('hide');
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
                    swal("提交!", "您的表单提交成功!", "success");
                } else {
                    swal("保存!", "您的表单保存成功!", "success");
                }
            });
    };
});
Template.gongchengzjbf.helpers({
    shuju_gongdanlb:function () {
        return Template.instance().zijinbflcxx.get();
    },
    shuju_xiangmukxx:function () {
        return Template.instance().xiangmukxx.get();
    },
    shuju_xiangmund:function () {
        return _.union(_.pluck(Template.instance().xiangmukxx.get().fetch(),'xiangmund'));
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
        Template.instance().zijinbflcxx.set(_.filter(Template.instance().yuanshi_zijinbflcxx.get().fetch(),function (obj) {
            return obj.dangqiangdzt == '正常' && obj.dangqianclzt == '签批';
        }));
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
        Session.set('gongchengzjbfspbxz',gongchengzjbfspbxz);
    },
    //选择新增工程资金拨付审批表类型
    'click .p-xl':function (event) {
        if(event.target.innerText == '施工类资金拨付审批单'){
            gongchengzjbfspbxz.gongchengxz = '施工类';
        }else if(event.target.innerText == '其他类资金拨付审批单'){
            gongchengzjbfspbxz.gongchengxz = '其他类';
        }
        Session.update('gongchengzjbfspbxz',gongchengzjbfspbxz);
    },
    //选择项目年度
    'change #xiangmundlb':function (event) {
        gongchengzjbfspbxz.xiangmund = event.target.value;
        Session.update('gongchengzjbfspbxz',gongchengzjbfspbxz);
        var xiangmumclb = _.pluck(_.filter(Template.instance().xiangmukxx.get().fetch(),function (obj) {
            return obj.xiangmund == gongchengzjbfspbxz.xiangmund;
        }),'xiangmumc');
        $('#xiangmumclb').empty();
        $('#xiangmumclb').append('<option></option>');
        for(var i = 0 ;i < xiangmumclb.length;i++){
            $('#xiangmumclb').append('<option value="'+xiangmumclb[i]+'">'+xiangmumclb[i]+'</option>');
        }
        $('#xiangmumclb').trigger('chosen:updated');
    },
    //选择项目名称
    'change #xiangmumclb':function (event) {
        gongchengzjbfspbxz.xiangmumc = event.target.value;
        Session.update('gongchengzjbfspbxz',gongchengzjbfspbxz);
        var shoukuandwlb;
        if(gongchengzjbfspbxz.gongchengxz == '施工类'){
            shoukuandwlb = _.pluck(_.filter(Template.instance().xiangmukxx.get().fetch(),function (obj) {
                return obj.xiangmumc == gongchengzjbfspbxz.xiangmumc;
            })[0].biaoduanhtxx,'biaoduanmc');
        }else if(gongchengzjbfspbxz.gongchengxz == '其他类'){
            shoukuandwlb = _.pluck(_.filter(Template.instance().xiangmukxx.get().fetch(),function (obj) {
                return obj.xiangmumc == gongchengzjbfspbxz.xiangmumc;
            })[0].xiangmuhtxx,'danweimc');
        }
        $('#shoukuandwmclb').empty();
        $('#shoukuandwmclb').append('<option></option>');
        for(var i = 0 ;i < shoukuandwlb.length;i++){
            $('#shoukuandwmclb').append('<option value="'+shoukuandwlb[i]+'">'+shoukuandwlb[i]+'</option>');
        }
        $('#shoukuandwmclb').trigger('chosen:updated');
    },
    //选择收款单位
    'change #shoukuandwmclb':function (event) {
        if(gongchengzjbfspbxz.gongchengxz == '施工类'){
            //当前选择为施工类项目，标段名称赋值，获取收款单位
            gongchengzjbfspbxz.biaoduanmc = event.target.value;
            gongchengzjbfspbxz.shoukuandw = _.filter(_.filter(Template.instance().xiangmukxx.get().fetch(),function (obj) {
                return obj.xiangmumc == gongchengzjbfspbxz.xiangmumc && obj.xiangmund == gongchengzjbfspbxz.xiangmund;
            })[0].biaoduanhtxx,function (obj) {
                return obj.biaoduanmc = event.target.value;
            })[0].shoukuandw;
        }else if(gongchengzjbfspbxz.gongchengxz == '其他类'){
            //当前选择为其他类项目，收款单位赋值，标段名称为空
            gongchengzjbfspbxz.shoukuandw = event.target.value;
            gongchengzjbfspbxz.biaoduanmc = '';
        }
        Session.update('gongchengzjbfspbxz',gongchengzjbfspbxz);
        //获取项目信息并添加至资金拨付审批表中
    }
});
Template.gongchengzjbf.onDestroyed(function () {

});