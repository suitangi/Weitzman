// Helper: shuffle an array
function shuffle(array) {
for (let i = array.length - 1; i > 0; --i) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// Helper: check if array has duplicates
function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

// Helper: check if 2 arrays are the same
function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}
  
  // Returns a random number generated by a truncated normal distribution
  function normal(mean, std, left_trunc, right_trunc) {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let result = Math.sqrt(-2.0 * Math.log(u)) * 
                 Math.cos(2.0 * Math.PI * v);
    result *= std;
    result += mean;
    if (result < left_trunc) result = left_trunc;
    if (result > right_trunc) result = right_trunc;
    return result;
}

// Helper: Better rounding
function roundBetter(num, place) {
    let mod = Math.pow(10, place);
    return Math.round(num * mod + Math.sign(num) * 0.1 ** (17 - 2 - (Math.round(num * mod) / mod).toString().length)) / mod;
  }
  
// Helper: Get Query
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Setting prequestions
function setPrequestions(condition) {
  window.expParam.preQuestions = window.expParam.prequestions
  .filter(question => (
     question.conditions === "all" || 
     question.conditions.includes(condition)
  ));
}

// Setting exclusion
function setExclusion(condition) {
  window.expParam.exclusionQuestions = window.expParam.exclusion
  .filter(question => (
    question.conditions === "all" || 
    question.conditions.includes(condition)
  ));
}

// Setting postquestions
function setPostquestions(condition) {
  window.expParam.postQuestions = window.expParam.postquestions
  .filter(question => (
    question.conditions === "all" || 
    question.conditions.includes(condition)
  ));
}

// Setting prequestions, exclusion, postquestions, 
// and task description for each condition 
function setConditionParams() {
  if (window.condition === 1) {
    setPrequestions(1);
    setExclusion(1);
    setPostquestions(1);
    window.taskDescription = "1.Numerical, Linear";
  }
  else if (window.condition === 2) {
    setPrequestions(2);
    setExclusion(2);
    setPostquestions(2);
    window.taskDescription = "2.Graphical, Linear";
  }
  else if (window.condition === 3) {
    setPrequestions(3);
    setExclusion(3);
    setPostquestions(3);
    window.taskDescription = "3.Numerical, Circular";
  }
  else if (window.condition === 4) {
    setPrequestions(4);
    setExclusion(4);
    setPostquestions(4);
    window.taskDescription = "4.Graphical, Circular";
  }
}

// Functions for the prequestions
function preQuestions(qNum) {
    if (qNum == window.expParam.preQuestions.length) {
      setTimeout(function() {
        startExp();
      }, 500);
    } else {
      let question = window.expParam.preQuestions[qNum],
        html = '',
        keys = ['enter'];
      if (question.type == 'textbox') {
        html = '<form action="" class="formName">' +
          '<div class="form-group">' +
          '<label>' +
          question.question + '</label>' +
          '<textarea type="text" placeholder="' +
          question.placeholder +
          '" class="textAnswer" style="height: 70px;" required /></textarea>' +
          '</div>' +
          '</form>'
      } else if (question.type == 'choice' || question.type == 'exclusion') {
        html = question.question + '<br>';
        for (let i = 0; i < question.choices.length; i++) {
          if (question.choices[i].toLowerCase() != 'other') {
            html += '<label class="radioContainer">' +
              question.choices[i] +
              '<input type="radio" name="radio"> <span class="checkmark"></span> </label>'
          } else {
            html += '<label class="radioContainer" onclick="otherRadioClick()"><input type="radio" name="radio"><label>Other: <input type="text" class="radioOther"></label><span class="checkmark"></span> </label>'
          }
        }
      } else if (question.type == 'text') {
        html = question.question;
      } else if (question.type == "extext") {
        html = question.question + '<br>';
        window.tries = 0;
        shuffle(window.expParam.exclusionQuestions);
        let qI;
        for (let i = 0; i < window.expParam.exclusionQuestions.length; i++) {
          qI = window.expParam.exclusionQuestions[i],
            html += '<br><br><strong>Question ' + (i + 1) + '</strong><br>' + qI.question + '<br><div class="choiceContainer">';
          for (let j = 0; j < qI.choices.length; j++) {
            html += '<label class="radioContainer">' + qI.choices[j] + '<input type="radio" name="radio' + i + '"><span class="checkmark"></span> </label>'
          }
          html += '</div>';
        }
      } else if (question.type == 'specialKey') {
        keys = ['p', 'q'];
        html = question.question;
      }
      window.preModal = $.confirm({
        title: question.title,
        content: html,
        type: 'blue',
        boxWidth: '55%',
        useBootstrap: false,
        typeAnimated: true,
        animateFromElement: false,
        animation: 'opacity',
        buttons: {
          formSubmit: {
            text: 'Next',
            btnClass: 'btn-blue',
            keys: keys,
            isDisabled: (question.scroll !== null && question.scroll == true),
            action: function() {
              if (question.type == 'textbox') {
                let textAns = this.$content.find('.textAnswer').val();
                if (!textAns) {
                  $.alert({
                    title: 'Error',
                    boxWidth: '25%',
                    useBootstrap: false,
                    content: 'Please provide a valid answer',
                    type: 'red',
                  });
                  return false;
                } else {
                  window.expData.preQuestions.push({
                    question: question.title,
                    answer: textAns
                  });
                  preQuestions(qNum + 1);
                }
              } else if (question.type == 'extext') {
  
                let choiceList = this.$content.find($('.choiceContainer'));
                let radioList, exCheck = [];
                window.tries += 1;
  
                for (let i = 0; i < choiceList.length; i++) {
                  exCheck.push(i + 1);
                  radioList = choiceList[i].getElementsByClassName('radioContainer');
                  for (let j = 0; j < radioList.length; j++) {
                    if (radioList[j].getElementsByTagName('input')[0].checked) {
  
                      if (window.expParam.exclusionQuestions[i].correct == j)
                        exCheck.pop(); //add to incorrect list
                    }
                  } //for j
                } //for i
  
                if (exCheck.length == 0) {
                  window.expData.preQuestions.push({
                    question: 'Comprehension Questions',
                    answer: window.tries + ' tries'
                  });
                  preQuestions(qNum + 1);
                  return true;
                } else {
                  $.alert({
                    title: 'Error',
                    boxWidth: '25%',
                    useBootstrap: false,
                    content: 'The following questions were incorrect: <br><strong>' + exCheck.toString() + '</strong><br>Please make sure to read carefully and answer them correctly.<br>',
                    type: 'red',
                  });
                  return false;
                }
              } else if (question.type == 'choice') {
                let radioList = this.$content.find($('.radioContainer'));
                for (let j = 0; j < radioList.length; j++) {
                  if (radioList[j].getElementsByTagName('input')[0].checked) {
  
                    if (question.choices[j].toLowerCase() != 'other') {
                      window.expData.preQuestions.push({
                        question: question.title,
                        answer: question.choices[j]
                      });
                    } else if (this.$content.find('.radioOther').val().length == 0) {
                      $.alert({
                        title: 'Error',
                        boxWidth: '25%',
                        useBootstrap: false,
                        content: 'If you select other, please do not leave it blank.',
                        type: 'red',
                      });
                      return false;
                    } else {
                      window.expData.preQuestions.push({
                        question: question.title,
                        answer: this.$content.find('.radioOther').val()
                      });
                    }
                    preQuestions(qNum + 1);
                    return true;
                  }
                }
                $.alert({
                  title: 'Error',
                  boxWidth: '25%',
                  useBootstrap: false,
                  content: 'Please select an answer',
                  type: 'red',
                });
                return false;
              } else if (question.type == 'exclusion') {
                let radioList = this.$content.find($('.radioContainer'));
                for (let j = 0; j < radioList.length; j++) {
                  if (radioList[j].getElementsByTagName('input')[0].checked) {
  
                    //push answer
                    window.expData.preQuestions.push({
                      question: question.title,
                      answer: question.choices[j]
                    });
                    if (question.choices[j] == question.choices[question.correct]) { //correcly answered
                      preQuestions(qNum + 1);
                      console.log('Exclusion passed');
                      return true;
                    } else { //incorrect answer
                      $.confirm({
                        title: "Error",
                        content: "You did not answer the comprehension question correctly. Please return your submission on Prolific by selecting the 'Stop without completing' button.",
                        type: 'red',
                        boxWidth: '55%',
                        useBootstrap: false,
                        typeAnimated: true,
                        buttons: {
                          close: {
                            text: "Close",
                            btnClass: 'btn-blue',
                            action: function() {
                              return false;
                            }
                          }
                        },
                        onOpenBefore: function() {
                          // before the modal is displayed.
                          this.buttons.close.hide();
                        },
                      });
                      return true;
                    }
                  }
                }
                $.alert({
                  title: 'Error',
                  boxWidth: '25%',
                  useBootstrap: false,
                  content: 'Please select an answer',
                  type: 'red',
                });
                return false;
              } else {
                preQuestions(qNum + 1);
              }
            }
          }
        },
        onContentReady: function() {
          let jc = this;
          this.$content.find('form').on('submit', function(e) {
            e.preventDefault();
            jc.$$formSubmit.trigger('click');
          });
          if (question.scroll !== null && question.scroll == true) {
            if ($('.jconfirm-content-pane').scrollTop() + $('.jconfirm-content-pane').height() >= ($('.jconfirm-content').height() * 0.95)) {
              window.preModal.buttons.formSubmit.enable();
            }
            $('.jconfirm-content-pane').scroll(function() {
              if ($('.jconfirm-content-pane').scrollTop() + $('.jconfirm-content-pane').height() >= ($('.jconfirm-content').height() * 0.95)) {
                window.preModal.buttons.formSubmit.enable();
              }
            });
          }
        },
        onOpenBefore: function() {
          if (question.type == 'specialKey') {
            this.buttons.formSubmit.hide();
          }
        }
      });
    }
  }

// Functions for the postquestions
function postQuestions(qNum) {
    if (qNum == window.expParam.postQuestions.length) {
      console.log("Experiment Done");
      saveData(new Date().getTime() + "" + Math.floor(Math.random() * 10) + ".csv", dataToCSV());
  
    } else {
      let question = window.expParam.postQuestions[qNum], 
      html = '';
      if (question.type == 'textbox') {
        html = '<form action="" class="formName">' +
          '<div class="form-group">' +
          '<label>' +
          question.question + '</label>' +
          '<textarea type="text" placeholder="' +
          question.placeholder +
          '" class="textAnswer" style="height: 70px;" required /></textarea>' +
          '</div>' +
          '</form>'
      } else if (question.type == 'box') {
        html = question.question + '<br><table><tbody>';
        for (let i = 0; i < question.boxes.length; i++) {
          html += "<tr><td style=\"border: 1px solid #000; padding: 10 50; text-align: center;\">" + question.boxes[i] + "</td>";
          html += "<td style=\"padding-left: 50px;\"><input style=\"font-size: 17px; width: 200px;\" type=\"number\" placeholder=\"Textbox\" id=\"boxnum" + i + "\" min=\"1\" max=\"" + question.boxes.length + "\"></td></tr>";
        }
        html += "</tbody></table>"
      } else if (question.type == 'choice') {
        html = question.question + '<br>';
        for (let i = 0; i < question.choices.length; i++) {
          if (question.choices[i].toLowerCase() != 'other') {
            html += '<label class="radioContainer">' +
              question.choices[i] +
              '<input type="radio" name="radio"> <span class="checkmark"></span> </label>'
          } else {
            html += '<label class="radioContainer" onclick="otherRadioClick()"><input type="radio" name="radio"><label>Other: <input type="text" class="radioOther"></label><span class="checkmark"></span> </label>'
          }
        }
      } else if (question.type == 'text') {
        html = question.question;
      } else if (question.type == "number") {
        html = question.question + '<br>' + "<input type=\"number\" id=\"ageInput\" min=\"" + question.min + "\" max=\"" + question.max + "\">";
      } else if (question.type == "ladder") {
        html = question.question + '<br><br>';
        for (let i = 1; i < 10; i++) {
          html += '<select id=\"ladderInput' + i + '\"><option value=\"-1\">Select a choice</option><option value=\"1\">' + (10 - i) + '0% Chance chance of $1.00</option><option value=\"0\">$0.50 for sure</option></select><br><br>';
        }
      }
      $.confirm({
        title: question.title,
        content: html,
        type: 'blue',
        boxWidth: '55%',
        useBootstrap: false,
        typeAnimated: true,
        animation: 'opacity',
        buttons: {
          formSubmit: {
            text: 'Next',
            btnClass: 'btn-blue',
            keys: ['enter'],
            action: function() {
              if (question.type == 'textbox') {
                let textAns = this.$content.find('.textAnswer').val();
                if (!textAns) {
                  $.alert({
                    title: 'Error',
                    boxWidth: '25%',
                    useBootstrap: false,
                    content: 'Please provide a valid answer',
                    type: 'red',
                  });
                  return false;
                } else {
                  window.expData.postQuestions.push({
                    question: question.title,
                    answer: textAns
                  });
                  postQuestions(qNum + 1);
                }
              } else if (question.type == 'box') {
                let error = false;
                let boxVals = [];
                for (let i = 0; i < question.boxes.length; i++) {
                  let boxval = this.$content.find('#boxnum' + i).val();
                  if (!boxval) {
                    error = true;
                  } else {
                    if (parseInt(boxval, 10) < 1 || parseInt(boxval, 10) > question.boxes.length) {
                      error = true;
                    }
                    boxVals.push(boxval);
                  }
                }
                error = error || hasDuplicates(boxVals);
                if (!error) {
                  window.expData.postQuestions.push({
                    question: question.title,
                    answer: '[' + boxVals.toString() + ']'
                  });
                  postQuestions(qNum + 1);
                } else {
                  $.alert({
                    title: 'Error',
                    boxWidth: '25%',
                    useBootstrap: false,
                    content: 'Please enter the numbers 1 through 5 in the boxes. You may only enter each number once.',
                    type: 'red',
                  });
                  return false;
                }
              } else if (question.type == 'choice') {
                let radioList = this.$content.find($('.radioContainer'));
                for (let j = 0; j < radioList.length; j++) {
                  if (radioList[j].getElementsByTagName('input')[0].checked) {
  
                    if (question.choices[j].toLowerCase() != 'other') {
                      window.expData.postQuestions.push({
                        question: question.title,
                        index: j,
                        answer: question.choices[j]
                      });
                    } else if (this.$content.find('.radioOther').val().length == 0) {
                      $.alert({
                        title: 'Error',
                        boxWidth: '25%',
                        useBootstrap: false,
                        content: 'If you select other, please do not leave it blank.',
                        type: 'red',
                      });
                      return false;
                    } else {
                      window.expData.postQuestions.push({
                        question: question.title,
                        answer: this.$content.find('.radioOther').val()
                      });
                    }
                    postQuestions(qNum + 1);
                    return true;
                  }
                }
                $.alert({
                  title: 'Error',
                  boxWidth: '25%',
                  useBootstrap: false,
                  content: 'Please select an answer',
                  type: 'red',
                });
                return false;
              } else if (question.type == 'number') {
                let textAns = this.$content.find('#ageInput').val();
                if (!textAns) {
                  $.alert({
                    title: 'Error',
                    boxWidth: '25%',
                    useBootstrap: false,
                    content: 'Please provide a valid answer',
                    type: 'red',
                  });
                  return false;
                } else {
                  window.expData.postQuestions.push({
                    question: question.title,
                    answer: textAns
                  });
                  postQuestions(qNum + 1);
                }
              } else if (question.type == 'ladder') {
                let ans = true;
                for (let i = 1; i < 10; i++) {
                  ans = ans && document.getElementById('ladderInput' + i).value != "-1";
                }
                if (!ans) {
                  $.alert({
                    title: 'Error',
                    boxWidth: '25%',
                    useBootstrap: false,
                    content: 'Please make sure you select answers for all choices.',
                    type: 'red',
                  });
                  return false;
                } else {
                  let prob = []
                  for (let i = 1; i < 10; i++) {
                    prob.push(parseInt(document.getElementById('ladderInput' + i).value));
                  }
                  window.expData.postQuestions.push({
                    question: question.title,
                    answer: prob
                  });
                  postQuestions(qNum + 1);
                }
              } else {
                postQuestions(qNum + 1);
              }
            }
          }
        },
        onContentReady: function() {
          let jc = this;
          this.$content.find('form').on('submit', function(e) {
            e.preventDefault();
            jc.$$formSubmit.trigger('click');
          });
        }
      });
    }
  }
  
  function dataToCSV() {
    let csv = "";
    csv += "Prolific ID," + window.expData.proID + '\n';
    csv += `Condition ${window.taskDescription}\n`;
    csv += '\nPrequestion,Answer\n'
    for (i = 0; i < window.expData.preQuestions.length; i++) {
      csv += "\"" + window.expData.preQuestions[i].question + '","' +
        window.expData.preQuestions[i].answer + '"\n';
    }
    csv += '\nPostquestion,Answer\n';
    if (window.expData.postQuestions.length == 0) {
      for (i = 0; i < window.expParam.postQuestions.length; i++) {
        csv += '"' + window.expParam.postQuestions[i].title + '",""\n';
      }
    } else {
      for (i = 0; i < window.expData.postQuestions.length; i++) {
        csv += '"' + window.expData.postQuestions[i].question + '","' +
        window.expData.postQuestions[i].answer + '"\n';
      }
    }
  
    csv += '\nBlock,Box Number,Boxes Opened,Max Value,Box Order,Box Values,Box Set (Randomization),Box Order (Randomization)\n';
    for (let i = 0; i < window.expData.trialData.length; i++) {
      csv += '"' + window.expData.trialData[i].block + '","' + window.expData.trialData[i].trial + '","' + window.expData.trialData[i].boxes + '","' +
      window.expData.trialData[i].max + '","[' + window.expData.trialData[i].order + ']","[' + window.expData.trialData[i].vals + ']","' +
      window.expData.trialData[i].set + '","[' + window.expData.trialData[i].random + ']"\n';
    }
  
    return csv;
  }
  
  // Function partial save
  function saveData(filename, filedata) {
    $.ajax({
      type: 'post',
      cache: false,
      url: './save_data.php', // this is the path to the PHP script
      data: {
        filename: filename,
        filedata: filedata
      },
      success: function(msg) {
        $.confirm({
            title: window.expParam.confirm_popup.title,
            content: window.expParam.confirm_popup.content,
            type: 'blue',
            boxWidth: '55%',
            useBootstrap: false,
            typeAnimated: true,
            buttons: {
              close: {
                text: "Next",
                btnClass: 'btn-blue',
                action: function() {
                  window.location.replace(window.expParam.redirect);
                }
              }
            },
          });
  
        console.log('Data saved');
      },
      error: function(jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });
  }

function getNum(lower, upper) {
  return roundBetter(lower + (Math.random() * (upper - lower)), 0);
}

// Adding cost count element 
function setCostCount(boxDiv) {
  let nDiv = document.createElement('div');
  nDiv.id = "CostCount";
  let nText = document.createTextNode('Cost for this round: ');
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

// Controlling the timer
function cDown(interval) {
  window.timer--;
  document.getElementById("countDown").innerText = window.timer + " seconds";
  if (timer === 0) {
      clearInterval(interval);
      stopSearch();
  }
}

// Function to set up canvas for graph
function setupCanvas(ctx, box, width) {
  let botNum = window.expParam.boxBottom;
  let topNum = window.expParam.boxTop;
  let ticks = window.expParam.ticks;
  let vList = [];

  for (let i = 0; i < window.expParam.amount; i++) {
    vList.push(getNum(box.lower, box.upper));
  }

  let pixPerUnit = (width - 15) / (topNum - botNum);

  //draw bottom line
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, 15);
  ctx.lineTo(width, 15);
  ctx.stroke();

  function drawTick(x, y, len) {
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + len);
    ctx.stroke();
  }

  ctx.textAlign = 'center';
  ctx.font = '12px arial';

  drawTick(5, 15, 5);
  drawTick(width - 10, 15, 5);
  ctx.fillText(botNum, 5, 30);
  ctx.fillText(topNum, width - 10, 30);
  for (let i = 0; i < ticks.length; i++) {
    drawTick(5 + pixPerUnit * ticks[i], 15, 5);
    ctx.fillText(ticks[i], 5 + pixPerUnit * ticks[i], 30);
  }

  //draw top line
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(5, 7);
  ctx.lineTo(width - 10, 7);
  ctx.stroke();

  for (let i = 0; i < vList.length; i++) {
    drawTick(5 + pixPerUnit * vList[i], 1 , 12);
  }
}

function startTrial() {
  const boxDiv = document.getElementById("BoxContainer");
  const instructionText = document.getElementById("instructionText");
  const boxes = window.expParam.boxes[window.blk].sets[window.expData.randomOrder[window.blk][window.trialNumber].set];

  window.boxVals = [];

  // Draw boxes depending on condition 
  if (window.condition === 1 || 
      window.condition === 3 || 
      window.condition === 4) {
    drawBoxes(boxDiv, boxes, getNum);
  }

  // Draw Condition 2 canvas 
  else if (window.condition === 2) {
    drawCanvas(boxDiv, boxes, getNum, setupCanvas);
  }

  // Set instruction text
  instructionText.innerText = window.expParam.instructionText;

  window.boxNum = 0;
  window.maxPoint = 0;
  window.boxOrd = [];

  // Setting StimArea as a grid for conditions 1 and 2
  if (window.condition === 1 || window.condition === 2) {
  document.getElementById("StimArea").style = "display:grid;";
  }
  
  // Start timer
  window.timer = window.expParam.timeDuration;
  document.getElementById("countDown").innerText = window.timer + " seconds";
  let interval = setInterval(() => cDown(interval), 1000);

  // Add element to count cost 
  setCostCount(boxDiv);
  
  let boxList = boxDiv.getElementsByClassName('stimuliButton');
  
  // Setting StimArea as a grid and setting tan and m variables for conditions 3 and 4
  if (window.condition === 3 || window.condition === 4) {
  let n_boxes = boxList.length;
  let m = n_boxes; // how many are ON the circle 
  let tan = Math.tan(Math.PI / m); // tangent of half the base angle
 
  document.getElementById("StimArea").style = `display:grid; --m: ${m}; --tan: ${+tan.toFixed(2)}`;
  }

  for (let i = 0; i < boxList.length; i++) {
    // Draw Condition 4 canvas - changes width according to button size
    if (window.condition === 4) {
      drawCanvas(boxList[i], boxes, i, setupCanvas); 
    }
    boxList[i].onclick = function() {
      if (!this.classList.contains('muted') && !this.classList.contains('mutednew')) {
        this.innerText = this.getAttribute("data-v");

        if (window.maxPoint < parseFloat(this.getAttribute("data-v")))
          window.maxPoint = parseFloat(this.getAttribute("data-v"));
  
          let mlist = document.getElementsByClassName('mutednew');
          for (let j = 0; j < mlist.length; j++) {
            mlist[j].classList.add('muted');
            mlist[j].classList.remove('mutednew');
          }
          this.classList.add("mutednew");
          window.boxNum += 1;
          window.boxOrd.push(this.getAttribute("data-index"));
          document.getElementById("PointCost").innerText = (window.boxNum * window.expParam.searchCost);
        }
      }
    }
  }

function saveTrialData() {
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

function blockReset() {
  window.trialNumber++;
  if (window.trialNumber >= window.expParam.boxes[window.blk].sets.length) {
    window.blk++;
    window.trialNumber = 0;
  }
}

// Function that stops the search
function stopSearch() {    
  // Save trial data
  saveTrialData();

  // End of block reset trial number and tick up block number 
  blockReset();
  
  if (window.blk < window.expParam.boxes.length) { //not last block
  
      //show details
      $.confirm({
        title: "Details from the last round:",
        content: `<strong>Amount Paid to Open Boxes: </strong>${window.boxNum * window.expParam.searchCost}<br><strong>Winnings: </strong>${window.maxPoint}<br><br> Click "NEXT" to continue to the next trial.`,
        type: 'blue',
        boxWidth: '55%',
        useBootstrap: false,
        typeAnimated: true,
        buttons: {
          close: {
            text: "Next",
            btnClass: 'btn-blue',
            action: function() {
              startTrial();
            }
          }
        }
      });
    } else { //last block
      document.getElementById("StimArea").style = "display:none;";
      $.confirm({
        title: "Details from the last round:",
        content: `<strong>Amount Paid to Open Boxes: </strong>${window.boxNum * window.expParam.searchCost}<br><strong>Winnings: </strong>${window.maxPoint}`,
        type: 'blue',
        boxWidth: '55%',
        useBootstrap: false,
        typeAnimated: true,
        buttons: {
          close: {
            text: "Next",
            btnClass: 'btn-blue',
            action: function() {
              setTimeout(function() {
                postQuestions(0);
              }, window.expParam.endFeedbackDuration);
            }
          }
        }
      });
    }
  }
  
  // Function to start experiment
  function startExp() {
    console.log("Experiment Started");
    startTrial();
  }

  // Reset trial and block number 
  function startReset() {
    window.trialNumber = 0;
    window.blk = 0;
  }

  // Randomize boxes by blocks and sets 
  function randomize() {
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

  // Return random condition index 
  function randomizeCondIndex(max) {
    return Math.floor(Math.random() * (max + 1));
}

// Start script
$(document).ready(function() {

    //check device type
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      console.log('Mobile');
      $.confirm({
        title: "Error",
        content: "Please do not use a mobile device for this experiment.",
        type: 'red',
        boxWidth: '55%',
        useBootstrap: false,
        typeAnimated: true,
        buttons: {
          close: {
            text: "Close",
            btnClass: 'btn-blue',
            action: function() {
              return false;
            }
          }
        },
        onOpenBefore: function() {
          // before the modal is displayed.
          this.buttons.close.hide();
        },
      });
    } else { //not mobile
  
      // Set up data collection object
      window.expData = {};
      window.expData.preQuestions = [];
      window.expData.postQuestions = [];
      window.expData.trialData = [];
      window.expData.proID = getParameterByName('PROLIFIC_PID');

      // Choosing condition based on randomized index 
      const availableConditions = window.expParam.conditions;
      const conditionIndex = randomizeCondIndex(availableConditions.length - 1)
      window.condition = availableConditions[conditionIndex];

      // Set parameters for chosen condition 
      setConditionParams();

      // Select first stylesheet/script, create new stylesheet/script 
      const head = document.querySelector('head');
      const indexStyle = head.children[2];
      const style = document.createElement('link');
      const indexScript = head.children[head.children.length - 1];
      const script = document.createElement('script');

      // Insert new stylesheet before first one
      style.rel = 'stylesheet'; 
      style.type = 'text/css';
      style.href = `styles/index-${window.condition}.css`;
      indexStyle.insertAdjacentElement('beforebegin', style);

      // Insert new script before first one
      script.type = 'text/javascript'; 
      script.src = `scripts/index-${window.condition}.js`;
      indexScript.insertAdjacentElement('beforebegin', script);

      script.onload = () => {
      // Reset trial and block number 
      startReset()

      // Randomization
      randomize();

      // Start with first prequestion 
      preQuestions(0);
    };
  }
});
