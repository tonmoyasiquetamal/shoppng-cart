/* Case Function */
function updateProductNumber(product,price, isIncreasing) {
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
}
// phone increase increase & decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone',1229, true)
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1229, false);
})
// handle case increase & decrease event

/* for case plus & case number addition Boolean true */
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber("case",59, true);
});
/* for case minus & case number subtraction Boolean false */
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber("case",59, false);
})