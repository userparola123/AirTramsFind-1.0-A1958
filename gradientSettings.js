



const checkboxGradientOnOff =  document.getElementById("checkbox-text-gradient-now-on/off")
const checkboxDesignForFocus = document.getElementById("checkbox-design-for-focus")

let checkboxDesignForFocusLocalStorage = localStorage.getItem("checkboxDesignForFocusLocalStorage")
let checkboxSettingGradient = localStorage.getItem('checkboxSettingGradient');
let checkboxGradientOnOffLocalStorage = localStorage.getItem("checkboxGradientOnOffLocalStorage")
let checkboxBgColor = localStorage.getItem("checkboxBgColor")
let bodyHTML = document.querySelector("body")
let bodyClasses = bodyHTML.classList.contains("noGradient")


/* NOTE: checkboxGradientOnOff for the switcher
         checkboxDesignForFocus for the input btn
         checkboxSettingGradient for checking if its working
*/



// local storage things


const enableCheckboxDesignGreenTheme = () => {
    // update the items in Local Storage
    localStorage.setItem('checkboxDesignForFocusLocalStorage', 'enabled')
    localStorage.setItem('checkboxGradientOnOffLocalStorage', 'active')
    localStorage.setItem('checkboxBgColor', 'GreenColorEnabled')
    document.body.classList.add('noGradient')

}

const disableCheckboxDesignGreenTheme = () => {
    localStorage.setItem('checkboxDesignForFocusLocalStorage', null)
    localStorage.setItem('checkboxGradientOnOffLocalStorage', null)
    localStorage.setItem('checkboxBgColor', 'GreenColorDisabled')
    document.body.classList.remove('noGradient')

}

const enableCheckboxDesignBlueTheme = () => {
  // update the items in Local Storage
  localStorage.setItem('checkboxDesignForFocusLocalStorage', 'enabled')
  localStorage.setItem('checkboxGradientOnOffLocalStorage', 'active')
  localStorage.setItem('checkboxBgColor', 'BlueColorEnabled')
  document.body.classList.add('noGradient')

}

const disableCheckboxDesignBlueTheme = () => {
  localStorage.setItem('checkboxDesignForFocusLocalStorage', null)
  localStorage.setItem('checkboxGradientOnOffLocalStorage', null)
  localStorage.setItem('checkboxBgColor', 'BlueColorDisabled')
  document.body.classList.remove('noGradient')

}

checkboxDesignForFocus.addEventListener('focus', () =>{

 
  if(checkboxDesignForFocus.checked !== true){
    // put the function
    if(localStorage.getItem('greenTheme') === 'enabled'){
      enableCheckboxDesignGreenTheme()
    } else if(localStorage.getItem('blueTheme') === 'enabled'){
      enableCheckboxDesignBlueTheme()
    } 


    textCheckboxOn()
    // set the item in Local Storage
    localStorage.setItem("checkboxSettingGradient", 'working')

    // change the background with if statements

   
  } else{
      textCheckboxOff()
      if(localStorage.getItem('greenTheme') === 'enabled'){
      disableCheckboxDesignGreenTheme()
      } else if(localStorage.getItem('blueTheme') === 'enabled'){
        disableCheckboxDesignBlueTheme()
      }
      localStorage.setItem("checkboxSettingGradient", null)
      // change the background with if statements
    
  }
      


})

  // Set the attribute "checked" with Local Storage help in case of checkbox being checked
  if(checkboxSettingGradient === 'working'){
    checkboxDesignForFocus.setAttribute('checked', 'checked')
} else{
    checkboxDesignForFocus.removeAttribute('checked', 'checked')
}

const textCheckboxOn = () => {
    checkboxGradientOnOff.innerHTML = "On"
   }

   const textCheckboxOff = () => {
    checkboxGradientOnOff.innerHTML = "Off"
   }




   


    // if "checkboxGradientOnOffLocalStorage" is active, change the text
    if(checkboxGradientOnOffLocalStorage !== 'active'){
      //  set the function
      textCheckboxOff()
      
    } else if(checkboxGradientOnOffLocalStorage !== null){
      //  set the function
      textCheckboxOn()
    }

    if(checkboxBgColor === 'GreenColorDisabled'){
      localStorage.setItem('checkboxBgColor', 'GreenColorDisabled')
      document.body.classList.remove('noGradient')
    } else if(checkboxBgColor === 'GreenColorEnabled'){
      localStorage.setItem('checkboxBgColor', 'GreenColorEnabled')
      document.body.classList.add('noGradient')
    }else if(checkboxBgColor === 'BlueColorDisabled'){
      localStorage.setItem('checkboxBgColor', 'BlueColorDisabled')
      document.body.classList.remove('noGradient')
    }else if(checkboxBgColor === 'BlueColorEnabled'){
      localStorage.setItem('checkboxBgColor', 'BlueColorEnabled')
      document.body.classList.add('noGradient')
    }
  
