/*
* Example 06 JavaScript File
 */
let counter = 0
const outputArea = document.getElementById("output-area")
const mouseOutput = document.getElementById("mouse-position")

function upButton(){
    counter += 1
    outputArea.innerHTML = "<p>Count: " + counter + "</p>"
}
function downButton(){
    counter -= 1
    outputArea.innerHTML = "<p>Count: " + counter + "</p>"
}
function mousePosition(){
    let x = event.pageX
    let y = event.pageY
    mouseOutput.innerHTML="<p>X: "+x.toString()+","
        + y.toString() + "</p>"
}