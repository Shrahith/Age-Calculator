let currDate = document.getElementById("currDate");
let dateOfBirth = document.querySelector("#DOB");
const CalcAge = document.getElementById("CalcAge");
const displayAgePopup = document.getElementById("displayAge"); // Renamed for clarity
const ageText = document.getElementById("age"); // Renamed for clarity
const closePopupBtn = document.getElementById("closePopup"); // New button to close popup

var today = new Date();
currDate.innerText = `Today's Date: ${today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})}`; // More readable date format

CalcAge.addEventListener("click", () => {
    // Basic validation for DOB format
    const dobValue = dateOfBirth.value;
    if (!dobValue || !/^\d{2}\/\d{2}\/\d{4}$/.test(dobValue)) {
        ageText.innerText = "Please enter DOB in MM/DD/YYYY format.";
        displayAgePopup.classList.add("visible");
        return;
    }

    var birthDate = new Date(dobValue);

    // Check if birthDate is a valid date
    if (isNaN(birthDate.getTime())) {
        ageText.innerText = "Invalid Date of Birth. Please use MM/DD/YYYY.";
        displayAgePopup.classList.add("visible");
        return;
    }

    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    ageText.innerText = `You are ${age} years old!`;
    displayAgePopup.classList.add("visible"); // Use class for visibility
});

closePopupBtn.addEventListener("click", () => {
    displayAgePopup.classList.remove("visible"); // Close popup
});

// Optional: Close popup if clicking outside it (though with fixed position, it's less critical)
window.addEventListener("click", (event) => {
    if (event.target === displayAgePopup) {
        displayAgePopup.classList.remove("visible");
    }
});
