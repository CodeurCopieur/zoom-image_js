(()=> {

  class vanillaZoom {
    constructor(element) {
      this.container = element;
      this.firstSmallImage = this.container.querySelector('.small-preview');
      this.zoomedImage = this.container.querySelector('.zoomed-image');
      this.init();
      this.changePhoto();
      this.mouseEnter();
    }

    
    init() {
      if(!this.container){
        console.log("pas d'\élèment");
      }

      if(!this.zoomedImage){
        console.log("pas de container: zoomed-image");
      }

      if(!this.firstSmallImage){
        console.log("pas de d'image: small-preview");
      }else {
        this.zoomedImage.style.backgroundImage = 'url('+ this.firstSmallImage.src + ')';
      }
    }

    changePhoto() {
      this.container.addEventListener('click', e => {
        const elem = e.target;
        if(elem.classList.contains('small-preview')) {
          this.zoomedImage.style.backgroundImage = 'url(' + elem.src + ')';
        }
      })
    }

    mouseEnter() {
      this.zoomedImage.addEventListener('mouseenter', ()=> {
        this.zoomedImage.style.backgroundSize = '250%';
      })
    }
  }


  let zoom = document.querySelectorAll('.vanilla-zoom');

  zoom.forEach( item => {
    new vanillaZoom(item)
  })

})()