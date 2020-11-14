player_1 = localStorage.getItem("Player_1");
player_2 = localStorage.getItem("Player_2");

Player1_score = 0;
Player2_score = 0;

var operation = "";

document.getElementById("player1_name").innerHTML = player_1 + ": ";
document.getElementById("player2_name").innerHTML = player_2 + ": ";
document.getElementById("player1_score").innerHTML = Player1_score;
document.getElementById("player2_score").innerHTML = Player2_score;


function Add(){
 number1 = document.getElementById("no1").value;
 number2 = document.getElementById("no2").value;
        actual_ans = parseInt(number1) + parseInt(number2);

        question_number1 = "<h4> Q. " + number1 + ' + ' + number2 + "</h4>";
        input_box = "<br><br> Answer : <input type='text' id='input_box'>";
        check_button = "<br><br> <button class='btn btn-info' onclick='Check1()'> Check </button>";
        row = question_number1 + input_box + check_button;
        document.getElementById("output").innerHTML = row;

        document.getElementById("no1").innerHTML = "";
        document.getElementById("no2").innerHTML = "";
}

function Sub(){
    number1 = document.getElementById("no1").value;
    number2 = document.getElementById("no2").value;
           actual_ans1 = parseInt(number1) - parseInt(number2);
   
           question_number1 = "<h4> Q. " + number1 + ' - ' + number2 + "</h4>";
           input_box = "<br><br> Answer : <input type='text' id='input_box'>";
           check_button = "<br><br> <button class='btn btn-info' onclick='Check2()'> Check </button>";
           row = question_number1 + input_box + check_button;
           document.getElementById("output").innerHTML = row;
   
           document.getElementById("no1").innerHTML = "";
           document.getElementById("no2").innerHTML = "";
   }

   function Multiplication(){
    number1 = document.getElementById("no1").value;
    number2 = document.getElementById("no2").value;
           actual_ans2 = parseInt(number1) * parseInt(number2);
   
           question_number1 = "<h4> Q. " + number1 + ' x ' + number2 + "</h4>";
           input_box = "<br><br> Answer : <input type='text' id='input_box'>";
           check_button = "<br><br> <button class='btn btn-info' onclick='Check3()'> Check </button>";
           row = question_number1 + input_box + check_button;
           document.getElementById("output").innerHTML = row;
   
           document.getElementById("no1").innerHTML = "";
           document.getElementById("no2").innerHTML = "";
   }

   function Division(){
    number1 = document.getElementById("no1").value;
    number2 = document.getElementById("no2").value;
           actual_ans3 = parseInt(number1) / parseInt(number2);
   
           question_number1 = "<h4> Q. " + number1 + ' ÷ ' + number2 + "</h4>";
           input_box = "<br><br> Answer : <input type='text' id='input_box'>";
           check_button = "<br><br> <button class='btn btn-info' onclick='Check4()'> Check </button>";
           row = question_number1 + input_box + check_button;
           document.getElementById("output").innerHTML = row;
   
           document.getElementById("no1").innerHTML = "";
           document.getElementById("no2").innerHTML = "";
   }

   question_turn = "player_1";
   answer_turn = "player_2";

   function Check1(){
       answer = actual_ans;
       if(answer == actual_ans){
           update_score1 = Player1_score + 1;
           document.getElementById("player1_score").innerHTML = update_score1;
       }
       else{
           update_score2 = Player2_score + 1;
           document.getElementById("player2_score").innerHTML = update_score2;
       }


       if(question_turn == "player_1"){
           question_turn = "player_2";
           document.getElementById("question").innerHTML = "Question Turn : " + player_2;
           document.getElementById("answer").innerHTML = "Answer Turn : " + player_1;  
       }
       else{
        question_turn = "player_1";
        document.getElementById("question").innerHTML = "Question Turn : " + player_1;
        document.getElementById("answer").innerHTML = "Answer Turn : " + player_2;  
       }
   }

   function Check2(){
    answer = actual_ans1;
    if(answer == actual_ans1){
        update_score3 = Player1_score + 1;
        document.getElementById("player1_score").innerHTML = update_score3;
    }
    else{
        update_score4 = Player2_score + 1;
        document.getElementById("player2_score").innerHTML = update_score4;
    }


    if(question_turn == "player_1"){
        question_turn = "player_2";
        document.getElementById("question").innerHTML = "Question Turn : " + player_2;
        document.getElementById("answer").innerHTML = "Answer Turn : " + player_1;  
    }
    else{
     question_turn = "player_1";
     document.getElementById("question").innerHTML = "Question Turn : " + player_1;
     document.getElementById("answer").innerHTML = "Answer Turn : " + player_2;  
    }
}

function Check3(){
    answer = actual_ans2;
    if(answer == actual_ans2){
        update_score5 = Player1_score + 1;
        document.getElementById("player1_score").innerHTML = update_score5;
    }
    else{
        update_score6 = Player2_score + 1;
        document.getElementById("player2_score").innerHTML = update_score6;
    }


    if(question_turn == "player_1"){
        question_turn = "player_2";
        document.getElementById("question").innerHTML = "Question Turn : " + player_2;
        document.getElementById("answer").innerHTML = "Answer Turn : " + player_1;  
    }
    else{
     question_turn = "player_1";
     document.getElementById("question").innerHTML = "Question Turn : " + player_1;
     document.getElementById("answer").innerHTML = "Answer Turn : " + player_2;  
    }
}

function Check4(){
    answer = actual_ans3;
    if(answer == actual_ans3){
        update_score6 = Player1_score + 1;
        document.getElementById("player1_score").innerHTML = update_score6;
    }
    else{
        update_score7 = Player2_score + 1;
        document.getElementById("player2_score").innerHTML = update_score7;
    }


    if(question_turn == "player_1"){
        question_turn = "player_2";
        document.getElementById("question").innerHTML = "Question Turn : " + player_2;
        document.getElementById("answer").innerHTML = "Answer Turn : " + player_1;  
    }
    else{
     question_turn = "player_1";
     document.getElementById("question").innerHTML = "Question Turn : " + player_1;
     document.getElementById("answer").innerHTML = "Answer Turn : " + player_2;  
    }
}
