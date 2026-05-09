// Function to handle the Fullscreen and first transition
function initiateSequence() {
    // 1. Go Fullscreen
    const elem = document.documentElement;
    if (elem.requestFullscreen) { elem.requestFullscreen(); }

    // 2. Start the Music!
    const music = document.getElementById('bg-music');
    music.volume = 0.5; // Set volume to 50% so it doesn't blast their ears
    music.play();

    // 3. Switch screens
    document.getElementById('scanner-screen').classList.remove('active');
    document.getElementById('mission-card').classList.add('active');
}

// Transition to the registration form
function showRegistration() {
    document.getElementById('mission-card').classList.remove('active');
    document.getElementById('registration-screen').classList.add('active');
}

// The "Fake Hacking" Logic
function startFakeCoding() {
    const name = document.getElementById('recruitName').value || "UNKNOWN_FELINE";
    
    // Switch to Terminal Screen
    document.getElementById('registration-screen').classList.remove('active');
    document.getElementById('terminal-screen').classList.add('active');

    const consoleLines = [
        "> INITIALIZING HEURISTIC UPLINK...",
        "> BYPASSING HUMAN FIREWALLS...",
        "> ACCESSING TUNA_DATABASE_ALPHA...",
        "> SCANNING FOR CAN OPENER FREQUENCIES...",
        `> REGISTERING NEW COMBATANT: ${name.toUpperCase()}`,
        "> UPLOADING PURR-CODE ENCRYPTION...",
        "> GENETIC CAT-DATA VERIFIED.",
        "> STATUS: ACTIVE.",
        "> WELCOME TO THE CAT ARMY, SOLDIER."
    ];

    let lineIndex = 0;
    const consoleBox = document.getElementById('hack-console');

    // This creates the fast-typing effect
    const interval = setInterval(() => {
        if (lineIndex < consoleLines.length) {
            const line = document.createElement('p');
            line.style.color = "#ff0000";
            line.style.margin = "5px 0";
            line.innerHTML = consoleLines[lineIndex];
            consoleBox.appendChild(line);
            lineIndex++;
            
            // Auto-scroll to bottom
            window.scrollTo(0, document.body.scrollHeight);
        } else {
            clearInterval(interval);
            // Wait 2 seconds, then go to the final HQ page
            setTimeout(() => {
                alert(`Congrats ${name}, you are an official cat in the CAT ARMY now!`);
                revealFinalHQ();
            }, 2000);
        }
    }, 400); // Adjust this number to make the "coding" faster or slower
}

function revealFinalHQ() {
    // Hide the terminal and show the live dashboard
    document.getElementById('terminal-screen').classList.remove('active');
    document.getElementById('final-hq').classList.add('active');
    console.log("Welcome to the Command Center, Soldier.");
}


function backToMain() {
    // Exit Fullscreen
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
    
    // Fade out music and go home
    const music = document.getElementById('bg-music');
    let fadeOut = setInterval(() => {
        if (music.volume > 0.1) {
            music.volume -= 0.1;
        } else {
            clearInterval(fadeOut);
            music.pause();
            // Go back to the main site
            window.location.href = "index.html"; 
        }
    }, 100);
}