class Quiz {
    // YOUR CODE HERE:

    constructor(questions, timeLimit, timeRemaining){
        this.questions = questions
        this.timeLimit = timeLimit
        this.timeRemaining = timeRemaining
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }

    // 2. getQuestion()
    
    getQuestion(){
        return this.questions[this.currentQuestionIndex]
    }

    // 3. moveToNextQuestion()

    moveToNextQuestion(){
        this.currentQuestionIndex ++

    }

    // 4. shuffleQuestions()

    shuffleQuestions(){
        let currentIndex = this.questions.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [this.questions[currentIndex], this.questions[randomIndex]] = [
            this.questions[randomIndex], this.questions[currentIndex]];
        }
    }

    // 5. checkAnswer(answer)



    checkAnswer(answer){

        
      if (answer ===  this.getQuestion().answer) {
        this.correctAnswers ++
      }


        // console.log(this.questions)
        
        // this.questions.forEach((eachQuestion) => {
        //     console.log (eachQuestion)
        //     console.log(answer)
        //     if(answer === eachQuestion.answer){
        //         this.correctAnswers ++
        //         console.log (this.correctAnswers)
        // }
        // })
    }

    // 6. hasEnded()

    hasEnded(){
        if(this.currentQuestionIndex === this.questions.length){
            return true
        } else if ( this.currentQuestionIndex < this.questions.length){
            return false
        }
        // this.questions.forEach((eachQuestion) => {
        //     if (this.currentQuestionIndex === eachQuestion.length){
        //         return true
        //     } else if (this.currentQuestionIndex < eachQuestion.length) {
        //         return false
        //     }
        // })
    }
}