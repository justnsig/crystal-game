//Document ready function
$(document).ready(function () {

    // random number for the user to attempt
    var targetNum = Math.floor(Math.random() * 120) + 19;
    console.log(targetNum);

    $('#score').text(targetNum);

    //Crystal random numbers generator
    var ranNum1 = Math.floor(Math.random() * 19) + 1;
    console.log(ranNum1);
    var ranNum2 = Math.floor(Math.random() * 19) + 1;
    console.log(ranNum2);
    var ranNum3 = Math.floor(Math.random() * 19) + 1;
    console.log(ranNum3);
    var ranNum4 = Math.floor(Math.random() * 19) + 1;
    console.log(ranNum4);

    // variables
    var userTotal = 0;
    var wins = 0;
    var losses = 0
    //adding text to the document
    $('#winCount').text(wins);
    $('#lossCount').text(losses);

    function reset() {
        
        //What the hell? Only thing that doesnt reset is the targetNum
        //Why doesnt the win or loss function run the second time through the game?
        //new targetNum generates on the page but game doent use the new number
        var targetNum = Math.floor(Math.random() * 120) + 19;
        console.log(targetNum);
        $('#score').text(targetNum);
        userTotal = 0;
        var ranNum1 = Math.floor(Math.random() * 19) + 1;
        console.log(ranNum1);
        var ranNum2 = Math.floor(Math.random() * 19) + 1;
        console.log(ranNum2);
        var ranNum3 = Math.floor(Math.random() * 19) + 1;
        console.log(ranNum3);
        var ranNum4 = Math.floor(Math.random() * 19) + 1;
        console.log(ranNum4);
        
        $('#userScore').text(userTotal);
    }
    // If the userTotal matches the targetNum games ends and shows alert
    function winner() {
        alert('You Win!!');
        wins++;
        $('winCount').text(wins);
        //resets the game and generates all new random numbers
        reset();
    }
    //if the user total exceeds the targetNum game ends and shows alert
    function loser() {
        alert('You lose');
        losses++;
        $('#lossCount').text('loss ',losses);
        //resets the game and generates all new random numbers
        reset();
    }

    // On click for the crystals... hopefully!
    $('#diamond').on('click', function () {
        userTotal = userTotal + ranNum1;
        console.log('New userTotal=' + userTotal);
        $('#userScore').text(userTotal);
        //win or loss conditions
        if (userTotal === targetNum) {
            winner();//call the alert and reset functions +1 to wins counter
        }
        else if (userTotal > targetNum) {
            loser();//calls the alert and reset functions +1 to loss counter
        }

    });

    $('#ruby').on('click', function () {
        userTotal = userTotal + ranNum2;
        console.log('New userTotal=' + userTotal);
        $('#userScore').text(userTotal);
        //win or loss conditions
        if (userTotal === targetNum) {
            winner();
        }
        else if (userTotal > targetNum) {
            loser();
        }
    });

    $('#emerald').on('click', function () {
        userTotal = userTotal + ranNum3;
        console.log('New userTotal=' + userTotal);
        $('#userScore').text(userTotal);
        //win or loss conditions
        if (userTotal === targetNum) {
            winner();
        }
        else if (userTotal > targetNum) {
            loser();
        }

    });

    $('#saphire').on('click', function () {
        userTotal = userTotal + ranNum4;
        console.log('New userTotal=' + userTotal);
        $('#userScore').text(userTotal);
        //win or loss conditions
        if (userTotal === targetNum) {
            winner();
        }
        else if (userTotal > targetNum) {
            loser();
        }

    });




});