import Utility from "./utility.js";

export default class Onload{
    constructor() {
        this.updatePricingTable();
    }

    updatePricingTable() {
        let clientDetails = Utility.sendGetRequest("https://ipapi.co/json");

        let currency = clientDetails.currency.toString();

        currency = currency.toLowerCase();

        let exchangeRates = Utility.sendGetRequest("https://www.floatrates.com/daily/usd.json");

        let conversionFactor = exchangeRates[currency].rate;

        for (let i = 0; i < document.getElementsByClassName('currency').length; i++) {
            document.getElementsByClassName('currency')[i].innerText = currency.toUpperCase();
        }

        for (let i = 0; i < document.getElementsByClassName('box-price').length; i++) {
            let initialPrice = document.getElementsByClassName('box-price')[i].innerText;

            let finalPrice = Math.round(initialPrice * conversionFactor);

            document.getElementsByClassName('box-price')[i].innerText = finalPrice;
        }
    }
}
