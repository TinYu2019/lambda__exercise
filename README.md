# lambda__exercise
Simple lambda function fetching data from MySQL database

## Step to use this project in AWS Lambda
- clone the project
- run `npm ci` to install the dependency
- run `zip -r lambda_exercise.zip ./` to zip all files inside the folder
- go to AWS Lambda, create a function from _Author from scratch_, add the function name, select _Node.js 18.x_ for runtime
- inside the lambda function, click on _Upload from_ and upload the zip `lambda_exercise.zip`
- add the following credentials in _Configurations_ > _Environment variables_
  - DB_HOST
  - DB_USERNAME
  - DB_PASSWORD
  - DB_NAME 
- click on deploy and then test
- should see the data fetched from MySQL database
