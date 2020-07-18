export default class Quote {
    constructor(data) {
        this.body = data.body
        this.author = data.author
    }

    get QuoteTemplate() {
        return  /*html*/`
        
        <div class="col-md-6 col-sm-12 quote text-white"><span class="quote-text">'${this.body}'</span>
            <p><br><i>-${this.author}</i></p>
        </div>

        `
    }
}