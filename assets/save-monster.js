$(document).ready(function () {
  //========================================================================================//
//========================================================================================//
let totalBlocks = [];
// var totalBlocksSqd = Math.sqrt(totalBlocks);
var gridPoints = 0;

var blockRow = 1;
var blockAmount = 1;

var grid = [];

let blockSVGData = [];
let blockSVGDataNose = [];
let blockSVGDataMouth = [];
let blockSVGDataShape = [];

let blockRotateData = [];

let blocks = [];


let artBWidth = 200;
//========================================================================================//
// ==================== functions ==================== //
  blockSVGData.length = 0;
  blockRotateData.length = 0;

// function for getting svg block data
  function generateBlockData() {
    for (i = 0; i < totalBlocks; i++) {
      var bInfo = document.getElementById("a-b0");

      var bData = bInfo.innerHTML;

      var svgBlockData = bData.substring(
        bData.lastIndexOf("<g>") + 3,
        bData.lastIndexOf("</g>")
      );

      var rotateData = bInfo.style["transform"];
      var blockRotateValue = Number(rotateData.slice(7, -4));

      blockRotateData.push(blockRotateValue);
      blockSVGData.push(svgBlockData);

    }
  }

// ====== nose
function generateBlockDataNose() {
  for (i = 0; i < totalBlocks; i++) {
    var bInfo = document.getElementById("n-b0");

    var bData = bInfo.innerHTML;

    var svgBlockData = bData.substring(
      bData.lastIndexOf("<g>") + 3,
      bData.lastIndexOf("</g>")
    );

    var rotateData = bInfo.style["transform"];
    var blockRotateValue = Number(rotateData.slice(7, -4));

    // blockRotateData.push(blockRotateValue);
    blockSVGDataNose.push(svgBlockData);
  }
}


// ====== mouth ======
function generateBlockDataMouth() {
  for (i = 0; i < totalBlocks; i++) {
    var bInfo = document.getElementById("m-b0");

    var bData = bInfo.innerHTML;

    var svgBlockData = bData.substring(
      bData.lastIndexOf("<g>") + 3,
      bData.lastIndexOf("</g>")
    );

    var rotateData = bInfo.style["transform"];
    var blockRotateValue = Number(rotateData.slice(7, -4));

    blockSVGDataMouth.push(svgBlockData);
  }
}

// ====== shape ======
function generateBlockDataShape() {
  for (i = 0; i < totalBlocks; i++) {
    var bInfo = document.getElementById("s-b0");

    var bData = bInfo.innerHTML;

    var svgBlockData = bData.substring(
      bData.lastIndexOf("<g>") + 3,
      bData.lastIndexOf("</g>")
    );

    var rotateData = bInfo.style["transform"];
    var blockRotateValue = Number(rotateData.slice(7, -4));


    blockSVGDataShape.push(svgBlockData);

  }
}
//========================================================================================//
// save button function
document.getElementById("save").addEventListener("click", function() {

totalBlocks = $('#main-card').data('art-board-size');
// let artBWidth = gridPoints[gridPoints.length - 1] + 200;
// blockRotateData = [];
blockSVGData = [];

// totalBlockSqd();
generateBlockData();
generateBlockDataNose();
generateBlockDataMouth();
generateBlockDataShape();
// getGridData();

valueX = 0;
  // =======================
   blocks = [];
   blocksNose = [];
   blocksMouth = [];
   blocksShape = [];

  for (i = 0; i < 1; i++) {
    var block = '<g transform="translate(' + valueX + " ," + valueX + ") rotate(" + valueX + ' 100 100)"> ' + blockSVGData[i] + " </g>"; 
    // console.log(blockSVGData);
    blocks.push(block);
  }


  for (i = 0; i < 1; i++) {
    var blockNose = '<g transform="translate(' + valueX + " ," + valueX + ") rotate(" + valueX + ' 100 100)"> ' + blockSVGDataNose[i] + " </g>"; 
    blocksNose.push(blockNose);
  }


  for (i = 0; i < 1; i++) {
    var blockMouth = '<g transform="translate(' + valueX + " ," + valueX + ") rotate(" + valueX + ' 100 100)"> ' + blockSVGDataMouth[i] + " </g>"; 
    blocksMouth.push(blockMouth);
  }

  for (i = 0; i < 1; i++) {
    var blockShape = '<g transform="translate(' + valueX + " ," + valueX + ") rotate(" + valueX + ' 100 100)"> ' + blockSVGDataShape[i] + " </g>"; 
    blocksShape.push(blockShape);
  }

  //========================================================================================//
  // save file here
  function doSave() {
    let filedata = '<svg version="1.1" id="layer1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + artBWidth + '" height="' + artBWidth + '"> ' + blocksShape + blocksMouth + blocksNose + blocks + " </svg> ";
    let locfile = new Blob([filedata], {
      type: "image/svg+xml;charset=utf-8"
    });
    let locfilesrc = URL.createObjectURL(locfile); //mylocfile);

    let downlo = document.getElementById("dwn");
    dwn.innerHTML =
      "<a href=" + locfilesrc + " download='mysvg.svg'>DownloadSVG</a>";
  }

  doSave();

});
  //========================================================================================//
  //========================================================================================//
}); // end document ready
