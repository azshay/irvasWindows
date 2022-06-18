const modals = () => {
     let needOpenModal = true;

     function bindModal(triggerSelector, modalSelector, closeSelector) {
          const triggers = document.querySelectorAll(triggerSelector),
               modal = document.querySelector(modalSelector),
               close = document.querySelector(closeSelector),
               windows = document.querySelectorAll("[data-modal]");

          triggers.forEach((item) => {
               item.addEventListener("click", (e) => {
                    if (e.target) {
                         e.preventDefault();
                    }
                    windows.forEach((item) => {
                         item.style.display = "none";
                         document.body.style.overflow = "";
                    });
                    needOpenModal = false;
                    modal.style.display = "block";
                    document.body.style.overflow = "hidden";
               });
          });

          close.addEventListener("click", () => {
               modal.style.display = "none";
               document.body.style.overflow = "";
          });

          modal.addEventListener("click", (e) => {
               if (e.target === modal) {
                    modal.style.display = "none";
                    document.body.style.overflow = "";
               }
          });
     }

     function showModalByTime(modalSelector, time) {
          setTimeout(() => {
               if (needOpenModal) {
                    const modal = document.querySelector(modalSelector);
                    modal.style.display = "block";
                    document.body.style.overflow = "hidden";
               }
          }, time);
     }

     bindModal(
          ".popup_engineer_btn",
          ".popup_engineer",
          ".popup_close_engineer"
     );

     bindModal(".phone_link", ".popup", ".popup_close_call");

     bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");

     bindModal(
          ".popup_calc .popup_calc_button",
          ".popup_calc_profile",
          ".popup_calc_profile_close"
     );

     bindModal(
          ".popup_calc_profile_button",
          ".popup_calc_end",
          ".popup_calc_end_close"
     );
     showModalByTime(".popup", 60000);
};

export default modals;
