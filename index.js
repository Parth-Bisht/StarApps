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
const remove_icon_container = document.querySelector("#remove-icon-container");
const filename = document.querySelector("#filename");
let logoAdded = false;
const wordLimit = 10;

function showLoader(color) {
  umbrella_img.style.display = "none";
  upload_icon.style.display = "none";
  loader_upload.style.display = "block";
  main_loader.style.fill = color;
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
  if (file.size > 5242880) {
    alert("File Size should not be greter than 5MB");
    return;
  }
  if (file) {
    uploaded_logo.style.display = "none";
    remove_icon_container.style.display = "flex";
  }
  console.log(file);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  const truncatedText = truncateText(file.name, wordLimit);
  filename.innerText = truncatedText;
  reader.onloadend = () => {
    console.log(reader.result);
    showLoader(button.style.backgroundColor);
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
  pink_inner.style.width = "13px";
  pink_inner.style.height = "13px";
  yellow_inner.style.width = "17px";
  yellow_inner.style.height = "17px";
  blue_inner.style.width = "17px";
  blue_inner.style.height = "17px";
  button.style.backgroundColor = "#da358c";
  if (!logoAdded) umbrella_img.src = "./assets/Pink umbrella.png";
  else {
    uploaded_logo.style.display = "none";
    showLoader(button.style.backgroundColor);
    setTimeout(() => {
      uploaded_logo.style.display = "block";
      umbrella_img.src = "./assets/Pink umbrella.png";
      hideLoader();
    }, 3000);
  }
});

blue_btn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#c5e0dc";
  blue_inner.style.width = "13px";
  blue_inner.style.height = "13px";
  pink_inner.style.width = "17px";
  pink_inner.style.height = "17px";
  yellow_inner.style.width = "17px";
  yellow_inner.style.height = "17px";
  button.style.backgroundColor = "#2db3e5";
  if (!logoAdded) umbrella_img.src = "./assets/Blue umbrella.png";
  else {
    uploaded_logo.style.display = "none";
    showLoader(button.style.backgroundColor);
    setTimeout(() => {
      uploaded_logo.style.display = "block";
      umbrella_img.src = "./assets/Blue umbrella.png";
      hideLoader();
    }, 3000);
  }
});

yellow_btn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#f7e09e";
  yellow_inner.style.width = "13px";
  yellow_inner.style.height = "13px";
  blue_inner.style.width = "17px";
  blue_inner.style.height = "17px";
  pink_inner.style.width = "17px";
  pink_inner.style.height = "17px";
  button.style.backgroundColor = "#fed144";
  if (!logoAdded) umbrella_img.src = "./assets/Yello umbrella.png";
  else {
    uploaded_logo.style.display = "none";
    showLoader(button.style.backgroundColor);
    setTimeout(() => {
      uploaded_logo.style.display = "block";
      umbrella_img.src = "./assets/Yello umbrella.png";
      hideLoader();
    }, 3000);
  }
});

function chooseFile() {
  logo_input.click();
}

remove_icon_container.addEventListener("click", (event) => {
  // event.stopPropagation();
  logoAdded = false;
  filename.innerText = "Upload Logo";
  uploaded_logo.style.display = "none";
  uploaded_logo.src = "";
  remove_icon_container.style.display = "none";
});

function truncateText(text, wordLimit) {
  const words = text.split("");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join("") + "...";
  }
  return text;
}
