export default class Image {
    constructor(data) {
      this.id = data.id
      this.site = data.site
      this.copywrite = data.copywrite
      this.large_url = data.large_url
    }
  
  
    get ImageTemplate() {
      let template = /*html*/`
     
     <style>
        body {
            background-image: url('${this.large_url}');
            background-repeat: no-repeat;
            background-position: center center;
            background-attachment: fixed;
            height: 100%
        }   
    </style>
    
      `
      return template
    }
  }