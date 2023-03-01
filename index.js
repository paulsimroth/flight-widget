const tableBody = document.getElementById('table-body');

let flights = [
    {
        time: "08:30",
        destination: "VIE",
        flight: "OS123",
        gate: "F01",
        info: "CLOSED"
    },
    {
        time: "08:55",
        destination: "FRA",
        flight: "LH123",
        gate: "F04",
        info: "BOARDING"
    },    
    {
        time: "08:45",
        destination: "SFO",
        flight: "UA099",
        gate: "G01",
        info: "GATE OPEN"
    },
    {
        time: "13:10",
        destination: "DXB",
        flight: "EK456",
        gate: "D26",
        info: "DELAYED"
    },
    {
        time: "15:30",
        destination: "BKK",
        flight: "OS078",
        gate: "G18",
        info: ""
    }
];

const destinations = ["NRT", "KUL", "BKK", "VIE", "FRA", "MUC", "ADD", "DXB", "SFO", "LAX", "LHR"]
const infos = ["CLOSED", "BOARDING", "GATE OPEN", "DELAYED", "CANCELLED"]
let hours = 15;

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr");

        for(const flightDetails in flight) {
            const tableCell = document.createElement("td");
            const word = Array.from(flight[flightDetails])

            for(const [index, letter] of word.entries()) {
                const letterElement = document.createElement("div");

                setTimeout(() => {
                    letterElement.classList.add("flip");
                    letterElement.textContent = letter;
                    tableCell.append(letterElement);
                }, 100 * index);
            };

            tableRow.append(tableCell);
        }

        tableBody.append(tableRow);
    };
};

populateTable();

function generateRndLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
};

function generateRndNum(maxNr) {
    const numbers = "0123456789";
    if (maxNr) {
        const newNumbers = numbers.slice(0, maxNr + 1);
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));
    }
    return numbers.charAt(Math.floor(Math.random() * numbers.length));
};

function generateTime() {
    let displayHour = hours;

    if (hours <= 24) {
        hours++
    }
    if (hours >= 24) {
        hours = 1
        displayHour = hours
    }
    if (hours < 10) {
        displayHour = "0" + displayHour
    }

    return displayHour + ":" + generateRndNum(5) + generateRndNum();
};

function shuffleUp() {
    flights.shift();
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRndLetter() + generateRndLetter() + generateRndNum() + generateRndNum() + generateRndNum(),
        gate: generateRndLetter() + generateRndNum() + generateRndNum(),
        info: infos[Math.floor(Math.random() * infos.length)]
    })

    tableBody.textContent = ""
    populateTable()
};

setInterval(shuffleUp, 5000);