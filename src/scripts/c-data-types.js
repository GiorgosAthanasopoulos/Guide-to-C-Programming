show_answer_button_1_clicked_boolean = false
show_answer_button_2_clicked_boolean = false
show_answer_button_3_clicked_boolean = false

function show_answer_button_1_clicked() {
  input = document.getElementById("data-types-exc-1")
  input1 = document.getElementById("data-types-exc-1-1")
  input2 = document.getElementById("data-types-exc-1-2")
  input3 = document.getElementById("data-types-exc-1-3")
  input4 = document.getElementById("data-types-exc-1-4")
  input5 = document.getElementById("data-types-exc-1-5")
  submit_button_1 = document.getElementById("submit-answer-button-1")
  show_answer_button_1 = document.getElementById("show-answer-button-1")
  if (show_answer_button_1_clicked_boolean) {
    input.style = "font-family:Courier; color: black"
    input.value = ""
    input1.style = "font-family:Courier; color: black"
    input1.value = ""
    input2.style = "font-family:Courier; color: black"
    input2.value = ""
    input3.style = "font-family:Courier; color: black"
    input3.value = ""
    input4.style = "font-family:Courier; color: black"
    input4.value = ""
    input5.style = "font-family:Courier; color: black"
    input5.value = ""
    show_answer_button_1_clicked_boolean = false
    submit_button_1.style.display = "inline-block"
    show_answer_button_1.innerText = "Show Answer"
  } else {
    input.style = "font-family:Courier; color: blue;"
    input.value = "int"
    input1.style = "font-family:Courier; color: blue;"
    input1.value = "double"
    input2.style = "font-family:Courier; color: blue;"
    input2.value = "char"
    input3.style = "font-family:Courier; color: blue;"
    input3.value = "bool"
    input4.style = "font-family:Courier; color: blue;"
    input4.value = "char"
    input5.style = "font-family:Courier; color: blue;"
    input5.value = "[]"
    show_answer_button_1_clicked_boolean = true
    submit_button_1.style.display = "none"
    show_answer_button_1.innerText = "Hide Answer"
  }
}

function submit_answer_button_1_clicked() {
  pre = document.getElementById("pre-exc-1")
  input = document.getElementById("data-types-exc-1").value
  input1 = document.getElementById("data-types-exc-1-1").value
  input2 = document.getElementById("data-types-exc-1-2").value
  input3 = document.getElementById("data-types-exc-1-3").value
  input4 = document.getElementById("data-types-exc-1-4").value
  input5 = document.getElementById("data-types-exc-1-5").value
  if (
    input == "int" &&
    input1 == "double" &&
    input2 == "char" &&
    input3 == "bool" &&
    input4 == "char" &&
    input5 == "[]"
  ) {
    pre.setAttribute(
      "style",
      "font-size: 20px; background-color: #D9EEE1; color: #04AA6D"
    )
    pre.innerHTML =
      'Correct!\n\n<a href="#pre-exc-2" style="color: #04AA6D"><u>Next ❯</u></a>'
    if (
      document.getElementById("submit-answer-button-1").innerText ==
      "Next Excercise ❯"
    ) {
      window.location = "#exc-2"
    }
    document.getElementById("submit-answer-button-1").innerText =
      "Next Excercise ❯"
    document.getElementById("show-answer-button-1").style.display = "none"
  } else {
    pre.setAttribute(
      "style",
      "font-size: 20px; color: #B94A48; background-color: #FFC0C7"
    )
    pre.innerHTML =
      'Not correct!\n<p>Click <u><a onclick="window.location.reload();"><u>here</u></a></u> to try again.</p>'
    document.getElementById("submit-answer-button-1").innerText = "Try Again"
    document
      .getElementById("submit-answer-button-1")
      .setAttribute("onclick", "window.location.reload()")
    document.getElementById("show-answer-button-1").style.display = "none"
  }
}
// EXC 2

function show_answer_button_2_clicked() {
  input = document.getElementById("data-types-exc-2")
  input1 = document.getElementById("data-types-exc-2-1")
  input2 = document.getElementById("data-types-exc-2-2")
  input3 = document.getElementById("data-types-exc-2-3")
  input4 = document.getElementById("data-types-exc-2-4")
  input5 = document.getElementById("data-types-exc-2-5")
  submit_button_2 = document.getElementById("submit-answer-button-2")
  show_answer_button_2 = document.getElementById("show-answer-button-2")
  if (show_answer_button_2_clicked_boolean) {
    input.style = "font-family:Courier; color: black"
    input.value = ""
    input1.style = "font-family:Courier; color: black"
    input1.value = ""
    input2.style = "font-family:Courier; color: black"
    input2.value = ""
    input3.style = "font-family:Courier; color: black"
    input3.value = ""
    input4.style = "font-family:Courier; color: black"
    input4.value = ""
    input5.style = "font-family:Courier; color: black"
    input5.value = ""
    show_answer_button_2_clicked_boolean = false
    submit_button_2.style.display = "inline-block"
    show_answer_button_2.innerText = "Show Answer"
  } else {
    input.style = "font-family:Courier; color: blue;"
    input.value = "bool"
    input1.style = "font-family:Courier; color: blue;"
    input1.value = "yay"
    input2.style = "font-family:Courier; color: blue;"
    input2.value = "true"
    input3.style = "font-family:Courier; color: blue;"
    input3.value = "bool"
    input4.style = "font-family:Courier; color: blue;"
    input4.value = "nay"
    input5.style = "font-family:Courier; color: blue;"
    input5.value = "false"
    show_answer_button_2_clicked_boolean = true
    submit_button_2.style.display = "none"
    show_answer_button_2.innerText = "Hide Answer"
  }
}

function submit_answer_button_2_clicked() {
  pre = document.getElementById("pre-exc-2")
  input = document.getElementById("data-types-exc-2").value
  input1 = document.getElementById("data-types-exc-2-1").value
  input2 = document.getElementById("data-types-exc-2-2").value
  input3 = document.getElementById("data-types-exc-2-3").value
  input4 = document.getElementById("data-types-exc-2-4").value
  input5 = document.getElementById("data-types-exc-2-5").value
  if (
    input == "bool" &&
    input1 == "yay" &&
    input2 == "true" &&
    input3 == "bool" &&
    input4 == "nay" &&
    input5 == "false"
  ) {
    pre.setAttribute(
      "style",
      "font-size: 20px; background-color: #D9EEE1; color: #04AA6D"
    )
    pre.innerHTML =
      'Correct!\n\n<a href="#pre-exc-3" style="color: #04AA6D"><u>Next ❯</u></a>'
    document.getElementById("submit-answer-button-2").innerText =
      "Next Excercise ❯"
    document.getElementById("show-answer-button-2").style.display = "none"
  } else {
    pre.setAttribute(
      "style",
      "font-size: 20px; color: #B94A48; background-color: #FFC0C7"
    )
    pre.innerHTML =
      'Not correct!\n<p>Click <u><a onclick="window.location.reload();"><u>here</u></a></u> to try again.</p>'
    document.getElementById("submit-answer-button-2").innerText = "Try Again"
    document
      .getElementById("submit-answer-button-2")
      .setAttribute("onclick", "window.location.reload()")
    document.getElementById("show-answer-button-2").style.display = "none"
  }
}

// EXC 3
function show_answer_button_3_clicked() {
  input = document.getElementById("data-types-exc-3")
  input1 = document.getElementById("data-types-exc-3-1")
  input2 = document.getElementById("data-types-exc-3-2")
  submit_button_2 = document.getElementById("submit-answer-button-3")
  show_answer_button_2 = document.getElementById("show-answer-button-3")
  if (show_answer_button_3_clicked_boolean) {
    input.style = "font-family:Courier; color: black"
    input.value = ""
    input1.style = "font-family:Courier; color: black"
    input1.value = ""
    input2.style = "font-family:Courier; color: black"
    input2.value = ""
    show_answer_button_3_clicked_boolean = false
    submit_button_2.style.display = "inline-block"
    show_answer_button_2.innerText = "Show Answer"
  } else {
    input.style = "font-family:Courier; color: blue;"
    input.value = "char"
    input1.style = "font-family:Courier; color: blue;"
    input1.value = "greeting[]"
    input2.style = "font-family:Courier; color: blue;"
    input2.value = "greeting"
    show_answer_button_3_clicked_boolean = true
    submit_button_2.style.display = "none"
    show_answer_button_2.innerText = "Hide Answer"
  }
}

function submit_answer_button_3_clicked() {
  pre = document.getElementById("pre-exc-3")
  input = document.getElementById("data-types-exc-3").value
  input1 = document.getElementById("data-types-exc-3-1").value
  input2 = document.getElementById("data-types-exc-3-2").value
  if (input == "char" && input1 == "greeting[]" && input2 == "greeting") {
    pre.setAttribute(
      "style",
      "font-size: 20px; background-color: #D9EEE1; color: #04AA6D"
    )
    pre.innerHTML =
      'Correct!\n\n<a href="c-operators.html" style="color: #04AA6D"><u>Next ❯</u></a>'
    document.getElementById("submit-answer-button-3").innerText =
      "Next Excercise ❯"
    document.getElementById("show-answer-button-3").style.display = "none"
    document
      .getElementById("submit-answer-button-3")
      .setAttribute("onclick", "window.location='c-operators.html'")
  } else {
    pre.setAttribute(
      "style",
      "font-size: 20px; color: #B94A48; background-color: #FFC0C7"
    )
    pre.innerHTML =
      'Not correct!\n<p>Click <u><a onclick="window.location.reload();"><u>here</u></a></u> to try again.</p>'
    document.getElementById("submit-answer-button-3").innerText = "Try Again"
    document
      .getElementById("submit-answer-button-3")
      .setAttribute("onclick", "window.location.reload()")
    document.getElementById("show-answer-button-3").style.display = "none"
  }
}
