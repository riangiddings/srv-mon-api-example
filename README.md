# srv-mon-api-example
api example for mongo-express-nodejs

# Dependencies
- nodejs
- npm
- mongodb
- mongoose
- express
- node-restful
- body-parser
- nodemon

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

- Open a cmd console to the srv-mon-api-example directory  and start nodemon:
> `nodemon api/host.js`

- Your cmd console should display a success message with the port number the api is hosted on
> `API is running on port 3000.`

- You can now navigate to http://localhost:3000/api/servers to access the server collection backed by mongodb.
  It is enabled for RESTful http interface with standard GET,PUT,POST,DELETE available through a client like Postman.
  
- It was useful to utilize the serverSchema to template the POST request during testing. It can be found in `api/models/server.js`

