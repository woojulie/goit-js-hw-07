 document.getElementById('name-input').addEventListener('input', function() {
      const nameInput = this.value.trim();
      const nameOutput = document.getElementById('name-output');
      nameOutput.textContent = nameInput ? nameInput : 'Anonymous';
    });