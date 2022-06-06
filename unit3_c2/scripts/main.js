document.querySelector("#form")
document.getElementById("submit").addEventListener("click",submit)
 let userArr = [];
 function submit(){
     event.preventDefault();
let userobj ={
    name : document.querySelector("#name").value,
      email :document.querySelector("#email").value,
      address : document.querySelector("#address").value,
      amount : document.querySelector("#amount").value,
};
userArr.push(userobj)
console.log(userArr)
localStorage.setItem("user",JSON.stringify(userArr))
window.location.reload()

 }