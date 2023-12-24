window.expParam = {
  boxTop: 200,
  boxBottom: 0,

  boxes: [
  {
    name: "practice",
    sets: [
    [
		{lower: 123, upper: 175},
		{lower: 105, upper: 191},
		{lower: 68, upper: 184},
		{lower: 140, upper: 160},
		{lower: 114, upper: 162},
	],
    [
		{lower: 123, upper: 175},
		{lower: 105, upper: 191},
		{lower: 68, upper: 184},
		{lower: 140, upper: 160},
		{lower: 114, upper: 162},
	],
    ]
  }, {
    name: "early",
    sets: [
			[
				{lower: 80, upper: 186},
				{lower: 95, upper: 178},
				{lower: 135, upper: 170},
				{lower: 84, upper: 158},
				{lower: 117, upper: 141},
			],
			[
				{lower: 68, upper: 197},
				{lower: 85, upper: 186},
				{lower: 141, upper: 173},
				{lower: 80, upper: 155},
				{lower: 121, upper: 147},
			],
			[
				{lower: 66, upper: 166},
				{lower: 76, upper: 161},
				{lower: 130, upper: 152},
				{lower: 84, upper: 155},
				{lower: 78, upper: 140},
			],
			[
				{lower: 42, upper: 191},
				{lower: 62, upper: 174},
				{lower: 119, upper: 161},
				{lower: 56, upper: 142},
				{lower: 101, upper: 124},
			],
			[
				{lower: 73, upper: 169},
				{lower: 132, upper: 159},
				{lower: 97, upper: 155},
				{lower: 120, upper: 149},
				{lower: 90, upper: 141},
			],
			[
				{lower: 67, upper: 173},
				{lower: 82, upper: 165},
				{lower: 103, upper: 157},
				{lower: 130, upper: 145},
				{lower: 108, upper: 137},
			],
		]
  }, {
    name: "late",
    sets: [
			[
				{lower: 80, upper: 186},
				{lower: 95, upper: 178},
				{lower: 135, upper: 170},
				{lower: 84, upper: 158},
				{lower: 117, upper: 141},
			],
			[
				{lower: 68, upper: 197},
				{lower: 85, upper: 186},
				{lower: 141, upper: 173},
				{lower: 80, upper: 155},
				{lower: 121, upper: 147},
			],
			[
				{lower: 66, upper: 166},
				{lower: 76, upper: 161},
				{lower: 130, upper: 152},
				{lower: 84, upper: 155},
				{lower: 78, upper: 140},
			],
			[
				{lower: 42, upper: 191},
				{lower: 62, upper: 174},
				{lower: 119, upper: 161},
				{lower: 56, upper: 142},
				{lower: 101, upper: 124},
			],
			[
				{lower: 73, upper: 169},
				{lower: 132, upper: 159},
				{lower: 97, upper: 155},
				{lower: 120, upper: 149},
				{lower: 90, upper: 141},
			],
			[
				{lower: 67, upper: 173},
				{lower: 82, upper: 165},
				{lower: 103, upper: 157},
				{lower: 130, upper: 145},
				{lower: 108, upper: 137},
			],
		]
  }],

  endFeedbackDuration: 1000,
  searchCost: 1,
  timer1: 25,
  timer2: 10,
  amount: 30,
  ticks: [50, 100, 150],
  redirect: "https://app.prolific.co/submissions/complete?cc=19904B25",
  instructionText: "It costs you 1 point each to learn about each movie. You can learn about as many of these movies as you want, but must learn about at least one. After learning about a movie, you can learn about another one or stop searching by waiting until the timer runs out.",
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
    question: "What is your highest level of education?",
    choices: ["Less than high school", "High school graduate", "Some college", "2 year degree", "4 year degree", "Professional Degree", "Doctorate"],
    type: 'choice',
    title: 'Education',
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
  prequestions: [{
    question: "<strong>Consent for Participation in a Research Study</strong><br>Study Title: Navigation and Searching<br>Principal Investigator: Reid Hastie<br>Student Researcher: Alexander Moore<br>IRB Study Number: IRB21-0114<br><br>DESCRIPTION: We are researchers at the University of Chicago doing a research study about judgment and decision making. In this study you will be given some hypothetical situations and be asked to make some decisions based on the information we provide you. Participation should take about 15 minutes.<br><br>RISKS and BENEFITS: The risks to your participation in this online study are those associated with basic computer tasks, including boredom, fatigue, mild stress, or breach of confidentiality. The only benefit to you is the learning experience from participating in a research study. The benefit to society is the contribution to scientific knowledge. <br><br>COMPENSATION: You will be paid $2.25 USD for participating in this study. If you fail the comprehension test in the early phase of this study or exit the study prior to completion of your own accord, you will not be compensated.<br><br>PLEASE NOTE: This study may contain checks to make sure that participants are finishing the tasks honestly and completely.  As long as you read the instructions and complete the tasks, your Submission will be approved.  If you fail these checks, your Submission will be rejected.<br><br>CONFIDENTIALITY: Your Prolific ID will be used to distribute payment to you but will not be stored with the research data we collect from you.  Please be aware that your Prolific ID can potentially be linked to information about you on your Prolific public profile page, depending on the settings you have for your Prolific profile.  We will not be accessing any personally identifying information about you that you may have put on your Prolific public profile page. Any reports and presentations about the findings from this study will not include your name or any other information that could identify you. We may share the data we collect in this study with other researchers doing future studies – if we share your data, we will not include information that could identify you.<br><br>SUBJECT’S RIGHTS: Your participation is voluntary.  You may stop participating at any time by closing the browser window or the program to withdraw from the study. Partial data will not be analyzed.<br><br>For additional questions about this research, you may contact: <br> <br>Alexander Moore<br>e-mail: akmoore@chicagobooth.edu <br>For questions about your rights as a research participant, you may contact:<br>The Social & Behavioral Sciences Institutional Review Board, University of Chicago    <br>Phone: (773) 834-7835 <br>E-mail: sbs-irb@uchicago.edu<br>",
    choices: ["<b>By clicking this button, you are indicating that you are at least 18 years old, have read and understand this consent form, and you agree to participate in this online research study.</b>"],
    type: 'choice',
    title: 'Consent Information',
  },{
    question: "Welcome to the study! Please read all the instructions carefully. Please work on a <b>laptop or desktop</b> for the study. Please <b>do not</b> exit or refresh the page while you are working on the study.",
    type: 'text',
    title: 'Welcome',
  },{
    type: 'exclusion',
    question: "In this study you will be searching for a good movie to watch based on information that we provide to you. You will perform this task several times, so you will search for movies repeatedly. You will earn a bonus based on your choices. So, you should think carefully about each of your choices. <br><br> Please note that there are several comprehension checks in the instructions ahead. We will only exclude you if it is clear that you are not paying attention to instructions. If you are excluded because of incorrect answers to these comprehension questions, we will let you know immediately by ending the study. Also note that some of these comprehension checks may be difficult.<br><br> According to the text above, what will you be doing in this study?<br><br><b>Please answer this question carefully as you will be excluded if you get it wrong. Please select the best answer from the choices below:</b>",
    choices: ["Searching for how much you like movies repeatedly", "Rating how much you like movies repeatedly", "Playing a game once", "Categorizing movies repeatedly", "Describing your personal experiences"],
    correct: 0,
    title: 'Task Description',
  },{
	question: "<strong>We would like for you to consider the following situation:</strong><br><br>You are interested in watching a movie. There are some movies that you are considering watching. All of them seem like movies you might enjoy. For each movie, you can spend a few minutes learning about the movie (for example by watching a trailer, reading plot synopses, or reading specific reviews). By doing this, you can get a clear sense for how much you will like the movie. Before you spend time to learn about the movie, you know the ratings that other people who have watched the movie have given it. These ratings are a good source of information about how much you might like the movie. Then if you choose to learn more about the movie you will get a much more precise idea about how much you will like it.<br><br>Other people have rated each of the movies on a 200 point scale where 0 means that a movie is the worst that the person has ever seen and 200 means that it is the best. <br><br>These user ratings for each movie are presented using a picture like the one below: <br> <img src=\"./img/sc5_graphical.png\"><br> In the example above, you can see that on the scale from 0 to 200, other people rated the movie as between roughly 75 points and 180 points.<br><br>You may assume that you will not like the movie any more than the person who has liked it best and will not dislike it any more than the person who liked it least.<br><br><strong>Here’s how the movie search works:</strong><br><br>In each round, we are going to give you a chance to learn about several movies. For each movie, we will give you a box that contains ratings from other people who already viewed the movie, like those shown in the box above. You can learn more about how much you personally might like the movie by clicking on the boxes that tell you about the ratings, one at a time.<br><br>Once you click on a box, you will see how much you like the movie after learning more about it on a scale from 0 to 200. Other people’s rating give you a good idea about how much you will like the movie. Your personal “score” for the movie is always “inside” the range of ratings made by the other people. <br><br>You can end a search any time after you learn more about at least one movie (by clicking on at least box). To end a round, simply wait until the timer runs out <em><strong>without </strong></em>learning about any other movies. <br><br>When you end a search, you will be rewarded points based on the <em><strong>highest rating</em></strong> you found among the movies that you learned about and the <em><strong>number</em></strong> of movies you learned about. <strong>Your points for the round will be the value of the highest rated movie among those that you clicked on to learn about <u>minus</u> 1 points for each movie you learned more about.</strong> You can think of the 1 point it costs to learn about each movie as the effort and time that it takes you to learn about a movie. You can think of the value of the movie as indicating how much you would like that movie if you ended up watching it.<br><br>For example, if you learn about 2 movies and are told that they are worth 20 points and 70 points, your winnings for the round will be 68 points. That is 70 (70 points for the highest movie you found) minus 2 (because you learned about 2 movies at a cost of 1 points each)<br><br>Finally, your bonus will be 1% of your winnings from one randomly selected round. For example, if you won 68 points, you would receive a bonus of 68 cents (0.68 USD). <strong>Please note that you MUST click on at least one movie in each round. If you fail to learn about at least one movie in all rounds, you will not receive a bonus.</strong>",
	type: 'extext',
	title: 'Task Description',
	scroll: true,
  },{
    question: "In each search we will show you a screen like this: <br><img src=\"./img/sc1-Graphical_Line.png\"><br><br> In the image above, each graph shows you the ratings that people have given this movie on a scale from 0 to 200 where higher ratings are better. Each tick on the graph represents one rating.",
    type: 'text',
    title: 'Task Description',
    scroll: true,
  },{
    question: "When you click a box, you will find out exactly how much you will like that movie. In the image below, we clicked on one box.<br><img src=\"./img/sc2-Graphical_Line.png\"><br><br> We will provide you with two additional pieces of information.<br>The first piece is your total search costs. In the image above, this information is in the blue box. <br>The second piece of information is the time you have left in the round. In the image above, this information is in the red box.<br><br> Once you have learned about as many movies as you would like to in a round, please wait until the timer runs out. You will automatically be moved to the next round of the game once the timer runs out.",
    type: 'text',
    title: 'Task Description',
    scroll: true,
  },{
    question: "In the image below, we have learned about 3 movies.<br><img src=\"./img/sc3-Graphical_Line.png\"><br><br>The movie that you learned about most recently (96) is in bold.<br><br> You have accrued 3 points in costs and have 13 seconds until the round ends.<br><br> If you choose not to learn about any more movies until the timer reached zero, you would receive 148 points minus 3 points in search costs for a total of 145 points.",
    type: 'text',
    title: 'Task Description',
    scroll: true,
  },{
    question: "Once the time runs out in a round, we will show you the value of the movie you would watch and how much it cost you during this round to learn more about movies as shown below:<br><img src=\"./img/sc4.png\"><br><br>In this case, you won 145 (that is 148 – 3) in this round. <br><br>If we randomly selected this round to pay you your bonus, you would receive 145 X 0.01 = $1.45 (USD) as a bonus.",
    type: 'text',
    title: 'Task Description',
    scroll: true,
  },{
    question: "You are now ready to start the game. You will play 14 rounds of this game.",
    type: 'text',
    title: 'Task Description',
  },],
  exclusion: [{
    question: "How many movies <strong><u>must</u></strong> you learn more about in each round?",
    type: 'choice',
    choices: ["1 or more", "0 or more", "Exactly 5", "Exactly 3", "3 or more"],
    correct: 0,
    title: 'Comprehension Questions',
  },{
    question: "How many points does learning about each movie cost you?",
    type: 'choice',
    choices: ["0 points", "1 point", "3 points", "5 points", "10 points"],
    correct: 1,
    title: 'Comprehension Questions',
  },{
    question: "You learn about 3 movies and decide to end the round. You value the movies you learned about at 55, 45, and 35 out of 200. How many points will you win in this round? (Hint: Remember that it costs you 1 point to learn about each movie).",
    type: 'choice',
    choices: ["55 points", "45 points", "35 points", "44 points", "52 points"],
    correct: 4,
    title: 'Comprehension Questions',
  },{
    question: "You win 90 points in a round (assume the cost of learning about movies has already been subtracted). If that round is randomly selected, what will your bonus be?",
    type: 'choice',
    choices: ["$0.90", "$0.45", "$0.00", "$9.00", "$0.50"],
    correct: 0,
    title: 'Comprehension Questions',
  },{
    question: "You learn about 3 movies and do not want to learn about any more. What should you do?",
    type: 'choice',
    choices: ["Wait until the timer runs out without learning about any other movies.", "Learn about as many of the movies as you have time for, even though you don't want to", "Click on one of the movies that you already learned more about", "Hit the back button on your browser."],
    correct: 0,
    title: 'Comprehension Questions',
  },{
    question: "What happens if you don’t learn about one or more movies (by clicking on at least one box) in all of the rounds?",
    type: 'choice',
    choices: ["You do not receive a bonus", "Nothing happens"],
    correct: 0,
    title: 'Comprehension Questions',
  },{
    question: "What do the graphs in each box represent?",
    type: 'choice',
    choices: ["Ratings between 0 and 200 that other people have given the movie after watching it", "Different prices for tickets for a movie", "Barcodes"],
    correct: 0,
    title: 'Comprehension Questions',
  },],
}
