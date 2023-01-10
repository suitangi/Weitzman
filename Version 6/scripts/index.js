//Helper: shuffle an array
function shuffle(array) {
  for (var i = array.length - 1; i > 0; --i) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
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

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

//returns a random number generated by a truncated normal distribution
function normal(mean, std, left_trunc, right_trunc) {
  var u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let result = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
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
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
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
      for (var i = 0; i < question.choices.length; i++) {
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
      shuffle(window.expParam.exclusion);
      let qI;
      for (var i = 0; i < window.expParam.exclusion.length; i++) {
        qI = window.expParam.exclusion[i],
        html += '<br><br><strong>Question ' + (i + 1) + '</strong><br>' + qI.question + '<br><div class="choiceContainer">';
        for (var j = 0; j < qI.choices.length; j++) {
            html += '<label class="radioContainer">' + qI.choices[j] + '<input type="radio" name="radio' + i + '"><span class="checkmark"></span> </label>'
        }
        html += '</div>';
      }
    } else if (question.type == 'specialKey') {
      keys = ['p', 'q'];
      html = question.question;
    }
    $.confirm({
      title: question.title,
      content: html,
      type: 'blue',
      boxWidth: '55%',
      useBootstrap: false,
      typeAnimated: true,
      buttons: {
        formSubmit: {
          text: 'Next',
          btnClass: 'btn-blue',
          keys: keys,
          action: function() {
            if (question.type == 'textbox') {
              var textAns = this.$content.find('.textAnswer').val();
              if (!textAns && question.required) {
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

              var choiceList = this.$content.find($('.choiceContainer'));
              var radioList, exCheck = [];
              window.tries += 1;

              for (var i = 0; i < choiceList.length; i++) {
                exCheck.push(i + 1);
                radioList = choiceList[i].getElementsByClassName('radioContainer');
                for (var j = 0; j < radioList.length; j++) {
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
              var radioList = this.$content.find($('.radioContainer'));
              for (var j = 0; j < radioList.length; j++) {
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
              var radioList = this.$content.find($('.radioContainer'));
              for (var j = 0; j < radioList.length; j++) {
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
        var jc = this;
        this.$content.find('form').on('submit', function(e) {
          e.preventDefault();
          jc.$$formSubmit.trigger('click');
        });
      },
      onOpenBefore: function() {
        if (question.type == 'specialKey') {
          this.buttons.formSubmit.hide();
        }
      }
    });
  }
}

//functions for the prequestions
function postQuestions(qNum) {
  if (qNum == window.expParam.postquestions.length) {
    console.log("Experiment Done");
    saveData(new Date().getTime() + "" + Math.floor(Math.random() * 10) + ".csv", dataToCSV());

  } else {
    let question = window.expParam.postquestions[qNum],
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
      for (var i = 0; i < question.boxes.length; i++) {
        html += "<tr><td style=\"border: 1px solid #000; padding: 10 50; text-align: center;\">" + question.boxes[i] + "</td>";
        html += "<td style=\"padding-left: 50px;\"><input style=\"font-size: 17px; width: 200px;\" type=\"number\" placeholder=\"Textbox\" id=\"boxnum" + i + "\" min=\"1\" max=\"" + question.boxes.length + "\"></td></tr>";
      }
      html += "</tbody></table>"
    } else if (question.type == 'choice') {
      html = question.question + '<br>';
      for (var i = 0; i < question.choices.length; i++) {
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
      for (var i = 1; i < 10; i++) {
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
      buttons: {
        formSubmit: {
          text: 'Next',
          btnClass: 'btn-blue',
          keys: ['enter'],
          action: function() {
            if (question.type == 'textbox') {
              var textAns = this.$content.find('.textAnswer').val();
              if (!textAns && question.required) {
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
              for (var i = 0; i < question.boxes.length; i++) {
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
              var radioList = this.$content.find($('.radioContainer'));
              for (var j = 0; j < radioList.length; j++) {
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
              var textAns = this.$content.find('#ageInput').val();
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
              var ans = true;
              for (var i = 1; i < 10; i++) {
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
                for (var i = 1; i < 10; i++) {
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
        var jc = this;
        this.$content.find('form').on('submit', function(e) {
          e.preventDefault();
          jc.$$formSubmit.trigger('click');
        });
      }
    });
  }
}

function dataToCSV() {
  var csv = "";
  csv += "Prolific ID," + window.expData.proID + '\n';
  csv += '\nPrequestion,Answer\n'
  for (i = 0; i < window.expData.preQuestions.length; i++) {
    csv += "\"" + window.expData.preQuestions[i].question + '","' +
      window.expData.preQuestions[i].answer + '"\n';
  }
  csv += '\nPostquestion,Answer\n';
  if (window.expData.postQuestions.length == 0) {
    for (i = 0; i < window.expParam.postquestions.length; i++) {
      csv += '"' + window.expParam.postquestions[i].title + '",""\n';
    }
  } else {
    for (i = 0; i < window.expData.postQuestions.length; i++) {
      csv += '"' + window.expData.postQuestions[i].question + '","' +
        window.expData.postQuestions[i].answer + '"\n';
    }
  }

  csv += '\nBlock,Boxes Opened,Total Cost,Max Value,Box Order,Box Values,Box Set (Randomization),Box Order (Randomization)\n';
  for (i = 0; i < window.expData.trialData.length; i++) {
    csv += '"' + (i + 1) + '","' + window.expData.trialData[i].boxes + '","' + window.expData.trialData[i].cost + '","' +
      window.expData.trialData[i].max + '","[' + window.expData.trialData[i].order + ']","[' + window.expData.trialData[i].vals + ']","' + window.expData.randomOrder[i].set + '","[' + window.expData.randomOrder[i].boxes + ']"\n';
  }

  return csv;
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
  let html = '';
  let v;
  window.boxVals = [];
  window.boxCosts = 0;
  let b;
  for (var i = 0; i < window.expParam.boxes[window.expData.randomOrder[window.blk].set].length; i++) {
    b = window.expParam.boxes[window.expData.randomOrder[window.blk].set][window.expData.randomOrder[window.blk].boxes[i]];
    v = getNum(b.lower, b.upper);
    html += '<button class="stimuliButton" data-index="' + (i + 1) + '" data-v="' + v + '" data-c="' + b.cost + '"> [' +
      b.lower + ', ' + b.upper + '] </button>';
    window.boxVals.push(v);
  }
  window.boxNum = 0;
  window.maxPoint = 0;
  window.boxOrd = [];

  //document.getElementById("searchCost").innerText = window.expParam.searchCost;
  
  // Setting StimArea as a grid 
  document.getElementById("StimArea").style = "display:grid;";

  //start timer
  window.timer = window.expParam.timeDuration;
  document.getElementById("countDown").innerText = window.timer + " seconds";
  function cDown() {
    window.timer --;
    document.getElementById("countDown").innerText = window.timer + " seconds";
    if (window.timer == 0) {
      stopSearch();
    } else {
      setTimeout(function() {
        cDown();
      }, 1000);
    }
  }
  setTimeout(function() {
    cDown();
  }, 1000);

  html += '<div id="CostCount">Total cost for this round: <span id="PointCost">0</span> points</div>';

  let boxDiv = document.getElementById("BoxContainer");
  boxDiv.innerHTML = html;

  let boxList = boxDiv.getElementsByClassName('stimuliButton');
  for (var i = 0; i < boxList.length; i++) {

    boxList[i].onclick = function() {
      if (!this.classList.contains('muted') && !this.classList.contains('mutednew')) {
        console.log(this.getAttribute("data-v"));
        this.innerText = this.getAttribute("data-v");

        if (window.maxPoint < parseFloat(this.getAttribute("data-v")))
          window.maxPoint = parseFloat(this.getAttribute("data-v"));

        var mlist = document.getElementsByClassName('mutednew');
        for (var j = 0; j < mlist.length; j++) {
          mlist[j].classList.add('muted');
          mlist[j].classList.remove('mutednew');
        }
        this.classList.add("mutednew");
        window.boxNum += 1;
        window.boxOrd.push(this.getAttribute("data-index"));
        window.boxCosts += parseFloat(this.getAttribute("data-c"));
        document.getElementById("PointCost").innerText = window.boxCosts;
      }
      // if (window.boxNum == window.expParam.boxes.length) {
      //   setTimeout(function() {
      //     postQuestions(0);
      //   }, window.expParam.endFeedbackDuration);
      // }
    } //end for
  }
}

//function that stops the search
function stopSearch() {

  window.blk++;

  //save data
  window.expData.trialData.push({
    boxes: window.boxNum,
    max: window.maxPoint,
    order: window.boxOrd,
    vals: window.boxVals,
    cost: window.boxCosts
  });


  if (window.blk < window.expParam.boxes.length) {

    //show details
    $.confirm({
      title: "Details from the last round:",
      content: '<strong>Amount Paid to Open Boxes: </strong>' + window.boxCosts  + '<br><strong>Winnings: </strong>' + (window.maxPoint) + '<br><br> Click "NEXT" to continue to the next trial.',
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
    $.confirm({
      title: "Details from the last round:",
      content: '<strong>Amount Paid to Open Boxes: </strong>' + window.boxCosts + '<br><strong>Winnings: </strong>' + window.maxPoint,
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
              document.getElementById("StimArea").style = "display:none;";
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

    window.blk = 0;

    //randomization
    window.expData.randomOrder = [];
    var tmpList;
    for (var i = 0; i < window.expParam.boxes.length; i++) {
      tmpList = [];
      for (var j = 0; j < window.expParam.boxes[i].length; j++) {
        tmpList.push(j);
      }
      shuffle(tmpList);
      window.expData.randomOrder.push({
        set: i + window.expParam.practice_boxes.length,
        boxes: [...tmpList]
      });
    }
    shuffle(window.expData.randomOrder);

    for (var i = window.expParam.practice_boxes.length - 1; i >= 0 ; i--) {
      tmpList = [];
      for (var j = 0; j < window.expParam.practice_boxes[i].length; j++) {
        tmpList.push(j);
      }
      shuffle(tmpList);
      window.expData.randomOrder.unshift({
        set: i,
        boxes: [...tmpList]
      });
      window.expParam.boxes.unshift(window.expParam.practice_boxes[i]);
    }

    preQuestions(0);
  }
});
