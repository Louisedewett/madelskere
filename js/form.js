document.querySelector(".andet").classList.add("hide");

document.querySelector("#kategori").addEventListener("change", showUkendt);

function showUkendt() {
  console.log("showUkendt");
  if (document.querySelector("#kategori").value == "Andet") {
    document.querySelector(".andet").classList.remove("hide");
  }
}
/*************** Summary ***************/

const form = document.querySelector("form");

const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const mobileOutput = document.querySelector("#mobile_output");
const termsOutput = document.querySelector("#terms_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();
  console.log("handleSubmit");
  const formData = new FormData(form);
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const mobile = formData.get("mobile");
  const terms = formData.get("accept_terms");

  firstNameOutput.textContent = firstName;
  lastNameOutput.textContent = lastName;
  mobileOutput.textContent = mobile;
  termsOutput.textContent = terms;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
