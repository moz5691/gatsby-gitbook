---
title: "EC2 configuration using user-data"
metaTitle: ""
metaDescription: ""
---

## EC2 configuration using user-data

I have added a very simple ```Flask``` app to test EC2 instance.  The goal is to test ALB (Application Load Balancer) should work as intended.  

The source code is located in ```flask-app/src```.   I have used public DockerHub registry and pushed the dockerized image to https://hub.docker.com.  There is no CICD pipeline for this demo for simplicity.  


If you need to update flask app, change it to your own and push to DockerHub registry and change the Docker image name in ```deploy/templates/ec2/user-data.sh``` file


```sh
$ docker login --username=<username> --password=<password>
$ docker build -t $DOCKER_ACC/$DOCKER_REPO:$IMG_TAG .
$ docker push $DOCKER_ACC/$DOCKER_REPO:$IMG_TAG
```

The following is in ```deploy/templates/ec2/user-data.sh```

```sh
#!/bin/bash

  sudo yum update -y 
  sudo amazon-linux-extras install -y docker 
  sudo systemctl enable docker.service 
  sudo systemctl start docker.service 
  sudo usermode -aG docker ec2-user 
  # to find private IP of the instance
  output=$(curl http://169.254.169.254/latest/meta-data/local-ipv4) 
  sudo docker run -e API=$output -p 5000:5000 moz5691/python-hello-world 

```