# 创建数据库
create database if not exists spider_news;

# 选择数据库
use spider_news;

# 创建数据表
drop table if exists tb_news;
create table if not exists tb_news
(
  id           int primary key not null auto_increment comment 'ID',
  code         varchar(36)   not null comment '唯一编码',
  title        varchar(128)  not null comment '标题',
  url          varchar(128)  not null comment '链接',
  type         tinyint(3)      not null default 0 comment '新闻类型',
  image_main   varchar(128)  not null comment '主图',
  image_urls   varchar(1024) not null comment '图片 用逗号分隔',
  author       varchar(64)   not null comment '作者',
  source       varchar(64)   not null comment '来源',
  description  varchar(1024) comment '摘要',
  publish_time datetime        not null default current_timestamp comment '发布时间'
);

# 插入数据
insert into tb_news values (null,'NNNN82138392529',"香港暴乱分子全部横死","http://sss.cvafhjk",0,'http://sadfsirfqwe.png','http://asfkgj.jpg,http://dszaikwqdf.jpg','chris','正气网','测试新闻',current_timestamp);