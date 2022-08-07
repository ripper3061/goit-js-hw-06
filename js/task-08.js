const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formObj = {};

  formObj.email = `${mail}`;
  formObj.password = `${password}`;

  if (mail === "" || password === "") {
    return alert("Все поля должны быть заполнены!");
  }

  console.log(formObj);
  event.currentTarget.reset();
}
