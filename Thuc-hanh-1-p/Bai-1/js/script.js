// coding implementation
function validate(){
    let validateKey = document.forms["search"]["key"].value;
    let validateCat = document.forms["search"]["cat"].value;
    let validateFrom = document.forms["search"]["from"].value;
    let validateTo = document.forms["search"]["to"].value;
    if(validateKey == "" ){
        alert("You must be fill key");
        return false;
    }
    if(validateCat == "" ){
        alert("You must be fill cat");
        return false;
    }
    if(validateFrom == "" || isNaN(validateFrom) || validateFrom<=0){
        alert("You must be fill field from and is a number >=0");
        return false;
    }
    if(validateTo == "" || isNaN(validateTo) || validateTo<=0 ){
        alert("You must be fill field to and is a number >=0");
        return false;
    }
    return true;
}
// end coding implementation
