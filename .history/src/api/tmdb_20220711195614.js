import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdbApi = { 
    getMoviesList: function(type, params){
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url,params);
    },
    getTvList: function(type, params){
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url,params);
    },
    getVideos: function(cate, id){
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url,{params:{}});
    },
    search: function(cate, params){
        const url = 'search/' + category[cate];
        return axiosClient.get(url,params);
    }
}