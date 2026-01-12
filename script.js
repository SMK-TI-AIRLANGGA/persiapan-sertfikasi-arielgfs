// Data buku 
const books = [
    {
        judul: "Judul Buku 1",
        penulis: "Benazir",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkLMFlaj0pP400OZEVTOd3bjgZpn6chxfrvA&s"
    },
    {
        judul: "Judul Buku 2",
        penulis: "Rayhan",
        gambar: "https://www.gramedia.com/blog/content/images/2021/06/9786230020223_Sleeping_Giants.jpg"
    },
    {
        judul: "Judul Buku 3",
        penulis: "Dimas",
        gambar: "https://www.gramedia.com/blog/content/images/2020/06/strange-the-dreamer_gramedia.jpg"
    },
    {
        judul: "Judul Buku 4",
        penulis: "Hanif",
        gambar: "https://www.gramedia.com/blog/content/images/2020/06/red-rising_gramedia.jpg"
    }
];

const container = document.getElementById("bookContainer");

books.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${book.gambar}" alt="${book.judul}">
        <h3>${book.judul}</h3>
        <p>Penulis: ${book.penulis}</p>
        <button onclick="pinjamBuku(${index})">Detail</button>
    `;

    container.appendChild(card);
});



    function pinjamBuku(index) {
    books[index].dipinjam = true;
    ;
}
