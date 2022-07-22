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
    getVideos: function(cate, params){
        const url = category[cate] + '/' + tvType[cate];
        return axiosClient.get(url,params);
    }
}