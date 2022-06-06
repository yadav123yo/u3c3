
data = [
    {
name : "Buffets",
image :"https://tse2.mm.bing.net/th?id=OIP.Z3h3UHwyYyTkUtnRARx1rQHaFj&pid=Api&P=0&w=268&h=201",
price :299
    },

    {
  name : "Buffets",
        image :"https://tse2.mm.bing.net/th?id=OIP.Z3h3UHwyYyTkUtnRARx1rQHaFj&pid=Api&P=0&w=268&h=201",
        price :299
            },

            {
                name : "Buffets",
                image :"https://tse2.mm.bing.net/th?id=OIP.Z3h3UHwyYyTkUtnRARx1rQHaFj&pid=Api&P=0&w=268&h=201",
                price :299
                    },

                    {
                        name : "Buffets",
                        image :"https://tse2.mm.bing.net/th?id=OIP.Z3h3UHwyYyTkUtnRARx1rQHaFj&pid=Api&P=0&w=268&h=201",
                        price :299
                            },
                            {
                                name : "Buffets",
                                image :"https://tse2.mm.bing.net/th?id=OIP.Z3h3UHwyYyTkUtnRARx1rQHaFj&pid=Api&P=0&w=268&h=201",
                                price :299
                                    },
                                    
    
                                        {
                                            name : "Buffets",
                                            image :"https://tse2.mm.bing.net/th?id=OIP.Z3h3UHwyYyTkUtnRARx1rQHaFj&pid=Api&P=0&w=268&h=201",
                                            price :299
                                                },                                  ,
                                                {
                                                    name : "Buffets",
                                                    image :"https://tse2.mm.bing.net/th?id=OIP.Z3h3UHwyYyTkUtnRARx1rQHaFj&pid=Api&P=0&w=268&h=201",
                                                    price :299
                                                        },
                                                        {
                                                            name : "Buffets",
                                                            image :"https://tse2.mm.bing.net/th?id=OIP.Z3h3UHwyYyTkUtnRARx1rQHaFj&pid=Api&P=0&w=268&h=201",
                                                            price :299
                                                                },
                                                                {
                                                                    name : "Buffets",
                                                                    image :"https://tse2.mm.bing.net/th?id=OIP.Z3h3UHwyYyTkUtnRARx1rQHaFj&pid=Api&P=0&w=268&h=201",
                                                                    price :299
                                                                        },
                                                                    
]

let purArr = [];


data.forEach(function(el){
    let voucher = document.createElement("div")
    let img = document.createElement("img")
    img.setAttribute("src",el.image);
    let name = document.createElement("p")
    name.innerText = el.name;
    let price = document.createElement("p")
    price.innerText = el.price;
    let btn = document.createElement("button")
    btn.innerText = "Buy"
   btn.addEventListener("click",function(){
       addlocal(el)
   });

    voucher.append(img,name,price,btn)
    voucher_list.append(voucher)
})

function addlocal(el){
//console.log(elem);
purArr.push(el);
localStorage.setItem("purchase",JSON.stringify(purArr))
}