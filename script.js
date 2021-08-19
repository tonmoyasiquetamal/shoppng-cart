function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseInput.value = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseInput.value = parseInt(caseNumber) - 1;
    }
    
}
/* for case plus & case number addition Boolean true */
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true);
});
/* for case minus & case number subtraction Boolean false */
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false);
    // 
})