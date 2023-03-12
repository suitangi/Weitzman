// Drawing boxes (Condition 3)
function drawBoxes(boxDiv, boxes, getNum) {
    let v, box, nButton, nText, textDiv;
    boxDiv.innerHTML = '';
    for (let i = 0; i < boxes.length; i++) {
      box = boxes[window.expData.randomOrder[window.blk][window.trialNumber].boxes[i]];
      v = getNum(box.lower, box.upper);
      nButton = document.createElement('button');
      nButton.classList.add('stimuliButton');
      nButton.setAttribute('data-index', i + 1);
      nButton.setAttribute('data-v', v);
      nButton.style = `--rotation-index: ${i + 9}`;
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