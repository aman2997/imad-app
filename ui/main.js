var submit = document.getElementById('submit_btn');
submit.onclick = function() {
     var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange  = function() {
        if(request.readyState === XMLHttpRequest.DONE ) {
            //Take some action
            if (request.status === 200) {
              alert('Logged in');
            }
            else if(request.status === 404) {
                alert('Incorrect username or password');
            }
            else if(request.status === 500) {
                alert('Something went wrong');
            }
        }
        //Not done yet
    };
    //Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    request.open('POST','http://amansrivastav9a33.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username, password: password}));
    
  //Make a request to the server and send the name
  //Capture a list of names and render it as a list
  
};