//Create a function called User which has the following properties
//username, email, password, birthday

  //code here
var user = {
	username: 'devin',
	email: 'deivnzohner@gmail.com',
	password: 'cake',
	birthday: 'September',
}


//edit the username to be 'js_slinger'
  
  //code here
user.username = "js_slinger"

//Add a property of favoriteBook and set it to 'Mike Tyson learns to Whistle'

  // code here

user.favoriteBook = "Mike Tyson learns to Whistle";
//Remove the password property from your object
  
  // code here
delete user.password; 

//Create an array called 'values'. Loop through your object and push every value
//from  your object into your 'values' array. So for example, you'll eventually have
//an array that looks similar to ['js_slinger', 'tm@gmail.com', '5/2/1990'];

  var value = [];
  for(var key in user){
   values.push(user[key]);
  }