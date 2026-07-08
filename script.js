alert("Welcome to ShopEase!");
let cart = [];

function addToCart(product, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        product: product,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product + " has been added to the cart!");
}
function placeOrder(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let payment = document.getElementById("payment").value;

    if(name==="" || email==="" || phone==="" || address==="" || city==="" || payment===""){

        alert("Please complete all your checkout details.");

        return;
    }

    alert("Thank you for shopping with ShopEase!\n\nYour order has been placed successfully.");

    localStorage.removeItem("cart");

    window.location.href = "index.html";
}
function registerUser(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirm = document.getElementById("confirmPassword").value.trim();

    if(password !== confirm){
        alert("Passwords do not match.");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");

    window.location.href = "login.html";
}
function loginUser(event){

    event.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    let user = JSON.parse(localStorage.getItem("user"));

    if(user && email === user.email && password === user.password){

        alert("Welcome back, " + user.name + "!");

        window.location.href = "index.html";

    }else{

        alert("Incorrect email or password.");

    }
}
