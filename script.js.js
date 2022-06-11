const quizData = [
    {
        question: "1. The distance between stars is typically measured in",
        a: "Meter",
        b: "Kilometer",
        c: "Astronomical units",
        d: "Light years",
        correct: "d",
    },
    {
        question: "2. What protects life on Earth from harmful ultra violet rays?",
        a: "Long distance",
        b: "Moon",
        c: "Ozone layer",
        d: "Clouds",
        correct: "c",
    },
    {
        question: "3. An apparent shift in the position of an object when viewed from different locations.",
        a: "Parallax",
        b: "Perihellion",
        c: "Solar nebula",
        d: "Prominence",
        correct: "a",
    },
    {
        question: "4. This is what our sun will become at the end of its life cycle.",
        a: "Black hole",
        b: "White hole",
        c: "White dwarf",
        d: "Blue supergiant",
        correct: "c",
    },
    {
        question: "5. If the Southern Hemisphere is experience winter, the Northern Hemisphere is experiencing.",
        a: "Summer",
        b: "Winter",
        c: "Fall",
        d: "Spring",
        correct: "a",
    },
    {
        question: "6. If I drop a jug of water and a pencil at the same time, which would hit first?",
        a: "Jug of Water",
        b: "Pencil",
        c: "Same time",
        d: "Not predictable",
        correct: "c",
    },
    {
        question: "7. The color of the star tells us its",
        a: "Size",
        b: "Temperature",
        c: "Composition",
        d: "Speed of rotation",
        correct: "b",
    },
    {
        question: "8. What is the main element in a stars composition?",
        a: "Oxygen",
        b: "Helium",
        c: "Carbon",
        d: "Hydrogen",
        correct: "d",
    },
    {
        question: "9. What is the next phase for our sun in its life cycle?",
        a: "Super Nova",
        b: "White dwarf",
        c: "Red giant",
        d: "Warm hole",
        correct: "c",
    },
    {
        question: "10. What type of star will die the fastest",
        a: "Medium Mass",
        b: "Large mass",
        c: "Low mass",
        d: "None of the above",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})