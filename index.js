// index.js
document.getElementById('myForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;

    const response = await fetch(`http://ping-gg-guessimnotgreats-projects.vercel.applocalhost:3000/hello?input1=${encodeURIComponent(input1)}&input2=${encodeURIComponent(input2)}`);
    const result = await response.text();
    document.getElementById('result').innerText = result;
});

