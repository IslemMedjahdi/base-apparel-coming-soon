document.forms[0].lastElementChild.onclick = function(e){
    if (document.forms[0].firstElementChild.value.length == 0 || document.forms[0].firstElementChild.validity.typeMismatch){
        e.preventDefault();
        document.getElementById("error").style.display = "initial";
    }
}

document.forms[0].firstElementChild.onfocus = function(){
        document.getElementById("error").style.display = "none";
}