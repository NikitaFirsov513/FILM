

export default class HorisontalSlyder {


    mgnLeft = 0;


    constructor(slyderName, colElem) {
        this.slyderName = slyderName;
        this.colElem = colElem;
    }
    slydeLeft() {
        if (this.mgnLeft <= 0) {
            return false
        }
        this.mgnLeft -= 300;
        document.getElementById(this.slyderName).style.marginLeft = '-' + this.mgnLeft + 'px'
    }

    slydeRight() {

        if (this.colElem * document.getElementById(this.slyderName).firstChild.offsetWidth - document.querySelector('.horizontal-list__container').offsetWidth <= this.mgnLeft) {
            return false
        }

        this.mgnLeft += 300;
        document.getElementById(this.slyderName).style.marginLeft = '-' + this.mgnLeft + 'px'
    }

} 