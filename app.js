function changeColor(color) {
    document.body.style.backgroundColor = color;
}


var buttons = document.getElementsByClassName('colorButton');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function() {
                var buttonColor = this.innerHTML.toLowerCase();
                changeColor(buttonColor);
            })};
