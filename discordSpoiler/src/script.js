const input = document.getElementById("in");
const output = document.getElementById("out");

input.addEventListener("input", changed);

function changed() {
    text = input.value;
    textArr = text.split('');
    retText = "";
    for (let i = 0; i < textArr.length; i++) {
        temp = "";
        if (textArr[i] == '\n') {
            temp = '\n';
        } else {
            temp = "||" + textArr[i] + "||";
        }
        retText += temp;
    }

    output.textContent = retText;
}

function clipboardCopy() {
    const text = document.getElementById("out");
    console.log(text.value);
    navigator.clipboard.writeText(text.value);
}