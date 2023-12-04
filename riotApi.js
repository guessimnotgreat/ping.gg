const fetch = require('node-fetch');

const API_KEY = 'RGAPI-7ce9c4d6-995b-4a74-b66a-8fcc763a2c3d';
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
