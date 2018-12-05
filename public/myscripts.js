/*Cchanges element text to copied & copies text*/
function changeText(){
    document.getElementById("myButton1").value="Copied!";
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
}

  function myFunctionTangerine() {
    /* Get the text field */
    var copyText = document.getElementById("myInputTangerine");
  
    /* Select the text field */
    copyText.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text 
    alert("Copied the code: " + copyText.value);
    */
  }
  function myFunctionRitual() {
    /* Get the text field */
    var copyText = document.getElementById("myInputRitual");
  
    /* Select the text field */
    copyText.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text 
    alert("Copied the code: " + copyText.value);
    */
  }
  function myFunctionLyft() {
    /* Get the text field */
    var copyText = document.getElementById("myInputLyft");
  
    /* Select the text field */
    copyText.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text 
    alert("Copied the code: " + copyText.value);
    */
  }
  function myFunctionUber() {
    /* Get the text field */
    var copyText = document.getElementById("myInputUber");
  
    /* Select the text field */
    copyText.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text 
    alert("Copied the code: " + copyText.value);
    */
  }

  /* Function that changes button and copies text from above input element */

/* Toggle Nav Bar */
function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}
document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);

  /*Details section of each Company Drop Down menu*/

  $(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});