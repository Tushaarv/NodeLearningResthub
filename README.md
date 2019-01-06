# NodeLearningResthub

## Description
Node Learning With NodeJs, ExpressJs And MongoDb Using Medium Tutorial 


## Source 
[How To Build Simple RESTful API With NodeJs, ExpressJs And MongoDb](https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d)

## Notes

### Version Checks
Node : node -v
NPM : nam-v
Mongo : mongo -version

### Version Updates
Node : brew upgrade node
NPM : sudo npm install -g npm update
Mongo : brew upgrade mongodb

### Installations
Express : npm install express --save
Nodemon: npm install -g nodemon // to restart automatically
Mongoose : mongoose npm install mongoose --save
Body-parser: npm install body-parser --save

### Command Usage
Running Basic Version of API : node index
Start MongoDB : mongod --dbpath /Volumes/Storage/MongoDBs

### Error Handling
- Error : Mongodb Shutting down with code 48
    - Reason : Port is being used
    - Solution : Run the common = npx kill-port 27017
