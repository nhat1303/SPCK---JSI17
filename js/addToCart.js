import { firebaseDatabase } from "./initApp.js";
import { getFirestore, collection, getDocs, addDoc, getDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-lite.js";


// add data to cart 
const id = document.getElementById("product-id").innerHTML;
const addToCartBtn = document.getElementById("buy-btn");

const size = {
    S: document.getElementById("S").value,
    M: document.getElementById("M").value,
    L: document.getElementById("L").value,
    XL: document.getElementById("XL").value,
};

const addData = async (id, size) => {
    try {
        const prd = await getDoc(doc(firebaseDatabase, "products", id));
        if (prd != null) {
           const docRef = await addDoc(collection(firebaseDatabase, "cart"), {
                productId: id,
                // unitPrice: prd.price,
                // sizeS: size.S,
                // sizeM: size.M,
                // sizeL: size.L,
                // sizeXL: size.XL
                quantity: size.S,
                size: "S"

            });
            console.log("Document written with ID: ", docRef.id);
        } else alert("Can not found this product");
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

addToCartBtn.addEventListener("click", await addData(id, size).then(rs => rs));

// await addData(id, size).then(rs => rs)

