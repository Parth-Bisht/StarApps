const pink_btn = document.querySelector("#pink-dot");
const blue_btn = document.querySelector("#blue-dot");
const yellow_btn = document.querySelector("#yellow-dot");
const umbrella_img = document.querySelector("#umbrella-img");
const pink_inner = document.querySelector("#pink-dot div");
const blue_inner = document.querySelector("#blue-dot div");
const yellow_inner = document.querySelector("#yellow-dot div");
const button = document.querySelector("#button");
const logo_input = document.querySelector("#logo-input");
const uploaded_logo = document.querySelector("#uploaded-logo");
const loader_upload = document.querySelector("#loader-upload");
const main_loader = document.querySelector("#main-loader");
const upload_icon = document.querySelector("#upload-icon");
let logoAdded = false;

function showLoader() {
  umbrella_img.style.display = "none";
  upload_icon.style.display = "none";
  loader_upload.style.display = "block";
  main_loader.style.display = "block";
}

function hideLoader() {
  umbrella_img.style.display = "block";
  upload_icon.style.display = "block";
  loader_upload.style.display = "none";
  main_loader.style.display = "none";
}

logo_input.addEventListener("change", function (event) {
  const file = event.target.files[0];
  console.log(file);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    console.log(reader.result);
    showLoader();
    setTimeout(() => {
      logoAdded = true;
      uploaded_logo.src = reader.result;
      uploaded_logo.style.display = "block";
      hideLoader();
    }, 3000);
  };
});

pink_btn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#f4c4c4";
  umbrella_img.src = "./assets/Pink umbrella.png";
  pink_inner.style.width = "13px";
  pink_inner.style.height = "13px";
  yellow_inner.style.width = "17px";
  yellow_inner.style.height = "17px";
  blue_inner.style.width = "17px";
  blue_inner.style.height = "17px";
  button.style.backgroundColor = "#da358c";
});

blue_btn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#c5e0dc";
  umbrella_img.src = "./assets/Blue umbrella.png";
  blue_inner.style.width = "13px";
  blue_inner.style.height = "13px";
  pink_inner.style.width = "17px";
  pink_inner.style.height = "17px";
  yellow_inner.style.width = "17px";
  yellow_inner.style.height = "17px";
  button.style.backgroundColor = "#2db3e5";
});

yellow_btn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#f7e09e";
  umbrella_img.src = "./assets/Yello umbrella.png";
  yellow_inner.style.width = "13px";
  yellow_inner.style.height = "13px";
  blue_inner.style.width = "17px";
  blue_inner.style.height = "17px";
  pink_inner.style.width = "17px";
  pink_inner.style.height = "17px";
  button.style.backgroundColor = "#fed144";
});

function chooseFile() {
  logo_input.click();
}
