# Rock, Paper or Scissors Game.
A Rock, Paper or Scissors developed with Angular and NestJS.

To start playing follow the instructions of [Production-Like](#production-like) or [Development](#development) and
then, when the process are completed, open a web browser at [localhost:3000](localhost:3000) and start playing. You must choose the your names and then select your moves.

## Prerequisites
- NodeJS >= 10.15.3
- Docker Compose >= 1.23.2

## Built With
- Angular - 8.0.3
- Angular Material - 8.0.2
- NestJS - 6.0.0
- Postgres
- Redis


## Production-Like

### Frontend
To install and start the frontend run the following instructions in a new terminal at repository folder.
```bash
# Go to frontend folder
cd frontend

# Install dependencies
npm ci

# Run start script
npm run build -- --prod --outputPath=dist
```

The same but in one line
```bash
cd frontend && npm ci && npm run build -- --prod --outputPath=dist
```

### Backend

To install and start the backend run the following instructions in a new terminal at repository folder.
```bash
# Run database and cache container
docker-compose up -d

# Got to backend folder
cd backend

# Install dependencies
npm ci

# Run start development script
npm run start:prod
```

The same but in one line
```bash
docker-compose up -d && cd backend && npm ci && npm run start:prod
```
## Development

### Frontend
To install and start the frontend run the following instructions in a new terminal at repository folder.
```bash
# Go to frontend folder
cd frontend

# Install dependencies
npm install

# Run start script
npm run start
```

### Backend

To install and start the backend run the following instructions in a new terminal at repository folder.
```bash
# Run database and cache container
docker-compose up -d

# Got to backend folder
cd backend

# Install dependencies
npm install

# Run start development script
npm run start:dev
```

## Check Database

The result of each game is stored on a database. The `docker-compose.yml` file create a postgres database and a pgAdmin page you can visit to view the database values. You have to go to [localhost:5050](localhost:5050) and enter email `pgadmin4@pgadmin.org` and password `admin`. Then create a connection to `postgres_container` (postgres container's name and host name on docker) with the username `postgres` and password `changeme`.

There must be a database named `rps_game_db`. On the table `game` you can check the winner of all games.
