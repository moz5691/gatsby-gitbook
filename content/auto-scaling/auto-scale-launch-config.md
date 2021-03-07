---
title: "Auto Scaling Launch Config"
metaTitle: ""
metaDescription: ""
---

# Auto scaling launch configuraton

Launch configuration is a template contains all instance setting to apply to each newly launched EC2 instances by Auto Sacling Group.  

Refer https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/launch_configuration



```sh
resource "aws_launch_configuration" "web" {
  name_prefix   = "${local.prefix}-"
  image_id      = data.aws_ami.amazon_linux.id
  instance_type = local.workspace["instance_type"]
  key_name      = "terraform-asg-demo"

  security_groups             = [aws_security_group.allow_http.id]
  associate_public_ip_address = true

  user_data = file("./templates/ec2/user-data.sh")

  lifecycle {
    create_before_destroy = true
  }
}
```


