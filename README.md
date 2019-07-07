# Rock, Paper or Scissors Game.
A Rock, Paper or Scissors developed with Angular and NestJS.

## Prerequisites
- NodeJS >= 10.15.3
- Docker Compose >= 1.23.2

## Built With
- Angular - 8.0.3
- Angular Material - 8.0.2
- NestJS - 6.0.0


## Production Like

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