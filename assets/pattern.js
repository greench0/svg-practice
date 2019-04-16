$(document).ready(function () {
  //========================================================================================//
  let divAmount = [];
  let xAmount = 'four-up';
  let totalBlocks = '16';
  let svgId = 'block16';
  let svgIdRandom = ''
    // a = how many svg files
    const totalShapes = 105;

      // defines the color 1 and 2 for the default shapes
    color = '(68,68,68)';
    color2 = '(68,68,68)';
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
        '<div id="" class="boxes-card shape-thumbnail"><svg id="block' + i + '" "class="" viewBox="0 0 200 200"></svg></div>');
      $('#boxes-holder').append(total);
    }
  }


  blocksForHtml(totalShapes);
  //========================================================================================//
  function loadBlocks(a, block) {
    Snap.load("assets/svg-pattern/block" + a + ".svg", function (data) {
      var paper = data.select("g");
      block.append(paper);
    });
  }

  //========================================================================================//
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
  // fills the art boards with Blocks when artBoardButtons is clicked
  function makeBlocks(a, b) {
    for (i = 0; i < a; i++) {
      var block = $(
        "<div id='b" + i + "' class='block-up data rotate grid-off " + b + "' style='transform: rotate(0deg);'></div>");
      $('#art-board').append(block);
      $('#block58').clone().appendTo("#b" + i + "");
    }
  }


  function makeBlocks2(a, b) {
    for (i = 0; i < a; i++) {
      var block = $(
        "<div id='b" + i + "' class='block-up data rotate grid-off " + b + "' style='transform: rotate(0deg);'></div>");
      $('#art-board2').append(block);
      $('#block16').clone().appendTo("#b" + i + "");
    }
  }

  // on click button event for make blocks 
  $(".artBoardButtons").on("click", function () {
     xAmount = $(this).data('btn-up');
     totalBlocks = $(this).data('btn-x');
    clearArt();
    $("#board-options").hide();
    makeBlocks(totalBlocks, xAmount);
    
    makeBlocks2(totalBlocks, xAmount);
    divAmount.push(totalBlocks);

  });


  //========================================================================================//
  // create the block elements based on block selection to fill art board
  function fillBlocks(a, b) {
    for (i = 0; i < a; i++) {
      var block = $(
        "<div id='b" + i + "' class='block-up data rotate grid-off " + b + "' style='transform: rotate(0deg);'></div>");
      $('#art-board').append(block);
      $('#' + svgId + '').clone().appendTo("#b" + i + "");
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
  // JS for rotating a block shape
  var rotation = 0;

  jQuery.fn.rotate = function (degrees) {
    $(this).css({ 'transform': 'rotate(' + degrees + 'deg)' });
  };

  $("#art-board, #art-board2").on("click", ".rotate", function () {
    var rotateData = this.style['transform'];

    var rValue = Number(rotateData.slice(7, -4));

    rotation = rValue + 90;
    $(this).rotate(rotation);
    
  });

  //========================================================================================//
  // JS to toggle layer 1 and 2 on and off
  $(".btn-hide2").click(function () {
      
    function showHide(){
  var e = document.getElementById('art-board2');
  if ( e.style.visibility != 'hidden' ) {
      e.style.visibility = 'hidden';
  }
  else {
      e.style.visibility = '';
  }
}
showHide();
  });

// =============
  $(".btn-hide").click(function () {
      
    function showHide(){
  var e = document.getElementById('art-board');
  if ( e.style.visibility != 'hidden' ) {
      e.style.visibility = 'hidden';
  }
  else {
      e.style.visibility = '';
  }
}
showHide();

  });
  
  //========================================================================================//
  // shape buttons when clicked - then clicked in the artboards -  change the shape div when
  $(".shape-thumbnail").on("click", function () {
    var start = this.innerHTML.indexOf("block");
    var end = this.innerHTML.indexOf("class");
     var svgId = (this.innerHTML.substring(start, end - 3));

    $("#art-board, #art-board2").on("click", ".data", function () {
      $(this).empty();
      $("#" + svgId).clone().appendTo(this);

      $('#art-board .color0').css({ fill: "rgb" + color });
      $('#art-board2 .color0').css({ fill: "rgb" + color2 });
      // console.log(svgId);
    });

    return svgId;
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


  //========================================================================================//
  var colors = [
      [255, 132, 124]
    , [255, 221, 121]
    , [255, 194, 5]
    , [181, 34, 10]
    , [139, 192, 100]
    , [0, 126, 227]
    , [95, 144, 156]
    , [245, 245, 245]
    , [68, 68, 68]
  ];

  //Fill hiding div with color boxes
  function generateColors() {
    for (var i = 0; i < colors.length; i++) {
      var c = $("<img id='color-card' class='img-thumbnail img-t1'></img>");
      var colortype = "background-color: rgb" + "(" + colors[i][0] + "," + colors[i][1] + "," + colors[i][2] + ")";
      c.attr("style", colortype);
      c.attr("colorpicker", "(" + colors[i][0] + "," + colors[i][1] + "," + colors[i][2] + ")")
      $("#color-holder").append(c);
    };
  };

  function generateColorsTwo() {
    for (var i = 0; i < colors.length; i++) {
      var c = $("<img id='color-card' class='img-thumbnail img-t2'></img>");
      var colortype = "background-color: rgb" + "(" + colors[i][0] + "," + colors[i][1] + "," + colors[i][2] + ")";
      c.attr("style", colortype);
      c.attr("colorpicker", "(" + colors[i][0] + "," + colors[i][1] + "," + colors[i][2] + ")")
      $("#color-holder-2").append(c);
    };
  };


  generateColors();
  generateColorsTwo();
  //========================================================================================//
  //On Click Event for blocks
  $("#boxes-holder").on("click", ".boxes-card", function () {
    $(".shape-thumbnail").css('border', 'none');
    $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': '#2A363B' });
  });
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

    //========================================================================================//
  //On Click Event for boards
  $("#board-holder").on("click", "#board-holder", function () {
    $(".board-thumbnail").css('border', 'none');
    $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': '#2A363B' });
  });


  //========================================================================================//
  // on Click Event for adding this Color to Block layer
  $("#color-holder").on("click", "#color-card", function () {
    // console.log(color);
    color = ($(this).attr("colorpicker"));

    // var colorEdit = document.getElementById("art-board").getElementsByClassName("color0");
    // var artBoard = document.getElementById("art-board").querySelectorAll(".color0");  
    // document.querySelector(".content h2").style.display="none";
    $('#art-board .color0').css({ fill: "rgb" + color });
    return color;
  });


  $("#color-holder-2").on("click", "#color-card", function () {
    color2 = ($(this).attr("colorpicker"));

    $('#art-board2 .color0').css({ fill: "rgb" + color2 });
    return color2;
  });




  //========================================================================================//
// save button function
// save button function
// $("#save").on("click", function () {
  document.getElementById("save").addEventListener("click", function(){
    // div block id
    // console.log(divAmount[0]);
    let mongoData = {};
    
    let blockoValue = [];
    let rotatoValue = [];
    let totalValue = [];
    
    
    if (divAmount[0] == 16) { 
      totalValue.push('0, 250, 500, 750, 1000');
      mongoData.cssData = "four-up";
    }
    
    else if (divAmount[0] == 25) {
      totalValue.push('0,200,400,600,800,1000');
      mongoData.cssData = "five-up";
    }
    
    else if (divAmount[0] == 36) {
      totalValue.push('0, 166.6666, 333.3333, 500, 666.6666, 833.3333,1000');
      mongoData.cssData = "six-up";
    }
    
    else if (divAmount[0] == 49) {
      totalValue.push('0, 142.857, 285.714, 428.571, 571.428, 714.285, 857.142, 1000');
      mongoData.cssData = "seven-up";
    }
    
    else if (divAmount[0] == 64) {
      totalValue.push('0, 125, 250, 375, 500, 625, 750, 875, 1000');
      mongoData.cssData = "eight-up";
    }
    
    else if (divAmount[0] == 81) {
      totalValue.push('0, 111.1111, 222.2222, 333.3333, 444.4444, 555.5555, 666.6666, 777.7777, 888.8888, 1000');
      mongoData.cssData = "nine-up";
    }
    
    let blockDat = [];
    
    
    for (i = 0; i < divAmount[0]; i++) {
    let blocko = [];
    let rotato = [];
    let blockD = {};
    
    let element = document.getElementById('b'+ i);
    //   
    // svg block number
    let bData = element.outerHTML;
    let svgBlockData = bData.substring(
      bData.lastIndexOf('<svg id="') + 14, 
      bData.lastIndexOf('" "class')
    );
    
    Object.assign(blockD, {bData: svgBlockData});
    
    // rotate info
      let rotateData = bData.substring(
        bData.lastIndexOf('style="transform: rotate(') + 25, 
        bData.lastIndexOf('deg);"')
      );
    
      Object.assign(blockD, {rData: rotateData});
    
    
      // console.log(blockD);
    
    blocko.push(svgBlockData);
    rotato.push(rotateData);
    
    
    blockoValue.push(blocko);
    rotatoValue.push(rotato);
    
    
    blockDat.push(blockD);
    // Object.assign(blockDat, {blockData: blockD});
    }
    
    document.getElementById('block-data').innerHTML = blockoValue;
    document.getElementById('rotate-data').innerHTML = rotatoValue;
    document.getElementById('total-data').innerHTML = totalValue;
    
        
    mongoData.pData = totalValue;
    mongoData.blockData = blockDat;
    
    // mongoData.cssData = cssDataArr;
    console.log(mongoData);
    // console.log(blockDat);
      });

  //========================================================================================//
  //========================================================================================//
}); // end document ready
