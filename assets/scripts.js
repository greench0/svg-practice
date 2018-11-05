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
var totalShapes = 7;

  function blocksForHtml(a) {
    for (i = 0; i < a; i++) {
      var t = $(
        // "<div class='" + b + "'><svg id='b" + i + "' class='data' viewBox='0 0 100 100'></svg></div>");
      '<div class="six-up"><svg id="block' + i + '" "class="data" viewBox="0 0 100 100"></svg></div>');
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

  //oad the external svgs to the html
  loadBlocks(0, b0);  
  loadBlocks(1, b1);
  loadBlocks(2, b2);
  loadBlocks(3, b3);
  loadBlocks(4, b4);
  loadBlocks(5, b5);
  loadBlocks(6, b6);
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


  
  // function makeBlocks(a, b) {
  //   for (i = 0; i < a; i++) {
  //     var block = $(
  //       // "<div class='" + b + "'><svg id='b" + i + "' class='data' viewBox='0 0 100 100'></svg></div>");
  //       "<div id='b" + i + "' class='" + b + " data'></div>");

  //     $('#art-board').append(block);
  //     // $('#block0').clone().appendTo("#b" + i + "");
  //     artB0 = Snap('#b0');
      
  //     artB0.append(b0.clone());
  //   }
  // }


  
// ==================================================
// buttons to change shape divs
$("#block0").on("click", function () {
  $(".data").click( function() { 
    $(this).empty();
    $('#block0').clone().appendTo(this);
    }); 
  });

$("#block1").on("click", function () {
$(".data").click( function() { 
  $(this).empty();
  $('#block1').clone().appendTo(this);
  }); 
});


  $("#block2").on("click", function () {
    $(".data").click(function () {
      $(this).empty();
      $('#block2').clone().appendTo(this);
    });
  });


  $("#block3").on("click", function () {
    $(".data").click(function () {
      $(this).empty();
      $('#block3').clone().appendTo(this);
    });
  });

  $("#block4").on("click", function () {
    $(".data").click(function () {
      $(this).empty();
      $('#block4').clone().appendTo(this);
    });
  });

  $("#block5").on("click", function () {
    $(".data").click(function () {
      $(this).empty();
      $('#block5').clone().appendTo(this);
    });
  });

  $("#block6").on("click", function () {
    $(".data").click(function () {
      $(this).empty();
      $('#block6').clone().appendTo(this);
    });
  });

// ==================================================
// rotate block element
$("#btnS0").on("click", function () {
  var rotation = 0;
  jQuery.fn.rotate = function(degrees) {
      $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
  };
  
  $('.data').click(function() {
      rotation += 90;
      $(this).rotate(rotation);
  });
  // block0a.click( function() { this.remove()});
  });


// ==================================================
 // color buttons in progress 
// get attributges from inner html
  $("#btn0").on("click", function () {
    console.log("btn1 clicked");

    $(".data").click(function () {
      console.log(this.innerHTML);

      // this.attr('fill', 'cyan'); 

    });
  });



  $("#btn1").on("click", function () {
    console.log("btn1 clicked");
    dColor0 = "pink";
      // this.attr('fill', 'cyan'); 

  });








  // $("#btn0").on("click", function () {
  //   console.log("btn0 clicked")

  //   b0.click( function() { console.log(this.innerHTML) } ); 
  //   // b1.click( function() { this.attr('fill', 'lightgrey') } ); 
  //   });

// ================================================
    // buttons for art-board generation

    $("#btn-2up").on("click", function () {
      clearArt ();
      makeBlocks(4, "two-up");
      // block0.click( function() { this.attr('fill', 'lightgrey') } ); 
    });
  
  
    $("#btn-3up").on("click", function () {
      clearArt ();
      makeBlocks(9, "three-up");
    });
  
    $("#btn-4up").on("click", function () {
      clearArt ();
      makeBlocks(16, "four-up");
    });

    $("#btn-5up").on("click", function () {
      clearArt ();
      makeBlocks(25, "five-up");
    });

    $("#btn-6up").on("click", function () {
      clearArt ();
      makeBlocks(36, "six-up");
    });

 
// ==================================================

// var all = b3.group(block3a, block3b);
// all.attr({
// //   fill:"pink",
//   fillOpacity: 0.9
//   ,opacity:0.6
// });

  // ==================================================
 
  //  function cloneBlocks () {
  //   $('#block0').clone().appendTo('#b0');
  //   $('#block0').clone().appendTo('#b1');
  //   $('#block0').clone().appendTo('#b2');
  //   $('#block0').clone().appendTo('#b3');
  //  }

  //     $('#btnS0').click(function(){
  //         cloneBlocks();
  //     });
      
// ==================================================

// ================================================
// color and button section

// $("#btn0").on("click", function () {
// console.log("btn1 clicked")
// // block0a.click( function() { this.attr('fill', 'lightgrey') } ); 

// $('#block0').clone().appendTo("#block1");


// });




// ================================================

// $("#btnS0").on("click", function () {
// console.log("shape");
// block0a.click( function() { this.remove()});
// });

 
// $(".two-up").on("click", function () {
  //   console.log("blah");
  //   block0.click( function() { this.attr('fill', 'lightgrey') } ); 
  //   });

  
 // ==========================================================
  // ==========================================================
}); // end document ready
