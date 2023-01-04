// coding implementation
function validate(){
    let validateKey = document.forms["search"]["key"].value;
    let validateCat = document.forms["search"]["cat"].value;
    let validateFrom = document.forms["search"]["from"].value;
    let validateTo = document.forms["search"]["to"].value;
    function CheckSpace(value){
        return value.indexOf(' ') >= 0;
    }
    let l =CheckSpace(validateKey);
    if(validateKey == "" ){
        alert("You must be fill key");
        return false;
    }
    if(l==true){
        alert("The string has whitespace");
        return false;
    } 
    if(validateCat == "" ){
        alert("You must be fill cat");
        return false;
    }
    if(validateFrom == "" || isNaN(validateFrom) ){
        alert("You must be fill field from and is a number ");
        return false;
    }
    if(validateTo == "" || isNaN(validateTo) ){
        alert("You must be fill field to and is a number ");
        return false;
    }
    return true;
}
// end coding implementation