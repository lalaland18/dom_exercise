// const tombolUbahBackground = document.getElementById("ubah-background");

// tombolUbahBackground.onclick = function () {
//   tombolUbahBackground.style.width = "500px";
//   tombolUbahBackground.style.height = "5000px";
//   tombolUbahBackground.style.fontSize = "200px";
// };

// tombolUbahBackground.innerText = "Ubah update";

// const allPWithClassParagraf = document.getElementsByClassName("paragraf");
// const allPWithQuerySelector = document.querySelectorAll(".paragraf");

// console.log("HTML Collection");
// console.log(allPWithClassParagraf);

// console.log("NodeList");
// console.log(allPWithQuerySelector);


// // buat text node
// const pText = document.createTextNode("Example 3")
// // buat element node
// const pTag = document.createElement("p")
// pTag.classList.add('paragraf')

// // tambahkan text node ke elemen
// pTag.appendChild(pText)

// document.body.appendChild(pTag)

// console.log("HTML Collection");
// console.log(allPWithClassParagraf);

// console.log("NodeList");
// console.log(allPWithQuerySelector);

// const buttonYangAkanDiganti = document.getElementById("akan-tergantikan")


// const buttonPengganti = document.createElement("button")
// const buttonPenggantiText = document.createTextNode("Button Pengganti")

// buttonPengganti.appendChild(buttonPenggantiText)

// document.body.replaceChild(buttonPengganti, buttonYangAkanDiganti)

// alert("Hey kangan begitu")
// const name = prompt("Siapa namamu?")
// const isConfirmed = confirm("Are you sure")

// console.log(isConfirmed);

// ambil lists untuk menampung list
const ulLists = document.getElementById("lists")
const addButton = document.getElementById("add-list")

function addNewList() {
   // Tangkap nilai list
   let userList = prompt("Insert some list")

   // kita buat elemen li baru
   const newLi = document.createElement("li")
   const newliText = document.createTextNode(userList)

   // Tambahkan textNode ke element
   newLi.appendChild(newliText)

   // Tambahkan ke ul list
   ulLists.appendChild(newLi)
}

// addButton.onclick = addNewList
// addButton.onclick = function() {
//    alert("Tertimpa")
// }


addButton.addEventListener("click", addNewList)
addButton.addEventListener("click",function() {
    alert("Tertimpa")
})
