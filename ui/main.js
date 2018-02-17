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
