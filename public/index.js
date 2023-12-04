document.getElementById('myForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;

    try {
        const response = await fetch('http://localhost:3000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input1, input2 }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.text();
        document.getElementById('result').innerText = result;
    } catch (error) {
        console.error('Error:', error.message);
    }
});