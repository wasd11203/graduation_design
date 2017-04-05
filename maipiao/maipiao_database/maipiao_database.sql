/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2017/3/30 16:07:18                           */
/*==============================================================*/


DROP TABLE IF EXISTS ASSOCIATION_ORDER_RESOURCE;

DROP TABLE IF EXISTS ASSOCIATION_REGION_RESOURCE;

DROP TABLE IF EXISTS ASSOCIATION_RESOURCE_SHOWVENUE_SITE;

DROP TABLE IF EXISTS ASSOCIATION_SITE_TICKET;

DROP TABLE IF EXISTS ASSOCIATION_USER_ORDER;

DROP TABLE IF EXISTS ASSOCIATION_USER_RECEIVEADDRESSES;

DROP TABLE IF EXISTS DISCOUNT_RESOURCE;

DROP TABLE IF EXISTS HOT_RESOURCE;

DROP TABLE IF EXISTS ORDER_BASE_INFO;

DROP TABLE IF EXISTS RECEIVE_TYPE;

DROP TABLE IF EXISTS REGION_SEC_CATEGORY;

DROP TABLE IF EXISTS REGION_THIRD_CATEGORY;

DROP TABLE IF EXISTS REGION_TOP_CATEGORY;

DROP TABLE IF EXISTS RESOURCE_INFO;

DROP TABLE IF EXISTS RESOURCE_SEC_CATEGORY;

DROP TABLE IF EXISTS RESOURCE_THIRD_CATEGORY;

DROP TABLE IF EXISTS RESOURCE_TOP_CATEGORY;

DROP TABLE IF EXISTS SHOWVENUE_INFO;

DROP TABLE IF EXISTS SITE_INFO;

DROP TABLE IF EXISTS SITE_TYPE;

DROP TABLE IF EXISTS TICKET_INFO;

DROP TABLE IF EXISTS USER_BASE_INFO;

DROP TABLE IF EXISTS USER_BIND_INFO;

DROP TABLE IF EXISTS USER_CONCERNS;

/*==============================================================*/
/* Table: ASSOCIATION_ORDER_RESOURCE                            */
/*==============================================================*/
CREATE TABLE ASSOCIATION_ORDER_RESOURCE
(
   ORDER_ID             INT COMMENT '订单_ID',
   RESOURCE_ID          INT COMMENT '资源_ID',
   REGION_ID            INT COMMENT '地区_ID',
   VENUE_ID             INT COMMENT '演出场馆_ID',
   SITE_ID              INT COMMENT '演出场次_ID',
   TICKET_COUNTS        INT COMMENT '购票数',
   TICKET_PRICE         FLOAT COMMENT '票单价'
);

ALTER TABLE ASSOCIATION_ORDER_RESOURCE COMMENT '订单与资源的关系';

/*==============================================================*/
/* Table: ASSOCIATION_REGION_RESOURCE                           */
/*==============================================================*/
CREATE TABLE ASSOCIATION_REGION_RESOURCE
(
   REGION_THIRD_ID      INT COMMENT '资源所属的三级分类_ID',
   RESOURCE_TOP_ID      INT COMMENT '资源的一级分类_ID'
);

ALTER TABLE ASSOCIATION_REGION_RESOURCE COMMENT '地区与资源一级分类的关系表';

/*==============================================================*/
/* Table: ASSOCIATION_RESOURCE_SHOWVENUE_SITE                   */
/*==============================================================*/
CREATE TABLE ASSOCIATION_RESOURCE_SHOWVENUE_SITE
(
   RESOURCE_ID          INT COMMENT '资源_ID',
   SITE_ID              INT COMMENT '场次_ID',
   VENUE_ID             INT COMMENT '场馆_ID'
);

ALTER TABLE ASSOCIATION_RESOURCE_SHOWVENUE_SITE COMMENT '资源,演出场馆, 场次的关系';

/*==============================================================*/
/* Table: ASSOCIATION_SITE_TICKET                               */
/*==============================================================*/
CREATE TABLE ASSOCIATION_SITE_TICKET
(
   SITE_ID              INT COMMENT '场次_ID',
   TICKET_ID            INT COMMENT '票种_ID'
);

ALTER TABLE ASSOCIATION_SITE_TICKET COMMENT '场次与票种的关系:
';

/*==============================================================*/
/* Table: ASSOCIATION_USER_ORDER                                */
/*==============================================================*/
CREATE TABLE ASSOCIATION_USER_ORDER
(
   USER_ID              INT COMMENT '用户_ID',
   ORDER_ID             INT COMMENT '订单_ID'
);

ALTER TABLE ASSOCIATION_USER_ORDER COMMENT '用户与订单的关系';

/*==============================================================*/
/* Table: ASSOCIATION_USER_RECEIVEADDRESSES                     */
/*==============================================================*/
CREATE TABLE ASSOCIATION_USER_RECEIVEADDRESSES
(
   USER_ID              INT COMMENT '用户_ID',
   LOCATION_PROVINCE    VARCHAR(16) COMMENT '地址所在的省',
   LOCATION_CITY        VARCHAR(16) COMMENT '地址所在的市',
   LOCATION_AREA        VARCHAR(16) COMMENT '地址所在的区/县',
   LOCATION_MORE        VARCHAR(128) COMMENT '地址的详细信息( 街道等 )',
   RECEIVE_NAME         VARCHAR(16) COMMENT '收货人名称',
   RECEIVE_PHONE        VARCHAR(16) COMMENT '收货人电话',
   ISDEFAULT            INT COMMENT '是否为默认收货地址'
);

ALTER TABLE ASSOCIATION_USER_RECEIVEADDRESSES COMMENT '用户的收货地址';

/*==============================================================*/
/* Table: DISCOUNT_RESOURCE                                     */
/*==============================================================*/
CREATE TABLE DISCOUNT_RESOURCE
(
   RESOURCE_ID          INT COMMENT '资源_ID'
);

ALTER TABLE DISCOUNT_RESOURCE COMMENT '特惠资源表';

/*==============================================================*/
/* Table: HOT_RESOURCE                                          */
/*==============================================================*/
CREATE TABLE HOT_RESOURCE
(
   RESOURCE_ID          INT COMMENT '资源_ID'
);

ALTER TABLE HOT_RESOURCE COMMENT '热销资源
';

/*==============================================================*/
/* Table: ORDER_BASE_INFO                                       */
/*==============================================================*/
CREATE TABLE ORDER_BASE_INFO
(
   ORDER_ID             INT NOT NULL COMMENT '用户_ID',
   DISCOUNT_CODE        VARCHAR(32) COMMENT '优惠码',
   TOTAL                FLOAT COMMENT '应付总额',
   BUYER_PHONE          VARCHAR(16) COMMENT '购票人手机号',
   RECEIVE_LOCATION_PROVINCE VARCHAR(16) COMMENT '收票人地址所在省',
   RECEIVE_LOCATION_CITY VARCHAR(16) COMMENT '收票人地址所在市',
   RECEIVE_LOCATION_AREA VARCHAR(16) COMMENT '收票人地址所在区/县',
   RECEIVE_LOCATION_MORE VARCHAR(32) COMMENT '收票人地址的详细信息( 街道等 )',
   RECEIVE_NAME         VARCHAR(16) COMMENT '收票人名称',
   RECEIVE_PHONE        VARCHAR(16) COMMENT '收票人电话',
   ISFINISH             INT COMMENT '交易是否成功的标识',
   INTIME               TIMESTAMP COMMENT '订单生成时间',
   RECEIVE_TYPE         INT COMMENT '票的接收方式',
   PRIMARY KEY (ORDER_ID)
);

ALTER TABLE ORDER_BASE_INFO COMMENT '订单的固定信息
如：
 1： 收货人
 2： 收货人地址';

/*==============================================================*/
/* Table: RECEIVE_TYPE                                          */
/*==============================================================*/
CREATE TABLE RECEIVE_TYPE
(
   TYPE_ID              INT NOT NULL COMMENT '票的接收类型_ID',
   TYPE_NAME            VARCHAR(32) COMMENT '类型名称',
   PRIMARY KEY (TYPE_ID)
);

ALTER TABLE RECEIVE_TYPE COMMENT '收货人取货的方式
如：
 1：快递';

/*==============================================================*/
/* Table: REGION_SEC_CATEGORY                                   */
/*==============================================================*/
CREATE TABLE REGION_SEC_CATEGORY
(
   SEC_ID               INT NOT NULL COMMENT '二级分类_ID',
   SEC_NAME             VARCHAR(16) COMMENT '二级分类名称',
   TOP_ID               INT COMMENT '所属的一级分类_ID',
   PRIMARY KEY (SEC_ID)
);

ALTER TABLE REGION_SEC_CATEGORY COMMENT '地区的二级分类:
如:
 1: 华东
 2: 华北
 3: 海外';

/*==============================================================*/
/* Table: REGION_THIRD_CATEGORY                                 */
/*==============================================================*/
CREATE TABLE REGION_THIRD_CATEGORY
(
   THIRD_ID             INT NOT NULL COMMENT '三级分类_ID',
   THIRD_NAME           VARCHAR(16) COMMENT '三级分类名称',
   SEC_ID               INT COMMENT '所属的二级分类_ID',
   PRIMARY KEY (THIRD_ID)
);

ALTER TABLE REGION_THIRD_CATEGORY COMMENT '地区的三级分类:
如:
 1:上海
 2:沈阳
 3:法国';

/*==============================================================*/
/* Table: REGION_TOP_CATEGORY                                   */
/*==============================================================*/
CREATE TABLE REGION_TOP_CATEGORY
(
   TOP_ID               INT NOT NULL COMMENT '地区一级分类_ID',
   TOP_NAME             VARCHAR(16) COMMENT '一级分类名称',
   PRIMARY KEY (TOP_ID)
);

ALTER TABLE REGION_TOP_CATEGORY COMMENT '地区的一级分类:
如:
1: 国内
2: 国外';

/*==============================================================*/
/* Table: RESOURCE_INFO                                         */
/*==============================================================*/
CREATE TABLE RESOURCE_INFO
(
   RESOURCE_ID          INT NOT NULL COMMENT '资源_ID',
   RESOURCE_NAME        VARCHAR(64) COMMENT '资源名称',
   RESOURCE_PIC         VARCHAR(128) COMMENT '资源显示图片',
   RESOURCE_SHORT_DESC  VARCHAR(128) COMMENT '资源的短描述',
   RESOURCE_INTRODUCE   VARCHAR(256) COMMENT '资源的详细介绍',
   ISENABLE             INT COMMENT '资源上架标识',
   THIRD_ID             INT COMMENT '资源的三级分类_ID',
   PRIMARY KEY (RESOURCE_ID)
);

ALTER TABLE RESOURCE_INFO COMMENT '资源:
如:
1: 谭咏麟银河岁月40载巡回演唱会 北京站';

/*==============================================================*/
/* Table: RESOURCE_SEC_CATEGORY                                 */
/*==============================================================*/
CREATE TABLE RESOURCE_SEC_CATEGORY
(
   SEC_ID               INT NOT NULL COMMENT '资源的二级分类_ID',
   SEC_NAME             VARCHAR(16) COMMENT '资源的二级分类名称',
   TOP_ID               INT COMMENT '资源的一级分类_ID',
   PRIMARY KEY (SEC_ID)
);

ALTER TABLE RESOURCE_SEC_CATEGORY COMMENT '资源的二级分类:
如:
 1: 演唱会
 2: 音乐会

 ';

/*==============================================================*/
/* Table: RESOURCE_THIRD_CATEGORY                               */
/*==============================================================*/
CREATE TABLE RESOURCE_THIRD_CATEGORY
(
   THIRD_ID             INT NOT NULL COMMENT '资源的三级分类_ID',
   THIRD_NAME           VARCHAR(16) COMMENT '资源的三级分类名称',
   SEC_ID               INT COMMENT '资源的二级分类_ID',
   PRIMARY KEY (THIRD_ID)
);

ALTER TABLE RESOURCE_THIRD_CATEGORY COMMENT '资源的三级分类:
如: 
1: 流行
 

2: 甄子丹';

/*==============================================================*/
/* Table: RESOURCE_TOP_CATEGORY                                 */
/*==============================================================*/
CREATE TABLE RESOURCE_TOP_CATEGORY
(
   TOP_ID               INT NOT NULL COMMENT '资源的一级分类_ID',
   TOP_NAME             VARCHAR(16) COMMENT '一级分类的名称',
   PRIMARY KEY (TOP_ID)
);

ALTER TABLE RESOURCE_TOP_CATEGORY COMMENT '资源的一级分类:
如:
 1: 演出
 2: 电影
 ';

/*==============================================================*/
/* Table: SHOWVENUE_INFO                                        */
/*==============================================================*/
CREATE TABLE SHOWVENUE_INFO
(
   VENUE_ID             INT NOT NULL COMMENT '演出场馆_ID',
   VENUE_PIC            VARCHAR(128) COMMENT '场馆的图片',
   VENUE_NAME           VARCHAR(128) COMMENT '场馆的名称',
   VENUE_ADDRESS        VARCHAR(128) COMMENT '场馆的地址',
   VENUE_PHONE          VARCHAR(16) COMMENT '场馆的联系电话',
   VENUE_INTRODUCE      VARCHAR(256) COMMENT '场馆的详细介绍',
   REGION_THIRD_ID      INT COMMENT '地区的三级分类_ID',
   PRIMARY KEY (VENUE_ID)
);

ALTER TABLE SHOWVENUE_INFO COMMENT '演出场地：
如：
1: 乐视体育生态中心  地址：复兴路69号(近五棵松地铁)  电话：0106';

/*==============================================================*/
/* Table: SITE_INFO                                             */
/*==============================================================*/
CREATE TABLE SITE_INFO
(
   SITE_ID              INT NOT NULL COMMENT '场次_ID',
   SITE_NAME            VARCHAR(32) COMMENT '场次名称',
   SITE_TIME            TIMESTAMP COMMENT '场次演出时间',
   LIMIT_COUNTS         INT COMMENT '一次下单的票的限购数',
   TYPE_ID              INT COMMENT '场次的类型',
   PRIMARY KEY (SITE_ID)
);

ALTER TABLE SITE_INFO COMMENT '场次信息:
如:
 1: 04月22日  周六 19:00';

/*==============================================================*/
/* Table: SITE_TYPE                                             */
/*==============================================================*/
CREATE TABLE SITE_TYPE
(
   TYPE_ID              INT NOT NULL COMMENT '场次类型_ID',
   TYPE_NAME            VARCHAR(32) COMMENT '类型名称',
   PRIMARY KEY (TYPE_ID)
);

ALTER TABLE SITE_TYPE COMMENT '场次类型:
如:
1: 特惠看';

/*==============================================================*/
/* Table: TICKET_INFO                                           */
/*==============================================================*/
CREATE TABLE TICKET_INFO
(
   TICKET_ID            INT NOT NULL COMMENT '票种_ID',
   TICKET_NAME          VARCHAR(32) COMMENT '票种名称',
   TICKET_COUNTS        INT COMMENT '该票种的可购票数',
   TICKET_PRICE         FLOAT COMMENT '票种的单价',
   TICKET_OLD_PRICE     FLOAT COMMENT '票种的过去的价格',
   PRIMARY KEY (TICKET_ID)
);

ALTER TABLE TICKET_INFO COMMENT '票种的信息:
如:
 1: 60元(学生票)';

/*==============================================================*/
/* Table: USER_BASE_INFO                                        */
/*==============================================================*/
CREATE TABLE USER_BASE_INFO
(
   USER_ID              INT NOT NULL COMMENT '用户_ID',
   ICON                 VARCHAR(128) COMMENT '用户头像',
   NICKNAME             VARCHAR(16) COMMENT '昵称',
   PASSWORD             VARCHAR(16) COMMENT '密码',
   BIRTH                TIMESTAMP COMMENT '生日',
   GENDER               INT COMMENT '性别',
   PRIMARY KEY (USER_ID)
);

ALTER TABLE USER_BASE_INFO COMMENT '用户的基础信息:
如：
 1: 昵称
 3：密码';

/*==============================================================*/
/* Table: USER_BIND_INFO                                        */
/*==============================================================*/
CREATE TABLE USER_BIND_INFO
(
   USER_ID              INT COMMENT '用户_ID',
   PHONE                VARCHAR(16) COMMENT '用户绑定的手机号'
);

ALTER TABLE USER_BIND_INFO COMMENT '用户的绑定信息:
如:
 1: 电话';

/*==============================================================*/
/* Table: USER_CONCERNS                                         */
/*==============================================================*/
CREATE TABLE USER_CONCERNS
(
   USER_ID              INT COMMENT '用户_ID',
   RESOURCE_ID          INT COMMENT '资源_ID',
   REGION_ID            INT COMMENT '地区_ID',
   VENUE_ID             INT COMMENT '演出场馆_ID',
   SITE_ID              INT COMMENT '演出场次_ID',
   TICKET_ID            INT COMMENT '票种_ID',
   INTIME               TIMESTAMP COMMENT '关注时间'
);

ALTER TABLE USER_CONCERNS COMMENT '用户的关注表';

