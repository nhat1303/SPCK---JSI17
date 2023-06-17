// import { user } from "./index8.2.js"
import { getFirestore, collection, getDocs, addDoc, getDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-lite.js";
import { firebaseDatabase } from "./initApp.js"
// get data from a list 




// console.log(await user)
// SCROLL 
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


document.getElementById("avatar-account").addEventListener('click', function(){
    window.location.href = "index8.html";
})

// get data from list 
const getData = async (db) =>{
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
});
}

// Create data 
const createData = async(db, obj)=> {
    try {
        const docRef = await addDoc(collection(db, "cart"), {
          productId : obj.id,
          quantity:obj.quantity,
          size: obj.size,

        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
}

// delete data 
const deleteDatabyId = async (db, id) => {
    await deleteDoc(doc(db, "cart", id));
    location.reload()
}

// test 
// console.log(await getData(firebaseDatabase))
// document.title = "Home"
// const obj = { id: " aothun adsgag", quantity: 3, size: "XL"}
// await createData(firebaseDatabase, obj)  


// test 

// await deleteDatabyId(firebaseDatabase, "dkgh;asghas;")