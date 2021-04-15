
  $(document).ready(function(){
    $("#frunze").click(function(){
      $("body").css("background", "url(frunze.jpg) no-repeat center center fixed");
    });
  });
  

$(document).ready(function(){
    $("#airbus-a350-background").click(function(){
      $("body").css("background", "url(airbus-a350-background.jpg) no-repeat center center fixed");
    });
  });
  
  $(document).ready(function(){
    $("#tram-sofia-background").click(function(){
      $("body").css("background", "url(tram-sofia-background.jpg) no-repeat center center fixed");
    });
  });
  

  $(document).ready(function(){
    $("#salvie").click(function(){
      $("body").css("background", "url(salvie.jpg) no-repeat center center fixed");
    });
  });

  $(document).ready(function(){
    $("#content1").click(function(){
      $(".personalizeBackground").show();
      $(".personalizeStart").hide();
      $(".personalizeColor").hide();
    });
  });

  $(document).ready(function(){
    $("#content2").click(function(){
      $(".personalizeColor").show();
      $(".personalizeStart").hide();
      $(".personalizeBackground").hide();
    });
  });


  $(document).ready(function(){
    $(".closeSettingsBtn").click(function(){
      $(".personalizeSettings").css("opacity", "0");
      $(".personalizeSettings").css("pointer-events", "none");
    });
  });
  

  $(document).ready(function(){
    $(".settingsBtn").click(function(){
      $(".personalizeSettings").css("opacity", "1");
      $(".personalizeSettings").css("pointer-events", "all");
    });
  });
  

