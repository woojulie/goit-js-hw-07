const formData = document.querySelector(".login-form");

formData.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const form = event.target;
      const email = form.elements.email.value.trim();
      const password = form.elements.password.value.trim();

      if (!email || !password) {
        alert('All form fields must be filled in');
        return;
      }

      const formInput = {
        email: email,
        password: password
      };

      console.log(formInput);
      form.reset();
});

formData.style.display = "flex";
formData.style.flexDirection = "column";    
formData.style.width = "408px";  
formData.style.margin = "0 auto"; 
formData.style.rowGap = "16px";
formData.style.padding = "24px";


for (let label of formData) {
    label.style.display = "flex";
    label.style.flexDirection = "column";
    label.style.width = "360px";
    label.style.margin = "0 auto"; 
}

const submBut = formData.querySelector("button");
submBut.style.borderRadius = "8px";
submBut.style.padding = "8px 16px";
submBut.style.alignItems = "center";
submBut.style.justifyContent = "center";
submBut.style.width = "86px";
submBut.style.height = "40px";
submBut.style.backgroundColor = "#4e75ff";
submBut.style.border = "none";
submBut.style.color = "#ffffff";
submBut.style.margin = "0 auto 0 0"; 