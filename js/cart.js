import { firebaseDatabase } from "./initApp.js";
import { getFirestore, collection, getDocs, addDoc, getDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-lite.js";


document.getElementById("avatar-account").addEventListener('click', function () {
    window.location.href = "index8.html";
})




// CART 

const cartItems = [
    {
        type: "áo thun",
        size: "",
        quantity: "",
        color: ""

    },
    {
        type: "hoodie tay ngắn",
        size: "",
        quantity: "",
        color: ""

    },
    {
        type: "hoodie tay dài",
        size: "",
        quantity: "",
        color: ""

    },
    {
        type: "áo polo",
        size: "",
        quantity: "",
        color: ""

    },
    {
        type: "áo ba lỗ",
        size: "",
        quantity: "",
        color: ""

    },
]


//------------ Code with data from firestore --------------------
// khai bao cac bien so can thiet
const db = firebaseDatabase;
const cart = document.getElementById("cart");

// get data from list 
let productContainer = document.getElementById("products");
const getData = async (db) => {
    const querySnapshot = await getDocs(collection(db, "cart"));

    querySnapshot.forEach((doc) => {
        
        productContainer.innerHTML += `
  <div class="product">
       <ion-icon class ="remove" name="close-circle-outline"></ion-icon>
       <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-user-19.png" >
          <span>${doc.data().productId}</span>
      </div>
      <div  class="price">asg</div>
      <div class="quantity">    
      <ion-icon name="caret-back-circle-outline"></ion-icon>
      <span>${doc.data().quantity}</span>
      <ion-icon name="caret-forward-circle-outline"></ion-icon>
      </div>
      <div class="total">
      123,00$
      </div>
  `
        // console.log(`${doc.id} => ${doc.data()}`);
    });
    return productContainer;
}

cart.innerHTML = await getData(db).then(rs => rs);




// let productContainer = document.getElementById("products");

// const getData = async (db) => {
//   const querySnapshot = await getDocs(collection(db, "cart"));
//   querySnapshot.forEach((doc) => {
//     productContainer.innerHTML += `
//       <div class="product">
//         <ion-icon class="remove" name="close-circle-outline"></ion-icon>
//         <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-user-19.png">
//         <span>${doc.data().productid}
//       </div>
//       <div class="price">asg</div>
//       <div class="quantity">
//         <ion-icon name="caret-back-circle-outline"></ion-icon>
//         <span>${doc.data().quantity}
//         <ion-icon name="caret-forward-circle-outline"></ion-icon>
//       </div>
//       <div class="total">
//         123,00$
//       </div>
//     `;
//   });
//   return productContainer;
// }

// cart.innerHTML = await getData(db).then(rs => rs);