$(document).ready(function() {
  //========================================================================================//
  let divAmount = [];
  let xAmount = "one-up";
  let totalBlocks = "1";
  let svgId = "block16";

  // a = how many svg files
  const totalShapes = 12;

  //========================================================================================//
  //========================================================================================//
  // Number generator using min - max range
  var numGen = {
    make: function (min, max) {
      return Math.floor(Math.random() * (this.max - this.min)) + this.min;
    }
  }

  // min - max range values
  var numsA = { min: 800, max: 1050 }
  var numsB = { min: 450, max: 650 }

  var numsCa = { min: 100, max: 200 }
  var numsCb = { min: 0, max: 30 }
  var numsCc = { min: 275, max: 325 }
  var numsCd = { min: 0, max: 350 }
  var numsCe = { min: 250, max: 450 }
  var numsCf = { min: 200, max: 400 }

// numGen.make.call(numsA)

  console.log(numGen.make.call(numsA));
  //========================================================================================//
  //========================================================================================//
  // define the SVG shape 
  svgShape = '<svg version="1.1" id="layer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"> <path fill="#111111" d="M' + numGen.make.call(numsA) + ',' + numGen.make.call(numsB) +'c'+ numGen.make.call(numsCa) +', '+ numGen.make.call(numsCb)+ ', ' + numGen.make.call(numsCc)+ ', ' + numGen.make.call(numsCd)+ ', ' + numGen.make.call(numsCe)+ ', ' + numGen.make.call(numsCf)+ ' c-3,16,17,32.924-13,29 C38,77,13,67,16,54 c2.611-13,11.821-21,19.652-23 C43,29,52,20,64,23z "/> </svg>'; 
  // svgShape = '<svg version="1.1" id="layer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"> <path fill="#111111" d="
  
  // M64,23
  // c50,2,22,11,19,28
  // c-3,16,17,32.924-13,29 
  // C38,77,13,67,16,54
  // c2.611-13,11.821-21,19.652-23
  // C43,29,52,20,64,23z
  // "/> </svg>';
  
  
  $("#art-board").append(svgShape);
  
  //========================================================================================//
  // function randomBlocks(a, b) {
  //   for (i = 0; i < a; i++) {
  //     let block = $( "<div id='a-b" + i + "' class='block-up data rotate grid-off " + b + "' data-block='b" + i + "' style='transform: rotate(0deg);'></div>" );
  //     let randomNum = Math.floor(Math.random() * (+totalShapes - +0)) + +0;
  //     $("#art-board").append(block);
  //     $("#block" + randomNum + "") .clone() .appendTo("#a-b" + i + "");
  //   }
  // }

  //========================================================================================//
}); // end document ready
