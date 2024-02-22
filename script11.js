function logActivity() {
    var stepsInput = document.getElementById("stepsInput");
    var caloriesInput = document.getElementById("caloriesInput");

    var stepsValue = parseInt(stepsInput.value) || 0;
    var caloriesValue = parseInt(caloriesInput.value) || 0;

    var currentSteps = parseInt(document.getElementById("steps").innerText);
    var currentCalories = parseInt(document.getElementById("calories").innerText);

    document.getElementById("steps").innerText = currentSteps + stepsValue;
    document.getElementById("calories").innerText = currentCalories + caloriesValue;

    // Clear input fields
    stepsInput.value = "";
    caloriesInput.value = "";
}
