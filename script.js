/* Case Function */
function updateProductNumber(product, price, isIncreasing) {
    const ProductInput = document.getElementById(product + '-number');
    let productNumber = ProductInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    ProductInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
}
// 
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
// 
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tax-amount').innerText=tax;
    document.getElementById('total-price').innerText=totalPrice;
}
// phone increase increase & decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1229, true)
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1229, false);
})
// handle case increase & decrease event

/* for case plus & case number addition Boolean true */
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber("case", 59, true);
});
/* for case minus & case number subtraction Boolean false */
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber("case", 59, false);
})