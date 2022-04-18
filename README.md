# beverage-vending-machine
APi endpoints for a beverage vending maching using Object Oriented approach.

## How to use

### Without using docker
0. Install Node.js
1. Write `npm install` to install the dependicies
2. Run `npm start`

### Using docker
1. Run `docker build -t bvm_server .`
2. Run `docker run -dp 8080:8080 bvm_server`

## Testing 
This project uses swagger docs. Simply go to http://localhost:8080/api-docs/ to test the api
