// مصفوفة الأسئلة (نفس المصفوفة السابقة)
const questions = [
    { question: "ما هي عاصمة مصر؟", answers: { a: "الإسكندرية", b: "القاهرة", c: "الجيزة", d: "أسوان" }, correctAnswer: "b" },
    { question: "كم عدد الكواكب في المجموعة الشمسية؟", answers: { a: "7", b: "8", c: "9", d: "10" }, correctAnswer: "b" },
    { question: "ما هو العنصر الكيميائي الذي رمزه O؟", answers: { a: "الذهب", b: "الأكسجين", c: "الحديد", d: "الهيدروجين" }, correctAnswer: "b" }
];

// المتغيرات الخاصة بالتحكم في المراحل
let currentStep = 1;
const totalSteps = 4;

const steps = document.querySelectorAll('.step');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const submitBtn = document.getElementById('submit-btn');
const questionsDisplay = document.getElementById('questions-display');
const resultContainer = document.getElementById('result');

// ----------------------------------------------------
// 1. دالة عرض الأسئلة (تستخدم فقط في المرحلة 4)
// ----------------------------------------------------
function buildQuiz() {
    const output = [];

    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });

    questionsDisplay.innerHTML = output.join('');
}

// ----------------------------------------------------
// 2. دالة التنقل بين المراحل
// ----------------------------------------------------
function navigateStep(direction) {
    // 1. التحقق من صحة الإدخال قبل الانتقال للأمام
    if (direction > 0 && !validateCurrentStep()) {
        return; // توقف إذا كان هناك خطأ في الإدخال
    }

    // إخفاء المرحلة الحالية
    document.getElementById(`step-${currentStep}`).classList.add('hidden');

    // تحديث رقم المرحلة
    currentStep += direction;

    // التأكد من عدم تجاوز الحدود
    if (currentStep < 1) {
        currentStep = 1;
    } else if (currentStep > totalSteps) {
        currentStep = totalSteps;
    }

    // عرض المرحلة الجديدة
    document.getElementById(`step-${currentStep}`).classList.remove('hidden');

    // 2. تحديث الأزرار بناءً على المرحلة
    updateControls();

    // إذا وصلنا إلى مرحلة الأسئلة (المرحلة 4)، اعرض الأسئلة
    if (currentStep === 4 && questionsDisplay.innerHTML === '') {
        buildQuiz();
    }
}

// ----------------------------------------------------
// 3. دالة التحقق من الإدخال (مثال بسيط)
// ----------------------------------------------------
function validateCurrentStep() {
    const selector = `#step-${currentStep} .selection-input`;
    const inputElement = document.querySelector(selector);

    if (currentStep < 4 && inputElement && inputElement.value === "") {
        alert("الرجاء اختيار خيار قبل المتابعة.");
        return false;
    }
    return true;
}

// ----------------------------------------------------
// 4. دالة تحديث أزرار التنقل
// ----------------------------------------------------
function updateControls() {
    // إظهار وإخفاء زر "السابق"
    if (currentStep > 1) {
        prevBtn.classList.remove('hidden');
    } else {
        prevBtn.classList.add('hidden');
    }

    // إظهار وإخفاء زر "التالي" و "إنهاء الاختبار"
    if (currentStep < totalSteps) {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    } else {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    }
}

// ----------------------------------------------------
// 5. دالة التحقق من الإجابات (كما في السابق)
// ----------------------------------------------------
function checkAnswers() {
    const answerContainers = questionsDisplay.querySelectorAll('.answers');
    let numCorrect = 0;

    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // التحقق وتلوين الإجابات (يمكنك استخدام CSS classes)
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
        }
        
        // إظهار الإجابة الصحيحة لتوضيح النتيجة
        const correctLabel = answerContainers[questionNumber].querySelector(`input[value=${currentQuestion.correctAnswer}]`).parentNode;
        if(correctLabel) {
            correctLabel.style.backgroundColor = '#90EE90'; 
        }

        // تعطيل الأزرار بعد عرض النتيجة
        answerContainer.querySelectorAll('input').forEach(input => input.disabled = true);
    });

    resultContainer.innerHTML = `لقد أجبت على ${numCorrect} من أصل ${questions.length} أسئلة بشكل صحيح.`;
    submitBtn.disabled = true; // تعطيل زر الإنهاء بعد التحقق
}

// تشغيل دالة تحديث الأزرار عند التحميل الأولي
updateControls();