---
title: "Introduction"
metaTitle: "This is the title tag of this page"
metaDescription: "This is the meta description"
---

# This repo is to demonstrate

1. How to use Terraform to deploy infrastructure
2. How to manage state remotely with ```single remote-state managemet``` with S3 & DynamoDB
3. How to make Terraform code reusable using ```workspace``` for multiple environment (e.g. development, QA, production )
4. How to deploy Bastion host to manage multiple EC2 instances
5. How to manage database host via Bastion host with Database client (e.g. DataGrip)
6. How to connect Postman to EC2 instances via SSH tunnel.  
7. Demonstrate ALB with Dockerized application running in EC2 instances.  
8. And more...
9. CICD is not discussed.  However, ```workspace``` approach works very well with CICD pipeline.  Imagine that you can match ```production``` branch in Git to ```production``` workspace in Terraform. 