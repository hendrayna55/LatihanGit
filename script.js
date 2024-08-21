// Latihan 1
window.onload = function() {
    // Mengubah teks heading setelah halaman dimuat
    document.getElementById('heading').innerText = "Latihan JavaScript Selesai";

};

//Latihan 2
// Deklarasikan variabel
let name = "John";
const age = 30;

// Menampilkan nama dan umur di dalam div dengan ID "output"
let outputDiv = document.getElementById('output');
outputDiv.innerHTML = `<p>Name: ${name}</p>`;
outputDiv.innerHTML += `<p>Age: ${age}</p>`;

// Membuat array dan menampilkan semua buah di dalam div
let fruits = ["Apple", "Banana", "Mango"];
outputDiv.innerHTML += "<p>Fruits:</p><ul>";
for (let i = 0; i < fruits.length; i++) {
    outputDiv.innerHTML += `<li>${fruits[i]}</li>`;
}
outputDiv.innerHTML += "</ul>";

// Membuat objek dan menampilkan properti firstName dan lastName
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
outputDiv.innerHTML += `<p>First Name: ${person.firstName}</p>`;
outputDiv.innerHTML += `<p>Last Name: ${person.lastName}</p>`;

// Latihan 3
function cekNilai(){
    let userInput = document.getElementById("userInput").value;
    let outputDiv = document.getElementById('output');

    if (userInput > 10) {
        outputDiv.innerHTML += "<p>Nilai lebih besar dari 10</p>";
    } else if(userInput == 10) {
        outputDiv.innerHTML += "<p>Nilai sama dengan 10</p>";
    } else {
        outputDiv.innerHTML += "<p>Nilai kurang dari 10</p>";
    }

    outputDiv.innerHTML += "<p>Angka 1 hingga " + userInput + ":</p><ul>";
    for (let index = 1; index <= userInput; index++) {
        outputDiv.innerHTML += `<li>${index}</li>`;
    }
    outputDiv.innerHTML += "</ul>";
}

// Latihan 4
function greet(name){
    return "Hello, " + name;
}
outputDiv.innerHTML += greet("Hendra");

function calculateSquare(number) {
    return number * number;
}
outputDiv.innerHTML += `<p>${calculateSquare(4)}</p>`;
outputDiv.innerHTML += `<p>${calculateSquare(6)}</p>`;

const penjumlahan = (angka1, angka2) => {
    return angka1 + angka2;
}
outputDiv.innerHTML += `<p>${penjumlahan(4,8)}</p>`;
outputDiv.innerHTML += `<p>${penjumlahan(5,12)}</p>`;

// Latihan 5
let students = ["Alice", "Bob", "Charlie"];
students.push("Nana");
outputDiv.innerHTML += "<h5>Nama-nama Siswa</h5><ul>";
students.forEach(element => {
    outputDiv.innerHTML += `<li>${element}</li>`;
});
outputDiv.innerHTML += "</ul>";

let car = {brand: "Toyota", model: "Corolla", year: 2020};

outputDiv.innerHTML += "<h5>Detail Mobil:</h5><ul>";
for (let key in car) {
    outputDiv.innerHTML += `<li>${key}: ${car[key]}</li>`;
}
outputDiv.innerHTML += "</ul>";

let cars = [
    {brand: "Toyota", model: "Corolla", year: 2020},
    {brand: "Honda", model: "Civic", year: 2019},
    {brand: "Ford", model: "Mustang", year: 2018}
];

outputDiv.innerHTML += "<h5>Daftar Mobil:</h5>";
cars.forEach(function(car) {
    outputDiv.innerHTML += `<p>Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}</p>`;
});