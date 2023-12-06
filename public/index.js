document.getElementById('summoner-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const input1 = document.getElementById('game-name-input').value;
    const input2 = document.getElementById('tagline-input').value;

    try {
        const response = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input1, input2 }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        document.getElementById('result').innerHTML = `
            <p>puuid: ${result.puuid}</p>
            <p>gameName: ${result.gameName}</p>
            <p>tagLine: ${result.tagLine}</p>
        `;
    } catch (error) {
        console.error('Error:', error.message);
    }
});