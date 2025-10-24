// ... (بقية مصفوفة الأسئلة والتصريحات تبقى كما هي) ...

// ----------------------------------------------------
// 3. Simple input validation (تعديل هذه الدالة)
// ----------------------------------------------------
function validateCurrentStep() {
    // Stage 1 (University) is now fixed, so we only validate from Stage 2 onwards.
    if (currentStep === 1) {
        return true; 
    }
    
    // Validation logic for Stage 2 (Year) and Stage 3 (Subject)
    const selector = `#step-${currentStep} .selection-input`;
    const inputElement = document.querySelector(selector);

    if (currentStep < 4 && inputElement && inputElement.value === "") {
        alert("Please make a selection before proceeding."); // Updated message
        return false;
    }
    return true;
}

// ... (بقية الدوال تبقى كما هي: buildQuiz, navigateStep, updateControls, checkAnswers) ...

// Initial control setup on load
updateControls();