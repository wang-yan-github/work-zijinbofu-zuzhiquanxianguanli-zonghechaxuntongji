hetongxxxg = {};
gongchenghtxz = {
    "hetongbh" : "",
    "fuwulxbh" : "",
    "fuwulxmc" : "",
    "danweimc" : "",
    "hetongje" : "",
    "hetongqdj" : "",
    "zandingje" : "",
    "zhibaoj" : "",
    "hetongsm" : "",
    "kaigongyfk" : "",
    "kaigongyufukuankk" : "",
    "hetongwjxx" : {
        "hetongwj" : [],
        "shenjiwj" : [],
        "jiaogongyswj" : [],
        "jungongyswj" : [],
        "lvyuebhwj" : [],
        "kaigongyfksqwj" : [],
        "kaigongyfkbhwj" : []
    },
    "zijinbfxx" : []
};
biaoduanhtxz = {
    "biaoduanmc":"",
    "hetongbh" : "",
    "fuwulxbh" : "",
    "fuwulxmc" : "",
    "danweimc" : "",
    "hetongje" : "",
    "hetongqdj" : "",
    "zandingje" : "",
    "zhibaoj" : "",
    "hetongsm" : "",
    "kaigongyfk" : "",
    "kaigongyufukuankk" : "",
    "hetongwjxx" : {
        "hetongwj" : [],
        "shenjiwj" : [],
        "jiaogongyswj" : [],
        "jungongyswj" : [],
        "lvyuebhwj" : [],
        "kaigongyfksqwj" : [],
        "kaigongyfkbhwj" : []
    },
    "zijinbfxx" : []
};
gongchenghtwjxz_biaoshi = 0;
hetongxxxg_biaoshi = 0;
biaoduanhtwjxz_biaoshi = 0;
Template.xiangmuxq.onCreated(function () {
    this.bianhaoxx = new ReactiveVar(0);
    //保存当前合同信息
    Session.set('dangqianhtxx',{});
    Tracker.autorun(function () {
        //保存当前项目信息
        Session.set('dangqianxmxx',Template.instance().data);
        Template.instance().bianhaoxx.set(ts_gc_bianhaoxx.find({}));
    });
});
Template.xiangmuxq.helpers({
    shuju_xiangmuxq:function () {
        return Session.get('dangqianxmxx');
    },
    shuju_hetongxx:function () {
        return Session.get('dangqianhtxx');
    },
    //码表：服务类型信息
    mabiao_fuwulxxx:function () {
        if(handle_mbk.ready()){
            return _.findWhere(mabiaoxx.get().fetch(),{mabiaomc:'服务类型'}).mabiaoxx;
        }
    }
});
Template.xiangmuxq.onRendered(function () {
    //增加目录
    $('#hetongwjsc')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','hetongwjsc');
        formData.set('jianjie',Session.get('user').username);
    });
    $('#shenjiwjsc')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','shenjiwjsc');
    });
    $('#jiaogongyswjsc')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','jiaogongyswjsc');
    });
    $('#jungongyswjsc')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','jungongyswjsc');
    });
    $('#lvyuebhwjsc')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','lvyuebhwjsc');
    });
    $('#kaigongyfksqwjsc')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','kaigongyfksqwjsc');
    });
    $('#kaigongyfkbhwjsc')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','kaigongyfkbhwjsc');
    });

    $('#hetongwjxg')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','hetongwjsc');
        formData.set('jianjie',Session.get('user').username);
    });
    $('#shenjiwjxg')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','shenjiwjsc');
    });
    $('#jiaogongyswjxg')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','jiaogongyswjsc');
    });
    $('#jungongyswjxg')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','jungongyswjsc');
    });
    $('#lvyuebhwjxg')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','lvyuebhwjsc');
    });
    $('#kaigongyfksqwjxg')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','kaigongyfksqwjsc');
    });
    $('#kaigongyfkbhwjxg')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','kaigongyfkbhwjsc');
    });

    //标段合同新增
    $('#biaoduan_hetongwjsc')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','hetongwjsc');
        formData.set('jianjie',Session.get('user').username);
    });
    $('#biaoduan_shenjiwjsc')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','shenjiwjsc');
    });
    $('#biaoduan_jiaogongyswjsc')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','jiaogongyswjsc');
    });
    $('#biaoduan_jungongyswjsc')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','jungongyswjsc');
    });
    $('#biaoduan_lvyuebhwjsc')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','lvyuebhwjsc');
    });
    $('#biaoduan_kaigongyfksqwjsc')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','kaigongyfksqwjsc');
    });
    $('#biaoduan_kaigongyfkbhwjsc')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','kaigongyfkbhwjsc');
    });
    //标段合同修改
    $('#biaoduan_hetongwjxg')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','hetongwjsc');
        formData.set('jianjie',Session.get('user').username);
    });
    $('#biaoduan_shenjiwjxg')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','shenjiwjsc');
    });
    $('#biaoduan_jiaogongyswjxg')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','jiaogongyswjsc');
    });
    $('#biaoduan_jungongyswjxg')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','jungongyswjsc');
    });
    $('#biaoduan_lvyuebhwjxg')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','lvyuebhwjsc');
    });
    $('#biaoduan_kaigongyfksqwjxg')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','kaigongyfksqwjsc');
    });
    $('#biaoduan_kaigongyfkbhwjxg')[0].dropzone.on("sending", function(file,xhr,formData) {
        formData.set('dirctory','kaigongyfkbhwjsc');
    });
    /*新增文件监听事件*/
    //合同文件监听事件
    $('#hetongwjsc')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        gongchenghtxz.hetongwjxx.hetongwj.push({
            hetongwjbh : xiangying.wenjianbh,
            hetongwjmc : xiangying.wenjianmc,
            shangchuansj : xiangying.shangchuansj
        });
    });
    $('#hetongwjsc')[0].dropzone.on('complete',function () {
        gongchenghtwjxz_biaoshi--;
        console.log(gongchenghtwjxz_biaoshi);
    });
    $('#hetongwjsc')[0].dropzone.on('addedfile',function () {
        gongchenghtwjxz_biaoshi++;
        console.log(gongchenghtwjxz_biaoshi);
    });
    $('#hetongwjsc')[0].dropzone.on('removedfile',function () {
        gongchenghtwjxz_biaoshi--;
    });
    //审计文件监听事件
    $('#shenjiwjsc')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        gongchenghtxz.hetongwjxx.shenjiwj.push({
            "shenjiwjbh" : xiangying.wenjianbh,
            "shenjiwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#shenjiwjsc')[0].dropzone.on('complete',function () {
        gongchenghtwjxz_biaoshi--;
    });
    $('#shenjiwjsc')[0].dropzone.on('addedfile',function () {
        gongchenghtwjxz_biaoshi++;
    });
    $('#shenjiwjsc')[0].dropzone.on('removedfile',function () {
        gongchenghtwjxz_biaoshi--;
    });
    //加工验收文件监听事件
    $('#jiaogongyswjsc')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        gongchenghtxz.hetongwjxx.jiaogongyswj.push({
            "jiaogongyswjbh" : xiangying.wenjianbh,
            "jiaogongyswjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#jiaogongyswjsc')[0].dropzone.on('complete',function () {
        gongchenghtwjxz_biaoshi--;
    });
    $('#jiaogongyswjsc')[0].dropzone.on('addedfile',function () {
        gongchenghtwjxz_biaoshi++;
    });
    $('#jiaogongyswjsc')[0].dropzone.on('removedfile',function () {
        gongchenghtwjxz_biaoshi--;
    });
    //竣工验收文件监听事件
    $('#jungongyswjsc')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        gongchenghtxz.hetongwjxx.jungongyswj.push({
            "jungongyswjbh" : xiangying.wenjianbh,
            "jungongyswjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#jungongyswjsc')[0].dropzone.on('complete',function () {
        gongchenghtwjxz_biaoshi--;
    });
    $('#jungongyswjsc')[0].dropzone.on('addedfile',function () {
        gongchenghtwjxz_biaoshi++;
    });
    $('#jungongyswjsc')[0].dropzone.on('removedfile',function () {
        gongchenghtwjxz_biaoshi--;
    });
    //履约保函文件监听事件
    $('#lvyuebhwjsc')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        gongchenghtxz.hetongwjxx.lvyuebhwj.push({
            "lvyuebhwjbh" : xiangying.wenjianbh,
            "lvyuebhwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#lvyuebhwjsc')[0].dropzone.on('complete',function () {
        gongchenghtwjxz_biaoshi--;
    });
    $('#lvyuebhwjsc')[0].dropzone.on('addedfile',function () {
        gongchenghtwjxz_biaoshi++;
    });
    $('#lvyuebhwjsc')[0].dropzone.on('removedfile',function () {
        gongchenghtwjxz_biaoshi--;
    });
    //开工预付款申请文件监听事件
    $('#kaigongyfksqwjsc')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        gongchenghtxz.hetongwjxx.kaigongyfksqwj.push({
            "kaigongyfksqwjbh" : xiangying.wenjianbh,
            "kaigongyfksqwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#kaigongyfksqwjsc')[0].dropzone.on('complete',function () {
        gongchenghtwjxz_biaoshi--;
    });
    $('#kaigongyfksqwjsc')[0].dropzone.on('addedfile',function () {
        gongchenghtwjxz_biaoshi++;
    });
    $('#kaigongyfksqwjsc')[0].dropzone.on('removedfile',function () {
        gongchenghtwjxz_biaoshi--;
    });
    //开工预付款保函文件监听事件
    $('#kaigongyfkbhwjsc')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        gongchenghtxz.hetongwjxx.kaigongyfkbhwj.push({
            "kaigongyfkbhwjbh" : xiangying.wenjianbh,
            "kaigongyfkbhwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#kaigongyfkbhwjsc')[0].dropzone.on('complete',function () {
        gongchenghtwjxz_biaoshi--;
    });
    $('#kaigongyfkbhwjsc')[0].dropzone.on('addedfile',function () {
        gongchenghtwjxz_biaoshi++;
    });
    $('#kaigongyfkbhwjsc')[0].dropzone.on('removedfile',function () {
        gongchenghtwjxz_biaoshi--;
    });

    /*修改文件监听事件*/
    //合同文件监听事件
    $('#hetongwjxg')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        hetongxxxg.hetongwjxx.hetongwj.push({
            "hetongwjbh" : xiangying.wenjianbh,
            "hetongwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#hetongwjxg')[0].dropzone.on('complete',function () {
        hetongxxxg_biaoshi--;
    });
    $('#hetongwjxg')[0].dropzone.on('addedfile',function () {
        hetongxxxg_biaoshi++;
    });
    $('#hetongwjxg')[0].dropzone.on('removedfile',function () {
        hetongxxxg_biaoshi--;
    });
    //审计文件监听事件
    $('#shenjiwjxg')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        hetongxxxg.hetongwjxx.shenjiwj.push({
            "shenjiwjbh" : xiangying.wenjianbh,
            "shenjiwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#shenjiwjxg')[0].dropzone.on('complete',function () {
        hetongxxxg_biaoshi--;
    });
    $('#shenjiwjxg')[0].dropzone.on('addedfile',function () {
        hetongxxxg_biaoshi++;
    });
    $('#shenjiwjxg')[0].dropzone.on('removedfile',function () {
        hetongxxxg_biaoshi--;
    });
    //加工验收文件监听事件
    $('#jiaogongyswjxg')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        hetongxxxg.hetongwjxx.jiaogongyswj.push({
            "jiaogongyswjbh" : xiangying.wenjianbh,
            "jiaogongyswjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#jiaogongyswjxg')[0].dropzone.on('complete',function () {
        hetongxxxg_biaoshi--;
    });
    $('#jiaogongyswjxg')[0].dropzone.on('addedfile',function () {
        hetongxxxg_biaoshi++;
    });
    $('#jiaogongyswjxg')[0].dropzone.on('removedfile',function () {
        hetongxxxg_biaoshi--;
    });
    //竣工验收文件监听事件
    $('#jungongyswjxg')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        hetongxxxg.hetongwjxx.jungongyswj.push({
            "jungongyswjbh" : xiangying.wenjianbh,
            "jungongyswjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#jungongyswjxg')[0].dropzone.on('complete',function () {
        hetongxxxg_biaoshi--;
    });
    $('#jungongyswjxg')[0].dropzone.on('addedfile',function () {
        hetongxxxg_biaoshi++;
    });
    $('#jungongyswjxg')[0].dropzone.on('removedfile',function () {
        hetongxxxg_biaoshi--;
    });
    //履约保函文件监听事件
    $('#lvyuebhwjxg')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        hetongxxxg.hetongwjxx.lvyuebhwj.push({
            "lvyuebhwjbh" : xiangying.wenjianbh,
            "lvyuebhwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#lvyuebhwjxg')[0].dropzone.on('complete',function () {
        hetongxxxg_biaoshi--;
    });
    $('#lvyuebhwjxg')[0].dropzone.on('addedfile',function () {
        hetongxxxg_biaoshi++;
    });
    $('#lvyuebhwjxg')[0].dropzone.on('removedfile',function () {
        hetongxxxg_biaoshi--;
    });
    //开工预付款申请文件监听事件
    $('#kaigongyfksqwjxg')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        hetongxxxg.hetongwjxx.kaigongyfksqwj.push({
            "kaigongyfksqwjbh" : xiangying.wenjianbh,
            "kaigongyfksqwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#kaigongyfksqwjxg')[0].dropzone.on('complete',function () {
        hetongxxxg_biaoshi--;
    });
    $('#kaigongyfksqwjxg')[0].dropzone.on('addedfile',function () {
        hetongxxxg_biaoshi++;
    });
    $('#kaigongyfksqwjxg')[0].dropzone.on('removedfile',function () {
        hetongxxxg_biaoshi--;
    });
    //开工预付款保函文件监听事件
    $('#kaigongyfkbhwjxg')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        hetongxxxg.hetongwjxx.kaigongyfkbhwj.push({
            "kaigongyfkbhwjbh" : xiangying.wenjianbh,
            "kaigongyfkbhwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#kaigongyfkbhwjxg')[0].dropzone.on('complete',function () {
        hetongxxxg_biaoshi--;
    });
    $('#kaigongyfkbhwjxg')[0].dropzone.on('addedfile',function () {
        hetongxxxg_biaoshi++;
    });
    $('#kaigongyfkbhwjxg')[0].dropzone.on('removedfile',function () {
        hetongxxxg_biaoshi--;
    });

    /*新增标段合同文件监听事件*/
    //合同文件监听事件
    $('#biaoduan_hetongwjsc')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        biaoduanhtxz.hetongwjxx.hetongwj.push({
            "hetongwjbh" : xiangying.wenjianbh,
            "hetongwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#biaoduan_hetongwjsc')[0].dropzone.on('complete',function () {
        biaoduanhtwjxz_biaoshi--;
    });
    $('#biaoduan_hetongwjsc')[0].dropzone.on('addedfile',function () {
        biaoduanhtwjxz_biaoshi++;
    });
    $('#biaoduan_hetongwjsc')[0].dropzone.on('removedfile',function () {
        biaoduanhtwjxz_biaoshi--;
    });
    //审计文件监听事件
    $('#biaoduan_shenjiwjsc')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        biaoduanhtxz.hetongwjxx.shenjiwj.push({
            "shenjiwjbh" : xiangying.wenjianbh,
            "shenjiwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#biaoduan_shenjiwjsc')[0].dropzone.on('complete',function () {
        biaoduanhtwjxz_biaoshi--;
    });
    $('#biaoduan_shenjiwjsc')[0].dropzone.on('addedfile',function () {
        biaoduanhtwjxz_biaoshi++;
    });
    $('#biaoduan_shenjiwjsc')[0].dropzone.on('removedfile',function () {
        biaoduanhtwjxz_biaoshi--;
    });
    //交工验收文件监听事件
    $('#biaoduan_jiaogongyswjsc')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        biaoduanhtxz.hetongwjxx.jiaogongyswj.push({
            "jiaogongyswjbh" : xiangying.wenjianbh,
            "jiaogongyswjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#biaoduan_jiaogongyswjsc')[0].dropzone.on('complete',function () {
        biaoduanhtwjxz_biaoshi--;
    });
    $('#biaoduan_jiaogongyswjsc')[0].dropzone.on('addedfile',function () {
        biaoduanhtwjxz_biaoshi++;
    });
    $('#biaoduan_jiaogongyswjsc')[0].dropzone.on('removedfile',function () {
        biaoduanhtwjxz_biaoshi--;
    });
    //竣工验收文件监听事件
    $('#biaoduan_jungongyswjsc')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        biaoduanhtxz.hetongwjxx.jungongyswj.push({
            "jungongyswjbh" : xiangying.wenjianbh,
            "jungongyswjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#biaoduan_jungongyswjsc')[0].dropzone.on('complete',function () {
        biaoduanhtwjxz_biaoshi--;
    });
    $('#biaoduan_jungongyswjsc')[0].dropzone.on('addedfile',function () {
        biaoduanhtwjxz_biaoshi++;
    });
    $('#biaoduan_jungongyswjsc')[0].dropzone.on('removedfile',function () {
        biaoduanhtwjxz_biaoshi--;
    });
    //履约保函文件监听事件
    $('#biaoduan_lvyuebhwjsc')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        biaoduanhtxz.hetongwjxx.lvyuebhwj.push({
            "lvyuebhwjbh" : xiangying.wenjianbh,
            "lvyuebhwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#biaoduan_lvyuebhwjsc')[0].dropzone.on('complete',function () {
        biaoduanhtwjxz_biaoshi--;
    });
    $('#biaoduan_lvyuebhwjsc')[0].dropzone.on('addedfile',function () {
        biaoduanhtwjxz_biaoshi++;
    });
    $('#biaoduan_lvyuebhwjsc')[0].dropzone.on('removedfile',function () {
        biaoduanhtwjxz_biaoshi--;
    });
    //开工预付款申请文件监听事件
    $('#biaoduan_kaigongyfksqwjsc')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        biaoduanhtxz.hetongwjxx.kaigongyfksqwj.push({
            "kaigongyfksqwjbh" : xiangying.wenjianbh,
            "kaigongyfksqwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#biaoduan_kaigongyfksqwjsc')[0].dropzone.on('complete',function () {
        biaoduanhtwjxz_biaoshi--;
    });
    $('#biaoduan_kaigongyfksqwjsc')[0].dropzone.on('addedfile',function () {
        biaoduanhtwjxz_biaoshi++;
    });
    $('#biaoduan_kaigongyfksqwjsc')[0].dropzone.on('removedfile',function () {
        biaoduanhtwjxz_biaoshi--;
    });
    //开工预付款保函文件监听事件
    $('#biaoduan_kaigongyfkbhwjsc')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        biaoduanhtxz.hetongwjxx.kaigongyfkbhwj.push({
            "kaigongyfkbhwjbh" : xiangying.wenjianbh,
            "kaigongyfkbhwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#biaoduan_kaigongyfkbhwjsc')[0].dropzone.on('complete',function () {
        biaoduanhtwjxz_biaoshi--;
    });
    $('#biaoduan_kaigongyfkbhwjsc')[0].dropzone.on('addedfile',function () {
        biaoduanhtwjxz_biaoshi++;
    });
    $('#biaoduan_kaigongyfkbhwjsc')[0].dropzone.on('removedfile',function () {
        biaoduanhtwjxz_biaoshi--;
    });

    /*修改标段文件监听事件*/
    //合同文件监听事件
    $('#biaoduan_hetongwjxg')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        hetongxxxg.hetongwjxx.hetongwj.push({
            "hetongwjbh" : xiangying.wenjianbh,
            "hetongwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#biaoduan_hetongwjxg')[0].dropzone.on('complete',function () {
        hetongxxxg_biaoshi--;
    });
    $('#biaoduan_hetongwjxg')[0].dropzone.on('addedfile',function () {
        hetongxxxg_biaoshi++;
    });
    $('#biaoduan_hetongwjxg')[0].dropzone.on('removedfile',function () {
        hetongxxxg_biaoshi--;
    });
    //审计文件监听事件
    $('#biaoduan_shenjiwjxg')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        hetongxxxg.hetongwjxx.shenjiwj.push({
            "shenjiwjbh" : xiangying.wenjianbh,
            "shenjiwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#biaoduan_shenjiwjxg')[0].dropzone.on('complete',function () {
        hetongxxxg_biaoshi--;
    });
    $('#biaoduan_shenjiwjxg')[0].dropzone.on('addedfile',function () {
        hetongxxxg_biaoshi++;
    });
    $('#biaoduan_shenjiwjxg')[0].dropzone.on('removedfile',function () {
        hetongxxxg_biaoshi--;
    });
    //加工验收文件监听事件
    $('#biaoduan_jiaogongyswjxg')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        hetongxxxg.hetongwjxx.jiaogongyswj.push({
            "jiaogongyswjbh" : xiangying.wenjianbh,
            "jiaogongyswjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#biaoduan_jiaogongyswjxg')[0].dropzone.on('complete',function () {
        hetongxxxg_biaoshi--;
    });
    $('#biaoduan_jiaogongyswjxg')[0].dropzone.on('addedfile',function () {
        hetongxxxg_biaoshi++;
    });
    $('#biaoduan_jiaogongyswjxg')[0].dropzone.on('removedfile',function () {
        hetongxxxg_biaoshi--;
    });
    //竣工验收文件监听事件
    $('#biaoduan_jungongyswjxg')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        hetongxxxg.hetongwjxx.jungongyswj.push({
            "jungongyswjbh" : xiangying.wenjianbh,
            "jungongyswjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#biaoduan_jungongyswjxg')[0].dropzone.on('complete',function () {
        hetongxxxg_biaoshi--;
    });
    $('#biaoduan_jungongyswjxg')[0].dropzone.on('addedfile',function () {
        hetongxxxg_biaoshi++;
    });
    $('#biaoduan_jungongyswjxg')[0].dropzone.on('removedfile',function () {
        hetongxxxg_biaoshi--;
    });
    //履约保函文件监听事件
    $('#biaoduan_lvyuebhwjxg')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        hetongxxxg.hetongwjxx.lvyuebhwj.push({
            "lvyuebhwjbh" : xiangying.wenjianbh,
            "lvyuebhwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#biaoduan_lvyuebhwjxg')[0].dropzone.on('complete',function () {
        hetongxxxg_biaoshi--;
    });
    $('#biaoduan_lvyuebhwjxg')[0].dropzone.on('addedfile',function () {
        hetongxxxg_biaoshi++;
    });
    $('#biaoduan_lvyuebhwjxg')[0].dropzone.on('removedfile',function () {
        hetongxxxg_biaoshi--;
    });
    //开工预付款申请文件监听事件
    $('#biaoduan_kaigongyfksqwjxg')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        hetongxxxg.hetongwjxx.kaigongyfksqwj.push({
            "kaigongyfksqwjbh" : xiangying.wenjianbh,
            "kaigongyfksqwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#biaoduan_kaigongyfksqwjxg')[0].dropzone.on('complete',function () {
        hetongxxxg_biaoshi--;
    });
    $('#biaoduan_kaigongyfksqwjxg')[0].dropzone.on('addedfile',function () {
        hetongxxxg_biaoshi++;
    });
    $('#biaoduan_kaigongyfksqwjxg')[0].dropzone.on('removedfile',function () {
        hetongxxxg_biaoshi--;
    });
    //开工预付款保函文件监听事件
    $('#biaoduan_kaigongyfkbhwjxg')[0].dropzone.on('success',function (file, response) {
        var xiangying = JSON.parse(response).files[0];
        hetongxxxg.hetongwjxx.kaigongyfkbhwj.push({
            "kaigongyfkbhwjbh" : xiangying.wenjianbh,
            "kaigongyfkbhwjmc" : xiangying.wenjianmc,
            "shangchuansj" : xiangying.shangchuansj
        });
    });
    $('#biaoduan_kaigongyfkbhwjxg')[0].dropzone.on('complete',function () {
        hetongxxxg_biaoshi--;
    });
    $('#biaoduan_kaigongyfkbhwjxg')[0].dropzone.on('addedfile',function () {
        hetongxxxg_biaoshi++;
    });
    $('#biaoduan_kaigongyfkbhwjxg')[0].dropzone.on('removedfile',function () {
        hetongxxxg_biaoshi--;
    });
    /*清除新增项目合同信息并重置数据*/
    $('#xinzenggchtxx').on('hidden.bs.modal', function (e) {
        //清空输入列表
        $('[name="gongchenghtxz_danweimc"]').val('');
        $('[name="gongchenghtxz_hetongje"]').val('');
        $('[name="gongchenghtxz_zandingje"]').val('');
        $('[name="gongchenghtxz_kaigongyfk"]').val('');
        $('[name="gongchenghtxz_hetongsm"]').val('');
        //清空文件列表
        $('#hetongwjsc')[0].dropzone.removeAllFiles();
        $('#shenjiwjsc')[0].dropzone.removeAllFiles();
        $('#jiaogongyswjsc')[0].dropzone.removeAllFiles();
        $('#jungongyswjsc')[0].dropzone.removeAllFiles();
        $('#lvyuebhwjsc')[0].dropzone.removeAllFiles();
        $('#kaigongyfksqwjsc')[0].dropzone.removeAllFiles();
        $('#kaigongyfkbhwjsc')[0].dropzone.removeAllFiles();
        //清空标识
        gongchenghtwjxz_biaoshi = 0;
        //清空数据
        gongchenghtxz = {
            "hetongbh" : "",
            "fuwulxbh" : "",
            "fuwulxmc" : "",
            "danweimc" : "",
            "hetongje" : "",
            "hetongqdj" : "",
            "zandingje" : "",
            "zhibaoj" : "",
            "hetongsm" : "",
            "kaigongyfk" : "",
            "kaigongyufukuankk" : "",
            "hetongwjxx" : {
                "hetongwj" : [],
                "shenjiwj" : [],
                "jiaogongyswj" : [],
                "jungongyswj" : [],
                "lvyuebhwj" : [],
                "kaigongyfksqwj" : [],
                "kaigongyfkbhwj" : []
            },
            "zijinbfxx" : []
        };
    });
    /*清除新增标段合同信息并重置数据*/
    $('#xinzengbdhtxx').on('hidden.bs.modal', function (e) {
        //清空输入列表
        $('[name="biaoduanhtxz_biaoduanmc"]').val('');
        $('[name="biaoduanhtxz_danweimc"]').val('');
        $('[name="biaoduanhtxz_hetongje"]').val('');
        $('[name="biaoduanhtxz_zandingje"]').val('');
        $('[name="biaoduanhtxz_kaigongyfk"]').val('');
        $('[name="biaoduanhtxz_hetongsm"]').val('');
        //清空文件列表
        $('#biaoduan_hetongwjsc')[0].dropzone.removeAllFiles();
        $('#biaoduan_shenjiwjsc')[0].dropzone.removeAllFiles();
        $('#biaoduan_jiaogongyswjsc')[0].dropzone.removeAllFiles();
        $('#biaoduan_jungongyswjsc')[0].dropzone.removeAllFiles();
        $('#biaoduan_lvyuebhwjsc')[0].dropzone.removeAllFiles();
        $('#biaoduan_kaigongyfksqwjsc')[0].dropzone.removeAllFiles();
        $('#biaoduan_kaigongyfkbhwjsc')[0].dropzone.removeAllFiles();
        //清空标识
        biaoduanhtwjxz_biaoshi = 0;
        //清空数据
        biaoduanhtxz = {
            "biaoduanmc":"",
            "hetongbh" : "",
            "fuwulxbh" : "",
            "fuwulxmc" : "",
            "danweimc" : "",
            "hetongje" : "",
            "hetongqdj" : "",
            "zandingje" : "",
            "zhibaoj" : "",
            "hetongsm" : "",
            "kaigongyfk" : "",
            "kaigongyufukuankk" : "",
            "hetongwjxx" : {
                "hetongwj" : [],
                "shenjiwj" : [],
                "jiaogongyswj" : [],
                "jungongyswj" : [],
                "lvyuebhwj" : [],
                "kaigongyfksqwj" : [],
                "kaigongyfkbhwj" : []
            },
            "zijinbfxx" : []
        };
    });
    Tracker.autorun(function () {
        if(handle_mbk.ready()){
            this.$('.select-chosen').chosen({width: "100%",no_results_text: "没有结果"});
        }
    });
});
Template.xiangmuxq.events({
    //点击查看项目合同信息
    'click [data-target="#chakanhtxx"]':function (event) {
        Session.set('dangqianhtxx',this);
    },
    //新增项目合同信息
    'submit #xinzenggcht':function (event) {
        event.preventDefault();
        //获取当前项目
        var dangqianxm = Session.get('dangqianxmxx');
        //取得合同编号
        var bianhaoxx = Template.instance().bianhaoxx.get().fetch()[0];
        var dangqianhtbh = parseInt(bianhaoxx.hetongbh);
        gongchenghtxz.hetongbh = (Array(5).join('0') + (dangqianhtbh+1)).slice(-5);
        //获取服务类型编号
        gongchenghtxz.fuwulxbh = event.target.gongchenghtxz_fuwulx.value;
        //获取服务类型
        gongchenghtxz.fuwulxmc = event.target.gongchenghtxz_fuwulx.options[event.target.gongchenghtxz_fuwulx.selectedIndex].text;
        //获取单位名称
        gongchenghtxz.danweimc = event.target.gongchenghtxz_danweimc.value;
        //获取合同金额
        gongchenghtxz.hetongje = event.target.gongchenghtxz_hetongje.value;
        //获取暂定金额
        gongchenghtxz.zandingje = event.target.gongchenghtxz_zandingje.value;
        //获取开工预付款
        gongchenghtxz.kaigongyfk = event.target.gongchenghtxz_kaigongyfk.value;
        //获取合同说明
        gongchenghtxz.hetongsm = event.target.gongchenghtxz_hetongsm.value;

        //计算获取合同清单价:合同清单价=合同金额-暂定金额-质保金
        gongchenghtxz.hetongqdj = (gongchenghtxz.hetongje * 0.97 - gongchenghtxz.zandingje).toString();
        //计算获取质保金
        gongchenghtxz.zhibaoj = (gongchenghtxz.hetongje * 0.03).toString();

        //初始化计量支付审定资金
        gongchenghtxz.jiliangzfsdzj = '00000';
        //初始化开工预付款扣款
        gongchenghtxz.kaigongyfkkk = '00000';

        //TODO:输入校验
        //文件上传
        $('#hetongwjsc')[0].dropzone.processQueue();

        $('#shenjiwjsc')[0].dropzone.processQueue();

        $('#jiaogongyswjsc')[0].dropzone.processQueue();

        $('#jungongyswjsc')[0].dropzone.processQueue();

        $('#lvyuebhwjsc')[0].dropzone.processQueue();

        $('#kaigongyfksqwjsc')[0].dropzone.processQueue();

        $('#kaigongyfkbhwjsc')[0].dropzone.processQueue();
        var int = setInterval(function () {
            if(gongchenghtwjxz_biaoshi === 0){
                try{
                    //将工程合同新增加入项目中
                    dangqianxm.xiangmuhtxx.push(gongchenghtxz);
                    tb_gc_xiangmuk.update({_id:dangqianxm._id},{$set:dangqianxm},false,function (error) {
                        if(error){
                            console.log('插入失败');
                            dangqianxm.xiangmuhtxx.pop();
                        }else{
                            bianhaoxx.hetongbh = gongchenghtxz.hetongbh;
                            ts_gc_bianhaoxx.update({_id:bianhaoxx._id},{$set:{hetongbh:bianhaoxx.hetongbh}});
                        }
                    });
                    $('#xinzenggchtxx').modal('hide');
                }catch(e){

                }finally{
                    Session.set('dangqianxmxx',dangqianxm);
                    window.clearInterval(int);
                }
                //更新界面
            }
        },50);
    },
    //删除项目合同信息
    'click [name="shanchuhtxx"]':function (event) {
        //TODO:判断权限及是否存在拨付工单
        //获取当前项目
        var dangqianxm = Session.get('dangqianxmxx');
        //更新数据库信息
        dangqianxm.xiangmuhtxx = _.without(dangqianxm.xiangmuhtxx,_.findWhere(dangqianxm.xiangmuhtxx,{hetongbh:this.hetongbh}));
        tb_gc_xiangmuk.update({_id:dangqianxm._id},{$set:dangqianxm},false,function (error) {
            if(error){
                console.log('删除失败');
                dangqianxm = Session.get('dangqianxmxx');
            }
        });
        //更新界面
        Session.set('dangqianxmxx',dangqianxm);
    },
    //点击修改项目合同信息
    'click [data-target="#xiugaigchtxx"]':function (event) {
        Session.set('dangqianhtxx',this);
        $('#dangqianfwlx').val(Session.get('dangqianhtxx').fuwulxbh);
        $('#dangqianfwlx').trigger('chosen:updated');
        hetongxxxg = Session.get('dangqianhtxx');
    },
    //删除合同文件信息
    'click [name="shanchuhtwj"]':function (event) {
        hetongxxxg.hetongwjxx[event.currentTarget.title] = _.without(hetongxxxg.hetongwjxx[event.currentTarget.title],_.findWhere(hetongxxxg.hetongwjxx[event.currentTarget.title],this));
        $(event.currentTarget).parent().parent().parent().parent().remove();
    },
    //修改项目合同信息
    'submit #xiugaigcht':function (event) {
        event.preventDefault();
        //获取当前项目
        var dangqianxm = Session.get('dangqianxmxx');
        //获取服务类型编号
        hetongxxxg.fuwulxbh = event.target.gongchenghtxg_fuwulx.value;
        //获取服务类型
        hetongxxxg.fuwulxmc = event.target.gongchenghtxg_fuwulx.options[event.target.gongchenghtxg_fuwulx.selectedIndex].text;
        //获取单位名称
        hetongxxxg.danweimc = event.target.gongchenghtxg_danweimc.value;
        //获取合同金额
        hetongxxxg.hetongje = event.target.gongchenghtxg_hetongje.value;
        //获取暂定金额
        hetongxxxg.zandingje = event.target.gongchenghtxg_zandingje.value;
        //获取开工预付款
        hetongxxxg.kaigongyfk = event.target.gongchenghtxg_kaigongyfk.value;
        //获取合同说明
        hetongxxxg.hetongsm = event.target.gongchenghtxg_hetongsm.value;

        //计算获取合同清单价:合同清单价=合同金额-暂定金额-质保金
        hetongxxxg.hetongqdj = (hetongxxxg.hetongje * 0.97 - hetongxxxg.zandingje).toString();
        //计算获取质保金
        hetongxxxg.zhibaoj = (hetongxxxg.hetongje * 0.03).toString();
        //TODO:输入校验

        //文件上传
        $('#hetongwjxg')[0].dropzone.processQueue();

        $('#shenjiwjxg')[0].dropzone.processQueue();

        $('#jiaogongyswjxg')[0].dropzone.processQueue();

        $('#jungongyswjxg')[0].dropzone.processQueue();

        $('#lvyuebhwjxg')[0].dropzone.processQueue();

        $('#kaigongyfksqwjxg')[0].dropzone.processQueue();

        $('#kaigongyfkbhwjxg')[0].dropzone.processQueue();

        var xiabiao = dangqianxm.xiangmuhtxx.indexOf(_.findWhere(dangqianxm.xiangmuhtxx,{hetongbh:Session.get('dangqianhtxx').hetongbh}));
        console.log(xiabiao);
        var int = setInterval(function () {
            if(hetongxxxg_biaoshi === 0){
                //更新此项目合同信息
                dangqianxm.xiangmuhtxx[xiabiao] = hetongxxxg;
                //更新当前项目
                tb_gc_xiangmuk.update({_id:dangqianxm._id},{$set:dangqianxm},false,function (error) {
                    if(error){
                        console.log('修改失败失败');
                    }else{
                        $('#xiugaigchtxx').modal('hide');
                    }
                });
                //更新界面
                Session.set('dangqianxmxx',dangqianxm);
                window.clearInterval(int);
            }
        },50);
    },
    //新增标段合同信息
    'submit #xinzengbdht':function (event) {
        event.preventDefault();
        //获取当前项目
        var dangqianxm = Session.get('dangqianxmxx');
        //取得合同编号
        var bianhaoxx = Template.instance().bianhaoxx.get().fetch()[0];
        var dangqianhtbh = parseInt(bianhaoxx.hetongbh);
        biaoduanhtxz.hetongbh = (Array(5).join('0') + (dangqianhtbh+1)).slice(-5);
        //获取施工类服务类型
        var shigongmb = _.findWhere(_.findWhere(mabiaoxx.get().fetch(),{mabiaomc:'服务类型'}).mabiaoxx,{mazhi:'施工'});
        //获取服务类型编号
        biaoduanhtxz.fuwulxbh = shigongmb.bianhao;
        //获取服务类型
        biaoduanhtxz.fuwulxmc = shigongmb.mazhi;
        //获取标段名称
        biaoduanhtxz.biaoduanmc = event.target.biaoduanhtxz_biaoduanmc.value;
        //获取单位名称
        biaoduanhtxz.danweimc = event.target.biaoduanhtxz_danweimc.value;
        //获取合同金额
        biaoduanhtxz.hetongje = event.target.biaoduanhtxz_hetongje.value;
        //获取暂定金额
        biaoduanhtxz.zandingje = event.target.biaoduanhtxz_zandingje.value;
        //获取开工预付款
        biaoduanhtxz.kaigongyfk = event.target.biaoduanhtxz_kaigongyfk.value;
        //获取合同说明
        biaoduanhtxz.hetongsm = event.target.biaoduanhtxz_hetongsm.value;

        //计算获取合同清单价:合同清单价=合同金额-暂定金额-质保金
        biaoduanhtxz.hetongqdj = (biaoduanhtxz.hetongje * 0.97 - biaoduanhtxz.zandingje).toString();
        //计算获取质保金
        biaoduanhtxz.zhibaoj = (biaoduanhtxz.hetongje * 0.03).toString();

        //初始化计量支付审定资金
        biaoduanhtxz.jiliangzfsdzj = '00000';
        //初始化开工预付款扣款
        biaoduanhtxz.kaigongyfkkk = '00000';

        //TODO:输入校验
        //文件上传
        $('#biaoduan_hetongwjsc')[0].dropzone.processQueue();

        $('#biaoduan_shenjiwjsc')[0].dropzone.processQueue();

        $('#biaoduan_jiaogongyswjsc')[0].dropzone.processQueue();

        $('#biaoduan_jungongyswjsc')[0].dropzone.processQueue();

        $('#biaoduan_lvyuebhwjsc')[0].dropzone.processQueue();

        $('#biaoduan_kaigongyfksqwjsc')[0].dropzone.processQueue();

        $('#biaoduan_kaigongyfkbhwjsc')[0].dropzone.processQueue();

        var int = setInterval(function () {
            if(biaoduanhtwjxz_biaoshi === 0){
                //将工程合同新增加入项目中
                dangqianxm.biaoduanhtxx.push(biaoduanhtxz);
                tb_gc_xiangmuk.update({_id:dangqianxm._id},{$set:dangqianxm},false,function (error) {
                    if(error){
                        console.log('插入失败');
                        dangqianxm.biaoduanhtxx.pop();
                    }else{
                        bianhaoxx.hetongbh = biaoduanhtxz.hetongbh;
                        ts_gc_bianhaoxx.update({_id:bianhaoxx._id},{$set:{hetongbh:bianhaoxx.hetongbh}});
                        $('#xinzengbdhtxx').modal('hide');
                    }
                });
                //更新界面
                Session.set('dangqianxmxx',dangqianxm);
                window.clearInterval(int);
            }
        },50);
    },
    //删除标段合同信息
    'click [name="shanchubdxx"]':function (event) {
        //TODO:判断权限及是否存在拨付工单
        //获取当前项目
        var dangqianxm = Session.get('dangqianxmxx');
        //更新数据库信息
        dangqianxm.biaoduanhtxx = _.without(dangqianxm.biaoduanhtxx,_.findWhere(dangqianxm.biaoduanhtxx,{hetongbh:this.hetongbh}));
        tb_gc_xiangmuk.update({_id:dangqianxm._id},{$set:dangqianxm},false,function (error) {
            if(error){
                console.log('删除失败');
                dangqianxm = Session.get('dangqianxmxx');
            }
        });
        //更新界面
        Session.set('dangqianxmxx',dangqianxm);
    },
    //点击修改标段合同信息
    'click [data-target="#xiugaibdhtxx"]':function (event) {
        Session.set('dangqianhtxx',this);
        hetongxxxg = Session.get('dangqianhtxx');
    },
    //删除标段合同文件信息
    'click [name="shanchubdwj"]':function (event) {
        hetongxxxg.hetongwjxx[event.currentTarget.title] = _.without(hetongxxxg.hetongwjxx[event.currentTarget.title],_.findWhere(hetongxxxg.hetongwjxx[event.currentTarget.title],this));
        $(event.currentTarget).parent().parent().parent().parent().remove();
    },
    //修改标段合同信息
    'submit #xiugaibdht':function (event) {
        event.preventDefault();
        //获取当前项目
        var dangqianxm = Session.get('dangqianxmxx');
        //获取标段名称
        hetongxxxg.biaoduanmc = event.target.biaoduanhtxg_biaoduanmc.value;
        //获取单位名称
        hetongxxxg.danweimc = event.target.biaoduanhtxg_danweimc.value;
        //获取合同金额
        hetongxxxg.hetongje = event.target.biaoduanhtxg_hetongje.value;
        //获取暂定金额
        hetongxxxg.zandingje = event.target.biaoduanhtxg_zandingje.value;
        //获取开工预付款
        hetongxxxg.kaigongyfk = event.target.biaoduanhtxg_kaigongyfk.value;
        //获取合同说明
        hetongxxxg.hetongsm = event.target.biaoduanhtxg_hetongsm.value;

        //计算获取合同清单价:合同清单价=合同金额-暂定金额-质保金
        hetongxxxg.hetongqdj = (hetongxxxg.hetongje * 0.97 - hetongxxxg.zandingje).toString();
        //计算获取质保金
        hetongxxxg.zhibaoj = (hetongxxxg.hetongje * 0.03).toString();
        //TODO:输入校验

        //文件上传
        $('#biaoduan_hetongwjxg')[0].dropzone.processQueue();

        $('#biaoduan_shenjiwjxg')[0].dropzone.processQueue();

        $('#biaoduan_jiaogongyswjxg')[0].dropzone.processQueue();

        $('#biaoduan_jungongyswjxg')[0].dropzone.processQueue();

        $('#biaoduan_lvyuebhwjxg')[0].dropzone.processQueue();

        $('#biaoduan_kaigongyfksqwjxg')[0].dropzone.processQueue();

        $('#biaoduan_kaigongyfkbhwjxg')[0].dropzone.processQueue();

        var xiabiao = dangqianxm.biaoduanhtxx.indexOf(_.findWhere(dangqianxm.biaoduanhtxx,{hetongbh:Session.get('dangqianhtxx').hetongbh}));
        var int = setInterval(function () {
            if(hetongxxxg_biaoshi === 0){
                //更新此项目合同信息
                dangqianxm.biaoduanhtxx[xiabiao] = hetongxxxg;
                //更新当前项目
                tb_gc_xiangmuk.update({_id:dangqianxm._id},{$set:dangqianxm},false,function (error) {
                    if(error){
                        console.log('修改失败失败');
                    }else{
                        $('#xiugaibdhtxx').modal('hide');
                    }
                });
                //更新界面
                Session.set('dangqianxmxx',dangqianxm);
                window.clearInterval(int);
            }
        },50);
    },
});