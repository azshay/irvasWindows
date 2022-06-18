const timer = () => {
     const endOfPromotion = new Date(2022, 5, 20);
     const days = document.querySelector("#days"),
          hours = document.querySelector("#hours"),
          minutes = document.querySelector("#minutes"),
          seconds = document.querySelector("#seconds");

     function setTimer() {
          const today = new Date();
          const timeToEnd = endOfPromotion.getTime() - today.getTime();
          if (timeToEnd < 0) {
               days.textContent = "00";
               hours.textContent = "00";
               minutes.textContent = "00";
               seconds.textContent = "00";
               clearInterval(interval);
          } else {
               let toDays = Number.parseInt(timeToEnd / (1000 * 60 * 60 * 24));
               let toHours = Number.parseInt(
                    timeToEnd / (1000 * 60 * 60) - toDays * 24
               );
               let toMinutes = Number.parseInt(
                    timeToEnd / (1000 * 60) - (toDays * 24 * 60 + toHours * 60)
               );
               let toSeconds = Number.parseInt(
                    timeToEnd / 1000 -
                         (toDays * 24 * 60 * 60 +
                              toHours * 60 * 60 +
                              toMinutes * 60)
               );

               toDays < 10
                    ? (days.textContent = `0${toDays}`)
                    : (days.textContent = `${toDays}`);
               toHours < 10
                    ? (hours.textContent = `0${toHours}`)
                    : (hours.textContent = `${toHours}`);
               toMinutes < 10
                    ? (minutes.textContent = `0${toMinutes}`)
                    : (minutes.textContent = `${toMinutes}`);
               toSeconds < 10
                    ? (seconds.textContent = `0${toSeconds}`)
                    : (seconds.textContent = `${toSeconds}`);
          }
     }

     const interval = setInterval(setTimer, 1000);
};
export default timer;
