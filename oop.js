const user = {
  username: "Yasir",
  logincount: 8,
  signedIn: true,
  //   user is a object

  getuserdetails: function () {
    console.log(`username :${this.username}`);
    // getuserdetail is a method and simply function is a function
  },
};
console.log(user.username);
console.log(user.getuserdetails());
