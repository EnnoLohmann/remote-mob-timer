resource "aws_dynamodb_table" "mob-dynamodb-table" {
  name         = "MobTable"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "SessionID"
  range_key    = "OwnerID"

  attribute {
    name = "SessionID"
    type = "S"
  }

  attribute {
    name = "OwnerID"
    type = "S"
  }
}


data "archive_file" "addMobFunctionZip" {
  type        = "zip"
  source_file = "${path.module}/../functions/addMob/addMob"
  output_path = "${path.module}/addMob.zip"
}

resource "aws_iam_role" "iam_for_lambda" {
  name = "iam_for_lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "lambda_policy_for_mobTable" {
  name = "lambda_policy"
  role = aws_iam_role.iam_for_lambda.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "dynamodb:*",
        ]
        Effect   = "Allow"
        Resource = "${aws_dynamodb_table.mob-dynamodb-table.arn}"
      },
    ]
  })
}



resource "aws_lambda_function" "addMobFunction" {
  filename      = "${path.module}/addMob.zip"
  function_name = "addMob"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "addMob"

  source_code_hash = filebase64sha256("${path.module}/addMob.zip")

  runtime = "go1.x"

  depends_on = [
    data.archive_file.addMobFunctionZip
  ]
}
