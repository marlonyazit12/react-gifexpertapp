export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=d0FjIIDTFuCjCI81AVHF3kcnX0d0L8ef&q=${ encodeURI(category) }&limit=8`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return { 
            id : img.id,
            title : img.title,
            url : img.images?.downsized_medium.url

        }
    });

    return gifs;

}