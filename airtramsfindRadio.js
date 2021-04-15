var container0 = document.getElementById("container0");
var container1 = document.getElementById("container1");
var elementForTabs = [container0, container1];
var numberTabsOpen = [];
var goBackfromAnEmbedWesite = document.getElementById("dot-back");

function goBack(){
  window.history.back();
}

function goForward(){
  window.history.forward();
}



  $(document).ready(function(){

    $(".buttonModalOpen0").click(function(){
      var createTab = $("<button></button>").text(elementForTabs[0].title);
      $(".container0").show();
      $(".buttonModalOpen0").hide();
      $(createTab).addClass("buttonModalClose0");
      $(".down").append(createTab);
    });
  });

  $(document).ready(function(){

    $(".buttonModalOpen1").click(function(){
      var createTab1 = $("<button></button>").text(elementForTabs[1].title);
      $(".container1").show();
      $(".buttonModalOpen1").hide();
      $(createTab1).addClass("buttonModalClose1");
      $(".down").append(createTab1);
    });
  });




 