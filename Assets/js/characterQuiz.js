(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
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
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;

          if(numCorrect == 10)
          {
              var audio = new Audio('/Assets/audio/perfectQuizScore.mp3');
              audio.play();
          }
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';

        }
        // if answer is wrong or blank
        else{   
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Who is IronMan?",
        answers: {
          A : "Groot",
          B : "Tony Stark",
          C : "Steve Rogers"
        },
        correctAnswer: "B"
      },
      {
        question: "Who is the son of Odin?",
        answers: {
          A : "Hawkeye",
          B : "T'Challa",
          C : "Thor"
        },
        correctAnswer: "C"
      },
      {
        question: "_____endured a terrible accident that led him to evolve in ways he could have never forseen.",
        answers: {
          A : "Stephen Strange",
          B : "Scott Lang",
          C : "Peter Quill"
        },
        correctAnswer: "A"
      },
      {
        question: "Who is the first Avenger?",
        answers: {
          A : "Captain Marvel",
          B : "Captain America",
          C : "Black Widow"
        },
        correctAnswer: "B"
      },
      {
        question: "Who is a brutish, battle-tested warrior?",
        answers: {
          A : "Rocket",
          B : "Drax",
          C : "War Machine"
        },
        correctAnswer: "B"
      },
      {
        question: "I am _____",
        answers: {
          A : "Gamora",
          B : "Sam Wilson",
          C : "Groot"
        },
        correctAnswer: "C"
      },
      {
        question: "Who fought against and with the Avengers?",
        answers: {
          A : "Scarlet Witch",
          B : "Ant-Man",
          C : "Spider-Man"
        },
        correctAnswer: "A"
      },
      {
        question: "Who is the Winter Soldier?",
        answers: {
          A : "Carol Danvers",
          B : "Bruce Banner",
          C : "Bucky Barnes"
        },
        correctAnswer: "C"
      },
      {
        question: "Who came to be as a result of Ultron?",
        answers: {
          A : "Black Widow",
          B : "Vision",
          C : "Gamora"
        },
        correctAnswer: "B"
      },
      {
        question: "Which character was played by a different actor after the first Iron Man?",
        answers: {
          A : "War Machine",
          B : "Groot",
          C : "Hawkeye"
        },
        correctAnswer: "A"
      },
      
    ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();
