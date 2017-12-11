// Run this when the meteor app is started
Meteor.startup(function () {
    Meteor.Dropzone.options.dictDefaultMessage = '请上传您的文件！';
    Meteor.Dropzone.options.dictInvalidInputType = '不接受此上传文件的类型！';
    Meteor.Dropzone.options.dictCancelUpload = 'x';
    Meteor.Dropzone.options.dictRemoveFile = '取消上传';
    Meteor.Dropzone.options.dictMaxFilesExceeded = '超出上传最大文件限制！';
});