const apiConfig ={
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey:'4d0d7854d4f5ee2c174ebf8588cf594d',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig