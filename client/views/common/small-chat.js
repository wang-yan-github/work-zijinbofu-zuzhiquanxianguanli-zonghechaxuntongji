Template.smallChat.events({
    'click .open-small-chat':function () {
        if($('.small-chat-box').hasClass('active')){
            $('.small-chat-box').removeClass('active');
        }else{
            $('.small-chat-box').addClass('active');
        }
    }
});