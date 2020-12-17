/******************************************************
 * * Base Project : Factollection
 * A teamed project in GA-SEI 2020
 * Django/Python full stack app
 * Teammates : Mehrdad Samia, Rylee Shearer, Richard Lummus
 * * Repo:  https://github.com/SamiaMehrdad/Factollection
 * --------------------------------------------------
 * * MVC pattern following
*******************************************************/

/*----- constants ---------------------------------------------------*/
const ENUMRADIO = ["all", "trivia", "math", "date"];
/*----- app's state (variables) -------------------------------------*/
let radioSelector = 0;
/*----- cached element references -----------------------------------*/
const subjectEl = getElemById("subject");
const radioEls = document.querySelectorAll(".tab");
/*----- event listeners -----------------------------------------------------*/
setEvent("go-btn", "click", makeRequest );
setEvent("subject", "input",subjectChanged);
setEvent("subject", "focus",subjectFocused);
radioEls.forEach(tab=>{setEvent(tab.id,"click", radioClicked);});
/*----- functions -----------------------------------------------------------------*/ 
/**-------------------------------
 *  makeRequest() Will be run when Go is clicked
 *  * event handler
 *  * return : send a post request besed on radios and subject
 *-------------------------------*/
function makeRequest()
{
 let a=1;
}    

/**-------------------------------
 *  subjectChanged() process and filter subject entry based on radios
 *  * event handler
 *  * return : none
 *-------------------------------*/
function subjectChanged()
{
    let value = subjectEl.value;
    let newChar = value.charAt( value.length-1);
    if(radioSelector !== "date")
    {
        if( isNaN(newChar) )
            subjectEl.value = value.slice(0, -1);
    }
    else // this is a date
    {
        // if( isNaN(newChar) )///TOOD: 
            if( isNaN(newChar) && ( newChar !== '/' || ( value.length !== 2 && value.length !==3)) )
                subjectEl.value = value.slice(0, -1);
    }

    console.log(value);
} 
/**-------------------------------
 *  subjectChanged() process and filter subject entry based on radios
 *  * event handler
 *  * return : none
 *-------------------------------*/
function subjectFocused()
{
    if(radioSelector === "date")
    {
        subjectEl.value = "dd/mm";
        subjectEl.select();
    }
    console.log("HALA");
} 

/**-------------------------------
 *  radioClicked() Will be run when a tab is clicked
 *  * event handler
 *  * return : send a post request besed on radios and subject
 *-------------------------------*/
function radioClicked(e)
{
    radioEls.forEach(tab=>{ tab.classList.remove("selected") });
    let selectedElem = getElemById(e.target.id);
    selectedElem.classList.add("selected");
    radioSelector = selectedElem.id;
    subjectEl.value = "";
    subjectEl.select();
} 
/**-------------------------------
 *  getElemById(id) Make life a little easier.
 *  Show useful console log on errors
 *  *return: DOM element
 *-------------------------------*/
function getElemById(id)
{
  let result = document.getElementById(id);
  if( !result )
    console.log(` DEBUG WARNING! #${id} element is undefined.`);
  return result;
}

/**-------------------------------
 *  setEvent(id , type, funcName) Make life a little easier.
 *  Set event handler for given id.
 *  Show useful console log on errors
 *  *return: true if succeed
 *-------------------------------*/
function setEvent(id , type, funcName)
{
  let elem = document.getElementById(id);
  if( !elem )
  {
    console.log(` DEBUG WARNING! Eventlistener for #${id} is undefined.`);
    return false;
  }
    elem.addEventListener( type , funcName );
    return true;
}

console.log("JS LOADED");
