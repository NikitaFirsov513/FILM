


export default class NowPlayListSlyder {
    mgnLeft = 0;
    mgnTop = 0;
    active = 0;

    constructor(slyderName, colElem, vSliderName) {
        this.slyderName = slyderName;
        this.colElem = colElem;
        this.vSliderName = vSliderName;
    }




    nowPlaySliderSmallTop() {

        if (this.mgnTop <= 0) {
            return false
        }
        this.mgnTop -= 155
        document.querySelector('.now-play__nav-flex-line').style.marginTop = `-${this.mgnTop}px`
        this.checkSliderArrow()


    }

    nowPlaySliderSmallBottom() {

        if (this.mgnTop >= document.querySelector('.now-play__nav-flex-line').offsetHeight - document.querySelector('.now-play__nav').offsetHeight) {
            return false
        }
        this.mgnTop += 155
        document.querySelector('.now-play__nav-flex-line').style.marginTop = `-${this.mgnTop}px`
        this.checkSliderArrow()
    }



    checkSliderArrow() {
        if (this.mgnTop == 0 && !document.querySelector('.now-play__nav-top').classList.contains('now-play__button--none')) {
            document.querySelector('.now-play__nav-top').classList.toggle('now-play__button--none')
        }
        if (this.mgnTop != 0 && document.querySelector('.now-play__nav-top').classList.contains('now-play__button--none')) {
            document.querySelector('.now-play__nav-top').classList.toggle('now-play__button--none')
        }

        if (this.mgnTop >= document.querySelector('.now-play__nav-flex-line').offsetHeight - document.querySelector('.now-play__nav').offsetHeight && !document.querySelector('.now-play__nav-bottom').classList.contains('now-play__button--none')) {
            document.querySelector('.now-play__nav-bottom').classList.toggle('now-play__button--none')
        }

        if (this.mgnTop <= document.querySelector('.now-play__nav-flex-line').offsetHeight - document.querySelector('.now-play__nav').offsetHeight && document.querySelector('.now-play__nav-bottom').classList.contains('now-play__button--none')) {
            document.querySelector('.now-play__nav-bottom').classList.toggle('now-play__button--none')
        }
    }




    slydeLeft() {

        if (this.mgnLeft <= 0) {
            return false
        }

        this.changeMarginLeft(-1)
        this.nowPlaySliderSmallTop()

    }

    slydeRight() {

        if (this.mgnLeft >= 100 * (this.colElem - 1)) {
            return false
        }
        this.changeMarginLeft(1)



        this.nowPlaySliderSmallBottom()
    }

    changeMarginLeft(side) {

        if (side == -1) {
            this.mgnLeft -= 100;
            document.getElementById(this.slyderName).style.marginLeft = '-' + this.mgnLeft + '%'

        }

        if (side == 1) {
            this.mgnLeft += 100;
            document.getElementById(this.slyderName).style.marginLeft = '-' + this.mgnLeft + '%'
        }

        this.changeActiveElemOne(side)
    }


    setActiveElem() {
        document.getElementById(this.vSliderName).children[this.active].classList.toggle('now-play__nav-elem--active')
    }

    changeActiveElemOne(side) {
        document.getElementById(this.vSliderName).children[this.active].classList.toggle('now-play__nav-elem--active')
        document.getElementById(this.vSliderName).children[this.active + side].classList.toggle('now-play__nav-elem--active')
        this.active += side;
    }

    changeActiveElem(elem) {
        let changeMgnLeft = 0
        this.mgnLeft = elem * 100;
        document.getElementById(this.slyderName).style.marginLeft = '-' + this.mgnLeft + '%'
        document.getElementById(this.vSliderName).children[this.active].classList.toggle('now-play__nav-elem--active')
        document.getElementById(this.vSliderName).children[elem].classList.toggle('now-play__nav-elem--active')
        this.active = elem;

    }
}