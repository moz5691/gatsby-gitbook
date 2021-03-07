---
title: "Multiple Environments"
metaTitle: ""
metaDescription: ""
---

# For multiple environments

The following is basic Terraform commands.  Check Terraform (https://www.terraform.io/) for tutorials and documents.

```zsh
  # to format terraform code
  $ terraform fmt

  # to validate any code syntax error
  $ terraform validate

  # to test against aws if plan can be created.
  $ terraform plan

  # to deploy in AWS
  $ terraform apply

  # to destroy all.
  $ terraform destroy
```

We should be able to deploy the same infrastructure with different configurations for different environments.  I am going to limit the environments in this demo to the following ones.

* <strong>Development</strong>
* <strong>QA</strong>
* <strong>Production</strong>

It is logical to start with ```development``` environment.  The user experience needs to be simple.
That means CLI command must be simple with minimal instructions.

There are several different ways to achieve the same goal.  In this demo, I have chosen ```workspace``` built in Terraform.  

