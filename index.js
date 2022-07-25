function starter() {

  document.getElementById('section-1').style.display = "flex";
  document.getElementById('page1').style.cssText = `
  background-color: #92E3A9;
  border-color: #92E3A9;
  `;

  document.getElementById('section-2').style.display = "none";
  document.getElementById('section-3').style.display = "none";

  document.getElementById('home__button--get-started').style.display = "none"
}


// Pagination 1
document.getElementById("page1").addEventListener('click', (e) => {

  e.preventDefault();

  pageOneButton();
});

function pageOneButton() {
  counter = 0;

  document.getElementById('section-1').style.display = "flex";
  document.getElementById('section-2').style.display = "none";
  document.getElementById('section-3').style.display = "none";

  page1.style.cssText = `
  background-color: #92E3A9;
  border-color: #92E3A9;
  `;

  page2.style.cssText = `
  background-color: white;
  border-color: black;
  `;

  page3.style.cssText = `
  background-color: white;
  border-color: black;
  `;

  document.getElementById('home__button--continue').style.display = "block";
  document.getElementById('home__button--skip').style.display = "block";
  document.getElementById('home__button--get-started').style.display = "none";
}


// Pagination 2
document.getElementById("page2").addEventListener('click', (e) => {

  e.preventDefault();

  pageTwoButton();
})

function pageTwoButton() {

  document.getElementById('section-1').style.display = "none";
  document.getElementById('section-2').style.display = "flex";
  document.getElementById('section-3').style.display = "none";

  page1.style.cssText = `
  background-color: white;
  border-color: black;
  `;

  page2.style.cssText = `
  background-color: #92E3A9;
  border-color: #92E3A9;
  `;

  page3.style.cssText = `
  background-color: white;
  border-color: black;
  `;

  document.getElementById('home__button--continue').style.display = "block";
  document.getElementById('home__button--skip').style.display = "block";
  document.getElementById('home__button--get-started').style.display = "none";
}


// Pagination 3
document.getElementById("page3").addEventListener('click', (e) => {

  e.preventDefault();

  pageThreeButton();
})

function pageThreeButton() {

  document.getElementById('section-1').style.display = "none";
  document.getElementById('section-2').style.display = "none";
  document.getElementById('section-3').style.display = "flex";

  page1.style.cssText = `
  background-color: white;
  border-color: black;
  `;

  page2.style.cssText = `
  background-color: white;
  border-color: black;
  `;

  page3.style.cssText = `
  background-color: #92E3A9;
  border-color: #92E3A9;
  `;

  document.getElementById('home__button--continue').style.display = "none";
  document.getElementById('home__button--skip').style.display = "none";
  document.getElementById('home__button--get-started').style.display = "block";
}


// ? Continue button
let counter = 0;

function continueButton() {
  document.getElementById("home__button--continue").addEventListener('click', () => {
    counter++;
    switch (counter) {
      case 1:
        pageTwoButton();
        break;

      case 2:
        pageThreeButton();
        counter = 0;
        break;
    }
  }
  )
}

// ? Skip button
document.getElementById("home__button--skip").addEventListener('click', (e) => {

  e.preventDefault();

  pageThreeButton();
});

// ? Get started
document.getElementById("home__button--get-started").addEventListener('click', (e) => {

  e.preventDefault();

  pageOneButton();
});