// Initialize affix and add an offset to add affix class on scroll
$('#mainNav').affix({
  offset: {
    top: 100
  }
})


$("a").click(function (e){



    var btnId ="section"+e.currentTarget.id;
    
    $('html,body') .animate({
        scrollTop: $("#" + btnId).offset().top
    },1500);




});



