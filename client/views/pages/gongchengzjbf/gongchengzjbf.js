
Template.gongchengzjbf.onCreated(function () {

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
Template.gongchengzjbf.onDestroyed(function () {

});