$(".menu > ul > li").click(function (e){
    //remove active from alredy active
    $(this).siblings().removeClass("active");
    //add active to clicked 
  $(this).toggleClass("active");
  //if has sub menu open it
  $(this).find("ul").slideToggle();
   //close other sub menu if any open
   $(this).siblings.find("ul").slideup();
   //remove active class of sub menu items
   $(this).siblings().find("li").removeClass("active");
});