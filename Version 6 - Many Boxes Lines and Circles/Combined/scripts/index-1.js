function drawBoxes(getNum) {
  let v, box;
  let boxes = window.expParam.boxes[window.blk].sets[window.expData.randomOrder[window.blk][window.trialNumber].set];
    for (let i = 0; i < boxes.length; i++) {
      box = boxes[window.expData.randomOrder[window.blk][window.trialNumber].boxes[i]];
      v = getNum(box.lower, box.upper);
    window.html += '<button class="stimuliButton" data-index="' + (i + 1) + '" data-v="' + v + '> [' +
      box.lower + ', ' + box.upper + '] </button>';
    window.boxVals.push(v);
  }
}