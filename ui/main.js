console.log('Loaded!');
//move image

var img = document.getElementById('m');
var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}


img.onclick = function()
{
    var interval = setInterval(moveRight,50);
    
};

var button = document.getElementById('c');
button.onclick = function() {
    //Make a request to the counter endpoint
    var request = new XMLhttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange  = function() {
        if(request.readyState === XMLhttpRequest.DONE ) {
            //Take some action
            if (request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
            }
        }
        //Not done yet
    };
    //Make the request
    request.open('GET','http://amansrivastav9a33.imad.hasura-app.io/counter',true);
    request.send(null);
    
};