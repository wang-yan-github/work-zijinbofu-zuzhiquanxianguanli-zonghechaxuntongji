/**
 * Created by Administrator on 2017/11/13.
 */
Template.bofucxtj.rendered = function() {

    // 初始化 checks
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

}

Template.bofucxtj.helpers({

    // 年度
    niandu:function () {
        // 返回静态模拟数据
        return [
            {year: 17},
            {year: 18},
            {year: 19},
            {year: 20},
            {year: 21},
            {year: 22},
            {year: 23},
            {year: 24},
            {year: 25},
            {year: 26},
            {year: 27}
        ]
    }, // 项目状态
    xiangmuzt:function () {
        // 返回静态模拟数据
        return [
            {_id:0,name: "全部"},
            {_id:1,name: "未开工"},
            {_id:2,name: "在建"},
            {_id:3,name: "完工"}
        ]
    }, // 项目分类
    xiangmufl:function () {
        // 返回静态模拟数据
        return [
            {_id:0,name: "全部"},
            {_id:1,name: "道路"},
            {_id:2,name: "桥梁"},
            {_id:3,name: "安保设施"},
            {_id:4,name: "养护工程"}
        ]
    }, // 服务类型
    fuwulx:function () {
        // 返回静态模拟数据
        return [
            {_id:0,name: "全部"},
            {_id:1,name: "设计"},
            {_id:2,name: "施工"},
            {_id:3,name: "监理"},
            {_id:4,name: "检测"},
            {_id:5,name: "其他咨询类服务"},
            {_id:6,name: "甲供材料"}
        ]
    }

});