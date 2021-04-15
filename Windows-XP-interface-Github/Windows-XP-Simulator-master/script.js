$(document).ready(function(){
  $(".navbar .startmenutoggle").click(function() {
    $(".startmenu").slideToggle("fast");
  });

  var windowcount = 0;

  $(".newwindowbutton").click(function() {

    var window = '<div ' + ' id=' + String(windowcount) + ' class="window ui-draggable" style="position: absolute; display: block;">' +
                '<div class="windowbar ui-draggable-handle">' +
                  '<div class="windowtitle">Ikkuna ' + windowcount + '</div>' +
                    '<div class="buttons">' +
                      '<div class="minimizebutton">_</div>' +
                      '<div class="closebutton">X</div>' +
                    '</div>' +
                '</div>' +
              '</div>';

    var taskbarbutton = '<button ' + 'id=' + String(windowcount) + ' class="shown">' + String(windowcount) + '</button>'

    windowcount++;

    $(".wrapper").append(window);
    $(".navbar").append(taskbarbutton);

    $('.window').draggable({
      handle: ".windowbar",
      containment: ".wrapper",
      stack: "div",
      distance: 0
    });

    $(".window").resizable({
      maxHeight: 800,
      maxWidth: 1000,
      minHeight: 160,
      minWidth: 200
    });

    $(".closebutton").click(function() {
      var id = $(this).closest(".window").attr("id");
      $(this).closest(".window").remove();
      $(".navbar").children("#" + id).remove();
    });
  
    $(".minimizebutton").click(function() {
      var id = $(this).closest(".window").attr("id");
      $(this).closest(".window").hide();
      $("#" + id + ".shown").addClass("minimized");
      $("#" + id + ".shown").removeClass("shown");
    });

    $(document).on("click", ".minimized", function() {
      var id = $(this).attr("id");
      $("#" + id + ".window").show();
      $(this).addClass("shown");
      $(this).removeClass("minimized");
    });
  
    $(document).on("click", ".shown", function() {
      var id = $(this).attr("id");
      $("#" + id + ".window").hide();
      $(this).addClass("minimized");
      $(this).removeClass("shown");
    });

  });

});