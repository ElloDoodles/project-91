player1_name = localStorage.getItem("player_1");
player2_name = localStorage.getItem("player_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1").innerHTML = player1_name + " : ";
document.getElementById("player_2").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("q").innerHTML = "Q- " + player1_name;
document.getElementById("a").innerHTML = "A- " + player2_name;

function send() {
    get_word = document.getElementById("input").value;
    word = get_word.toLowerCase();
    console.log("word = " + word);

    charat1 = word.charAt(1);
    console.log(charat1);

    lengthby2 = Math.floor(word.length/2);
    charat2 = word.charAt(lengthby2);
    console.log(charat2);

    length_minus = word.length - 1;
    charat3 = word.charAt(length_minus);
    console.log(charat3);

    remove1 = word.replace(charat1, "_");
    remove2 = remove1.replace(charat2, "_");
    remove3 = remove2.replace(charat3, "_");
    console.log(remove3);

    question_word = "<h4 id = 'word_display'> Q. " + remove3 + "</h4>";
    input_box = "<br> Answer: <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br> <button class = 'btn btn-info' onclick = 'check()'> Check </button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("input").value = "";
}

var question_turn = "player_1";
var answer_turn = "player_2";

function check() {
    get_answer = document.getElementById("input").value;
    answer = get_answer.toLowerCase();
    console.log("answer entered by user" + answer);

    if (answer == word) {
        
        if (answer_turn == "player_1") {

            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }

        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (answer_turn == "player_1") {
        answer_turn = "player_2";
        document.getElementById("a").innerHTML = "answer turn = " + player2_name;
    }

    else {
        answer_turn = "player_1";
        document.getElementById("a").innerHTML = "answer turn = " + player1_name;
    }

    if (question_turn == "player_1") {
        question_turn = "player_2";
        document.getElementById("q").innerHTML = "question turn = " + player2_name;
    }

    else {
        question_turn = "player_1";
        document.getElementById("q").innerHTML = "question turn = " + player1_name;
    }

    document.getElementById("output").innerHTML = "";

}