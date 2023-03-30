window.expParam = {
  boxTop: 200,
  boxBottom: 0,
  bp_amount: 30,
  scatter_amount: 15,
  practice_boxes: [
    [{
      lower: 37,
      upper: 67,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 56,
      upper: 91,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 68,
      upper: 78,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 22,
      upper: 42,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 36,
      upper: 90,
      amount: 30,
      ticks: [50, 100, 150]
    }, ],
    [{
      lower: 42,
      upper: 136,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 77,
      upper: 108,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 97,
      upper: 128,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 30,
      upper: 151,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 50,
      upper: 124,
      amount: 30,
      ticks: [50, 100, 150]
    }, ]
  ],

  boxes: [
    //remove this first box
    /*
    [{
      lower: 55,
      upper: 135,
      bp_amount: 30,
      scatter_amount: 15,
      set: "10",
      box_name: "D",
      box_values: [[106.1054,526.2302,5.135142],[96.66391,343.789,0.542171],[103.8007,364.9001,1.678071],[118.1226,330.9199,2.430661],[103.9415,357.9476,1.553104],[97.98237,445.2231,2.702698],[107.703,394.2583,2.655471],[104.8159,323.6507,0.954602],[120.2594,349.8174,3.022291],[108.6566,419.7276,3.260215],[114.2783,466.6805,4.761437],[76.79256,460.463,0.888517],[113.9513,480.1608,4.998341],[120.4112,335.2783,2.74669],[95.12504,349.0528,0.493559],[129.4973,341.1915,3.773562],[110.1638,366.0595,2.337574],[92.15661,469.7772,2.611205],[99.71411,336.6323,0.704057],[104.6909,496.8075,4.405238],[99.51917,464.8091,3.248098],[82.48515,470.9783,1.668081],[106.3351,475.879,4.151091],[101.3555,493.0833,3.997218],[101.2232,365.311,1.428537],[90.09591,393.462,0.878832],[100.0847,482.2892,3.654257],[125.85,321.2351,3.009707],[114.8446,460.2481,4.689426],[122.3682,436.603,4.968877]],
      ticks: [50, 100, 150]
    }, {
      lower: 79,
      upper: 111,
      bp_amount: 30,
      scatter_amount: 15,
      set: "10",
      box_name: "B",
      box_values: [[129.7443,399.953,4.973488],[122.2893,425.5674,4.740283],[98.65844,631.8515,6.502873],[131.4102,449.4111,6.129246],[97.92796,626.9647,6.332089],[105.4432,559.0825,5.725965],[113.6433,443.9013,4.242356],[102.9559,429.9873,2.895331],[78.79723,557.1546,3.022815],[92.19036,577.6614,4.772264],[131.6961,451.7759,6.205132],[126.3894,410.8548,4.856034],[89.15837,618.2201,5.280239],[90.75454,621.9368,5.51419],[90.65679,499.9461,3.064601],[97.13486,530.0392,4.31427],[86.24259,572.4562,4.073384],[97.46416,616.4709,6.075833],[95.51797,537.8043,4.307883],[116.3931,395.3924,3.547155],[117.0016,380.8672,3.317502],[121.8031,380.3197,3.7867],[93.40831,497.2229,3.285288],[111.7201,395.317,3.078354],[85.87878,635.0299,5.288476],[90.52735,509.4689,3.242113],[107.7484,516.0401,5.095641],[114.3051,446.1691,4.353889],[96.93633,473.2376,3.158386],[137.7989,427.0661,6.321209]],
      ticks: [50, 100, 150]
    }, {
      lower: 76,
      upper: 130,
      bp_amount: 30,
      scatter_amount: 15,
      set: "10",
      box_name: "E",
      box_values: [[123.4116,470.2817,5.746792],[86.04142,710.1838,6.807817],[102.4422,524.7272,4.738762],[97.65889,467.8644,3.123176],[107.6538,391.662,2.59862],[139.1998,438.2135,6.684249],[110.3584,547.2106,5.980049],[91.52652,476.0311,2.673274],[91.3185,481.2388,2.756626],[85.03525,711.3209,6.729942],[72.01582,589.9645,3.000873],[110.1304,539.9967,5.812975],[116.1935,464.7483,4.914317],[123.5033,507.8881,6.508087],[80.072,676.6425,5.54005],[62.95283,620.6101,2.707486],[93.62414,624.5097,5.852607],[90.53307,489.1124,2.835554],[99.04862,478.1432,3.467726],[105.6378,422.7839,3.019461],[115.2405,480.3239,5.13053],[112.8278,540.3103,6.088985],[111.2728,535.2585,5.83245],[99.44864,605.2594,6.050052],[84.73203,561.0086,3.693376],[72.33076,587.5238,2.983553],[106.1152,414.3929,2.899382],[96.99523,414.8616,1.996754],[102.4454,443.5664,3.115866],[105.3585,611.5168,6.766182]],
      ticks: [50, 100, 150]
    }, {
      lower: 40,
      upper: 146,
      bp_amount: 30,
      scatter_amount: 15,
      set: "10",
      box_name: "C",
      box_values: [[103.4503,507.7614,4.500253],[97.19764,546.2856,4.645477],[121.5033,511.6725,6.383778],[117.9207,575.9296,7.310661],[113.2499,480.3412,4.931813],[79.75124,488.0522,1.736167],[132.2724,537.1059,7.969356],[127.8019,486.9206,6.518599],[125.5303,446.1613,5.476261],[83.32675,657.7017,5.486708],[74.79974,552.572,2.531414],[106.585,592.8063,6.514626],[102.7752,616.5325,6.608165],[100.6664,560.1307,5.26925],[131.9246,465.5602,6.503666],[112.3888,489.1459,5.021799],[145.5783,473.694,8.031708],[138.1129,496.9332,7.749955],[81.57791,533.789,2.833571],[102.9403,530.8132,4.910291],[109.2584,615.2624,7.231093],[112.7856,515.403,5.586623],[120.8065,498.8703,6.05806],[85.99567,561.762,3.834808],[96.5348,668.8454,7.030389],[99.04924,678.8907,7.482739],[103.1638,436.6659,3.049693],[71.57157,545.8233,2.073623],[96.23264,679.1483,7.206231],[70.76025,550.1765,2.079556]],
      ticks: [50, 100, 150]
    }, {
      lower: 44,
      upper: 118,
      bp_amount: 30,
      scatter_amount: 15,
      set: "10",
      box_name: "A",
      box_values: [[49.08707,695.5736,2.820179],[123.6406,374.4532,3.853124],[58.88487,666.3049,3.214585],[89.33703,501.6872,2.967448],[104.6585,611.4888,6.695627],[115.2596,616.9228,7.864411],[115.4151,352.1513,2.584539],[98.46592,523.0763,4.308117],[97.76779,414.6098,2.068975],[71.68109,593.3437,3.034983],[48.81282,692.2791,2.726863],[103.0022,410.111,2.502444],[60.58975,629.3293,2.64556],[131.1637,506.7785,7.251936],[100.4655,686.706,7.780672],[114.3055,393.6091,3.302731],[111.526,533.0043,5.812683],[81.68287,638.0851,4.929989],[73.46442,703.6979,5.4204],[120.0654,331.0536,2.627611],[102.7201,503.8843,4.349697],[75.5251,602.4311,3.601133],[85.258,576.9484,4.064769],[113.8304,430.8352,3.999745],[74.43169,607.5904,3.594976],[100.3424,697.9087,7.992416],[122.099,411.1276,4.432451],[111.8349,443.3432,4.050356],[127.765,483.8583,6.453665],[148.846,404.7045,6.978689]],
      ticks: [50, 100, 150]
    }, ]
    */
    [{
      lower: 55,
      upper: 135,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 79,
      upper: 111,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 76,
      upper: 130,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 40,
      upper: 146,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 44,
      upper: 118,
      amount: 30,
      ticks: [50, 100, 150]
    }, ],
    [{
      lower: 45,
      upper: 146,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 81,
      upper: 110,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 98,
      upper: 133,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 28,
      upper: 157,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 40,
      upper: 115,
      amount: 30,
      ticks: [50, 100, 150]
    }, ],
    [{
      lower: 36,
      upper: 121,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 44,
      upper: 113,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 54,
      upper: 117,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 26,
      upper: 126,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 30,
      upper: 105,
      amount: 30,
      ticks: [50, 100, 150]
    }, ],
    [{
      lower: 52,
      upper: 164,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 91,
      upper: 125,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 109,
      upper: 151,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 32,
      upper: 181,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 46,
      upper: 132,
      amount: 30,
      ticks: [50, 100, 150]
    }, ],
    [{
      lower: 41,
      upper: 117,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 49,
      upper: 109,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 57,
      upper: 113,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 32,
      upper: 124,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 34,
      upper: 111,
      amount: 30,
      ticks: [50, 100, 150]
    }, ],
    [{
      lower: 42,
      upper: 122,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 66,
      upper: 98,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 63,
      upper: 117,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 27,
      upper: 133,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 31,
      upper: 105,
      amount: 30,
      ticks: [50, 100, 150]
    }, ],
    [{
      lower: 55,
      upper: 135,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 79,
      upper: 111,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 76,
      upper: 130,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 40,
      upper: 146,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 44,
      upper: 118,
      amount: 30,
      ticks: [50, 100, 150]
    }, ],
    [{
      lower: 45,
      upper: 146,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 81,
      upper: 110,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 98,
      upper: 133,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 28,
      upper: 157,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 40,
      upper: 115,
      amount: 30,
      ticks: [50, 100, 150]
    }, ],
    [{
      lower: 36,
      upper: 121,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 44,
      upper: 113,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 54,
      upper: 117,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 26,
      upper: 126,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 30,
      upper: 105,
      amount: 30,
      ticks: [50, 100, 150]
    }, ],
    [{
      lower: 52,
      upper: 164,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 91,
      upper: 125,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 109,
      upper: 151,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 32,
      upper: 181,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 46,
      upper: 132,
      amount: 30,
      ticks: [50, 100, 150]
    }, ],
    [{
      lower: 41,
      upper: 117,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 49,
      upper: 109,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 57,
      upper: 113,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 32,
      upper: 124,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 34,
      upper: 111,
      amount: 30,
      ticks: [50, 100, 150]
    }, ],
    [{
      lower: 42,
      upper: 122,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 66,
      upper: 98,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 63,
      upper: 117,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 27,
      upper: 133,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 31,
      upper: 105,
      amount: 30,
      ticks: [50, 100, 150]
    }, ],
    //copied blocks start here
    [{
      lower: 42,
      upper: 122,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 66,
      upper: 98,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 63,
      upper: 117,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 27,
      upper: 133,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 31,
      upper: 105,
      amount: 30,
      ticks: [50, 100, 150]
    }, ],
    [{
      lower: 42,
      upper: 122,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 66,
      upper: 98,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 63,
      upper: 117,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 27,
      upper: 133,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 31,
      upper: 105,
      amount: 30,
      ticks: [50, 100, 150]
    }, ],
    [{
      lower: 42,
      upper: 122,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 66,
      upper: 98,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 63,
      upper: 117,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 27,
      upper: 133,
      amount: 30,
      ticks: [50, 100, 150]
    }, {
      lower: 31,
      upper: 105,
      amount: 30,
      ticks: [50, 100, 150]
    }, ]
  ],

  endFeedbackDuration: 1000,
  searchCost: 5,
  timeDuration: 40,
  redirect: "https://app.prolific.co/submissions/complete?cc=19904B25",
  postquestions: [{
    question: "Suppose you were telling another participant how to choose boxes in this task just like you did. Please write out the instructions you would give that person so that they could pick boxes in the same way as you.",
    placeholder: "Enter your answer here.",
    type: 'textbox',
    title: 'Box Instructions'
  }, {
    question: "What is your age?",
    placeholder: " ",
    type: 'number',
    min: 18,
    max: 99,
    title: 'Age'
  }, {
    question: "What is your gender?",
    choices: ["Male", "Female", "Other"],
    type: 'choice',
    title: 'Gender'
  }, {
    question: "What is your highest level of education?",
    choices: ["Less than high school", "High school graduate", "Some college", "2 year degree", "4 year degree", "Professional Degree", "Doctorate"],
    type: 'choice',
    title: 'Education'
  }],
  
  confirm_popup: {
    title: "Submission Complete",
    content: 'Thank you for completing the experiment! Your data has been recorded. Please click "Next" below to continue back to prolific.'
  },
  
  /*
  prequestions: [{
    question: "You are now ready to start the game. You will play 14 rounds of this game.<br>All rounds will have 5 boxes.",
    type: 'text',
    title: 'Game Description'
  }, ],
  */
  
  prequestions: [{
    question: "<strong>Consent for Participation in a Research Study</strong><br>Study Title: Navigation and Searching<br>Principal Investigator: Reid Hastie<br>Student Researcher: Alexander Moore<br>IRB Study Number: IRB21-0114<br><br>DESCRIPTION: We are researchers at the University of Chicago doing a research study about judgment and decision making. In this study you will be given some hypothetical situations and be asked to make some decisions based on the information we provide you. Participation should take about 12 minutes.<br><br>RISKS and BENFITS: The risks to your participation in this online study are those associated with basic computer tasks, including boredom, fatigue, mild stress, or breach of confidentiality. The only benefit to you is the learning experience from participating in a research study. The benefit to society is the contribution to scientific knowledge. <br><br>COMPENSATION: You will be paid $1.68 for participating in this study. If you fail the comprehension test in the early phase of this study or exit the study prior to completion of your own accord, you will not be compensated.<br><br>PLEASE NOTE: This study may contain checks to make sure that participants are finishing the tasks honestly and completely.  As long as you read the instructions and complete the tasks, your Submission will be approved.  If you fail these checks, your Submission will be rejected.<br><br>CONFIDENTIALITY: Your Prolific ID will be used to distribute payment to you but will not be stored with the research data we collect from you.  Please be aware that your Prolific ID can potentially be linked to information about you on your Prolific public profile page, depending on the settings you have for your Prolific profile.  We will not be accessing any personally identifying information about you that you may have put on your Prolific public profile page. Any reports and presentations about the findings from this study will not include your name or any other information that could identify you. We may share the data we collect in this study with other researchers doing future studies – if we share your data, we will not include information that could identify you.<br><br>SUBJECT’S RIGHTS: Your participation is voluntary.  You may stop participating at any time by closing the browser window or the program to withdraw from the study. Partial data will not be analyzed.<br><br>For additional questions about this research, you may contact: <br> <br>Alexander Moore<br>e-mail: akmoore@chicagobooth.edu <br>For questions about your rights as a research participant, you may contact:<br>The Social & Behavioral Sciences Institutional Review Board, University of Chicago    <br>Phone: (773) 834-7835 <br>E-mail: sbs-irb@uchicago.edu<br>",
    choices: ["<b>By clicking this button, you are indicating that you are at least 18 years old, have read and understand this consent form, and you agree to participate in this online research study.</b>"],
    type: 'choice',
    title: 'Consent Information'
  }, {
    question: "Welcome to the study! Please read all the instructions carefully. Please work on a <b>laptop or desktop</b> for the study. Please <b>do not</b> exit or refresh the page while you are working on the study.",
    type: 'text',
    title: 'Welcome'
  }, {	  
	question: "PEZ dispensers are small candy dispensers that come in many shapes. Many people enjoy collecting them. <br><br>You collect PEZ dispensers. Collectors like you frequently find good deals on PEZ dispensers. When you find a good PEZ dispenser, you can either keep it for your own collection or resell it online for a profit.<br><br>PEZ dispensers look like this: <br><img src=\"./img/pez.png\"><br> <br><br> In this study you will be searching different antique shops for PEZ dispensers based on the information that we provide to you.<br><br> You will perform this task several times, so you will search for PEZ dispensers repeatedly. You will earn a bonus based on your choices. So, you should think carefully about each of your choices. <br><br> Please note that there are several comprehension checks in the instructions ahead. We will only exclude you if it is clear that you are not paying attention to instructions. If you are excluded because of incorrect answers to these comprehension questions, we will let you know immediately by ending the study. Also note that some of these comprehension checks may be difficult.<br><br> According to the text above, what will you be doing in this study?<br><br> <strong>Please answer this question carefully as you will be excluded if you get it wrong. Please select the best answer from the choices below:</strong>",
	type: 'exclusion',
    choices: ["Searching for PEZ dispensers", "Rating how much you like different PEZ dispensers", "Playing a game once", "Categorizing PEZ dispensers", "Describing the features you like in PEZ dispensers"],
    correct: 0,
    title: 'Task Description'
  }, 
  {//KAUSHAL - THIS SHOULD BE THE FIRST SET OF QUESTIONS
	  question: "We want you to consider the following shopping situation:<br><br> PEZ dispensers are novelty candy dispensers which come in a variety of forms depicting different characters. They have been in production for almost a century. You can find these collectible PEZ at antique stores. <br><br>There are several antique stores where you consider shopping for PEZ dispensers to add to your collection. Based on your experience, you have expectations about the price and quality of the PEZ dispensers that you are likely to find at each store. However, to know exactly what the price and quality of PEZ dispensers available at each store, you must spend time and effort to visit them.<br><br><strong>The Value of PEZ Dispensers</strong><br><br>The quality and price of a PEZ dispenser determines how much you will value it. The value of PEZ dispensers ranges from 0 to 200, where 0 is the lowest value that a PEZ dispenser can have and 200 is the highest.<br><br>In general, you’re looking for good deals. You want PEZ dispenser of high quality and low price, just like with any other important product you might buy.<br><br>Quality scores range from 0 to 10 and can include things like the rarity and condition of the dispenser. A higher quality score will increase the resale value of a PEZ dispenser.<br><br>Prices of PEZ dispensers range from 3 to 8 dollars. The higher the price, the lower your profits will be from reselling the PEZ dispenser.<br><br>Overall, you can calculate the value of a PEZ dispenser using the following equation that converts prices and quality into profits.<br><br> VALUE = (10 X Quality Score) – (20 X Price) + 160 <br><br> As you can see from the equation, every point of Quality increases the Value of a PEZ dispenser while every increase in price decreases it. <br><br> The graph below shows you what happens to VALUE when we increase the quality of a PEZ dispenser that costs 5. Note that the line sloping upward means that value goes up as quality goes up.<br><img src=\"./img/ValueXQuality.png\"><br><br>The graph below shows you what happens to VALUE when we increase price for a PEZ dispenser with a QUALITY of 5. Note that the line sloping downward means that value goes down as price goes up.<br><img src=\"./img/ValueXPrice.png\"><br><br>Below, we want you to use the equation above to understand how price and quality relate to value.",
    type: 'extext',
    title: 'Task Description',
    scroll: true
  },
  { //KAUSHAL - THIS SHOULD BE THE SECOND SET OF QUESTIONS - THE IMAGE HERE WILL NEED TO CHANGE DEPENDING ON THE CONDITION - IMAGE NAMES intro_image_price_first.png AND intro_image_quality_first.png
    question: "<strong>How you will shop.</strong><br><br>In each search, we will tell you about 5 stores that you can visit to find the best PEZ dispenser. Based on your past experience, you have an idea of the price and quality of PEZ dispensers at a given antique shop.<br><br>For each store, we will give you information like this: <br><img src=\"./img/%%img%%\"><br>Each vertical line in the figures below “PRICE” and “QUALITY” represent the Price and Quality of a single PEZ dispenser that you have found in this store in the past. Recall that you can use the following equation to relate PRICE and QUALITY to VALUE:<br><br>VALUE = (10 X QUALITY Score) – (20 X PRICE) + 160<br><br>The plot on the right shows you the relationship between the PRICE and QUALITY. The height of each point on the graph represents QUALITY. The extent to which a point is to the right or left of the graph indicates a price, where points further to the right are more expensive PEZ dispensers.<br><br>While you can’t know exactly what the PRICE and QUALITY of the PEZ dispenser you will find at a store will be until you visit it, these graphs give you some idea of what you might find. Since you have some idea of the PRICE and QUALITY of items at each store, you also have some idea of the VALUE of the items at each store.<br><br><strong>Here’s how the PEZ Dispenser search works:</strong><br><br>In each search, we are going to show you five stores and give you a chance to visit as many of them as you want. For each store, we will show you a graphic like the one above. For each store, these graphics give you the PRICE and QUALITY of PEZ dispensers you’ve found there in the past in addition to the relationship between PRICE and QUALITY. You can learn more about the exact PRICE and QUALITY of the item at each store by clicking on any of the graphs for that store. Once you click on a graph, you will see the PRICE and QUALITY of the PEZ dispenser at that store.<br><br> You can end a search any time after you look at at least one store (by clicking on at least one graph). To end a search, simply wait until the timer runs out <em><strong>without</strong></em> visiting any other stores.<br><br>When you end a search, you will be rewarded points based on the <em><strong>number</strong></em> of stores you visited and the <em><strong>HIGHEST VALUE</em></strong> (based on PRICE, QUALITY, and the formula above) that you found among the stores you visited. <em><strong>Your points for the search will be the PEZ dispenser with the HIGHEST VALUE that you found  at any of the stores minus 5 points for each store that you visited.</em></strong> You can think of the 5 points it costs you to visit each store as the effort and time that it takes you to go to the store and look through their PEZ dispensers.<br><br> For example, consider the situation where you visit 2 stores and find the following:<br><br> Store 1: Quality = 3.5, Price = 4.50<br><br>Store 2: Quality = 7, Price = 7.25<br><br>Based on the formula above, you could determine that the value of the PEZ dispensers are:<br><br>Store 1: [10*(3.5)] – [20*(4.50)] + 160 = 105 = VALUE<br><br>Store 2: [10*(7.0)] – [20*(7.25)] + 160 = 85 = VALUE<br><br>In this case, the dispenser you found at Store 1 would have a higher value (105 points) so the VALUE of the PEZ dispenser you find in that round will be 95 points. That is 95 (95 points for the highest value PEZ dispenser you found) minus 10 (because you visited 2 stores at a cost of 5 points each).<br><br> Finally, your bonus will be 1% of your winnings from one randomly selected round. For example, if you won 95 points, you would receive a bonus of 95 cents (0.95 USD). <strong>Please note that you MUST click on at least one store in each search. If you fail to visit at least one store in all searches, you will not receive a bonus.</strong>We will now be asking you 7 questions about the task. You must get all 7 questions correct before you can continue.",
    type: 'extext',
    title: 'Task Description',
    pFirstImg: 'intro_image_price_first.png',
    qFirstImg: 'intro_image_quality_first.png',
    scroll: true
  }, { //THE IMAGE HERE WILL NEED TO CHANGE DEPENDING ON THE CONDITION - IMAGE NAMES sc1p_first.png AND sc1q_first.png
    question: "In each round, we will show you a screen like this:<br><img src=\"./img/%%img%%\"><br><br>In the image above, each graph shows you the ratings that people have given this brand of car on a scale from 0 to 200 where higher ratings are better. Each tick on the graph represents one rating.",
    type: 'text',
    title: 'Task Description',
    pFirstImg: 'sc1p_first.png',
    qFirstImg: 'sc1q_first.png',
    scroll: true
  }, { //THE IMAGE HERE WILL NEED TO CHANGE DEPENDING ON THE CONDITION - IMAGE NAMES sc2p_first.png AND sc2q_first.png
    question: "When you click a box, the prize in that box will be displayed. In the image below, we clicked on the 2nd box.<br><img src=\"./img/%%img%%\"><br><br> We will provide you with two additional pieces of information.<br>The first piece is your total search costs. In the image above, this information is in the blue box. <br>The second piece of information is the time you have left in the round. In the image above, this information is in the red box.<br><br> Once you have opened as many boxes as you would like in a round, please wait until the timer runs out. You will automatically be moved to the next round of the game once the timer runs out.",
    type: 'text',
    title: 'Task Description',
    pFirstImg: 'sc2p_first.png',
    qFirstImg: 'sc2q_first.png',
    scroll: true
  }, { //THE IMAGE HERE WILL NEED TO CHANGE DEPENDING ON THE CONDITION - IMAGE NAMES sc3p_first.png AND sc3q_first.png
    question: "In the image below, we have opened 3 boxes.<br><img src=\"./img/%%img%%\"><br><br>The box that you opened most recently (40) is in bold.<br><br> You have accrued 15 points in costs and have 3 seconds until the round ends.<br><br> If you clicked on no more boxes until the timer reached zero, you would receive 80 points minus 15 points in search costs for a total of 65 points.",
    type: 'text',
    title: 'Task Description',
    pFirstImg: 'sc3p_first.png',
    qFirstImg: 'sc3q_first.png',
    scroll: true
  }, { 
    question: "Once the time runs out in a round, we will show you the prize you win and how much it cost you during this round to open boxes as shown below:<br><img src=\"./img/sc4.png\"><br><br>In this case, you won 65 X (80 – 15) in this round. <br><br>If we randomly selected this round to pay you your bonus, you would receive 65 X 0.005 = $0.33 (USD) as a bonus",
    type: 'text',
    title: 'Task Description',
    scroll: true
  }, {
    question: "You are now ready to start the task. You will play 14 rounds of this game.<br>All rounds will have 5 Stores.",
    type: 'text',
    title: 'Task Description'
  }, ],
  
 //KAUSHAL - EVERYTHING BELOW IS THE FIRST SET OF QUESTIONS
exclusion: [{
    question: "You find quality of 0 and a price of 8.00. What is the value?",
    type: 'choice',
    choices: ["0", "80", "100", "120", "200"],
    correct: 0,
    title: 'Comprehension Questions'
  }, {
    question: "You find quality of 10 and a price of 3.00. What is the value?",
    type: 'choice',
    choices: ["0", "80", "100", "120", "200"],
    correct: 4,
    title: 'Comprehension Questions'
  }, {
    question: "You find quality of 5 and a price of 5.50. What is the value?",
    type: 'choice',
    choices: ["0", "80", "100", "120", "200"],
    correct: 2,
    title: 'Comprehension Questions'
  },{
    question: "You find quality of 8 and a price of 6.00. What is the value?",
    type: 'choice',
    choices: ["0", "80", "100", "120", "200"],
    correct: 3,
    title: 'Comprehension Questions'
  }, {
    question: "You find quality of 3 and a price of 5.50. What is the value?",
    type: 'choice',
    choices: ["0", "80", "100", "120", "200"],
    correct: 1,
    title: 'Comprehension Questions'
  },{
    question: "In general, when prices are high and quality is low, value will be:",
    type: 'choice',
    choices: ["High", "Moderate", "Low"],
    correct: 2,
    title: 'Comprehension Questions'
  },{
    question: "In general, when prices are low and quality is high, value will be:",
    type: 'choice',
    choices: ["High", "Moderate", "Low"],
    correct: 0,
    title: 'Comprehension Questions'
  },{
    question: "For the same level of quality, if the price is higher, the value is:",
    type: 'choice',
    choices: ["Higher","Lower","Not enough information to know" ],
    correct: 1,
    title: 'Comprehension Questions'
  },{
    question: "For the same level of price, if the quality is higher, the value is:",
    type: 'choice',
    choices: ["Higher","Lower","Not enough information to know" ],
    correct: 0,
    title: 'Comprehension Questions'
  }],
 //KAUSHAL - EVERYTHING BELOW IS THE SECOND SET OF QUESTIONS
  exclusion2: [{
    question: "How many stores <strong><u>must</u></strong> you visit in each search?",
    type: 'choice',
    choices: ["1 or more", "0 or more", "Exactly 5", "Exactly 3", "3 or more"],
    correct: 0,
    title: 'Comprehension Questions'
  }, {
    question: "You visit 3 stores and do not want to visit any more because you found a PEZ dispenser that you wanted. What should you do?",
    type: 'choice',
    choices: ["Visit as many of the stores as you have time for, even though you don’t want to", "Revisit one of the stores that you already visited", "Hit the back button on your browser", "Wait until the timer runs out without visiting any other stores."],
    correct: 3,
    title: 'Comprehension Questions'
  }, {
    question: "You win 90 points in a round (assume that the cost of visiting stores has already been subtracted). If that round is randomly selected, what will your bonus be?",
    type: 'choice',
    choices: ["$0.90", "$0.45", "$0.00", "$9.00", "$0.50"],
    correct: 1,
    title: 'Comprehension Questions'
  },{
    question: "What happens if you don’t visit at least one store (by clicking on at least one box) in all of the rounds?",
    type: 'choice',
    choices: ["You do not receive a bonus", "Nothing happens"],
    correct: 0,
    title: 'Comprehension Questions'
  }, {
    question: "You visit 3 stores and decide to end the round. Based on the price and quality of the PEZ dispensers you find, you determine that they have values of 55, 45, and 35 out of 200. How many points will you win in this round? (Hint: Remember that it costs you 1 point to visit each store).",
    type: 'choice',
    choices: ["55 points", "45 points", "35 points", "44 points", "52 points"],
    correct: 4,
    title: 'Comprehension Questions'
  },{
    question: "How many points does it cost you to visit each store?",
    type: 'choice',
    choices: ["0 points", "1 point","3 points","5 points","10 points"],
    correct: 1,
    title: 'Comprehension Questions'
  },{
    question: "Which of the following most accurately describes the relationship between price, quality and the value of a PEZ dispenser?",
    type: 'choice',
    choices: ["Value increases when the price of a PEZ dispenser goes up and decreases when the quality of a PEZ dispenser goes up.","Value decreases when the price of a PEZ dispenser goes up and increases when the quality of a PEZ dispenser goes up.", "Value increases when the price of a PEZ dispenser goes up and increases when the quality of a PEZ dispenser goes up.","There is no relationship between value, price, and quality."],
    correct: 1,
    title: 'Comprehension Questions'
  },{
    question: "What do the three graphs in each row of boxes represent?",
    type: 'choice',
    choices: ["The price and quality of PEZ dispensers you have found in the past at that store as well as the relationship between price and quality at that store.","The price and quality of PEZ dispensers that were available at the store last time you were there","The price and quality of all of the antiques sold at the store","Other shoppers’ ratings of the price and quality of items offered at the store" ],
    correct: 0,
    title: 'Comprehension Questions'
  }]
}