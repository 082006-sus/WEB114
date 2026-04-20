//
// Name: Basan Emenov
// Date: 04/19/2026
//

const moodTitle = document.querySelector("#moodTitle");
const message = document.querySelector("#message");

const happyBtn = document.querySelector("#happyBtn");
const calmBtn = document.querySelector("#calmBtn");
const angryBtn = document.querySelector("#angryBtn");
const sleepyBtn = document.querySelector("#sleepyBtn");

const moods = {
    happy: {
        name: "HAPPY",
        bg: "#FFD700",
        text: "#3d2b00",
        message: "Everything feels bright and fun!"
    },

    calm: {
        name: "CALM",
        bg: "#cfeeee",
        text: "#1f3b4d",
        message: "Take a deep breath. Everything is okay."
    },

    angry: {
        name: "ANGRY",
        bg: "#ff6b6b",
        text: "#5a0000",
        message: "Pause, breathe, and cool down."
    },

    sleepy: {
        name: "SLEEPY",
        bg: "#b8b8d1",
        text: "#2f2f4f",
        message: "Time to rest and recharge."
    }
};

function changeMood(moodName) {
    const mood = moods[moodName];

    document.body.style.backgroundColor = mood.bg;
    document.body.style.color = mood.text;
    message.textContent = mood.message;
    moodTitle.textContent = mood.name;

    console.log("Mood selected:", moodName);
    console.log("Mood settings:", mood);
}

function handleHappyClick() {
    changeMood("happy");
}

function handleCalmClick() {
    changeMood("calm");
}

function handleAngryClick() {
    changeMood("angry");
}

function handleSleepyClick() {
    changeMood("sleepy");
}

happyBtn.addEventListener("click", handleHappyClick);
calmBtn.addEventListener("click", handleCalmClick);
angryBtn.addEventListener("click", handleAngryClick);
sleepyBtn.addEventListener("click", handleSleepyClick);