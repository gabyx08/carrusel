$(document).ready(function(){

  $("#carrusel div:gt(0)").hide();
  
  $("#1").click(function(){
      $(".imagen").hide();
      $("#img1").show();
  });

  $("#2").click(function(){
      $(".imagen").hide();
      $("#img2").show();
  });
  $("#3").click(function(){
      $(".imagen").hide();
      $("#img3").show();
  });
  $("#4").click(function(){
      $(".imagen").hide();
      $("#img4").show();
  });
  $("#5").click(function(){
      $(".imagen").hide();
      $("#img5").show();
  });
});
