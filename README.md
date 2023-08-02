# Getting Started with Create React App

To run the project you need Docker Desktop or Rancher Desktop, that's recommended that you install WSL too, in case have you on a Windows OS 

## Available Scripts

In the project directory, you can run:

### `docker build -t <image name> .`

This command will create an docker image from the project, based into Dockerfile, located at the root of project.

### `docker run --name <container name> -p 3000:3000 <docker image>`

Runing it, docker will create an container using the image that you describe above 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
