const changeModalState = (state) => {
     const windowForm = document.querySelectorAll(".balcon_icons_img"),
          windowWidth = document.querySelectorAll("#width"),
          windowHeight = document.querySelectorAll("#height"),
          windowType = document.querySelectorAll("#view_type"),
          windowProfile = document.querySelectorAll(".checkbox");

     function bindActionToElems(event, element, props) {
          element.forEach((item, i) => {
               item.addEventListener(event, () => {
                    switch (item.nodeName) {
                         case "SPAN":
                              state[props] = i;
                              break;
                         case "INPUT":
                              if (item.getAttribute("type") === "checkbox") {
                                   i === 0
                                        ? (state[props] = "Холодное")
                                        : (state[props] = "Теплое");
                                   element.forEach((box, j) => {
                                        box.checked = false;
                                        if (i === j) {
                                             box.checked = true;
                                        }
                                   });
                              } else {
                                   item.value = item.value.replace(/\D/, "");
                                   state[props] = item.value;
                              }
                              break;
                         case "SELECT":
                              state[props] = item.value;
                              break;
                         default:
                              return;
                    }
                    console.log(state);
               });
          });
     }

     bindActionToElems("click", windowForm, "form");
     bindActionToElems("input", windowWidth, "width");
     bindActionToElems("input", windowHeight, "height");
     bindActionToElems("change", windowType, "type");
     bindActionToElems("change", windowProfile, "profile");
};

export default changeModalState;
