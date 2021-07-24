window.expParam = {

  boxes: [
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
  ],

  endFeedbackDuration: 1000,
  searchCost: 5,

  postquestions: [{
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
      question: "This sentence is here to give some instrucctions on the experiment that will happen after you click next. This sentence is here to demonstrate what this instruction box will look like as it makes the entire instruction longer.",
      type: 'text',
      title: 'Task'
    },
  ]

}
