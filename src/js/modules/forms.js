const forms = (state) => {
     const forms = document.querySelectorAll("form");
     const inputs = document.querySelectorAll("input");
     const phoneInputs = document.querySelectorAll("input[name='user_phone']");

     phoneInputs.forEach((item) => {
          item.addEventListener("input", () => {
               item.value = item.value.replace(/\D/, "");
          });
     });

     const message = {
          loading: "Загрузка...",
          error: "Произошла ошибка...",
          success: "Спасибо! Скоро с вами свяжутся!",
     };

     const postData = async (url, data) => {
          const status = document.querySelector(".status");
          status.textContent = message.loading;

          let res = await fetch(url, {
               method: "POST",
               body: data,
          });

          return await res.text();
     };

     const clearInputs = () => {
          inputs.forEach((input) => {
               input.value = "";
          });
     };

     forms.forEach((form) => {
          form.addEventListener("submit", (e) => {
               e.preventDefault();

               let statusMessage = document.createElement("div");
               statusMessage.classList.add("status");
               form.appendChild(statusMessage);

               const formData = new FormData(form);
               if (form.getAttribute("data-calc") === "end") {
                    for (let key in state) {
                         formData.append(key, state[key]);
                    }
               }

               postData("assets/server.php", formData)
                    .then((res) => {
                         console.log(res);
                         statusMessage.textContent = message.success;
                    })
                    .catch(() => (statusMessage.textContent = message.error))
                    .finally(() => {
                         clearInputs();
                         setTimeout(() => {
                              statusMessage.remove();
                         }, 5000);
                    });
          });
     });
};

export default forms;
