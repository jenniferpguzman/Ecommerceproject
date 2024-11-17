function validateForm(){
    document.getElementById("errorMessages").innerHTML = "";

    let errors = [];

const firstName = document.getElementById("first_name").value.trim();
const lastName = document.getElementById("last_name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const comments = document.getElementById("comment_section").value.trim();

    if (firstName === ""){
        errors.push("First name is required.");
    } 
    if (lastName === ""){
        errors.push("Last name is required.");
    }
    const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email === ""){
        errors.push("email required.");
    } else if (!emailRegex.test(email)){
        errors.push("Enter a valid email address.");
    }
    const phoneRegex = /^[+\d]?(?:[\d-.\s()]*)$/;
    if (phone === ""){
        errors.push("phone number required.");
    } else if (!phoneRegex.test(phone)){
        errors.push("enter a valid phone number");
    }

    if (comments === ""){
        errors.push("please leave a comment.");
    }

    if (errors.length > 0){
        let errorsMessagesHtml = "<ul>";
        errors.forEach(function(error){
            errorMessagesHtml += "<li>" + error + "</li>";
        });
        errorMessagesHtml += "</ul>";
        document.getElementById("errorMessages").innerHTML = errorMessagesHtml;
        return false;
    }
    return true;
}
