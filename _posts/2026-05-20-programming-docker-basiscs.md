---
title: "Docker - Basics"
date: 2026-05-20 15:00:00 +0900
categories: [Programming, Docker]
tags: [docker]
math: true
toc: true
---

{: .prompt-info }
> The following notes assume you are using an M1 Mac system.

## Install the Docker image.
First, we must see if there's an Ubuntu image in the Docker container:

``` bash
$ docker search ubuntu
```

Then we download the Ubuntu image:

``` bash
$ docker pull ubuntu:22.04 --platform=linux/amd64
```

`:22.04` is the version of the Ubuntu image, and I specified the platform so that it won't automatically install the `arm64` platform (the default platform is `arm64`).

## Create a shared folder.
In a Mac OS environment, we need `docker volume` that functions as the shared folder in order to share files. We create a folder in the local machine, and copy the folder name by using:

``` bash
$ pwd
```

## Create a Docker container and a shared folder.
We make a container using the following command:

``` bash
$ docker run -it --name=<docker name> \
-v <local directory>:<container directory> \
-v ~/.Xauthority:/root/.Xauthority \
-e DISPLAY=host.docker.internal:0 \
ubuntu:22.04 /bin/bash
```

Paste the folder name printed from `pwd` to `<local directory>`. `<container directory>` must be given an easy-to-remember name. It is because a folder is automatically made when the Docker container is created. To check if it was created correctly, enter the following command to verify if it is registered in the list:

``` bash
$ docker container ls
```

## Remove Docker image.
If you happen to install a Docker image incorrectly or have unnecessary images, you need to clean them up. To delete an image, enter the following command:

``` bash
$ docker image rm <image name>
```

## Remove the Docker container.
To delete a Docker container, you enter the following command:

``` bash
$ docker rm <container name or id>
```

## Set root password.
The initial root password in a Docker container is set by:

``` bash
$ passwd
```

## Create a new user.
When you run Docker, it basically connects you to the root account. To work stably, it is recommended to create a personal user account. Create a new user by entering the following command:

``` bash
$ adduser <username>
```

## Execute the container.
To work with this user, enter the following command:

``` bash
$ docker exec -it -u ‘<username>’ <docker name> /bin/bash
```

If you want to directly get into the home directory:

``` bash
$ docker exec -it -u ‘<username>’ <docker name> bash -c "cd ~ && exec bash"
```

where `exec` is a command for connecting to the container that is already running. If the container is stopped and we want to restart this container, enter the command below:

``` bash
$ docker start (unpaused) <docker name>
```

If there is an access error, modify the authorization of the corresponding group to `666`.

``` bash
$ chmod 666 /var/run/docker.sock
```

## Save the Docker container as .tar or an image.
We can save our own container, not pushing to the registry like Docker Hub. A Docker container can be saved as a tar file or an image with the command below:

``` bash
$ docker export <container ID or name> > <file name>.tar
```

In order to transform this file into a Docker image:

``` bash
$ docker import <file name> <image name:tag name>
```

Docker has commands such as `export`, `import`, `save,` and `load`. `export` saves the whole root file system, while `save` saves the layer structure on top of that.

To save a Docker container as an image:

``` bash
$ docker stop <container name>
$ docker commit -a <author name> <container ID> <image name:tag name>
```