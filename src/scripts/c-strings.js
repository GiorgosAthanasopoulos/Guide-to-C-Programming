show_answer_button_1_clicked_boolean = false
show_answer_button_2_clicked_boolean = false
show_answer_button_3_clicked_boolean = false
show_answer_button_4_clicked_boolean = false
show_answer_button_5_clicked_boolean = false
show_answer_button_6_clicked_boolean = false

function show_answer_button_1_clicked() {
  input = document.getElementById("strings-exc-1")
  input1 = document.getElementById("strings-exc-1-1")
  input2 = document.getElementById("strings-exc-1-2")
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
    input.value = "char"
    input1.style = "font-family:Courier; color: blue;"
    input1.value = "greeting[]"
    input2.style = "font-family:Courier; color: blue;"
    input2.value = '"Hello"'
    show_answer_button_1_clicked_boolean = true
    submit_button_1.style.display = "none"
    show_answer_button_1.innerText = "Hide Answer"
  }
}

function submit_answer_button_1_clicked() {
  pre = document.getElementById("pre-exc-1")
  input = document.getElementById("strings-exc-1").value
  input1 = document.getElementById("strings-exc-1-1").value
  input2 = document.getElementById("strings-exc-1-2").value
  if (input == "char" && input1 == "greeting[]" && input2 == '"Hello"') {
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
  input = document.getElementById("strings-exc-2")
  submit_button_2 = document.getElementById("submit-answer-button-2")
  show_answer_button_2 = document.getElementById("show-answer-button-2")
  if (show_answer_button_2_clicked_boolean) {
    input.style = "font-family:Courier; color: black"
    input.value = ""
    show_answer_button_2_clicked_boolean = false
    submit_button_2.style.display = "inline-block"
    show_answer_button_2.innerText = "Show Answer"
  } else {
    input.style = "font-family:Courier; color: blue;"
    input.value = "+"
    show_answer_button_2_clicked_boolean = true
    submit_button_2.style.display = "none"
    show_answer_button_2.innerText = "Hide Answer"
  }
}

function submit_answer_button_2_clicked() {
  pre = document.getElementById("pre-exc-2")
  input = document.getElementById("strings-exc-2").value
  if (input == "+") {
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
  input = document.getElementById("strings-exc-3")
  input1 = document.getElementById("strings-exc-3-2")
  submit_button_2 = document.getElementById("submit-answer-button-3")
  show_answer_button_2 = document.getElementById("show-answer-button-3")
  if (show_answer_button_3_clicked_boolean) {
    input.style = "font-family:Courier; color: black"
    input.value = ""
    input1.style = "font-family:Courier; color: black"
    input1.value = ""
    show_answer_button_3_clicked_boolean = false
    submit_button_2.style.display = "inline-block"
    show_answer_button_2.innerText = "Show Answer"
  } else {
    input.style = "font-family:Courier; color: blue;"
    input.value = "sizeof"
    input1.style = "font-family:Courier; color: blue;"
    input1.value = "txt"
    show_answer_button_3_clicked_boolean = true
    submit_button_2.style.display = "none"
    show_answer_button_2.innerText = "Hide Answer"
  }
}

function submit_answer_button_3_clicked() {
  pre = document.getElementById("pre-exc-3")
  input = document.getElementById("strings-exc-3").value
  input1 = document.getElementById("strings-exc-3-2").value
  if (input == "sizeof" && input1 == "txt") {
    pre.setAttribute(
      "style",
      "font-size: 20px; background-color: #D9EEE1; color: #04AA6D"
    )
    pre.innerHTML =
      'Correct!\n\n<a href="#exc-4" style="color: #04AA6D"><u>Next ❯</u></a>'
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
  input = document.getElementById("strings-exc-4")
  submit_button_1 = document.getElementById("submit-answer-button-4")
  show_answer_button_1 = document.getElementById("show-answer-button-4")
  if (show_answer_button_4_clicked_boolean) {
    input.style = "font-family:Courier; color: black"
    input.value = ""
    show_answer_button_4_clicked_boolean = false
    submit_button_1.style.display = "inline-block"
    show_answer_button_1.innerText = "Show Answer"
  } else {
    input.style = "font-family:Courier; color: blue;"
    input.value = "myString[0]"
    show_answer_button_4_clicked_boolean = true
    submit_button_1.style.display = "none"
    show_answer_button_1.innerText = "Hide Answer"
  }
}

function submit_answer_button_4_clicked() {
  pre = document.getElementById("pre-exc-4")
  input = document.getElementById("strings-exc-4").value
  if (input == "myString[0]") {
    pre.setAttribute(
      "style",
      "font-size: 20px; background-color: #D9EEE1; color: #04AA6D"
    )
    pre.innerHTML =
      'Correct!\n\n<a href="#pre-exc-5" style="color: #04AA6D"><u>Next ❯</u></a>'
    if (
      document.getElementById("submit-answer-button-4").innerText ==
      "Next Excercise ❯"
    ) {
      window.location = "#exc-5"
    }
    document.getElementById("submit-answer-button-4").innerText =
      "Next Excercise ❯"
    document.getElementById("show-answer-button-4").style.display = "none"
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
// EXC 5

function show_answer_button_5_clicked() {
  input = document.getElementById("strings-exc-5")
  input1 = document.getElementById("strings-exc-5-1")
  input2 = document.getElementById("strings-exc-5-2")
  submit_button_2 = document.getElementById("submit-answer-button-5")
  show_answer_button_2 = document.getElementById("show-answer-button-5")
  if (show_answer_button_5_clicked_boolean) {
    input.style = "font-family:Courier; color: black"
    input.value = ""
    input1.style = "font-family:Courier; color: black"
    input1.value = ""
    input2.style = "font-family:Courier; color: black"
    input2.value = ""
    show_answer_button_5_clicked_boolean = false
    submit_button_2.style.display = "inline-block"
    show_answer_button_2.innerText = "Show Answer"
  } else {
    input.style = "font-family:Courier; color: blue;"
    input.value = "myString[0]"
    input1.style = "font-family:Courier; color: blue;"
    input1.value = "="
    input2.style = "font-family:Courier; color: blue;"
    input2.value = "'J'"
    show_answer_button_5_clicked_boolean = true
    submit_button_2.style.display = "none"
    show_answer_button_2.innerText = "Hide Answer"
  }
}

function submit_answer_button_5_clicked() {
  pre = document.getElementById("pre-exc-5")
  input = document.getElementById("strings-exc-5").value
  input1 = document.getElementById("strings-exc-5-1").value
  input2 = document.getElementById("strings-exc-5-2").value
  if (input == "myString[0]" && input1 == "=" && input2 == "'J'") {
    pre.setAttribute(
      "style",
      "font-size: 20px; background-color: #D9EEE1; color: #04AA6D"
    )
    pre.innerHTML =
      'Correct!\n\n<a href="#pre-exc-6" style="color: #04AA6D"><u>Next ❯</u></a>'
    document.getElementById("submit-answer-button-5").innerText =
      "Next Excercise ❯"
    document.getElementById("show-answer-button-5").style.display = "none"
  } else {
    pre.setAttribute(
      "style",
      "font-size: 20px; color: #B94A48; background-color: #FFC0C7"
    )
    pre.innerHTML =
      'Not correct!\n<p>Click <u><a onclick="window.location.reload();"><u>here</u></a></u> to try again.</p>'
    document.getElementById("submit-answer-button-5").innerText = "Try Again"
    document
      .getElementById("submit-answer-button-5")
      .setAttribute("onclick", "window.location.reload()")
    document.getElementById("show-answer-button-5").style.display = "none"
  }
}

// EXC 6
function show_answer_button_6_clicked() {
  input = document.getElementById("strings-exc-6")
  submit_button_2 = document.getElementById("submit-answer-button-6")
  show_answer_button_2 = document.getElementById("show-answer-button-6")
  if (show_answer_button_6_clicked_boolean) {
    input.style = "font-family:Courier; color: black"
    input.value = ""
    show_answer_button_6_clicked_boolean = false
    submit_button_2.style.display = "inline-block"
    show_answer_button_2.innerText = "Show Answer"
  } else {
    input.style = "font-family:Courier; color: blue;"
    input.value = "fgets"
    show_answer_button_6_clicked_boolean = true
    submit_button_2.style.display = "none"
    show_answer_button_2.innerText = "Hide Answer"
  }
}

function submit_answer_button_6_clicked() {
  pre = document.getElementById("pre-exc-6")
  input = document.getElementById("strings-exc-6").value
  if (input == "fgets") {
    pre.setAttribute(
      "style",
      "font-size: 20px; background-color: #D9EEE1; color: #04AA6D"
    )
    pre.innerHTML =
      'Correct!\n\n<a href="c-math.html" style="color: #04AA6D"><u>Next ❯</u></a>'
    document.getElementById("submit-answer-button-6").innerText =
      "Next Excercise ❯"
    document.getElementById("show-answer-button-6").style.display = "none"
    document
      .getElementById("submit-answer-button-6")
      .setAttribute("onclick", "window.location='c-math.html'")
  } else {
    pre.setAttribute(
      "style",
      "font-size: 20px; color: #B94A48; background-color: #FFC0C7"
    )
    pre.innerHTML =
      'Not correct!\n<p>Click <u><a onclick="window.location.reload();"><u>here</u></a></u> to try again.</p>'
    document.getElementById("submit-answer-button-6").innerText = "Try Again"
    document
      .getElementById("submit-answer-button-6")
      .setAttribute("onclick", "window.location.reload()")
    document.getElementById("show-answer-button-6").style.display = "none"
  }
}
