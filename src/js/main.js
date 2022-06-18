import "./slider";
import modal from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import timer from "./modules/timer";
import changeModalState from "./modules/changeModalState";

window.addEventListener("DOMContentLoaded", () => {
     "use strict";

     const modalState = {};

     changeModalState(modalState);
     modal();
     tabs(".glazing_block", ".glazing_content", ".glazing_slider");
     tabs(".decoration_link", ".decoraction_block", ".decoration_slider");
     tabs(".balcon_icons_img", ".big_img-content", ".balcon_icons");
     forms(modalState);
     timer();
});
