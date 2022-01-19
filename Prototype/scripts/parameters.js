window.expParam = {
  practice_boxes: [
    [
      {
        lower: 35,
        upper: 40
      }, {
        lower: 65,
        upper: 70
      }, {
        lower: 80,
        upper: 180
      }, {
        lower: 75,
        upper: 95
      }, {
        lower: 250,
        upper: 340
      },
    ], [
      {
        lower: 50,
        upper: 60
      }, {
        lower: 95,
        upper: 110
      }, {
        lower: 105,
        upper: 160
      }, {
        lower: 175,
        upper: 195
      }, {
        lower: 450,
        upper: 540
      },
    ]
  ],

  boxes: [
    [
      {
        lower: 55,
        upper: 135
      }, {
        lower: 79,
        upper: 111
      }, {
        lower: 76,
        upper: 130
      }, {
        lower: 40,
        upper: 146
      }, {
        lower: 44,
        upper: 118
      },
    ], [
      {
        lower: 45,
        upper: 146
      }, {
        lower: 81,
        upper: 110
      }, {
        lower: 98,
        upper: 133
      }, {
        lower: 28,
        upper: 157
      }, {
        lower: 40,
        upper: 115
      },
    ], [
      {
        lower: 36,
        upper: 121
      }, {
        lower: 44,
        upper: 113
      }, {
        lower: 54,
        upper: 117
      }, {
        lower: 26,
        upper: 126
      }, {
        lower: 30,
        upper: 105
      },
    ], [
      {
        lower: 52,
        upper: 164
      }, {
        lower: 91,
        upper: 125
      }, {
        lower: 109,
        upper: 151
      }, {
        lower: 32,
        upper: 181
      }, {
        lower: 46,
        upper: 132
      },
    ], [
      {
        lower: 41,
        upper: 117
      }, {
        lower: 49,
        upper: 109
      }, {
        lower: 57,
        upper: 113
      }, {
        lower: 32,
        upper: 124
      }, {
        lower: 34,
        upper: 111
      },
    ], [
      {
        lower: 42,
        upper: 122
      }, {
        lower: 66,
        upper: 98
      }, {
        lower: 63,
        upper: 117
      }, {
        lower: 27,
        upper: 133
      }, {
        lower: 31,
        upper: 105
      },
    ], [
      {
        lower: 55,
        upper: 135
      }, {
        lower: 79,
        upper: 111
      }, {
        lower: 76,
        upper: 130
      }, {
        lower: 40,
        upper: 146
      }, {
        lower: 44,
        upper: 118
      },
    ], [
      {
        lower: 45,
        upper: 146
      }, {
        lower: 81,
        upper: 110
      }, {
        lower: 98,
        upper: 133
      }, {
        lower: 28,
        upper: 157
      }, {
        lower: 40,
        upper: 115
      },
    ], [
      {
        lower: 36,
        upper: 121
      }, {
        lower: 44,
        upper: 113
      }, {
        lower: 54,
        upper: 117
      }, {
        lower: 26,
        upper: 126
      }, {
        lower: 30,
        upper: 105
      },
    ], [
      {
        lower: 52,
        upper: 164
      }, {
        lower: 91,
        upper: 125
      }, {
        lower: 109,
        upper: 151
      }, {
        lower: 32,
        upper: 181
      }, {
        lower: 46,
        upper: 132
      },
    ], [
      {
        lower: 41,
        upper: 117
      }, {
        lower: 49,
        upper: 109
      }, {
        lower: 57,
        upper: 113
      }, {
        lower: 32,
        upper: 124
      }, {
        lower: 34,
        upper: 111
      },
    ], [
      {
        lower: 42,
        upper: 122
      }, {
        lower: 66,
        upper: 98
      }, {
        lower: 63,
        upper: 117
      }, {
        lower: 27,
        upper: 133
      }, {
        lower: 31,
        upper: 105
      },
    ]
  ],

  endFeedbackDuration: 1000,
  searchCost: 5,
  timeDuration: 20,

  postquestions: [
  {
     question: "You have completed the main task. The 5 boxes that you have been opening are presented below. We want to know what you think is the best order in which to open these boxes, in general, to end up with the largest bonus?<br><br>In each of the text boxes please enter a number between 1 and 5, where 1 means “I would open this box first” and 5 means “I would open this box fifth.”",
     type: 'box',
     title: '',
     boxes: ["35, 40", "65, 70", "80, 180", "75, 95", "250, 340"]
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
    title: "Submission Complete!",
    content: "Thank you for completing the experiment!"
  },

  prequestions: [{
      question: "<strong>Consent for Participation in a Research Study</strong><br>Study Title: Navigation and Searching<br>Principal Investigator: Reid Hastie<br>Student Researcher: Alexander Moore<br>IRB Study Number: IRB21-0114<br><br>DESCRIPTION: We are researchers at the University of Chicago doing a research study about judgment and decision making. In this study you will be given some hypothetical situations and be asked to make some decisions based on the information we provide you. Participation should take about 12 minutes.<br><br>RISKS and BENFITS: The risks to your participation in this online study are those associated with basic computer tasks, including boredom, fatigue, mild stress, or breach of confidentiality. The only benefit to you is the learning experience from participating in a research study. The benefit to society is the contribution to scientific knowledge. <br><br>COMPENSATION: You will be paid $1.68 for participating in this study. If you fail the comprehension test in the early phase of this study or exit the study prior to completion of your own accord, you will not be compensated.<br><br>PLEASE NOTE: This study may contain checks to make sure that participants are finishing the tasks honestly and completely.  As long as you read the instructions and complete the tasks, your Submission will be approved.  If you fail these checks, your Submission will be rejected.<br><br>CONFIDENTIALITY: Your Prolific ID will be used to distribute payment to you but will not be stored with the research data we collect from you.  Please be aware that your Prolific ID can potentially be linked to information about you on your Prolific public profile page, depending on the settings you have for your Prolific profile.  We will not be accessing any personally identifying information about you that you may have put on your Prolific public profile page. Any reports and presentations about the findings from this study will not include your name or any other information that could identify you. We may share the data we collect in this study with other researchers doing future studies – if we share your data, we will not include information that could identify you.<br><br>SUBJECT’S RIGHTS: Your participation is voluntary.  You may stop participating at any time by closing the browser window or the program to withdraw from the study. Partial data will not be analyzed.<br><br>For additional questions about this research, you may contact: <br> <br>Alexander Moore<br>e-mail: akmoore@chicagobooth.edu <br>For questions about your rights as a research participant, you may contact:<br>The Social & Behavioral Sciences Institutional Review Board, University of Chicago    <br>Phone: (773) 834-7835 <br>E-mail: sbs-irb@uchicago.edu<br>",
      choices: ["<b>By clicking this button, you are indicating that you are at least 18 years old, have read and understand this consent form, and you agree to participate in this online research study.</b>"],
      type: 'choice',
      title: 'Consent Information'
    }, {
      question: "Welcome to the study! Please read all the instructions carefully. Please work on a <b>laptop or desktop</b> for the study. Please <b>do not</b> exit or refresh the page while you are working on the study.",
      type: 'text',
      title: 'Welcome'
    }, {
      question: "In this study you will be playing a game repeatedly. You will earn a bonus based on your choices in one randomly selected round of the game. So, you should think carefully about each of your choices, because any choice might be the one for which you are paid a bonus. In this section, we will explain the game and explain how you will be paid a bonus. Please note that there are several comprehension checks in the instructions ahead. If you are excluded because of incorrect answers to these comprehension questions, we will let you know immediately by ending the study. Also note that some of these comprehension checks may be difficult. We will only exclude you if it is clear that you are not paying attention to instructions.<br><br>According to the text above, what will you be doing in this study?<br><strong>Please answer this question carefully as you will be excluded if you get it wrong. Please select the best answer from the choices below:</strong><br>",
      type: 'exclusion',
      choices: ["Playing a game repeatedly", "Rating how much you like products repeatedly", "Playing a game once", "Categorizing products repeatedly", "Describing your personal experiences"],
      correct: 0,
      title: 'Task Description'
    }, {
      question: "<strong>In the following game, we would like for you to consider the following situation:</strong><br>You are standing in front of 5 boxes. You know that each box contains a prize, but you don’t know what that prize is. The higher the number of the prize the more valuable it is to you. You do not know the exact value of the prize in the box, but each box has a label on it that tells you your chance of winning prizes of different values.<br><br>For example, a box might have a label that says that it contains a prize worth some value from 1 through 100.<br><br><strong>Here’s how the game works:</strong><br>In each round, you can open one or more of the boxes, one at a time. Each time you open a box, you pay 5 points. Once you open the box, you can see the prize that it contains.<br><br>You can end a round after opening one or more boxes. When you end a round, you will win the largest prize that you found so far minus the total amount you paid to open boxes.<br><br>For example, if you open two boxes with prizes 20 and 70, your winnings for the round are 60. That is 70 (the greater of 20 and 70) minus 10 (remember you opened 2 boxes at a cost of 5 points each).<br><br>Finally, your bonus will be 0.5% of your winnings from one randomly selected round. For example, if you won 50 points, you would receive a bonus of 25 cents (0.25 USD).<br><br>We will now be asking you 5 questions about the task. You must get all 5 questions correct before you can continue.",
        type: 'extext',
        title: 'Game Description'
    }, {
      question: "In each round, we will show you a screen like this:<br><img src=\"./img/sc1.png\"><br><br>In the image above, the numbers in the bracket are the minimum and maximum points that you can find in the box. You have an equal chance of finding all values between the minimum and maximum.",
      type: 'text',
      title: 'Game Description'
    }, {
      question: "When you click a box, the prize in that box will be displayed. In the image below, we clicked on the 3rd box.<br><img src=\"./img/sc2.png\"><br><br> We will provide you with two additional pieces of information.<br>The first piece is your total search costs. In the image above, this information is in the blue box. <br>The second piece of information is the time you have left in the round. In the image above, this information is in the red box.<br><br> Once you have opened as many boxes as you would like in a round, please wait until the timer runs out. You will automatically be moved to the next round of the game once the timer runs out.",
      type: 'text',
      title: 'Game Description'
    }, {
      question: "In the image below, we have opened 3 boxes.<br><img src=\"./img/sc3.png\"><br><br>The box that you opened most recently (70) is in bold.<br><br> You have accrued 15 points in costs and have 9 seconds until the round ends.<br><br> If you clicked on no more boxes until the timer reached zero, you would receive 324 points minus 15 points in search costs for a total fo 309 points.",
      type: 'text',
      title: 'Game Description'
    }, {
      question: "Once the time runs out in a round, we will show you the prize you win and how much it cost you during this round to open boxes as shown below:<br><img src=\"./img/sc4.png\"><br><br>In this case, you won 309 (324 – 15) in this round. <br><br>If we randomly selected this round to pay you your bonus, you would receive 309 * 0.005 = $1.55 (USD) as a bonus",
      type: 'text',
      title: 'Game Description'
    }, {
      question: "You are now ready to start the game. You will play X rounds of this game.<br>All rounds will have 5 boxes.",
      type: 'text',
      title: 'Game Description'
    },
  ],

  exclusion: [{
      question: "How many boxes can you open?",
      type: 'choice',
      choices: ["1 or more", "0 or more", "Exactly 5", "Exactly 3", "3 or more"],
      correct: 0,
      title: 'Comprehension Questions'
    }, {
      question: "How many points does it cost you to open each box?",
      type: 'choice',
      choices: ["0 points", "1 point", "3 points", "5 points", "10 points"],
      correct: 3,
      title: 'Comprehension Questions'
    }, {
      question: "You open 3 boxes and decide to end the round. In these boxes you find prizes worth 55, 45, and 35 points. How many points will you win in this round? (Hint: Remember that it costs you 5 points to open each box)",
      type: 'choice',
      choices: ["55 points", "40 points", "35 points", "20 points", "135 points"],
      correct: 1,
      title: 'Comprehension Questions'
    }, {
      question: "You win 90 points in a round. If that round is randomly selected, what will your bonus be?",
      type: 'choice',
      choices: ["$0.90", "$0.45", "$0.00", "$9.00", "$0.50"],
      correct: 1,
      title: 'Comprehension Questions'
    }, {
      question: "Imagine that you have opened 3 boxes and do not want to open any more. What should you do?",
      type: 'choice',
      choices: ["Wait until the timer runs out without opening the other 2 boxes.", "Open the 2 remaining boxes even though you don't want to.", "Click on the boxes that you have already opened", "Hit the back button on your browser."],
      correct: 0,
      title: 'Comprehension Questions'
    }
  ]

}
