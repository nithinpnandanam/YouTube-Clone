<h1 align="center">YouTube Clone</h1>
<p align="center">This is a clone of YouTube App with necessary features</p>

## Video 
- [Vide Demo in Youtube](https://developers.google.com/youtube/v3/getting-started)
  
## Setup
```
# install dependencies
npm install

# run project
npm run dev

# run build
npm run build
```
## Feature List
- Search bar with recommendations and debouncing functionality for performance optimisaztion
- Video listing page with channel name and watch count
- Video viewing page
- Nested comment section implemented with recursion
- Shimmer UI for better User Experiance
- Long polling for live chat functionality

> [!IMPORTANT]
> - For the project to run we need **personalised youtube api keys** so that data from youtube can be accessed
> - [Create personalised youtube key](https://developers.google.com/youtube/v3/getting-started)
> - Create an anv file in the root folder and add the **personalised api key** as shown below
> - ```
>   VITE_YT_API_KEY= " Your personalised youtube api key "
>   ```

## Contributing and Support

Feel free to open a pull request if you can help in improving this project.