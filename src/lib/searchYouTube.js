var searchYouTube = (options, callback) => {
  var options = {
    key: options.key,
    q: options.query,
    maxResults: options.max,
    part: 'snippet',
    videoEmbeddable: 'true',
    type: 'video'
  };
  $.get('https://www.googleapis.com/youtube/v3/search', options, ((page) => {
    callback(page.items);
  }));
};

export default searchYouTube;
