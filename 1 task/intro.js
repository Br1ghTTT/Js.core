function myfunc2(){
    console.log("Gorbachov")  // (2 завдання) вивід прізвища в консоль
    }
    
    
    
    function myfunc3() {    // (3 завдання) оголошення змінних
        let a, b;
        a = "Hey";
        b = " Bye";
        document.getElementById("1").innerHTML = a + b;
        a = b;
        document.getElementById("2").innerHTML = a + b;
    }
    
    
    
    function myfunc4(){ //(4 завдання) вивід наступних властивостей;
        let etc = {
            Name : "Yura",
            age : 21,
            thisIs: true,
            NullVariable: null
        };
        document.getElementById("4").innerHTML =
        typeof(etc.Name) + "<br>" +
        typeof(etc.age) + "<br>" +
        typeof(etc.thisIs) + "<br>" +
        typeof(etc.AndThisIs)  + "<br>" + 
        typeof(etc.NullVariable) + "<br>" +
        typeof(etc);
    }
    
    
    
    function myfunc5(){ //(5 завдання) викорстання команди confirm
        let isAdult = confirm("Are u adult?");
        console.log(isAdult, "Am 21 years old");
    }
    
    
    
    function myfunc6(){
        let me = {
            firstName : "Yura",   //string
            secondName: "Gorbachov", //string
            yearOfBirth : 1999, // number
            group: "Lv-533" //string
        };
        console.log(me.yearOfBirth);
        let maritalStatus = true; // boolean
        if(maritalStatus == true)
        {
           console.log("Unmarried"); // вивід змінної тіпу boolean в консоль
        }
        else{
        console.log("This this false");    
        }
        console.log(me.firstName);
        let x;
        let NullVariable = null;
        console.log(typeof x);  //undefined
        console.log(typeof NullVariable);   // object
    }
    
    
    
    function myfunc7(){
        let info = prompt("User"); 
        let log = prompt("Login");
        let email = prompt("Email"); 
        let pass = prompt("Password");
        alert ("Dear " + info + " your login is: " + log + "    " +"your Email is: " + email + "    " + "and your password is: " + pass);
    }
    
    
    
    function myfunc8(){
    let secodsInOneMinute = 60;
    let minutesInOneHour = 60;
    let HoursInOneDay = 24;
    let daysInMonth = 28;
    let daysInMonth2 = 30;
    let daysInMonth3 = 31;
    let secInHour, secInDay, secInMonth, secInMonth2, secInMonthh3;
     secInHour = secodsInOneMinute * minutesInOneHour;
     secInDay = secInHour * HoursInOneDay;
     secInMonth = secInDay * daysInMonth;
     secInMonth2 = secInDay * daysInMonth2;
     secInMonthh3 = secInDay * daysInMonth3;
     document.getElementById("8").innerHTML = "Кількість секунд в одній годині сановить " + secInHour + " секунд" +
     "<br>Кількість секунд в добі становить: " + secInDay + " секунд" +
     "<br> Кількість секунд у місяці(28 днів) становить: " + secInMonth + " секунд" + 
     "<br> Кількість секунд у місяці(30 днів) становить: " + secInMonth2 + " секунд" +
     "<br> Кількість секунд у місяці(31 день) становить: " + secInMonthh3 + " секунд";  
    }