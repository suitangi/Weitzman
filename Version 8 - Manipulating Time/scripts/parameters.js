window.expParam = {
  boxTop: 200,
  boxBottom: 0,

  boxes: [
  {
    name: "practice",
    sets: [
		[
			{'lower':37,'upper':67},
			{'lower':56,'upper':91},
			{'lower':68,'upper':78},
			{'lower':22,'upper':42},
			{'lower':36,'upper':90},
		],
		[
			{'lower':42,'upper':136},
			{'lower':77,'upper':108},
			{'lower':97,'upper':128},
			{'lower':30,'upper':151},
			{'lower':50,'upper':124},
		],

    ]
  }, {
    name: "early",
	sets: [
		[
			{'lower':55,'upper':135},
			{'lower':79,'upper':111},
			{'lower':76,'upper':130},
			{'lower':40,'upper':146},
			{'lower':44,'upper':118},
		],
		[
			{'lower':45,'upper':146},
			{'lower':81,'upper':110},
			{'lower':98,'upper':133},
			{'lower':28,'upper':157},
			{'lower':40,'upper':115},
		],
		[
			{'lower':36,'upper':121},
			{'lower':44,'upper':113},
			{'lower':54,'upper':117},
			{'lower':26,'upper':126},
			{'lower':30,'upper':105},
		],
		[
			{'lower':52,'upper':164},
			{'lower':91,'upper':125},
			{'lower':109,'upper':151},
			{'lower':32,'upper':181},
			{'lower':46,'upper':132},
		],
		[
			{'lower':41,'upper':117},
			{'lower':49,'upper':109},
			{'lower':57,'upper':113},
			{'lower':32,'upper':124},
			{'lower':34,'upper':111},
		],
		[
			{'lower':42,'upper':122},
			{'lower':66,'upper':98},
			{'lower':63,'upper':117},
			{'lower':27,'upper':133},
			{'lower':31,'upper':105},
		],
	]
  }, {
    name: "late",
    sets: [
		[
			{'lower':55,'upper':135},
			{'lower':79,'upper':111},
			{'lower':76,'upper':130},
			{'lower':40,'upper':146},
			{'lower':44,'upper':118},
		],
		[
			{'lower':45,'upper':146},
			{'lower':81,'upper':110},
			{'lower':98,'upper':133},
			{'lower':28,'upper':157},
			{'lower':40,'upper':115},
		],
		[
			{'lower':36,'upper':121},
			{'lower':44,'upper':113},
			{'lower':54,'upper':117},
			{'lower':26,'upper':126},
			{'lower':30,'upper':105},
		],
		[
			{'lower':52,'upper':164},
			{'lower':91,'upper':125},
			{'lower':109,'upper':151},
			{'lower':32,'upper':181},
			{'lower':46,'upper':132},
		],
		[
			{'lower':42,'upper':122},
			{'lower':66,'upper':98},
			{'lower':63,'upper':117},
			{'lower':27,'upper':133},
			{'lower':31,'upper':105},
		],
	]
  }],

  endFeedbackDuration: 1000,
  searchCost: 5,
  timer1: 20,
  timer2: 20,
  amount: 50,
  ticks: [50, 100, 150],
  clickOnce1: true,
  clickOnce2: false,
  redirect: "https://app.prolific.co/submissions/complete?cc=19904B25",
  instructionText1: "It costs you 5 points to learn about a movie. You must learn about exactly one movie. After learning about one movie, please wait until the timer runs out.",
  instructionText2: "It costs you 5 points to learn about each movie. You can learn about as many of these movies as you want, but must learn about at least one. After learning about a movie, you can learn about another one or stop searching by waiting until the timer runs out.",
  postquestions: [{
    question: "Suppose you were telling another participant how to choose boxes in this task just like you did. Please write out the instructions you would give that person so that they could pick boxes in the same way as you.",
    placeholder: "Enter your answer here.",
    type: 'textbox',
    title: 'Box Instructions',
  },{
    question: "Were you able to see all of the boxes on the screen without scrolling? Please note that your answer to this question will have <b>NO</b> impact on your payment but it is very important that you answer this accurately. ",
    choices: ["Yes", "No"],
    type: 'choice',
    title: 'Zoom Level',
  },{
    question: "Did you feel like you had enough time to make a good decision in each round of the task?",
    choices: ["I had <b>too much</b> time", "I had a <b>little bit too much</b> time", "I had <b>just the right amount</b> of time", "I had a <b>little bit too little</b> time", "I had <b>too little</b> time"],
    type: 'choice',
    title: 'Time',
  },{
    question: "What is your age?",
    placeholder: " ",
    type: 'number',
    min: 18,
    max: 99,
    title: 'Age',
  },{
    question: "What is your gender?",
    choices: ["Male", "Female", "Other"],
    type: 'choice',
    title: 'Gender',
  },{
    question: "Please feel free to message us through the prolific platform if you have had any issues with this study <br><br> In the box below, please let us know if you have any other thoughts about the task. Please type <b>none</b> if you have no comments",
    placeholder: "Enter feedback here. Write none if you have no feedback",
    type: 'textbox',
    title: 'Feedback',
  },],
  confirm_popup: {
    title: "Submission Complete",
    content: 'Thank you for completing the experiment! Your data has been recorded. Please click "Next" below to continue back to prolific.'
  },
  prequestions: [],
  exclusion: [],
}
