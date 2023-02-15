# board-game-frontend

This is a board game app that allows users to search through games and save, rate, and review their favorites. 

Backend Repo: https://github.com/makbusher/board-game-api

## Installaion 

1) Clone the Rails Backend (board-game-api) 
```
git clone https://github.com/makbusher/board-game-api.git
```
2) cd into the project
```
cd board-game-api/
```
3) rails server in terminal 
```
rails s
```
4) Clone the Frontend repository
```
git clone https://github.com/makbusher/board-game-frontend.git
```
5) cd into the project
```
cd board-game-fontend/
```
6) install dependcies (in terminal)
```
npm install 
```
7) start development server in terminal
```
npm run dev
```

## Usage

Get the apps running by starting both the backend (step 3) and frontend servers (step 7). This should allow you to see the website (http://localhost:5173), but no games will be displayed. Currently, there is no data saved to the backend. To use the app, you must create games that will display on the frontend. Users, reviews, and favorites can all be created on the frontend through axios requests as long as the backend server is running as well.
