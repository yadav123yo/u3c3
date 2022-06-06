//https://masai-vouchers-api.herokuapp.com/api/vouchers


let purchase = JSON.parse(localStorage.getItem("purchase"))

displayData(purchase);

function displayData(purchase){
    let img = purchase.image
    console.log(img)
    
}