---
author: Io_oTI
date: 2024-07-12
draft: false
tag: 'nginx'
title: 'Nginx'
---

# Nginx

## 命令

```bash
# 查找配置文件
nginx -t

# 启动 Nginx
/usr/local/nginx/sbin/nginx

# 重启 Nginx
/usr/local/nginx/sbin/nginx -s reload

# 停止 Nginx
/usr/local/nginx/sbin/nginx -s stop

# 验证 配置文件
/usr/local/nginx/sbin/nginx -t -c [path]
```

## 配置

```bash
#user root;
worker_processes  1;                          # work进程的数量

events {                                      # 事件区块的开始
  worker_connections  1024;                   # 每个work进程支持的最大连接数
}

http {                                        # http区块的开始
  include       mime.types;                   # Nginx支持的媒体类型库文件
  default_type  application/octet-stream;     # 默认的媒体类型
  sendfile      on;                           # 开启高效传输模式

  server {                                    # 第一个server区块的开始
    listen     80;                            # 侦听端口
    server_name  localhost;                   # 提供服务的域名主机名

    access_log 	 /var/log/nginx/host.access.log  main;

    location / {                              # 第一个location区块开始
      root   html;                            # 站点的根目录
      index  index.html index.htm;            # 默认的首页文件
    }

    location /xyz {                           # 二级目录
      alias   html/xyz/;                      # 站点的根目录
      index  index.html index.htm;            # 默认的首页文件
    }

    location /api/ {
      proxy_pass   <http://$>{API_SERVER}/;   # 后端服务代理
    }

    error_page   404 /404.html;
    location = /40x.html {
        root   404.html
    }

    error_page   500 502 503 504  /50x.html;  # 出现对应的http状态码时，使用50x.html回应客户
    location = /50x.html {                    # location区块开始，访问50x.html
      root   html;                            # 指定对应的站点目录
    }
  }
}
```

### 开启 gzip

`gzip` 是一种优秀的压缩算法，我们可以在 HTTP 请求上对一些文本文件，设置 `gzip` 压
缩。

服务端将响应头设置上 `Content-encoding: gzip`，表示当前资源会使用 `gzip` 压缩，提
示客户端解压使用。

当然前提是客户端支持该压缩算法，服务端会通过客户端发送的请求头中的 `Accept-Encoding` 字段来确定是否支持。

```bash
http {
  # 开启 gzip 压缩
  gzip  on;

  # 使用 gzip 压缩的文件类型，此外，text/html 是自带的，不用写上
  gzip_types text/plain text/css application/javascript application/json text/xml application/xml application/xml+rss;

  # 小于 256 字节的不压缩，这是因为压缩是需要时间的，太小的话压缩收益不大
  gzip_min_length 256;

  # 开启静态压缩，压缩的资源会被缓存下来，下次请求时就直接使用缓存
  gzip_static  on;
}
```

## 参考

- [Nginx 使用指南](https://www.notion.so/Nginx-0925a3f551934ddfb4c4d08a7e6fca60?pvs=21)
