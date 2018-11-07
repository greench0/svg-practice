$(document).ready(function () {
  // ==========================================================
    // $("#blocks").hide();

// ================================================
    // buttons for art-board generation
    function clearArt () {
      $( "#art-board" ).empty();
    }    

// =========================
// a = how many svg files
var totalShapes = 17;

  function blocksForHtml(a) {
    for (i = 0; i < a; i++) {
      var t = $(
      '<div class="shape-thumbnail"><svg id="block' + i + '" "class="data" viewBox="0 0 100 100"></svg></div>');
      $('#shape-div').append(t);
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

var blockOptions = [b0,b1,b2,b3,b4,b5,b6];


// var snapData = 0;
// while (snapData <= totalShapes) {
//     output = ("b" + snapData + " = Snap('#block" + snapData + "');");
//     console.log(output);
//     snapData++;
// }


// var number = 0;
// while (number <= 5) {
//     console.log(number);
//     number++;
// }


var optionBlocks = [];

  //load the external svgs to the html
  // for (i=0; i<options.length; i++) {
  //   var j = loadBlocks(i, options[i]);
  //   optionBlocks.push(j);
    
  // };

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
        "<div id='b" + i + "' class='data " + b + "' ></div>");

      $('#art-board').append(block);
      $('#block0').clone().appendTo("#b" + i + "");
    }
}

  // buttons for art-board generation
  $("#btn-2up").on("click", function () {
    clearArt();
    makeBlocks(4, "two-up");
  });


  $("#btn-3up").on("click", function () {
    clearArt();
    makeBlocks(9, "three-up");
  });

  $("#btn-4up").on("click", function () {
    clearArt();
    makeBlocks(16, "four-up");
  });

  $("#btn-5up").on("click", function () {
    clearArt();
    makeBlocks(25, "five-up");
  });

  $("#btn-6up").on("click", function () {
    clearArt();
    makeBlocks(36, "six-up");
  });
  
    $("#btn-7up").on("click", function () {
    clearArt();
    makeBlocks(49, "seven-up");
  });


// ==================================================
// buttons to change shape divs when clicked

$(".shape-thumbnail").on("click", function () {

var start = this.innerHTML.indexOf("block");
var end = this.innerHTML.indexOf("class");

var svgId = (this.innerHTML.substring(start, end-3));
console.log(svgId);

  $(".data").click( function() { 
    $(this).empty();
    $("#" + svgId).clone().appendTo(this);

    }); 
  });

// ==================================================
// rotate a block shape
$("#action-rotate").on("click", function () {
 
  var rotation = 0;
  jQuery.fn.rotate = function(degrees) {
      $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
  };
  
  $('.data').click(function() {
      rotation += 90;
      $(this).rotate(rotation);
  });
  });


// function clearRotate () {
//       rotation.clear();
//     }    


// ==================================================
 // color buttons in progress 
// get attributges from inner html
  $("#btn0").on("click", function () {
    console.log("btn1 clicked");

    $(".color0").click(function () {
      
      $(this).css("fill", "yellow");

    });

    $(".color1").click(function () {
      console.log(this);
      $(this).css("fill", "yellow");
        });
   
  });







//================================================================================================================================================================================//

  
//================================================================================================================================================================================//
//================================================================================================================================================================================//
//FOOTER
//This Belongs to Conor



//Store Action Items
var actionItem = "";
var colorChoice = "";
var boxChoice = "";


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
    [255,0,0]
    , [255,128,0]
    , [255,255,0]
    , [128,255,0]
    , [0,255,0]
    , [0,255,128]
    , [0,255,255]
    , [0,128,255]
    , [0,0,255]
    , [128,0,255]
    , [255,0,255]
    , [255,0,128]
    , [128,128,128]
    , [0,0,0]
    , [255,255,255]
];

//Color palet API
function callColorsApi() {
    var url = "http://colormind.io/api/";
    var data = {
        model : "default",
    }

    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            var palette = JSON.parse(http.responseText).result;
                for (i=0; i < 5; i++) {
                    colors.push(palette[i]);
                };
                // console.log("pushed")
        }
    }

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
};
callColorsApi();
callColorsApi();
callColorsApi();
callColorsApi();

//Fill hiding div with color boxes
function generateColors(){
    for (var i = 0; i < colors.length; i++) {
        var c = $("<img id='color-card' class='img-thumbnail'></img>");
        var colortype = "background-color: rgb" + "(" + colors[i][0] + "," + colors[i][1] + "," + colors[i][2] + ")";
        c.attr("style", colortype);
        $("#color-holder").append(c);
    };
    // console.log("colorsfilled")
};

//On Click Event for Colors



//Fill the boxes boxes
function generateBoxes() {
    for (var i = 0; i < 5; i++) {

        var c = $("<img id='boxes-card' class='shape-thumbnail'></img>");
        $("#boxes-holder").append(c);
    };
};

//On Click Event for Boxes
$("#color-holder").on("click", "#color-card", function() {
    $(".img-thumbnail").css('border', 'none');
    $(this).css({ 'border': 'solid', 'border-width': '4px', 'border-color': 'gold' });

});

setTimeout(generateColors, 3000);

//save options
//override existing blocks

//================================================================================================================================================================================//
//FOOTER
//This Belongs to Conor

  // ==========================================================
}); // end document ready