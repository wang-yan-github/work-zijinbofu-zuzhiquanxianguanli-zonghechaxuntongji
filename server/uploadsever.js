Meteor.startup(function () {
    var tmpDir = '/Users/maxucheng/Documents/Uploads/tmp';
    var uploadDir = '/Users/maxucheng/Documents/Uploads/upload';
    var bianhaoxx = ts_gc_bianhaoxx.find({}).fetch()[0];
    //上传文件
    UploadServer.init(
        {
            tmpDir: tmpDir,
            uploadDir: uploadDir,
            checkCreateDirectories: true,
            uploadUrl: '/upload/',
            getDirectory: function(fileInfo, formData) {
                return formData.dirctory;
            },
            getFileName: function(file, formData) {
                return new Date().getTime() + '-' + Math.floor((Math.random() * 10000) + 1) + '-' + file.name;
            },
            finished: function(fileInfo, formFields) {
                var date = new Date();
                var wenjianbh = parseInt(bianhaoxx.wenjianbh);
                var template = {
                    "wenjianbh" : (Array(5).join('0') + (wenjianbh+1)).slice(-5),
                    "wenjianmc" : fileInfo.name,
                    "wenjianlx" : fileInfo.type,
                    "shangchuansj" : date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDay()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds(),
                    "wenjianjj" : formFields.jianjie,
                    "wenjiannr" : fileInfo,
                    "wenjiandz" : uploadDir+'/'+fileInfo.path
                };
                tb_gc_wenjiank.insert(template,function (error) {
                    if(error){
                        console.log('插入失败!');
                    }else{
                        //更新编号库
                        bianhaoxx.wenjianbh = template.wenjianbh;
                        ts_gc_bianhaoxx.update({_id:bianhaoxx._id},{$set:{wenjianbh:bianhaoxx.wenjianbh}},false);
                    }
                });
                //增加返回值
                fileInfo.wenjianbh = template.wenjianbh;
                fileInfo.wenjianmc = template.wenjianmc;
                fileInfo.shangchuansj = template.shangchuansj;
            },
        }
    );
});