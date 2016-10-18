# Grunt sample integration step

## Install node.js and npm

If you don’t have node.js (and npm) installed already, do so by going to http://nodejs.org (npm is included by default with a standard node.js installation). Be sure to download the latest stable version.

Once you’ve installed node.js the easiest way to confirm that its working is by going to a terminal or command prompt and simply typing:
* $ node --version

Assuming its working, you should simply get an output of “0.10.24” or whatever version you actually have installed.

## Install the Grunt CLI

One last tool that the project absolutely requires is the Grunt command line tool, which can be very easily installed via npm:
* $ npm install -g grunt-cli
* OR
* $ sudo npm install -g grunt-cli

Note: doing a -g install with npm will install that package globally, meaning it is now installed on your machine and available everywhere. Without -g, the packages are only installed locally to the specific project or repo you are working with (and are stored in a node_modules directory within the project).

## Run the app!

So, assuming that all of the above was successful, you’re now ready to boot up the web app and take it for a spin! First you need to install all of the project’s dependencies (explained in more detail in the next section) and use Grunt.js to initialize the project and launch the server:
* $ npm install
* $ grunt
