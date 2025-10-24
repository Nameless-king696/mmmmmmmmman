// Data Structure for Subjects and Questions
// -------------------------------------------------------------------------
const SUBJECTS_DATA = [
    // --- YEAR 1 ---
    { year: 1, name: "Physiology", code: "PHY101" },
    { year: 1, name: "Histology", code: "HIS102" },
    { year: 1, name: "Biochemistry", code: "BIO103" },
    
    // --- YEAR 2 ---
    { year: 2, name: "Physiology", code: "PHY201" },
    { year: 2, name: "Histology", code: "HIS202" },
    { year: 2, name: "Biochemistry", code: "BIO203" },
    
    // --- YEAR 3 ---
    { year: 3, name: "Physiology", code: "PHY301" },
    { year: 3, name: "Histology", code: "HIS302" },
    { year: 3, name: "Biochemistry", code: "BIO303" },

    // --- YEAR 4 (بقي كما هو كمثال) ---
    { year: 4, name: "Pediatrics", code: "PED401" },
    
    // --- YEAR 5 (بقي كما هو كمثال) ---
    { year: 5, name: "Clinical Skills", code: "CLIN501" },
];

// Data Structure for Questions (MUST match the 'code' in SUBJECTS_DATA)
// -------------------------------------------------------------------------
const QUESTIONS_BANK = {
    // أسئلة للـ Physiology (PHY101) - السنة الأولى
    "PHY101": [
        {
            question: "What is the primary function of the Nephron?",
            answers: { a: "Oxygen transport", b: "Blood filtration", c: "Hormone production", d: "Immune response" },
            correctAnswer: "b",
            explanation: "The Nephron is the structural and functional unit of the kidney, responsible for filtering blood."
        },
    ],
    // أسئلة للـ Histology (HIS102) - السنة الأولى
    "HIS102": [
        {
            question: "Which type of tissue covers body surfaces and lines body cavities?",
            answers: { a: "Connective tissue", b: "Muscle tissue", c: "Nervous tissue", d: "Epithelial tissue" },
            correctAnswer: "d",
            explanation: "Epithelial tissue (epithelium) forms protective barriers and secretory surfaces."
        },
    ],
    // أسئلة للـ Biochemistry (BIO103) - السنة الأولى
    "BIO103": [
         { question: "What is the powerhouse of the cell?", answers: { a: "Nucleus", b: "Mitochondria", c: "Ribosome", d: "Cytoplasm" }, correctAnswer: "b", explanation: "Mitochondria generate most of the cell's supply of ATP, used as a source of chemical energy." }
    ],
    
    // رموز المواد الأخرى التي تم إضافتها حديثًا (لا تحتوي على أسئلة بعد):
    "PHY201": [], "HIS202": [], "BIO203": [],
    "PHY301": [], "HIS302": [], "BIO303": [],
    
    // رموز المواد الأخرى التي بقيت كما هي:
    "PED401": [],
    "CLIN501": [],
};
// -------------------------------------------------------------------------

let currentStep = 1;
const totalSteps = 4;
let selectedYear = null;
let selectedSubjectCode = null;
let currentQuestions = [];

const steps = document.querySelectorAll('.step');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const submitBtn = document.getElementById('submit-btn');
const questionsDisplay = document.getElementById('questions-display');
const resultContainer = document.getElementById('result');
const subjectList = document.getElementById('subject-list');


// --- Navigation Functions ---

function navigateStep(direction) {
    // Validation: Only check validation when moving forward
    if (direction > 0 && !validateCurrentStep()) {
        return; 
    }
    
    // Hide current step
    document.getElementById(`step-${currentStep}`).classList.add('hidden');

    // Update step number
    currentStep += direction;

    // Boundary check
    if (currentStep < 1) {
        currentStep = 1;
    } else if (currentStep > totalSteps) {
        currentStep = totalSteps;
    }

    // Show new step
    document.getElementById(`step-${currentStep}`).classList.remove('hidden');

    // Update button visibility
    updateControls();
    
    // Action when entering a specific stage
    if (currentStep === 3) {
        // Step 3: Populate subjects based on selected year
        populateSubjects();
    } else if (currentStep === 4) {
        // Step 4: Load and build the quiz
        loadAndBuildQuiz();
    }
}

// Validation function (Only steps 2 and 3 require selection)
function validateCurrentStep() {
    if (currentStep === 1) {
        return true; // NUB is fixed, no validation needed
    }
    
    if (currentStep === 2 && !selectedYear) {
        alert("Please select an Academic Year before proceeding.");
        return false;
    }
    
    if (currentStep === 3 && !selectedSubjectCode) {
        alert("Please select a Subject before proceeding.");
        return false;
    }
    
    return true;
}

function updateControls() {
    // Prev button
    prevBtn.classList.toggle('hidden', currentStep <= 1);

    // Next button
    // Next is ONLY hidden in steps 2 and 3 because the selection box handles the navigation.
    nextBtn.classList.toggle('hidden', currentStep >= totalSteps);
    if (currentStep === 2 || currentStep === 3 || currentStep === 1) {
        nextBtn.classList.add('hidden');
    }

    // Submit button
    submitBtn.classList.toggle('hidden', currentStep < totalSteps);
}

// --- Step 2 & 3 Specific Functions ---

function selectYear(year) {
    selectedYear = year;
    // Highlight the selected year box
    document.querySelectorAll('.year-box').forEach(box => {
        box.classList.remove('selected-item');
    });
    document.querySelector(`[data-year="${year}"]`).classList.add('selected-item');
    
    // Reset subject selection when year changes
    selectedSubjectCode = null;
    
    // Move to the next step automatically
    navigateStep(1);
}

function selectSubject(code) {
    selectedSubjectCode = code;
    // Highlight the selected subject box
    document.querySelectorAll('.subject-box').forEach(box => {
        box.classList.remove('selected-item');
    });
    document.querySelector(`[data-code="${code}"]`).classList.add('selected-item');
    
    // Move to the next step automatically
    navigateStep(1);
}

function populateSubjects() {
    subjectList.innerHTML = ''; // Clear previous subjects
    
    const subjectsForYear = SUBJECTS_DATA.filter(sub => sub.year === selectedYear);
    
    if (subjectsForYear.length === 0) {
        subjectList.innerHTML = `<p style="text-align:center;">No subjects found for Year ${selectedYear}. Please add data in script.js.</p>`;
        return;
    }

    subjectsForYear.forEach(subject => {
        const button = document.createElement('button');
        button.className = 'subject-box';
        button.textContent = subject.name;
        button.setAttribute('data-code', subject.code);
        button.onclick = () => selectSubject(subject.code);
        subjectList.appendChild(button);
    });
}

// --- Step 4: Quiz Functions ---

function loadAndBuildQuiz() {
    // Get questions for the selected subject
    currentQuestions = QUESTIONS_BANK[selectedSubjectCode] || [];
    
    if (currentQuestions.length === 0) {
        questionsDisplay.innerHTML = `<p style="text-align:center;">No questions found for the selected subject. Check QUESTIONS_BANK in script.js.</p>`;
        submitBtn.classList.add('hidden');
        return;
    }
    
    const output = [];

    currentQuestions.forEach((q, qNum) => {
        const answersHTML = [];
        for (const letter in q.answers) {
            answersHTML.push(
                `<label>
                    <input type="radio" name="question${qNum}" value="${letter}">
                    ${q.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question">Q${qNum + 1}: ${q.question}</div>
            <div class="answers">${answersHTML.join('')}</div>
            <div class="explanation" id="exp-${qNum}">
                <strong>Explanation:</strong> ${q.explanation}
            </div>`
        );
    });

    questionsDisplay.innerHTML = output.join('');
    // Ensure the submit button is available for the quiz
    submitBtn.classList.remove('hidden');
}

function checkAnswers() {
    const answerContainers = questionsDisplay.querySelectorAll('.answers');
    let numCorrect = 0;

    currentQuestions.forEach((q, qNum) => {
        const answerContainer = answerContainers[qNum];
        const selector = `input[name=question${qNum}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        const explanationDiv = document.getElementById(`exp-${qNum}`);
        
        // Check and score
        if (userAnswer === q.correctAnswer) {
            numCorrect++;
        }
        
        // Highlight correct answer
        const correctLabel = answerContainer.querySelector(`input[value=${q.correctAnswer}]`).parentNode;
        if(correctLabel) {
            correctLabel.style.backgroundColor = '#90EE90'; // Light Green
        }
        
        // Highlight incorrect user answer
        if (userAnswer && userAnswer !== q.correctAnswer) {
            const incorrectLabel = answerContainer.querySelector(`input[value=${userAnswer}]`).parentNode;
            if(incorrectLabel) {
                incorrectLabel.style.backgroundColor = '#FFB6C1'; // Light Red
            }
        }
        
        // Display explanation
        explanationDiv.style.display = 'block';

        // Disable radio buttons after submission
        answerContainer.querySelectorAll('input').forEach(input => input.disabled = true);
    });

    // Display result message
    resultContainer.innerHTML = `You scored ${numCorrect} out of ${currentQuestions.length}.`;
    submitBtn.disabled = true; // Disable button after checking
}


// --- Initial Setup ---
document.addEventListener('DOMContentLoaded', () => {
    // Start by showing only the first step and updating controls
    updateControls();
    document.getElementById('step-1').classList.remove('hidden');
    
    // Add a listener to Step 1 to allow clicking anywhere in the container to proceed to Step 2
    document.getElementById('step-1').addEventListener('click', () => {
         if (currentStep === 1) {
             navigateStep(1);
         }
    });

    // Initially, the Previous button should be hidden
    prevBtn.classList.add('hidden');
});