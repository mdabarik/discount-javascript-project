
const coupons = {
    LEVELUP25: "25%",
    BIGSALE: "20%",
    BARIKID: "50%",
    HAPPYNEWYEAR: "30%"
}

document.getElementById('btn-apply').addEventListener('click', function(e) {
    const oldPrice = getValueById('old-price');
    const getCoupon = document.getElementById('input-field').value.trim();
    document.getElementById('input-field').value = "";
    if (!(getCoupon in coupons)) {
        document.getElementById('coupon-info').innerHTML = `<p class='text-red-300'> Invalid token. Please enter valid token </p>`
    } else {
        if (getValueById('old-price') > getValueById('new-price')) {
            document.getElementById('coupon-info').innerHTML = `You saved: $ <span id="discount-for-you">${discount}</span> <p>(Already used coupon: ${getCoupon})</p>`;
            return;
        }
        const percent = parseFloat(coupons[getCoupon]) / 100;
        const discount = (oldPrice * percent).toFixed(2);
        const newPrice = (oldPrice - discount).toFixed(2);
        setTextById('new-price', newPrice);
        document.getElementById('coupon-info').innerHTML = `You saved: $ <span id="discount-for-you">${discount}</span> <p>(coupon used: ${getCoupon})</p>`
        document.getElementById('off').innerText = parseFloat(coupons[getCoupon]);
    }
})

