// Dot Variables
var scrollTo1 = document.getElementById("dot1");
var scrollTo2 = document.getElementById("dot2");
var scrollTo3 = document.getElementById("dot3");
var scrollTo4 = document.getElementById("dot4");

// Section Varaibles
var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var section4 = document.getElementById("section4");

// Event Listeners
scrollTo1.addEventListener("click", scrollInto1)
scrollTo2.addEventListener("click", scrollInto2)
scrollTo3.addEventListener("click", scrollInto3)
scrollTo4.addEventListener("click", scrollInto4)

// Scroll To 1
function scrollInto1(){
    section1.scrollIntoView({behavior: "smooth"});
    setTimeout(() => {
        scrollTo1.style.background = "#333333";
        scrollTo2.style.background = "#FFFFFF";
        scrollTo3.style.background = "#FFFFFF";
        scrollTo4.style.background = "#FFFFFF";
    }, 200);
}

// Scroll To 2
function scrollInto2(){
    section2.scrollIntoView({behavior: "smooth"});
    setTimeout(() => {
        scrollTo1.style.background = "#333333";
        scrollTo2.style.background = "#FFFFFF";
        scrollTo3.style.background = "#333333";
        scrollTo4.style.background = "#333333";
    }, 200);
}

// Scroll To 3
function scrollInto3(){
    section3.scrollIntoView({behavior: "smooth"});
    setTimeout(() => {
        scrollTo1.style.background = "#FFFFFF";
        scrollTo2.style.background = "#FFFFFF";
        scrollTo3.style.background = "#333333";
        scrollTo4.style.background = "#FFFFFF";
    }, 200);
}

// Scroll To 4
function scrollInto4(){
    section4.scrollIntoView({behavior: "smooth"});
    setTimeout(() => {
        scrollTo1.style.background = "#333333";
        scrollTo2.style.background = "#333333";
        scrollTo3.style.background = "#333333";
        scrollTo4.style.background = "#FFFFFF";
    }, 200);
}