/* Created by Tivotal */

let nextBtns = document.querySelectorAll(".next-btn");
let progressSteps = document.querySelectorAll(".progress-step");
let progress = document.querySelector(".progress");
let prevBtns = document.querySelectorAll(".prev-btn");
let formSteps = document.querySelectorAll(".form-step");

let currentStep = 0;

nextBtns.forEach((nextBtn) => {
  nextBtn.addEventListener("click", () => {
    currentStep++;
    updateProgress();
    updateForm();
  });
});

prevBtns.forEach((prevBtn) => {
  prevBtn.addEventListener("click", () => {
    currentStep--;
    updateProgress();
    updateForm();
  });
});

function updateProgress() {
  progressSteps.forEach((progressStep, index) => {
    if (index < currentStep + 1) {
      progressStep.classList.add("step-active");
    } else {
      progressStep.classList.remove("step-active");
    }
  });

  let activeSteps = document.querySelectorAll(".step-active");

  progress.style.width =
    ((activeSteps.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

function updateForm() {
  formSteps.forEach((form) => {
    form.classList.remove("form-active");
  });

  formSteps[currentStep].classList.add("form-active");
}
