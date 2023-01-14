function generateCSVFirstC(csv) {
  csv += '\nBlock,Boxes Opened,Total Cost,Max Value,Box Order,Box Values,Box Set (Randomization),Box Order (Randomization)\n';
  for (let i = 0; i < window.expData.trialData.length; i++) {
    csv += '"' + (i + 1) + '","' + window.expData.trialData[i].boxes + '","' + window.expData.trialData[i].cost + '","' +
      window.expData.trialData[i].max + '","[' + window.expData.trialData[i].order + ']","[' + window.expData.trialData[i].vals + 
      ']","' + window.expData.randomOrder[i].set + '","[' + window.expData.randomOrder[i].boxes + ']"\n';
  }
}

function drawBoxes(getNum, v, html) {
  window.boxCosts = 0;
  let b;
  for (let i = 0; i < window.expParam.boxes[window.expData.randomOrder[window.blk].set].length; i++) {
    b = window.expParam.boxes[window.expData.randomOrder[window.blk].set][window.expData.randomOrder[window.blk].boxes[i]];
    v = getNum(b.lower, b.upper);
    html += '<button class="stimuliButton" data-index="' + (i + 1) + '" data-v="' + v + '" data-c="' + b.cost + '"> [' +
      b.lower + ', ' + b.upper + '] </button>';
    }
}

function setCostCountFirstC(html, boxDiv) {
  html += '<div id="CostCount">Total cost for this round: <span id="PointCost">0</span> points</div>';
  boxDiv.innerHTML = html;
}