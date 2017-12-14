/* 声明创建 */
Template.gongchengzjbfmx.onCreated(function () {
    // 订阅-资金拨付信息-项目库
    handle_xmk_mx = this.subscribe('zijinbofu_xiangmuk');

    // 码表信息
    this.mabiaoxx = new ReactiveVar(0);
    // 原始-码表信息
    this.yuanshi_mabiaoxx = new ReactiveVar(0);
    // 订阅-资金拨付-码表信息
    this.subscribe('zijinbofu_mabiaoxx');

    Tracker.autorun(function () {
        Template.instance().yuanshi_mabiaoxx.set(ts_gc_mabiaoxx.find())
        Template.instance().mabiaoxx.set(Template.instance().yuanshi_mabiaoxx.get());
    })
});


Template.gongchengzjbfmx.helpers({
    niandu:function () {
        return mabiaoffmz('年度');
    },
    xiangmuzt:function () {
        return mabiaoffmz('项目状态');
    },
    xiangmufl:function () {
        return mabiaoffmz('项目分类');
    },
    fuwulx:function () {
        return mabiaoffmz('服务类型');
    }

});

// 码表返回码值
function mabiaoffmz(mabiaomc) {
    // 码表数据源
    var mabiaoxx = Template.instance().mabiaoxx.get().fetch();
    // 返回-码表信息码值
    var fanhui_mabiaoxxmz = new Array();

    for(var i in mabiaoxx){
        if(mabiaoxx[i].mabiaomc == mabiaomc){
            for(var j in mabiaoxx[i].mabiaoxx){
                var mabiaoxxobj = new Object();

                mabiaoxxobj.mazhi = mabiaoxx[i].mabiaoxx[j].mazhi;
                fanhui_mabiaoxxmz.push(mabiaoxxobj);
            }
        }
    }
    return fanhui_mabiaoxxmz;
}

/* 事件处理 */
Template.gongchengzjbfmx.rendered = function(){

    Tracker.autorun(function (computation) {

        // 项目库数据
        var xiangmuk = tb_gc_xiangmuk.find().fetch();

        // 返回数据-资金拨付信息
        var fanhui_zijinbfhzxx = new Array();

        for (var i in xiangmuk){

            // 合同
            for(var j in xiangmuk[i].xiangmuhtxx){

                // 临时-返回数据
                var result =  new Array();
                // 临时-返回list数据
                var resultList = new Array();
                // 项目库年度
                result[0] = xiangmuk[i].xiangmund;
                // 项目库名称
                result[1] = xiangmuk[i].xiangmumc;
                // 项目库分类名称
                result[2] = xiangmuk[i].xiangmuflmc;
                // 单位名称
                result[3] = xiangmuk[i].xiangmuhtxx[j].danweimc;
                // 服务类型名称
                result[4] = xiangmuk[i].xiangmuhtxx[j].fuwulxmc;
                // 项目状态
                result[5] = xiangmuk[i].gongchengzt;
                // 项目库标识
                result[6] = 'xiangmuhtxx' + i + j;

                for(var k in xiangmuk[i].xiangmuhtxx[j].zijinbfxx){

                    // 临时-返回数据明细
                    var resultmx = new Array();
                    // 状态
                    resultmx[0] = parseFloat(k)+1;
                    // 合同金额
                    resultmx[1] = xiangmuk[i].xiangmuhtxx[j].hetongje;
                    // 质保金
                    resultmx[2] = xiangmuk[i].xiangmuhtxx[j].zhibaoj;
                    // 支付金额
                    resultmx[3] = xiangmuk[i].xiangmuhtxx[j].zijinbfxx[k].zhifuje;
                    // 累计拨付金额
                    resultmx[4] = xiangmuk[i].xiangmuhtxx[j].zijinbfxx[k].leijibfje;
                    // 审批单编号
                    resultmx[5] = xiangmuk[i].xiangmuhtxx[j].zijinbfxx[k].shenpidbh;
                    // 填报人
                    resultmx[6] = xiangmuk[i].xiangmuhtxx[j].zijinbfxx[k].tianbaor;
                    // 初审人
                    resultmx[7] = xiangmuk[i].xiangmuhtxx[j].zijinbfxx[k].chushenr;
                    // 确认支付时间
                    resultmx[8] = xiangmuk[i].xiangmuhtxx[j].zijinbfxx[k].querenzfsj;
                    // 审批表附件
                    resultmx[9] = xiangmuk[i].xiangmuhtxx[j].zijinbfxx[k].shenpifj;

                    // 返回明细
                    resultList.push(resultmx);
                }

                // 明细赋值
                result.bofuxxmf = resultList;
                // 返回-资金拨付信息
                fanhui_zijinbfhzxx.push(result);
            }
            //console.log(fanhui_zijinbfhzxx);

            // 标段
            for(var j in xiangmuk[i].biaoduanhtxx){

                // 临时-返回数据
                var result =  new Array();
                // 临时-返回list数据
                var resultList = new Array();
                // 项目库年度
                result[0] = xiangmuk[i].xiangmund;
                // 项目库名称
                result[1] = xiangmuk[i].xiangmumc;
                // 项目库分类名称
                result[2] = xiangmuk[i].xiangmuflmc;
                // 单位名称
                result[3] = xiangmuk[i].biaoduanhtxx[j].danweimc;
                // 服务类型名称
                result[4] = xiangmuk[i].biaoduanhtxx[j].fuwulxmc;
                // 项目状态
                result[5] = xiangmuk[i].gongchengzt;
                // 项目库标识
                result[6] = 'biaoduanhtxx' + i + j;

                for(var k in xiangmuk[i].biaoduanhtxx[j].zijinbfxx){

                    // 临时-返回数据明细
                    var resultmx = new Object();
                    // 状态
                    resultmx[0] = parseFloat(k)+1;
                    // 合同金额
                    resultmx[1] = xiangmuk[i].biaoduanhtxx[j].hetongje;
                    // 质保金
                    resultmx[2] = xiangmuk[i].biaoduanhtxx[j].zhibaoj;
                    // 支付金额
                    resultmx[3] = xiangmuk[i].biaoduanhtxx[j].zijinbfxx[k].zhifuje;
                    // 累计拨付金额
                    resultmx[4] = xiangmuk[i].biaoduanhtxx[j].zijinbfxx[k].leijibfje;
                    // 审批单编号
                    resultmx[5] = xiangmuk[i].biaoduanhtxx[j].zijinbfxx[k].shenpidbh;
                    // 填报人
                    resultmx[6] = xiangmuk[i].biaoduanhtxx[j].zijinbfxx[k].tianbaor;
                    // 初审人
                    resultmx[7] = xiangmuk[i].biaoduanhtxx[j].zijinbfxx[k].chushenr;
                    // 确认支付时间
                    resultmx[8] = xiangmuk[i].biaoduanhtxx[j].zijinbfxx[k].querenzfsj;
                    // 审批表附件
                    resultmx[9] = xiangmuk[i].biaoduanhtxx[j].zijinbfxx[k].shenpifj;

                    // 返回明细
                    resultList.push(resultmx);
                }

                // 明细赋值
                result.bofuxxmf = resultList;
                // 返回-资金拨付信息
                fanhui_zijinbfhzxx.push(result);
            }

        }

        if(handle_xmk_mx.ready()){

            Tracker.afterFlush(function () {

                if ($('.dataTables-example').hasClass('dataTable')) {
                    dttable = $('.dataTables-example').dataTable();
                    dttable.fnClearTable(); // 清空一下 table
                    dttable.fnDestroy(); // 还原初始化了的 datatable
                }

                computation.stop();

                // datatable 配置信息
                var appdt = {
                    "aaData":fanhui_zijinbfhzxx,
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
                    searching: true, // 关闭本地搜索
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
                    ],
                    // set the initial value
                    "fnCreatedRow": function(nRow, aData, iDataIndex) {
                        //console.log(nRow);
                        $('td:eq(0)', nRow).parent().attr('class','row-details').attr('data_id',aData[6]);
                        // <span class="row-details row-details-close" data_id="xiangmuhtxx00"></span>
                        //$('td', nRow).setAttribute('class','row-details row-details-close');
                        //$('td', nRow).setAttribute('data_id',aData[6]);
                        //$('tr', nRow).setAttribute('data_id',aData[6]);
                    }
                };

                $('.dataTables-example').dataTable(appdt);
                // 隐藏搜索按钮
                $(".dataTables_filter :first").hide();

                var oTable = $('.dataTables-example').dataTable();

                Tracker.autorun(function () {
                    $('.dataTables-example').on('click', ' tbody .row-details',
                        function() {
                            var nTr = $(this);
                            if (oTable.fnIsOpen(nTr)) //判断是否已打开
                            {
                                /!* This row is already open - close it *!/
                                $(this).addClass("row-details-close").removeClass("row-details-open");
                                oTable.fnClose(nTr);
                            } else {
                                /!* Open this row *!/
                                $(this).addClass("row-details-open").removeClass("row-details-close");
                                //  alert($(this).attr("data_id"));
                                //oTable.fnOpen( nTr,
                                // 调用方法显示详细信息 data_id为自定义属性 存放配置ID
                                fnFormatDetails(nTr, $(this).attr("data_id"));
                            }
                        }
                    );

                    function fnFormatDetails(nTr, pdataId) {
                        //根据配置Id 异步查询数据
                        debugger;
                        var array = fanhui_zijinbfhzxx;
                        for(var i in array){

                            if (pdataId == array[i][6]) {
                                var sOut = '';
                                sOut += '<table class="table table-striped table-bordered table-hover">'
                                sOut +=     '<thead>';
                                sOut +=         '<tr>';
                                sOut +=             '<th>状态</th>';
                                sOut +=             '<th title="万元">合同金额</th>';
                                sOut +=             '<th title="万元">质保金</th>';
                                sOut +=             '<th title="万元">支付情况</th>';
                                sOut +=             '<th title="万元">已累计拨付资金</th>';
                                sOut +=             '<th >审批编号</th>';
                                sOut +=             '<th >填报人</th>';
                                sOut +=             '<th >初审人</th>';
                                sOut +=             '<th >确认支付时间</th>';
                                sOut +=             '<th>审核表及附件</th>';
                                sOut +=           '</tr>';
                                sOut +=         '</thead>';
                                sOut +=         '<tbody>';
                                for (var j in array[i].bofuxxmf) {

                                    // '<center> <p style="width:70%">' + array[i].bofuxxmf[j][0] + '</p></center>';

                                    sOut +=           '<tr>';
                                    sOut +=              '<td><span class="label label-primary">第' + array[i].bofuxxmf[j][0] + '次拨付</span></td>';
                                    sOut +=              '<td>'+ array[i].bofuxxmf[j][1] +'</td>';
                                    sOut +=              '<td>'+ array[i].bofuxxmf[j][2] +'</td>';
                                    sOut +=              '<td>'+ array[i].bofuxxmf[j][3] +'</td>';
                                    sOut +=              '<td>'+ array[i].bofuxxmf[j][4] +'</td>';
                                    sOut +=              '<td>'+ array[i].bofuxxmf[j][5] +'</td>';
                                    sOut +=              '<td>'+ array[i].bofuxxmf[j][6] +'</td>';
                                    sOut +=              '<td>'+ array[i].bofuxxmf[j][7] +'</td>';
                                    sOut +=              '<td>'+ array[i].bofuxxmf[j][8] +'</td>';
                                    sOut +=              '<td><button class="btn-white btn btn-xs" data-toggle="modal" data-target="#myModal">'+ array[i].bofuxxmf[j][9] +'</button></td>';
                                    sOut +=           '</tr>';
                                }
                                sOut +=       '</tbody>';
                                sOut +=  '</table>';
                                oTable.fnOpen(nTr, sOut, 'details');

                            }

                        }
                    };
                });



            });
        }
    })
};

/* 事件处理 */
Template.gongchengzjbfmx.events({
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

        // 获取table,从table搜索条件内容
        var table = $('.dataTables-example').DataTable();

        if(xmnd!='全部'){
            table.column(0).search(xmmc);
        }
        if(xmmc != ''){
            table.column(1).search(xmmc);
        }
        if(dwmc!='全部'){
            table.column(3).search(dwmc);
        }
        if(xmfl != '全部'){
            table.column(2).search(xmfl);
        }
        if(fwlx!='全部'){
            table.column(4).search(fwlx);
        }
        if(xmzt!='全部'){
            table.column(5).search(fwlx);
        }


        if(xmnd=='全部' && xmmc=='' && dwmc=='' && xmfl=='全部' && fwlx=='全部' && xmzt=='全部'){
            //console.log(1);
            table.columns().search('');
        }

        table.draw();
        // 按钮 点击事件触发table重新请求服务器
        $("#searchsubmit").bind("click", function () {
            $(".dataTables-example").dataTable().fnDraw(false);
        });
    },
    // 搜索栏,重置初始化功能
    'click #chongzhian'(event,instance) {
        $('#xmmc').val('');
        $('#dwmc').val('');
        $('select').prop('selectedIndex', 0);
        // 获取table,从table搜索条件内容
        var table = $('.dataTables-example').DataTable();
        table.columns().search('');
        table.draw();
        // 按钮 点击事件触发table重新请求服务器
        $("#searchsubmit").bind("click", function () {
            $(".dataTables-example").dataTable().fnDraw(false);
        });
    }
});

Template.gongchengzjbfmx.onDestroyed(function () {
    // 销毁
    //Tracker.Dependency();
    //Tracker.flush();
    //Tracker.afterFlush();
});