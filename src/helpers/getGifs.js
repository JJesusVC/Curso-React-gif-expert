export const getGifs = async (categor) => {

    const apikey = 'qkyqG7YBrz75iP9oqByUv6ZZHMXQONj3';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${categor}&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    //console.log(gifs);
    return gifs;
  };
