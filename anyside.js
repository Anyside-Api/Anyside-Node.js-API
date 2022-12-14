try{
    var axios = require('axios');
} catch (error){};

class Anyside {
    constructor(apiKey=null) {
        this.apiEndpoint = "https://api.anyside.com/public";
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
            let response = await this.instance.post(`/lookupWallet`,{"wallet_address":walletAddress,"api_key":this.apiKey});
            return response.data
        } catch (error) {
            return error.response.data
        }
    }

}

try{
    module.exports.Anyside = Anyside;
} catch (error){};


