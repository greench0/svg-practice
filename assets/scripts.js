$(document).ready(function () {
//================================================================================================================================================================================//
//================================================================================================================================================================================//
// function for saving the art board div




 
var mainBlock = Snap('#main-block');
Snap.load("assets/svg/block-main.svg", onSVGLoaded ) ;

function onSVGLoaded( data ){ 
    mainBlock.append( data );
}


//================================================================================================================================================================================//
//================================================================================================================================================================================//
    // buttons for art-board generation
    function clearArt () {
      $( "#art-board" ).empty();
    }    

    $("#footer").hide();
// =========================
// a = how many svg files
var totalShapes = 69;

  function blocksForHtml(a) {
    for (i = 0; i < a; i++) {
      var t = $(
      '<div id="boxes-card" class="shape-thumbnail"><svg id="block' + i + '" "class="" viewBox="0 0 100 100"></svg></div>');
      $('#boxes-holder').append(t);
    }
  }

  blocksForHtml(totalShapes);
// ====================================
// create and load Snap svg blocks in the shape div container
b0 = Snap('#block0');
b1 = Snap('#block1');
b2 = Snap('#block2');
b3 = Snap('#block3');
b4 = Snap('#block4');
b5 = Snap('#block5');
b6 = Snap('#block6');
b7 = Snap('#block7');
b8 = Snap('#block8');
b9 = Snap('#block9');
b10 = Snap('#block10');
b11 = Snap('#block11');
b12 = Snap('#block12');
b13 = Snap('#block13');
b14 = Snap('#block14');
b15 = Snap('#block15');
b16 = Snap('#block16');
b17 = Snap('#block17');
b18 = Snap('#block18');
b19 = Snap('#block19');
b20 = Snap('#block20');
b21 = Snap('#block21');
b22 = Snap('#block22');
b23 = Snap('#block23');
b24 = Snap('#block24');
b25 = Snap('#block25');
b26 = Snap('#block26');
b27 = Snap('#block27');
b28 = Snap('#block28');
b29 = Snap('#block29');
b30 = Snap('#block30');
b31 = Snap('#block31');
b32 = Snap('#block32');
b33 = Snap('#block33');
b34 = Snap('#block34');
b35 = Snap('#block35');
b36 = Snap('#block36');
b37 = Snap('#block37');
b38 = Snap('#block38');
b39 = Snap('#block39');
b40 = Snap('#block40');
b41 = Snap('#block41');
b42 = Snap('#block42');
b43 = Snap('#block43');
b44 = Snap('#block44');
b45 = Snap('#block45');
b46 = Snap('#block46');
b47 = Snap('#block47');
b48 = Snap('#block48');
b49 = Snap('#block49');
b50 = Snap('#block50');
b51 = Snap('#block51');
b52 = Snap('#block52');
b53 = Snap('#block53');
b54 = Snap('#block54');
b55 = Snap('#block55');
b56 = Snap('#block56');
b57 = Snap('#block57');
b58 = Snap('#block58');
b59 = Snap('#block59');
b60 = Snap('#block60');
b61 = Snap('#block61');
b62 = Snap('#block62');
b63 = Snap('#block63');
b64 = Snap('#block64');
b65 = Snap('#block65');
b66 = Snap('#block66');
b67 = Snap('#block67');
b68 = Snap('#block68');


loadBlocks(0, b0);
loadBlocks(1, b1);
loadBlocks(2, b2);
loadBlocks(3, b3);
loadBlocks(4, b4);
loadBlocks(5, b5);
loadBlocks(6, b6);
loadBlocks(7, b7);
loadBlocks(8, b8);
loadBlocks(9, b9);
loadBlocks(10, b10);
loadBlocks(11, b11);
loadBlocks(12, b12);
loadBlocks(13, b13);
loadBlocks(14, b14);
loadBlocks(15, b15);
loadBlocks(16, b16);
loadBlocks(17, b17);
loadBlocks(18, b18);
loadBlocks(19, b19);
loadBlocks(20, b20);
loadBlocks(21, b21);
loadBlocks(22, b22);
loadBlocks(23, b23);
loadBlocks(24, b24);
loadBlocks(25, b25);
loadBlocks(26, b26);
loadBlocks(27, b27);
loadBlocks(28, b28);
loadBlocks(29, b29);
loadBlocks(30, b30);
loadBlocks(31, b31);
loadBlocks(32, b32);
loadBlocks(33, b33);
loadBlocks(34, b34);
loadBlocks(35, b35);
loadBlocks(36, b36);
loadBlocks(37, b37);
loadBlocks(38, b38);
loadBlocks(39, b39);
loadBlocks(40, b40);
loadBlocks(41, b41);
loadBlocks(42, b42);
loadBlocks(43, b43);
loadBlocks(44, b44);
loadBlocks(45, b45);
loadBlocks(46, b46);
loadBlocks(47, b47);
loadBlocks(48, b48);
loadBlocks(49, b49);
loadBlocks(50, b50);
loadBlocks(51, b51);
loadBlocks(52, b52);
loadBlocks(53, b53);
loadBlocks(54, b54);
loadBlocks(55, b55);
loadBlocks(56, b56);
loadBlocks(57, b57);
loadBlocks(58, b58);
loadBlocks(59, b59);
loadBlocks(60, b60);
loadBlocks(61, b61);
loadBlocks(62, b62);
loadBlocks(63, b63);
loadBlocks(64, b64);
loadBlocks(65, b65);
loadBlocks(66, b66);
loadBlocks(67, b67);
loadBlocks(68, b68);
 
  // defines the color 1 and 2 for the default shapes
  var dColor0 = "#F37B82";
  var dColor1 = "#5F909C";

  function loadBlocks(a, b) {
    Snap.load("assets/svg/block" + a + ".svg", function (data) {
      var block = b;
      var g = data.select("g");
      // set attribute color sfor color1 and color0 defined in the external svg
      attributes = g.select('[class="color0"]');
      attributes.attr({ fill: dColor0, });

      attributes = g.select('[class="color1"]');
      attributes.attr({ fill: dColor1, });

      block.append(g);
    });
  }

// ================================================
// create the block elements for the html page

  function makeBlocks(a, b) {
    for (i = 0; i < a; i++) {
      var block = $(
        // "<div class='" + b + "'><svg id='b" + i + "' class='data' viewBox='0 0 100 100'></svg></div>");
        "<div id='b" + i + "' class='data rotate " + b + "' style='transform: rotate(0deg);'></div>");

      $('#art-board').append(block);
      $('#block5').clone().appendTo("#b" + i + "");
    }
}


  // buttons for art-board generation
  $("#btn-2up").on("click", function () {
    clearArt();
    $("#board-options").hide();
    makeBlocks(4, "two-up");

    $("#footer").show();
  });


  $("#btn-3up").on("click", function () {
    clearArt();
    $("#board-options").hide();
    makeBlocks(9, "three-up");
    $("#footer").show();
  });

  $("#btn-4up").on("click", function () {
    clearArt();
    $("#board-options").hide();
    makeBlocks(16, "four-up");
    $("#footer").show();
  });

  $("#btn-5up").on("click", function () {
    clearArt();
    $("#board-options").hide();
    makeBlocks(25, "five-up");
    $("#footer").show();
  });

  $("#btn-6up").on("click", function () {
    clearArt();
    $("#board-options").hide();
    makeBlocks(36, "six-up");
    $("#footer").show();
  });
  
    $("#btn-7up").on("click", function () {
    clearArt();
    $("#board-options").hide();
    makeBlocks(49, "seven-up");
    $("#footer").show();
  });

  $("#btn-8up").on("click", function () {
    clearArt();
    $("#board-options").hide();
    makeBlocks(64, "eight-up");
    $("#footer").show();
  });

  $("#btn-9up").on("click", function () {
    clearArt();
    $("#board-options").hide();
    makeBlocks(81, "nine-up");
    $("#footer").show();
  });


// ==================================================
// rotate a block shape

var rotation = 0;

  jQuery.fn.rotate = function(degrees) {
      $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
  };

  $("#art-board").on("click", ".rotate", function() {
  var rotateData = this.style['transform'];
  
  var rValue = Number(rotateData.slice(7, -4)) ;
  
  // console.log(rValue);
  rotation = rValue + 90;
  $(this).rotate(rotation);
  });


// ==================================================
// buttons to change shape divs when clicked
$(".shape-thumbnail").on("click", function () {
var start = this.innerHTML.indexOf("block");
var end = this.innerHTML.indexOf("class");

var svgId = (this.innerHTML.substring(start, end-3));
console.log(svgId);

$("#art-board").on("click", ".data", function() {
  
  // console.log(this);
    $(this).empty();
    $("#" + svgId).clone().appendTo(this);

    }); 
  });


  // used to collapse the menus when clicked outside of the menu
  $(document).click(function(e) {
    if (!$(e.target).is('.panel-body')) {
        $('.collapse').collapse('hide');	    
      }
  });

//================================================================================================================================================================================//
//================================================================================================================================================================================//
//FOOTER
//This Belongs to Conor

//Store Action Items
var actionItem = "";
var colorChoice = "";
var boxChoice = "";


// $(document).on("click", "rect", function() {
//   $(this).attr({ fill: "colorChoice"});
//   console.log(this);
// });
// $(document).on("click", "polygon", function() {
//   $(this).attr({ fill: "colorChoice"});
//   console.log(this);
// });

// Create hiding div
$("#center").on("click", "button", function() {
    // console.log(this);
        if (this.id === "action-box") {
            $("#action-colors").attr({"aria-expanded": "false", "class": "btn btn-secondary collapsed"});
            $("#colors").attr("class", "collapse");
            $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': 'gold' });
            $("#action-colors").css('border', 'none');
            $("#action-rotate").css('border', 'none');
            //Change Action Item;
        }
        else if (this.id === "action-colors") {
            $("#action-box").attr({"aria-expanded": "false", "class": "btn btn-secondary collapsed"});
            $("#boxes").attr("class", "collapse");
            $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': 'gold' });
            $("#action-box").css('border', 'none');
            $("#action-rotate").css('border', 'none');
            //Change Action Item;
        }
        else {
            $("#action-box").attr({"aria-expanded": "false", "class": "btn btn-secondary collapsed"});
            $("#boxes").attr("class", "collapse");
            $("#action-colors").attr({"aria-expanded": "false", "class": "btn btn-secondary collapsed"});
            $("#colors").attr("class", "collapse");
            $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': 'gold' });
            $("#action-box").css('border', 'none');
            $("#action-colors").css('border', 'none');
            //Change Action Item;
        }
});


var colors = [

      [255,132,124]
    
    , [255,221,121]
    , [255,194,5]
    , [181,34,10]
    , [139,192,100]
    , [0,126,227]
    , [0,0,0]
    , [255,255,255]
];


var colorsTwo = [
    [95,144,156]
  , [42,54,59]
  , [255,221,121]
  , [0,128,255]
  , [139,192,100]
  , [0,0,255]
  , [128,128,128]
  , [0,0,0]
  , [255,255,255]
];


//Fill hiding div with color boxes
function generateColors(){
    for (var i = 0; i < colors.length; i++) {
        var c = $("<img id='color-card' class='img-thumbnail'></img>");
        var colortype = "background-color: rgb" + "(" + colors[i][0] + "," + colors[i][1] + "," + colors[i][2] + ")";
        c.attr("style", colortype);
        c.attr("colorpicker", "(" + colors[i][0] + "," + colors[i][1] + "," + colors[i][2] + ")")
        $("#color-holder").append(c);
    };
};

function generateColorsTwo(){
  for (var i = 0; i < colorsTwo.length; i++) {
      var c = $("<img id='color-card' class='img-thumbnail'></img>");
      var colortype = "background-color: rgb" + "(" + colorsTwo[i][0] + "," + colorsTwo[i][1] + "," + colorsTwo[i][2] + ")";
      c.attr("style", colortype);
      c.attr("colorpicker", "(" + colorsTwo[i][0] + "," + colorsTwo[i][1] + "," + colorsTwo[i][2] + ")")
      $("#color-holder-2").append(c);
  };
};

//On Click Event for blocks
$("#boxes-holder").on("click", "#boxes-card", function() {
  $(".shape-thumbnail").css('border', 'none');
  $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': 'gold' });
});

//On Click Event for Colors
$("#color-holder").on("click", "#color-card", function() {
    $(".img-thumbnail").css('border', 'none');
    $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': 'gold' });
});


// on Click Event for adding this Color to Blocks
$("#color-holder").on("click", "#color-card", function() {
  var color = ($(this).attr("colorpicker"));
  console.log(color);
  // $('.color0').css({ fill:"" + color + "" });
    $('.color0').css({ fill: "rgb" + color });
  });  

  $("#color-holder-2").on("click", "#color-card", function() {
    var color = ($(this).attr("colorpicker"));
    console.log(color);
    // $('.color0').css({ fill:"" + color + "" });
      $('.color1').css({ fill: "rgb" + color });
    }); 




generateColors();
generateColorsTwo();


//save options
//override existing blocks

//================================================================================================================================================================================//
//FOOTER
//This Belongs to Conor



  // ==========================================================
}); // end document ready
