function keydownFunction1() {
    var name = document.getElementById("company").value;
    var regex =  /^[a-zA-Z\s]+$/;                
        if(regex.test(name)) {
           document.getElementById("companyErr").innerHTML = "company name is valid";
           document.getElementById("companyErr").style.color = "#28EA48";
        } else {
            document.getElementById("companyErr").innerHTML = "company name is invalid";
           document.getElementById("companyErr").style.color = "red";
        }
    }
    function keydownFunction2() {
    var name = document.getElementById("name").value;
    var regex =  /^[a-zA-Z\s]+$/;                
        if(regex.test(name)) {
           document.getElementById("nameErr").innerHTML = "your name is valid";
           document.getElementById("nameErr").style.color = "#28EA48";
        } else {
            document.getElementById("nameErr").innerHTML = "your name is invalid";
           document.getElementById("nameErr").style.color = "red";
        }
    }
    function keydownFunction3() {
    var name = document.getElementById("address").value;
    var regex =  /^\d{3,5}(-\d{3,4})?$/;               
        if(regex.test(name)) {
           document.getElementById("addressErr").innerHTML = "Address is valid";
           document.getElementById("addressErr").style.color = "#28EA48";
        } else {
            document.getElementById("addressErr").innerHTML = "Address is invalid";
           document.getElementById("addressErr").style.color = "red";
        }
    }
    function keydownFunction4() {
    var name = document.getElementById("region").value;
    var regex =  /^[a-zA-Z\s]+$/;               
        if(regex.test(name)) {
           document.getElementById("regionErr").innerHTML = "region is valid";
           document.getElementById("regionErr").style.color = "#28EA48";
        } else {
            document.getElementById("regionErr").innerHTML = "region is invalid";
           document.getElementById("regionErr").style.color = "red";
        }
    }

    function keydownFunction5() {
    var name = document.getElementById("City").value;
    var regex =  /^[a-zA-Z\s]+$/;               
        if(regex.test(name)) {
           document.getElementById("CityErr").innerHTML = "City name is valid";
           document.getElementById("CityErr").style.color = "#28EA48";
        } else {
            document.getElementById("CityErr").innerHTML = "City name is invalid";
           document.getElementById("CityErr").style.color = "red";
        }
    }

    function keydownFunction6() {
    var name = document.getElementById("zipcode").value;
    var regex =  /^\d{6}?$/;              
        if(regex.test(name)) {
           document.getElementById("zipcodeErr").innerHTML = "zipcode is valid";
           document.getElementById("zipcodeErr").style.color = "#28EA48";
        } else {
            document.getElementById("zipcodeErr").innerHTML = "zipcode is invalid";
           document.getElementById("zipcodeErr").style.color = "red";
        }
    }
    
    function keydownFunction7() {
    var name = document.getElementById("number").value;
    var regex =  /^\d{10}?$/;              
        if(regex.test(name)) {
           document.getElementById("numberErr").innerHTML = "Phone number is valid";
           document.getElementById("numberErr").style.color = "#28EA48";
        } else {
            document.getElementById("numberErr").innerHTML = "Phone number is invalid";
           document.getElementById("numberErr").style.color = "red";
        }
    }

    function keydownFunction8() {
    var name = document.getElementById("email").value;
    var regex =  /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;             
        if(regex.test(name)) {
           document.getElementById("emailErr").innerHTML = "Email address is valid";
           document.getElementById("emailErr").style.color = "#28EA48";
        } else {
            document.getElementById("emailErr").innerHTML = "Email address is invalid";
           document.getElementById("emailErr").style.color = "red";
        }
    }