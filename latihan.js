// Ambil elemen tombol dan container
const NewButton = document.getElementById("tombol");
const addViolet = document.querySelector(".violet");

// Event listener untuk tombol
NewButton.addEventListener("click", function () {
  // Buat elemen <div> baru
  const newBox = document.createElement("div");

  // Tambahkan kelas "square" pada elemen <div> baru
  newBox.classList.add("square");

  // Tambahkan elemen <div> baru ke dalam .violet
  addViolet.appendChild(newBox);
});
