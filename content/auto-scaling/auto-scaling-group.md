---
title: "Auto Scaling Group"
metaTitle: ""
metaDescription: ""
---

# Auto Scaling Group


The following Auto Scaling Group configuration sets :

* Minimum two instances to serve the traffic.
* Maxmum four instances to serve the traffic.
* Auto Scaling Group will be launched with 2 instances and put each of them in separate Availability Zones in different Subnets.
* Auto Scaling Group will get information about instance availability from the ELB.
* Make sure that Auto Sacling Group itself is just static configuration.  There is no rule when to add or remove instances.  
* We’re set up collection for some Cloud Watch metrics to monitor our Auto Scaling Group state. (Covered in Auto Scaling Policy section)


```sh
resource "aws_autoscaling_group" "web" {
  name                      = "${local.prefix}-web-autoscaling"
  depends_on                = [aws_launch_configuration.web]
  max_size                  = 4
  min_size                  = 2
  health_check_grace_period = 300
  health_check_type         = "ELB"
  desired_capacity          = 2
  force_delete              = true
  launch_configuration      = aws_launch_configuration.web.id
  vpc_zone_identifier       = [aws_subnet.public_a.id, aws_subnet.public_b.id]
  target_group_arns         = [aws_lb_target_group.api.arn]

  enabled_metrics = [
    "GroupMinSize",
    "GroupMaxSize",
    "GroupDesiredCapacity",
    "GroupInServiceInstances",
    "GroupTotalInstances"
  ]
  metrics_granularity = "1Minute"

  # Required to redeploy without an outage.
  lifecycle {
    create_before_destroy = true
  }
}
```