/* 声明创建 */
Template.gongchengzjbftj.onCreated(function () {
    // 订阅-资金拨付-码表信息
    this.subscribe('zijinbofu_mabiaoxx');
    // 资金拨付信息
    this.zijinbfxx = new ReactiveVar(0);
    // 原始数据-资金拨付信息
    this.yuanshi_zijinbfxx = new ReactiveVar(0);
    // 订阅-资金拨付-项目库
    handle_xmk_tj = this.subscribe('zijinbofu_xiangmuk');

});

/* 处理业务逻辑 */
Template.gongchengzjbftj.helpers({
    // 初始化
    chushihua:function () {
        zijinbfxxff(tb_gc_xiangmuk.find().fetch());
    },
    // 工程资金拨付信息
    gongchengzjbftjxx:function(){
      return   Template.instance().zijinbfxx.get();
    }
});

/* 初始化 */
Template.gongchengzjbftj.rendered = function(){
    // datatable 配置信息
    var appdt = {
        "oLanguage": {//国际语言转化
            "oAria": {
                "sSortAscending": " - click/return to sort ascending",
                "sSortDescending": " - click/return to sort descending"
            },
            "sLengthMenu": "显示 _MENU_ 记录",
            "sZeroRecords": "对不起，查询不到任何相关数据",
            "sEmptyTable": "未有相关数据",
            "sLoadingRecords": "正在加载数据-请等待...",
            "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录。",
            "sInfoEmpty": "当前显示0到0条，共0条记录",
            "sInfoFiltered": "（数据库中共为 _MAX_ 条记录）",
            "sProcessing": "<img src='../resources/user_share/row_details/select2-spinner.gif'/> 正在加载数据...",
            "sSearch": "模糊查询：",
            "sUrl": "",
            //多语言配置文件，可将oLanguage的设置放在一个txt文件中，例：Javascript/datatable/dtCH.txt
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": " 上一页 ",
                "sNext": " 下一页 ",
                "sLast": " 尾页 "
            }
        },
        autoWidth:false, // 关闭
        "ordering": false, // 关闭表格的排序
        "info": true, // 关闭 Showing 1 to 10 of 11 entries
        lengthChange: false, // 每页显示的记录数
        searching: false, // 关闭本地搜索
        pagingType: "full_numbers", // 首页，尾页，上一页和下一页四个按钮,加上数字按钮
        responsive: true,
        dom: '<"html5buttons"B>lTfgitp', // 打印操作
        buttons: [
            {extend: 'excel', title: 'ExampleFile'},
            {extend: 'print',text:"打印预览",
                customize: function (win){
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');

                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');

                    $(win.document.body).find('h1').css('text-align','center');
                }
            }
        ]
    };
    Tracker.autorun(function () {
        if(handle_xmk_tj.ready()){
            Tracker.afterFlush(function () {
                if ($('.dataTables-example').hasClass('dataTable')) {
                    dttable = $('.dataTables-example').dataTable();
                    dttable.fnClearTable(); // 清空一下 table
                    dttable.fnDestroy(); // 还原初始化了的 datatable
                }
                $('.dataTables-example').dataTable(appdt);
            });
        }
    })
};

/* 事件处理 */
Template.gongchengzjbftj.events({
    // 搜索按钮-根据条件重新筛选页面数据
    'click #bofuxxss'(event,instance) {

        // 页面-项目年度
        var xmnd = $('#xmnd').val();
        // 页面-项目名称
        var xmmc = $('#xmmc').val();
        // 页面-项目状态
        var xmzt = $('#xmzt').val();
        // 页面-项目分类
        var xmfl = $('#xmfl').val();
        // 页面-单位名称
        var dwmc = $('#dwmc').val();
        // 页面-服务类型
        var fwlx = $('#fwlx').val();
        // 页面-审批编号
        var spbh = $('#spbh').val();

        // 资金拨付汇总信息
        var zijinbfhzxx = Template.instance().yuanshi_zijinbfxx.get();
        // 返回资金拨付汇总信息
        var fanhui_zijinbfhzxx = new Array();
        for(var i in zijinbfhzxx){
            if(xmnd!='全部'){
                if(String(zijinbfhzxx[i].xiangmund).indexOf(xmnd) ==  -1){
                    continue;
                }
            }
            if(xmmc != ''){
                if(zijinbfhzxx[i].xiangmumc.indexOf(xmmc) == -1){
                    continue;
                }
            }
            if(xmzt!='全部'){
                if(zijinbfhzxx[i].gongchengzt.indexOf(xmzt) ==  -1){
                    continue;
                }
            }
            if(xmfl != '全部'){
                if(zijinbfhzxx[i].xiangmuflmc.indexOf(xmfl) ==  -1){
                    continue;
                }
            }
            if(dwmc!='全部'){
                if(zijinbfhzxx[i].danweimc.indexOf(dwmc) ==  -1){
                    continue;
                }
            }
            if(fwlx!='全部'){
                if(zijinbfhzxx[i].fuwulxmc.indexOf(fwlx) ==  -1){
                    continue;
                }
            }
            if(spbh != ''){
                if(zijinbfhzxx[i].shenpidbh.indexOf(spbh) == -1){
                    continue;
                }
            }

            fanhui_zijinbfhzxx.push(zijinbfhzxx[i]);
        }

        Template.instance().zijinbfxx.set(fanhui_zijinbfhzxx);
    }
});

/* 资金拨付汇总方法 */
function zijinbfxxff(xiangmuk,panduan) {

    // 返回数据-资金拨付信息
    var fanhui_zijinbfhzxx= new Array();

    for (var i in xiangmuk){

        // 合同
        for(var j in xiangmuk[i].xiangmuhtxx){
            for(var k in xiangmuk[i].xiangmuhtxx[j].zijinbfxx){

                // 临时-返回数据
                var result =  new Object();
                // 项目库名称
                result.xiangmumc = xiangmuk[i].xiangmumc;
                // 项目库分类名称
                result.xiangmuflmc = xiangmuk[i].xiangmuflmc;
                // 项目库年度
                result.xiangmund = xiangmuk[i].xiangmund;
                // 工程状态
                result.gongchengzt = xiangmuk[i].gongchengzt;

                // 单位名称
                result.danweimc = xiangmuk[i].xiangmuhtxx[j].danweimc;
                // 服务类型名称
                result.fuwulxmc = xiangmuk[i].xiangmuhtxx[j].fuwulxmc;
                // 合同金额
                result.hetongje = xiangmuk[i].xiangmuhtxx[j].hetongje;
                // 质保金
                result.zhibaoj = xiangmuk[i].xiangmuhtxx[j].zhibaoj;


                // 审批单编号
                result.shenpidbh = xiangmuk[i].xiangmuhtxx[j].zijinbfxx[k].shenpidbh;
                // 支付金额
                result.zhifuje = xiangmuk[i].xiangmuhtxx[j].zijinbfxx[k].zhifuje;
                // 累计拨付金额
                result.leijibfje = xiangmuk[i].xiangmuhtxx[j].zijinbfxx[k].leijibfje;
                // 审定金额
                result.shendingje = xiangmuk[i].xiangmuhtxx[j].zijinbfxx[k].shendingje;
                // 资金拨付日期
                result.zijinbfrq = xiangmuk[i].xiangmuhtxx[j].zijinbfxx[k].zijinbfrq;

                // 返回-资金拨付信息
                fanhui_zijinbfhzxx.push(result);

            }
        }

        // 标段
        for(var j in xiangmuk[i].biaoduanhtxx){
            for(var k in xiangmuk[i].biaoduanhtxx[j].zijinbfxx){

                // 临时-返回数据
                var result =  new Object();
                // 项目库名称
                result.xiangmumc = xiangmuk[i].xiangmumc;
                // 项目库分类名称
                result.xiangmuflmc = xiangmuk[i].xiangmuflmc;
                // 项目库年度
                result.xiangmund = xiangmuk[i].xiangmund;
                // 工程状态
                result.gongchengzt = xiangmuk[i].gongchengzt;

                // 单位名称
                result.danweimc = xiangmuk[i].biaoduanhtxx[j].danweimc;
                // 服务类型名称
                result.fuwulxmc = xiangmuk[i].biaoduanhtxx[j].fuwulxmc;
                // 合同金额
                result.hetongje = xiangmuk[i].biaoduanhtxx[j].hetongje;
                // 质保金
                result.zhibaoj = xiangmuk[i].biaoduanhtxx[j].zhibaoj;


                // 审批单编号
                result.shenpidbh = xiangmuk[i].biaoduanhtxx[j].zijinbfxx[k].shenpidbh;
                // 支付金额
                result.zhifuje = xiangmuk[i].biaoduanhtxx[j].zijinbfxx[k].zhifuje;
                // 累计拨付金额
                result.leijibfje = xiangmuk[i].biaoduanhtxx[j].zijinbfxx[k].leijibfje;
                // 审定金额
                result.shendingje = xiangmuk[i].biaoduanhtxx[j].zijinbfxx[k].shendingje;
                // 资金拨付日期
                result.zijinbfrq = xiangmuk[i].biaoduanhtxx[j].zijinbfxx[k].zijinbfrq;

                // 返回-资金拨付信息
                fanhui_zijinbfhzxx.push(result);

            }
        }

    }

    // 参数判断
    if(panduan){
        // 资金拨付信息
        Template.instance().zijinbfxx.set(fanhui_zijinbfhzxx);
    }else{
        // 资金拨付信息
        Template.instance().yuanshi_zijinbfxx.set(fanhui_zijinbfhzxx);
        Template.instance().zijinbfxx.set(Template.instance().yuanshi_zijinbfxx.get());
    }

}
