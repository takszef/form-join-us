/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Yax | Software House Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia :)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/



// clicks hidden checkboxes

var checkButtons = document.getElementsByClassName("check-btn");
var checkBoxes = document.querySelectorAll('input[type=checkbox]');

function checkboxOn() {

    for (let i = 0; i < checkButtons.length; i++) {
        checkButtons[i].onclick = function () {
            checkBoxes[i].click();
        }
    }
}

checkboxOn();

// form validation

var submitBtn = document.getElementById("send-btn");

function fieldsValidate(e) {

    var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
    var eMail = document.getElementById("email");
    var isCheckBoxes = document.querySelectorAll('input[type=checkbox]:checked');

    if (firstName.value != "") {
        firstName.style.borderBottom = "1px solid #adff2f";
    } else {
        firstName.style.borderBottom = "1px solid #ff0202";
        firstName.oninput = function () { firstName.style.borderBottom = "1px solid #adff2f"; }
    }

    if (lastName.value != "") {
        lastName.style.borderBottom = "1px solid #adff2f";
    } else {
        lastName.style.borderBottom = "1px solid #ff0202";
        lastName.oninput = function () { lastName.style.borderBottom = "1px solid #adff2f"; }
    }

    if (eMail.value != "" && eMail.value.includes('@') && eMail.value.includes('.') && eMail.value.length > 5) {
        eMail.style.borderBottom = "1px solid #adff2f";
    } else {
        eMail.style.borderBottom = "1px solid #ff0202";
        eMail.oninput = function () {
            if (eMail.value != "" && eMail.value.includes('@') && eMail.value.includes('.') && eMail.value.length > 5) {
                eMail.style.borderBottom = "1px solid #adff2f";
            } else {
                eMail.style.borderBottom = "1px solid #ff0202";
            }
        }
    }
    if (isCheckBoxes.length == 0) {
        e.preventDefault();
        document.getElementById("check-header").innerHTML = "Wybierz conajmniej jedną profesję";
    } else if (firstName.value != "" && lastName.value != "") {
        document.forms['join-form'].submit();
    }
}
submitBtn.addEventListener('click', fieldsValidate);