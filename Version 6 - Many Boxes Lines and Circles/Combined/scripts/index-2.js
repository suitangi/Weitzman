// Drawing canvas (Condition 2)
function drawCanvas(boxDiv, getNum, setupCanvas) {
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
      setupCanvas(getNum, nCanvas.getContext('2d'), box, 215);
      boxDiv.appendChild(nButton);
      window.boxVals.push(v);
  }
}