class Api {
  constructor({apiUrl}){
    this._apiUrl = apiUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse.bind(api));
  }

  checkQuestion(questionNumber){
    return this._request(this._apiUrl + `action=checkQuestion&id_q=${questionNumber}`)
  }
}

export const api = new Api({apiUrl: "https://dendonora2020.donorsearch.org/backendD/API/index.php?"})