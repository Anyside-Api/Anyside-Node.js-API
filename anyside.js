const axios = require('axios');

class Anyside {
    constructor(apiKey=null) {
        this.apiEndpoint = "https://us-central1-test-anyside.cloudfunctions.net/api/public";
        this.apiKey = apiKey
        this.instance = axios.create({baseURL:this.apiEndpoint})
    }
    
    async queryDomain(domain) {
        try {
            let response = await this.instance.post(`/queryDomain`,{"domain":domain,"api_key":this.apiKey});
            return response.data
        } catch (error) {
            return error.response.data
        }
    }

    async lookupWallet(walletAddress) {
        try {
            let response = await this.instance.post(`/lookupWallet`,{JSON:{"wallet_address":walletAddress,"api_key":this.apiKey}});
            return response.data
        } catch (error) {
            return error.response.data
        }
    }

}

module.exports.Anyside = Anyside;

