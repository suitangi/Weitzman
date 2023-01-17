//Helper: shuffle an array
function shuffle(array) {
for (let i = array.length - 1; i > 0; --i) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
}

//Helper: check if array has duplicates
function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

//Helper: check if 2 arrays are the same
function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}
  
  //returns a random number generated by a truncated normal distribution
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

//Helper: Better rounding
function roundBetter(num, place) {
    let mod = Math.pow(10, place);
    return Math.round(num * mod + Math.sign(num) * 0.1 ** (17 - 2 - (Math.round(num * mod) / mod).toString().length)) / mod;
  }
  
//Helper: Get Query
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

  //functions for the prequestions
function preQuestions(qNum) {
    if (qNum == window.expParam.prequestions.length) {
      setTimeout(function() {
        startExp();
      }, 500);
    } else {
      let question = window.expParam.prequestions[qNum],
        keys = ['enter'];
        window.html = '';
      if (question.type == 'textbox') {
        window.html = '<form action="" class="formName">' +
          '<div class="form-group">' +
          '<label>' +
          question.question + '</label>' +
          '<textarea type="text" placeholder="' +
          question.placeholder +
          '" class="textAnswer" style="height: 70px;" required /></textarea>' +
          '</div>' +
          '</form>'
      } else if (question.type == 'choice' || question.type == 'exclusion') {
        window.html = question.question + '<br>';
        for (let i = 0; i < question.choices.length; i++) {
          if (question.choices[i].toLowerCase() != 'other') {
            window.html += '<label class="radioContainer">' +
              question.choices[i] +
              '<input type="radio" name="radio"> <span class="checkmark"></span> </label>'
          } else {
            window.html += '<label class="radioContainer" onclick="otherRadioClick()"><input type="radio" name="radio"><label>Other: <input type="text" class="radioOther"></label><span class="checkmark"></span> </label>'
          }
        }
      } else if (question.type == 'text') {
        window.html = question.question;
      } else if (question.type == "extext") {
        window.html = question.question + '<br>';
        window.tries = 0;
        shuffle(window.expParam.exclusion);
        let qI;
        for (let i = 0; i < window.expParam.exclusion.length; i++) {
          qI = window.expParam.exclusion[i],
            window.html += '<br><br><strong>Question ' + (i + 1) + '</strong><br>' + qI.question + '<br><div class="choiceContainer">';
          for (let j = 0; j < qI.choices.length; j++) {
            window.html += '<label class="radioContainer">' + qI.choices[j] + '<input type="radio" name="radio' + i + '"><span class="checkmark"></span> </label>'
          }
          window.html += '</div>';
        }
      } else if (question.type == 'specialKey') {
        keys = ['p', 'q'];
        window.html = question.question;
      }
      window.preModal = $.confirm({
        title: question.title,
        content: window.html,
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
  
                      if (window.expParam.exclusion[i].correct == j)
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
            console.log(this.buttons.formSubmit.show);
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

//functions for the postquestions
function postQuestions(qNum) {
    if (qNum == window.expParam.postquestions.length) {
      console.log("Experiment Done");
      saveData(new Date().getTime() + "" + Math.floor(Math.random() * 10) + ".csv", dataToCSV());
  
    } else {
      let question = window.expParam.postquestions[qNum];
      window.html = '';
      if (question.type == 'textbox') {
        window.html = '<form action="" class="formName">' +
          '<div class="form-group">' +
          '<label>' +
          question.question + '</label>' +
          '<textarea type="text" placeholder="' +
          question.placeholder +
          '" class="textAnswer" style="height: 70px;" required /></textarea>' +
          '</div>' +
          '</form>'
      } else if (question.type == 'box') {
        window.html = question.question + '<br><table><tbody>';
        for (let i = 0; i < question.boxes.length; i++) {
          window.html += "<tr><td style=\"border: 1px solid #000; padding: 10 50; text-align: center;\">" + question.boxes[i] + "</td>";
          window.html += "<td style=\"padding-left: 50px;\"><input style=\"font-size: 17px; width: 200px;\" type=\"number\" placeholder=\"Textbox\" id=\"boxnum" + i + "\" min=\"1\" max=\"" + question.boxes.length + "\"></td></tr>";
        }
        window.html += "</tbody></table>"
      } else if (question.type == 'choice') {
        window.html = question.question + '<br>';
        for (let i = 0; i < question.choices.length; i++) {
          if (question.choices[i].toLowerCase() != 'other') {
            window.html += '<label class="radioContainer">' +
              question.choices[i] +
              '<input type="radio" name="radio"> <span class="checkmark"></span> </label>'
          } else {
            window.html += '<label class="radioContainer" onclick="otherRadioClick()"><input type="radio" name="radio"><label>Other: <input type="text" class="radioOther"></label><span class="checkmark"></span> </label>'
          }
        }
      } else if (question.type == 'text') {
        window.html = question.question;
      } else if (question.type == "number") {
        window.html = question.question + '<br>' + "<input type=\"number\" id=\"ageInput\" min=\"" + question.min + "\" max=\"" + question.max + "\">";
      } else if (question.type == "ladder") {
        window.html = question.question + '<br><br>';
        for (let i = 1; i < 10; i++) {
          window.html += '<select id=\"ladderInput' + i + '\"><option value=\"-1\">Select a choice</option><option value=\"1\">' + (10 - i) + '0% Chance chance of $1.00</option><option value=\"0\">$0.50 for sure</option></select><br><br>';
        }
      }
      $.confirm({
        title: question.title,
        content: window.html,
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
    window.csv = "";
    window.csv += "Prolific ID," + window.expData.proID + '\n';
    window.csv += '\nPrequestion,Answer\n'
    for (i = 0; i < window.expData.preQuestions.length; i++) {
      window.csv += "\"" + window.expData.preQuestions[i].question + '","' +
        window.expData.preQuestions[i].answer + '"\n';
    }
    window.csv += '\nPostquestion,Answer\n';
    if (window.expData.postQuestions.length == 0) {
      for (i = 0; i < window.expParam.postquestions.length; i++) {
        window.csv += '"' + window.expParam.postquestions[i].title + '",""\n';
      }
    } else {
      for (i = 0; i < window.expData.postQuestions.length; i++) {
        window.csv += '"' + window.expData.postQuestions[i].question + '","' +
          window.expData.postQuestions[i].answer + '"\n';
      }
    }
  
    generateCSV();
  
    return window.csv;
  }
  
  //function partial save
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

function startTrial() {
  window.html = '';
  let boxDiv = document.getElementById("BoxContainer");
  window.boxVals = [];
  drawBoxes(getNum);
  // or drawCanvas(boxDiv, getNum);
    window.boxNum = 0;
    window.maxPoint = 0;
    window.boxOrd = [];

    if (window.expParam.searchCost) {
      window.searchCost = window.expParam.searchCost;
    }

    document.getElementById("instructionText").innerText = window.expParam.instructionText;
  
  // Setting StimArea as a grid 
  document.getElementById("StimArea").style = "display:grid;";
  
    //start timer
    window.timer = window.expParam.timeDuration;
    document.getElementById("countDown").innerText = window.timer + " seconds";
    let interval = setInterval(() => cDown(interval), 1000);

    setCostCount(boxDiv);
  
    let boxList = boxDiv.getElementsByClassName('stimuliButton');
    for (let i = 0; i < boxList.length; i++) {
  
      boxList[i].onclick = function() {
        if (!this.classList.contains('muted') && !this.classList.contains('mutednew')) {
          console.log(this.getAttribute("data-v"));
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
          if (window.searchCost) {
            document.getElementById("PointCost").innerText = (window.boxNum * window.searchCost);
          }
          else {
            window.boxCosts += parseFloat(this.getAttribute("data-c"));
            document.getElementById("PointCost").innerText = window.boxCosts;
          }
        }
      }
    }
  }

//function that controls the timer
function cDown(interval) {
    window.timer--;
    document.getElementById("countDown").innerText = window.timer + " seconds";
    if (timer === 0) {
        clearInterval(interval);
        stopSearch();
    }
}

//function that stops the search
function stopSearch() {    
  //save data
  saveData();

  //end of block reset trialNumber and tick up block number
  window.blk++ 
  // or blockReset
  
  if (window.blk < window.expParam.boxes.length) { //not last block
  
      //show details
      $.confirm({
        title: "Details from the last round:",
        content: window.searchCost ? `<strong>Amount Paid to Open Boxes: </strong>${window.boxNum * window.expParam.searchCost}<br><strong>Winnings: </strong>${window.maxPoint}<br><br> Click "NEXT" to continue to the next trial.`:
        `<strong>Amount Paid to Open Boxes: </strong>${window.boxCosts}<br><strong>Winnings: </strong>${window.maxPoint}<br><br> Click "NEXT" to continue to the next trial.`,
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
        content: window.searchCost ? `<strong>Amount Paid to Open Boxes: </strong>${window.boxNum * window.expParam.searchCost}<br><strong>Winnings: </strong>${window.maxPoint}`:
        `<strong>Amount Paid to Open Boxes: </strong>${window.boxCosts}<br><strong>Winnings: </strong>${window.maxPoint}`,
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
  
  
  //function to start experiment
  function startExp() {
    console.log("Experiment Started");
    startTrial();
  }
 
  //start script
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
  
      //set up data collection object
      window.expData = {};
      window.expData.preQuestions = [];
      window.expData.postQuestions = [];
      window.expData.trialData = [];
      window.expData.proID = getParameterByName('PROLIFIC_PID');

      const head = document.querySelector('head');
      const script = document.createElement('script');
      script.type = 'text/javascript'; 
      script.src = 'index-1';

      // Reset trial and block number 
      window.blk = 0;
      // or startReset

      //randomization
      randomize(shuffle);

      preQuestions(0);
    }
  });
