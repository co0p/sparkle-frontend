# sparkle

 ~many sparks can light up the world~
 
## development

We are in js world so let's use a new package manager: 

    npm install -g yarn

    
Install the dependencies the new yarn / facebook way:

    yarn


Run the webpack server:

    npm start
    

## deployment

We use heroku for serving the files. Add the following remote:

    heroku git:remote -a sparkleio

First build the prod bundle
    
    npm run build:prod
    
Then upload the slug:
    
    heroku static:deploy

