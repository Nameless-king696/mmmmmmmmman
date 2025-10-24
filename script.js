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

    // --- YEAR 4 (Example) ---
    { year: 4, name: "Pediatrics", code: "PED401" },
    
    // --- YEAR 5 (Example) ---
    { year: 5, name: "Clinical Skills", code: "CLIN501" },
];

// Data Structure for Questions (MUST match the 'code' in SUBJECTS_DATA)
// -------------------------------------------------------------------------
const QUESTIONS_BANK = {
    // أسئلة للـ Physiology (PHY101) - السنة الأولى (بقي كما هو كمثال)
    "PHY101": [
        {
            question: "Question 1: What is the primary function of the Nephron?",
            answers: { a: "Oxygen transport", b: "Blood filtration", c: "Hormone production", d: "Immune response" },
            correctAnswer: "b",
            explanation: "The Nephron is the structural and functional unit of the kidney, responsible for filtering blood."
        },
        {
            question: "Question 2: Which hormone is produced by the adrenal glands?",
            answers: { a: "Insulin", b: "Adrenaline", c: "Thyroxine", d: "Estrogen" },
            correctAnswer: "b",
            explanation: "Adrenaline (Epinephrine) is produced by the adrenal medulla."
        },
        {
            question: "Question 3: What is the resting membrane potential (RMP) of a typical neuron?",
            answers: { a: "+30mV", b: "0mV", c: "-70mV", d: "-90mV" },
            correctAnswer: "c",
            explanation: "The RMP of a typical neuron is around -70mV, maintained by the Na+/K/ pump."
        },
    ],
    
    // Histology Questions (HIS102) - السنة الأولى - أسئلة "Cell 1"
    "HIS102": [
        {
            question: "What is considered the structural and functional unit of the body?",
            answers: { a: "Tissue", b: "Organ", c: "Cell", d: "Nucleus" },
            correctAnswer: "c",
            explanation: "The cell is universally recognized as the basic structural and functional unit of life."
        },
        {
            question: "The cytoplasm is composed of all except:",
            answers: { a: "Cytosol", b: "Organelles", c: "Nucleus", d: "Inclusions" },
            correctAnswer: "c",
            explanation: "Cytoplasm includes the cytosol, organelles, and inclusions, but the Nucleus is a separate structure and is not part of the cytoplasm."
        },
        {
            question: "The glycocalyx is composed of:",
            answers: { a: "Cholesterol", b: "Glycoproteins and glycolipids", c: "Phospholipids only", d: "Peripheral proteins" },
            correctAnswer: "b",
            explanation: "The glycocalyx (cell coat) is primarily formed by glycoproteins and glycolipids attached to the outer surface of the cell membrane."
        },
        {
            question: "The trilaminar structure of the cell membrane is best seen by:",
            answers: { a: "Light microscope", b: "Silver stain", c: "Electron microscope", d: "Fluorescence microscope" },
            correctAnswer: "c",
            explanation: "The extremely thin trilaminar structure of the cell membrane can only be resolved by the high magnification and resolution of the Electron Microscope."
        },
        {
            question: "The hydrophobic tails of phospholipids in the cell membrane face:",
            answers: { a: "Outside of the membrane", b: "Cytoplasm", c: "Extracellular space", d: "Each other (towards the inside of the bilayer)" },
            correctAnswer: "d",
            explanation: "The hydrophobic (water-hating) tails face inwards, shielded from the aqueous environment (cytoplasm and extracellular fluid) by the hydrophilic heads."
        },
        {
            question: "Which of the following proteins are embedded within the phospholipid bilayer?",
            answers: { a: "Peripheral proteins", b: "Extrinsic proteins", c: "Integral (intrinsic) proteins", d: "Enzymes" },
            correctAnswer: "c",
            explanation: "Integral or intrinsic proteins penetrate or pass entirely through the phospholipid bilayer, unlike peripheral (extrinsic) proteins which are only on the surface."
        },
        {
            question: "What is the main function of mitochondria?",
            answers: { a: "Protein synthesis", b: "Detoxification", c: "Energy production", d: "DNA replication" },
            correctAnswer: "c",
            explanation: "Mitochondria are known as the 'powerhouse of the cell' because their main function is the production of ATP (energy) through cellular respiration."
        },
        {
            question: "Mitochondria are more abundant in:",
            answers: { a: "Fat cells", b: "Inactive cells", c: "Active cells", d: "Dead cells" },
            correctAnswer: "c",
            explanation: "Mitochondria are abundant in metabolically active cells (e.g., liver, muscle) to meet their high energy demands."
        },
        {
            question: "Which of the following is a special stain used for mitochondria?",
            answers: { a: "Silver stain", b: "PAS", c: "Janus green", d: "Eosin" },
            correctAnswer: "c",
            explanation: "Janus green is a vital stain specifically used to visualize mitochondria in living cells."
        },
        {
            question: "The cristae in mitochondria are found in:",
            answers: { a: "Outer membrane", b: "Golgi body", c: "Inner membrane", d: "Ribosomes" },
            correctAnswer: "c",
            explanation: "The cristae are the folds of the inner mitochondrial membrane, increasing the surface area for cellular respiration."
        },
        {
            question: "Which of the following allows mitochondria to self-replicate?",
            answers: { a: "Cristae", b: "Matrix granules", c: "Presence of their own DNA", d: "Calcium stores" },
            correctAnswer: "c",
            explanation: "Mitochondria contain their own circular DNA, allowing them to synthesize some of their proteins and replicate independently."
        },
        {
            question: "Which organelle is basophilic under the light microscope due to ribosomes?",
            answers: { a: "Smooth ER", b: "Mitochondria", c: "Golgi apparatus", d: "Rough ER" },
            correctAnswer: "d",
            explanation: "The Rough Endoplasmic Reticulum (RER) is coated with ribosomes, which stain blue/purple (basophilic) with common histological stains because of their RNA content."
        },
        {
            question: "The main function of rough endoplasmic reticulum is:",
            answers: { a: "Steroid synthesis", b: "Protein synthesis", c: "Calcium storage", d: "Lipid metabolism" },
            correctAnswer: "b",
            explanation: "The RER's primary function is the synthesis, modification, and transport of proteins destined for secretion or insertion into membranes."
        },
        {
            question: "Which organelle is abundant in steroid-forming cells?",
            answers: { a: "Rough ER", b: "Golgi apparatus", c: "Smooth ER", d: "Nucleolus" },
            correctAnswer: "c",
            explanation: "The Smooth Endoplasmic Reticulum (SER) is highly developed in cells that synthesize steroid hormones (e.g., adrenal cortex, gonads)."
        },
        {
            question: "Which of the following is not a function of the smooth ER?",
            answers: { a: "Detoxification", b: "Protein synthesis", c: "Steroid hormone synthesis", d: "Lipid metabolism" },
            correctAnswer: "b",
            explanation: "Protein synthesis is primarily the function of the Rough ER and free ribosomes, not the Smooth ER."
        },
        {
            question: "What is the function of matrix granules in mitochondria?",
            answers: { a: "ATP synthesis", b: "Protein synthesis", c: "Calcium storage", d: "Lipid storage" },
            correctAnswer: "c",
            explanation: "Mitochondrial matrix granules are known to be sites for the storage and regulation of divalent cations, most notably calcium."
        },
        {
            question: "The cell coat (glycocalyx) is involved in all of the following except:",
            answers: { a: "Adhesion", b: "Recognition", c: "Rejection", d: "Energy production" },
            correctAnswer: "d",
            explanation: "The glycocalyx is involved in cell-to-cell recognition, adhesion, and immune responses (rejection), but its primary role does not include energy production."
        },
        {
            question: "Neonatal jaundice is related to:",
            answers: { a: "Damaged mitochondria", b: "Underdeveloped smooth ER in liver", c: "Lack of rough ER in liver", d: "Absence of Golgi apparatus" },
            correctAnswer: "b",
            explanation: "The Smooth ER in liver cells is responsible for conjugating (detoxifying) bilirubin. Underdevelopment of the SER in newborns leads to temporary unconjugated hyperbilirubinemia (jaundice)."
        },
    ],
    
    // Biochemistry Questions (BIO103) - السنة الأولى (بقي كما هو كمثال)
    "BIO103": [
         { question: "Question 1: What is the powerhouse of the cell?", answers: { a: "Nucleus", b: "Mitochondria", c: "Ribosome", d: "Cytoplasm" }, correctAnswer: "b", explanation: "Mitochondria generate most of the cell's supply of ATP, used as a source of chemical energy." }
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
let currentQuestionIndex = 0; // مؤشر السؤال الحالي (في المرحلة 4)
let userAnswers = {}; // لتخزين إجابات الطالب {0: 'a', 1: 'c', ...}
let quizSubmitted = false; // حالة لتتبع ما إذا تم تسليم الاختبار

const steps = document.querySelectorAll('.step');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const submitBtn = document.getElementById('submit-btn');
const questionsDisplay = document.getElementById('questions-display');
const resultContainer = document.getElementById('result');
const subjectList = document.getElementById('subject-list');


// --- Navigation Functions (Stages 1, 2, 3) ---

function navigateStep(direction) {
    if (quizSubmitted) return; 

    if (direction > 0 && !validateCurrentStep()) {
        return; 
    }
    
    // إخفاء المرحلة الحالية
    document.getElementById(`step-${currentStep}`).classList.add('hidden');

    currentStep += direction;

    if (currentStep < 1) {
        currentStep = 1;
    } else if (currentStep > totalSteps) {
        currentStep = totalSteps;
    }
    
    // إعادة تعيين حالة الاختبار عند العودة من مرحلة الأسئلة
    if (currentStep < 4 && currentStep + direction > 4) {
        currentQuestionIndex = 0;
        userAnswers = {};
        quizSubmitted = false;
    }

    // إظهار المرحلة الجديدة
    document.getElementById(`step-${currentStep}`).classList.remove('hidden');

    if (currentStep === 3) {
        populateSubjects();
    } else if (currentStep === 4) {
        loadAndBuildQuiz();
    }

    updateControls();
}

function validateCurrentStep() {
    if (currentStep === 1) return true;
    
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


// --- Step 2 & 3 Selection Functions ---

function selectYear(year) {
    selectedYear = year;
    document.querySelectorAll('.year-box').forEach(box => {
        box.classList.remove('selected-item');
    });
    document.querySelector(`[data-year="${year}"]`).classList.add('selected-item');
    
    selectedSubjectCode = null;
    navigateStep(1);
}

function selectSubject(code) {
    selectedSubjectCode = code;
    document.querySelectorAll('.subject-box').forEach(box => {
        box.classList.remove('selected-item');
    });
    document.querySelector(`[data-code="${code}"]`).classList.add('selected-item');
    
    navigateStep(1);
}

function populateSubjects() {
    subjectList.innerHTML = '';
    
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


// --- Step 4: Quiz (Question per page) Functions ---

function loadAndBuildQuiz() {
    currentQuestions = QUESTIONS_BANK[selectedSubjectCode] || [];
    currentQuestionIndex = 0;
    userAnswers = {};
    quizSubmitted = false;
    resultContainer.innerHTML = '';
    
    if (currentQuestions.length === 0) {
        questionsDisplay.innerHTML = `<p style="text-align:center;">No questions found for the selected subject.</p>`;
        submitBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
        return;
    }
    
    showQuestion();
}

function showQuestion() {
    questionsDisplay.innerHTML = '';
    
    if (currentQuestionIndex >= currentQuestions.length) {
        // إذا حاولنا عرض سؤال خارج النطاق، ننتقل للتحقق النهائي
        checkAnswers();
        return;
    }
    
    const q = currentQuestions[currentQuestionIndex];
    const qNum = currentQuestionIndex;
    
    const answersHTML = [];
    for (const letter in q.answers) {
        const isChecked = userAnswers[qNum] === letter ? 'checked' : '';
        answersHTML.push(
            `<label>
                <input type="radio" name="question${qNum}" value="${letter}" ${isChecked}>
                ${q.answers[letter]}
            </label>`
        );
    }

    questionsDisplay.innerHTML = `
        <div class="question">Q${qNum + 1} of ${currentQuestions.length}: ${q.question}</div>
        <div class="answers">${answersHTML.join('')}</div>
        <div class="explanation hidden" id="exp-${qNum}">
            <strong>Explanation:</strong> ${q.explanation}
        </div>
    `;
    
    // ربط زر "Previous" و "Next" بوظيفة التنقل بين الأسئلة
    prevBtn.onclick = () => navigateQuestion(-1);
    nextBtn.onclick = () => navigateQuestion(1);

    updateControls();
}


function navigateQuestion(direction) {
    const qNum = currentQuestionIndex;
    const answerContainer = questionsDisplay.querySelector('.answers');
    const selector = `input[name=question${qNum}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // لا يمكن الانتقال للأمام إذا لم يتم اختيار إجابة (في حالة لم يكن السؤال الأخير وتم الضغط على Submit)
    if (direction > 0 && !userAnswer && currentQuestionIndex < currentQuestions.length - 1) {
        alert("Please select an answer before proceeding.");
        return;
    }
    
    // حفظ الإجابة الحالية
    if (userAnswer) {
        userAnswers[qNum] = userAnswer;
    }

    currentQuestionIndex += direction;

    if (currentQuestionIndex < 0) {
        // العودة إلى المرحلة 3
        navigateStep(-1);
    } 
    else if (currentQuestionIndex >= currentQuestions.length) {
        // الانتقال إلى مرحلة التحقق (Submit)
        checkAnswers();
    }
    else {
        // عرض السؤال التالي/السابق
        showQuestion();
    }
}


function checkAnswers() {
    if (quizSubmitted) return;
    
    questionsDisplay.innerHTML = '';
    quizSubmitted = true;
    
    let numCorrect = 0;
    const totalQuestions = currentQuestions.length;

    const finalReviewOutput = [];

    currentQuestions.forEach((q, qNum) => {
        const userAnswer = userAnswers[qNum];
        const isCorrect = userAnswer === q.correctAnswer;
        
        if (isCorrect) {
            numCorrect++;
        }

        const answerClass = isCorrect ? 'correct-answer' : (userAnswer ? 'incorrect-answer' : 'unanswered-answer');
        
        finalReviewOutput.push(
            `<div class="question" style="color:#333; margin-top: 30px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">
                Q${qNum + 1}: ${q.question} 
            </div>
            <div class="answers">
                <p><strong>Your Answer:</strong> ${userAnswer ? q.answers[userAnswer] : 'No Answer'}</p>
                <p class="${answerClass}"><strong>Correct Answer:</strong> ${q.answers[q.correctAnswer]}</p>
            </div>
            <div class="explanation" style="display: block; background-color: #f0f0ff;">
                <strong>Explanation:</strong> ${q.explanation}
            </div>`
        );
    });

    questionsDisplay.innerHTML = finalReviewOutput.join('');

    resultContainer.innerHTML = `You scored ${numCorrect} out of ${totalQuestions}.`;
    
    updateControls(); 
}


// --- Controls Update ---

function updateControls() {
    const isQuizStage = currentStep === 4 && !quizSubmitted;
    const isInitialStage = currentStep < 4;

    // التحكم في الأزرار في المراحل الأولية
    if (isInitialStage) {
        prevBtn.classList.toggle('hidden', currentStep <= 1);
        nextBtn.classList.add('hidden'); // يتم الانتقال بالضغط على المربع في هذه المراحل
        submitBtn.classList.add('hidden');
        
        // ربط زر Previous بوظيفة التنقل بين المراحل
        prevBtn.onclick = () => navigateStep(-1);
        return;
    }

    // التحكم في الأزرار بعد التسليم (الملخص النهائي)
    if (quizSubmitted) {
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
        submitBtn.classList.add('hidden');
        return;
    }

    // التحكم في الأزرار داخل مرحلة الأسئلة (سؤال واحد في الصفحة)
    if (isQuizStage) {
        
        // زر السابق (Previous)
        // يتم إخفاؤه في أول سؤال
        prevBtn.classList.toggle('hidden', currentQuestionIndex === 0);
        
        // زر التالي / التسليم
        if (currentQuestionIndex < currentQuestions.length - 1) {
            // لم نصل إلى السؤال الأخير بعد
            nextBtn.classList.remove('hidden');
            nextBtn.textContent = 'Next Question';
            submitBtn.classList.add('hidden');
        } else {
            // السؤال الأخير - عرض زر التسليم
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
            submitBtn.textContent = 'Submit Quiz';
            submitBtn.onclick = () => navigateQuestion(1); // ينتقل للأمام لحفظ الإجابة ثم checkAnswers
            submitBtn.disabled = false;
        }
    }
}


// --- Initial Setup ---
document.addEventListener('DOMContentLoaded', () => {
    // إخفاء جميع المراحل ما عدا الأولى (يجب أن تكون المرحلة 1 ظاهرة في HTML أساساً)
    document.querySelectorAll('.step').forEach((step, index) => {
        if (index > 0) {
            step.classList.add('hidden');
        }
    });

    // تحديث أزرار التحكم لعرض الحالة الأولية (المرحلة 1)
    currentStep = 1;
    updateControls();
    
    // إضافة مستمع للنقر على المرحلة 1 للانتقال إلى المرحلة 2
    document.getElementById('step-1').addEventListener('click', () => {
         if (currentStep === 1 && !quizSubmitted) {
             navigateStep(1);
         }
    });
});