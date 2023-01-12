window.expParam = {
  boxTop: 200,
  boxBottom: 0,

  boxes: [{
    name: "practice",
    sets: [
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
      }, ]
    ]
  }, {
    name: "early",
    sets: [
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
      }, ]
	  ]
  }],

  endFeedbackDuration: 1000,
  searchCost: 5,
  timeDuration: 20,
  redirect: "https://app.prolific.co/submissions/complete?cc=19904B25",
  postquestions: [{
    question: "Thank you for participating in our study!",
    type: 'text',
    title: 'Task Description',
	scroll: true
  }, ],

  confirm_popup: {
    title: "Submission Complete",
    content: 'Thank you for completing the experiment! Your data has been recorded. Please click "Next" below to continue back to prolific.'
  },

  prequestions: [{
    question: "<strong>Consent for Participation in a Research Study</strong><br>Study Title: Navigation and Searching<br>Principal Investigator: Reid Hastie<br>Student Researcher: Alexander Moore<br>IRB Study Number: IRB21-0114<br><br>DESCRIPTION: We are researchers at the University of Chicago doing a research study about judgment and decision making. In this study you will be given some hypothetical situations and be asked to make some decisions based on the information we provide you. Participation should take about 15 minutes.<br><br>RISKS and BENFITS: The risks to your participation in this online study are those associated with basic computer tasks, including boredom, fatigue, mild stress, or breach of confidentiality. The only benefit to you is the learning experience from participating in a research study. The benefit to society is the contribution to scientific knowledge. <br><br>COMPENSATION: You will be paid at the standard CDR labs rate for participating in this study. <br><br>CONFIDENTIALITY: Identifiable data will never be shared outside the research team. De-identified information from this study may be used for future research studies or shared with other researchers for future research without your additional informed consent.<br><br>SUBJECT’S RIGHTS: Your participation is voluntary.  You may stop participating at any time by closing the browser window or the program to withdraw from the study. Partial data will not be analyzed.<br><br>For additional questions about this research, you may contact: <br> <br>Alexander Moore<br>e-mail: akmoore@chicagobooth.edu <br>For questions about your rights as a research participant, you may contact:<br>The Social & Behavioral Sciences Institutional Review Board, University of Chicago    <br>Phone: (773) 834-7835 <br>E-mail: sbs-irb@uchicago.edu<br>",
    choices: ["<b>By clicking this button, you are indicating that you are at least 18 years old, have read and understand this consent form, and you agree to participate in this online research study.</b>"],
    type: 'choice',
    title: 'Consent Information'
  },{
    question: "Please ask the experimenter for your ID number and enter it here",
    placeholder: "Enter your answer here.",
    type: 'textbox',
    title: 'ID Number'
  }, {
    question: "In this study you will be shopping for cars.  When you are shopping, we will ask you to look for a good product based on some information that we provide you. You will earn a bonus based on your choices in one randomly selected round of shopping. So, you should think carefully about each of your choices, because any choice might be the one for which you are paid a bonus.<br><br> As you are shopping, the experimenter will ask you questions that you will answer verbally. The experimenter will explain how this works after you learn more about the task. <br><br> In the following section, we will explain the this shopping task and explain how you will be paid a bonus. Please note that there are several comprehension checks in the instructions ahead.",
    type: 'text',
    title: 'Task Description',
	scroll: true
  }, {
    question: "<strong>In the following task, we would like for you to consider the following shopping situation:</strong><br><br>You are shopping for a new car. There are five cars that you are considering that all cost the same. For each car, you can drive an hour to a dealership and test drive the car to get a sense for how you like the car. You don’t know how much you are going to like a car until you test drive it, but you do know the ratings that other people have given the car.<br><br>People have rated each of the cars on a 200 point scale, where 0 means that a car is the worst that the person has ever driven and 200 means that it is the best. These user ratings for each car are presented using a graphic like the one below:<br><img src=\"./img/sc5.png\"><br>In the example above, you can see that on the scale from 0 to 200, all ratings fall between roughly 30 points and 100 points.<br><br><strong>Here’s how the shopping task works:</strong><br>In each round, we are going to have you look at up to 5 cars. For each car, we will give you ratings like those shown in the box above. You can test drive one or more of the cars by clicking on these graphs, one at a time. Once you click on a graph, you will see how much you like the car after test driving it on a scale from 0 to 200.<br><br>You can end a round after you test drive at least one car. To end a round, click on the continue button <em><strong>without</strong></em> test driving any of the other cars.<br><br>When you end a round, you will be rewarded points based on the highest rating you found after test driving a car and the number of test drives that you did. <strong>Your points for the round will be the value of the highest rated car among your those that you took for a test drive <u>minus</u> 5 points for each car that you took for a test drive</strong>. You can think of the 5 points it costs to test drive each car as the effort, time, and money that it takes you to drive an hour to the dealership and test drive a car. You can think of the value of the car as indicating how much you would like that car if you ended up buying the car for your own use.<br><br>For example, if you test drive 2 cars and are told that they are worth 20 points and 70 points, your winnings for the round will be 60 points. That is 70 (70 points for the highest value car you found) minus 10 (remember you took 2 cars for a test drive at a cost of 5 points each)<br><br>Finally, your bonus will be 1% of your winnings from one randomly selected round. For example, if you won 50 points, you would receive a bonus of 25 cents (0.25 USD). <strong>Please note that you MUST test drive at least one car in each round. If you fail to test drive at least one car in all rounds, you will not receive a bonus.</strong><br><br>We will now be asking you 5 questions about the task. You must get all 5 questions correct before you can continue.",
    type: 'extext',
    title: 'Task Description',
    scroll: true
  }, {
    question: "In each round, we will show you a screen like this:<br><img src=\"./img/sc1.png\"><br><br>In the image above, each graph shows you the ratings that people have given this brand of car on a scale from 0 to 200 where higher ratings are better. Each tick on the graph represents one rating.",
    type: 'text',
    title: 'Task Description',
    scroll: true
  }, {
    question: "When you click a box, the prize in that box will be displayed. In the image below, we clicked on the 2nd box.<br><img src=\"./img/sc2.png\"><br><br> We will provide you with one additional piece of information. In the image above, this information is in the blue box. <br>Once you have opened as many boxes as you would like in a round, please let the experimenter know before clicking continue.",
    type: 'text',
    title: 'Task Description',
    scroll: true
  }, {
    question: "In the image below, we have opened 3 boxes.<br><img src=\"./img/sc3.png\"><br><br>The box that you opened most recently (40) is in bold.<br><br> You have accrued 15 points in costs and have 3 seconds until the round ends.<br><br> If you clicked on no more boxes and clicked continue, you would receive 80 points minus 15 points in search costs for a total of 65 points.",
    type: 'text',
    title: 'Task Description',
    scroll: true
  }, {
    question: "Once the time runs out in a round, we will show you the prize you win and how much it cost you during this round to open boxes as shown below:<br><img src=\"./img/sc4.png\"><br><br>In this case, you won 65 (that is 80 – 15) in this round. <br><br>If we randomly selected this round to pay you your bonus, you would receive 65 X 0.01 = $0.65 (USD) as a bonus",
    type: 'text',
    title: 'Task Description',
    scroll: true
  }, {
    question: "You have now learned about the shopping task. You will conduct 5 searches plus one practice search beforehand.<br>All searches will have 5 boxes. Before you continue, the experimenter will explain a few more details of the task.",
    type: 'text',
    title: 'Task Description'
  }, ],

  exclusion: [{
    question: "How many cars <strong><u>must</u></strong> you test drive?",
    type: 'choice',
    choices: ["1 or more", "0 or more", "Exactly 5", "Exactly 3", "3 or more"],
    correct: 0,
    title: 'Comprehension Questions'
  }, {
    question: "How many points does each test drive cost you?",
    type: 'choice',
    choices: ["0 points", "1 point", "3 points", "5 points", "10 points"],
    correct: 3,
    title: 'Comprehension Questions'
  }, {
    question: "You test drive 3 cars and decide to end the round. You value the cars you drove at 55, 45, and 35 out of 200. How many points will you win in this round? (Hint: Remember that it costs you 5 points to test drive each car).",
    type: 'choice',
    choices: ["55 points", "40 points", "35 points", "20 points", "135 points"],
    correct: 1,
    title: 'Comprehension Questions'
  }, {
    question: "You win 90 points in a round. If that round is randomly selected, what will your bonus be?",
    type: 'choice',
    choices: ["$0.90", "$0.45", "$0.00", "$9.00", "$0.50"],
    correct: 0,
    title: 'Comprehension Questions'
  }, {
    question: "What do the graphs in each box represent?",
    type: 'choice',
    choices: ["Ratings between 0 and 200 that other people have given that brand of car", "Different prices that people have found for that brand of car", "Barcodes"],
    correct: 0,
    title: 'Comprehension Questions'
  }]
}
