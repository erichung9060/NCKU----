const questionAnswers = 
{
    "Which of the following equipment provides the best protection for samples and personnel?": "Class II Biosafety cabinet",
    "What do you “NOT” need to apply from Biosafety and Radiation Safety Division in Center for Occupational Safety and Health and Environmental Protection?": "Chemical waste application",
    "Which of the following description is wrong?": "E. coli from strain K-12 for gene cloning is classified as RG-2",
    "Which one should have higher standards for transportation of biological materials?": "Packaging category A",
    "How many levels of the risk group does the hazardous pathogenicity classify?": "4",
    "How often does a BSL-2 laboratory need to submit the report of emergency contingency plan and drill?": "every year",
    "Which is the act governing biosafety and biosecurity in Taiwan?": "All of above",
    "4.How often does personnel of a laboratory or storage facility shall attend at least 4 hours of continuing education courses on biosafety and biosecurity?": "every year",
    "What is not necessary for Biosafety Level 2 Laboratory?": "Negative pressure flow",
    "What is “NOT” necessary to apply a BSL laboratory?": "All of above are not necessary.",
    "How many hours of basic courses on biosafety and biosecurity do new employees of a laboratory or storage facility need to attend at least?": "8",
    "Which one is NOT suggested for biomedical waste containers?": "Styrofoam container"
}

document.querySelectorAll('div.qtext').forEach((questionElement) => {
    const question = questionElement.innerText.trim();
    const correctAnswer = questionAnswers[question];

    if (correctAnswer) {
        const answersDiv = questionElement.closest('.qtext').nextElementSibling;
        const optionLabels = answersDiv.querySelectorAll('label');

        optionLabels.forEach((label) => {
            if (label.innerText.includes(correctAnswer)) {
                const input = label.previousElementSibling;
                if (input && input.type === 'radio') {
                    input.click();
                    console.log(`已填入答案：${correctAnswer}`);
                }
            }
        });
    } else {
        console.warn(`未找到答案對應的題目：${question}`);
    }
});