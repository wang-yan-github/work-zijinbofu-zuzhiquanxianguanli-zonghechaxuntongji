/**
 * Created by Administrator on 2017/11/13.
 */
Template.bofumx.rendered = function(){

    // 初始化 FooTable
    $('.footable').footable();

    // 初始化 Data Tables
    $('.dataTables-example').DataTable({
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
//            "scrollY": "220px", // 垂直滚动条
//            "scrollCollapse": "true", // 垂直滚动条
//            pageLength: 25, // 分页长度
        responsive: false,
        dom: '<"html5buttons"B>lTfgitp', // 打印操作
        buttons: [
            {extend: 'excel', title: 'ExampleFile'},
            {extend: 'print',text:"打印预览",
//                    exportOptions: {
//                        modifier: {
//                            page: 'current'
//                        }
//                    },
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
    });

};
