# how to run

```bash
cd docker
docker compose up -d
```

## environment

* `.env` , 容器内的配置与宿主机无关

```
# mysql
DB_USER=root
DB_PASSWORD=root
# 下面两个的配置固定
DB_HOST=mind-x-db
DB_NAME=mind-x-docker

# web端口
WEB_PORT=3002 
```

# Issue

如果出现 `ERROR [api internal] load metadata for docker.io/library/node:`

请手动拉取镜像 `docker pull node:20`
