
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"

  backend "s3" {
    bucket = "collab.codes.terraform.state"
    key    = "state.tf"
    region = "eu-central-1"
  }
}

provider "aws" {
  profile = "default"
  region  = "eu-central-1"
}


resource "aws_s3_bucket" "state_bucket" {
  bucket = "collab.codes.terraform.state"
  acl    = "private"
}

module "mob" {
  source = "./mob"
}
