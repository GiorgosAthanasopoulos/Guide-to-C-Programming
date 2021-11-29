let clickedStates = []
let answeredCorrectly = []

// Assuming that pre elements are used exclusively for exercises, we can deduce how many 'Show Answer' buttons
// there are in the document, and can therefore initialize and use their state later
window.onload = function() {
    let length = document.getElementsByTagName('pre').length;
    for (let i = 0; i < length; ++i) {
        clickedStates.push(false); 
        answeredCorrectly.push(false);
    }
}

// First arguement: id of the <pre> element containing the code
// Second arguement: an array of boolean values indicating whether the current 'show' button is clicked
// Third arguement: an array that contains arrays of the answers to each exercise in the correct order (e.g. [ [+, -], ["scanf", "%d"] ])
//
// The following function assumes the following:
// 1. The last letter of the <pre> id is a number indicating which exercise it is (1st, 2nd etc)
// 2. The element after the <pre> element is the 'Show Answer' button
// 3. The element after the forementioned button is the 'Submit answer' button
// Should any of the above not be followed, the function will fail
function onShowAnswer(pre_id, all_answers) {
    let buttonIndex = parseInt(pre_id.slice(-1)) - 1;
    let pre = document.getElementById(pre_id);
    let children = pre.childNodes;
    if (!clickedStates[buttonIndex]) {
        let answerIndex = 0;
        for (let i = 0; i < children.length; ++i) {
            if (children[i].tagName == "INPUT") {
                children[i].style = "font-family:Courier; color: blue;";
                children[i].value = all_answers[buttonIndex][answerIndex++];
            }
        }
        pre.nextElementSibling.innerText = "Hide Answer";
        pre.nextElementSibling.nextElementSibling.style.display = "none";
        clickedStates[buttonIndex] = true;
    } else {
        for (let i = 0; i < children.length; ++i) {
            if (children[i].tagName == "INPUT") {
                children[i].style = "font-family:Courier; color: black;";
                children[i].value = "";
            }
        }
        pre.nextElementSibling.innerText = "Show Answer";
        pre.nextElementSibling.nextElementSibling.style.display = "inline-block";
        clickedStates[buttonIndex] = false;
    }
}

// First arguement: The id of the <pre> containing the code
// Second arguement: The array containg the answers to all the questions
// Third arguement: If it is specified, the browser will redirect to the specified string (e.g. 'c-string.html')
// otherwise it will set the page to the next excercise div, which will have an id of #pre-exc-n 
// where n = current exercise number + 1
function onSubmitAnswer(pre_id, all_answers, nextPage='') {
    let buttonIndex = parseInt(pre_id.slice(-1)) - 1;
    let pre = document.getElementById(pre_id);
    let pre_children = pre.childNodes;
    let show_button = pre.nextElementSibling;
    let submit_button = show_button.nextElementSibling;
    if (areAllAnswersCorrect(pre_children, all_answers[buttonIndex]) || answeredCorrectly[buttonIndex]) {
        answeredCorrectly[buttonIndex] = true;
        pre.setAttribute("style", "font-size: 20px; background-color: #D9EEE1; color: #04AA6D");
        if (nextPage != '') {
            pre.innerHTML = 'Correct!\n\n<a href="' + nextPage + '"style="color: #04AA6D"><u>Next ❯</u></a>';
        } else {
            pre.innerHTML = 'Correct!\n\n<a href="#pre-exc-' + (buttonIndex + 2).toString() + '" style="color: #04AA6D"><u>Next ❯</u></a>';
        }
        if (submit_button.innerText == "Next Excercise ❯") {
            if (nextPage != '') {
                window.location = nextPage;
            } else {
                window.location = "#exc-" + (buttonIndex + 2).toString();
            }
        }
        submit_button.innerText = "Next Excercise ❯"
        show_button.style.display = "none"
    } else {
        pre.setAttribute("style", "font-size: 20px; color: #B94A48; background-color: #FFC0C7")
        pre.innerHTML = 'Not correct!\n<p>Click <u><a onclick="window.location.reload();"><u>here</u></a></u> to try again.</p>'
        submit_button.innerText = "Try Again"
        submit_button.setAttribute("onclick", "window.location.reload()")
        show_button.style.display = "none"
    }
}

function areAllAnswersCorrect(pre_children, answers) {
    let index = 0;
    for (let i = 0; i < pre_children.length; ++i) {
        if (pre_children[i].tagName == "INPUT") {
            if (pre_children[i].value != answers[index++]) {
                return false;
            }
        }
    }
    return true;
}