const totalAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const chkButton = document.querySelector("#btn-check");
const errorMessage = document.querySelector(".error-msg");
const noOfNotes = document.querySelectorAll(".noOfNotes");
const nxtButton = document.querySelector("#nxt-button");
const cashGivenInput = document.querySelector(".cashInput");
const returnOutput = document.querySelector(".returnChange");


const noteArray=[2000,500,100,20,10,5,1];


nxtButton.addEventListener("click",nextClickHandler)

chkButton.addEventListener("click", checkClickHandler);

function nextClickHandler(){
    
    if(Number(totalAmount.value)>0){
        hideError();
        nxtButton.style.display="none";
        cashGivenInput.style.display="block";
    }
    else{
        showMessage("Invalid bill amount");
    }
}

function checkClickHandler() {
    
    let cashReceived = Number(cashGiven.value);
    let totalBill = Number(totalAmount.value);
    const returnAmount = cashReceived - totalBill;
    hideError();
        if (cashReceived >= totalBill) {
        
            calculateReturnAmount(returnAmount);
        }
        else {
            errorMessage.style.display="block";
            showMessage("Cash given is lesser than Bill amount. You need more cash");
        }
    
    
}

function calculateReturnAmount(returnAmount) {
if(returnAmount===0){
    errorMessage.style.display="block";
    showMessage("No balance amount has to be returned");
}
else{
    
    returnOutput.style.display="block";
    for(let i=0;i<noteArray.length;i++){
    if(returnAmount>noteArray[i])
    {
    
    let notes=Math.floor(returnAmount/noteArray[i]);
    returnAmount=returnAmount-( notes*noteArray[i]);
    noOfNotes[i].innerText=`${notes}`;
    }
}
}
}

function showMessage(msg) {
    
    errorMessage.innerText = msg;
}

function hideError(){
    errorMessage.style.display="none";
}