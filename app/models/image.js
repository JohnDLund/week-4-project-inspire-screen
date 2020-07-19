export default class Image {
  constructor(data) {
    this.id = data.id
    this.site = data.site
    this.copywrite = data.copywrite
    this.url = data.url
  }


  get ImageTemplate() {
    let template = /*html*/`
     
     <style>
        body {
            background-image: url('${this.url}');
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