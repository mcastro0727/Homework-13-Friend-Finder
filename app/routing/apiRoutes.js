// Load data
var friends = require("../data/friends")

// Routes
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var friendScores = req.body.scores;
        var scoresArray = [];
        var bestMatch = 0;

        // Run through all friends in array
        for (var i = 0; i < friendArray.length; i++) {
            var scoreDifference = 0;
            // Run through scores to compare friends
            for (var x = 0; x < friendScores.length; x++) {
                scoreDifference += (Math.abs(parseInt(friendArray[i].scores[x]) - parseInt(friendScores[x])));
            }

            // Push results into scoresArray
            scoresArray.push(scoreDifference);
        };

        // Find best match
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        };

        // Return bestMatch data
        var bestFriend = friendArray[bestMatch];
        res.json(bestFriend);

        // Push new submission into the friendsArray
        friendArray.push(req.body);
    });
};