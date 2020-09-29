let game = confirm("Do u wanna play the game?");
if(game == true){
    let start;
    let numb = Math.floor(Math.random()*6);
    let numb1 = Math.floor(Math.random()*11);
    let input = 10, input2 = 5, input3 = 2;  
    let i = 30, i2 = 15, i3 = 7;
    let sum = 0, summ = 0;
        
        for(let start = 0; start < 1; start++){
            start = prompt("Enter a number from 0 to 5 " + "U have 3 attempts");
        if( start == numb){
            start = prompt("Perfect! Ur prize is: " + input + "$" + " Potential wining is: 5$ " + " U have 2 more attempts" + " Ur current prize  now is: " + sum);
            sum = input;

        }else
        {
            sum;
            start = prompt("Sry but u was wrong! " + "Potential wining: " + input2 + " U have 2 more attempts" + " Ur current prize  now is: " + sum);
        }
        if( start == numb){
            sum += input2;
            start = prompt("Perfect! Ur prize is " + input2 + "$" + "Potential wining is: 2$ " + "U have 1 more attempt " + "Ur prize tight now is: " + sum);
        }else
        {
            sum;
            start = prompt("Sry but u was wrong!" + "Potential wining is: " + input3 +" U have 1 more attempt" + " Ur current prize  now is: " + sum);

        }
        if( start == numb)
        {
            sum += input3;
            start = confirm("My congrutulations! U win " + input3 + "$" + " It was ur last attemept" + " Ur total prize is: "+ sum +"$");
        }else {
            sum;
            start = confirm("Sry but u was wrong! " + "But it's okay, cuz ur total prize is: " + sum + "$");
        }
    


        start = confirm("Would u like to continue?");
        if(start == true){
            start = prompt("Enter a number from 0 to 10 " + "U have 3 attempts" + " And now prize are gonna be much bigger!");
            if( start == numb1){
            start = prompt("Perfect! Ur prize is: 30$" + i + "$" + " Potential wining is: 15$ " + " U have 2 more attempts");
            summ = i;
        }else
        {
            summ;
            start = prompt("Sry but u was wrong! " + "Potential wining: " + i2 + " U have 2 more attempts" + " Ur current prize  now is: " + summ);
        }
        if( start == numb1){
            summ += i2;
            start = prompt("Perfect! Ur prize is " + i2 + "$" + "Potential wining is: 7$ " + "U have 1 more attempt" + " Ur current prize  now is: " + summ);
        }else
        {
            summ;
            start = prompt("Sry but u was wrong!" + "Potential wining is: " + i3 +" U have 1 more attempt" + " Ur current prize  now is: " + summ);
        }
        if( start == numb1)
        {
            summ += i3 + sum;
            start = confirm("My congrutulations! U win " + i3 + "$" + " It was ur last attemept" + " Ur total prize is: "+ summ +"$");
        }else{
            summ += sum;
            start = confirm("Sry but u was wrong!" + "But it's okay, cuz ur final prize is: " + summ);
            start = confirm("Ty for a game! Hope it was funny for u!");
        }
        }
        else{
            confirm(" Ty for a game, see ya later!");
        }
    }
}
else{
alert("U didn't become a milionare");
    }