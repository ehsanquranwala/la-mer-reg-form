
$(".navbar-toggler").click(function () {
    $(".navbar ").toggleClass("menu-open", 20000);
});


$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});


$(".back-btn").click(function(){
    var prevActive=$('.selected').prev();
    prevActive.show();
    $(".selected").removeClass("selected");
    prevActive.addClass("selected");
    
    var prevElement=$('.selectedDiv').prev();
    prevElement.show();
    $(".selectedDiv").hide();                         
    $(".selectedDiv").removeClass("selectedDiv");
    prevElement.addClass("selectedDiv");                            

   if($('.first').css('display')=="block"){
       $(".back-btn").addClass("off");
   }
   else{
    $(".next-btn").removeClass("off");  
   }
});

$(".next-btn").click(function(){
    var nextActive= $('.selected').next();
    nextActive.addClass("selected");



    var nextElement= $('.selectedDiv').next();
    nextElement.show();
    $(".selectedDiv").hide();                         
    $(".selectedDiv").removeClass("selectedDiv");
    nextElement.addClass("selectedDiv");
    if($('.last').css('display')=="block"){
      $(".next-btn").attr("href", "dashboard.html");
   }
   else{
     $(".back-btn").removeClass("off");  
   }
});


 
  $('.fillterButton').on('click', function () {

    $(".dashboardNavigation").addClass("activefilter");
});
$('.x-close').on('click', function () {
    $(".dashboardNavigation").removeClass("activefilter");
});

 $('#timepicker').timepicker();
 $('#timepicker-2').timepicker();

$('#datepicker').datepicker();
$('#input03').filestyle({
				badge: true,
				input : false,
				btnClass : 'btn btn-smallRadius btn-1',
                text:' Upload',
				htmlIcon : '<span class="icon-upload"></span> '
			});
$('#input04').filestyle({
				badge: true,
				input : false,
				btnClass : 'btn uploadbtn',
                htmlIcon : '<span class="icon-upload mr-3"></span> ',
                text:' image place holder 1 '
			});
$('#input05').filestyle({
				badge: true,
				input : false,
				btnClass : 'btn uploadbtn',
                htmlIcon : '<span class="icon-upload mr-3"></span> ',
                text:' image place holder 2 '
			});


$(".niceScroll").niceScroll({
      cursorwidth:12,
      cursoropacitymin:0.4,
      cursorcolor:'#6e8cb6',
      cursorborder:'none',
      cursorborderradius:4,
      autohidemode:'leave'
});
  


