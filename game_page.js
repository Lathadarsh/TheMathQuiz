player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";

player1_score= 0;
player2_score= 0;

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;


document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

player_question = "player1";
player_answer = "player2";

function send() {
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    product = num1*num2;
    console.log("The product is: " + product);

    question_word = "<h4 id='word_display'>Q. "+ num1 + " x " + num2 + "</h4>";
    answer_word = "<br>Answer : <input type='text' id='input_check_box'>";
    button_check = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + answer_word + button_check;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}

function check() {
    answer = document.getElementById("input_check_box").value;
    console.log("answer = " + answer);
    if (answer == product) {
        if(player_answer == "player2") {
            player2_score= player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        else {
            player1_score= player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
    }
    if (player_question == "player1") {
        player_question = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn = " + player2_name;
    }
    else {
        player_question = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn = " + player1_name;
    }
    if (player_answer == "player1") {
        player_answer = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn = " + player2_name;
    }
    else {
        player_answer = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn = " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}