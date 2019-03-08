$(document).ready(function () {
  //========================================================================================//
  //========================================================================================//
    // a = how many svg files
    var totalShapes = 83;


    // first function code here

  function blocksForHtml(a) {
    for (i = 0; i < a; i++) {
      var total = $(
        '<div id="" class="boxes-card shape-thumbnail"><svg id="block' + i + '" "class="" viewBox="0 0 200 200"></svg></div>');
      $('#boxes-holder').append(total);
    }

  }

  blocksForHtml(totalShapes);
  //========================================================================================//
  // create and load Snap svg blocks in the shape div containers
    function loadBlocks(a, block) {
    Snap.load("assets/svg/block" + a + ".svg", function (data) {
      var paper = data.select("g");
      // set attribute color sfor color1 and color0 defined in the external svg
      attributes = paper.select('[class="color0"]');
      // attributes.attr({ fill: dColor0 });

      attributes = paper.select('[class="color1"]');
      // attributes.attr({ fill: dColor1 });
      block.append(paper);
    });

  }

  b0 = Snap('#block0'); b1 = Snap('#block1'); b2 = Snap('#block2'); b3 = Snap('#block3'); b4 = Snap('#block4'); b5 = Snap('#block5'); b6 = Snap('#block6'); b7 = Snap('#block7'); b8 = Snap('#block8'); b9 = Snap('#block9'); b10 = Snap('#block10'); b11 = Snap('#block11'); b12 = Snap('#block12'); b13 = Snap('#block13'); b14 = Snap('#block14'); b15 = Snap('#block15'); b16 = Snap('#block16'); b17 = Snap('#block17'); b18 = Snap('#block18'); b19 = Snap('#block19'); b20 = Snap('#block20'); b21 = Snap('#block21'); b22 = Snap('#block22'); b23 = Snap('#block23'); b24 = Snap('#block24'); b25 = Snap('#block25'); b26 = Snap('#block26'); b27 = Snap('#block27'); b28 = Snap('#block28'); b29 = Snap('#block29'); b30 = Snap('#block30'); b31 = Snap('#block31'); b32 = Snap('#block32'); b33 = Snap('#block33'); b34 = Snap('#block34'); b35 = Snap('#block35'); b36 = Snap('#block36'); b37 = Snap('#block37'); b38 = Snap('#block38'); b39 = Snap('#block39'); b40 = Snap('#block40'); b41 = Snap('#block41'); b42 = Snap('#block42'); b43 = Snap('#block43'); b44 = Snap('#block44'); b45 = Snap('#block45'); b46 = Snap('#block46'); b47 = Snap('#block47'); b48 = Snap('#block48'); b49 = Snap('#block49'); b50 = Snap('#block50'); b51 = Snap('#block51'); b52 = Snap('#block52'); b53 = Snap('#block53'); b54 = Snap('#block54'); b55 = Snap('#block55'); b56 = Snap('#block56'); b57 = Snap('#block57'); b58 = Snap('#block58'); b59 = Snap('#block59'); b60 = Snap('#block60'); b61 = Snap('#block61'); b62 = Snap('#block62'); b63 = Snap('#block63'); b64 = Snap('#block64'); b65 = Snap('#block65'); b66 = Snap('#block66'); b67 = Snap('#block67'); b68 = Snap('#block68'); b69 = Snap('#block69'); b70 = Snap('#block70'); b71 = Snap('#block71'); b72 = Snap('#block72'); b73 = Snap('#block73'); b74 = Snap('#block74'); b75 = Snap('#block75'); b76 = Snap('#block76'); b77 = Snap('#block77'); b78 = Snap('#block78'); b79 = Snap('#block79'); b80 = Snap('#block80'); b81 = Snap('#block81'); 
  b82 = Snap('#block82'); 

  loadBlocks(0, b0); loadBlocks(1, b1); loadBlocks(2, b2); loadBlocks(3, b3); loadBlocks(4, b4); loadBlocks(5, b5); loadBlocks(6, b6); loadBlocks(7, b7); loadBlocks(8, b8); loadBlocks(9, b9); loadBlocks(10, b10); loadBlocks(11, b11); loadBlocks(12, b12); loadBlocks(13, b13); loadBlocks(14, b14); loadBlocks(15, b15); loadBlocks(16, b16); loadBlocks(17, b17); loadBlocks(18, b18); loadBlocks(19, b19); loadBlocks(20, b20); loadBlocks(21, b21); loadBlocks(22, b22); loadBlocks(23, b23); loadBlocks(24, b24); loadBlocks(25, b25); loadBlocks(26, b26); loadBlocks(27, b27); loadBlocks(28, b28); loadBlocks(29, b29); loadBlocks(30, b30); loadBlocks(31, b31); loadBlocks(32, b32); loadBlocks(33, b33); loadBlocks(34, b34); loadBlocks(35, b35); loadBlocks(36, b36); loadBlocks(37, b37); loadBlocks(38, b38); loadBlocks(39, b39); loadBlocks(40, b40); loadBlocks(41, b41); loadBlocks(42, b42); loadBlocks(43, b43); loadBlocks(44, b44); loadBlocks(45, b45); loadBlocks(46, b46); loadBlocks(47, b47); loadBlocks(48, b48); loadBlocks(49, b49); loadBlocks(50, b50); loadBlocks(51, b51); loadBlocks(52, b52); loadBlocks(53, b53); loadBlocks(54, b54); loadBlocks(55, b55); loadBlocks(56, b56); loadBlocks(57, b57); loadBlocks(58, b58); loadBlocks(59, b59); loadBlocks(60, b60); loadBlocks(61, b61); loadBlocks(62, b62); loadBlocks(63, b63); loadBlocks(64, b64); loadBlocks(65, b65); loadBlocks(66, b66); loadBlocks(67, b67); loadBlocks(68, b68); loadBlocks(69, b69); loadBlocks(70, b70); loadBlocks(71, b71); loadBlocks(72, b72); loadBlocks(73, b73); loadBlocks(74, b74); loadBlocks(75, b75); loadBlocks(76, b76); loadBlocks(77, b77); loadBlocks(78, b78); loadBlocks(79, b79); loadBlocks(80, b80); loadBlocks(81, b81); 
  loadBlocks(82, b82); 

  //========================================================================================//
  // create the block elements for the html page
  
let bData = [
  27,23,23,27,23,2,2,23,23,2,2,23,27,23,23,27
  ];

  let rData = [
90,90,90,180,360,450,540,180,360,360,630,180,360,270,270,270
  ]



    // second function code here
//     function makeBlocks(b) {
//       setTimeout( function(){
//       for (i = 0; i < bData.length; i++) {
//         var block = $("<div class='0b" + i + " block-up " + b + "' style='transform: rotate(" + rData[i] + "deg);'></div>");
//         $('.art-board').append(block);
//         $('#block' + bData[0] + '').clone().appendTo(".0b" + i + "");
//       }
      
//     }, 1 );
//     }


// // $(document).bind('function_a_complete', b);
// makeBlocks('four-up');
// $("#board-options").hide();


var mainBlock = Snap('.some-div');

Snap.load("assets/svg/block-main.svg", onSVGLoaded);

function onSVGLoaded(data) {
  mainBlock.append(data);
}
// var target2 = ("<div class='1b1 block-up data rotate style='transform: rotate(0 deg);'></div>");

var target = document.getElementById('some-div');

// Create the new element
// This can be any valid HTML element: p, article, span, etc...
let div = document.createElement('div');
    div.setAttribute("class", "b1 block-up data rotate four-up");
    div.setAttribute("style", "transform: rotate(180deg);");
    
div.innerHTML = 'Your content, markup, etc.';

$('.block1').clone().appendTo(".b1");

// You could also add classes, IDs, and so on
// div is a fully manipulatable DOM Node



// Insert the element after our target element
target.parentNode.insertBefore( div, target.nextSibling );

function makeBlocks2(b) {
  // setTimeout( function(){

  for (i = 0; i < bData.length; i++) {

    var block = ("<div class='1b" + i + " block-up data rotate " + b + "' style='transform: rotate(" + rData[i] + "deg);'></div>");
    // Insert the element before our target element

    // $('.art-board').append(block);
    // $('#block' + bData[i] + '').clone().appendTo(".1b" + i + "");
  }

// }, 1 );
}


// // $(document).bind('function_a_complete', b);
makeBlocks2();


  //========================================================================================//
  //========================================================================================//
}); // end document ready
