
btnCarLoan.onclick=function(){
  inptTime.placeholder = "Enter the number of months"
}


btnHomeLoan.onclick = function(){
  inptTime.placeholder  = "Enter 15 or 30 years"
}


function carPayment(principle,months,rate){
  rate = parseFloat(rate/1200)
  principle = parseFloat(principle)
  months = parseFloat(months)
  payment = principle * (rate*((1+rate)**months))/((1+rate)**months-1)
  payment = Math.round(payment)
  return payment
}
  

function homePayment (principle, years,rate){
  rate = parseFloat(rate/1200)
  principle = parseFloat(principle)
  months = parseFloat(years*12)
  payment = principle * (rate*((1+rate)**months))/((1+rate)**months-1)
  payment = payment.toFixed(2)
  return payment
}
  

btnCalculate.onclick = function(){
  if (inptTime.placeholder == "Enter the number of months"){
    lblOutput.value = `A car loan for $${inptAmount.value} over ${inptTime.value} months at ${inptIntRate.value}% interest would have a monthly payment of 
    ${carPayment(inptAmount.value,inptTime.value,inptIntRate.value)}`
    }
  else if (inptTime.placeholder == "Enter 15 or 30 years"){
    lblOutput.value = `A home loan for $${inptAmount.value} over ${inptTime.value} years at ${inptIntRate.value}% interest would have a monthly payment of 
    ${homePayment(inptAmount.value,inptTime.value,inptIntRate.value)}`
    }
}

btnStop.onclick = function(){
    ChangeForm(End)
  }
  
btnClear.onclick=function(){
  document.getElementById('inptAmount').value = ''
  document.getElementById('inptTime').value = ''
  document.getElementById('inptIntRate').value = ''
}
