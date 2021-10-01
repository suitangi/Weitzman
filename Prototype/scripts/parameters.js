window.expParam = {

  boxes: [
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

  endFeedbackDuration: 1000,
  searchCost: 5,

  postquestions: [
  {
     question: "You have completed the main task. The 5 boxes that you have been opening are presented below. We want to know what you think is the best order in which to open these boxes, in general, to end up with the largest bonus?<br><br>In each of the text boxes please enter a number between 1 and 5, where 1 means “I would open this box first” and 5 means “I would open this box fifth.”",
     type: 'box',
     title: 'Box Preference',
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
      question: "Consent Question",
      choices: ["<b>By clicking this button, you are indicating that you are at least 18 years old, have read and understand this consent form, and you agree to participate in this online research study.</b>"],
      type: 'choice',
      title: 'Study Information'
    }, {
      question: "Welcome to the study! Please read all the instructions carefully. Please work on a <b>laptop or desktop</b> for the study. Please <b>do not</b> exit or refresh the page while you are working on the study.",
      type: 'text',
      title: 'Welcome'
    }, {
      question: "In this study you will be playing a game repeatedly. You will earn a bonus based on your choices in one randomly selected round of the game. So, you should think carefully about each of your choices, because any choice might be the one for which you are paid a bonus. In this section, we will explain the game and explain how you will be paid a bonus. Please note that there are several comprehension checks in the instructions ahead. If you are excluded because of incorrect answers to these comprehension questions, we will let you know immediately by ending the study. Also note that some of these comprehension checks may be difficult. We will only exclude you if it is clear that you are not paying attention to instructions.<br><br>According to the text above, what will you be doing in this study?<br><strong>Please select the best answer from the choices below:</strong><br>",
      type: 'exclusion',
      choices: ["Playing a game repeatedly", "Rating how much you like products repeatedly", "Playing a game once", "Categorizing products repeatedly", "Describing your personal experiences"],
      correct: 0,
      title: 'Task Description'
    }, {
      question: "<strong>In the following game, we would like for you to consider the following situation:</strong><br>You are standing in front of 5 boxes. You know that each box contains a prize, but you don’t know what that prize is. The higher the number of the prize the more valuable it is to you. You do not know the exact value of the prize in the box, but each box has a label on it that tells you your chance of winning prizes of different values.<br>For example, a box might have a label that says that it contains a prize worth some value from 1 through 100.<br><br><strong>Here’s how the game works:</strong><br>In each round, you can open one or more of the boxes, one at a time. Each time you open a box, you pay 5 points. Once you open the box, you can see the prize that it contains.<br>You can end a round after opening one or more boxes. When you end a round, you will win the largest prize that you found so far minus the total amount you paid to open boxes.<br>For example, if you open two boxes with prizes 20 and 70, your winnings for the round are 60. That is 70 (the greater of 20 and 70) minus 10 (remember you opened 2 boxes at a cost of 5 points each).<br>Finally, your bonus will be 0.5% of your winnings from one randomly selected round. For example, if you won 50 points, you would receive a bonus of 25 cents (0.25 USD).",
        type: 'extext',
        title: 'Game Description'
    }, {
      question: "In each round, we will show you a screen like this:<br><img src=\"./img/sc1.png\"><br><br>In the image above, the numbers in the bracket are the minimum and maximum points that you can find in the box. You have an equal chance of finding all values between the minimum and maximum.",
      type: 'text',
      title: 'Game Description'
    }, {
      question: "When you click a box, the prize in that box will be displayed. In the image below, we clicked on the 3rd box.<br><img src=\"./img/sc2.png\"><br><br>Once you click on one box, a stop search button will appear. You can click on this box at any time to end the round and take the highest value prize you have uncovered up to that point.",
      type: 'text',
      title: 'Game Description'
    }, {
      question: "In the image below, we have opened 3 boxes.<br><img src=\"./img/sc3.png\"><br><br>The box that you opened most recently (324) is in bold.",
      type: 'text',
      title: 'Game Description'
    }, {
      question: "Once you click on the “Stop Search” box, we will show you the prize you win and how much it cost you during this round to open boxes as shown below:<br><img src=\"./img/sc4.png\"><br><br>In this case, you won 309 (324 – 15) in this round.",
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
      question: "You open 3 boxes and decide to end the round. In these boxes you find prizes worth 55, 45, and 35 points. How many points will you win in this round?",
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
    }
  ]

}
