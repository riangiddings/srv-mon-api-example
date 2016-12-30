# srv-mon-api-example
api example for mongo-express-nodejs

# Note: MongoDB
You will need a mongodb instance with the database api-db created before the api will work locally.

or...

Point the mongodb endpoint in the host.js file to the endpoint of your own mongodb database connection.
```
// MongoDb
mongoose.connect('mongodb://localhost/api-db');
```
# Setup
- Utilizing `npm` install `nodemon` with the command:
>`npm i -g nodemon`

- Navigate to your local project repository 
>`cd ...`

- Use git to clone the project with the command:
> `git clone https://github.com/riangiddings/srv-mon-api-example.git`

- Use npm to install the required packages with the command:
> `npm install`

- Open a cmd window to the current working directory and start nodemon:
> `nodemon api/host.js`

- Your console should display a success message with the port number the api is hosted on
