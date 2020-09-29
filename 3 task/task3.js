function loops(){           // 1 завдання
let res = 1;
let arr=[2 ,3 , 4, 5];
for(let i = 0; i < arr.length; i++)
{
res *= arr[i];
}
console.log(res);

let result = 1;
let i = 0;
while( i < arr.length ){
result *= arr[i];
i++;
}
console.log(result);
}

function loops2(){          // 2 завдання
    for(let i = 0; i <= 15; i++){
        if(i % 2 == 0){
            console.log(i + " is even");
        }else{
            console.log(i + " is odd");
        }                       
    }
}       

function rand(k){           // 3 завдання
    let arr = [k];
    for(let i = 0;  i < k; i++ )
    {
        arr[i] = Math.floor(Math.random()*1500 + 1);
    }
    console.log(arr);
}

function raiseToDegree(){        // 4 завдання
let a = prompt(" Введіть число");
let b = prompt(" Введіть степінь до якої потрібно піднести число");
let res = confirm("Результат піднесення " + a +  " до степеню " + b +  " дорівнює: " + Math.pow(a,b));
}

function findMin(){             // 5 завдання
    let points = [];
    
    for(let i = 0; i < 10; i++){
        points[i] = Math.floor(Math.random() * 100 - 10);
    }
    console.log(points);
    function Min(arr) {
      return Math.min.apply(null, arr);
    }
    alert(Min(points));
}

function checkPermission() {        // 6 завдання
function unique(arr) {
    let result = [];
  
    for (let number of arr) {
      if (!result.includes(number)) {
        result.push(number);
      }
    }
    if (arr.length === result.length) return true;
    else return false;
  }
  
  let arr1 = [1, 3, 4, 3, 8];
  
  console.log(unique(arr1));
}

function lastElem(){                // 7 завдання
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let k = 3;
    var arr2 = arr.slice(-1); 
    var arr1 = arr.slice(-k);
        if(k === undefined && k === 0)
        {
            console.log(arr);
        }
        else if( k == 0 ){
            console.log(arr2);
        }else{
            console.log(arr1);
        }
}

function toUpper(str){                 // 8 завдання   

        let x = "";
        for (i = 0; i < str.length; i++)
        {
            if (str[i - 1] === " " || i === 0) 
            {
            x += str[i].toUpperCase();
            } 
            else 
            {
            x += str[i];
            }
        }
        console.log(x);
    }