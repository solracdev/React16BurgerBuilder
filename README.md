This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Base React proyect with Docker

In the project directory, you can run:

### `docker-compose up -d --build`

Will create a Container with all the depencendies needed.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. ( You can change the export ports in the docker-composer.yaml )

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Build docker image

If you prefer build and image and run the container you can execute:

### `docker build -t {your image name} ./docker/.`

then you can run your container with this command:

 `docker run -it -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true --rm { your image name }`
  
with that you'll have an new instance running with hot-reload working ( apply code changes without reload container )

That's it, happy code.
