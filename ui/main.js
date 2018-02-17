console.log('Loaded!');

//change text of abc div

var element = document.getElementById('abc');
element.innerHTML = 'Why does Aman keep changing this text with JavaScript';

//move image

var img = document.getElementById('m');
img.onclick = function()
{
    img.style.marginLeft = '100px';
};
