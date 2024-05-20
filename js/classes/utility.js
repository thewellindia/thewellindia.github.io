export default class Utility{
    constructor() {
    }

    static sendGetRequest(url){
        let xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open("GET", url, false);
        xmlHttpRequest.send();
        return JSON.parse(xmlHttpRequest.response);
    }
}
