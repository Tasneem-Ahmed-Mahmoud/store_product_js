
let productDescriptionInput=document.getElementById("productDescription")
let productNameInput=document.getElementById("productName")
let productCategoryInput=document.getElementById("productCategory")
let productPriceInput  =document.getElementById("productPrice")
let addBtn=document.getElementById("addBtn")
let updateBtn=document.getElementById("updateBtn")
let productContainer=[]
if (localStorage.getItem("productData")!=null){
    productContainer=JSON.parse(localStorage.getItem("productData"))
    displayProduct()
}
//add product

function addProduct(){

    let newPrice=Number(productPriceInput.value)
    let product={
        name: productNameInput.value,
        desc:productDescriptionInput.value,
        price:newPrice,
        category:productCategoryInput.value
    }
    productContainer.push(product);
    let str=JSON.stringify( productContainer)
    localStorage.setItem('productData', str)

    displayProduct()
    // console.log( productContainer)
    // console.log(str)
    // // clear()
}
//display product in table

function displayProduct(){
    let cartona=""
    for(let i=0;i<productContainer.length;i++){
        cartona+=`<tr>
<td>${productContainer[i].name}</td>
<td>${productContainer[i].category}</td>
<td>${productContainer[i].price}</td>
<td>${productContainer[i].desc}</td>
<td><button type="button" class="btn btn-danger" ">update</button></td>
<td><button type="button" class="btn btn-warning"onclick="deleteProduct(${i}) "><i class="fa-regular fa-trash-can"></i></button></td>
</tr>`
//onclick="retriveProduct(${i})
document.getElementById("data").innerHTML=cartona
}

let updateBtns=document.querySelectorAll(".btn-danger")
 let arrayBtns=Array.from(updateBtns)

for(let i=0;i<updateBtns.length;i++){
    updateBtns[i].addEventListener("click",function(e){
   let indexOfBtn= arrayBtns.indexOf(e.target)
   retriveProduct(indexOfBtn)

    })}
}

    



    //clear form
    function clear(){


        
        productNameInput.value=""
        productPriceInput.value=""
        productDescriptionInput.value=""
        productCategoryInput.value=""
    }

    //dlete product
    function deleteProduct(i){
productContainer.splice(i,1)
let str=JSON.stringify( productContainer)
    localStorage.setItem('productData', str)
displayProduct()

    }


// //update product\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//     function retriveProduct(i){
//         productNameInput.value=productContainer[i].name
//         productCategoryInput.value= productContainer[i].category
//         productPriceInput.value=  productContainer[i].price
//         productDescriptionInput.value=  productContainer[i].desc
//         addBtn.innerHTML = "update product";

//         addBtn.onclick=function(){
//             productContainer[i].name= productNameInput.value
//             productContainer[i].category= productCategoryInput.value
//             productContainer[i].price= productPriceInput.value
//             productContainer[i].desc= productDescriptionInput.value
//             displayProduct()
//             localStorage.setItem("productData",JSON.stringify(productContainer))

//   addBtn.innerHTML = "add product";
//   addProduct()
//         }
        

//     }

//anther solution
//retriveProduct
// let updatedIndex;
function retriveProduct(i){
    updatedIndex=i
            productNameInput.value=productContainer[i].name
            productCategoryInput.value= productContainer[i].category
            productPriceInput.value=  productContainer[i].price
            productDescriptionInput.value=  productContainer[i].desc
           updateBtn.classList.remove("d-none")
           addBtn.classList.add("d-none")
}

    function updateProduct(){
        productContainer[updatedIndex].name= productNameInput.value
                    productContainer[updatedIndex].category= productCategoryInput.value
                    productContainer[updatedIndex].price= productPriceInput.value
                    productContainer[updatedIndex].desc= productDescriptionInput.value
                    displayProduct()
                    localStorage.setItem("productData",JSON.stringify(productContainer))

         
          updateBtn.classList.add("d-none")
          addBtn.classList.remove("d-none")
        
    }
addBtn.onclick=addProduct;
updateBtn.onclick=updateProduct;





function nameValidation(){
    let regex=/^[A-Z][a-z0-9 ]{3,30}$/
    
}





