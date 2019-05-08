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
    'FF847C'
  , 'FFDD79'
  , 'FFC205'
  // , 'B5220A'
  , '5F909C'
  , 'F5F5F5'
  , '444444'
];
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


  generateColors();
  generateColorsTwo();
  
  //========================================================================================//
  //On Click Event for Colors
  $("#color-holder").on("click", "#color-card", function () {
    $(".img-t1").css('border', 'none');
    $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': '#2A363B' });
  });
  
  // $("#color-holder").on("click", "#color-card", function () {
  //   var color = ($(this).attr("colorpicker"));
  //   $('.color0').css({ fill: "#" + color });
  // });


  $("#color-holder-2").on("click", "#color-card", function () {
    $(".img-t2").css('border', 'none');
    $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': '#2A363B' });
  });

  //========================================================================================//
  // on Click Event for adding this Color to Block layer
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

      //========================================================================================//
    //On Click Event for blocks
    $("#boxes-holder").on("click", ".boxes-card", function () {
      $(".shape-thumbnail").css('border', 'none');
      $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': '#2A363B' });
    });
  
        //========================================================================================//
    //On Click Event for boards
    $("#board-holder").on("click", "#board-holder", function () {
      $(".board-thumbnail").css('border', 'none');
      $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': '#2A363B' });
    });
  

  //========================================================================================//
// save button function
  document.getElementById("save").addEventListener("click", function(){

    
    var urls = ['svg1.svg', 'svg2.svg'];
    var loaded = 0;
    var objects=[];
    for(var i=0;i<urls.length; i++){
    objects.push(document.createElement('object'));
    objects[i].onload = function(){
      // Only if all our objects are loaded
      if(++loaded==urls.length){
        var svgDocType = document.implementation.createDocumentType('svg',  "-//W3C//DTD SVG 1.1//EN", "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd");
        var svgDoc= document.implementation.createDocument ('http://www.w3.org/2000/svg', 'svg', svgDocType);
        var svg1 = objects[0].contentDocument.documentElement.cloneNode(true);
        var svg2 = objects[1].contentDocument.documentElement.cloneNode(true);
        svg1.appendChild(svg2);
        svg2.width.baseVal.value/=3;
        svg2.height.baseVal.value/=3;
        svgDoc.documentElement.appendChild(svg1)
        var svgData = (new XMLSerializer()).serializeToString(svgDoc);
        var a = document.createElement('a');
        a.href = 'data:image/svg+xml; charset=utf8, '+svgData;
        a.download = 'yourfile.svg';
        a.innerHTML = "right click - save as if your browser doesn't support download attribute";
        document.body.appendChild(a)

        }
      }
    // sadly we have to append it in doc to load the resources
	document.body.appendChild(objects[i])
    objects[i].data = urls[i];
    }


// console.log(targetDiv);

      });
  //========================================================================================//
  //========================================================================================//
}); // end document ready
