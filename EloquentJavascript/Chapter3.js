function min(a,b){
   return(a<b?a:b);
}

function isEven(){
  var inputButton = document.getElementById('btnEvenOdd');
  var inputNumber = inputButton.value;
  var hiddenElement = document.getElementById('hdnNumber');
  var n = hiddenElement.value;

  if(!n){
    n=inputNumber;
  }

  if(inputNumber){
    if(n<0){
      n = n*-1;
    }
    if(n==0){
      document.getElementById('lblEvenOdd').innerText='Even';
      hiddenElement.value = null;
      return true;
    }
    if(n==1){
      document.getElementById('lblEvenOdd').innerText='Odd';
      hiddenElement.value = null;
      return false;
    }
    hiddenElement.value = n-2;
    return isEven();
  } else {
    alert('Please enter a number');
    inputButton.focus();
  }
}

function countBs(){
  str = document.getElementById('btnChars').value;

  count = 0;
    for(i=0;i<str.length;i++){
      if(str[i]=='B')
        count++;
    }

  document.getElementById('lblNumBs').innerText= count + ' \'B\'s in the string';
}


function countChars(){
  str = document.getElementById('btnChars').value;
  char = document.getElementById('btnCustomChar').value;

  count = 0;
    for(i=0;i<str.length;i++){
      if(str[i]==char)
        count++;
    }

  document.getElementById('lblNumCustomChar').innerText=count + ' \''+char+'\'s in the string';
}
