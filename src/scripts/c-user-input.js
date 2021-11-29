show_answer_button_1_clicked_boolean = false
show_answer_button_2_clicked_boolean = false

function show_answer_button_1_clicked() {
  input = document.getElementById("input-exc-1")
  input1 = document.getElementById("input-exc-1-2")
  submit_button_1 = document.getElementById("submit-answer-button-1")
  show_answer_button_1 = document.getElementById("show-answer-button-1")

  if (show_answer_button_1_clicked_boolean) {
    input.style = "font-family:Courier; color: black"
    input.value = ""
    input1.style = "font-family:Courier; color: black"
    input1.value = ""
    show_answer_button_1_clicked_boolean = false
    submit_button_1.style.display = "inline-block"
    show_answer_button_1.innerText = "Show Answer"
  } else {
    input.style = "font-family:Courier; color: blue;"
    input.value = "%d"
    input1.style = "font-family:Courier; color: blue;"
    input1.value = "&i"
    show_answer_button_1_clicked_boolean = true
    submit_button_1.style.display = "none"
    show_answer_button_1.innerText = "Hide Answer"
  }
}

function submit_answer_button_1_clicked() {
  pre = document.getElementById("pre-exc-1")
  input = document.getElementById("input-exc-1").value
  input1 = document.getElementById("input-exc-1-2").value
  if (input == "%d" && input1 == "&i") {
    pre.setAttribute(
      "style",
      "font-size: 20px; background-color: #D9EEE1; color: #04AA6D"
    )
    pre.innerHTML =
      'Correct!\n\n<a href="#pre-exc-2" style="color: #04AA6D"><u>Next ❯</u></a>'
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

function show_answer_button_2_clicked() {
  let input = []
  for (let i = 0; i < 5; ++i) {
    input[i] = document.getElementById("input-exc-2-" + (i + 1))
  }
  submit_button_2 = document.getElementById("submit-answer-button-2")
  show_answer_button_2 = document.getElementById("show-answer-button-2")

  if (show_answer_button_2_clicked_boolean) {
    for (let i = 0; i < 5; ++i) {
      input[i].style = "font-family:Courier; color: black"
      input[i].value = ""
    }
    show_answer_button_2_clicked_boolean = false
    submit_button_2.style.display = "inline-block"
    show_answer_button_2.innerText = "Show Answer"
  } else {
    let answers = ["scanf", "&first", "scanf", "&second", "%d"]
    for (let i = 0; i < 5; ++i) {
      input[i].style = "font-family:Courier; color: blue;"
      input[i].value = answers[i]
    }
    show_answer_button_2_clicked_boolean = true
    submit_button_2.style.display = "none"
    show_answer_button_2.innerText = "Hide Answer"
  }
}

function submit_answer_button_2_clicked() {
  pre = document.getElementById("pre-exc-2")
  let answers = ["scanf", "&first", "scanf", "&second", "%d"]
  let isCorrect = true
  for (let i = 0; i < 5; ++i) {
    if (answers[i] != document.getElementById("input-exc-2-" + (i + 1)).value) {
      isCorrect = false
      break
    }
  }
  if (isCorrect) {
    pre.setAttribute(
      "style",
      "font-size: 20px; background-color: #D9EEE1; color: #04AA6D"
    )
    pre.innerHTML =
      'Correct!\n\n<a href="c-data-types.html" style="color: #04AA6D"><u>Next ❯</u></a>'
    document.getElementById("submit-answer-button-2").innerText =
      "Next Excercise ❯"
    document.getElementById("show-answer-button-2").style.display = "none"
    document
      .getElementById("submit-answer-button-2")
      .setAttribute("onclick", "window.location='c-data-types.html'")
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
