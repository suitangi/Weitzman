function drawBoxes(getNum) {
  window.boxCosts = 0;
  let b, v;
  for (let i = 0; i < window.expParam.boxes[window.expData.randomOrder[window.blk].set].length; i++) {
    b = window.expParam.boxes[window.expData.randomOrder[window.blk].set][window.expData.randomOrder[window.blk].boxes[i]];
    v = getNum(b.lower, b.upper);
    window.html += '<button class="stimuliButton" data-index="' + (i + 1) + '" data-v="' + v + '" data-c="' + b.cost + '"> [' +
      b.lower + ', ' + b.upper + '] </button>';
    window.boxVals.push(v);
  }
}

function setCostCount(boxDiv) {
  window.html += '<div id="CostCount">Total cost for this round: <span id="PointCost">0</span> points</div>';
  boxDiv.innerHTML = window.html;
}

function saveData() {
  window.expData.trialData.push({
    boxes: window.boxNum,
    max: window.maxPoint,
    order: window.boxOrd,
    vals: window.boxVals,
    cost: window.boxCosts
  });
}

function randomize(shuffle) {
  window.expData.randomOrder = [];
    let tmpList;
    for (let i = 0; i < window.expParam.boxes.length; i++) {
      tmpList = [];
      for (let j = 0; j < window.expParam.boxes[i].length; j++) {
        tmpList.push(j);
      }
      shuffle(tmpList);
      window.expData.randomOrder.push({
        set: i + window.expParam.practice_boxes.length,
        boxes: [...tmpList]
      });
    }
    shuffle(window.expData.randomOrder);

    for (let i = window.expParam.practice_boxes.length - 1; i >= 0 ; i--) {
      tmpList = [];
      for (let j = 0; j < window.expParam.practice_boxes[i].length; j++) {
        tmpList.push(j);
      }
      shuffle(tmpList);
      window.expData.randomOrder.unshift({
        set: i,
        boxes: [...tmpList]
      });
      window.expParam.boxes.unshift(window.expParam.practice_boxes[i]);
    }
}