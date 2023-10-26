
document.querySelectorAll('.nav').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
// let starElement = document.getElementById('star');
let footer = document.getElementById('footerText');
let clickedOnceTitle = true;
let clickedOncePopup = true;

function activateEasterEgg() {

  let title = document.querySelector('h1');

  title.classList.add('easter-egg');

  title.textContent = "Regarde plus bas";
  setTimeout(function() {
    title.textContent = "Pierre Verschaffel"
  }, 4000);
}

document.addEventListener('click', function(event) {
  if (event.target.tagName === 'H1') {
    activateEasterEgg();
    if(clickedOnceTitle){
      let clickOnMe = document.createElement('span');
      clickOnMe.classList.add('star');
      clickOnMe.innerText="Clique-ici"
      footer.appendChild(clickOnMe)
      clickOnMe.addEventListener('click', createPopup);
      clickOnMe.addEventListener('click', createFallingStars);
    }
    clickedOnceTitle = false
  }
});

function createFallingStars() {
  let stars = document.createElement('img');
  stars.src = '/asset/giphy (4).gif';
  stars.classList.add('falling-star');

  document.body.appendChild(stars);
}

function createPopup() {
  let popup = document.createElement('div');
  if(clickedOncePopup){
    popup.id = 'popup';
    popup.classList.add('popup');
    popup.innerHTML = `
      <img src="./asset/achievement-svgrepo-com.svg" id="successLogo">
      <div>
      <p class="text successTitle">Succès obtenu !</p>
      <p class="text successText">EasterEgg trouvé</p>
      </div>
    `;
    popup.style.display='flex'
    document.body.appendChild(popup);
    setTimeout(function() {
      popup.style.animation = 'slideUp 0.5s ease';
      popup.addEventListener('animationend', function() {
        popup.classList.remove('show');
        popup.style.display = 'none';
      });
    }, 4000);
    popup.addEventListener('click', function() {
      popup.style.animation = 'slideUp 0.5s ease';
      popup.classList.remove('show');
      popup.style.display='none';
    });
    popup.classList.add('show');
    popup.style.animation = 'slideFromTop 0.5s ease';
  }
  clickedOncePopup = false;
}
