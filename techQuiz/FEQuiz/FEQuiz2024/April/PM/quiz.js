const quizData = [
    {
        question: "",
        image: "img(pm)/Q(1).png",
        options: ["a)", "b)", "c)", "d)", "e)", "f)"],
        answer: "e)"
    },
    {
        question: "",
        image: "img(pm)/Q(2).png",
        options: ["a) ((age ≤ 10) and (age ≥ 60)) and isMember",
            "b) ((age ≤ 10) and (age ≥ 60)) or isMember",
            "c) ((age ≤ 10) or (age ≥ 60)) and isMember",
            "d) ((age ≤ 10) or (age ≥ 60)) or isMember"],
        answer: "d) ((age ≤ 10) or (age ≥ 60)) or isMember"
    },
    {
        question: "",
        image: "img(pm)/Q(3).png",
        options: ["a) i ÷ 2 = 0",
            "b) i ÷ 2 ≠ 0",
            "c) i mod 2 = 0",
            "d) i mod 2 ≠ 0",
            "e) i = 2",
            "f) i ≠ 2"],
        answer: "c) i mod 2 = 0"
    },
    {
        question: "",
        image: "img(pm)/Q(4).png",
        options: ["a)", "b)", "c)", "d)", "e)", "f)", "g)", "h)"],
        answer: "b)"
    },
    {
        question: "",
        image: "img(pm)/Q(5).png",
        options: ["a)", "b)", "c)", "d)", "e)", "f)"],
        answer: "d)"
    },
    {
        question: "",
        image: "img(pm)/Q(6).png",
        options: ["a) rbyte & (00000001 << (i - 1))",
            "b) rbyte & (00000001 << i)",
            "c) rbyte & (00000001 << (i + 1))",
            "d) rbyte | (00000001 << (i - 1))",
            "e) rbyte | (00000001 << i)",
            "f) rbyte | (00000001 << (i + 1))"],
        answer: "a) rbyte & (00000001 << (i - 1))"
    },
    {
        question: "",
        image: "img(pm)/Q(7).png",
        options: ["a)", "b)", "c)", "d)", "e)", "f)", "g)", "h)", "i)"],
        answer: "i)"
    },
    {
        question: "",
        image: "img(pm)/Q(8).png",
        options: ["a)", "b)", "c)", "d)", "e)", "f)", "g)", "h)"],
        answer: "b)"
    },
    {
        question: "",
        image: "img(pm)/Q(9).png",
        options: ["a)", "b)", "c)", "d)"],
        answer: "b)"
    },
    {
        question: "",
        image: "img(pm)/Q(10).png",
        options: ["a)", "b)", "c)", "d)"],
        answer: "b)"
    },
    {
        question: "",
        image: "img(pm)/Q(11).png",
        options: ["a)", "b)", "c)", "d)", "e)", "f)", "g)", "h)"],
        answer: "e)"
    },
    {
        question: "",
        image: "img(pm)/Q(12).png",
        options: ["a) i < j - 1",
            "b) i < (len ÷ 2) + 1",
            "c) i < (len ÷ 2) - 1",
            "d) i < len ÷ j",
            "e) i < j ÷ 2"],
        answer: "b) i < (len ÷ 2) + 1"
    },
    {
        question: "",
        image: "img(pm)/Q(13).png",
        options: ["a)", "b)", "c)", "d)", "e)", "f)", "g)", "h)"],
        answer: "h)"
    },
    {
        question: "",
        image: "img(pm)/Q(14).png",
        options: ["a) 0.1",
            "b) 0.2",
            "c) 0.3",
            "d) 0.4",
            "e) 0.5",
            "f) 0.6",
            "g) 0.7",
            "h) 0.8",
            "i) 0.9",
            "j) 1.0"],
        answer: "i) 0.9"
    },
    {
        question: "",
        image: "img(pm)/Q(15).png",
        options: ["a)", "b)", "c)", "d)", "e)", "f)", "g)", "h)", "i)"],
        answer: "i)"
    },
    {
        question: "",
        image: "img(pm)/Q(16).png",
        options: ["a)", "b)", "c)", "d)", "e)", "f)", "g)", "h)", "i)", "j)"],
        answer: "h)"
    },
    {
        question: "",
        image: "img(pm)/Q(17).png",
        options: ["a)", "b)", "c)", "d)", "e)", "f)"],
        answer: "c)"
    },
    {
        question: "",
        image: "img(pm)/Q(18).png",
        options: ["a)", "b)", "c)", "d)", "e)", "f)"],
        answer: "f)"
    },
    {
        question: "",
        image: "img(pm)/Q(19).png",
        options: ["a)", "b)", "c)", "d)", "e)", "f)"],
        answer: "f)"
    },
    {
        question: "",
        image: "img(pm)/Q(20).png",
        options: ["a)", "b)", "c)", "d)", "e)", "f)"],
        answer: "b)"
    },




]

const quizContainer = document.getElementById("quiz-container");
const paginationContainer = document.getElementById("pagination");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const navigation = document.getElementById("navigation");
const submitButton = document.getElementById("submit");

let userSelections = {};

let score = 0;
const questionsPerPage = 6;
let currentPage = 0;
const maxVisiblePages = 6;

// Function to render questions for the current page
function renderQuestions(pageIndex) {
    quizContainer.innerHTML = ""; // Clear previous questions

    const start = pageIndex * questionsPerPage;
    const end = Math.min(start + questionsPerPage, quizData.length);
    const questionsToDisplay = quizData.slice(start, end);

    questionsToDisplay.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question-block");

        // Add question text
        const questionText = document.createElement("h3");
        questionText.innerHTML = `<strong>Q${start + index + 1}.</strong> ${q.question}`;
        questionDiv.appendChild(questionText);

        if (q.image) {
            const questionImage = document.createElement("img");
            questionImage.src = q.image;
            questionImage.alt = "Question image";
            questionImage.style.maxWidth = "100%"; // Style the image for better fit
            questionDiv.appendChild(questionImage);
        }
        // Add options
        q.options.forEach(option => {
            const label = document.createElement("label");
            label.style.display = "block";

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question${start + index}`;
            input.value = option;

            // Pre-select if user previously chose this option
            if (userSelections[start + index] === option) {
                input.checked = true;
            }

            input.addEventListener("change", () => {
                userSelections[start + index] = option; // Update user's selection
            });

            if (option.endsWith(".png") || option.endsWith(".jpg")) {
                const optionImage = document.createElement("img");
                optionImage.src = option;
                optionImage.alt = "Option image";
                optionImage.style.maxWidth = "70%";
                label.appendChild(input);
                label.appendChild(optionImage);
            } else {
                label.appendChild(input);
                label.append(option);
            }

            questionDiv.appendChild(label);
        });


        quizContainer.appendChild(questionDiv);
    });
}

// Function to render pagination links
function renderPagination() {
    paginationContainer.innerHTML = ""; // Clear previous pagination links

    const totalPages = Math.ceil(quizData.length / questionsPerPage);
    const startPage = Math.floor(currentPage / maxVisiblePages) * maxVisiblePages;
    const endPage = Math.min(startPage + maxVisiblePages, totalPages);

    for (let i = startPage; i < endPage; i++) {
        const pageLink = document.createElement("a");
        pageLink.innerText = i + 1;
        pageLink.href = "#";
        pageLink.classList.add("page-link");
        if (i === currentPage) pageLink.classList.add("active");

        if ((currentPage + 1) * questionsPerPage >= quizData.length) {
            submitButton.style.display = "block"; // Show submit button on the last page
        } else {
            submitButton.style.display = "block"; // Hide submit button otherwise
        }

        // Add click listener for pagination
        pageLink.onclick = (e) => {
            e.preventDefault(); // Prevent full reload
            currentPage = i;
            updatePaginationAndQuestions();
        };

        paginationContainer.appendChild(pageLink);
    }
}

// Function to update questions and pagination state
function updatePaginationAndQuestions() {
    renderQuestions(currentPage);
    renderPagination();

    prevButton.classList.toggle("disabled", currentPage === 0);
    nextButton.classList.toggle("disabled", currentPage === Math.ceil(quizData.length / questionsPerPage) - 1);
}


// Initial call to render the first page and pagination
updatePaginationAndQuestions();

// Previous button click
prevButton.onclick = (e) => {
    e.preventDefault();
    if (currentPage > 0) {
        currentPage--;
        updatePaginationAndQuestions();
    }
};

// Next button click
nextButton.onclick = (e) => {
    e.preventDefault();
    const totalPages = Math.ceil(quizData.length / questionsPerPage);
    if (currentPage < totalPages - 1) {
        currentPage++;
        updatePaginationAndQuestions();
    }
};


submitButton.onclick = () => {
    // Reset score
    let score = 0;
    let results = []; // Array to store detailed results

    // Calculate the score and collect results
    Object.entries(userSelections).forEach(([questionIndex, selectedOption]) => {
        questionIndex = parseInt(questionIndex); // Ensure the key is a number
        const questionData = quizData[questionIndex]; // Get question data
        const isCorrect = questionData?.answer === selectedOption;

        if (isCorrect) {
            score++;
        } else {
            // Store question, wrong answer, and correct answer for incorrect responses
            results.push({
                question: questionData.question,
                userAnswer: selectedOption,
                correctAnswer: questionData.answer,
                image: questionData.image,
            });
        }
    });

    //data to result.php
    const data = {score};
    // Send data to the server using fetch
    fetch('results.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Convert data to JSON
    })
        .then(response => response.text()) // Handle the response as text
        .then(result => {
            console.log('Response from PHP:', result);
        //    alert(`Server response: ${result}`);
        })
        .catch(error => {
            console.error('Error:', error);
        });


    // Pass data to the results page
    const resultsPage = "results.php";
    const params = new URLSearchParams({
        totalScore: score,
        totalQuestions: quizData.length,
        results: JSON.stringify(results),
    });
    window.location.href = `${resultsPage}?${params.toString()}`;
};

