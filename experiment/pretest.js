/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "Which of the following is the Ideal Gas Equation?",  ///// Write the question inside double quotes
      answers: {
        a: "PV=nRT",                  ///// Write the option 1 inside double quotes
        b: "P + a/V^2 = RT",                  ///// Write the option 2 inside double quotes
        c: "PV = RT/n",                  ///// Write the option 3 inside double quotes
        d: "P = RT/V + b"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
     question: "What does the constant 'a' in the Van der Waals equation account for?",  ///// Write the question inside double quotes
      answers: {
        a: "Volume occupied by gas molecules",                  ///// Write the option 1 inside double quotes
        b: " Atmospheric pressure",                  ///// Write the option 2 inside double quotes
        c: " Intermolecular attraction",                  ///// Write the option 3 inside double quotes
        d: "Temperature variation"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },     
    {
      question: " Which gas law assumption is corrected by introducing the constant 'b' in the Van der Waals equation? ",  ///// Write the question inside double quotes
       answers: {
         a: " Gases exert no pressure",                  ///// Write the option 1 inside double quotes
         b: "Molecules have no volume",                  ///// Write the option 2 inside double quotes
         c: " Temperature has no effect",                  ///// Write the option 3 inside double quotes
         d: " Gases are always monoatomic"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "b"                ///// Write the correct option inside double quotes
     }, 
     {
      question: "In which conditions does the Ideal Gas Law fail to accurately predict the behavior of real gases?",  ///// Write the question inside double quotes
       answers: {
         a: "High temperature and low pressure",                  ///// Write the option 1 inside double quotes
         b: " Low temperature and high pressure",                  ///// Write the option 2 inside double quotes
         c: "Low volume and low temperature",                  ///// Write the option 3 inside double quotes
         d: " High temperature and high pressure"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "b"                ///// Write the correct option inside double quotes
     },                              ///// To add more questions, copy the section below 
    									                  ///// this line
      {
      question: " What is the primary purpose of comparing molar volumes using Van der Waals and Ideal Gas equations? ",  ///// Write the question inside double quotes
       answers: {
         a: " To measure temperature changes",                  ///// Write the option 1 inside double quotes
         b: "To analyze real gas behavior vs ideal gas assumptions",                  ///// Write the option 2 inside double quotes
         c: " To calculate gas constant ",                  ///// Write the option 3 inside double quotes
         d: " To study liquid compressibility"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "b"                ///// Write the correct option inside double quotes
     },    

    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
