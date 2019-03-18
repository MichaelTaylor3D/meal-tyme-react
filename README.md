## Bottle Rocket Test

This project was built in React using Mobx state management.

Open [http://staging.bottle-rocket.tsaas.wod.by/](http://staging.bottle-rocket.tsaas.wod.by/) to view the staging site on your device.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## To Deploy to Staging

run copy docker-compose.yml to your staging env and run `$ docker-compose up`. This will download the app image from dockerhub and bind it to port 80.