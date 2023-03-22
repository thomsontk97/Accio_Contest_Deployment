
var score;

function OpeningCeromony(cb_race100m,cb_longjmp,cb_highjmp,cb_awrd){
    setTimeout(function (){
        console.log("Lets the game begins");

        //Initialiing Score
        score = {
            Red:0,
            Green:0,
            Blue:0,
            Yellow:0
        }

        //calling Race100M as a CallBack_function
        //Passing object score and other functions
        cb_race100m(score,cb_longjmp,cb_highjmp,cb_awrd)



    },1000)
}

function Race100M(score,cb_longjmp,cb_highjmp,cb_awrd){
    setTimeout(function (){
        //Random nums for the colors
        var secRed = Math.floor(Math.random()*6)+10;
        var secBlue = Math.floor(Math.random()*6)+10;
        var secGreen = Math.floor(Math.random()*6)+10;
        var secYellow = Math.floor(Math.random()*6)+10;

        //Array of the score
        var colors = [
            {seconds:secRed, color:"Red"},
            {seconds:secBlue, color:"Blue"},
            {seconds:secGreen, color:"Green"},
            {seconds:secYellow, color:"Yellow"}
        ]
            
        //Sorting
        colors.sort(function (a,b) {
            return a.seconds-b.seconds;
        })

        //Score to 1st and 2nd places
        score[colors[0].color] += 50;
        score[colors[1].color] += 25;
        
        //Callback
        cb_longjmp(score,cb_highjmp,cb_awrd);


    },3000)
}

function LongJump(score,cb_highjmp,cb_awrd){
    setTimeout(function (){
        //Random index
        var randomIndex = Math.floor(Math.random()*4);

        var scoresArray = ["Red","Blue","Green","Yellow"];

        //Adding score
        score[scoresArray[randomIndex]] += 150;

        //Callback
        cb_highjmp(score,cb_awrd)

    },2000)
}

function HighJump(score,cb_awrd){
    var scoresArray = ["Red","Blue","Green","Yellow"];

    var color = prompt("Highest Jump:");

    if(color && scoresArray.includes(color)){
        score[color] += 100;
    } else{
        console.log("Event is cancelled");
    }

    cb_awrd(score);


}

function AwardCeromony(score){

    var redScore = score.Red;
    var blueScore = score.Blue;
    var greenScore = score.Green;
    var yellowScore = score.Yellow;

    var finalScore = [
        {point:redScore,color:"Red"},
        {point:blueScore,color:"Blue"},
        {point:greenScore,color:"Green"},
        {point:yellowScore,color:"Yellow"}
    ]

    finalScore.sort(function (a,b) {return b.point-a.point;});

    console.log(`${finalScore[0].color} came First with ${finalScore[0].point} points`);
    console.log(`${finalScore[1].color} came Second with ${finalScore[1].point} points`);
    console.log(`${finalScore[2].color} came Third with ${finalScore[2].point} points`);
    
}

OpeningCeromony(Race100M,LongJump,HighJump,AwardCeromony);