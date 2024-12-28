import { baseUrl } from "./baseurl.js";

console.log(baseUrl)
let form = document.getElementById("form");
form.addEventListener("submit", function (){
    event.preventDefault();
    let name = form.name.value;
    let email = form.email.value;
    let number = form.number.value;
    let password = form.password.value;

    let obj = { name, email, number, password };


    fetch(`${baseUrl}/userAdded`)
        .then((res) => res.json())
        .then((data)=> {
            let user = data.filter((el, i) => el.email == email);
            if (user.length != 0) {
                alert("User already registered, please Login")
                window.location.href = "login.html"
            } else {
                fetch(`${baseUrl}/userAdded`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(obj)
                })
                    .then(() => {
                        alert("SignUp Successfull...")
                        window.location.href = "todo.html"
                })
            }
        })
        .catch((err)=>{
            alert("Something went Wrong, please try again later...")
            console.log(err)
        })


})

