// Declare colors
// let rootStyle = getComputedStyle(document.documentElement);
// var bgColor = rootStyle.getPropertyValue("--form-background-color");
// let textColor = rootStyle.getPropertyValue("--font-color");

// Add listener to toggle button
let toggle = document.querySelector(".toggle");
// let checked = toggle.checked;

toggle.addEventListener("change", () => {
  checked = toggle.checked;
  console.log(checked);
  // create img for light on
  // let img = document.createElement("img");
  // img.src = "../img/light-bulb-on.svg";

  if (checked) {
    document.querySelector(".light-svg").src = "../img/light-bulb-on.svg";
  } else {
    document.querySelector(".light-svg").src = "../img/light-bulb-off.svg";
  }
  checked
    ? updateColor("#391818", "#eefbfb", "#1c3673")
    : updateColor("#f6f7f8", "#5d6063", "#d7dee3");
});

// updateColor function
function updateColor(backgroundColor, txtColor, bodyBgColor) {
  document.documentElement.style.setProperty(
    "--form-background-color",
    backgroundColor
  );
  document.documentElement.style.setProperty("--font-color", txtColor);
  document.documentElement.style.setProperty(
    "--body-background-color",
    bodyBgColor
  );
}

// updateColor("#f6f7f8", "#5d6063")

// signup
