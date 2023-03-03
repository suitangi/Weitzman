// Drawing boxes (Condition 1)
function drawBoxes(boxDiv, getNum) {
  let v, box, nButton, nText, textDiv;
  boxDiv.innerHTML = '';
  let boxes = window.expParam.boxes[window.blk].sets[window.expData.randomOrder[window.blk][window.trialNumber].set];
  for (let i = 0; i < boxes.length; i++) {
    box = boxes[window.expData.randomOrder[window.blk][window.trialNumber].boxes[i]];
    v = getNum(box.lower, box.upper);
    nButton = document.createElement('button');
    nButton.classList.add('stimuliButton');
    nButton.setAttribute('data-index', i + 1);
    nButton.setAttribute('data-v', v);
    textDiv = document.createElement('div');
    nText = document.createTextNode('Movie ' + (i + 1));
    textDiv.appendChild(nText);
    nButton.appendChild(textDiv);
    textDiv = document.createElement('div');
    nText = document.createTextNode(`[${box.lower}, ${box.upper}]`);
    textDiv.appendChild(nText);
    nButton.appendChild(textDiv);
    boxDiv.appendChild(nButton);
    window.boxVals.push(v);
  }
}