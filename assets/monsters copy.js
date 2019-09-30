$(document).ready(function() {
  //========================================================================================//
  let divAmount = [];
  let xAmount = "one-up";
  let totalBlocks = "1";
  let svgId = "block16";

  // a = how many svg files
  const totalShapes = 4;

  color = '333333';
  color2 = 'FFDD79';
  color3 = 'FFC205';
  
  //========================================================================================//
  var mainBlock = Snap("#main-block");

  Snap.load("assets/svg/block-main.svg", onSVGLoaded);
  function onSVGLoaded(data) {
    mainBlock.append(data);
  }

  // button events to show / hide the grid - strokes
  $("#btn-grid").click(function() {
    if ($(".data").hasClass("grid-off")) {
      $(".data").removeClass("grid-off");
      $(".data").addClass("grid-on");
    } else {
      $(".data").removeClass("grid-on");
      $(".data").addClass("grid-off");
    }
  });
  //========================================================================================//
  //========================================================================================//
  // buttons for art-board generation
  $(document).ready(function() {
    $("#sidebarCollapse").on("click", function() {
      $("#sidebar").toggleClass("active");
    });
  });

  function clearArt() {
    $("#art-board").empty();
  }

  $("#footer").hide();
  // =========================

  function blocksForEyes(a) {
    for (i = 0; i < a; i++) {
      var total = $(
        '<div id="" class="boxes-card shape-thumbnail"><svg id="block' +
          i +
          '" "class="" viewBox="0 0 200 200"></svg></div>'
      );
      $("#boxes-eyes").append(total);
    }
  }
  blocksForEyes(4);



  function blocksForMouth(a) {
    for (i = 0; i < a; i++) {
      var total = $(
        '<div id="" class="boxes-card shape-thumbnail"><svg id="mouth' +
          i +
          '" "class="" viewBox="0 0 200 200"></svg></div>'
      );
      $("#boxes-mouth").append(total);
    }
  }
  blocksForMouth(3);


  function blocksForNose(a) {
    for (i = 0; i < a; i++) {
      var total = $(
        '<div id="" class="boxes-card shape-thumbnail"><svg id="nose' +
          i +
          '" "class="" viewBox="0 0 200 200"></svg></div>'
      );
      $("#boxes-nose").append(total);
    }
  }
  blocksForNose(3);
  //========================================================================================//
    // defines the color 1 and 2 for the default shapes
function loadEyes(a, block) {
  Snap.load("assets/svg-parts/eyes/block" + a + ".svg", function (data) {
    var paper = data.select("g");
    block.append(paper);
  });
}

function loadMouth(a, block) {
  Snap.load("assets/svg-parts/mouth/block" + a + ".svg", function (data) {
    var paper = data.select("g");
    block.append(paper);
  });
}

function loadNose(a, block) {
  Snap.load("assets/svg-parts/nose/block" + a + ".svg", function (data) {
    var paper = data.select("g");
    block.append(paper);
  });
}
//========================================================================================//
  // create and load Snap svg blocks in the shape div container
  /// ===== eyes =====
  function LoadSnapsFunc() {
    for (i = 0; i <= totalShapes; i++) {
      var str = "e" + i + " = Snap('#block" + i + "');";
      //Declaring and Setting dynamic variable to undefined using eval
      eval(str);
    }
  }
  LoadSnapsFunc();

  function LoadBlocksFunc() {
    for (i = 0; i <= totalShapes; i++) {
      var str = "loadEyes(" + i + ", e" + i + ");";
      //Declaring and Setting dynamic variable to undefined using eval
      eval(str);
    }
  }
  LoadBlocksFunc();

/// ===== mouth =====

  function LoadSnapsFuncMouth() {
    for (i = 0; i <= totalShapes; i++) {
      var str = "m" + i + " = Snap('#mouth" + i + "');";
      //Declaring and Setting dynamic variable to undefined using eval
      eval(str);
    }
  }
  LoadSnapsFuncMouth();

  function LoadMouthFunc() {
    for (i = 0; i <= totalShapes; i++) {
      var str = "loadMouth(" + i + ", m" + i + ");";
      //Declaring and Setting dynamic variable to undefined using eval
      eval(str);
    }
  }
  LoadMouthFunc();


  /// ===== nose =====
  function LoadSnapsFuncNose() {
    for (i = 0; i <= totalShapes; i++) {
      var str = "n" + i + " = Snap('#nose" + i + "');";
      //Declaring and Setting dynamic variable to undefined using eval
      eval(str);
    }
  }
  LoadSnapsFuncNose();

  function LoadNoseFunc() {
    for (i = 0; i <= totalShapes; i++) {
      var str = "loadNose(" + i + ", n" + i + ");";
      //Declaring and Setting dynamic variable to undefined using eval
      eval(str);
    }
  }
  LoadNoseFunc();

  //========================================================================================//

  // create the block elements for the html page
  function makeBlocks(a, b) {
    for (i = 0; i < a; i++) {
      var block = $( "<div id='a-b" + i + "' class='block-up data rotate grid-on " + b + "' style='transform: rotate(0deg);'></div>" );
      $("#art-board").append(block);
      $("#block1").clone().appendTo("#a-b" + i + "");
    }
  }

  function makeBlocks2(a, b) {
    for (i = 0; i < a; i++) {
      var block = $(
        "<div id='b-b" + i + "' class='block-up data rotate grid-on " + b + "' style='transform: rotate(0deg);'></div>");
      $('#art-board2').append(block);
      $('#block1').clone().appendTo("#b-b" + i + "");
    }
  }

  function makeBlocks3(a, b) {
    for (i = 0; i < a; i++) {
      var block = $(
        "<div id='c-b" + i + "' class='block-up data rotate grid-on " + b + "' style='transform: rotate(0deg);'></div>");
      $('#art-board3').append(block);
      $('#block1').clone().appendTo("#c-b" + i + "");
    }
  }

  //========================================================================================//
  // on click button event for make blocks
  $(".artBoardButtons").on("click", function() {
    xAmount = $(this).data("btn-up");
    totalBlocks = $(this).data("btn-x");

    clearArt();
    $("#board-options").hide();

    // data for saving
    totalBlocksSqd = Math.sqrt(totalBlocks);

    if (totalBlocksSqd === 4) {
      gridPoints = [0, 200, 400, 600];
    } else if (totalBlocksSqd === 5) {
      gridPoints = [0, 200, 400, 600, 800];
    } else if (totalBlocksSqd === 6) {
      gridPoints = [0, 200, 400, 600, 800, 1000];
    } else if (totalBlocksSqd === 7) {
      gridPoints = [0, 200, 400, 600, 800, 1000, 1200];
    } else if (totalBlocksSqd === 8) {
      gridPoints = [0, 200, 400, 600, 800, 1000, 1200, 1400];
    } else if (totalBlocksSqd === 8) {
      gridPoints = [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600];
    }

    makeBlocks(totalBlocks, xAmount);
    makeBlocks2(totalBlocks, xAmount);
    makeBlocks3(totalBlocks, xAmount);
    divAmount.push(totalBlocks);
    $('#main-card').attr('data-art-board-size', totalBlocks)

  });
  


  //========================================================================================//
  // create the block elements based on block selection to fill art board
  function randomBlocks(a, b) {
    for (i = 0; i < a; i++) {
      let block = $( "<div id='a-b" + i + "' class='block-up data rotate grid-off " + b + "' data-block='b" + i + "' style='transform: rotate(0deg);'></div>" );
      let randomNum = Math.floor(Math.random() * (+totalShapes - +0)) + +0;
      $("#art-board").append(block);
      $("#block" + randomNum + "") .clone() .appendTo("#a-b" + i + "");
    }
  }

  // on click button event for make blocks
  $(".btn-random").on("click", function() {
    clearArt();
    $("#board-options").hide();
    randomBlocks(totalBlocks, xAmount);

    divAmount.push(totalBlocks);
  });

  //========================================================================================//
    //========================================================================================//
  // create the block elements based on block selection to fill art board
  function fillBlocks(a, b) {
    for (i = 0; i < a; i++) {
      var block = $( "<div id='a-b" + i + "' class='block-up data rotate grid-off " + b + "' style='transform: rotate(0deg);'></div>");
      $('#art-board').append(block);
      $('#' + svgId + '').clone().appendTo("#a-b" + i + "");
    }
  }
  
  //========================================================================================//
  // buttons to change shape divs when clicked
  $(".shape-thumbnail").on("click", function () {
    var start = this.innerHTML.indexOf("block");
    var end = this.innerHTML.indexOf("class");
     var svgIdClicked = (this.innerHTML.substring(start, end - 3));

    $("#art-board, #art-board2, #art-board3").on("click", ".data", function () {
      $(this).empty();
      $("#" + svgIdClicked).clone().appendTo(this);

      $('#art-board .color0').css({ fill: "#" + color });
      $('#art-board2 .color0').css({ fill: "#" + color2 });
      $('#art-board3 .color0').css({ fill: "#" + color3 });

    });

    svgId = svgIdClicked;
  });

    //================================//
  // on click button event for fill blocks when btn-fill pressed
  $(".btn-fill").on("click", function() {
    // clearArt();
    // $("#board-options").hide();
    fillBlocks(totalBlocks, xAmount);

    divAmount.push(totalBlocks);
  });


  //========================================================================================//
  //========================================================================================//
  // JS to toggle layers on and off
  $(".btn-hide3").click(function() {
    function showHide() {
      var e = document.getElementById("art-board3");
      if (e.style.visibility != "hidden") {
        e.style.visibility = "hidden";
      } else {
        e.style.visibility = "";
      }
    }
    showHide();
  });
  // =============
  $(".btn-hide2").click(function() {
    function showHide() {
      var e = document.getElementById("art-board2");
      if (e.style.visibility != "hidden") {
        e.style.visibility = "hidden";
      } else {
        e.style.visibility = "";
      }
    }
    showHide();
  });
// =============
  $(".btn-hide").click(function() {
    function showHide() {
      var e = document.getElementById("art-board");
      if (e.style.visibility != "hidden") {
        e.style.visibility = "hidden";
      } else {
        e.style.visibility = "";
      }
    }
    showHide();
  });
  //========================================================================================//
  //========================================================================================//
  // Create hiding div
  $("#footer-btns").on("click", "button", function() {
    if (this.id === "action-box") {
      $("#action-colors").attr({
        "aria-expanded": "false",
        class: "btn btn-secondary collapsed btn-lg"
      });
      $("#colors").attr("class", "collapse");
      // $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': 'gold' });
      $("#action-colors").css("border", "none");
      $("#action-block").css("border", "none");
      //Change Action Item;
    } else if (this.id === "action-color") {
      $("#action-box").attr({
        "aria-expanded": "false",
        class: "btn btn-secondary collapsed btn-lg"
      });
      $("#boxes").attr("class", "collapse");
      // $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': 'gold' });
      $("#action-box").css("border", "none");
      $("#action-block").css("border", "none");
      //Change Action Item;
    } else if (this.id === "action-block") {
      $("#action-box").attr({
        "aria-expanded": "false",
        class: "btn btn-secondary collapsed btn-lg"
      });
      $("#boxes").attr("class", "collapse");
      // $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': 'gold' });
      $("#action-box").css("border", "none");
      $("#action-block").css("border", "none");
      //Change Action Item;
    } else {
      $("#action-box").attr({
        "aria-expanded": "false",
        class: "btn btn-secondary collapsed btn-lg"
      });
      $("#boxes").attr("class", "collapse");
      $("#action-colors").attr({
        "aria-expanded": "false",
        class: "btn btn-secondary collapsed"
      });
      $("#colors").attr("class", "collapse");
      // $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': 'gold' });
      $("#action-box").css("border", "none");
      $("#action-colors").css("border", "none");
      //Change Action Item;
    }
  });

  var colors = [ 'FF847C' , 'd84233' , 'c6e7b1' , 'FFDD79' , 'FFC205' , '2044d4' , '5aa6da' , 'F5F5F5' , '333333' ];

  //========================================================================================//
  // color section
  //Fill hiding div with color boxes
  function generateColors() {
    for (var i = 0; i < colors.length; i++) {
      var c = $("<img id='color-card' class='img-thumbnail img-t1'></img>");
      var colortype = "background-color: #" + colors[i];

      c.attr("style", colortype);
      c.attr("colorpicker", colors[i]);
      $("#color-holder").append(c);
    }
  }

  function generateColorsTwo() {
    for (var i = 0; i < colors.length; i++) {
      var c = $("<img id='color-card' class='img-thumbnail img-t2'></img>");
      var colortype = "background-color: #" + colors[i];

      c.attr("style", colortype);
      c.attr("colorpicker", colors[i]);
      $("#color-holder-2").append(c);
    }
  }

  function generateColorsThree() {
    for (var i = 0; i < colors.length; i++) {
      var c = $("<img id='color-card' class='img-thumbnail img-t3'></img>");
      var colortype = "background-color: #" + colors[i];

      c.attr("style", colortype);
      c.attr("colorpicker", colors[i]);
      $("#color-holder-3").append(c);
    }
  }

  generateColors();
  generateColorsTwo();
  generateColorsThree();
  //========================================================================================//
    //========================================================================================//
  //On Click Event for Colors
  $("#color-holder").on("click", "#color-card", function () {
    $(".img-t1").css('border', 'none');
    $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': '#2A363B' });
  });
  

  $("#color-holder-2").on("click", "#color-card", function () {
    $(".img-t2").css('border', 'none');
    $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': '#2A363B' });
  });

  $("#color-holder-3").on("click", "#color-card", function () {
    $(".img-t3").css('border', 'none');
    $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': '#2A363B' });
  });
  //========================================================================================//
  //On Click Event for blocks
  $("#boxes-holder").on("click", ".boxes-card", function () {
    $(".shape-thumbnail").css('border', 'none');
    $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': '#2A363B' });
  });

    //========================================================================================//
  //On Click Event for boards
  $("#board-holder").on("click", "#board-holder", function() {
    $(".board-thumbnail").css("border", "none");
    $(this).css({ border: "solid", "border-width": "4px", "border-color": "#2A363B"
    });
  });

    //========================================================================================//
function changeColor () {
  $('.btn-hide3').css({'color':'black'});
}


  $("#color-holder").on("click", "#color-card", function () {
    color = ($(this).attr("colorpicker"));
    $('#art-board .color0').css({ fill: "#" + color });
    return color;
  });


  $("#color-holder-2").on("click", "#color-card", function () {
    color2 = ($(this).attr("colorpicker"));
    $('#art-board2 .color0').css({ fill: "#" + color2 });
    return color2;
  });

  $("#color-holder-3").on("click", "#color-card", function () {
    color3 = ($(this).attr("colorpicker"));
    $('#art-board3 .color0').css({ fill: "#" + color3 });
    return color3;
  });

  //========================================================================================//
  //========================================================================================//
}); // end document ready
