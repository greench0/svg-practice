$(document).ready(function () {
  // ==========================================================
  // ==========================================================
    
b0 = Snap('#block0');
b1 = Snap('#block1');
b2 = Snap("#block2"); 
b3 = Snap("#block3");

b = Snap("");
//lets draw svgs and one square at position 100,100 and then reposition them
var blockRect0 = b.rect(0,0,100,100).attr({ stroke: '#123456', 'strokeWidth': 0, fill: 'grey', 'opacity': .9 });
var blockRect1 = b.rect(0,0,100,100).attr({ stroke: '#123456', 'strokeWidth': 0, fill: 'grey', 'opacity': .9 });


var block0 = b.polyline(100,100,0,100,0,0).attr({ fill: "#efefef" });
var block1 = b.circle( 0,0,100 ).attr({ fill: "#efefef" });
var block2 = b.circle( 50,100,50 ).attr({ fill: "#efefef" });

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


  var gB0 = b0.group(blockRect0,block0);
  var gB1 = b3.group(blockRect1,block1);

    // k = n.use(gB3);

    b2.click(function(){
      console.log("You have clicked the");
      b2.use(gB0);
  });

  
  b3.click(function(){
    b3.use(gB1);

});


// $("#art-board").on("click", ".data", function() {
//   console.log(this);
//   $(this).use(gB0);
// });


// b2.add(groupB3);
// $("#btnS0").on("click", function () {
//   console.log("btn shape 1")
//   b0.use(gB0);  
//   });

  
  
// ================================================
// color and button section

// var color1 = " 'fill', 'cyan' ";
// var color2 = " 'fill', 'magenta' ";
// console.log(color1);


// $("#btn0").on("click", function () {
// console.log("btn1 clicked")
// block0a.click( function() { this.attr('fill', 'lightgrey') } ); 
// block0b.click( function() { this.attr('fill', 'lightgrey') } ); 
// block1a.click( function() { this.attr('fill', 'lightgrey') } );
// block1b.click( function() { this.attr('fill', 'lightgrey') } ); 
// block3a.click( function() { this.attr('fill', 'lightgrey') } ); 
// block3b.click( function() { this.attr('fill', 'lightgrey') } );  
// });


// $("#btn1").on("click", function () {
// console.log("btn1 clicked")
// block0a.click( function() { this.attr('fill', 'cyan') } ); 
// block0b.click( function() { this.attr('fill', 'cyan') } ); 
// block1a.click( function() { this.attr('fill', 'cyan') } );
// block1b.click( function() { this.attr('fill', 'cyan') } ); 
// block3a.click( function() { this.attr('fill', 'cyan') } ); 
// block3b.click( function() { this.attr('fill', 'cyan') } );  
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
// element.rotate(90);
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
