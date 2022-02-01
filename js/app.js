class Adventure {
    //run the class
    constructor() {
        //set the properties
    this.questionIndex = 0;
    this.numCorrect = 0;
    this.QuestionDiv;
    this.Button1;
    this.Button2;
    this.Button3;
    this.Button4;
    this.CorrectAnswer;
    this.NextButton;

    this.questions = [
        {
                id: 1,
                text: 'Who is the best team in the premier league?',
                a1: 'Arsenal',
                a2: 'Tottenham',
                a3: 'Manchester',
                a4: 'Chelsea',
                correct: 'a1',
                isCorrect: false
        },
        {
                id: 2,
                text: 'Who is the best team in the NFL?',
                a1: 'Cowboys',
                a2: 'Saints',
                a3: 'Falcons',
                a4: 'Patriots',
                correct: 'a2',
                isCorrect: false
        },
        {
                id: 3,
                text: 'Who is the best team in the MLS?',
                a1: 'Orlando City',
                a2: 'Sounders',
                a3: 'Atlanta United',
                a4: 'Orlando City',
                correct: 'a3',
                isCorrect: false
        },
        {
                id: 4,
                text: 'Who is the best team in the SEC?',
                a1: 'Vanderbilt',
                a2: 'Kentucky',
                a3: 'Georiga',
                a4: 'Ole Miss',
                correct: 'a4',
                isCorrect: false
        }
    ];

        // get form objects
        this.QuestionDiv = document.getElementById('divQuestionText');
        this.NextButton = document.getElementById('nextButton');
        //a loop to get the buttons
        let i = 1
        for (i = 1; i <= 4; i++) {
            //get id of buttons 1-4
            let btn = document.getElementById('a' + i);
            if (i == 1) this.Button1 = btn;
            if (i == 2) this.Button2 = btn;
            if (i == 3) this.Button3 = btn;
            if (i == 4) this.Button4 = btn;
        }
        this.NextButton = document.getElementById('nextButton');
        // add event listeners:
        this.Button1.addEventListener('click', () => {
            if (this.CorrectAnswer == 'a1')  {
                this.numCorrect++;
                this.questions[this.questionIndex].isCorrect = true;
            }
            this.setButtonStatus (false);
            this.NextButton.disabled = false;
        });

        this.Button2.addEventListener('click', () => {
            if (this.CorrectAnswer == 'a2') {
                this.numCorrect++;
            }
            this.setButtonStatus(false);
            this.NextButton.disabled = false;
        });
        this.Button3.addEventListener('click', ()=> {
            if (this.CorrectAnswer == 'a3') {this.numCorrect++;}
            this.setButtonStatus(false);
            this.NextButton.disabled = false;
        });

        this.Button4.addEventListener('click', () => {
            if (this.CorrectAnswer == 'a4') {
                this.numCorrect++;
            }
            this.setButtonStatus(false);
            this.NextButton.disabled = false;
        })
        
        this.NextButton.addEventListener('click', ()=> {
            // going to next index;
            this.questionIndex++;
            if (this.questionIndex >=4)  {
                if (this.numCorrect >= 3) {
                    this.winningMessage()
                } else {
                    this.losingMessage()
                }
                this.NextButton.disabled = true;
                //display the end page to the user
            }
            else {
                // Display next question to the user:
                this.displayQuestion();
                // enabled the 4 question buttons:
                this.setButtonStatus(true);
                //disable next button again.
                this.NextButton.disabled = true;
            }
        });

        //finally display the first question
        this.displayQuestion();
    }

    displayQuestion() {
        // Get the question
        let q = this.questions[this.questionIndex];
        // set form values
        this.QuestionDiv.innerText = q.text;
        this.Button1.innerText = q.a1;
        this.Button2.innerText = q.a2;
        this.Button3.innerText = q.a3;
        this.Button4.innerText = q.a4;
        //store correct answer for comparison when we click the buttton
        this.CorrectAnswer = q.correct;
        this.NextButton.enabled = false;
        document.getElementById('nextButton').enabled = false;

    }

    setButtonStatus(value) {
        this.Button1.disabled = !value;
        this.Button2.disabled = !value;
        this.Button3.disabled = !value;
        this.Button4.disabled = !value;
    }

    // winning message function

    winningMessage() {
        this.endMessage = document.getElementById('endMessage');
        this.endMessage.innerText = `You have won the game congratulations`;
        this.endMessage.classList.remove("d-none")
    }

    //losing message function
    losingMessage() {
        this.endMessage = document.getElementById('endMessage')
        this.endMessage.innerText = `You have lost the game, Sorry`
        this.endMessage.classList.remove("d-none")

    }
    
}

function startup() 
{var game = new Adventure();
        }



