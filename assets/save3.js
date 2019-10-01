$(document).ready(function () {
  //========================================================================================//
//========================================================================================//
let totalBlocks = [];
// var totalBlocksSqd = Math.sqrt(totalBlocks);
var gridPoints = [0, 200, 400, 600];

var blockRow = 4;
var blockAmount = 16;

var grid = [];

let blockSVGData = [];
let blockRotateData = [];

let blocks = [];
var gridData = [];
var gridData2 = [];

let artBWidth = 800;
//========================================================================================//
// ==================== functions ==================== //
  blockSVGData.length = 0;
  blockRotateData.length = 0;

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


// function for getting svg block data
  function generateBlockData() {
    for (i = 0; i < totalBlocks; i++) {
      var bInfo = document.getElementById("c-b" + i);

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

// ==================
function getGridData () {

  // loop to push into gridData
  for (var i = 0; i < blockRow; i++) {
    for (var j = 0; j < blockRow; j++) {
      gridData[gridData.length] = gridPoints[j];
    }
  }

  // loop to push into gridData2
  for (var i = 0; i < blockRow; i++) {
    for (var j = 0; j < blockRow; j++) {
      gridData2[gridData2.length] = gridPoints[i];
    }
  }

  // for loop to push griddata and gridDAta2 into grid
  for (var i = 0; i < totalBlocks; i++) {
    grid.push([gridData[i], gridData2[i]]);
  }
}


//========================================================================================//
// save button function
document.getElementById("save3").addEventListener("click", function() {

totalBlocks = $('#main-card').data('art-board-size');
// let artBWidth = gridPoints[gridPoints.length - 1] + 200;
blockRotateData = [];
blockSVGData = [];

totalBlockSqd();
generateBlockData();
getGridData();

  // =======================
   blocks = [];

  for (i = 0; i < blockAmount; i++) {
    var block = '<g transform="translate(' + grid[i][0] + " ," + grid[i][1] + ") rotate(" + blockRotateData[i] + ' 100 100)"> ' + blockSVGData[i] + " </g>"; 
    blocks.push(block);
  }

// console.log(blocks);
  //========================================================================================//
  // save file here
  function doSave() {
    let filedata = '<svg version="1.1" id="layer1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + artBWidth + '" height="' + artBWidth + '"> ' + blocks + " </svg> ";
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
