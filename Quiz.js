






const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: ["Central Processing Unit"],
      incorrect_answers: [
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: ["False"],
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: ["False"],
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: [".svg"],
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: ["Cascading Style Sheet"],
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: ["Nougat"],
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: ["140"],
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: ["False"],
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: ["Java"],
      incorrect_answers: ["Python", "C", "Jakarta"],
    }]

    let question1 = document.getElementById('question1')
    question1.innerText = questions[0].question

    let answer1 = document.getElementsByClassName('answer1')
    
    answer1[0].innerText = questions[0].incorrect_answers[0]
    answer1[1].innerText = questions[0].incorrect_answers[1]
    answer1[2].innerText = questions[0].correct_answer[0]




    let question2 = document.getElementById('question2')
    question2.innerText = questions[1].question

    let answer2 = document.getElementsByClassName('answer2')
    
    answer2[0].innerText = questions[1].incorrect_answers[0]
    answer2[1].innerText = questions[1].incorrect_answers[1]
    answer2[2].innerText = questions[1].incorrect_answers[2]




    let question3 = document.getElementById('question3')
    question3.innerText = questions[2].question

    let answer3 = document.getElementsByClassName('answer3')
    
    answer3[0].innerText = questions[2].incorrect_answers[0]
    answer3[1].innerText = questions[2].correct_answer[0]





    let question4 = document.getElementById('question4')
    question4.innerText = questions[3].question

    let answer4 = document.getElementsByClassName('answer4')
    
    answer4[0].innerText = questions[3].incorrect_answers[0]
    answer4[1].innerText = questions[3].correct_answer[0]




    let question5 = document.getElementById('question5')
    question5.innerText = questions[4].question

    let answer5 = document.getElementsByClassName('answer5')
    
    answer5[0].innerText = questions[4].incorrect_answers[0]
    answer5[1].innerText = questions[4].correct_answer[0]
    answer5[2].innerText = questions[4].incorrect_answers[1]
    answer5[3].innerText = questions[4].incorrect_answers[2]


    

    


    
    
    