function coupon(){
    document.getElementById("coupon").style.display = "flex";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
function closeCoupon(){
    document.getElementById("coupon").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}
var getCouponCode = (id) => {
    var couponCode = document.getElementById(id).innerText;
    document.getElementById("couponApplied").innerHTML = `Coupon Code ${couponCode} Applied Successfully. Enjoy the Meal!!`;
    document.getElementById("coupon").style.display = "none";
    document.getElementById("couponAppliedArea").style.display = "flex";
    

}