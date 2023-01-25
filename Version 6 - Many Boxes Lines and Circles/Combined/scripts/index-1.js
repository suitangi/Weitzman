// Drawing boxes (Condition 1)
function drawBoxes(boxDiv, getNum) {
  let v, box, nButton, nText;
  boxDiv.innerHTML = '';
  let boxes = window.expParam.boxes[window.blk].sets[window.expData.randomOrder[window.blk][window.trialNumber].set];
  for (let i = 0; i < boxes.length; i++) {
    box = boxes[window.expData.randomOrder[window.blk][window.trialNumber].boxes[i]];
    v = getNum(box.lower, box.upper);
    nButton = document.createElement('button');
    nButton.classList.add('stimuliButton');
    nButton.setAttribute('data-index', i + 1);
    nButton.setAttribute('data-v', v);
    nText = `[${box.lower}, ${box.upper}]`;
    nButton.innerText = nText;
    boxDiv.appendChild(nButton);
    window.boxVals.push(v);
  }
}