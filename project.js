// Select Elements

const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];

// UI Constructor

const ui = new UI();

const storage = new Storage();

// Tüm Eventleri YÜkleme

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addCar);

  document.addEventListener("DOMContentLoaded", function () {
    let cars = storage.getCarsFromStorage();
  });

  cardBody.addEventListener("click", deleteCar);
}

function addCar(e) {
  const title = titleElement.value;
  const price = priceElement.value;
  const url = urlElement.value;

  if (title === "" || price === "" || url === "") {
    // Boşluk bıraktığındaki hata kutucuğu

    ui.displayMessage(
      "Araçları eklemek için tüm alanları doldurunuz!",
      "danger"
    );
  } else {
    // Yeni araç
    const newCar = new Car(title, price, url);

    ui.addCarToUI(newCar);

    storage.addCarToStorage(newCar);

    ui.displayMessage("Araba başarıyla eklendi!", "success");
  }

  ui.clearInputs(titleElement, priceElement, urlElement);

  e.preventDefault();
}

function deleteCar(e) {
  if (e.target.id === "delete-car") {
    ui.deleteCarFromUI(e.target);
  }
}
