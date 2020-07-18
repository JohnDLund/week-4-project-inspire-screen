import store from "../store.js";
import Quote from "../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});


class QuoteService {
  constructor() {
    this.getQuote()
  }


  getQuote(){
    _quoteApi.get("").then(res => {
      console.log(res.data.quote)
      store.commit("quote", new Quote(res.data.quote))
    }).catch(err => console.error(err))
  }

}

const quoteService = new QuoteService();
export default quoteService;
