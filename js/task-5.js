function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    }

    const changeColorButton = document.querySelector('.change-color');
    const colorSpan = document.querySelector('.color');

    changeColorButton.addEventListener('click', () => {
      const newColor = getRandomHexColor();
      document.body.style.backgroundColor = newColor;
      colorSpan.textContent = newColor;
    });

changeColorButton.style.borderRadius = "8px";
changeColorButton.style.padding = "8px 16px";
changeColorButton.style.width = "148px";
changeColorButton.style.height = "40px";
changeColorButton.style.backgroundColor = "#4e75ff";
changeColorButton.style.border = "none";
changeColorButton.style.color = "#ffffff";

const divWidget = document.querySelector(".widget");

divWidget.style.display = "flex";
divWidget.style.flexWrap = "wrap";
divWidget.style.justifyContent = "center";
divWidget.style.margin = "0 auto";
divWidget.style.width = "169px";