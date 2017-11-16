Template.gongchengzjbf.onCreated(function () {
    this.zijinbflcxx = new ReactiveVar(0);
    this.yuanshi_zijinbflcxx = new ReactiveVar(0);
    Tracker.autorun(function () {
        Meteor.subscribe('zijinbofu_gongdanxx');
        Template.instance().yuanshi_zijinbflcxx.set(tb_gc_zijinbflcxx.find({}));
        Template.instance().zijinbflcxx.set(Template.instance().yuanshi_zijinbflcxx.get());
    });
});
Template.gongchengzjbf.onRendered(function () {
    $(function () { $("[data-toggle='tooltip']").tooltip({html : true });});
    $(document).ready(function(){
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

        $('.chosen-select').chosen({width: "100%"});
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
Template.gongchengzjbf.helpers({
    data_gongdanlb:function () {
        return Template.instance().zijinbflcxx.get();
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
    }
});
Template.gongchengzjbf.onDestroyed(function () {

});