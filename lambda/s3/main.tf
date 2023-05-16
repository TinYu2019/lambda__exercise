terraform {
  backend "s3" {
    bucket         = "lambda-function-store-techops"
    key            = "global/s3/terraform.tfstate"
    region         = "ap-southeast-1"

    dynamodb_table = "techsecops-locks"
    encrypt        = true
  }
}

provider "aws" {
  region = "ap-southeast-1"
}

module "s3" {
  source = "../../modules/services/s3"
}




