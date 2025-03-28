docker rm -f -v bestdist-client
docker rmi $(docker images |grep bestdist-client)
sh build.sh
sh run.sh