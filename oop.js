// This is object literal syntax in javascript
const user = {
  username: "Yasir",
  logincount: 8,
  signedIn: true,
  //   user is a object

  getuserdetails: function () {
    // console.log(`username :${this.username}`);
    console.log(this);
    // here this keyword is used to get our current user details if we write simple username it cant recognize which username have to define so thats why this keyword is used
    // getuserdetail is a method and simply function is a function
  },
};
// console.log(user.username);
// console.log(user.getuserdetails());
// now we discuss about constructor function in javascript
function User(username, logincount, signedIn) {
  this.username = username;
  this.logincount = logincount;
  this.signedIn = signedIn;
  //   return this;
}
// here new is our constructor function when it is used an empty object is created which gives us a instance
const user1 = new User("Yasir", 8, true);
const user2 = new User("Ali", 5, false);
console.log(user1);
console.log(user2);
