$(document).ready(function () {
  //========================================================================================//
//========================================================================================//
let totalBlocks = [];

var gridPoints = [0, 200, 400, 600];

var blockRow = 4;
var blockAmount = 16;

var grid = [];
var grid2 = [];
var grid3 = [];

let blockSVGData = [];
let blockRotateData = [];

let blockSVGData2 = [];
let blockRotateData2 = [];

let blockSVGData3 = [];
let blockRotateData3 = [];

let blocks = [];
let blocks2 = [];
let blocks3 = [];

var gridData1A = [];
var gridData1B = [];
var gridData2A = [];
var gridData2B = [];
var gridData3A = [];
var gridData3B = [];

let artBWidth = 800;
//========================================================================================//
// ==================== functions ==================== //
  blockSVGData.length = 0;
  blockRotateData.length = 0;

  blockSVGData2.length = 0;
  blockRotateData2.length = 0;

  blockSVGData3.length = 0;
  blockRotateData3.length = 0;

// function to get gripPoints data
function totalBlockSqd() {
if (totalBlocks === 16) { gridPoints = [0, 200, 400, 600]; }
else if (totalBlocks === 25) { gridPoints = [0, 200, 400, 600, 800]; }
else if (totalBlocks === 36) { gridPoints = [0, 200, 400, 600, 800, 1000]; }
else if (totalBlocks === 49) { gridPoints = [0, 200, 400, 600, 800, 1000, 1200]; }
else if (totalBlocks === 64) { gridPoints = [0, 200, 400, 600, 800, 1000,1200,1400]; }
else if (totalBlocks === 81) { gridPoints = [0, 200, 400, 600, 800, 1000,1200,1400, 1600]; } 
else if (totalBlocks === 100) { gridPoints = [0, 200, 400, 600, 800, 1000,1200,1400, 1600, 1800]; } 

blockRow = gridPoints.length;
blockAmount = blockRow * blockRow;
artBWidth = gridPoints[gridPoints.length - 1] + 200;

}

//========================================================================================//
//========================================================================================//
// function for getting svg block data
  function generateBlockData() { for (i = 0; i < totalBlocks; i++) { var bInfo = document.getElementById("a-b" + i); var bData = bInfo.innerHTML; var svgBlockData = bData.substring( bData.lastIndexOf("<g>") + 3, bData.lastIndexOf("</g>") ); var rotateData = bInfo.style["transform"]; var blockRotateValue = Number(rotateData.slice(7, -4)); blockRotateData.push(blockRotateValue); blockSVGData.push(svgBlockData); } }

  function generateBlockData2() { for (i = 0; i < totalBlocks; i++) { var bInfo = document.getElementById("b-b" + i); var bData = bInfo.innerHTML; var svgBlockData2 = bData.substring( bData.lastIndexOf("<g>") + 3, bData.lastIndexOf("</g>") ); var rotateData2 = bInfo.style["transform"]; var blockRotateValue2 = Number(rotateData2.slice(7, -4)); blockRotateData2.push(blockRotateValue2); blockSVGData2.push(svgBlockData2); } }

  function generateBlockData3() { for (i = 0; i < totalBlocks; i++) { var bInfo = document.getElementById("c-b" + i); var bData = bInfo.innerHTML; var svgBlockData3 = bData.substring( bData.lastIndexOf("<g>") + 3, bData.lastIndexOf("</g>") ); var rotateData3 = bInfo.style["transform"]; var blockRotateValue3 = Number(rotateData3.slice(7, -4)); blockRotateData3.push(blockRotateValue3); blockSVGData3.push(svgBlockData3); } }

// ==================
function getGridData () {
  for (var i = 0; i < blockRow; i++) { for (var j = 0; j < blockRow; j++) { gridData1A[gridData1A.length] = gridPoints[j]; } }
  for (var i = 0; i < blockRow; i++) { for (var j = 0; j < blockRow; j++) { gridData1B[gridData1B.length] = gridPoints[i]; } }
  for (var i = 0; i < totalBlocks; i++) { grid.push([gridData1A[i], gridData1B[i]]); }
}

function getGridData2 () {
  for (var i = 0; i < blockRow; i++) { for (var j = 0; j < blockRow; j++) { gridData2A[gridData2A.length] = gridPoints[j]; } }
  for (var i = 0; i < blockRow; i++) { for (var j = 0; j < blockRow; j++) { gridData2B[gridData2B.length] = gridPoints[i]; } }
  for (var i = 0; i < totalBlocks; i++) { grid2.push([gridData2A[i], gridData2B[i]]); } 
}

function getGridData3 () {
  for (var i = 0; i < blockRow; i++) { for (var j = 0; j < blockRow; j++) { gridData3A[gridData3A.length] = gridPoints[j]; } }
  for (var i = 0; i < blockRow; i++) { for (var j = 0; j < blockRow; j++) { gridData3B[gridData3B.length] = gridPoints[i]; } }
  for (var i = 0; i < totalBlocks; i++) { grid3.push([gridData3A[i], gridData3B[i]]); } 
}
//========================================================================================//
//========================================================================================//
// save button function
document.getElementById("save-all").addEventListener("click", function() {

totalBlocks = $('#main-card').data('art-board-size');
// let artBWidth = gridPoints[gridPoints.length - 1] + 200;
blockRotateData = [];
blockSVGData = [];

blockRotateData2 = [];
blockSVGData2 = [];
totalBlockSqd();

generateBlockData();
getGridData();

generateBlockData2();
getGridData2();

generateBlockData3();
getGridData3();
  // =======================
   blocks = [];
   blocks2 = [];
   blocks3 = [];

  for (i = 0; i < blockAmount; i++) {
    var block = '<g transform="translate(' + grid[i][0] + " ," + grid[i][1] + ") rotate(" + blockRotateData[i] + ' 100 100)"> ' + blockSVGData[i] + " </g>"; 
    blocks.push(block);
  }

  for (i = 0; i < blockAmount; i++) {
    var block2 = '<g transform="translate(' + grid[i][0] + " ," + grid[i][1] + ") rotate(" + blockRotateData2[i] + ' 100 100)"> ' + blockSVGData2[i] + " </g>"; 
    blocks2.push(block2);
  }

  for (i = 0; i < blockAmount; i++) {
    var block3 = '<g transform="translate(' + grid[i][0] + " ," + grid[i][1] + ") rotate(" + blockRotateData3[i] + ' 100 100)"> ' + blockSVGData3[i] + " </g>"; 
    blocks3.push(block3);
  }
// console.log(blocks2);
  //========================================================================================//
  // save file here
  function doSave() {
    let filedata = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + artBWidth + '" height="' + artBWidth + '"> <g id="Layer_1">' + blocks + "</g> <g id='Layer_2'>" + blocks2 + "</g><g id='Layer_3'>" + blocks3 + "</g> </svg> ";
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
