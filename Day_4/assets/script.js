function change(){
    text = document.getElementById("content")
    console.log(text)
    text.textContent = "Bye"
}

function add(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var result = Number(num1) + Number(num2)
    document.getElementById("result").textContent = result
}