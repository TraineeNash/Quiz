const Quiz_Panel = document.querySelector("#quiz-section")

const quiz = [
    {
        question: "1. What's the difference between Javascript and Java?",
        answer_a: `"Java" is just short for "JavaScript"`,
        answer_b: `Java is a backend language whereas JavaScript is both frontend & backend language`,
        id: "q1"
    },
    {
        question: "2. How do you solve a coding problem when you are stuck?",
        answer_a: "Stare at the computer during hours and start to think about punching the screen",
        answer_b: "Ask your dear instructor at CodeRangers",
        id: "q2"
    },
    {
        question: "3. What does DOM mean?",
        answer_a: "Document Object Modal",
        answer_b: "Donuts Over Muffin",
        id: "q3"
    },
    {
        question: "4. What does the Javascript array method 'forEach' do",
        answer_a: "It iterates/loops over each element in the array and executes a provided function once for each element.",
        answer_b: "It summons a magical array spirit to grant wishes to each element.",
        id: "q4"
    }
]
// -------------------------------------------------------
// List out all the question and answer for the quiz
let count = 0

quiz.forEach(item =>{
    count++

    const template = `
        <p class="text-[18px] font-bold text-white">${item.question}</p>
        <div>
            <input type="radio" name=${item.id} value="A">
            <label class="text-gray-300">${item.answer_a}</label>
        </div>
        <div class="mb-6">
            <input type="radio" name=${item.id} value="B">
            <label class="text-gray-300">${item.answer_b}</label>
        </div>
    `
    Quiz_Panel.innerHTML += template
})

// -------------------------------------------------------
// Check answer whether correct or not
// Display Result

const correctAnswer = ["B", "B", "A", "A"]
const Result_Panel = document.querySelector("#result")
const Quiz_Score = document.querySelector("#score")
const Submit_Btn = document.querySelector("#submit")
const Reset_Btn = document.querySelector("#reset")

let score = 0
let answered = true

Submit_Btn.addEventListener("click", (event)=> {
    
    // Loop through each quiz item
    quiz.forEach((item,index) => {

        // assigning variable based on input and checked the value
        // the :checked will literally check each value for each question
        // if not put will have difficulty to get accurate score eventhough already reset variable score
        const selected = document.querySelector(`input[name="${item.id}"]:checked`)

        // will print out the answer and calculate score
        if(selected && selected.value === correctAnswer[index]){
            score+=25
        }     
    })

    // Display result
    Result_Panel.classList.remove("hidden")
    Quiz_Score.textContent = score + "%"

    // print out score and reset score value in order to get current score
    console.log(score)
    score=0
    answered=true
})

// -------------------------------------------------------
// Reset Quiz

Reset_Btn.addEventListener("click",()=>{
    Result_Panel.classList.add("hidden")
    
    // make all selection unticked 
    const input_radio = document.querySelectorAll(`input[type="radio"]`)

    input_radio.forEach(radio =>{
        radio.checked = false
    })
})