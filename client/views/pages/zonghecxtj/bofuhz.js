Template.gongchengzjbfhz.onCreated(function () {
    // 码表信息
    this.mabiaoxx = new ReactiveVar(0);
    // 原始-码表信息
    this.yuanshi_mabiaoxx = new ReactiveVar(0);
    // 订阅-资金拨付-码表信息
    this.subscribe('zijinbofu_mabiaoxx');

    handle_xmk_hz = this.subscribe('zijinbofu_xiangmuk');

    Tracker.autorun(function () {
        Template.instance().yuanshi_mabiaoxx.set(ts_gc_mabiaoxx.find());
        Template.instance().mabiaoxx.set(Template.instance().yuanshi_mabiaoxx.get());
    })

});

Template.gongchengzjbfhz.helpers({
    // 开始年度
    kaishind:function () {
        return mabiaoffmz('年度');
    },
    // 结束年度
    jieshund:function () {
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

Template.gongchengzjbfhz.rendered = function(){
    Tracker.autorun(function () {
        // 项目库数据
        var xiangmuk = tb_gc_xiangmuk.find().fetch();
        if(handle_xmk_hz.ready()){
            Tracker.afterFlush(function () {
                if ($('.dataTables-example').hasClass('dataTable')) {
                    dttable = $('.dataTables-example').dataTable();
                    dttable.fnClearTable(); //清空一下 table
                    dttable.fnDestroy(); //还原初始化了的 datatable
                }

                // 返回数据-资金拨付汇总信息
                var fanhui_zijinbfhzxx = new Array();

                for (var i in xiangmuk){

                    // 临时变量-支付金额
                    var zhifuje = 0;
                    // 临时变量-累计拨付金额
                    var leijibfje = 0;

                    // 合同信息
                    for(var j in xiangmuk[i].xiangmuhtxx){

                        var result = new Array();
                        result[0] = xiangmuk[i].xiangmund;
                        result[1] = xiangmuk[i].xiangmumc;
                        result[2] = xiangmuk[i].xiangmuflmc;


                        // 临时变量-支付金额
                        zhifuje = 0;
                        // 临时变量-累计拨付金额
                        leijibfje = 0;

                        result[3] = xiangmuk[i].xiangmuhtxx[j].danweimc;
                        result[4] = xiangmuk[i].xiangmuhtxx[j].fuwulxmc;
                        result[5] = '';
                        result[6] = xiangmuk[i].xiangmuhtxx[j].hetongje;
                        result[7] = xiangmuk[i].xiangmuhtxx[j].zhibaoj;

                        for(var k in xiangmuk[i].xiangmuhtxx[j].zijinbfxx){

                            zhifuje += parseFloat(xiangmuk[i].xiangmuhtxx[j].zijinbfxx[k].zhifuje);
                            leijibfje += parseFloat(xiangmuk[i].xiangmuhtxx[j].zijinbfxx[k].leijibfje);

                        }

                        // 页面-支付金额
                        result[8] = zhifuje;
                        // 页面-累计拨付金额
                        result[9] = leijibfje;
                        fanhui_zijinbfhzxx.push(result);

                    }

                    // 标段合同信息
                    for(var j in xiangmuk[i].biaoduanhtxx){

                        var result = new Array();
                        result[0] = xiangmuk[i].xiangmund;
                        result[1] = xiangmuk[i].xiangmumc;
                        result[2] = xiangmuk[i].xiangmuflmc;
                        result[3] = xiangmuk[i].biaoduanhtxx[j].danweimc;
                        result[4] = xiangmuk[i].biaoduanhtxx[j].fuwulxmc;
                        result[5] = xiangmuk[i].biaoduanhtxx[j].biaoduanmc;

                        result[6] = xiangmuk[i].biaoduanhtxx[j].hetongje;
                        result[7] = xiangmuk[i].biaoduanhtxx[j].zhibaoj;

                        for(var k in xiangmuk[i].biaoduanhtxx[j].zijinbfxx){

                            zhifuje += parseFloat(xiangmuk[i].biaoduanhtxx[j].zijinbfxx[k].zhifuje);
                            leijibfje += parseFloat(xiangmuk[i].biaoduanhtxx[j].zijinbfxx[k].leijibfje);

                        }

                        // 页面-支付金额
                        result[8] = zhifuje;
                        // 页面-累计拨付金额
                        result[9] = leijibfje;
                        fanhui_zijinbfhzxx.push(result);

                    }
                }

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
                    // tfoot 汇总功能
                    "footerCallback": function ( row, data, start, end, display ) {
                        var api = this.api(), data;

                        // Remove the formatting to get integer data for summation
                        var intVal = function ( i ) {
                            return i;
                        };

                        // Total over all pages
                        total = api
                            .column( 6 )
                            .data()
                            .reduce( function (a, b) {
                                return accAdd(a,b);
                            } );

                        // Total over this page
                        pageTotal = api
                            .column( 6, { page: 'current'} )
                            .data()
                            .reduce( function (a, b) {
                                return accAdd(a,b);
                            }, 0 );

                        // Update footer
                        $( api.column( 6 ).footer() ).html(
                            pageTotal
                        );

                        // Total over all pages
                        total = api
                            .column( 7 )
                            .data()
                            .reduce( function (a, b) {
                                return accAdd(a,b);
                            } );

                        // Total over this page
                        pageTotal = api
                            .column( 7, { page: 'current'} )
                            .data()
                            .reduce( function (a, b) {
                                return accAdd(a,b);
                            }, 0 );

                        // Update footer
                        $( api.column( 7 ).footer() ).html(
                            pageTotal
                        );

                        // Total over all pages
                        total = api
                            .column( 8 )
                            .data()
                            .reduce( function (a, b) {
                                return accAdd(a,b);
                            } );

                        // Total over this page
                        pageTotal = api
                            .column( 8, { page: 'current'} )
                            .data()
                            .reduce( function (a, b) {
                                return accAdd(a,b);
                            }, 0 );

                        // Update footer
                        $( api.column( 8 ).footer() ).html(
                            pageTotal
                        );

                        // Total over all pages
                        total = api
                            .column( 9 )
                            .data()
                            .reduce( function (a, b) {
                                return accAdd(a,b);
                            } );

                        // Total over this page
                        pageTotal = api
                            .column( 9, { page: 'current'} )
                            .data()
                            .reduce( function (a, b) {
                                return accAdd(a,b);
                            }, 0 );

                        // Update footer
                        $( api.column( 9 ).footer() ).html(
                            pageTotal
                        );
                    }
                };
                $('.dataTables-example').dataTable(appdt);

                // 隐藏搜索按钮
                $(".dataTables_filter :first").hide();
            });
        }
    })
};

Template.gongchengzjbfhz.events({
    // 搜索按钮-根据条件重新筛选页面数据
    'click #bofuhzxxss'(event,instance) {
        // 页面-项目名称
        var xmmc = $('#xmmc').val();
        // 页面-项目分类
        var xmfl = $('#xmfl').val();
        // 页面-服务类型
        var fwlx = $('#fwlx').val();
        // 页面-开始时间
        var kaishind = $('#kaishind').val();
        // 页面-结束时间
        var jieshund = $('#jieshund').val();


        // 获取table,从table搜索条件内容
        var table = $('.dataTables-example').DataTable();

        if(xmmc != ''){
            table.column(1).search(xmmc);
        }
        if(xmfl != ''){
            table.column(2).search(xmfl);
        }
        if(fwlx != ''){
            table.column(4).search(fwlx);
        }
        if(kaishind!=''){
            var shiwei = kaishind.split('')[0];
            var gewei = kaishind.split('')[1];
            table.column(0).search(''+shiwei+'['+gewei+'-9]|['+(parseInt(shiwei)+1)+'-9][0-9]',true,false);
        }
        if(jieshund!=''){
            var shiwei = jieshund.split('')[0];
            var gewei = jieshund.split('')[1];
            if(parseInt(shiwei) != 0){
                table.column(0).search(''+shiwei+'[0-'+gewei+']|[0-'+(parseInt(shiwei)-1)+'][0-9]',true,false);
            }else{
                table.column(0).search('0[0-'+gewei+']',true,false);
            }
        }
        if(kaishind!='' && jieshund!=''){
            var k = parseInt(kaishind);
            var j = parseInt(jieshund);
            var str = '';
            for(var i = k;i <= j;i++){
                str += i +'|';
                if(i == j){
                    str += i;
                }
            }
            console.log(str);
            table.column(0).search(str,true,false);
        }
        // dataTable重置
        if(xmmc == '' && xmfl == '' && kaishind == '' && jieshund == '' && fwlx == ''){
            console.log(1);
            table.columns().search('');
        }else{

        }
        table.draw();


        /*table.search(kaishind)
        var filteredData = table
            .column( 2 )
            .data()
            .filter( function ( value, index ) {
                return value == 'keith' ? true : false;
            } );
        table.search(xmmc).draw();
        var filteredData = table
            .column( 1 )
            .data()
            .filter( function ( value, index ) {
                return value == 'keith' ? true : false;
            } );*/
        // 按钮 点击事件触发table重新请求服务器
        $("#searchsubmit").bind("click", function () {
            $(".dataTables-example").dataTable().fnDraw(false);
        });

        /*// Apply the search
        table.columns().eq( 0 ).each( function ( colIdx ) {
            table
                .column( colIdx )
                .search( kaishind )
                .draw();
        } );*/
        // 将数据转换成数组形式，每个数组元素表示一行数据
        // var data = $('.dataTables-example').DataTable().data().toArray();
        // 取出对应某行的数据
        // var data = $('.dataTables-example').DataTable().row(rowIndex).data(); rowIndex为要取出行的行索引。
        // var data = $('.dataTables-example').DataTable().row(rowObj).data();   rowObj为要取出行的行对象。
        // var data = $('.dataTables-example').DataTable().column(1).data();     对应列所用数据
        // var tableSetings=$('.dataTables-example').dataTable().fnSettings();
        // var paging_length=tableSetings._iDisplayLength;//当前每页显示多少
        // var page_start=tableSetings._iDisplayStart;//当前页开始
    },
    // 搜索栏,重置初始化功能
    'click #chongzhian'(event,instance) {
        $('#xmmc').val('');
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
//加法函数，用来得到精确的加法结果
//说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
//调用：accAdd(arg1,arg2)
//返回值：arg1加上arg2的精确结果
function accAdd(arg1,arg2){
    var r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2))
    return (arg1*m+arg2*m)/m
}
