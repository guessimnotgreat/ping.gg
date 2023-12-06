const { API_KEY, BASE_URL, PATHS } = require('./api-config');

async function fetchIDInfo(gameName, tagLine) {
    try {
        const resp = await fetch(
            BASE_URL.asia + PATHS.idInfo + `${gameName}/${tagLine}`,
            getHeader()
        );
        if (!checkResponse(resp)) {
            return null;
        }
        const result = await resp.json();
        console.log(result)
        return result;
    } catch (error) {
        console.error(`Fetching Error: ${error.message}`);
    }
}

async function fetchMatchesList(puuid) {
    try {
        const resp = await fetch(
            BASE_URL.sea + PATHS.matchesList + `${puuid}/ids?start=0&count=20`,
            getHeader()
        )
        if (!checkResponse(resp)) {
            return null;
        }
        const result = await resp.json()
        console.log(result)
        return result
    } catch (error) {
        
    }
}

function getHeader() {
    return { headers: { "X-Riot-Token": API_KEY } };
}

function checkResponse(resp) {
    if (!resp.ok) {
        console.error(`Error ${resp.status}: ${resp.statusText}`);
        return false;
    }
    return true;
}

module.exports = { 
    fetchIDInfo,
    fetchMatchesList
 };
