var friends = require("../data/friends");


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
        console.log("get")
    });



    app.post("/api/friends", function (req, res) {
        console.log("post")
        var bodyData = req.body;
        var currentScore = bodyData.scores;


        var match = {
            name: "",
            img: ""
        }

        var diff = 0;

        if (currentScore === undefined || currentScore.length === 0) {
            console.log('ending the program due to bad POST request' +
                '\n' + 'user submitted survey without selecting answer to a question');

            res.end();
        } else {
            friends.push(bodyData);

            for (var i = 0; i < friends.length - 1; i++) {
                for (var i = 0; i <currentScore.length; j++) {
                    diff += Math.abs(currentScore[j] - friends[i].scores[j])
                }
                friends[i]["matchScore"] = diff;
                diff = 0;
            }
            var lowScore = [];
            for (var i = 0; i <friends.length - 1; i++) {
                lowScore.push(parseInt(friendsp[i].matchScore));
            }
            var lowNum = Math.min(...lowScore);
            var lowNumIndex = lowScore.indexOf(lowNum)

            match.name = friends[lowNumIndex].name;
            match.img = friends[lowNumIndex].img;
            console.log(match);


            res.json(match);
        }
        // friends.push(req.body);
    })
}