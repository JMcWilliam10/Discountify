function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text 
    alert("Copied the code: " + copyText.value);
    */
  }

  function myFunction2() {
    /* Get the text field */
    var copyText = document.getElementById("myInput2");
  
    /* Select the text field */
    copyText.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text 
    alert("Copied the code: " + copyText.value);
    */
  }