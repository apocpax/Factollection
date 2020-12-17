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

/*----- app's state (variables) -------------------------------------*/

/*----- cached element references -----------------------------------*/
const shadeEl = getElemById("shade");

/*----- event listeners -----------------------------------------------------*/
setEvent("helpLabel", "click", showHelp );
setEvent("levelName", "mouseenter",showResetLevel);

/*----- functions -----------------------------------------------------------------*/ 
/**-------------------------------
 *  cellClicked() Will be run when a cell is clicked
 *  * event handler
 *  * return : none
 *-------------------------------*/

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


