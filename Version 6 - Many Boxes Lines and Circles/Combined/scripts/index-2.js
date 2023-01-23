function setupCanvas(getNum, ctx, box) {
    let botNum = window.expParam.boxBottom;
    let topNum = window.expParam.boxTop;
    let ticks = window.expParam.ticks;
    let vList = [];
  
    for (let i = 0; i < window.expParam.amount; i++) {
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
    let v, box, nButton, nCanvas, nText;
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