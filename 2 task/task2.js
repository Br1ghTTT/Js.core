function myfunc(){      // 1 завдання
    let x = 1;
    let y = 2;
    let res1;
    res1 = String(x) + String(y);
    console.log(res1);
    console.log(typeof res1);
    
    
    let res2 = Boolean(y) + String(y);
    console.log(res2); // "true2"
    console.log(typeof res2); // "string"
    
    
    let res3 = Boolean(x) && Boolean(y);
    console.log(res3); // true
    console.log(typeof res3); // "boolean"
    
    
    let res4 = parseInt(Boolean(x));
    console.log(res4);  // NaN
    console.log(typeof res4); // "Number"
    }
    
    function myfunc2(){     // 2 завдання
    
        let numb = prompt("Input the number: ");
        if(numb % 2 == 0 && numb > 0 && numb % 7 == 0){
            console.log("Дане число є парним додатним, та кратне числу 7");
        }else{
            console.log("Введіть інше число");
        }
    }
    
    function myfunc3(){     // 3 завдання
        let arr = [];
        arr.push("5789");
        arr.push(" Hello");
        arr.push(" <=");
        arr.push(" null");
        document.getElementById("0").innerHTML = "Елементи массиву: " + arr;
        document.getElementById("1").innerHTML = "Довжина массиву становить: " + arr.length + " елементи";
    
        let add = prompt(" Введіть новий елемент масиву");
        let newArr = arr.slice();
        newArr.push(add);
        document.getElementById("2").innerHTML = "Новий елемент масиву - це " + newArr[4];
        document.getElementById("3").innerHTML = " Новий масив має вигляд " + newArr;
        document.getElementById("4").innerHTML = "Довжина даного массиву становить: " + newArr.length + " елементів";
        document.getElementById("5").innerHTML = "Видалений елемент: " + newArr.shift();
        document.getElementById("6").innerHTML = " Новий масив має вигляд " + newArr;
    }
    
    function myfunc4(){     // 4 завдання
    let cities = ["Rome", "Lviv", "Warsaw"]; 
    document.getElementById("7").innerHTML = "Елементи масиву: " + cities.join(" * ");
    }
    
    function myfunc5(){     // 5 завдання
    
        let isAdult = prompt("Input ur age:");
        if(isAdult >= 18){
            alert("Ur adult");
        }else{
            alert("Ur just a kid");
        }
    }
    
    function myfunc6(){     // 6 завдання
        let a = prompt("Введіть a сторону трикутника");
        let b = prompt("Введіть b сторону трикутника");
        let c = prompt("Введіть c сторону трикутника");
        let p,s;
         if(a > 0 && b > 0 &&  c > 0){
            p = (Number(a) + Number(b) + Number(c))/2;
            s = Math.sqrt(p * (p - Number(a)) * (p - Number(b)) * (p - Number(c)));
            console.log(typeof s);
            console.log("Перимитер трикутника становить: " + p);
            console.log("Площа трикутника становить: " + s.toFixed(3));
                if(Math.sin(a/b == 1))
                {
                    console.log("Даний трикутник є прямокутним");
                }else{
                    console.log("Даний трикутик не є прямокутним");
                }
        }else{
            alert("Дані введені некоректно!");
        }
    }
    
    function myfunc7(){     // 7 завдання (1 спосіб)
        let Hours = new Date().setHours();
        Hours = prompt("Введвіть годину");
        if(Hours >= 00 && Hours <= 5){
            alert("Доброї ночі!")
        }else if(Hours > 5 && Hours < 11 )
        {
            alert("Доброго ранку!");
        }else if(Hours >= 11 && Hours <= 17){
            alert("Доброго дня!")
        }else if(Hours > 17 && Hours <= 23){
            alert("Доброго вечора!");
        }else{
            alert("Дані введено некоректно!")
        }    
    }
    
    function myfuncc7(){    // 7 завдання (2 спосіб)
        let Hours = new Date().getHours();
        if(Hours >= 23 && Hours <= 5){
            alert("Доброї ночі!")
        }else if(Hours > 5 && Hours < 11 )
        {
            alert("Доброго ранку!");
        }else if(Hours >= 11 && Hours <= 17){
            alert("Доброго дня!")
        }else if(Hours > 17 && Hours < 23){
            alert("Доброго вечора!");
        }else{
            alert("Дані введено некоректно!")
        }    
    } 
    
    function f(){           // 7 завдання (3 спосіб)
        let time = new Date().getHours();      
        switch(time){
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                alert("Доброї ночі!");
                break;           
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                alert("Доброго ранку!");
                break;
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
                alert("Доброго дня!");
                break;
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
                alert("Доброго вечора!");
                break;
            default:
                alert("Щось пішло не так! Спробуйте ще раз");
                }
    }