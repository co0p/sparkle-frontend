# sparkle

 ~many sparks can light up the world~

## development

We are in js world so let's download the internet:

    npm install

Run the webpack server:

    npm start


## deployment

We use heroku for serving the files. Add the following remote:

    heroku git:remote -a sparkleio-frontend

First build the prod bundle

    npm run build:prod

Then upload the slug:

    heroku static:deploy
