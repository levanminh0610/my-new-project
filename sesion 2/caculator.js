function setInput(value) {
    document.getElementById('input').value += value;
}

function caculator() {
    let data = document.getElementById('input').value;
    result = eval(data);
    document.getElementById('input').value = result;
}