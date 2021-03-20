let firstNum = 0;
let secondNum = 0;
let ans = 0;
let fugou = "";

function sign(btn) {
  fugou = btn;
  document.getElementById("id_type").innerHTML = btn;
}

function run() {
  firstNum = document.getElementById("id_textBox1").value;
  secondNum = document.getElementById("id_textBox2").value;
  switch (fugou) {
    case "+":
      ans = Number(firstNum) + Number(secondNum);
      break;
    case "-":
      ans = firstNum - secondNum;
      break;
    case "×":
      ans = firstNum * secondNum;
      break;
    case "÷":
      ans = firstNum / secondNum;
      break;
    default:
      ans = 0;
  }
  document.getElementById("id_answer").innerHTML = ans;
}

function reset() {
  firstNum = 0;
  secondNum = 0;
  ans = 0;
  fugou = "ここに符号を表示してください";
  document.getElementById("id_textBox1").value = "";
  document.getElementById("id_textBox2").value = "";
  document.getElementById("id_answer").innerHTML = ans;
  document.getElementById("id_type").innerHTML = fugou;
}
