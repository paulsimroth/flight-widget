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
        time: "23:30",
        destination: "BKK",
        flight: "OS078",
        gate: "G18",
        info: ""
    }
];

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