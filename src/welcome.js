import Typewriter from 'typewriter-effect/dist/core';

if (!localStorage.getItem('show-welcome')) {
  showWelcomeEl();

  const welcomeEl = document.querySelector('.welcome');
  const closeBtn = welcomeEl.querySelector('.close');

  closeBtn.addEventListener('click', () => {
    localStorage.setItem('show-welcome', 'no');
    welcomeEl.remove();
  });
}

function showWelcomeEl() {
  document.querySelector('#app').innerHTML += `
    <div>
      <div class="welcome">
        <button class="close">X</button>
        <h1>🌟 Welcome to the MPC Class Chatbot! 🌟</h1>
        <p></P>
      </div>
    </div>`;

  const p = document.querySelector('.welcome p');
  const typewriter = new Typewriter(p, {
    delay: 75,
    loop: false,
  });

  const p1 = `Hello and welcome! I'm here to share fun and interesting stories about
        our classmates in the <strong class="wrong">PCB</strong>`;

  const mpc = '<strong class="right">MPC</strong> class.';

  const buyMeAcoffee = `Click <a href="tel:*182*8*1*1312853%23">here</a> to buy me a coffee using our MOMO Pay code : <strong class="strong">1312853</strong>`;

  typewriter
    .pauseFor(2500)
    .typeString(p1)
    .pauseFor(1000)
    .deleteChars(3)
    .pauseFor(1000)
    .typeString(mpc)
    .pauseFor(1500)
    .deleteAll(1)
    .pauseFor(1500)
    .typeString(buyMeAcoffee)
    .start();
}
