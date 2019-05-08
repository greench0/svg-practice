$(document).ready(function () {
  //========================================================================================//
  let divAmount = [];
  let xAmount = 'four-up';
  let totalBlocks = '16';
  let svgId = 'block16';
  let svgIdRandom = ''
    // a = how many svg files
    const totalShapes = 105;
  //========================================================================================//
  
  var mainBlock = Snap('#main-block');

  Snap.load("assets/svg/block-main.svg", onSVGLoaded);

  function onSVGLoaded(data) {
    mainBlock.append(data);
  }


    // button events to show / hide the grid - strokes
    $("#btn-grid").click(function () {
      
      if ($( ".data" ).hasClass( "grid-off" )) {
        $(".data").removeClass("grid-off");
        $(".data").addClass("grid-on");
      }
else {
      $(".data").removeClass("grid-on");
      $(".data").addClass("grid-off");
}
    });
  //========================================================================================//
  //========================================================================================//
  // buttons for art-board generation
  $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});


  function clearArt() {
    $("#art-board").empty();
  }

  $("#footer").hide();
  // =========================

  function blocksForHtml(a) {
    for (i = 0; i < a; i++) {
      var total = $(
        '<div class="boxes-card shape-thumbnail"><svg id="block' + i + '" "class="" viewBox="0 0 200 200"></svg></div>');
      $('#boxes-holder').append(total);
    }
  }


  blocksForHtml(totalShapes);
  //========================================================================================//
  // create and load Snap svg blocks in the shape div container
  function LoadSnapsFunc() {
    for ( i=0; i<=totalShapes; i++ )
    {
        var str ="b"+ i+" = Snap('#block"+ i +"');";
        //Declaring and Setting dynamic variable to undefined using eval
        eval(str);
    }
 }
 LoadSnapsFunc();

  function LoadBlocksFunc() {
    for ( i=0; i<=totalShapes; i++ )
    {
        var str ="loadBlocks("+i+", b"+i+");";
        //Declaring and Setting dynamic variable to undefined using eval
        eval(str);
    }
 }
 LoadBlocksFunc();
  //========================================================================================//

  // defines the color 1 and 2 for the default shapes
  var dColor0 = "#FFDD79";
  var dColor1 = "#FF847C";

  function loadBlocks(a, block) {
    Snap.load("assets/svg/block" + a + ".svg", function (data) {
      var paper = data.select("g");
      // set attribute color sfor color1 and color0 defined in the external svg
      attributes = paper.select('[class="color0"]');
      attributes.attr({ fill: dColor0 });
      attributes = paper.select('[class="color1"]');
      attributes.attr({ fill: dColor1 });

      block.append(paper);
    });
  }

  //========================================================================================//
  // create the block elements for the html page
  function makeBlocks(a, b) {
    for (i = 0; i < a; i++) {
      var block = $(
        "<div id='a-b" + i + "' class='block-up data rotate grid-off " + b + "' style='transform: rotate(0deg);'></div>");
      $('#art-board').append(block);
      $('#block60').clone().appendTo("#a-b" + i + "");
    }
  }


  // on click button event for make blocks 
  $(".artBoardButtons").on("click", function () {
     xAmount = $(this).data('btn-up');
     totalBlocks = $(this).data('btn-x');
  
    clearArt();
    $("#board-options").hide();


    makeBlocks(totalBlocks, xAmount);
    divAmount.push(totalBlocks);

    $('#main-card').attr('data-art-board-size', totalBlocks)
    // $('main-card').attr('data-art-board-size','some attributes value')
  });

  //========================================================================================//
  // create the block elements based on block selection to fill art board
  function fillBlocks(a, b) {
    for (i = 0; i < a; i++) {
      var block = $(
        "<div id='a-b" + i + "' class='block-up data rotate grid-off " + b + "' style='transform: rotate(0deg);'></div>");
      $('#art-board').append(block);
      $('#' + svgId + '').clone().appendTo("#a-b" + i + "");
    }
  }


  // on click button event for make blocks 
  $(".btn-fill").on("click", function () {
    clearArt();
    $("#board-options").hide();
    fillBlocks(totalBlocks, xAmount);
    
    
    divAmount.push(totalBlocks);
  });

   //========================================================================================//
  // on click button event for make blocks 
  $(".btn-random").on("click", function () {
    clearArt();
    $("#board-options").hide();
    randomBlocks(totalBlocks, xAmount);
  
    divAmount.push(totalBlocks);
  });

   //========================================================================================//
  // create the block elements based on block selection to fill art board
  function randomBlocks(a, b) {
    for (i = 0; i < a; i++) {
      let block = $( "<div id='a-b" + i + "' class='block-up data rotate grid-off " + b + "' style='transform: rotate(0deg);'></div>");
      let randomNum = Math.floor(Math.random() * (+ totalShapes - +0)) + +0; 
      $('#art-board').append(block);
      $('#block' + randomNum + '').clone().appendTo("#a-b" + i + "");
    }
  }

  //========================================================================================//
  // on click button event to randomly rotate blocks 
  $(".btn-rotate").on("click", function() {
    for (i = 0; i < divAmount[0]; i++) {
      const randomRoteValues = [0, 90, 180, 270];
      var randomRotate =
        randomRoteValues[Math.floor(Math.random() * randomRoteValues.length)];

      let element = document.getElementById("a-b" + i);

      $(element).rotate(randomRotate);
    }
  });

   //========================================================================================//
  // JS for rotating a block shape
  var rotation = 0;

  jQuery.fn.rotate = function (degrees) {
    $(this).css({ 'transform': 'rotate(' + degrees + 'deg)' });
  };

  $("#art-board").on("click", ".rotate", function () {
    var rotateData = this.style['transform'];

    var rValue = Number(rotateData.slice(7, -4));

    rotation = rValue + 90;
    $(this).rotate(rotation);
  });

  //========================================================================================//
  // buttons to change shape divs when clicked
  $(".shape-thumbnail").on("click", function () {

    var start = this.innerHTML.indexOf("block");
    var end = this.innerHTML.indexOf("class");
    svgIdClicked = (this.innerHTML.substring(start, end - 3));

    $("#art-board").on("click", ".data", function () {
      $(this).empty();
      $("#" + svgIdClicked).clone().appendTo(this);
      // console.log(svgId);
    });
    svgId = svgIdClicked;
  });

  //========================================================================================//
  //========================================================================================//
  // Create hiding div
  $("#footer-btns").on("click", "button", function () {
    if (this.id === "action-box") {
      $("#action-colors").attr({ "aria-expanded": "false", "class": "btn btn-secondary collapsed btn-lg" });
      $("#colors").attr("class", "collapse");
      // $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': 'gold' });
      $("#action-colors").css('border', 'none');
      $("#action-block").css('border', 'none');
      //Change Action Item;
    }

    else if (this.id === "action-color") {
      $("#action-box").attr({ "aria-expanded": "false", "class": "btn btn-secondary collapsed btn-lg" });
      $("#boxes").attr("class", "collapse");
      // $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': 'gold' });
      $("#action-box").css('border', 'none');
      $("#action-block").css('border', 'none');
      //Change Action Item;
    }

    else if (this.id === "action-block") {
      $("#action-box").attr({ "aria-expanded": "false", "class": "btn btn-secondary collapsed btn-lg" });
      $("#boxes").attr("class", "collapse");
      // $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': 'gold' });
      $("#action-box").css('border', 'none');
      $("#action-block").css('border', 'none');
      //Change Action Item;
    }

    else {
      $("#action-box").attr({ "aria-expanded": "false", "class": "btn btn-secondary collapsed btn-lg" });
      $("#boxes").attr("class", "collapse");
      $("#action-colors").attr({ "aria-expanded": "false", "class": "btn btn-secondary collapsed" });
      $("#colors").attr("class", "collapse");
      // $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': 'gold' });
      $("#action-box").css('border', 'none');
      $("#action-colors").css('border', 'none');
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
      
      c.attr("style", "background-color: #" + colors[i]);
      c.attr("colorpicker",  colors[i] );
      $("#color-holder").append(c);
    };
  };

  function generateColorsTwo() {
    for (var i = 0; i < colors.length; i++) {
      var c = $("<img id='color-card' class='img-thumbnail img-t2'></img>");
      
      c.attr("style", "background-color: #" + colors[i]);
      c.attr("colorpicker-2",  colors[i] );
      $("#color-holder-2").append(c);
    };
  };

//====================================================//
    // on Click Event for adding this Color to Blocks
    $("#color-holder").on("click", "#color-card", function () {
      var color = ($(this).attr("colorpicker"));
      $('.color0').css({ fill: "#" + color });
    });

    $("#color-holder-2").on("click", "#color-card", function () {
      var color = ($(this).attr("colorpicker-2"));
      $('.color1').css({ fill: "#" + color });
    });
//====================================================//
      //On Click Event for Colors
  $("#color-holder").on("click", "#color-card", function () {
    $(".img-t1").css('border', 'none');
    $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': '#2A363B' });
  });
  

  $("#color-holder-2").on("click", "#color-card", function () {
    $(".img-t2").css('border', 'none');
    $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': '#2A363B' });
  });

  generateColors();
  generateColorsTwo();
  //========================================================================================//
  //On Click Event for blocks
  $("#boxes-holder").on("click", ".boxes-card", function () {
    $(".shape-thumbnail").css('border', 'none');
    $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': '#2A363B' });
  });

  //On Click Event for boards
  $("#board-holder").on("click", "#board-holder", function () {
    $(".board-thumbnail").css('border', 'none');
    $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': '#2A363B' });
  });

  //========================================================================================//
  //========================================================================================//
}); // end document ready
