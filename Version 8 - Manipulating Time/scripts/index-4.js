// Drawing boxes (Condition 4)
function drawBoxes(boxDiv, boxes, getNum) {
  let v, box, nButton, nText;
  boxDiv.innerHTML = '';
  for (let i = 0; i < boxes.length; i++) {
    box = boxes[window.expData.randomOrder[window.blk][window.trialNumber].boxes[i]];
    v = getNum(box.lower, box.upper);
    nButton = document.createElement('button');
    nButton.classList.add('stimuliButton');
    nButton.setAttribute('data-index', i + 1);
    nButton.setAttribute('data-v', v);
    nButton.style = `--rotation-index: ${i + 9}`;
    nText = document.createTextNode('Movie ' + (i + 1));
    nButton.appendChild(nText);
    boxDiv.appendChild(nButton);
    window.boxVals.push(v);
  }
}

// Drawing canvas (Condition 4)
function drawCanvas(button, boxes, i, setupCanvas) {
  let box, nCanvas; 
  const canvasWidth = button.offsetWidth - 15;
  box = boxes[window.expData.randomOrder[window.blk][window.trialNumber].boxes[i]];
  nCanvas = document.createElement('canvas');
  nCanvas.setAttribute('width', canvasWidth);
  nCanvas.setAttribute('height', 33);
  button.appendChild(nCanvas);
  setupCanvas(nCanvas.getContext('2d'), box, canvasWidth);
}