# board-game-frontend

This is a board game app that allows users to search through games and save, rate, and review their favorites. 

Backend Repo: https://github.com/makbusher/board-game-api

## Installation 

1) Clone the Rails Backend (board-game-api) 
```
git clone https://github.com/makbusher/board-game-api.git
```
2) Set up backend database and server 

   Backend Repo: https://github.com/makbusher/board-game-api 
   
   ReadMe has all the instructions for installation and usage

3) Clone the Frontend repository
```
git clone https://github.com/makbusher/board-game-frontend.git
```
4) cd into the project
```
cd board-game-fontend/
```
5) install dependcies (in terminal)
```
npm install 
```
6) start development server in terminal
```
npm run dev
```

## Usage
1) start frontend server (if you haven't yet)
```
npm run dev
```
2) start backend server
```
rails s 
```
3) Go to http://localhost:5173 to view the project

 Currently, there is no data saved to the backend. To use the app, you must create games that will display on the frontend. Users, reviews, and favorites can all be created on the frontend through axios requests as long as the backend server is running as well.
 
 # What's Next?
 This is an unfinished project and I still have lots of features I would like to add. I want to begin by using Board Game Geek's API to pull more information about board games and display more board games (so you don't have to keep creating them from the backend). I also hope to link playthrough videos for the games. Thanks for reading!
