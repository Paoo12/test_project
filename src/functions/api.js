async function fetchData () {
    const response = await fetch('https://api.example.com');
    const data = await response.json();
    return data;
}

module.exports = fetchData;