function generateArray(){
  var start = parseInt(document.getElementById('txtStartNumber').value);
  var end = parseInt(document.getElementById('txtEndNumber').value);
  var step = parseInt(document.getElementById('txtStep').value);
  var filledArray = [];

  if(step == 0){
    alert('Step cannot be 0!');
    return;
  }
  if(start <= end && step > 0){
   for(i = start; i <= end; i+=step){
    filledArray.push(i);
   }
  }else if(start >= end && step < 0){
   for(i = start; i >= end; i+=step){
    filledArray.push(i);
   }
  }else{
   alert('Invalid Input!');
  }

  document.getElementById('lblArraySum').innerText = sumArray(filledArray);
}

function sumArray(arrToSum){
  var sum = 0;
  for(var index = 0; index < arrToSum.length; index++){
    sum+=parseInt(arrToSum[index]);
  }

  return sum;
}

function reverseArray(){
  var inputArray = ["A","B","C","D","E"];
  var outputArray = [];

  for(i = inputArray.length-1; i >= 0; i--){
    outputArray.push(inputArray[i]);
  }
}

function reverseArrayInPlace(){
  var inputArray = ["A","B","C","D","E","F","G"];

  for(i = 0; i < inputArray.length/2; i++){
    tmp = inputArray[inputArray.length-i-1];
    inputArray[inputArray.length-i-1] = inputArray[i];
    inputArray[i] = tmp;
  }
}

function arrayToList(arr){
  arr = [10,20,30,40];
  list = {value:arr[arr.length-1],rest:null};
  if(arr.length > 1){
    for(i = arr.length-2; i >=0; i--){
      list = {value:arr[i],rest:list};
    }
  }

  console.log(list);
}

function listToArray(lst){
   lst = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 5,
        rest: null
      }
    }
  };

   var arrOut = [];

  while(lst.rest){
    arrOut.push(lst.value);
    lst = lst.rest;
  }

  arrOut.push(lst.value);

  console.log(arrOut);
}

function deepComparison(obj1,obj2,flag){
  if(!obj1 && !obj2){
    var obj1 = {here: {is: "an"}, object: 2};
    var obj2 = {here: {is: "an"}, object: 2};
  }

  if(!flag)
    flag = true;
  console.log(obj1);
  console.log(obj2);
  if(typeof obj1 == typeof obj2 && (obj1!=null || obj2!=null)){
    Object.getOwnPropertyNames(obj1).forEach(function(val,ind){
      console.log(val);
      console.log(obj2[ind]);

      if(typeof val == typeof obj2[ind] && (val!=null || obj2[ind]!=null) && flag){
          if(typeof val == "object")
            flag = deepComparison(val, obj2[ind],true);
          else
            flag = val == obj2[ind];
        }else{
          flag = false;
        }
    });
  }else{
    console.log('False');
    return;
  }

  return flag;
}
