(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),i=(r(0),r(93)),c={id:"doc1",title:"QueryPie Install Guide",sidebar_label:"QueryPie Brief Architecture",slug:"/"},l={unversionedId:"doc1",id:"doc1",isDocsHomePage:!1,title:"QueryPie Install Guide",description:"1. QueryPie",source:"@site/docs/doc1.md",slug:"/",permalink:"/querypie-docs/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc1.md",version:"current",sidebar_label:"QueryPie Brief Architecture",sidebar:"someSidebar"},b=[{value:"1.1 Brief Architecture",id:"11-brief-architecture",children:[]},{value:"1.2 Components",id:"12-components",children:[]},{value:"2.1 \uac1c\uc694",id:"21-\uac1c\uc694",children:[]},{value:"2.2 User \ubc0f DB \uc0dd\uc131 \uc608\uc81c",id:"22-user-\ubc0f-db-\uc0dd\uc131-\uc608\uc81c",children:[]},{value:"3.1 \uac1c\uc694",id:"31-\uac1c\uc694",children:[]},{value:"4.1 \uac1c\uc694",id:"41-\uac1c\uc694",children:[]},{value:"4.2 Registry \uc815\ubcf4",id:"42-registry-\uc815\ubcf4",children:[]},{value:"5.1 \uac1c\uc694",id:"51-\uac1c\uc694",children:[]},{value:"5.2 Public Zone \uc5d0\uc11c\uc758 Deploy \uad6c\uc131\ub3c4 \uc608\uc81c",id:"52-public-zone-\uc5d0\uc11c\uc758-deploy-\uad6c\uc131\ub3c4-\uc608\uc81c",children:[]},{value:"5.3 Privacy Zone \uc5d0\uc11c\uc758 Deploy \uad6c\uc131\ub3c4 \uc608\uc81c",id:"53-privacy-zone-\uc5d0\uc11c\uc758-deploy-\uad6c\uc131\ub3c4-\uc608\uc81c",children:[]},{value:"6.1 Prerequisites",id:"61-prerequisites",children:[]},{value:"6.2 helm\uc744 \ud1b5\ud55c Install",id:"62-helm\uc744-\ud1b5\ud55c-install",children:[]}],s={rightToc:b};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"1-querypie"},"1. QueryPie"),Object(i.b)("h2",{id:"11-brief-architecture"},"1.1 Brief Architecture"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\ub2e8\uc21c\ud55c \uad6c\uc870\ub97c \uc9c0\ud5a5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. ")),Object(i.b)("h2",{id:"12-components"},"1.2 Components"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\uc124\uba85")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\ucef4\ud3ec\ub10c\ud2b8 \uba85"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\uc124\uba85"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"QueryPie Api"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Rest Api \uc11c\ubc84  & Admin")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),":   QueryPie App :"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"QueryPie \uc758 Web Client")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"^^"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"^^ \uc790\ub3d9 \uc644\uc131")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"^^"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"^^ \ucffc\ub9ac \uc218\ud589")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"QueryPie DB"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"QueryPie \uac00 metadata \ub4e4\uc744 \uad00\ub9ac\ud558\ub294 DB")))),Object(i.b)("h1",{id:"2-querypie-db-\uc124\uce58"},"2. QueryPie DB \uc124\uce58"),Object(i.b)("h2",{id:"21-\uac1c\uc694"},"2.1 \uac1c\uc694"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"QueryPie \uc5d0\uc11c\ub294 \uad00\ub9ac\ud560 Database \ub4e4\uc758 metadata\ub97c \uc800\uc7a5\ud558\uae30 \uc704\ud558\uc5ec MySQL \uc11c\ubc84\ub97c \ud544\uc694\ub85c \ud569\ub2c8\ub2e4."),Object(i.b)("li",{parentName:"ul"},"mysql 5.7\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4."),Object(i.b)("li",{parentName:"ul"},"\uc124\uce58 \ubc0f \uc5c5\uadf8\ub808\uc774\ub4dc\uc2dc Table Schema \ub4e4\uc744 \uc801\uc6a9\ud558\uae30 \uc704\ud558\uc5ec DDL, DML \uad8c\ud55c\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),Object(i.b)("li",{parentName:"ul"},"Docker Image \ub97c \ub744\uc6b8 \ub54c \ud574\ub2f9 instance \uc758 \uc815\ubcf4\ub97c Option \uc5d0 \uc801\uc5b4 \uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),Object(i.b)("h2",{id:"22-user-\ubc0f-db-\uc0dd\uc131-\uc608\uc81c"},"2.2 User \ubc0f DB \uc0dd\uc131 \uc608\uc81c"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-mysql"}),"CREATE USER 'querypie'@'%' IDENTIFIED BY 'password';\n\nCREATE database querypie CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;\n\nGRANT ALL privileges ON querypie.* TO querypie@'%';\n")),Object(i.b)("h1",{id:"3-redis-\uc124\uce58"},"3. Redis \uc124\uce58"),Object(i.b)("h2",{id:"31-\uac1c\uc694"},"3.1 \uac1c\uc694"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"QueryPie \uc5d0\uc11c\ub294 Redis \uc11c\ubc84\ub97c \ub0b4\ubd80\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\uba70, \uc124\uce58 \uc804 redis instance \uac00 \uc900\ube44\ub418\uc5b4 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),Object(i.b)("li",{parentName:"ul"},"Redis 5 \uc774\uc0c1\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4."),Object(i.b)("li",{parentName:"ul"},"EKS \uc758 helm \uc744 \uc0ac\uc6a9\ud558\uc2dc\ub294 \ubd84\ub4e4\uc740 \uc790\ub3d9\uc73c\ub85c \uc124\uce58\uac00 \ub429\ub2c8\ub2e4."),Object(i.b)("li",{parentName:"ul"},"Docker Image \ub97c \ub744\uc6b8 \ub54c \ud574\ub2f9 instance \uc758 \uc815\ubcf4\ub97c Option \uc5d0 \uc801\uc5b4 \uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),Object(i.b)("h1",{id:"4-querypie-docker-registry"},"4. QueryPie Docker Registry"),Object(i.b)("h2",{id:"41-\uac1c\uc694"},"4.1 \uac1c\uc694"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"QueryPie \ub294 docker image\ub85c \uc804\ub2ec\ub429\ub2c8\ub2e4."),Object(i.b)("li",{parentName:"ul"},"QueryPie \uc758 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc740 Private Docker Registry \uc5d0\uc11c \uad00\ub9ac\ud569\ub2c8\ub2e4."),Object(i.b)("li",{parentName:"ul"},"\uc778\uc99d \uc815\ubcf4\ub294 \uc124\uce58 \uac00\uc774\ub4dc\uc640 \ud568\uaed8 \uc804\ub2ec\ub429\ub2c8\ub2e4.")),Object(i.b)("h2",{id:"42-registry-\uc815\ubcf4"},"4.2 Registry \uc815\ubcf4"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Private Registry ")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"domain name : dockerpie.querypie.com\nstatic ip : 13.124.6.67\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"On-Premise \ud658\uacbd\uc5d0\uc11c \uc124\uce58\ud558\uc2dc\ub294 \ubd84\ub4e4\uc740 \uc704 registry \uc5d0 \uc811\uadfc\uc774 \uac00\ub2a5\ud558\ub3c4\ub85d Security Group \uc744 \uc870\uc815\ud574\uc8fc\uc2ed\uc2dc\uc624.")),Object(i.b)("p",null,"#5. Deploy \uc608\uc81c"),Object(i.b)("h2",{id:"51-\uac1c\uc694"},"5.1 \uac1c\uc694"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Public Zone \uc5d0\uc11c\uc758 Deploy \uad6c\uc131\ub3c4\ub97c \uc608\uc81c\ub85c \uc81c\uc2dc\ud569\ub2c8\ub2e4."),Object(i.b)("li",{parentName:"ul"},"Privacy Zone \uc5d0\uc11c\uc758 Deploy \uad6c\uc131\ub3c4\ub97c \uc608\uc81c\ub85c \uc81c\uc2dc\ud569\ub2c8\ub2e4.")),Object(i.b)("h2",{id:"52-public-zone-\uc5d0\uc11c\uc758-deploy-\uad6c\uc131\ub3c4-\uc608\uc81c"},"5.2 Public Zone \uc5d0\uc11c\uc758 Deploy \uad6c\uc131\ub3c4 \uc608\uc81c"),Object(i.b)("h2",{id:"53-privacy-zone-\uc5d0\uc11c\uc758-deploy-\uad6c\uc131\ub3c4-\uc608\uc81c"},"5.3 Privacy Zone \uc5d0\uc11c\uc758 Deploy \uad6c\uc131\ub3c4 \uc608\uc81c"),Object(i.b)("h1",{id:"6-querypie-\ubc30\ud3ec---eks"},"6. QueryPie \ubc30\ud3ec - EKS"),Object(i.b)("h2",{id:"61-prerequisites"},"6.1 Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"QueryPie \uc758 \uacbd\uc6b0 Sticky Session \uc744 \uc704\ud558\uc5ec AWS Load Balancer Controller \uc0ac\uc6a9\uc774 \uc694\uad6c \ub429\ub2c8\ub2e4.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"https://github.com/aws/eks-charts/tree/master/stable/aws-load-balancer-controller\n")),Object(i.b)("h2",{id:"62-helm\uc744-\ud1b5\ud55c-install"},"6.2 helm\uc744 \ud1b5\ud55c Install"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"EKS\uc5d0\ub294 Helm\uc744 \uc774\uc6a9\ud558\uc5ec \ubc30\ud3ec\ub97c \ud569\ub2c8\ub2e4.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"helm \uc800\uc7a5\uc18c\ub97c \ucd94\uac00 \ud569\ub2c8\ub2e4."))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"helm repo add chequer https://chequer-io.github.io/querypie-deployment/helm-chart\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"helm \uc800\uc7a5\uc18c\ub97c update \ud569\ub2c8\ub2e4.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"helm repo update\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\uac01 \ud658\uacbd\uc5d0 \ub9de\ub294 values.yaml \ub97c \uc791\uc131\ud558\uc5ec QueryPie \ub97c install \ud569\ub2c8\ub2e4.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'apiImage:\n  repository: dockerpie.querypie.com/chequer.io/querypie-api\n  tag: latest\n  pullPolicy: Always\n  replicas: 2\n\nappImage:\n  repository: dockerpie.querypie.com/chequer.io/querypie-app\n  tag: latest\n  pullPolicy: Always\n  replicas: 2\n\nquerypiedb:\n  DB_PORT: 3306\n  DB_HOST: \'CHANGE_ME\'\n  DB_DATABASE: \'querypie\'\n  DB_MAX_CONNECTION_SIZE: 20\n  credentials:\n    DB_USERNAME: \'BASE64_ENCODED_CHANGE_ME\'\n    DB_PASSWORD: \'BASE64_ENCODED_CHANGE_ME\'\n\nquerypie_redis:\n  REDIS_HOST: \'CHANGE_ME\'\n  REDIS_PORT: 6379\n  REDIS_PASSWORD: \'CHANGE_ME\'\n  REDIS_EVENTKEY: \'CHANGE_ME\'\n  REDIS_DB: 0\n\nimageCredentials:\n  registry: \'dockerpie.querypie.com\'\n  username: \'CHANGE_ME\'\n  password: \'CHANGE_ME\'\n\nappIngress:\n  tls: true\n  hostname: \'CHANGE_ME\'\n  secretName: \'CHANGE_ME\'\n  annotations:\n    kubernetes.io/ingress.class: alb\n    alb.ingress.kubernetes.io/scheme: internet-facing\n    alb.ingress.kubernetes.io/target-type: ip\n    alb.ingress.kubernetes.io/listen-ports: \'[{"HTTP":80}, {"HTTPS":443}]\'\n    alb.ingress.kubernetes.io/actions.ssl-redirect: \'{"Type": "redirect", "RedirectConfig": { "Protocol": "HTTPS", "Port": "443", "StatusCode": "HTTP_301"}}\'\n  rules:\n    http:\n      paths:\n        - path: /\n          backend:\n            serviceName: "querypie-app-service"\n            servicePort: 80\n\napiIngress:\n  tls: true\n  hostname: \'CHANGE_ME\'\n  secretName: \'CHANGE_ME\'\n  annotations:\n    kubernetes.io/ingress.class: alb\n    alb.ingress.kubernetes.io/scheme: internet-facing\n    alb.ingress.kubernetes.io/target-type: ip\n    alb.ingress.kubernetes.io/listen-ports: \'[{"HTTP":80}, {"HTTPS":443}]\'\n    alb.ingress.kubernetes.io/actions.ssl-redirect: \'{"Type": "redirect", "RedirectConfig": { "Protocol": "HTTPS", "Port": "443", "StatusCode": "HTTP_301"}}\'\n  rules:\n    http:\n      paths:\n        - path: /\n          backend:\n            serviceName: "querypie-api-service"\n            servicePort: 80\n')))}u.isMDXComponent=!0}}]);