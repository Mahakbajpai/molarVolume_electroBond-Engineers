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
      question: "Which equation gave a smaller value for molar volume at high pressure?",  ///// Write the question inside double quotes
      answers: {
        a: " Ideal Gas Equation",                  ///// Write the option 1 inside double quotes
        b: "Van der Waals Equation",                  ///// Write the option 2 inside double quotes
        c: "Both gave same value",                  ///// Write the option 3 inside double quotes
        d: "Cannot be determined"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
      question: " Why does the Van der Waals equation predict a lower molar volume than the Ideal Gas equation at high pressures?",  ///// Write the question inside double quotes
      answers: {
        a: "It ignores intermolecular forces",                  ///// Write the option 1 inside double quotes
        b: "It assumes zero molecular volume",                  ///// Write the option 2 inside double quotes
        c: "It accounts for molecular volume and attractive forces",                  ///// Write the option 3 inside double quotes
        d: "It assumes gases behave ideally"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line
      {
      question: " Based on the experiment, when do the Ideal Gas and Van der Waals equations give nearly the same molar volume?",  ///// Write the question inside double quotes
      answers: {
        a: " At high pressure and low temperature",                  ///// Write the option 1 inside double quotes
        b: "At low pressure and high temperature",                  ///// Write the option 2 inside double quotes
        c: "At all conditions",                  ///// Write the option 3 inside double quotes
        d: "At low pressure and low temperature"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },    
    {
      question: "If your calculated molar volume using the Van der Waals equation is significantly different from expected values, which factor is most likely responsible?",  ///// Write the question inside double quotes
      answers: {
        a: "Incorrect value of R",                  ///// Write the option 1 inside double quotes
        b: "Ignoring temperature in calculation",                  ///// Write the option 2 inside double quotes
        c: " Incorrect 'a' and 'b' constants for the gas used",                  ///// Write the option 3 inside double quotes
        d: " Constant volume assumption"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },    
    {
      question: " What can you conclude from the experiment about real gases compared to ideal gases?",  ///// Write the question inside double quotes
      answers: {
        a: " Real gases always behave like ideal gases",                  ///// Write the option 1 inside double quotes
        b: " Ideal gas law works well under all conditions",                  ///// Write the option 2 inside double quotes
        c: "Real gases deviate from ideal behavior under non-ideal conditions",                  ///// Write the option 3 inside double quotes
        d: "Van der Waals equation is not useful for real gases"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
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