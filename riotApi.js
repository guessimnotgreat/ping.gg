const API_KEY = 'RGAPI-72c700dc-cdd4-44f9-9621-8e9896a65edb';
const BASE_URL = 'https://asia.api.riotgames.com';
const PATH = '/riot/account/v1/accounts/by-riot-id/';

async function fetchIDInfo(gameName, tagLine) {
    try {
        const resp = await fetch(
            BASE_URL + PATH + `${gameName}/${tagLine}`,
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

module.exports = { fetchIDInfo };
