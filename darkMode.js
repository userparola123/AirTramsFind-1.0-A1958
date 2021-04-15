 blueTheme = localStorage.getItem('blueTheme')


// check for saved 'darkMode' and 'colorThemes' in localStorage
var blueTheme = localStorage.getItem('blueTheme'); 
var darkMode = localStorage.getItem('darkMode'); 
var greenTheme = localStorage.getItem('greenTheme'); 
var darkModeText = localStorage.getItem('darkModeText')
var themeColorText = localStorage.getItem('themeColorText')


// TOGGLES FOR DARK MODE / COLOR THEMES


const darkModeToggle = document.querySelector('#darkModeToggle');
const blueThemeToggle = document.querySelector('#blueColorSettings');
const greenThemeToggle = document.querySelector('#greenColorSettings');
const statusThemeColorText = document.getElementById("statusThemeColorText");
const statusDarkModeText = document.getElementById("statusDarkModeText");


const enableDarkModeWithBT = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkMode');
  document.body.classList.add('blueTheme');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
  localStorage.setItem('blueTheme', 'enabled');

}

const enableDarkModeWithGT = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkMode');
  document.body.classList.add('greenTheme');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
  localStorage.setItem('greenTheme', 'enabled');
}

const enableDarkModeWithoutBT = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkMode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}



const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkMode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);

}




 
// If the user already visited and enabled darkMode
 //start things off with it on


// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  blueTheme = localStorage.getItem('blueTheme'); 
  darkMode = localStorage.getItem('darkMode'); 
  darkModeText = localStorage.getItem('darkModeText')
  greenTheme = localStorage.getItem('greenTheme')



  // if it not current enabled, enable it
  if (blueTheme !== 'enabled') {
    if(darkMode !== 'enabled'){
      enableDarkModeWithoutBT()

    } else{
      disableDarkMode()
   
    }
  // if it has been enabled, turn it off  
  } else if(blueTheme === 'enabled') {  
    if(darkMode !== 'enabled'){
      
      if(darkModeText !== 'enabled'){
        localStorage.setItem('darkModeText','enabled')
        statusDarkModeText.innerHTML = "Dark Mode enabled"
      }
     
      enableDarkModeWithBT()
    } else{
      disableDarkMode();
      
      if(darkMode === 'enabled'){
        localStorage.setItem('darkModeText', null)
        statusDarkModeText.innerHTML = "Dark Mode disabled"
      }
    }
    
  }

  // green theme

  if (greenTheme !== 'enabled') {
    if(darkMode !== 'enabled'){
      enableDarkModeWithoutBT()

    } else{
      disableDarkMode()
   
    }
  // if it has been enabled, turn it off  
  } else if(greenTheme === 'enabled') {  
    if(darkMode !== 'enabled'){
      
      if(darkModeText !== 'enabled'){
        localStorage.setItem('darkModeText','enabled')
        statusDarkModeText.innerHTML = "Dark Mode enabled"
      }
     
      enableDarkModeWithGT()
    } else{
      disableDarkMode();
      
      if(darkMode === 'enabled'){
        localStorage.setItem('darkModeText', null)
        statusDarkModeText.innerHTML = "Dark Mode disabled"
      }
    }
    
  }

});

const enableBlueThemeWithoutDM = () => {
  // 1. Add the class to the body
  document.body.classList.add('blueTheme');
  // 2. Update darkMode in localStorage
  localStorage.setItem('blueTheme', 'enabled');
}

const disableBlueThemeWithoutDM = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('blueTheme');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('blueTheme', null);
}

const enableGreenThemeWithoutDM = () => {
  // 1. Add the class to the body
  document.body.classList.add('greenTheme');
  // 2. Update darkMode in localStorage
  localStorage.setItem('greenTheme', 'enabled');
}

const disableGreenThemeWithoutDM = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('greenTheme')
  // 2. Update darkMode in localStorage 
  localStorage.setItem('greenTheme', null);
}



// When someone clicks the button
blueThemeToggle.addEventListener('click', () => {
  // get their darkMode setting
  blueTheme = localStorage.getItem('blueTheme'); 
  darkMode = localStorage.getItem('darkMode'); 
  greenTheme = localStorage.getItem('greenTheme'); 
  themeColorText = localStorage.getItem('themeColorText')
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled' || darkMode === 'enabled') {
    if(greenTheme !== 'enabled'){
      if(blueTheme !== 'enabled'){


        // set the text to enabled + change the text
       
        if(themeColorText !== 'blueThemeEnabled'){
          localStorage.setItem('themeColorText', 'blueThemeEnabled')
         statusThemeColorText.innerHTML = "Blue Theme enabled"
        }

        // enable the blue theme without the DM.

        enableBlueThemeWithoutDM()

       
      } else{

      

 // set the text to disabled + change the text

 if(themeColorText !== 'blueThemeDisabled'){
  localStorage.setItem('themeColorText', 'blueThemeDisabled')
  statusThemeColorText.innerHTML = "Blue Theme disabled"
 }
        // disable the blue theme without the DM.

        disableBlueThemeWithoutDM()

       
       
      }
    } else{
      disableGreenThemeWithoutDM()

      if(themeColorText !== null){
        
        localStorage.setItem('themeColorText', null)
        statusThemeColorText.innerHTML = "Set a theme to start."
       }
    }
    
  // if it has been enabled, turn it off  
  }
    

});

greenThemeToggle.addEventListener('click', () => {
  // get their darkMode setting
  greenTheme = localStorage.getItem('greenTheme'); 
  darkMode = localStorage.getItem('darkMode'); 
  blueTheme = localStorage.getItem('blueTheme'); 
  themeColorText = localStorage.getItem('themeColorText')
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled' || darkMode === 'enabled') {
    if (blueTheme !== 'enabled'){
      if(greenTheme !== 'enabled'){
        enableGreenThemeWithoutDM()
        if(themeColorText !== 'greenThemeEnabled'){
          localStorage.setItem('themeColorText', 'greenThemeEnabled')
         statusThemeColorText.innerHTML = "Green Theme enabled"
        }
      } else{
        disableGreenThemeWithoutDM()

        if(themeColorText !== 'greenThemeDisabled'){
          localStorage.setItem('themeColorText', 'greenThemeDisabled')
         statusThemeColorText.innerHTML = "Green Theme is disabled"
        }
      } 
    } else{
      disableBlueThemeWithoutDM()
      if(themeColorText !== null){
        localStorage.setItem('themeColorText', null)
       statusThemeColorText.innerHTML = "Set a theme to start."
      }
    }
    
  // if it has been enabled, turn it off  
  }
    

});


if (blueTheme === 'enabled') {
  enableBlueThemeWithoutDM();
  
  }  else if(blueTheme === null){
  disableBlueThemeWithoutDM();
  
}

if (darkMode === 'enabled') {
  enableDarkModeWithBT();

  }  else if(darkMode === null){
  disableDarkMode();

}

if (greenTheme === 'enabled') {
  enableGreenThemeWithoutDM();
 
  }  else if(darkMode === null){
  disableGreenThemeWithoutDM();
  
}

if(darkMode === 'enabled'){
  if(greenTheme === 'enabled'){
    disableBlueThemeWithoutDM()
  } else if(blueTheme === 'enabled'){
    disableGreenThemeWithoutDM()
  }
}

if (darkMode === 'enabled') {
  localStorage.setItem('darkModeText', 'enabled')
  statusDarkModeText.innerHTML = "Dark Mode enabled"

  }  else if(darkMode === null){
    localStorage.setItem('darkModeText', null)
    statusDarkModeText.innerHTML = "Dark Mode disabled"

}

if (themeColorText === null) {
  statusThemeColorText.innerHTML = "Set a theme."

  } else if(themeColorText === 'greenThemeEnabled'){
    statusThemeColorText.innerHTML = "Green Theme is currently enabled."
  } else if(themeColorText === 'blueThemeEnabled'){
    statusThemeColorText.innerHTML = "Blue Theme is currently enabled."
  } else if(themeColorText === 'blueThemeDisabled'){
    statusThemeColorText.innerHTML = "Blue Theme is currently disabled."
  } else if(themeColorText === 'greenThemeDisabled'){
    statusThemeColorText.innerHTML = "Green Theme is currently disabled."
  }




