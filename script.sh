#!/bin/bash
echo -e "starting script"

# script parameters
IMAGE_NAME=eyala/node-web-app
VM_PORT=8080
CONTAINER_PORT=3000

# remove all images
for image in $(docker images | awk '{print $3}')
do
   docker rmi -f $image
done

if [ $1 = "compose" ]; then
    echo "using docker compose"
    docker-compose.exe down
    docker-compose.exe build
    docker-compose.exe up -d
else
    # build the image from Dockerfile
    docker build -t $IMAGE_NAME .

    # run the docker image
    docker run -p $VM_PORT:$CONTAINER_PORT -d $IMAGE_NAME
fi

# show all images in the current machine
# docker images

# extract the container id
CONTAINER_ID=$(docker ps | grep $IMAGE_NAME | awk '{print $1}')

# Print app logs
docker logs $CONTAINER_ID

# get the virtualbox ip
CONTAINER_IP=$(docker-machine ip)

# send a request to the app
for i in {1..5}
do
   curl http://$CONTAINER_IP:$VM_PORT/
   printf '\n'
done

# Print app logs
docker logs $CONTAINER_ID

# if [ $1 = "compose" ]; then
#     echo "closing docker compose"
#     docker-compose.exe down
# else
#     # kill the container
#     docker kill $CONTAINER_ID
# fi

# Get container ID
# docker ps

# start the docker compose
# docker-compose down
# docker-compose up -d

