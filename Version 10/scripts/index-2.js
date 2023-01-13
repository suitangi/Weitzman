function generateCSVSecondC(csv) {
csv += '\nBlock,Box Number,Boxes Opened,Max Value,Box Order,Box Values,Box Set (Randomization),Box Order (Randomization)\n';
for (i = 0; i < window.expData.trialData.length; i++) {
    csv += '"' + window.expData.trialData[i].block + '","' + window.expData.trialData[i].trial + '","' + window.expData.trialData[i].boxes + '","' +
    window.expData.trialData[i].max + '","[' + window.expData.trialData[i].order + ']","[' + window.expData.trialData[i].vals + ']","' +
    window.expData.trialData[i].set + '","[' + window.expData.trialData[i].random + ']"\n';
}
}

function setupCanvas(ctx, box) {
    let botNum = window.expParam.boxBottom;
    let topNum = window.expParam.boxTop;
    let ticks = box.ticks;
    let vList = [];
  
    for (var i = 0; i < box.amount; i++) {
      vList.push(getNum(box.lower, box.upper));
    }
  
    let pixPerUnit = 200 / (topNum - botNum);
  
    //draw bottom line
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, 15);
    ctx.lineTo(215, 15);
    ctx.stroke();
  
    function drawTick(x, y, len, val) {
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + len);
      ctx.stroke();
    }
  
    ctx.textAlign = 'center';
    ctx.font = '12px arial';
  
    drawTick(5, 15, 5, botNum);
    drawTick(205, 15, 5, topNum);
    ctx.fillText(botNum, 5, 30);
    ctx.fillText(topNum, 205, 30);
    for (var i = 0; i < ticks.length; i++) {
      drawTick(5 + pixPerUnit * ticks[i], 15, 5, ticks[i]);
      ctx.fillText(ticks[i], 5 + pixPerUnit * ticks[i], 30);
    }
  
    //draw top line
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(5, 7);
    ctx.lineTo(205, 7);
    ctx.stroke();
  
    for (var i = 0; i < vList.length; i++) {
      drawTick(5 + pixPerUnit * vList[i], 1 , 12, vList[i]);
    }
  }

function drawCanvas(v) {
    let box, nButton, nCanvas, nText;
    let boxDiv = document.getElementById("BoxContainer");
    boxDiv.innerHTML = '';
    let boxes = window.expParam.boxes[window.blockNumber].sets[window.expData.randomOrder[window.blockNumber][window.trialNumber].set];
    for (var i = 0; i < boxes.length; i++) {
      box = boxes[window.expData.randomOrder[window.blockNumber][window.trialNumber].boxes[i]];
      v = getNum(box.lower, box.upper);
      nButton = document.createElement('button');
      nButton.classList.add('stimuliButton');
      nButton.setAttribute('data-index', i + 1);
      nButton.setAttribute('data-v', v);
      nText = document.createTextNode('Movie ' + (i + 1));
      nButton.appendChild(nText);
      nCanvas = document.createElement('canvas');
      nCanvas.setAttribute('width', 215);
      nCanvas.setAttribute('height', 33);
      nButton.appendChild(nCanvas);
      setupCanvas(nCanvas.getContext('2d'), box);
      boxDiv.appendChild(nButton);
  }
}

function setCostCountSecondC(boxDiv) {
    let nDiv = document.createElement('div');
    nDiv.id = "CostCount";
    nText = document.createTextNode('Cost for this round: ');
    nDiv.appendChild(nText);
    let nSpan = document.createElement('span');
    nText = document.createTextNode('0');
    nSpan.appendChild(nText);
    nSpan.id = "PointCost";
    nDiv.appendChild(nSpan);
    nText = document.createTextNode(' points');
    nDiv.appendChild(nText);
    boxDiv.appendChild(nDiv);
}