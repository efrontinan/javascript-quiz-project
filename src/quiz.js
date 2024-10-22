class Quiz {
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions
        this.timeLimit = timeLimit
        this.timeRemaining = timeRemaining
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex]
    }

    moveToNextQuestion() {
        this.currentQuestionIndex++
    }

    shuffleQuestions() {
        this.questions.sort(() => .5 - Math.random());
    }

    checkAnswer(answerToCheck) {
        const correctAnswer = this.getQuestion().answer
        if (answerToCheck === correctAnswer) {
            this.correctAnswers++
        }
    }

    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length
    }

    filterQuestionsByDifficulty(difficulty) {
        // console.log('Antes', this.questions)
        // console.log(difficulty)
        // const filteredQuestions = this.questions.filter(eachQuestion => {
        //     return eachQuestion.difficulty === difficulty
        // })

        // if (difficulty >= 1 && difficulty <= 3) {
        //     this.questions = filteredQuestions
        // }

        // console.log('Despues', this.questions)

        //console.log('Antes', this.questions)

        if (difficulty >= 1 && difficulty <= 3) {
            this.questions = this.questions.filter(eachQuestion => {
                return eachQuestion.difficulty === difficulty
            })
        }

        //console.log('Despues', this.questions)

    }

    averageDifficulty() {

        const sumDifficulty = this.questions.reduce((acc, eachQuestions) => {
            return acc + eachQuestions.difficulty
        }, 0)

        return sumDifficulty / this.questions.length
    }
}