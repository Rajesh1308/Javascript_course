var num = Math.random();
num = num * 10;
num = parseInt(num);
console.log(num);


function check(){
    var button_text = document.getElementById("cbutton").textContent;
    if(button_text == "Check"){
        var unum = document.getElementById("randnum").value;
        var score = document.getElementById("score").textContent;
        if (unum != ""){
            if (score > 1){
                if(num == unum){
                    document.getElementById("hint").textContent = "You won";
                    document.getElementById("cbutton").textContent = "Play Again";
                }
                else {
                    if (num - unum >= 7 || unum - num >= 7){
                        document.getElementById("hint").textContent = "You are too far away";
                        score -= 1;
                    }
                    else if(num - unum <= 5 || unum - num <= 5){
                        document.getElementById("hint").textContent = "You are close";
                        score -= 1;
                    }
                    else if(num - unum <= 2 || unum - num <= 2){
                        document.getElementById("hint").textContent = "You are very close";
                        score -= 1;
                    }
        
                    document.getElementById("score").textContent = score;
                }
        
            }
            else {
                document.getElementById("hint").textContent = "You lost";
                document.getElementById("score").textContent = 0;
                document.getElementById("cbutton").textContent = "Play Again";
            }
        }
        else {
            document.getElementById("hint").textContent = "Enter a number";
        }
    
    }
    else if(button_text == "Play Again"){
        location.reload();
    }

}