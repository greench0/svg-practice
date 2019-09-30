$(document).ready(function() {
  //========================================================================================//
  let divAmount = [];
  let xAmount = "one-up";
  let totalBlocks = "1";
  let svgId = "block0";

  // a = how many svg files
  const totalEyes = 5;
  const totalMouth = 3;
  const totalNose = 3;
  const totalShapes = 4;

  //========================================================================================//
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
  // buttons for art-board generation
  $(document).ready(function() {
    $("#sidebarCollapse").on("click", function() {
      $("#sidebar").toggleClass("active");
    });
  });

  function clearArt() { $("#art-board").empty(); }
  function clearArt2() { $("#art-board2").empty(); }
  function clearArt3() { $("#art-board3").empty(); }
  function clearArt4() { $("#art-board4").empty(); }

  $("#footer").hide();
//========================================================================================//
//========================================================================================//
// shapes section
//========================================================================================//
//========================================================================================//
// load svg shapes into nav Eyes
  function blocksForEyes(a) {
    for (i = 0; i < a; i++) {
      var total = $( '<div id="" class="boxes-card eye-thumbnail"><svg id="block' + i + '" "class="" viewBox="0 0 200 200"></svg></div>' );
      $("#boxes-eyes").append(total);
    }
  }
  blocksForEyes(totalEyes);


  function loadEyes(a, block) {
  Snap.load("assets/svg-parts/eyes/block" + a + ".svg", function (data) {
    var paper = data.select("g");
    block.append(paper);
  });
}

  // create and load Snap svg blocks in the shape div container
  /// ===== eyes =====
  function LoadFuncEyes() {
    for (i = 0; i <= totalEyes; i++) {
      var str = "e" + i + " = Snap('#block" + i + "');";
      //Declaring and Setting dynamic variable to undefined using eval
      eval(str);
    }
  }
  LoadFuncEyes();

  function LoadBlocksFunc() {
    for (i = 0; i <= totalEyes; i++) {
      var str = "loadEyes(" + i + ", e" + i + ");";
      //Declaring and Setting dynamic variable to undefined using eval
      eval(str);
    }
  }
  LoadBlocksFunc();
  
  //=================================//
   // load svg shapes into nav Nose
   function blocksForNose(a) {
    for (i = 0; i < a; i++) {
      var total = $( '<div id="" class="boxes-card nose-thumbnail"><svg id="nose' + i + '" "class="" viewBox="0 0 200 200"></svg></div>' );
      $("#boxes-nose").append(total);
    }
  }
  blocksForNose(totalNose);


  function loadNose(a, block) {
  Snap.load("assets/svg-parts/nose/block" + a + ".svg", function (data) {
    var paper = data.select("g");
    block.append(paper);
  });
}

  // create and load Snap svg blocks in the shape div container
  
  /// ===== nose =====
  function LoadFuncNose() {
    for (i = 0; i <= totalMouth; i++) {
      var str = "n" + i + " = Snap('#nose" + i + "');";
      //Declaring and Setting dynamic variable to undefined using eval
      eval(str);
    }
  }
  LoadFuncNose();

  function LoadBlocksFuncNose() {
    for (i = 0; i <= totalMouth; i++) {
      var str = "loadNose(" + i + ", n" + i + ");";
      //Declaring and Setting dynamic variable to undefined using eval
      eval(str);
    }
  }
  LoadBlocksFuncNose();

    //=================================//
  // load svg shapes into nav Mouth
  function blocksForMouth(a) {
    for (i = 0; i < a; i++) {
      var total = $( '<div id="" class="boxes-card mouth-thumbnail"><svg id="mouth' + i + '" "class="" viewBox="0 0 200 200"></svg></div>' );
      $("#boxes-mouth").append(total);
    }
  }
  blocksForMouth(totalMouth);


  function loadMouth(a, block) {
  Snap.load("assets/svg-parts/mouth/block" + a + ".svg", function (data) {
    var paper = data.select("g");
    block.append(paper);
  });
}

  // create and load Snap svg blocks in the shape div container
  /// ===== Mouth =====
  function LoadFuncMouth() {
    for (i = 0; i <= totalMouth; i++) {
      var str = "m" + i + " = Snap('#mouth" + i + "');";
      //Declaring and Setting dynamic variable to undefined using eval
      eval(str);
    }
  }
  LoadFuncMouth();

  function LoadBlocksFuncMouth() {
    for (i = 0; i <= totalMouth; i++) {
      var str = "loadMouth(" + i + ", m" + i + ");";
      //Declaring and Setting dynamic variable to undefined using eval
      eval(str);
    }
  }
  LoadBlocksFuncMouth();

    //=================================//
// load svg shapes into nav Shapes
function blocksForShapes(a) {
  for (i = 0; i < a; i++) {
    var total = $( '<div id="" class="boxes-card shapes-thumbnail"><svg id="shapes' + i + '" "class="" viewBox="0 0 200 200"></svg></div>' );
    $("#boxes-shapes").append(total);
  }
}
blocksForShapes(totalShapes);


function loadShapes(a, block) {
Snap.load("assets/svg-parts/shapes/block" + a + ".svg", function (data) {
  var paper = data.select("g");
  block.append(paper);
});
}

// create and load Snap svg blocks in the shape div container
/// ===== shapes =====
function LoadFuncShapes() {
  for (i = 0; i <= totalShapes; i++) {
    var str = "s" + i + " = Snap('#shapes" + i + "');";
    //Declaring and Setting dynamic variable to undefined using eval
    eval(str);
  }
}
LoadFuncShapes();

function LoadBlocksShapes() {
  for (i = 0; i <= totalShapes; i++) {
    var str = "loadShapes(" + i + ", s" + i + ");";
    //Declaring and Setting dynamic variable to undefined using eval
    eval(str);
  }
}
LoadBlocksShapes();
  //========================================================================================//
  //========================================================================================//
  
  
  //========================================================================================//
  //========================================================================================//
  // create the block elements for the html page
  function makeBlocksEyes(a, b) {
    for (i = 0; i < a; i++) {
      var block = $( "<div id='a-b" + i + "' class='block-up data rotate grid-on " + b + "' style='transform: rotate(0deg);'></div>" );
      $("#art-board").append(block);
      $("#block1").clone().appendTo("#a-b" + i + "");
    }
  }

  function makeBlocksNose(a, b) {
    for (i = 0; i < a; i++) {
      var block = $(
        "<div id='b-b" + i + "' class='block-up data rotate grid-on " + b + "' style='transform: rotate(0deg);'></div>");
      $('#art-board2').append(block);
      $('#block1').clone().appendTo("#b-b" + i + "");
    }
  }

  function makeBlocksMouth(a, b) {
    for (i = 0; i < a; i++) {
      var block = $(
        "<div id='c-b" + i + "' class='block-up data rotate grid-on " + b + "' style='transform: rotate(0deg);'></div>");
      $('#art-board3').append(block);
      $('#block1').clone().appendTo("#c-b" + i + "");
    }
  }

  function makeBlocksShapes(a, b) {
    for (i = 0; i < a; i++) {
      var block = $(
        "<div id='d-b" + i + "' class='block-up data rotate grid-on " + b + "' style='transform: rotate(0deg);'></div>");
      $('#art-board4').append(block);
      $('#block1').clone().appendTo("#d-b" + i + "");
    }
  }

  makeBlocksEyes(totalBlocks, xAmount);
  makeBlocksNose(totalBlocks, xAmount);
  makeBlocksMouth(totalBlocks, xAmount);
  makeBlocksShapes(totalBlocks, xAmount);
  
  $("#board-options").hide();

  //========================================================================================//
  // create the block elements based on block selection to fill art board
  function randomBlockEyes(a, b) {
    for (i = 0; i < a; i++) {
      let block = $( "<div id='a-b" + i + "' class='block-up data rotate grid-off " + b + "' data-block='b" + i + "'></div>" );
      let randomNum = Math.floor(Math.random() * (+totalShapes - +0)) + +0;
      $("#art-board").append(block);
      $("#block" + randomNum + "") .clone() .appendTo("#a-b" + i + "");
    }
  }

  // on click button event for make blocks
  $(".btn-random").on("click", function() {
    clearArt();
    randomBlockEyes(1, "one-up");

    divAmount.push(1);
  });


  ///// ============================= random nose
  function randomBlockNose(a, b) {
    for (i = 0; i < a; i++) {
      let block = $( "<div id='n-b" + i + "' class='block-up data rotate grid-off " + b + "' data-block='b" + i + "'></div>" );
      let randomNum = Math.floor(Math.random() * (+totalNose - +0)) + +0;
      $("#art-board2").append(block);
      $("#nose" + randomNum + "") .clone() .appendTo("#n-b" + i + "");
    }
  }

  // on click button event for make blocks
  $(".btn-random2").on("click", function() {
    clearArt2();
    randomBlockNose(1, "one-up");

    divAmount.push(1);
  });

///// ============================= random mouth
  function randomBlockMouth(a, b) {
    for (i = 0; i < a; i++) {
      let block = $( "<div id='m-b" + i + "' class='block-up data rotate grid-off " + b + "' data-block='b" + i + "'></div>" );
      let randomNum = Math.floor(Math.random() * (+totalMouth - +0)) + +0;
      $("#art-board3").append(block);
      $("#mouth" + randomNum + "") .clone() .appendTo("#m-b" + i + "");
    }
  }

  // on click button event for make blocks
  $(".btn-random3").on("click", function() {
    clearArt3();
    randomBlockMouth(1, "one-up");

    divAmount.push(1);
  });

  ///// ============================= random shapes
  function randomBlockShapes(a, b) {
    for (i = 0; i < a; i++) {
      let block = $( "<div id='s-b" + i + "' class='block-up data rotate grid-off " + b + "' data-block='b" + i + "'></div>" );
      let randomNum = Math.floor(Math.random() * (+totalMouth - +0)) + +0;
      $("#art-board4").append(block);
      $("#shapes" + randomNum + "") .clone() .appendTo("#s-b" + i + "");
    }
  }

  // on click button event for make blocks
  $(".btn-random4").on("click", function() {
    clearArt4();
    randomBlockShapes(1, "one-up");

    divAmount.push(1);
  });



    // random for all layers
    function randomAll() {
      clearArt();
      clearArt2();
      clearArt3();
      clearArt4();
      randomBlockEyes(1, "one-up");
      randomBlockNose(1, "one-up");
      randomBlockMouth(1, "one-up");
      randomBlockShapes(1, "one-up");

      divAmount.push(1);
    }

    $(".btn-random-all").on("click", function() {
      randomAll();
    });
  //========================================================================================//
  //========================================================================================//
  // loads shape to divs when clicked
  $(".eye-thumbnail").on("click", function () {
    var start = this.innerHTML.indexOf("block");
    var end = this.innerHTML.indexOf("class");
    var svgIdClicked = (this.innerHTML.substring(start, end - 3));

    $("#art-board, #art-board2, #art-board3, #art-board4").on("click", ".data", function () {
      
      $(this).empty();
      $("#" + svgIdClicked).clone().appendTo(this);
    });

  });


  $(".mouth-thumbnail").on("click", function () {
    var start = this.innerHTML.indexOf("mouth");
    var end = this.innerHTML.indexOf("class");
    var svgIdClicked = (this.innerHTML.substring(start, end - 3));

    $("#art-board, #art-board2, #art-board3, #art-board4").on("click", ".data", function () {
      
      $(this).empty();
      $("#" + svgIdClicked).clone().appendTo(this);
    });

  });

  //========================================================================================//
  //========================================================================================//
  // JS to toggle layers on and off
  $(".btn-hide4").click(function () { function showHide() { var e = document.getElementById("art-board4"); if (e.style.visibility != "hidden") { e.style.visibility = "hidden"; } else { e.style.visibility = ""; } } showHide(); });
  $(".btn-hide3").click(function () { function showHide() { var e = document.getElementById("art-board3"); if (e.style.visibility != "hidden") { e.style.visibility = "hidden"; } else { e.style.visibility = ""; } } showHide(); });
  $(".btn-hide2").click(function () { function showHide() { var e = document.getElementById("art-board2"); if (e.style.visibility != "hidden") { e.style.visibility = "hidden"; } else { e.style.visibility = ""; } } showHide(); });
  $(".btn-hide").click(function () { function showHide() { var e = document.getElementById("art-board"); if (e.style.visibility != "hidden") { e.style.visibility = "hidden"; } else { e.style.visibility = ""; } } showHide(); });
  //========================================================================================//
  // buttons boxes etc
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
  //========================================================================================//
}); // end document ready
