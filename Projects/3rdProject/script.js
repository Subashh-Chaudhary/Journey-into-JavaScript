const time = document.querySelector('.time-date');

setInterval(() => {
          const date = new Date();
          time.innerHTML = date.toLocaleTimeString();

}, 1000);