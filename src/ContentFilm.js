import React from "react";


class ContentFilm {

    static apiKey = "bd3f863a5ca1df98f96b31262111f46a"
    nowPlayList = []
    load = false
    version = 1
    constructor() {

    }


    static async getSearch(sort, query, page) {

        let resolve = await fetch('https://api.themoviedb.org/3/search/' + sort + '?api_key=bd3f863a5ca1df98f96b31262111f46a&language=ru-RU&page=' + page + '&query=' + query + '&include_adult=false')
            .then(res => res.json());

        let genres = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=bd3f863a5ca1df98f96b31262111f46a&language=ru-RU')
            .then(res => res.json());
        for (let i = 0; i <= resolve['results'].length - 1; i++) {
            //console.log(resolve['results'][i])
            resolve['results'][i]['cast'] = await ContentFilm.getCast(resolve['results'][i]['id'], sort);
            resolve['results'][i]['genres'] = await ContentFilm.getGanresNameByIdArray(resolve['results'][i]['genre_ids'], sort)

        }

        console.log(resolve['results'][0])
        return [resolve['results'], resolve['total_pages']]


    }




    static async getSearchPerson(sort, query, page) {
        let resolve = await fetch('https://api.themoviedb.org/3/search/' + sort + '?api_key=bd3f863a5ca1df98f96b31262111f46a&language=ru-RU&page=' + page + '&query=' + query + '&include_adult=false')
            .then(res => res.json());
        console.log(resolve['results'])
        return [resolve['results'], resolve['total_pages']]

    }



    static async getGanresNameByIdArray(genres) {

        let genresAll = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=bd3f863a5ca1df98f96b31262111f46a&language=ru-RU')
            .then(res => res.json());
        let resGenre = [];

        for (let i = 0; i <= genres.length - 1; i++) {

            for (let j = 0; j < genresAll['genres'].length; j++) {
                if (genres[i] == genresAll['genres'][j]['id']) {
                    resGenre[i] = genresAll['genres'][j]['name']
                    continue
                }
            }
        }
        return resGenre
    }
    static async getNowPlay() {
        let resolve = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=bd3f863a5ca1df98f96b31262111f46a&language=ru-RU&page=1&region=RU')
            .then(res => res.json());

        let res = await ContentFilm.setNowPlayListVideo(resolve['results'])
        return res


    }

    static async getListAll(filter, type, page) {
        let resolve = await fetch('https://api.themoviedb.org/3/' + type + '/' + filter + '?api_key=bd3f863a5ca1df98f96b31262111f46a&language=ru-RU&page=' + page + '&region=RU')
            .then(res => res.json());
        return [resolve['results'], resolve['total_pages']]

    }

    static async getTopRate() {
        let resolve = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=bd3f863a5ca1df98f96b31262111f46a&language=ru-RU&page=1&region=RU')
            .then(res => res.json());
        //console.log(resolve)
        return resolve['results']
    }
    static async getPopularMovie() {
        let resolve = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=bd3f863a5ca1df98f96b31262111f46a&language=ru-RU&page=1&region=RU')
            .then(res => res.json());
        //console.log(resolve)
        return resolve['results']
    }
    static async getPopularTv() {
        let resolve = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=bd3f863a5ca1df98f96b31262111f46a&language=ru-RU&page=1&region=RU')
            .then(res => res.json());
        //console.log(resolve)
        return resolve['results']
    }
    static async getTopRateTv() {
        let resolve = await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=bd3f863a5ca1df98f96b31262111f46a&language=ru-RU&page=1&region=RU')
            .then(res => res.json());
        //console.log(resolve)
        return resolve['results']
    }

    static async getTopRatePage(page) {
        let resolve = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=bd3f863a5ca1df98f96b31262111f46a&language=ru-RU&page=' + page + '&region=RU')
            .then(res => res.json());

        for (let i = 0; i <= resolve['results'].length - 1; i++) {
            //console.log(resolve['results'][i])
            resolve['results'][i]['cast'] = await ContentFilm.getCast(resolve['results'][i]['id']);
        }

        return [resolve['results'], resolve['total_pages']]
    }


    static async getTvDetails(id) {
        let resolve = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=bd3f863a5ca1df98f96b31262111f46a&language=ru-RU`)
            .then(res => res.json());
        resolve['cast'] = await ContentFilm.getCast(id, 'tv');
        resolve['providers'] = await ContentFilm.getProviders(id, 'tv');
        resolve['video'] = await ContentFilm.getVideo(id, 'tv');
        resolve['images'] = await ContentFilm.getImage(id, 'tv');
        resolve['recommendation'] = await ContentFilm.getRecommendations(id, 'tv');

        return resolve;
    }

    static async getDetails(id) {
        let resolve = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bd3f863a5ca1df98f96b31262111f46a&language=ru-RU`)
            .then(res => res.json());
        resolve['cast'] = await ContentFilm.getCast(id, 'movie');
        resolve['providers'] = await ContentFilm.getProviders(id, 'movie');
        resolve['video'] = await ContentFilm.getVideo(id, 'movie');
        resolve['images'] = await ContentFilm.getImage(id, 'movie');
        resolve['recommendation'] = await ContentFilm.getRecommendations(id, 'movie');

        return resolve;
    }

    static async getDetailsPerson(id) {
        let resolve = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=bd3f863a5ca1df98f96b31262111f46a&language=ru-RU`)
            .then(res => res.json());
        resolve['images'] = await ContentFilm.getImage(id, 'person');
        resolve['popular'] = await ContentFilm.getPopular('movie', 1);
        return resolve
    }
    static async getPopular(type, page) {

        let rec = await fetch(`https://api.themoviedb.org/3/${type}/popular?api_key=bd3f863a5ca1df98f96b31262111f46a&language=ru-RU&page=${page}`)
            .then(res => res.json());
        return rec['results']
    }



    static async getCast(id, type) {
        let cast = await fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=bd3f863a5ca1df98f96b31262111f46a&language=ru-RU`)
            .then(res => res.json());

        return cast['cast']
    }
    static async getVideo(id, type) {
        let video = await fetch(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=bd3f863a5ca1df98f96b31262111f46a&language=en-US`)
            .then(res => res.json());

        //console.log(video)

        if (video['results'] == undefined) {
            return '#'
        }
        return video['results'][0]['key']


    }
    static async getImage(id, type) {
        let image = await fetch(`https://api.themoviedb.org/3/${type}/${id}/images?api_key=bd3f863a5ca1df98f96b31262111f46a`)
            .then(res => res.json());

        if (type == 'person') {
            return image['profiles']

        }
        return image['backdrops']


    }
    static async getProviders(id, type) {
        let providers = await fetch(`https://api.themoviedb.org/3/${type}/${id}/watch/providers?api_key=bd3f863a5ca1df98f96b31262111f46a`)
            .then(res => res.json());

        if (providers['results']['RU'] == undefined) {
            return []
        }
        return providers['results']['RU']['flatrate']
    }
    static async getRecommendations(id, type) {

        let rec = await fetch(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=bd3f863a5ca1df98f96b31262111f46a&language=ru-RU&page=1`)
            .then(res => res.json());
        return rec['results']
    }

    static async setNowPlayListVideo(nowPlayList) {
        for (let i = 0; i <= nowPlayList.length - 1; i++) {
            await fetch('https://api.themoviedb.org/3/movie/' + nowPlayList[i]['id'] + '/videos?api_key=bd3f863a5ca1df98f96b31262111f46a&language=ru-RU')
                .then(res => res.json())
                .then((res) => {
                    nowPlayList[i]['video'] = res['results'][0]['key'];
                }).catch(() => { nowPlayList[i]['video'] = null });
        }
        return nowPlayList;
    }
}

export default ContentFilm;