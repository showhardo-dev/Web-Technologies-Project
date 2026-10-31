function nameCheck(){

    let nametext = document.getElementById("full_name").value;
    let namePattern = /^[A-Za-z ]+$/;

    if(nametext == "")
    {
        document.getElementById("nameerror").innerHTML =
            "* Name cannot be empty";
        return false;
    }

    else if(nametext.length < 5)
    {
        document.getElementById("nameerror").innerHTML =
            "* Name must contain at least 5 characters";
        return false;
    }

    else if(!namePattern.test(nametext))
    {
        document.getElementById("nameerror").innerHTML =
            "* Name should contain only letters";
        return false;
    }

    else
    {
        document.getElementById("nameerror").innerHTML = "";
        return true;
    }
}


function emailCheck(){

    let emailtext = document.getElementById("email").value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailtext == "")
    {
        document.getElementById("emailerror").innerHTML =
            "* Email cannot be empty";
        return false;
    }

    else if(!emailPattern.test(emailtext))
    {
        document.getElementById("emailerror").innerHTML =
            "* Enter a valid email address";
        return false;
    }

    else
    {
        document.getElementById("emailerror").innerHTML = "";
        return true;
    }
}


function passwordCheck(){

    let passwordtext =
        document.getElementById("password").value;

    let numberPattern = /[0-9]/;

    if(passwordtext == "")
    {
        document.getElementById("passworderror").innerHTML =
            "* Password cannot be empty";
        return false;
    }

    else if(passwordtext.length < 6)
    {
        document.getElementById("passworderror").innerHTML =
            "* Password must contain at least 6 characters";
        return false;
    }

    else if(!numberPattern.test(passwordtext))
    {
        document.getElementById("passworderror").innerHTML =
            "* Password must contain at least one number";
        return false;
    }

    else
    {
        document.getElementById("passworderror").innerHTML = "";
        return true;
    }
}


function confirmPasswordCheck(){

    let passwordtext =
        document.getElementById("password").value;

    let confirmtext =
        document.getElementById("confirm_password").value;

    if(confirmtext == "")
    {
        document.getElementById("confirmerror").innerHTML =
            "* Confirm password cannot be empty";
        return false;
    }

    else if(passwordtext != confirmtext)
    {
        document.getElementById("confirmerror").innerHTML =
            "* Passwords do not match";
        return false;
    }

    else
    {
        document.getElementById("confirmerror").innerHTML = "";
        return true;
    }
}


function phoneCheck(){

    let phonetext =
        document.getElementById("phone").value;

    let numberPattern = /^[0-9]+$/;
    let phonePattern = /^01[3-9][0-9]{8}$/;

    if(phonetext == "")
    {
        document.getElementById("phoneerror").innerHTML =
            "* Phone number cannot be empty";
        return false;
    }

    else if(!numberPattern.test(phonetext))
    {
        document.getElementById("phoneerror").innerHTML =
            "* Phone number must contain only numeric values";
        return false;
    }

    else if(phonetext.length != 11)
    {
        document.getElementById("phoneerror").innerHTML =
            "* Phone number must contain 11 digits";
        return false;
    }

    else if(!phonePattern.test(phonetext))
    {
        document.getElementById("phoneerror").innerHTML =
            "* Enter a valid Bangladesh phone number";
        return false;
    }

    else
    {
        document.getElementById("phoneerror").innerHTML = "";
        return true;
    }
}


function userTypeCheck(){

    let usertype =
        document.querySelector('input[name="user_type"]:checked');

    if(usertype == null)
    {
        document.getElementById("usertypeerror").innerHTML =
            "* Please select a user type";
        return false;
    }

    else
    {
        document.getElementById("usertypeerror").innerHTML = "";
        return true;
    }
}


function animalCheck(){

    let animal =
        document.getElementById("preferred_animal").value;

    if(animal == "")
    {
        document.getElementById("animalerror").innerHTML =
            "* Please select a preferred animal type";
        return false;
    }

    else
    {
        document.getElementById("animalerror").innerHTML = "";
        return true;
    }
}


function experienceCheck(){

    let experience =
        document.querySelector('input[name="pet_experience"]:checked');

    if(experience == null)
    {
        document.getElementById("experienceerror").innerHTML =
            "* Please select your previous pet experience";
        return false;
    }

    else
    {
        document.getElementById("experienceerror").innerHTML = "";
        return true;
    }
}


function housingCheck(){

    let housing =
        document.getElementById("housing_type").value;

    if(housing == "")
    {
        document.getElementById("housingerror").innerHTML =
            "* Please select a housing type";
        return false;
    }

    else
    {
        document.getElementById("housingerror").innerHTML = "";
        return true;
    }
}


function donationCheck(){

    let usertype =
        document.querySelector('input[name="user_type"]:checked');

    let donation =
        document.getElementById("donation_interest");

    if(
        usertype != null &&
        (usertype.value == "Donor" ||
         usertype.value == "Both") &&
        donation.checked == false
    )
    {
        document.getElementById("donationerror").innerHTML =
            "* Donation interest is required for Donor or Both";

        return false;
    }

    else
    {
        document.getElementById("donationerror").innerHTML = "";
        return true;
    }
}


function myVal(){

    let nameValid = nameCheck();
    let emailValid = emailCheck();
    let passwordValid = passwordCheck();
    let confirmValid = confirmPasswordCheck();
    let phoneValid = phoneCheck();

    let userTypeValid = userTypeCheck();
    let animalValid = animalCheck();
    let experienceValid = experienceCheck();
    let housingValid = housingCheck();
    let donationValid = donationCheck();

    if(
        nameValid == true &&
        emailValid == true &&
        passwordValid == true &&
        confirmValid == true &&
        phoneValid == true &&
        userTypeValid == true &&
        animalValid == true &&
        experienceValid == true &&
        housingValid == true &&
        donationValid == true
    )
    {
        document.getElementById("successMessage").innerHTML =
            "Registration Successful!";

        return true;
    }

    else
    {
        document.getElementById("successMessage").innerHTML = "";

        return false;
    }
}

//adoption request

function animalIdCheck(){

    let animalId =
        document.getElementById("animal_id").value;

    let animalIdPattern = /^A[0-9]{3}$/;

    if(animalId == "")
    {
        document.getElementById("animaliderror").innerHTML =
            "* Animal ID cannot be empty";

        return false;
    }

    else if(!animalIdPattern.test(animalId))
    {
        document.getElementById("animaliderror").innerHTML =
            "* Animal ID must be like A001";

        return false;
    }

    else
    {
        document.getElementById("animaliderror").innerHTML = "";

        return true;
    }
}


function animalNameCheck(){

    let animalName =
        document.getElementById("animal_name").value;

    let namePattern = /^[A-Za-z ]+$/;

    if(animalName == "")
    {
        document.getElementById("animalnameerror").innerHTML =
            "* Animal name cannot be empty";

        return false;
    }

    else if(!namePattern.test(animalName))
    {
        document.getElementById("animalnameerror").innerHTML =
            "* Animal name should contain only letters";

        return false;
    }

    else
    {
        document.getElementById("animalnameerror").innerHTML = "";

        return true;
    }
}


function adopterNameCheck(){

    let adopterName =
        document.getElementById("adopter_name").value;

    let namePattern = /^[A-Za-z ]+$/;

    if(adopterName == "")
    {
        document.getElementById("adopternameerror").innerHTML =
            "* Name cannot be empty";

        return false;
    }

    else if(adopterName.length < 5)
    {
        document.getElementById("adopternameerror").innerHTML =
            "* Name must contain at least 5 characters";

        return false;
    }

    else if(!namePattern.test(adopterName))
    {
        document.getElementById("adopternameerror").innerHTML =
            "* Name should contain only letters";

        return false;
    }

    else
    {
        document.getElementById("adopternameerror").innerHTML = "";

        return true;
    }
}


function adopterEmailCheck(){

    let email =
        document.getElementById("adopter_email").value;

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email == "")
    {
        document.getElementById("adopteremailerror").innerHTML =
            "* Email cannot be empty";

        return false;
    }

    else if(!emailPattern.test(email))
    {
        document.getElementById("adopteremailerror").innerHTML =
            "* Enter a valid email address";

        return false;
    }

    else
    {
        document.getElementById("adopteremailerror").innerHTML = "";

        return true;
    }
}


function adopterPhoneCheck(){

    let phone =
        document.getElementById("adopter_phone").value;

    let numberPattern = /^[0-9]+$/;
    let phonePattern = /^01[3-9][0-9]{8}$/;

    if(phone == "")
    {
        document.getElementById("adopterphoneerror").innerHTML =
            "* Phone number cannot be empty";

        return false;
    }

    else if(!numberPattern.test(phone))
    {
        document.getElementById("adopterphoneerror").innerHTML =
            "* Phone number must contain only numeric values";

        return false;
    }

    else if(phone.length != 11)
    {
        document.getElementById("adopterphoneerror").innerHTML =
            "* Phone number must contain 11 digits";

        return false;
    }

    else if(!phonePattern.test(phone))
    {
        document.getElementById("adopterphoneerror").innerHTML =
            "* Enter a valid Bangladesh phone number";

        return false;
    }

    else
    {
        document.getElementById("adopterphoneerror").innerHTML = "";

        return true;
    }
}


function addressCheck(){

    let address =
        document.getElementById("adopter_address").value;

    if(address == "")
    {
        document.getElementById("addresserror").innerHTML =
            "* Address cannot be empty";

        return false;
    }

    else if(address.length < 10)
    {
        document.getElementById("addresserror").innerHTML =
            "* Address must contain at least 10 characters";

        return false;
    }

    else
    {
        document.getElementById("addresserror").innerHTML = "";

        return true;
    }
}


function adoptionHousingCheck(){

    let housing =
        document.getElementById("adoption_housing").value;

    if(housing == "")
    {
        document.getElementById("adoptionhousingerror").innerHTML =
            "* Please select a housing type";

        return false;
    }

    else
    {
        document.getElementById("adoptionhousingerror").innerHTML = "";

        return true;
    }
}


function adoptionExperienceCheck(){

    let experience =
        document.querySelector(
            'input[name="adoption_pet_experience"]:checked'
        );

    if(experience == null)
    {
        document.getElementById("adoptionexperienceerror").innerHTML =
            "* Please select previous pet experience";

        return false;
    }

    else
    {
        document.getElementById("adoptionexperienceerror").innerHTML = "";

        return true;
    }
}


function adoptionReasonCheck(){

    let reason =
        document.getElementById("adoption_reason").value;

    if(reason == "")
    {
        document.getElementById("adoptionreasonerror").innerHTML =
            "* Adoption reason cannot be empty";

        return false;
    }

    else if(reason.length < 20)
    {
        document.getElementById("adoptionreasonerror").innerHTML =
            "* Adoption reason must contain at least 20 characters";

        return false;
    }

    else
    {
        document.getElementById("adoptionreasonerror").innerHTML = "";

        return true;
    }
}


function adoptionVal(){

    let animalIdValid = animalIdCheck();
    let animalNameValid = animalNameCheck();
    let adopterNameValid = adopterNameCheck();
    let adopterEmailValid = adopterEmailCheck();
    let adopterPhoneValid = adopterPhoneCheck();
    let addressValid = addressCheck();
    let housingValid = adoptionHousingCheck();
    let experienceValid = adoptionExperienceCheck();
    let reasonValid = adoptionReasonCheck();


    if(
        animalIdValid == true &&
        animalNameValid == true &&
        adopterNameValid == true &&
        adopterEmailValid == true &&
        adopterPhoneValid == true &&
        addressValid == true &&
        housingValid == true &&
        experienceValid == true &&
        reasonValid == true
    )
    {
        document.getElementById("adoptionSuccessMessage").innerHTML =
            "Adoption Request Submitted Successfully!";

        return true;
    }

    else
    {
        document.getElementById("adoptionSuccessMessage").innerHTML = "";

        return false;
    }
}

////////////////Donation///////////////////////

function donorNameCheck(){

    let donorName =
        document.getElementById("donor_name").value;

    let namePattern = /^[A-Za-z ]+$/;

    if(donorName == "")
    {
        document.getElementById("donornameerror").innerHTML =
            "* Name cannot be empty";

        return false;
    }

    else if(donorName.length < 5)
    {
        document.getElementById("donornameerror").innerHTML =
            "* Name must contain at least 5 characters";

        return false;
    }

    else if(!namePattern.test(donorName))
    {
        document.getElementById("donornameerror").innerHTML =
            "* Name should contain only letters";

        return false;
    }

    else
    {
        document.getElementById("donornameerror").innerHTML = "";

        return true;
    }
}


function donorEmailCheck(){

    let donorEmail =
        document.getElementById("donor_email").value;

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(donorEmail == "")
    {
        document.getElementById("donoremailerror").innerHTML =
            "* Email cannot be empty";

        return false;
    }

    else if(!emailPattern.test(donorEmail))
    {
        document.getElementById("donoremailerror").innerHTML =
            "* Enter a valid email address";

        return false;
    }

    else
    {
        document.getElementById("donoremailerror").innerHTML = "";

        return true;
    }
}


function donorPhoneCheck(){

    let donorPhone =
        document.getElementById("donor_phone").value;

    let numberPattern = /^[0-9]+$/;
    let phonePattern = /^01[3-9][0-9]{8}$/;

    if(donorPhone == "")
    {
        document.getElementById("donorphoneerror").innerHTML =
            "* Phone number cannot be empty";

        return false;
    }

    else if(!numberPattern.test(donorPhone))
    {
        document.getElementById("donorphoneerror").innerHTML =
            "* Phone number must contain only numeric values";

        return false;
    }

    else if(donorPhone.length != 11)
    {
        document.getElementById("donorphoneerror").innerHTML =
            "* Phone number must contain 11 digits";

        return false;
    }

    else if(!phonePattern.test(donorPhone))
    {
        document.getElementById("donorphoneerror").innerHTML =
            "* Enter a valid Bangladesh phone number";

        return false;
    }

    else
    {
        document.getElementById("donorphoneerror").innerHTML = "";

        return true;
    }
}


function donationTypeCheck(){

    let donationType =
        document.getElementById("donation_type").value;

    if(donationType == "")
    {
        document.getElementById("donationtypeerror").innerHTML =
            "* Please select a donation type";

        return false;
    }

    else
    {
        document.getElementById("donationtypeerror").innerHTML = "";

        return true;
    }
}


function amountCheck(){

    let amount =
        document.getElementById("amount_quantity").value;

    if(amount == "")
    {
        document.getElementById("amounterror").innerHTML =
            "* Amount or quantity cannot be empty";

        return false;
    }

    else if(amount.length < 1)
    {
        document.getElementById("amounterror").innerHTML =
            "* Enter a valid amount or quantity";

        return false;
    }

    else
    {
        document.getElementById("amounterror").innerHTML = "";

        return true;
    }
}


function paymentCheck(){

    let payment =
        document.querySelector(
            'input[name="payment_method"]:checked'
        );

    if(payment == null)
    {
        document.getElementById("paymenterror").innerHTML =
            "* Please select a payment method";

        return false;
    }

    else
    {
        document.getElementById("paymenterror").innerHTML = "";

        return true;
    }
}


function descriptionCheck(){

    let description =
        document.getElementById("description").value;

    if(description == "")
    {
        document.getElementById("descriptionerror").innerHTML =
            "* Description cannot be empty";

        return false;
    }

    else if(description.length < 10)
    {
        document.getElementById("descriptionerror").innerHTML =
            "* Description must contain at least 10 characters";

        return false;
    }

    else
    {
        document.getElementById("descriptionerror").innerHTML = "";

        return true;
    }
}


function donationVal(){

    let donorNameValid = donorNameCheck();
    let donorEmailValid = donorEmailCheck();
    let donorPhoneValid = donorPhoneCheck();
    let donationTypeValid = donationTypeCheck();
    let amountValid = amountCheck();
    let paymentValid = paymentCheck();
    let descriptionValid = descriptionCheck();


    if(
        donorNameValid == true &&
        donorEmailValid == true &&
        donorPhoneValid == true &&
        donationTypeValid == true &&
        amountValid == true &&
        paymentValid == true &&
        descriptionValid == true
    )
    {
        return true;
    }

    else
    {
        return false;
    }
}