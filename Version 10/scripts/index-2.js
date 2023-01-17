function generateCSVSecondC() {
window.csv += '\nBlock,Box Number,Boxes Opened,Max Value,Box Order,Box Values,Box Set (Randomization),Box Order (Randomization)\n';
for (let i = 0; i < window.expData.trialData.length; i++) {
    window.csv += '"' + window.expData.trialData[i].block + '","' + window.expData.trialData[i].trial + '","' + window.expData.trialData[i].boxes + '","' +
    window.expData.trialData[i].max + '","[' + window.expData.trialData[i].order + ']","[' + window.expData.trialData[i].vals + ']","' +
    window.expData.trialData[i].set + '","[' + window.expData.trialData[i].random + ']"\n';
}
}

function setupCanvas(getNum, ctx, box) {
    let botNum = window.expParam.boxBottom;
    let topNum = window.expParam.boxTop;
    let ticks = box.ticks;
    let vList = [];
  
    for (let i = 0; i < box.amount; i++) {
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
    for (let i = 0; i < ticks.length; i++) {
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
  
    for (let i = 0; i < vList.length; i++) {
      drawTick(5 + pixPerUnit * vList[i], 1 , 12, vList[i]);
    }
  }

function drawCanvas(boxDiv, getNum) {
    let box, nButton, nCanvas, v;
    boxDiv.innerHTML = '';
    let boxes = window.expParam.boxes[window.blk].sets[window.expData.randomOrder[window.blk][window.trialNumber].set];
    for (let i = 0; i < boxes.length; i++) {
      box = boxes[window.expData.randomOrder[window.blk][window.trialNumber].boxes[i]];
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
      setupCanvas(getNum, nCanvas.getContext('2d'), box);
      boxDiv.appendChild(nButton);
      window.boxVals.push(v);
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

function saveDataSecondC() {
  window.expData.trialData.push({
    block: window.expParam.boxes[window.blk].name,
    trial: window.trialNumber + 1,
    boxes: window.boxNum,
    max: window.maxPoint,
    order: window.boxOrd,
    vals: window.boxVals,
    set: window.expData.randomOrder[window.blk][window.trialNumber].set,
    random: window.expData.randomOrder[window.blk][window.trialNumber].boxes
  });
}

function blockResetSecondC() {
  window.trialNumber++;
  if (window.trialNumber >= window.expParam.boxes[window.blk].sets.length) {
    window.blk++;
    window.trialNumber = 0;
  }
}

function startResetSecondC() {
  window.trialNumber = 0;
  window.blk = 0;
}

function randomizeSecondC(shuffle) {
  window.expData.randomOrder = [];
  let setlist;
  let tmpList;

  //for each block
  for (let i = 0; i < window.expParam.boxes.length; i++) {
    setlist = [];

    //for each set
    for (let j = 0; j < window.expParam.boxes[i].sets.length; j++) {
      tmpList = [];

      //for each box
      for (let k = 0; k < window.expParam.boxes[i].sets[j].length; k++) {
        tmpList.push(k);
      }

      shuffle(tmpList);
      setlist.push({
        block: window.expParam.boxes[i].name,
        set: j,
        boxes: [...tmpList]
      });
    }
    shuffle(setlist);
    window.expData.randomOrder.push([...setlist]);
  }
}