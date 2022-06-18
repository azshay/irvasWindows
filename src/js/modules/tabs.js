const tabs = (tabsSelector, tabsContentSelector, tabsParentSelector) => {
     const tabs = document.querySelectorAll(tabsSelector);
     const tabsContent = document.querySelectorAll(tabsContentSelector);
     const tabsParent = document.querySelector(tabsParentSelector);

     function hideTabContent() {
          tabsContent.forEach((item) => {
               item.classList.add("tab-hide");
               item.classList.remove("tab-active");
          });

          tabs.forEach((item) => {
               item.classList.remove("active");
          });
     }

     function showTabContent(i = 0) {
          tabsContent[i].classList.add("tab-active");
          tabsContent[i].classList.remove("tab-hide");
          tabs[i].classList.add("active");
     }

     tabsParent.addEventListener("click", (event) => {
          const target = event.target;

          if (
               target &&
               (target.parentNode.classList.contains(tabsSelector.slice(1)) ||
                    target.classList.contains(tabsSelector.slice(1)))
          ) {
               tabs.forEach((item, i) => {
                    if (target.parentNode === item || target === item) {
                         hideTabContent();
                         showTabContent(i);
                    }
               });
          }
     });
};

export default tabs;
