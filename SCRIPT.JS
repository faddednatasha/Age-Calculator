// JavaScript code
const btnEl = document.getElementById("btn");
const dobEl = document.getElementById("dob");
const resEl = document.getElementById("result");

function calculateAge() {
    const bdayValue = dobEl.value;
    if (bdayValue === "") {
        alert("PLEASE ENTER YOUR BIRTHDAY!");
    } else {
        const age = getAge(bdayValue);
        resEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(bdayValue) {
    const currentDate = new Date();
    const bdayDate = new Date(bdayValue);

    console.log("currentDate:", currentDate);
    console.log("bdayDate:", bdayDate);

    let age = currentDate.getFullYear() - bdayDate.getFullYear();

    // Check if the birthday hasn't occurred yet this year
    if (
        currentDate.getMonth() < bdayDate.getMonth() ||
        (currentDate.getMonth() === bdayDate.getMonth() &&
            currentDate.getDate() < bdayDate.getDate())
    ) {
        age--;
    }

    console.log("age:", age);

    return age;
}

btnEl.addEventListener("click", calculateAge);