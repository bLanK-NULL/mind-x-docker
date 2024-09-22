# how to run 

```bash
cd docker
touch .env
vim .env # 写入环境变量, 如下
docker compose up -d
```

## environment
* `.env` , 完善数据库用户以及密码
```
# mysql
DB_USER=
DB_PASSWORD=
# 下面两个的配置固定
DB_HOST=mind-x-db
DB_NAME=mind-x-docker

# web端口
WEB_PORT=3002 
```
