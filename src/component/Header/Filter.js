

export default class Filter{


    changeFilterValue(elem){
        document.getElementById('fiterValue').innerHTML=elem
        this. toggleNotActive()
    } 

    toggleNotActive(){
        //console.log('asd')
        document.querySelector('.header__sort-list').classList.toggle('header__sort-list--not-active');
    }
}