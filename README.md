The code has the following structure:
Gartner: base directory
 - clicks.json: Json file- input file to process
 - result.json: Json file- output file
 - main.js: Js file that runs the code
 - processJson.js: Js file 
 - package-lock.json
 - package.json
 node_modules
  - {various folders of node modules}

To run this code enter following command on a cmd or terminal:

"npm start"

Upon running the code, It will put all the results in the result.json file.

To test the code run:

"npm run test"

Code Base description:
 - The main.js runs when 'npm start' is executed.
 - The main.js calls a function main() form file processJson.js 
 - The main() operates in following ways:
  - It takes two arguments, input file name and output file name
  - It first opens the click.json file and read the json from it.
  - Then it processs the data and put then in result object
  - Then this data is written in result.json file


