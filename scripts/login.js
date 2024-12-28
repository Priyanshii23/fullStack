 import { baseUrl } from "./baseurl.js";


let login = document.getElementById("form")
form.addEventListener("submit", function(){
    event.preventDefault()
   let email = form.email.value
    let password = form.password.value


    // checking whether user is present in db

    fetch(`${baseUrl}/userAdded`)
    .then((res)=> res.json())
    .then((data)=>{
        let user = data.filter((el,i)=> el.email==email);
        if(user.length!=0){
            if(user[0].password==password){
                alert("Login Success")
                localStorage.setItem("loginData", JSON.stringify(user[0]))
                window.location.href="todo.html"
            }
            else{
                alert("Password is Incorrect, please login with correct password")
            }
        } else{
            alert("user not found, Please signUp")
            window.location.href("index.html")
        }
    })
    .catch((err)=>{
        alert("Something went wrong...")
        console.log("err",err)
    })
    

})
