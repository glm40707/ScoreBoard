homeScore = 0
awayScore = 0

// home number change function
function homeNumber() {
    let hn = document.getElementById('homenum')
    hn.textContent = homeScore
    
}
homeNumber()

// away number change function
function homeNumber() {
    let an = document.getElementById('awaynum')
    an.textContent = homeScore
    
}
homeNumber()

// home button functions
function addOneHome() {
    const hn = document.getElementById('homenum')
    hn.textContent = homeScore += 1
}

function addTwoHome() {
    const hn = document.getElementById('homenum')
    hn.textContent = homeScore += 2
}

function addThreeHome() {
    const hn = document.getElementById('homenum')
    hn.textContent = homeScore += 3
}

// away button functions
function addOneAway() {
    const an = document.getElementById('awaynum')
    an.textContent = awayScore += 1
}

function addTwoAway() {
    const an = document.getElementById('awaynum')
    an.textContent = awayScore += 2
}

function addThreeAway() {
    const an = document.getElementById('awaynum')
    an.textContent = awayScore += 3
}


