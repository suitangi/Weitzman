function dataToCSV() {
  let csv = "";
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
      window.expData.trialData[i].max + '","[' + window.expData.trialData[i].order + ']","[' + window.expData.trialData[i].vals + 
      ']","' + window.expData.randomOrder[i].set + '","[' + window.expData.randomOrder[i].boxes + ']"\n';
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


