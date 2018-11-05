$(document).ready(function () {
  // ==========================================================

    // $("#blocks").hide();


// var allBlocks = [ 
  b0 = Snap('#block0');
  b1 = Snap('#block1');
//   b2 = Snap("#block2"),
//   b3 = Snap("#block3"),

//   bb0 = Snap("#div-b0"),
  
// ]; 


// b = Snap("");
// //lets draw svgs and one square at position 100,100 and then reposition them
// var blockRect0 = b.rect(0,0,100,100).attr({ stroke: '#123456', 'strokeWidth': 0, fill: 'grey', 'opacity': .75 });
// var blockRect1 = b.rect(0,0,100,100).attr({ stroke: '#123456', 'strokeWidth': 0, fill: 'grey', 'opacity': .75 });


// var block0 = b.polyline(100,100,0,100,0,0).attr({ fill: "#efefef" });
// var block1 = b.circle( 0,0,100 ).attr({ fill: "#efefef" });
// var block2 = b.circle( 50,100,50 ).attr({ fill: "#efefef" });

// var all = b3.group(block3a, block3b);
// all.attr({
// //   fill:"pink",
//   fillOpacity: 0.9
//   ,opacity:0.6
// });


// set the fill attributes of the above svgs on click
// block0a.click( function() { this.attr('fill', 'pink') } ); 
// block0b.click( function() { this.attr('fill', 'purple') } ); 


// semi.click( function() { this.attr('fill', 'yellow') } ); 


// ======================================================
// block snap loading
  var dColor0 = "#F37B82";
  var dColor1 = "#5F909C";


    Snap.load("assets/block0.svg", function (data) {
      var g = data.select("g");
      // set attribute color sfor color1 and color0 defined in the external svg
      attributes = g.select('[class="color0"]');
      attributes.attr({ fill: dColor0, });

      attributes = g.select('[class="color1"]');
      attributes.attr({ fill: dColor1, });
            
      b0.append(g);
    });


    Snap.load("assets/block1.svg", function (data) {
      var g = data.select("g");
      // set attribute color sfor color1 and color0 defined in the external svg
      attributes = g.select('[class="color0"]');
      attributes.attr({ fill: dColor0, });

      attributes = g.select('[class="color1"]');
      attributes.attr({ fill: dColor1, });
            
      b1.append(g);
    });        

  // ==================================================

  
    // $("#from").clone().appendTo($("#to"));

    // $('#block1').clone().insertAfter('.some-element').addClass('cloned');
   
   
  //  function cloneBlocks () {
  //   $('#block0').clone().appendTo('#b0');
  //   $('#block0').clone().appendTo('#b1');
  //   $('#block0').clone().appendTo('#b2');
  //   $('#block0').clone().appendTo('#b3');
  //  }

  //     $('#btnS0').click(function(){
  //         cloneBlocks();
  //     });
      
 

    // Snap.load("assets/block1.svg", function (data) {
    //   var g = data.select("g");
    //   // set attribute color sfor color1 and color0 defined in the external svg
    //   attributes = g.select('[class="color0"]');
    //   attributes.attr({ fill: dColor0, });

    //   attributes = g.select('[class="color1"]');
    //   attributes.attr({ fill: dColor1, });
    //   b1.append(g);
    // });

    // Snap.load("assets/block1.svg", function (data) {
    //   var g = data.select("g");
    //   // set attribute color sfor color1 and color0 defined in the external svg
    //   attributes = g.select('[class="color0"]');
    //   attributes.attr({ fill: dColor0, });

    //   attributes = g.select('[class="color1"]');
    //   attributes.attr({ fill: dColor1, });
    //   b2.append(g);
    // }); 



    
    // Snap.load("assets/block1.svg", function (data) {
    //   var g = data.select("g");
    //   // set attribute color sfor color1 and color0 defined in the external svg
    //   attributes = g.select('[class="color0"]');
    //   attributes.attr({ fill: dColor0, });

    //   attributes = g.select('[class="color1"]');
    //   attributes.attr({ fill: dColor1, });
    //   b3.append(g);
    // });        

    


  // $("body").on("click", ".data", function() {
  // console.log(this.innerHTML);
  // dColor0 = "pink";
  

  



  $(".two-up").on("click", function () {
    console.log("blah");
    // block0.click( function() { this.attr('fill', 'lightgrey') } ); 
    });

   
    // var block0 = jQuery('#block0');
    // var block3 = jQuery('#block3');
    
    // block3.html(block0.children().clone());
  
    // $('.some-element').addClass('original').clone().insertAfter('.some-element').addClass('cloned');


// ================================================
    // buttons for art-board generation
    function clearArt () {
      $( "#art-board" ).empty();
    }    

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

// ================================================
// create the block elements 
  function makeBlocks(a, b) {
    for (i = 0; i < a; i++) {
      var block = $(
        // "<div class='" + b + "'><svg id='b" + i + "' class='data' viewBox='0 0 100 100'></svg></div>");
        "<div class='" + b + "'><svg id='b" + i + "' class='data' viewBox='0 0 100 100'></svg></div>");

      $('#art-board').append(block);
      $('#block0').clone().appendTo("#b" + i + "");

    }
  }





  //   function makeBlocks(a, b) {
  //     for (var i = 0; i < a; i++) {

  //       var row = $("<div class='row'></div>");
  //         // var row = document.createElement('div');
  //         // row.className = "row";

  //         for (var j = 0; j < b; j++) {
  //             // var box = $("<div>");
  //             var box = $("<div class='box'></div>");
  //             // var box = document.createElement('div');
  //             // box.className = "box";
         
  //             // var t = ("<div id = 'id value' >");
  //             // box.append(t);

  //             row.append(box);
  //             // console.log([i]);
  //         }                
  //         $("#art-board").append(row);
  //     }
  // }



  // for (var i = 0; i < results.length; i++) {
  //   var giphyDiv = $("<div class='single'></div>");
  //   var rating = results[i].rating;
  //   var p = $("<p>").text("Rating: " + rating);

  //   var giphyImage = $("<img>");
  //   giphyImage.attr("src", results[i].images.fixed_height_still.url);
  //   giphyImage.attr("data-still", results[i].images.fixed_height_still.url);
  //   giphyImage.attr("data-animate", results[i].images.fixed_height.url);
  //   giphyImage.attr("data-state='still'");
  //   giphyImage.addClass("gif-image");
  //   // add elements to giphydiv
  //   giphyDiv.prepend(p);
  //   giphyDiv.prepend(giphyImage);
  //   $(".giphy-div").prepend(giphyDiv);
  // }
// ================================================
// });
// ================================================
// color and button section

$("#btn0").on("click", function () {
console.log("btn1 clicked")
// block0a.click( function() { this.attr('fill', 'lightgrey') } ); 

$('#block0').clone().appendTo("#block1");


});


// $("#btn1").on("click", function () {
// console.log("btn1 clicked")
// block0a.click( function() { this.attr('fill', 'cyan') } ); 
// block0b.click( function() { this.attr('fill', 'cyan') } ); 
// block1a.click( function() { this.attr('fill', 'cyan') } );
// block1b.click( function() { this.attr('fill', 'cyan') } ); 
// block3a.click( function() { this.attr('fill', 'cyan') } ); 
// block3b.click( function() { this.attr('fill', 'cyan') } );  
// });


// ================================================

// $("#btn2").on("click", function () {
// console.log("btn2 clicked")
// block0a.click( function() { this.attr('fill', 'pink') } ); 
// block0b.click( function() { this.attr('fill', 'pink') } ); 
// block1a.click( function() { this.attr('fill', 'pink') } );
// block1b.click( function() { this.attr('fill', 'pink') } ); 
// block3a.click( function() { this.attr('fill', 'pink') } ); 
// block3b.click( function() { this.attr('fill', 'pink') } );  
// });


// $("#btn2").on("click", function () {
// console.log("btn2 clicked")
// block0a.click( function() { this.attr('fill', 'pink') } ); 
// block0b.click( function() { this.attr('fill', 'pink') } ); 
// block1a.click( function() { this.attr('fill', 'pink') } );
// block1b.click( function() { this.attr('fill', 'pink') } ); 
// block3a.click( function() { this.attr('fill', 'pink') } ); 
// block3b.click( function() { this.attr('fill', 'pink') } );  
// });



// $("#rotate").on("click", function () {

// block0a,block0b.click( function() { 
// block1a,block0b.transform('');
// block0a,block0b.animate({ transform: 'r90' }, 100, mina.easein ) ;

// } ); 

// });



// $("#btnS0").on("click", function () {
// console.log("shape");

// block0a.click( function() { this.remove() });
// block0b.click( function() { this.remove()});
// block1a.click( function() { this.remove()});
// block1b.click( function() { this.remove()});
// block3a.click( function() { this.remove()});
// block3b.click( function() { this.remove()});

// });


// var remove = s.group(block1, block2);

// circles.attr({
//   fill:"blue",
//   fillOpacity: 0.9
//   ,opacity:0.6
// });


 
 // ==========================================================
  // ==========================================================
}); // end document ready
