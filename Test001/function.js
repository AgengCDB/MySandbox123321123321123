function hello() {
    alert("Hello, how are you doing?")
}

function showtime() {
    var now = new Date();
    alert(now);
}

function textChecker() {
    var textField1 = document.getElementById('textField1');
    if (textField1.value == "") {
        alert("Please type in the field")
    } else {
        alert("You entered: " + textField1.value);
    }
}

function buildTriangle() {
    var textField2 = +document.getElementById('textField2').value;
    text = ""

    if (textField2 == "") {
        alert("Please type in the field")
    } else if (textField2 > 15) {
        alert("Max number is 15")
    } else {
        for (let height = 0; height < textField2; height++) {
            for (let length = 0; length <= height; length++) {
                text += "*"
            }
            text += "\n"
        }

        alert(text);
    }
}