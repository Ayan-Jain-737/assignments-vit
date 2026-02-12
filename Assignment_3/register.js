var fest = "Riviera";
let campus = "VIT Vellore";
const deadline = "February 23, 2026 23:59:59";
const eventMeta = { theme: "Digital", status: "Open" };

function initPage() {
    alert("Welcome to the Registration Portal");
    console.log("University: " + campus);
    startCountdown();
}

function startCountdown() {
    setInterval(function() {
        let target = new Date("February 23, 2026 23:59:59").getTime();
        let now = new Date().getTime();
        let diff = target - now;
        let d = Math.floor(diff / (1000 * 60 * 60 * 24));
        let h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((diff % (1000 * 60)) / 1000);
        if (diff < 0) {
            document.getElementById("timer-display").innerHTML = "REGISTRATION CLOSED";
        } else {
            document.getElementById("timer-display").innerHTML = d + "d " + h + "h " + m + "m " + s + "s remaining";
        }
    }, 1000);
}

let suggestArray = [];
function addSuggestion() {
    let box = document.getElementById("user-suggest");
    if (box.value !== "") {
        let sObj = { msg: box.value, date: new Date().toLocaleTimeString() };
        suggestArray.push(sObj);
        
        let tags = ["General", "Feedback", "Urgent", "Question"];
        tags.shift();
        tags.splice(0, 0, "New");
        let topTags = tags.slice(0, 2);

        let display = "<strong>Recent Suggestions:</strong><ul>";
        for (let item of suggestArray) {
            display += "<li>" + item.msg + "</li>";
        }
        display += "</ul><p><small>Tags: " + topTags.join(", ") + "</small></p>";
        
        document.getElementById("suggestion-list").innerHTML = display;
        box.value = "";
        box.focus();
    }
}
function handleEnter(event) {
    if (event.key === "Enter") {
        addSuggestion();
    }
}

let hasSubmitted = false;
function validateForm(event) {
    event.preventDefault();
    if (hasSubmitted) {
        alert("You have already registered! Multiple submissions are not allowed.");
        return false;
    }

    let name = document.forms["regForm"]["user"].value;
    let email = document.forms["regForm"]["email"].value;

    if (name == "" ) {
        alert("Please fill in all fields!");
        document.getElementById("user").focus();
        return false;
    }
    if ( email == "") {
        alert("Please fill in all fields!");
        document.getElementById("email").focus();
        return false;
    }

    let ok = confirm("Details captured. Do you want to give any suggestions?");
    if (ok) {
        hasSubmitted = true;
        document.querySelector(".sub-btn").style.opacity = "0.5";
        document.querySelector(".sub-btn").innerText = "Already Registered";

        document.getElementById("user-suggest").focus();
        return true;
    }
    else {
        alert("Thank you for registration");
        window.location.href = "index.html";
    }
    return false;
}

function clearForm() {
    document.getElementById("regForm").reset();
    console.log("Form reset used");
}

function logChange() { console.log("Input modified"); }
function mOverEffect(x) { x.style.transform = "scale(1.02)"; }
function mOutEffect(x) { x.style.transform = "scale(1)"; }