document.getElementById('myForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;

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