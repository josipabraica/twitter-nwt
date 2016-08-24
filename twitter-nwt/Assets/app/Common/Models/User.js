"use strict";
var User = (function () {
    function User(ID, username, password, name, lastname, email, myTweets, favoritedTweets, followingUsers, followedBy, comments) {
        if (ID === void 0) { ID = Math.random(); }
        if (myTweets === void 0) { myTweets = []; }
        if (favoritedTweets === void 0) { favoritedTweets = []; }
        if (followingUsers === void 0) { followingUsers = []; }
        if (followedBy === void 0) { followedBy = []; }
        if (comments === void 0) { comments = []; }
        this.ID = ID;
        this.username = username;
        this.password = password;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.myTweets = myTweets;
        this.favoritedTweets = favoritedTweets;
        this.followingUsers = followingUsers;
        this.followedBy = followedBy;
        this.comments = comments;
    }
    User.prototype.getFullName = function () {
        return this.name + " " + this.lastname;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map