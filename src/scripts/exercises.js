let clickedStates = []

// Assuming that pre elements are used exclusively for exercises, we can deduce how many 'Show Answer' buttons
// there are in the document, and can therefore initialize and use their state later
window.onload = function() {
    let length = document.getElementsByTagName('pre').length;
    for (let i = 0; i < length; ++i) {
        clickedStates.push(false); 
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