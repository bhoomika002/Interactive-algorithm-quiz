const quizData = [
    {
        question: "Which of the following algorithms is used to find the shortest path in a weighted graph?",
        a: "Depth-First Search",
        b: "Breadth-First Search",
        c: "Dijkstra's Algorithm",
        d: "Kruskal's Algorithm",
        correct: "c",
    },
    {
        question: "What is the time complexity of the merge sort algorithm?",
        a: "O(n)",
        b: "O(n log n)",
        c: "O(n^2)",
        d: "O(log n)",
        correct: "b",
    },
    {
        question: "Which of the following problems is solved using dynamic programming?",
        a: "Binary Search",
        b: "Fibonacci Sequence",
        c: "Bubble Sort",
        d: "Depth-First Search",
        correct: "b",
    },
    {
        question: "In a binary search tree, which traversal type would give the elements in ascending order?",
        a: "Pre-order traversal",
        b: "Post-order traversal",
        c: "In-order traversal",
        d: "Level-order traversal",
        correct: "c",
    },
    {
        question: "Which of the following sorting algorithms has the best average-case time complexity?",
        a: "Bubble Sort",
        b: "Insertion Sort",
        c: "Quick Sort",
        d: "Selection Sort",
        correct: "c",
    },
    {
        question: "What is the worst-case time complexity of the quicksort algorithm?",
        a: "O(n)",
        b: "O(n log n)",
        c: "O(n^2)",
        d: "O(log n)",
        correct: "c",
    },
    {
        question: "Which data structure is used in the implementation of a Breadth-First Search (BFS) algorithm?",
        a: "Stack",
        b: "Queue",
        c: "Priority Queue",
        d: "Linked List",
        correct: "b",
    },
    {
        question: "What does NP-complete stand for in computational complexity theory?",
        a: "Non-deterministic Polynomial-time complete",
        b: "Non-deterministic Polynomial-time complex",
        c: "Non-deterministic Polynomial-time correct",
        d: "Non-deterministic Polynomial-time concise",
        correct: "a",
    },
    {
        question: "Which of the following is a characteristic of a greedy algorithm?",
        a: "It always finds the global optimum solution",
        b: "It makes decisions based on future knowledge",
        c: "It makes the locally optimal choice at each stage",
        d: "It uses dynamic programming to find the solution",
        correct: "c",
    },
    {
        question: "The time complexity of finding the shortest path in an unweighted graph using BFS is:",
        a: "O(V + E)",
        b: "O(V^2)",
        c: "O(V log V)",
        d: "O(E log V)",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const progressBar = document.getElementById('progress-bar');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    updateProgress();
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function updateProgress() {
    const progress = (currentQuiz / quizData.length) * 100;
    progressBar.style.width = progress + "%";
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You scored ${score}/${quizData.length} 🎉</h2>
                <button onclick="location.reload()">Play Again</button>
                <button onclick="window.close()">Exit</button>
            `;
        }
    }
});
