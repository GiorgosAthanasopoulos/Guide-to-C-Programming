show_answer_button_1_clicked_boolean = false
show_answer_button_2_clicked_boolean = false
show_answer_button_3_clicked_boolean = false
q1done = false
q2done = false

function show_answer_button_1_clicked() {
  input = document.getElementById("syntax-exc-1")
  submit_button_1 = document.getElementById("submit-button-1")
  show_answer_button_1 = document.getElementById("show-answer-button-1")
  if (show_answer_button_1_clicked_boolean) {
    input.style = "font-family:Courier; color: black"
    input.value = ""
    show_answer_button_1_clicked_boolean = false
    submit_button_1.style.display = "inline-block"
    show_answer_button_1.innerText = "Show Answer"
  } else {
    input.style = "font-family:Courier; color: blue;"
    input.value = "printf"
    show_answer_button_1_clicked_boolean = true
    submit_button_1.style.display = "none"
    show_answer_button_1.innerText = "Hide Answer"
  }
}

function show_answer_button_2_clicked() {
  input = document.getElementById("syntax-exc-2")
  submit_button_2 = document.getElementById("submit-button-2")
  show_answer_button_2 = document.getElementById("show-answer-button-2")
  if (show_answer_button_2_clicked_boolean) {
    input.style = "font-family:Courier; color: black"
    input.value = ""
    show_answer_button_2_clicked_boolean = false
    submit_button_2.style.display = "inline-block"
    show_answer_button_2.innerText = "Show Answer"
  } else {
    input.style = "font-family:Courier; color: blue;"
    input.value = "\\n"
    show_answer_button_2_clicked_boolean = true
    submit_button_2.style.display = "none"
    show_answer_button_2.innerText = "Hide Answer"
  }
}

function show_answer_button_3_clicked() {
  input = document.getElementById("syntax-exc-3")
  input1 = document.getElementById("syntax-exc-3-2")
  input2 = document.getElementById("syntax-exc-3-3")
  submit_button_3 = document.getElementById("submit-button-3")
  show_answer_button_3 = document.getElementById("show-answer-button-3")
  if (show_answer_button_3_clicked_boolean) {
    input.style = "font-family:Courier; color: black"
    input.value = ""
    input1.style = "font-family:Courier; color: black"
    input1.value = ""
    input2.style = "font-family:Courier; color: black"
    input2.value = ""
    show_answer_button_3_clicked_boolean = false
    submit_button_3.style.display = "inline-block"
    show_answer_button_3.innerText = "Show Answer"
  } else {
    input.style = "font-family:Courier; color: blue;"
    input.value = "//"
    input1.style = "font-family:Courier; color: blue;"
    input1.value = "/*"
    input2.style = "font-family:Courier; color: blue;"
    input2.value = "*/"
    show_answer_button_3_clicked_boolean = true
    submit_button_3.style.display = "none"
    show_answer_button_3.innerText = "Hide Answer"
  }
}

function submit_button_1_clicked() {
  pre = document.getElementById("pre-exc-1")
  input = document.getElementById("syntax-exc-1").value
  if (input == "printf") {
    pre.setAttribute(
      "style",
      "font-size: 20px; background-color: #D9EEE1; color: #04AA6D"
    )
    pre.innerHTML =
      'Correct!\n\n<a href="#exc-2" style="color: #04AA6D"><u>Next ❯</u></a>'
    document.getElementById("submit-button-1").innerText = "Next Excercise ❯"
    document.getElementById("show-answer-button-1").style.display = "none"
    q1done = true
  } else {
    pre.setAttribute(
      "style",
      "font-size: 20px; color: #B94A48; background-color: #FFC0C7"
    )
    pre.innerHTML =
      'Not correct!\n<p>Click <u><a onclick="window.location.reload();"><u>here</u></a></u> to try again.</p>'
    document.getElementById("submit-button-1").innerText = "Try Again"
    document
      .getElementById("submit-button-1")
      .setAttribute("onclick", "window.location.reload()")
    document.getElementById("show-answer-button-1").style.display = "none"
  }
}

function submit_button_2_clicked() {
  pre = document.getElementById("pre-exc-2")
  input = document.getElementById("syntax-exc-2").value
  if (input == "\\n") {
    pre.setAttribute(
      "style",
      "font-size: 20px; background-color: #D9EEE1; color: #04AA6D"
    )
    pre.innerHTML =
      'Correct!\n\n<a href="#exc-3" style="color: #04AA6D"><u>Next ❯</u></a>'
    document.getElementById("submit-button-2").innerText = "Next Excercise ❯"
    document.getElementById("show-answer-button-2").style.display = "none"
    q2done = true
  } else {
    pre.setAttribute(
      "style",
      "font-size: 20px; color: #B94A48; background-color: #FFC0C7"
    )
    pre.innerHTML =
      'Not correct!\n<p>Click <u><a onclick="window.location.reload();"><u>here</u></a></u> to try again.</p>'
    document.getElementById("submit-button-2").innerText = "Try Again"
    document
      .getElementById("submit-button-2")
      .setAttribute("onclick", "window.location.reload()")
    document.getElementById("show-answer-button-2").style.display = "none"
  }
}

function submit_button_3_clicked() {
  pre = document.getElementById("pre-exc-3")
  input = document.getElementById("syntax-exc-3").value
  input1 = document.getElementById("syntax-exc-3-2").value
  input2 = document.getElementById("syntax-exc-3-3").value
  if (input == "//" && input1 == "/*" && input2 == "*/") {
    pre.setAttribute(
      "style",
      "font-size: 20px; background-color: #D9EEE1; color: #04AA6D"
    )
    pre.innerHTML =
      'Correct!\n\n<a href="c-variables.html" style="color: #04AA6D"><u>Next ❯</u></a>'
    document.getElementById("submit-button-3").innerText = "Next Excercise ❯"
    document.getElementById("show-answer-button-3").style.display = "none"
    document
      .getElementById("submit-button-3")
      .setAttribute("onclick", "window.location='c-variables.html'")
  } else {
    pre.setAttribute(
      "style",
      "font-size: 20px; color: #B94A48; background-color: #FFC0C7"
    )
    pre.innerHTML =
      'Not correct!\n<p>Click <u><a onclick="window.location.reload();"><u>here</u></a></u> to try again.</p>'
    document.getElementById("submit-button-3").innerText = "Try Again"
    document
      .getElementById("submit-button-3")
      .setAttribute("onclick", "window.location.reload()")
    document.getElementById("show-answer-button-3").style.display = "none"
  }
}
