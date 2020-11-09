---
id: doc1
title: QueryPie Install Guide
sidebar_label: QueryPie Brief Architecture
---
# 1. QueryPie

## 1.1 Brief Architecture
* 단순한 구조를 지향하고 있습니다. 

## 1.2 Components
* 설명

| 컴포넌트 명 | 설명 |
| :---: | :---: |
|   QueryPie Api| Rest Api 서버  & Admin|
|:   QueryPie App :| QueryPie의 Web Client   |
| ^^ | ^^ 자동 완성  |
| ^^ | ^^ 쿼리 수행 |
|   QueryPie DB| QueryPie 가 metadata들을 관리하는 DB  |

# 2. QueryPie DB 설치

## 2.1 개요
* QueryPie 에서는 관리할 Database 들의 metadata를 저장하기 위하여 MySQL 서버를 필요로 합니다.
* mysql 5.7을 권장합니다.
* 설치 및 업그레이드시 Table Schema 들을 적용하기 위하여 DDL, DML권한이 필요합니다.

## 2.2 User 및 DB 생성 예제 
```mysql
CREATE USER 'querypie'@'%' IDENTIFIED BY 'password';

CREATE database querypie CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

GRANT ALL privileges ON querypie.* TO querypie@'%';
```

# 3. QueryPie Docker Registry

## 3.1 개요
 * QueryPie의 컴포넌트들은 Private Docker Registry에서 관리합니다.
 * 인증 정보는 설치 가이드와 함께 전달됩니다.
 
```text
url : dockerpie.querypie.com
```

# 4. QueryPie 배포 - EKS

* QueryPie의 경우 AWS Load Balancer Controller 사용을 권장하고 있습니다.

```html
https://github.com/aws/eks-charts/tree/master/stable/aws-load-balancer-controller
```

* EKS에는 Helm을 이용하여 배포를 합니다.

* helm 저장소를 추가 합니다.

```shell script
helm repo add chequer https://chequer-io.github.io/querypie-deployment/helm-chart
```

* helm 저장소를 update 합니다.

```shell script
helm repo update
```

* 각 환경에 맞는 values.yaml 를 작성하여 QueryPie를 install 합니다.

```yaml
apiImage:
  repository: dockerpie.querypie.com/chequer.io/querypie-api
  tag: latest
  pullPolicy: Always
  replicas: 2

appImage:
  repository: dockerpie.querypie.com/chequer.io/querypie-app
  tag: latest
  pullPolicy: Always
  replicas: 2

querypiedb:
  DB_PORT: 3306
  DB_HOST: 'CHANGE_ME'
  DB_DATABASE: 'querypie'
  DB_MAX_CONNECTION_SIZE: 20
  credentials:
    DB_USERNAME: 'BASE64_ENCODED_CHANGE_ME'
    DB_PASSWORD: 'BASE64_ENCODED_CHANGE_ME'

querypie_redis:
  REDIS_HOST: 'CHANGE_ME'
  REDIS_PORT: 6379
  REDIS_PASSWORD: 'CHANGE_ME'
  REDIS_EVENTKEY: 'CHANGE_ME'
  REDIS_DB: 0

imageCredentials:
  registry: 'dockerpie.querypie.com'
  username: 'CHANGE_ME'
  password: 'CHANGE_ME'

appIngress:
  tls: true
  hostname: 'CHANGE_ME'
  secretName: 'CHANGE_ME'
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP":80}, {"HTTPS":443}]'
    alb.ingress.kubernetes.io/actions.ssl-redirect: '{"Type": "redirect", "RedirectConfig": { "Protocol": "HTTPS", "Port": "443", "StatusCode": "HTTP_301"}}'
  rules:
    http:
      paths:
        - path: /
          backend:
            serviceName: "querypie-app-service"
            servicePort: 80

apiIngress:
  tls: true
  hostname: 'CHANGE_ME'
  secretName: 'CHANGE_ME'
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP":80}, {"HTTPS":443}]'
    alb.ingress.kubernetes.io/actions.ssl-redirect: '{"Type": "redirect", "RedirectConfig": { "Protocol": "HTTPS", "Port": "443", "StatusCode": "HTTP_301"}}'
  rules:
    http:
      paths:
        - path: /
          backend:
            serviceName: "querypie-api-service"
            servicePort: 80
```
