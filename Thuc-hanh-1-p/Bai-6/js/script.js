// coding implementation
function validate(){
    let validateEmail = document.forms["search"]["email"].value;
    let validateComment = document.forms["search"]["com"].value;
    let validateRate = document.forms["search"]["rate"].value;
    let l = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(validateEmail ==""|| l.test(validateEmail)==false     ){
        alert("Please write correct input!");
        return false;
    } 
    if(validateComment == "" || validateComment.length < 30 ){
        alert("You must be fill comment and length more than 29");
        return false;
     }
    if(validateRate == "" || isNaN(validateRate) ){
        alert("You must be fill field rat and is a number ");
        return false;
    }
}
 // end coding implementation