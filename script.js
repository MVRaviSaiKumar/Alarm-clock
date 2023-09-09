// Get elements from the DOM
const timePicker = document.getElementById("timePicker");
const setAlarmButton = document.getElementById("setAlarm");
const stopAlarmButton = document.getElementById("stopAlarm");

let alarmInterval;

// Function to check and trigger the alarm
function checkAlarm() {
    const currentTime = new Date();
    const selectedTime = new Date(`2000-01-01T${timePicker.value}`);
    
    if (currentTime.getHours() === selectedTime.getHours() && 
        currentTime.getMinutes() === selectedTime.getMinutes()) {
        alert("Time to wake up!");
        clearInterval(alarmInterval);
    }
}

// Event listener for setting the alarm
setAlarmButton.addEventListener("click", () => {
    clearInterval(alarmInterval); // Clear any existing intervals
    
    // Check the alarm every second
    alarmInterval = setInterval(checkAlarm, 1000);
    
    // Disable the time picker and set alarm button
    timePicker.disabled = true;
    setAlarmButton.disabled = true;
});

// Event listener for stopping the alarm
stopAlarmButton.addEventListener("click", () => {
    clearInterval(alarmInterval); // Stop the alarm interval
    
    // Enable the time picker and set alarm button
    timePicker.disabled = false;
    setAlarmButton.disabled = false;
});
