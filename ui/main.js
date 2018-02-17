console.log('Loaded!');

//change text of abc div

var element = document.getElementById('abc');
element.innerHTML = 'Why does Aman keep changing this text with JavaScript';

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

var counter = 0;
var button = document.getElementById('c');
button.onclick = function() {
    //Make a request to the counter endpoint
    
    //Capture the response and store it in a variable
    
    //Render the variable in the cprrect span
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};