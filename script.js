function showWelcome() {
  document.getElementById("welcomeMessage").innerText = "Welcome Muhammad Ahsan! Your project is working successfully.";
}

function showCourse(courseName) {
  const modal = document.getElementById("courseModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");

  modalTitle.innerText = courseName;

  if (courseName === "Web Engineering") {
    modalText.innerText = "This course covers HTML, CSS, JavaScript, forms, tables, semantic tags, and responsive web design.";
  } else if (courseName === "Machine Learning") {
    modalText.innerText = "This course covers data, algorithms, training, testing, classification, and prediction.";
  } else {
    modalText.innerText = "This course covers social media marketing, content creation, SEO, and campaign planning.";
  }

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("courseModal").style.display = "none";
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const result = document.getElementById("formResult");

  if (name === "" || email === "" || message === "") {
    result.style.color = "red";
    result.innerText = "Please fill all fields.";
    return false;
  }

  result.style.color = "green";
  result.innerText = "Form submitted successfully!";
  return false;
}
