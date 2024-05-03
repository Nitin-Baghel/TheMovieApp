# TheMovieApp

# Getting Started
This App showcasing List of popular movies from TheMovieDB where user has to login to see the list of movies where I have used React Native, redux, redux-thunk, react-navigation, localization, pagination.
To run this app create .key.js file at root of folder and paste **TheMovieDB** api auth token.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

Screen 1 : Login Screen
  - On top right dropdown language switcher
      - Handle localization of english and arabic language
  - Bottom container with email and password field and Login button
      - Added filed validation hook and custom apptextfiled for email and password
      - Used Reduxtoolkit and redux persist for storing email and password
      - Once user entered valid email and password he will navigate to screen 2
      - This screen is only visible when user have not entered his email and password earlier
      - Added support to load SVG icons

Screen 2 : Movie list Screen
  - This screen have a grid view of movies list
  - On screen launch api for getting popular list is called with intial page and user prefered language selected on screen 1
  - Added Pagination for load number of pages of popular movies.
  - Added support to load SVG icons
  - API used for this screen is : https://api.themoviedb.org/3/movie/popular?language=en&page={page}&api_key={}

### ScreenShots

<p float="left">
<img height="600" width="300" src = "https://github.com/Nitin-Baghel/TheMovieApp/blob/main/src/assets/screenshots/1.png" />
<img  height="600" width="300"  src = "https://github.com/Nitin-Baghel/TheMovieApp/blob/main/src/assets/screenshots/2.png" />
<img  height="600" width="300"  src = "https://github.com/Nitin-Baghel/TheMovieApp/blob/main/src/assets/screenshots/3.png" />
<img  height="600" width="300"  src = "https://github.com/Nitin-Baghel/TheMovieApp/blob/main/src/assets/screenshots/4.png" />
<img  height="600" width="300"  src = "https://github.com/Nitin-Baghel/TheMovieApp/blob/main/src/assets/screenshots/5.png" />
<img  height="600" width="300"  src = "https://github.com/Nitin-Baghel/TheMovieApp/blob/main/src/assets/screenshots/6.png" />
</p>
