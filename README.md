# The Typist

### A game by Emily, Armand, Harry and Jessie.

We did the thing. Readme to follow soon.

https://the-typist-game.herokuapp.com/

### Local installation instructions

1. Clone this repo, and navigate to it. Open the folder in your code editor.

2. `npm install` to install the dependencies

3. Create a local postgres database on your system (you will need postgres installed):

3a) Run:
```
$ psql
```
3b) Create database:
```
CREATE DATABASE leaderboard;
```
3c) Create user**:
```
CREATE USER yourName WITH SUPERUSER PASSWORD yourPassword;
```
(** or use an existing role and skip this step)

3d)
```
ALTER DATABASE leaderboard OWNER TO yourName;
```
3e)
Create a `config.env` file in the root of the repo and add the following code (replacing words in square brackets):
```
DB_URL = postgres://[yourName]:[yourPassword]@localhost:5432/leaderboard
```
3f) 
Back in the command line, connect to the database:
```
\c leaderboard
```
3g) 
Initialise the database using our `build.sql` file in the database folder. Right click on the file in your code editor and 'copy path' then:
```
\i [the copied file path]
```
This should set up the database! To run locally, disconnect from the database, ensure you are in the repo directory and run:

```
npm run dev
```

Still not working? Getting a permissions error? You may need to grant your user further privileges on the database. 
```
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA leaderboard TO yourName;
```
