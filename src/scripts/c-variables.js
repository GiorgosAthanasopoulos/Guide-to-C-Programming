show_answer_button_1_clicked_boolean = false
show_answer_button_2_clicked_boolean = false
show_answer_button_3_clicked_boolean = false
show_answer_button_4_clicked_boolean = false

function show_answer_button_1_clicked() {
  input = document.getElementById("variables-exc-1")
  input1 = document.getElementById("variables-exc-1-2")
  input2 = document.getElementById("variables-exc-1-3")
  submit_button_1 = document.getElementById("submit-answer-button-1")
  show_answer_button_1 = document.getElementById("show-answer-button-1")
  if (show_answer_button_1_clicked_boolean) {
    input.style = "font-family:Courier; color: black"
    input.value = ""
    input1.style = "font-family:Courier; color: black"
    input1.value = ""
    input2.style = "font-family:Courier; color: black"
    input2.value = ""
    show_answer_button_1_clicked_boolean = false
    submit_button_1.style.display = "inline-block"
    show_answer_button_1.innerText = "Show Answer"
  } else {
    input.style = "font-family:Courier; color: blue;"
    input.value = "int"
    input1.style = "font-family:Courier; color: blue;"
    input1.value = "myNum"
    input2.style = "font-family:Courier; color: blue;"
    input2.value = "50"
    show_answer_button_1_clicked_boolean = true
    submit_button_1.style.display = "none"
    show_answer_button_1.innerText = "Hide Answer"
  }
}

function submit_answer_button_1_clicked() {
  pre = document.getElementById("pre-exc-1")
  input = document.getElementById("variables-exc-1").value
  input1 = document.getElementById("variables-exc-1-2").value
  input2 = document.getElementById("variables-exc-1-3").value
  if (input == "int" && input1 == "myNum" && input2 == "50") {
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
  input = document.getElementById("variables-exc-2")
  input1 = document.getElementById("variables-exc-2-2")
  input2 = document.getElementById("variables-exc-2-3")
  submit_button_2 = document.getElementById("submit-answer-button-2")
  show_answer_button_2 = document.getElementById("show-answer-button-2")
  if (show_answer_button_2_clicked_boolean) {
    input.style = "font-family:Courier; color: black"
    input.value = ""
    input1.style = "font-family:Courier; color: black"
    input1.value = ""
    input2.style = "font-family:Courier; color: black"
    input2.value = ""
    show_answer_button_2_clicked_boolean = false
    submit_button_2.style.display = "inline-block"
    show_answer_button_2.innerText = "Show Answer"
  } else {
    input.style = "font-family:Courier; color: blue;"
    input.value = "int"
    input1.style = "font-family:Courier; color: blue;"
    input1.value = "x"
    input2.style = "font-family:Courier; color: blue;"
    input2.value = "5"
    show_answer_button_2_clicked_boolean = true
    submit_button_2.style.display = "none"
    show_answer_button_2.innerText = "Hide Answer"
  }
}

function submit_answer_button_2_clicked() {
  pre = document.getElementById("pre-exc-2")
  input = document.getElementById("variables-exc-2").value
  input1 = document.getElementById("variables-exc-2-2").value
  input2 = document.getElementById("variables-exc-2-3").value
  if (input == "int" && input1 == "x" && input2 == "5") {
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
  input = document.getElementById("variables-exc-3")
  input1 = document.getElementById("variables-exc-3-2")
  input2 = document.getElementById("variables-exc-3-3")
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
    input.value = "int"
    input1.style = "font-family:Courier; color: blue;"
    input1.value = "z"
    input2.style = "font-family:Courier; color: blue;"
    input2.value = "z"
    show_answer_button_3_clicked_boolean = true
    submit_button_2.style.display = "none"
    show_answer_button_2.innerText = "Hide Answer"
  }
}

function submit_answer_button_3_clicked() {
  pre = document.getElementById("pre-exc-3")
  input = document.getElementById("variables-exc-3").value
  input1 = document.getElementById("variables-exc-3-2").value
  input2 = document.getElementById("variables-exc-3-3").value
  if (input == "int" && input1 == "z" && input2 == "z") {
    pre.setAttribute(
      "style",
      "font-size: 20px; background-color: #D9EEE1; color: #04AA6D"
    )
    pre.innerHTML =
      'Correct!\n\n<a href="#pre-exc-4" style="color: #04AA6D"><u>Next ❯</u></a>'
    document.getElementById("submit-answer-button-3").innerText =
      "Next Excercise ❯"
    document.getElementById("show-answer-button-3").style.display = "none"
    document
      .getElementById("submit-answer-button-3")
      .setAttribute("onclick", "window.location='#exc-4'")
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

// EXC 4
function show_answer_button_4_clicked() {
  input = document.getElementById("variables-exc-4")
  input1 = document.getElementById("variables-exc-4-2")
  input2 = document.getElementById("variables-exc-4-3")
  submit_button_2 = document.getElementById("submit-answer-button-4")
  show_answer_button_2 = document.getElementById("show-answer-button-4")
  if (show_answer_button_4_clicked_boolean) {
    input.style = "font-family:Courier; color: black"
    input.value = ""
    input1.style = "font-family:Courier; color: black"
    input1.value = ""
    input2.style = "font-family:Courier; color: black"
    input2.value = ""
    show_answer_button_4_clicked_boolean = false
    submit_button_2.style.display = "inline-block"
    show_answer_button_2.innerText = "Show Answer"
  } else {
    input.style = "font-family:Courier; color: blue;"
    input.value = "int"
    input1.style = "font-family:Courier; color: blue;"
    input1.value = ","
    input2.style = "font-family:Courier; color: blue;"
    input2.value = ","
    show_answer_button_4_clicked_boolean = true
    submit_button_2.style.display = "none"
    show_answer_button_2.innerText = "Hide Answer"
  }
}

function submit_answer_button_4_clicked() {
  pre = document.getElementById("pre-exc-4")
  input = document.getElementById("variables-exc-4").value
  input1 = document.getElementById("variables-exc-4-2").value
  input2 = document.getElementById("variables-exc-4-3").value
  if (input == "int" && input1 == "," && input2 == ",") {
    pre.setAttribute(
      "style",
      "font-size: 20px; background-color: #D9EEE1; color: #04AA6D"
    )
    pre.innerHTML =
      'Correct!\n\n<a href="c-user-input.html" style="color: #04AA6D"><u>Next ❯</u></a>'
    document.getElementById("submit-answer-button-4").innerText =
      "Next Excercise ❯"
    document.getElementById("show-answer-button-4").style.display = "none"
    document
      .getElementById("submit-answer-button-4")
      .setAttribute("onclick", "window.location='c-user-input.html'")
  } else {
    pre.setAttribute(
      "style",
      "font-size: 20px; color: #B94A48; background-color: #FFC0C7"
    )
    pre.innerHTML =
      'Not correct!\n<p>Click <u><a onclick="window.location.reload();"><u>here</u></a></u> to try again.</p>'
    document.getElementById("submit-answer-button-4").innerText = "Try Again"
    document
      .getElementById("submit-answer-button-4")
      .setAttribute("onclick", "window.location.reload()")
    document.getElementById("show-answer-button-4").style.display = "none"
  }
}
