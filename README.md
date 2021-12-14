The code has the following structure:

-Gartner: base directory
 - clicks.json: Json file- input file to process
 - result.json: Json file- output file
 - main.js: Js file 
 - index.js: Js file, it is the entry file for the code 
 - processJson.js: Js file 
 - package-lock.json
 - package.json
 -node_modules
  - {various folders of node modules}

PACKAGE INSTALLATION:

The CODE uses one package JEST for testing the code, to install it
run the following command:

"npm install jest"


EXECUTING THE CODE:

To run this code enter following command on a cmd or terminal:

"npm start"

 - The index.js.js runs when 'npm start' is executed.
 - The index.js calls a function main.func() form file main.js 
 - The main.js operates in following ways:
    - main has func() which reads the input file
    - then, it calls the this._func() to process that data
      - _func() calls processJson.main() form processJson.js file.
    - then, it writes the data recieced and put it in the result.json file

Upon running the code, It will put all the results in the result.json file.


TESTING THE CODE

To test the code run:

"npm run test"

 - The test.js file run when "npm run test" command is executed




    

