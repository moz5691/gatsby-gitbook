---
title: "Bastion host with SSH jump"
metaTitle: ""
metaDescription: ""
---

# Bastion host with SSH Config and SSH jump

This section is to show how to make ```ssh``` to different EC instances via Bastion easily with SSH config and SSH jump.   

  The ```SSH config file``` is a great resource for storing all your configuration for the remote machines you want to connect to. It is located in your home directory here: ```~/.ssh/config``` or you may need to create one. 

  After you create Terraform Resources, you will find the private and public IPs of EC2 instances.  Bastion is the only one provides public IP while all other EC2 instances in private subnet will not provide public IPs. 

  We will jump to private EC2 instances via Bastion host by using SSH jump.  

```sh
  # outputs from Terraform
  Outputs:
  bastion_host-ip = "54.91.120.145"
  ec2-a-private = "10.2.10.129"
  ec2-b-private = "10.2.11.226"
```

  You can plug these IPs in ```.ssh/config``` as below
                   
  ```sh
 Host <bastion-host>
  HostName <bastion-host ip>
  IdentityFile <location of pem key>
  User <user-root>
  ```

  Then, run ```ssh``` jump to private intance throuhg ```bastion-host```

  ```sh
  $ ssh -J <bastion-host>  <user-root>@<ec-2 private instance ip>
  ```

Here is my example of ~/.ssh/config file.

```sh
Host bastion-instance
  HostName 54.91.120.145
  IdentityFile ~/.ssh/terraform-demo-key.pem
  User ec2-user
```

You can ```ssh``` to any instances.

```sh
$ ssh bastion-instance
$ ssh bastion-instance ec2-user@10.2.10.129
$ ssh bastion-instance ec2-user@10.2.11.226
```
