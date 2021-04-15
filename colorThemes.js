

// check for saved 'darkMode' in localStorage
let blueTheme = localStorage.getItem('blueTheme'); 
const blueThemeToggle = document.querySelector('#blueColorSettings');

const enableBlueTheme = () => {
  // 1. Add the class to the body
  document.body.classList.add('blueTheme');
  // 2. Update darkMode in localStorage
  localStorage.setItem('blueTheme', 'enabled');
}

const disableBlueTheme = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('blueTheme');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('blueTheme', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (blueTheme === 'enabled') {
  enableBlueTheme();
}

// When someone clicks the button
blueThemeToggle.addEventListener('click', () => {
  // get their darkMode setting
  blueTheme = localStorage.getItem('blueTheme'); 
  
  // if it not current enabled, enable it
  if (blueTheme !== 'enabled') {
    enableBlueTheme();
  // if it has been enabled, turn it off  
  } else {  
    disableBlueTheme(); 
  }
});
