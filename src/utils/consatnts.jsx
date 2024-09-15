const YT_API_KEY = import.meta.env.VITE_YT_API_KEY
export const allVideos =  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YT_API_KEY}`
export const searchAPI = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

