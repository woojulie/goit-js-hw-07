 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  const controls = document.getElementById('controls');
  const input = controls.querySelector('input');
  const createBtn = controls.querySelector('[data-create]');
  const destroyBtn = controls.querySelector('[data-destroy]');
  const boxes = document.getElementById('boxes');

  function createBoxes(amount) {
    const fragment = document.createDocumentFragment();
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.textContent = `${i + 1}`;
      fragment.appendChild(box);
      size += 10;
    }

    boxes.appendChild(fragment);
  }

  function destroyBoxes() {
    boxes.innerHTML = '';
  }

  createBtn.addEventListener('click', () => {
    const amount = Number(input.value.trim());

    if (amount >= 1 && amount <= 100) {
      destroyBoxes();
      createBoxes(amount);
      input.value = '';
    } else {
      alert('Please enter a number between 1 and 100');
    }
  });

  destroyBtn.addEventListener('click', () => {
    destroyBoxes();
  });

destroyBtn.style.padding = "8px 16px";
destroyBtn.style.borderRadius = "8px";
destroyBtn.style.width = "120px";
destroyBtn.style.height = "40px";
destroyBtn.style.backgroundColor = "#ff4e4e";
destroyBtn.style.border = "none";
destroyBtn.style.color = "#fff";

destroyBtn.addEventListener('mouseenter', () => {
  destroyBtn.style.backgroundColor = '#ff7070';
});

destroyBtn.addEventListener('mouseleave', () => {
  destroyBtn.style.backgroundColor = '#ff4e4e';
});

createBtn.style.borderRadius = "8px";
createBtn.style.padding = "8px 16px";
createBtn.style.width = "120px";
createBtn.style.height = "40px";
createBtn.style.backgroundColor = "#4e75ff";
createBtn.style.border = "none";
createBtn.style.color = "#fff";
createBtn.style.marginRight = "16px"

createBtn.addEventListener('mouseenter', () => {
    createBtn.style.backgroundColor = '#6c8cff';
});

createBtn.addEventListener('mouseleave', () => {
    createBtn.style.backgroundColor = '#4e75ff';
});

controls.style.borderRadius = "8px";
controls.style.padding = "20px";
controls.style.width = "486px";
controls.style.height = "104px";
controls.style.backgroundColor = "#f6f6fe";
controls.style.margin = "0 auto";

input.style.border = "1px solid #808080";
input.style.borderRadius = "8px";
input.style.padding = "8px 50px";
input.style.width = "150px";
input.style.height = "40px";
input.style.marginRight = "16px"

boxes.style.display = "flex";
boxes.style.flexDirection = "row";
boxes.style.flexWrap = "wrap";
boxes.style.borderRadius = "8px";
boxes.style.padding = "32px";
boxes.style.backgroundColor = "#f6f6fe";
boxes.style.width = "486px";
boxes.style.columnGap = "40px";
boxes.style.rowGap = "10px";
boxes.style.margin = "0 auto";