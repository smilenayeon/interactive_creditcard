const cardNumber = document.getElementById("number");
const numberInp =  document.getElementById("card_number");
const cardName = document.getElementById("name");
const nameInp = document.getElementById("card_name");
const cardMonth = document.getElementById("month");
const monthInp = document.getElementById("card_month");
const cardYear = document.getElementById("year");
const yearInp = document.getElementById("card_year");
const cardDate = document.querySelector(".two_inp");
const cardCVC = document.getElementById("cvc");
const CVCInp = document.getElementById("card_CVC");
const submitButton = document.getElementById("confirm_button");
const completed = document.querySelector(".completed");
const form = document.querySelector(".form_section");

function setCardNumber(e) {
    cardNumber.innerText = formatCardNumber(e.target.value);
}

function formatCardNumber(cardNumber) {
    // Format the card number with spaces every 4 digits
    return cardNumber.replace(/\D/g, '')
                     .replace(/(\d{4})(?=\d)/g, '$1 ');
}

function setCardName(e) {
    cardName.innerText = e.target.value;
}

function setCardMonth(e) {
    cardMonth.innerText = e.target.value;
}

function setCardYear(e) {
    cardYear.innerText = e.target.value;
}

function setCardCVC(e) {
    cardCVC.innerText = e.target.value;
}

function inpValid(inp) {
    const min = parseInt(inp.getAttribute("min"));
    const max = parseInt(inp.getAttribute("max"));
    const theValue = parseInt(inp.value);

    if (
        inp.value.length >= inp.minLength &&
        theValue >= min &&
        theValue <= max
    ) {
        return true;
    } else {
        return false;
    }
}


function handleSubmit(e){
    e.preventDefault();
    if(!nameInp.value){
        nameInp.classList.add ("error");
        nameInp.parentElement.classList.add("error_message");
    }else{
        nameInp.classList.remove("error");
        nameInp.parentElement.classList.remove("error_message");
    }
    if(!numberInp.value || !inpValid(numberInp) ){
        numberInp.classList.add ("error");
        numberInp.parentElement.classList.add("error_message");
    }else{
        numberInp.classList.remove("error");
        numberInp.parentElement.classList.remove("error_message");
    }
    if(!monthInp.value || !inpValid(monthInp)){
        monthInp.classList.add ("error");
        cardDate.parentElement.classList.add("error_message");
    }else{
        monthInp.classList.remove("error");
        cardDate.parentElement.classList.remove("error_message");
    }
    if(!yearInp.value || !inpValid(yearInp)){
        yearInp.classList.add ("error");
        yearInp.parentElement.classList.add("error_message");
    }else{
        yearInp.classList.remove("error");
        yearInp.parentElement.classList.remove("error_message");
    }
    if(!CVCInp.value || !inpValid(CVCInp)){
        CVCInp.classList.add ("error");
        CVCInp.parentElement.classList.add("error_message");
    }else{
        CVCInp.classList.remove("error");
        CVCInp.parentElement.classList.remove("error_message");
    }
    if(nameInp.value && inpValid(numberInp) && inpValid(monthInp) && inpValid(yearInp) && inpValid(CVCInp) ){
        completed.classList.remove("hidden");
        form.classList.add("hidden");
    }
    
};

numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
CVCInp.addEventListener("keyup", setCardCVC);
submitButton.addEventListener("click", handleSubmit);
