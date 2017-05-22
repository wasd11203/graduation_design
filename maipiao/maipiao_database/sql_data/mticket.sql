/*
Navicat MySQL Data Transfer

Source Server         : localhost:3306
Source Server Version : 50716
Source Host           : localhost:3306
Source Database       : mticket

Target Server Type    : MYSQL
Target Server Version : 50716
File Encoding         : 65001

Date: 2017-05-22 09:02:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `association_order_resource`
-- ----------------------------
DROP TABLE IF EXISTS `association_order_resource`;
CREATE TABLE `association_order_resource` (
  `ORDER_ID` int(11) DEFAULT NULL COMMENT '订单_ID',
  `RESOURCE_ID` int(11) DEFAULT NULL COMMENT '资源_ID',
  `REGION_THIRD_ID` int(11) DEFAULT NULL COMMENT '地区_ID',
  `VENUE_ID` int(11) DEFAULT NULL COMMENT '演出场馆_ID',
  `SITE_ID` int(11) DEFAULT NULL COMMENT '演出场次_ID',
  `TICKET_ID` int(11) DEFAULT NULL,
  `TICKET_COUNTS` int(11) DEFAULT NULL COMMENT '购票数',
  `TICKET_PRICE` float DEFAULT NULL COMMENT '票单价'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单与资源的关系';

-- ----------------------------
-- Records of association_order_resource
-- ----------------------------
INSERT INTO `association_order_resource` VALUES ('-964227009', '2', '1', '2', '2', '8', '1', '377');
INSERT INTO `association_order_resource` VALUES ('-964086757', '2', '1', '2', '2', '8', '1', '377');
INSERT INTO `association_order_resource` VALUES ('-963768765', '2', '1', '2', '2', '8', '1', '377');

-- ----------------------------
-- Table structure for `association_region_resource`
-- ----------------------------
DROP TABLE IF EXISTS `association_region_resource`;
CREATE TABLE `association_region_resource` (
  `REGION_THIRD_ID` int(11) DEFAULT NULL COMMENT '资源所属的三级分类_ID',
  `RESOURCE_TOP_ID` int(11) DEFAULT NULL COMMENT '资源的一级分类_ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='地区与资源一级分类的关系表';

-- ----------------------------
-- Records of association_region_resource
-- ----------------------------
INSERT INTO `association_region_resource` VALUES ('1', '1');
INSERT INTO `association_region_resource` VALUES ('2', '1');
INSERT INTO `association_region_resource` VALUES ('3', '1');
INSERT INTO `association_region_resource` VALUES ('4', '1');
INSERT INTO `association_region_resource` VALUES ('5', '1');
INSERT INTO `association_region_resource` VALUES ('6', '1');
INSERT INTO `association_region_resource` VALUES ('7', '1');
INSERT INTO `association_region_resource` VALUES ('8', '1');
INSERT INTO `association_region_resource` VALUES ('9', '1');
INSERT INTO `association_region_resource` VALUES ('10', '1');
INSERT INTO `association_region_resource` VALUES ('11', '1');
INSERT INTO `association_region_resource` VALUES ('12', '1');
INSERT INTO `association_region_resource` VALUES ('13', '1');
INSERT INTO `association_region_resource` VALUES ('14', '1');
INSERT INTO `association_region_resource` VALUES ('15', '1');
INSERT INTO `association_region_resource` VALUES ('16', '1');
INSERT INTO `association_region_resource` VALUES ('17', '1');
INSERT INTO `association_region_resource` VALUES ('18', '1');
INSERT INTO `association_region_resource` VALUES ('19', '1');
INSERT INTO `association_region_resource` VALUES ('20', '1');
INSERT INTO `association_region_resource` VALUES ('21', '1');
INSERT INTO `association_region_resource` VALUES ('22', '1');
INSERT INTO `association_region_resource` VALUES ('23', '1');
INSERT INTO `association_region_resource` VALUES ('24', '1');
INSERT INTO `association_region_resource` VALUES ('25', '1');
INSERT INTO `association_region_resource` VALUES ('26', '1');
INSERT INTO `association_region_resource` VALUES ('27', '1');
INSERT INTO `association_region_resource` VALUES ('28', '1');
INSERT INTO `association_region_resource` VALUES ('29', '1');
INSERT INTO `association_region_resource` VALUES ('30', '1');
INSERT INTO `association_region_resource` VALUES ('31', '1');
INSERT INTO `association_region_resource` VALUES ('32', '1');
INSERT INTO `association_region_resource` VALUES ('33', '1');
INSERT INTO `association_region_resource` VALUES ('34', '1');
INSERT INTO `association_region_resource` VALUES ('35', '1');
INSERT INTO `association_region_resource` VALUES ('36', '1');
INSERT INTO `association_region_resource` VALUES ('37', '1');
INSERT INTO `association_region_resource` VALUES ('38', '1');
INSERT INTO `association_region_resource` VALUES ('39', '1');
INSERT INTO `association_region_resource` VALUES ('40', '1');
INSERT INTO `association_region_resource` VALUES ('41', '1');
INSERT INTO `association_region_resource` VALUES ('42', '1');
INSERT INTO `association_region_resource` VALUES ('43', '1');
INSERT INTO `association_region_resource` VALUES ('44', '1');
INSERT INTO `association_region_resource` VALUES ('45', '1');

-- ----------------------------
-- Table structure for `association_resource_showvenue_site`
-- ----------------------------
DROP TABLE IF EXISTS `association_resource_showvenue_site`;
CREATE TABLE `association_resource_showvenue_site` (
  `RESOURCE_ID` int(11) DEFAULT NULL COMMENT '资源_ID',
  `SITE_ID` int(11) DEFAULT NULL COMMENT '场次_ID',
  `VENUE_ID` int(11) DEFAULT NULL COMMENT '场馆_ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='资源,演出场馆, 场次的关系';

-- ----------------------------
-- Records of association_resource_showvenue_site
-- ----------------------------
INSERT INTO `association_resource_showvenue_site` VALUES ('1', '1', '1');
INSERT INTO `association_resource_showvenue_site` VALUES ('2', '2', '2');
INSERT INTO `association_resource_showvenue_site` VALUES ('3', '3', '3');
INSERT INTO `association_resource_showvenue_site` VALUES ('4', '4', '4');
INSERT INTO `association_resource_showvenue_site` VALUES ('5', '5', '5');
INSERT INTO `association_resource_showvenue_site` VALUES ('6', '6', '6');
INSERT INTO `association_resource_showvenue_site` VALUES ('7', '7', '7');
INSERT INTO `association_resource_showvenue_site` VALUES ('8', '8', '8');
INSERT INTO `association_resource_showvenue_site` VALUES ('8', '9', '8');
INSERT INTO `association_resource_showvenue_site` VALUES ('8', '10', '8');

-- ----------------------------
-- Table structure for `association_site_ticket`
-- ----------------------------
DROP TABLE IF EXISTS `association_site_ticket`;
CREATE TABLE `association_site_ticket` (
  `SITE_ID` int(11) DEFAULT NULL COMMENT '场次_ID',
  `TICKET_ID` int(11) DEFAULT NULL COMMENT '票种_ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='场次与票种的关系:\r\n';

-- ----------------------------
-- Records of association_site_ticket
-- ----------------------------
INSERT INTO `association_site_ticket` VALUES ('1', '1');
INSERT INTO `association_site_ticket` VALUES ('1', '2');
INSERT INTO `association_site_ticket` VALUES ('1', '3');
INSERT INTO `association_site_ticket` VALUES ('1', '4');
INSERT INTO `association_site_ticket` VALUES ('1', '5');
INSERT INTO `association_site_ticket` VALUES ('2', '6');
INSERT INTO `association_site_ticket` VALUES ('2', '7');
INSERT INTO `association_site_ticket` VALUES ('2', '8');
INSERT INTO `association_site_ticket` VALUES ('2', '9');
INSERT INTO `association_site_ticket` VALUES ('2', '10');
INSERT INTO `association_site_ticket` VALUES ('2', '11');
INSERT INTO `association_site_ticket` VALUES ('2', '12');
INSERT INTO `association_site_ticket` VALUES ('3', '14');
INSERT INTO `association_site_ticket` VALUES ('3', '13');
INSERT INTO `association_site_ticket` VALUES ('4', '15');
INSERT INTO `association_site_ticket` VALUES ('4', '16');
INSERT INTO `association_site_ticket` VALUES ('4', '17');
INSERT INTO `association_site_ticket` VALUES ('4', '18');
INSERT INTO `association_site_ticket` VALUES ('5', '19');
INSERT INTO `association_site_ticket` VALUES ('5', '20');
INSERT INTO `association_site_ticket` VALUES ('5', '21');
INSERT INTO `association_site_ticket` VALUES ('5', '22');
INSERT INTO `association_site_ticket` VALUES ('5', '23');
INSERT INTO `association_site_ticket` VALUES ('5', '24');
INSERT INTO `association_site_ticket` VALUES ('5', '25');
INSERT INTO `association_site_ticket` VALUES ('5', '26');
INSERT INTO `association_site_ticket` VALUES ('6', '27');
INSERT INTO `association_site_ticket` VALUES ('6', '28');
INSERT INTO `association_site_ticket` VALUES ('6', '29');
INSERT INTO `association_site_ticket` VALUES ('6', '30');
INSERT INTO `association_site_ticket` VALUES ('6', '31');
INSERT INTO `association_site_ticket` VALUES ('6', '32');
INSERT INTO `association_site_ticket` VALUES ('6', '33');
INSERT INTO `association_site_ticket` VALUES ('7', '34');
INSERT INTO `association_site_ticket` VALUES ('7', '35');
INSERT INTO `association_site_ticket` VALUES ('7', '36');
INSERT INTO `association_site_ticket` VALUES ('7', '37');
INSERT INTO `association_site_ticket` VALUES ('7', '38');
INSERT INTO `association_site_ticket` VALUES ('7', '39');
INSERT INTO `association_site_ticket` VALUES ('8', '40');
INSERT INTO `association_site_ticket` VALUES ('8', '41');
INSERT INTO `association_site_ticket` VALUES ('8', '42');
INSERT INTO `association_site_ticket` VALUES ('8', '43');
INSERT INTO `association_site_ticket` VALUES ('8', '44');
INSERT INTO `association_site_ticket` VALUES ('9', '45');
INSERT INTO `association_site_ticket` VALUES ('9', '46');
INSERT INTO `association_site_ticket` VALUES ('9', '47');
INSERT INTO `association_site_ticket` VALUES ('9', '48');
INSERT INTO `association_site_ticket` VALUES ('9', '49');
INSERT INTO `association_site_ticket` VALUES ('10', '50');
INSERT INTO `association_site_ticket` VALUES ('10', '51');
INSERT INTO `association_site_ticket` VALUES ('10', '52');
INSERT INTO `association_site_ticket` VALUES ('10', '53');
INSERT INTO `association_site_ticket` VALUES ('10', '54');

-- ----------------------------
-- Table structure for `association_ticket_suit`
-- ----------------------------
DROP TABLE IF EXISTS `association_ticket_suit`;
CREATE TABLE `association_ticket_suit` (
  `SUIT_TICKET_ID` int(11) DEFAULT NULL,
  `TICKET_ID` int(11) DEFAULT NULL,
  `TICKET_COUNTS` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of association_ticket_suit
-- ----------------------------
INSERT INTO `association_ticket_suit` VALUES ('11', '9', '2');
INSERT INTO `association_ticket_suit` VALUES ('12', '10', '2');
INSERT INTO `association_ticket_suit` VALUES ('19', '18', '2');
INSERT INTO `association_ticket_suit` VALUES ('27', '22', '2');
INSERT INTO `association_ticket_suit` VALUES ('33', '30', '2');
INSERT INTO `association_ticket_suit` VALUES ('34', '31', '2');

-- ----------------------------
-- Table structure for `association_user_order`
-- ----------------------------
DROP TABLE IF EXISTS `association_user_order`;
CREATE TABLE `association_user_order` (
  `USER_ID` int(11) DEFAULT NULL COMMENT '用户_ID',
  `ORDER_ID` int(11) DEFAULT NULL COMMENT '订单_ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户与订单的关系';

-- ----------------------------
-- Records of association_user_order
-- ----------------------------
INSERT INTO `association_user_order` VALUES ('2077615322', '-964227009');
INSERT INTO `association_user_order` VALUES ('2077615322', '-964086757');
INSERT INTO `association_user_order` VALUES ('2077615322', '-963768765');

-- ----------------------------
-- Table structure for `discount_resource`
-- ----------------------------
DROP TABLE IF EXISTS `discount_resource`;
CREATE TABLE `discount_resource` (
  `DISCOUNT_ID` int(11) NOT NULL,
  `RESOURCE_ID` int(11) DEFAULT NULL COMMENT '资源_ID',
  `REGION_THIRD_ID` int(11) DEFAULT NULL,
  `DISCOUNT_PIC` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`DISCOUNT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='特惠资源表';

-- ----------------------------
-- Records of discount_resource
-- ----------------------------
INSERT INTO `discount_resource` VALUES ('1', '1', '1', 'static/images/kufu.jpg');
INSERT INTO `discount_resource` VALUES ('2', '2', '1', '');

-- ----------------------------
-- Table structure for `hot_sell_resource`
-- ----------------------------
DROP TABLE IF EXISTS `hot_sell_resource`;
CREATE TABLE `hot_sell_resource` (
  `RESOURCE_ID` int(11) DEFAULT NULL COMMENT '资源_ID',
  `REGION_THIRD_ID` int(11) DEFAULT NULL,
  `VENUE_ID` int(11) DEFAULT NULL,
  `SITE_ID` int(11) DEFAULT NULL,
  `HOT_ID` int(11) NOT NULL,
  PRIMARY KEY (`HOT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='热销资源\r\n';

-- ----------------------------
-- Records of hot_sell_resource
-- ----------------------------
INSERT INTO `hot_sell_resource` VALUES ('1', '1', '1', '1', '1');
INSERT INTO `hot_sell_resource` VALUES ('2', '1', '2', '2', '2');

-- ----------------------------
-- Table structure for `latest_info_resource`
-- ----------------------------
DROP TABLE IF EXISTS `latest_info_resource`;
CREATE TABLE `latest_info_resource` (
  `LATEST_ID` int(11) NOT NULL,
  `RESOURCE_ID` int(11) DEFAULT NULL,
  `REGION_THIRD_ID` int(11) DEFAULT NULL,
  `LATEST_PIC` varchar(128) DEFAULT NULL,
  `TYPE` int(11) DEFAULT NULL,
  PRIMARY KEY (`LATEST_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of latest_info_resource
-- ----------------------------
INSERT INTO `latest_info_resource` VALUES ('1', '1', '1', 'static/images/lirouhao.jpg', '1');
INSERT INTO `latest_info_resource` VALUES ('2', '2', '1', '', '1');
INSERT INTO `latest_info_resource` VALUES ('3', '2', '1', 'static/images/lirouhao.jpg', '2');

-- ----------------------------
-- Table structure for `order_base_info`
-- ----------------------------
DROP TABLE IF EXISTS `order_base_info`;
CREATE TABLE `order_base_info` (
  `ORDER_ID` int(11) NOT NULL COMMENT '用户_ID',
  `ORDER_TYPE` int(11) DEFAULT NULL,
  `DISCOUNT_CODE` varchar(32) DEFAULT NULL COMMENT '优惠码',
  `TOTAL` float DEFAULT NULL COMMENT '应付总额',
  `BUYER_PHONE` varchar(16) DEFAULT NULL COMMENT '购票人手机号',
  `RECEIVE_LOCATION_PROVINCE` varchar(16) DEFAULT NULL COMMENT '收票人地址所在省',
  `RECEIVE_LOCATION_CITY` varchar(16) DEFAULT NULL COMMENT '收票人地址所在市',
  `RECEIVE_LOCATION_AREA` varchar(16) DEFAULT NULL COMMENT '收票人地址所在区/县',
  `RECEIVE_LOCATION_MORE` varchar(32) DEFAULT NULL COMMENT '收票人地址的详细信息( 街道等 )',
  `RECEIVE_NAME` varchar(16) DEFAULT NULL COMMENT '收票人名称',
  `RECEIVE_PHONE` varchar(16) DEFAULT NULL COMMENT '收票人电话',
  `ISFINISH` int(11) DEFAULT NULL COMMENT '交易是否成功的标识',
  `INTIME` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '订单生成时间',
  `RECEIVE_TYPE` int(11) DEFAULT NULL COMMENT '票的接收方式',
  `ISDEL` int(11) DEFAULT NULL,
  PRIMARY KEY (`ORDER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单的固定信息\r\n如：\r\n 1： 收货人\r\n 2： 收货人地址';

-- ----------------------------
-- Records of order_base_info
-- ----------------------------
INSERT INTO `order_base_info` VALUES ('-964227009', '1', null, '377', null, null, null, null, null, null, ' ', '2', '2017-05-02 08:28:15', '1', null);
INSERT INTO `order_base_info` VALUES ('-964086757', '1', null, '377', null, null, null, null, null, null, ' ', null, '2017-05-02 08:22:12', '1', null);
INSERT INTO `order_base_info` VALUES ('-963768765', '1', null, '377', null, null, null, null, null, null, ' ', null, '2017-05-02 08:27:30', '1', null);

-- ----------------------------
-- Table structure for `order_type`
-- ----------------------------
DROP TABLE IF EXISTS `order_type`;
CREATE TABLE `order_type` (
  `TYPE_ID` int(11) NOT NULL,
  `TYPE_NAME` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`TYPE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_type
-- ----------------------------
INSERT INTO `order_type` VALUES ('1', '订单');

-- ----------------------------
-- Table structure for `receiveaddresses`
-- ----------------------------
DROP TABLE IF EXISTS `receiveaddresses`;
CREATE TABLE `receiveaddresses` (
  `ADDRESS_ID` int(11) NOT NULL,
  `USER_ID` int(11) DEFAULT NULL COMMENT '用户_ID',
  `LOCATION_PROVINCE` varchar(16) DEFAULT NULL COMMENT '地址所在的省',
  `LOCATION_CITY` varchar(16) DEFAULT NULL COMMENT '地址所在的市',
  `LOCATION_AREA` varchar(16) DEFAULT NULL COMMENT '地址所在的区/县',
  `LOCATION_MORE` varchar(128) DEFAULT NULL COMMENT '地址的详细信息( 街道等 )',
  `RECEIVE_NAME` varchar(16) DEFAULT NULL COMMENT '收货人名称',
  `RECEIVE_PHONE` varchar(16) DEFAULT NULL COMMENT '收货人电话',
  `ISDEFAULT` int(11) DEFAULT NULL COMMENT '是否为默认收货地址',
  PRIMARY KEY (`ADDRESS_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户的收货地址';

-- ----------------------------
-- Records of receiveaddresses
-- ----------------------------

-- ----------------------------
-- Table structure for `receive_type`
-- ----------------------------
DROP TABLE IF EXISTS `receive_type`;
CREATE TABLE `receive_type` (
  `TYPE_ID` int(11) NOT NULL COMMENT '票的接收类型_ID',
  `TYPE_NAME` varchar(32) DEFAULT NULL COMMENT '类型名称',
  PRIMARY KEY (`TYPE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='收货人取货的方式\r\n如：\r\n 1：快递';

-- ----------------------------
-- Records of receive_type
-- ----------------------------
INSERT INTO `receive_type` VALUES ('1', '快递');

-- ----------------------------
-- Table structure for `recent_hot_resource`
-- ----------------------------
DROP TABLE IF EXISTS `recent_hot_resource`;
CREATE TABLE `recent_hot_resource` (
  `RECENT_ID` int(11) NOT NULL,
  `RESOURCE_ID` int(11) DEFAULT NULL,
  `REGION_THIRD_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`RECENT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of recent_hot_resource
-- ----------------------------
INSERT INTO `recent_hot_resource` VALUES ('1', '1', '1');
INSERT INTO `recent_hot_resource` VALUES ('2', '2', '1');
INSERT INTO `recent_hot_resource` VALUES ('3', '3', '1');
INSERT INTO `recent_hot_resource` VALUES ('4', '4', '1');

-- ----------------------------
-- Table structure for `region_sec_category`
-- ----------------------------
DROP TABLE IF EXISTS `region_sec_category`;
CREATE TABLE `region_sec_category` (
  `SEC_ID` int(11) NOT NULL COMMENT '二级分类_ID',
  `SEC_NAME` varchar(16) DEFAULT NULL COMMENT '二级分类名称',
  `TOP_ID` int(11) DEFAULT NULL COMMENT '所属的一级分类_ID',
  PRIMARY KEY (`SEC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='地区的二级分类:\r\n如:\r\n 1: 华东\r\n 2: 华北\r\n 3: 海外';

-- ----------------------------
-- Records of region_sec_category
-- ----------------------------
INSERT INTO `region_sec_category` VALUES ('1', '华北', '1');
INSERT INTO `region_sec_category` VALUES ('2', '东北', '1');
INSERT INTO `region_sec_category` VALUES ('3', '华东', '1');
INSERT INTO `region_sec_category` VALUES ('4', '华中', '1');
INSERT INTO `region_sec_category` VALUES ('5', '华南', '1');
INSERT INTO `region_sec_category` VALUES ('6', '西南', '1');
INSERT INTO `region_sec_category` VALUES ('7', '西北', '1');
INSERT INTO `region_sec_category` VALUES ('8', '海外', '2');

-- ----------------------------
-- Table structure for `region_third_category`
-- ----------------------------
DROP TABLE IF EXISTS `region_third_category`;
CREATE TABLE `region_third_category` (
  `THIRD_ID` int(11) NOT NULL COMMENT '三级分类_ID',
  `THIRD_NAME` varchar(16) DEFAULT NULL COMMENT '三级分类名称',
  `SEC_ID` int(11) DEFAULT NULL COMMENT '所属的二级分类_ID',
  PRIMARY KEY (`THIRD_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='地区的三级分类:\r\n如:\r\n 1:上海\r\n 2:沈阳\r\n 3:法国';

-- ----------------------------
-- Records of region_third_category
-- ----------------------------
INSERT INTO `region_third_category` VALUES ('1', '北京', '1');
INSERT INTO `region_third_category` VALUES ('2', '天津', '1');
INSERT INTO `region_third_category` VALUES ('3', '石家庄', '1');
INSERT INTO `region_third_category` VALUES ('4', '邯郸', '1');
INSERT INTO `region_third_category` VALUES ('5', '衡水', '1');
INSERT INTO `region_third_category` VALUES ('6', '太原', '1');
INSERT INTO `region_third_category` VALUES ('7', '沈阳', '2');
INSERT INTO `region_third_category` VALUES ('8', '大连', '2');
INSERT INTO `region_third_category` VALUES ('9', '本溪', '2');
INSERT INTO `region_third_category` VALUES ('10', '丹东', '2');
INSERT INTO `region_third_category` VALUES ('11', '长春', '2');
INSERT INTO `region_third_category` VALUES ('12', '白山', '2');
INSERT INTO `region_third_category` VALUES ('13', '上海', '3');
INSERT INTO `region_third_category` VALUES ('14', '南京', '3');
INSERT INTO `region_third_category` VALUES ('15', '无锡', '3');
INSERT INTO `region_third_category` VALUES ('16', '徐州', '3');
INSERT INTO `region_third_category` VALUES ('17', '常州', '3');
INSERT INTO `region_third_category` VALUES ('18', '苏州', '3');
INSERT INTO `region_third_category` VALUES ('19', '郑州', '4');
INSERT INTO `region_third_category` VALUES ('20', '洛阳', '4');
INSERT INTO `region_third_category` VALUES ('21', '武汉', '4');
INSERT INTO `region_third_category` VALUES ('22', '十堰', '4');
INSERT INTO `region_third_category` VALUES ('23', '宜昌', '4');
INSERT INTO `region_third_category` VALUES ('24', '襄阳', '4');
INSERT INTO `region_third_category` VALUES ('25', '广州', '5');
INSERT INTO `region_third_category` VALUES ('26', '深圳', '5');
INSERT INTO `region_third_category` VALUES ('27', '珠海', '5');
INSERT INTO `region_third_category` VALUES ('28', '佛山', '5');
INSERT INTO `region_third_category` VALUES ('29', '江门', '5');
INSERT INTO `region_third_category` VALUES ('30', '惠州', '5');
INSERT INTO `region_third_category` VALUES ('31', '重庆', '6');
INSERT INTO `region_third_category` VALUES ('32', '成都', '6');
INSERT INTO `region_third_category` VALUES ('33', '乐山', '6');
INSERT INTO `region_third_category` VALUES ('34', '达州', '6');
INSERT INTO `region_third_category` VALUES ('35', '贵阳', '6');
INSERT INTO `region_third_category` VALUES ('36', '安顺', '6');
INSERT INTO `region_third_category` VALUES ('37', '西安', '7');
INSERT INTO `region_third_category` VALUES ('38', '兰州', '7');
INSERT INTO `region_third_category` VALUES ('39', '天水', '7');
INSERT INTO `region_third_category` VALUES ('40', '平凉', '7');
INSERT INTO `region_third_category` VALUES ('41', '酒泉', '7');
INSERT INTO `region_third_category` VALUES ('42', '银川', '7');
INSERT INTO `region_third_category` VALUES ('43', '意大利', '8');
INSERT INTO `region_third_category` VALUES ('44', '德国', '8');
INSERT INTO `region_third_category` VALUES ('45', '法国', '8');

-- ----------------------------
-- Table structure for `region_top_category`
-- ----------------------------
DROP TABLE IF EXISTS `region_top_category`;
CREATE TABLE `region_top_category` (
  `TOP_ID` int(11) NOT NULL COMMENT '地区一级分类_ID',
  `TOP_NAME` varchar(16) DEFAULT NULL COMMENT '一级分类名称',
  PRIMARY KEY (`TOP_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='地区的一级分类:\r\n如:\r\n1: 国内\r\n2: 国外';

-- ----------------------------
-- Records of region_top_category
-- ----------------------------
INSERT INTO `region_top_category` VALUES ('1', '国内');
INSERT INTO `region_top_category` VALUES ('2', '国外');

-- ----------------------------
-- Table structure for `resource_advertising`
-- ----------------------------
DROP TABLE IF EXISTS `resource_advertising`;
CREATE TABLE `resource_advertising` (
  `ADV_ID` int(11) NOT NULL,
  `RESOURCE_ID` int(11) DEFAULT NULL,
  `REGION_THIRD_ID` int(11) DEFAULT NULL,
  `ADV_PIC` varchar(128) DEFAULT NULL,
  `ISTOP` int(11) DEFAULT NULL,
  PRIMARY KEY (`ADV_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of resource_advertising
-- ----------------------------
INSERT INTO `resource_advertising` VALUES ('1', '1', '1', 'static/images/wp1.jpg', '1');
INSERT INTO `resource_advertising` VALUES ('2', '2', '1', 'static/images/wp2.jpg', '1');
INSERT INTO `resource_advertising` VALUES ('3', '3', '1', 'static/images/advbar.jpg', '0');

-- ----------------------------
-- Table structure for `resource_info`
-- ----------------------------
DROP TABLE IF EXISTS `resource_info`;
CREATE TABLE `resource_info` (
  `RESOURCE_ID` int(11) NOT NULL COMMENT '资源_ID',
  `RESOURCE_NAME` varchar(64) DEFAULT NULL COMMENT '资源名称',
  `RESOURCE_PIC` varchar(128) DEFAULT NULL COMMENT '资源显示图片',
  `RESOURCE_SHORT_DESC` varchar(128) DEFAULT NULL COMMENT '资源的短描述',
  `RESOURCE_INTRODUCE` varchar(256) DEFAULT NULL COMMENT '资源的详细介绍',
  `ISENABLE` int(11) DEFAULT NULL COMMENT '资源上架标识',
  `RESOURCE_THIRD_ID` int(11) DEFAULT NULL COMMENT '资源的三级分类_ID',
  PRIMARY KEY (`RESOURCE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='资源:\r\n如:\r\n1: 谭咏麟银河岁月40载巡回演唱会 北京站';

-- ----------------------------
-- Records of resource_info
-- ----------------------------
INSERT INTO `resource_info` VALUES ('1', 'Priscilla Ahn 普莉西亚 “LALALA 啦啦啦”2017巡回演唱会', 'static/images/hot_1.jpg', '暖心专辑《La La La》', 'b', '1', '1001');
INSERT INTO `resource_info` VALUES ('2', '华艺星空.我只在乎你-邓丽君经典金曲七夕演唱会', 'static/images/hot_1.jpg ', '让我们一同向经典致敬', null, '2', '1001');
INSERT INTO `resource_info` VALUES ('3', 'Radio Attack电音派对', 'static/images/hot_1.jpg', '探寻音符深处最原始的欲望', null, '1', '1002');
INSERT INTO `resource_info` VALUES ('4', '郑钧2017“私奔”全国巡回演唱会北京站', 'static/images/hot_1.jpg', '摇滚男神 温情回归', null, '1', '1003');
INSERT INTO `resource_info` VALUES ('5', '汪峰2017岁月巡回演唱会-北京鸟巢站', 'static/images/hot_1.jpg', '在时间里记录行走的脚步', null, '1', '1005');
INSERT INTO `resource_info` VALUES ('6', '“悠春小叙”小娟＆山谷里的居民2017北京演唱会', 'static/images/hot_1.jpg', '小娟&山谷里的居民4月北京开唱', null, '1', '1005');
INSERT INTO `resource_info` VALUES ('7', '澳大利亚海德堡合唱团--歌剧与音乐剧经典唱段音乐会', 'static/images/hot_1.jpg', '用合唱演绎经典歌剧音乐剧选段', null, '1', '1006');
INSERT INTO `resource_info` VALUES ('8', '北京文化艺术基金2016年度资助项目 北京央华出品舞台剧《新原野》', 'static/images/hot_1.jpg', '中国女性的世纪生命史诗', null, '1', '2001');

-- ----------------------------
-- Table structure for `resource_sec_category`
-- ----------------------------
DROP TABLE IF EXISTS `resource_sec_category`;
CREATE TABLE `resource_sec_category` (
  `SEC_ID` int(11) NOT NULL COMMENT '资源的二级分类_ID',
  `SEC_NAME` varchar(16) DEFAULT NULL COMMENT '资源的二级分类名称',
  `TOP_ID` int(11) DEFAULT NULL COMMENT '资源的一级分类_ID',
  `ISBAR` int(11) DEFAULT NULL,
  PRIMARY KEY (`SEC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='资源的二级分类:\r\n如:\r\n 1: 演唱会\r\n 2: 音乐会\r\n\r\n ';

-- ----------------------------
-- Records of resource_sec_category
-- ----------------------------
INSERT INTO `resource_sec_category` VALUES ('1', '演唱会', '1', '1');
INSERT INTO `resource_sec_category` VALUES ('2', '话剧音乐剧', '1', '1');
INSERT INTO `resource_sec_category` VALUES ('3', '儿童亲子', '1', '1');
INSERT INTO `resource_sec_category` VALUES ('4', '音乐会', '1', '1');
INSERT INTO `resource_sec_category` VALUES ('5', '展览活动', '1', '1');
INSERT INTO `resource_sec_category` VALUES ('6', '舞蹈芭蕾', '1', '0');
INSERT INTO `resource_sec_category` VALUES ('7', '戏曲综艺', '1', '0');
INSERT INTO `resource_sec_category` VALUES ('8', '休闲娱乐', '1', '0');

-- ----------------------------
-- Table structure for `resource_third_category`
-- ----------------------------
DROP TABLE IF EXISTS `resource_third_category`;
CREATE TABLE `resource_third_category` (
  `THIRD_ID` int(11) NOT NULL COMMENT '资源的三级分类_ID',
  `THIRD_NAME` varchar(16) DEFAULT NULL COMMENT '资源的三级分类名称',
  `SEC_ID` int(11) DEFAULT NULL COMMENT '资源的二级分类_ID',
  PRIMARY KEY (`THIRD_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='资源的三级分类:\r\n如: \r\n1: 流行\r\n \r\n\r\n2: 甄子丹';

-- ----------------------------
-- Records of resource_third_category
-- ----------------------------
INSERT INTO `resource_third_category` VALUES ('1001', '其他', '1');
INSERT INTO `resource_third_category` VALUES ('1002', '小型现场', '1');
INSERT INTO `resource_third_category` VALUES ('1003', '摇滚', '1');
INSERT INTO `resource_third_category` VALUES ('1004', '民族', '1');
INSERT INTO `resource_third_category` VALUES ('1005', '流行', '1');
INSERT INTO `resource_third_category` VALUES ('1006', '美声', '1');
INSERT INTO `resource_third_category` VALUES ('2001', '其他', '2');
INSERT INTO `resource_third_category` VALUES ('2002', '歌剧', '2');
INSERT INTO `resource_third_category` VALUES ('2003', '歌舞剧', '2');
INSERT INTO `resource_third_category` VALUES ('2004', '话剧', '2');
INSERT INTO `resource_third_category` VALUES ('2005', '音乐剧', '2');
INSERT INTO `resource_third_category` VALUES ('3001', '儿童剧', '3');
INSERT INTO `resource_third_category` VALUES ('3002', '儿童活动', '3');
INSERT INTO `resource_third_category` VALUES ('3003', '儿童音乐会', '3');
INSERT INTO `resource_third_category` VALUES ('3004', '其他', '3');
INSERT INTO `resource_third_category` VALUES ('3005', '童声合唱', '3');
INSERT INTO `resource_third_category` VALUES ('4001', '主题', '4');
INSERT INTO `resource_third_category` VALUES ('4002', '交响', '4');
INSERT INTO `resource_third_category` VALUES ('4003', '其他', '4');
INSERT INTO `resource_third_category` VALUES ('4004', '动漫影视', '4');
INSERT INTO `resource_third_category` VALUES ('4005', '声歌', '4');
INSERT INTO `resource_third_category` VALUES ('4006', '室内乐', '4');
INSERT INTO `resource_third_category` VALUES ('5001', '其他', '5');
INSERT INTO `resource_third_category` VALUES ('5002', '动漫影视', '5');
INSERT INTO `resource_third_category` VALUES ('6001', '其他', '6');
INSERT INTO `resource_third_category` VALUES ('6002', '现代舞', '6');
INSERT INTO `resource_third_category` VALUES ('6003', '舞剧', '6');
INSERT INTO `resource_third_category` VALUES ('6004', '芭蕾舞', '6');
INSERT INTO `resource_third_category` VALUES ('7001', '其他', '7');
INSERT INTO `resource_third_category` VALUES ('7002', '戏曲', '7');
INSERT INTO `resource_third_category` VALUES ('7003', '相声小品', '7');
INSERT INTO `resource_third_category` VALUES ('7004', '综艺', '7');
INSERT INTO `resource_third_category` VALUES ('7005', '脱口秀', '7');
INSERT INTO `resource_third_category` VALUES ('7006', '马戏杂技', '7');
INSERT INTO `resource_third_category` VALUES ('8001', '主题公园', '8');
INSERT INTO `resource_third_category` VALUES ('8002', '活动派对', '8');
INSERT INTO `resource_third_category` VALUES ('8003', '景点门票', '8');
INSERT INTO `resource_third_category` VALUES ('8004', '户外活动', '8');
INSERT INTO `resource_third_category` VALUES ('8005', '展会讲座', '8');
INSERT INTO `resource_third_category` VALUES ('8006', '其他', '8');

-- ----------------------------
-- Table structure for `resource_top_category`
-- ----------------------------
DROP TABLE IF EXISTS `resource_top_category`;
CREATE TABLE `resource_top_category` (
  `TOP_ID` int(11) NOT NULL COMMENT '资源的一级分类_ID',
  `TOP_NAME` varchar(16) DEFAULT NULL COMMENT '一级分类的名称',
  PRIMARY KEY (`TOP_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='资源的一级分类:\r\n如:\r\n 1: 演出\r\n 2: 电影\r\n ';

-- ----------------------------
-- Records of resource_top_category
-- ----------------------------
INSERT INTO `resource_top_category` VALUES ('1', '演出');
INSERT INTO `resource_top_category` VALUES ('2', '电影');
INSERT INTO `resource_top_category` VALUES ('3', '体育');

-- ----------------------------
-- Table structure for `showvenue_info`
-- ----------------------------
DROP TABLE IF EXISTS `showvenue_info`;
CREATE TABLE `showvenue_info` (
  `VENUE_ID` int(11) NOT NULL COMMENT '演出场馆_ID',
  `VENUE_PIC` varchar(128) DEFAULT NULL COMMENT '场馆的图片',
  `VENUE_NAME` varchar(128) DEFAULT NULL COMMENT '场馆的名称',
  `VENUE_ADDRESS` varchar(128) DEFAULT NULL COMMENT '场馆的地址',
  `VENUE_PHONE` varchar(128) DEFAULT NULL COMMENT '场馆的联系电话',
  `VENUE_INTRODUCE` varchar(256) DEFAULT NULL COMMENT '场馆的详细介绍',
  `REGION_THIRD_ID` int(11) DEFAULT NULL COMMENT '地区的三级分类_ID',
  `ISRECOMMEND` int(11) DEFAULT NULL,
  PRIMARY KEY (`VENUE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='演出场地：\r\n如：\r\n1: 乐视体育生态中心  地址：复兴路69号(近五棵松地铁)  电话：0106';

-- ----------------------------
-- Records of showvenue_info
-- ----------------------------
INSERT INTO `showvenue_info` VALUES ('1', 'static/images/place_1.jpg', '世纪剧院', '亮马桥路40号', '010-64628470', null, '1', '1');
INSERT INTO `showvenue_info` VALUES ('2', 'static/images/place_2.jpg', '京演民族文化宫大剧院', '复兴门内大街49号 ', '010-83195318', null, '1', '1');
INSERT INTO `showvenue_info` VALUES ('3', null, '格瓦拉生活·糖果Live', '和平西街79号 雍和宫桥路北50米', '010-64255677;010-64255677', null, '1', null);
INSERT INTO `showvenue_info` VALUES ('4', null, '北京首都体育馆', '西直门外白石桥5号', '010-88318421;010-68350077', null, '1', null);
INSERT INTO `showvenue_info` VALUES ('5', null, '国家体育场(鸟巢)', '国家体育场西路1号', '4001100100;4001100100', null, '1', null);
INSERT INTO `showvenue_info` VALUES ('6', null, '北京展览馆剧场', '西直门外大街135号北京展览馆内', '010-68354455', null, '1', null);
INSERT INTO `showvenue_info` VALUES ('7', null, '北京音乐厅', '北新华街1号(西长安街六部口西南角)', '010-66057006;010-66055812', null, '1', null);
INSERT INTO `showvenue_info` VALUES ('8', null, '北京保利剧院', '东直门南大街14号保利大厦', '010-65065345', null, '1', null);

-- ----------------------------
-- Table structure for `site_info`
-- ----------------------------
DROP TABLE IF EXISTS `site_info`;
CREATE TABLE `site_info` (
  `SITE_ID` int(11) NOT NULL COMMENT '场次_ID',
  `SITE_NAME` varchar(32) DEFAULT NULL COMMENT '场次名称',
  `SITE_TIME` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '场次演出时间',
  `LIMIT_COUNTS` int(11) DEFAULT NULL COMMENT '一次下单的票的限购数',
  `SITE_TYPE_ID` int(11) DEFAULT NULL COMMENT '场次的类型',
  PRIMARY KEY (`SITE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='场次信息:\r\n如:\r\n 1: 04月22日  周六 19:00';

-- ----------------------------
-- Records of site_info
-- ----------------------------
INSERT INTO `site_info` VALUES ('1', 'aa', '2017-04-06 12:18:34', '6', '1');
INSERT INTO `site_info` VALUES ('2', null, '2017-08-28 19:30:00', '6', '1');
INSERT INTO `site_info` VALUES ('3', null, '2017-04-01 21:00:00', '6', '1');
INSERT INTO `site_info` VALUES ('4', null, '2017-06-24 19:30:00', '6', '1');
INSERT INTO `site_info` VALUES ('5', null, '2017-09-09 19:00:00', '6', '1');
INSERT INTO `site_info` VALUES ('6', null, '2017-04-21 19:45:00', '6', '1');
INSERT INTO `site_info` VALUES ('7', null, '2017-04-05 14:25:15', '6', '1');
INSERT INTO `site_info` VALUES ('8', null, '2017-09-22 19:30:00', '6', '1');
INSERT INTO `site_info` VALUES ('9', null, '2017-09-23 19:30:00', '6', '1');
INSERT INTO `site_info` VALUES ('10', null, '2017-09-24 19:30:00', '6', '1');

-- ----------------------------
-- Table structure for `site_type`
-- ----------------------------
DROP TABLE IF EXISTS `site_type`;
CREATE TABLE `site_type` (
  `TYPE_ID` int(11) NOT NULL COMMENT '场次类型_ID',
  `TYPE_NAME` varchar(32) DEFAULT NULL COMMENT '类型名称',
  PRIMARY KEY (`TYPE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='场次类型:\r\n如:\r\n1: 特惠看';

-- ----------------------------
-- Records of site_type
-- ----------------------------
INSERT INTO `site_type` VALUES ('1', '普通场');

-- ----------------------------
-- Table structure for `ticket_info`
-- ----------------------------
DROP TABLE IF EXISTS `ticket_info`;
CREATE TABLE `ticket_info` (
  `TICKET_ID` int(11) NOT NULL COMMENT '票种_ID',
  `TICKET_NAME` varchar(32) DEFAULT NULL COMMENT '票种名称',
  `TICKET_COUNTS` int(11) DEFAULT NULL COMMENT '该票种的可购票数',
  `TICKET_PRICE` float DEFAULT NULL COMMENT '票种的单价',
  `TICKET_OLD_PRICE` float DEFAULT NULL COMMENT '票种的过去的价格',
  `TICKET_TYPE_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`TICKET_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='票种的信息:\r\n如:\r\n 1: 60元(学生票)';

-- ----------------------------
-- Records of ticket_info
-- ----------------------------
INSERT INTO `ticket_info` VALUES ('1', 'aa', '100', '100', null, null);
INSERT INTO `ticket_info` VALUES ('2', null, '72', '180', null, null);
INSERT INTO `ticket_info` VALUES ('3', null, '80', '280', null, null);
INSERT INTO `ticket_info` VALUES ('4', null, '100', '380', null, null);
INSERT INTO `ticket_info` VALUES ('5', null, '100', '480', null, null);
INSERT INTO `ticket_info` VALUES ('6', null, '100', '177', null, null);
INSERT INTO `ticket_info` VALUES ('7', null, '80', '277', null, null);
INSERT INTO `ticket_info` VALUES ('8', null, '99', '377', null, null);
INSERT INTO `ticket_info` VALUES ('9', null, '92', '520', null, null);
INSERT INTO `ticket_info` VALUES ('10', 'VIP 877元', '99', '877', null, null);
INSERT INTO `ticket_info` VALUES ('11', '套票1000元（520 * 2）', '99', '1000', null, '1');
INSERT INTO `ticket_info` VALUES ('12', '套票1314元(877 * 2)', '92', '1314', null, '1');
INSERT INTO `ticket_info` VALUES ('13', '普通票120元(含一杯赠酒)', '100', '120', null, null);
INSERT INTO `ticket_info` VALUES ('14', 'VIP票180元(可上二层)', '100', '180', null, null);
INSERT INTO `ticket_info` VALUES ('15', null, '100', '380', null, null);
INSERT INTO `ticket_info` VALUES ('16', null, '100', '680', null, null);
INSERT INTO `ticket_info` VALUES ('17', '980元(场地)', '100', '980', null, null);
INSERT INTO `ticket_info` VALUES ('18', '980元(看台)', '100', '980', null, null);
INSERT INTO `ticket_info` VALUES ('19', '套票1600元(看台980*2)', '100', '1600', null, null);
INSERT INTO `ticket_info` VALUES ('20', '看台280元', '100', '280', null, null);
INSERT INTO `ticket_info` VALUES ('21', '看台380元', '99', '380', null, null);
INSERT INTO `ticket_info` VALUES ('22', '看台580元', '100', '580', null, null);
INSERT INTO `ticket_info` VALUES ('23', '看台680元', '100', '680', null, null);
INSERT INTO `ticket_info` VALUES ('24', '内场980元', '100', '980', null, null);
INSERT INTO `ticket_info` VALUES ('25', '内场1280元', '100', '1280', null, null);
INSERT INTO `ticket_info` VALUES ('26', '内场1680元', '100', '1680', null, null);
INSERT INTO `ticket_info` VALUES ('27', '套票1000元(580*2)', '100', '1000', null, null);
INSERT INTO `ticket_info` VALUES ('28', null, '100', '180', null, null);
INSERT INTO `ticket_info` VALUES ('29', null, '100', '280', null, null);
INSERT INTO `ticket_info` VALUES ('30', null, '100', '480', null, null);
INSERT INTO `ticket_info` VALUES ('31', null, '100', '680', null, null);
INSERT INTO `ticket_info` VALUES ('32', null, '100', '880', null, null);
INSERT INTO `ticket_info` VALUES ('33', '800元(480*2)', '100', '800', null, null);
INSERT INTO `ticket_info` VALUES ('34', '1200元(680*2)', '96', '1200', null, null);
INSERT INTO `ticket_info` VALUES ('35', null, '100', '100', null, null);
INSERT INTO `ticket_info` VALUES ('36', null, '100', '180', null, null);
INSERT INTO `ticket_info` VALUES ('37', null, '100', '280', null, null);
INSERT INTO `ticket_info` VALUES ('38', null, '100', '380', null, null);
INSERT INTO `ticket_info` VALUES ('39', null, '100', '480', null, null);
INSERT INTO `ticket_info` VALUES ('40', null, '100', '680', null, null);
INSERT INTO `ticket_info` VALUES ('41', null, '100', '180', null, null);
INSERT INTO `ticket_info` VALUES ('42', null, '100', '280', null, null);
INSERT INTO `ticket_info` VALUES ('43', null, '99', '380', null, null);
INSERT INTO `ticket_info` VALUES ('44', null, '100', '480', null, null);
INSERT INTO `ticket_info` VALUES ('45', null, '100', '680', null, null);
INSERT INTO `ticket_info` VALUES ('46', null, '100', '180', null, null);
INSERT INTO `ticket_info` VALUES ('47', null, '100', '280', null, null);
INSERT INTO `ticket_info` VALUES ('48', null, '100', '380', null, null);
INSERT INTO `ticket_info` VALUES ('49', null, '100', '480', null, null);
INSERT INTO `ticket_info` VALUES ('50', null, '100', '680', null, null);
INSERT INTO `ticket_info` VALUES ('51', null, '100', '180', null, null);
INSERT INTO `ticket_info` VALUES ('52', null, '100', '280', null, null);
INSERT INTO `ticket_info` VALUES ('53', null, '100', '380', null, null);
INSERT INTO `ticket_info` VALUES ('54', null, '100', '480', null, null);
INSERT INTO `ticket_info` VALUES ('55', null, '100', '680', null, null);

-- ----------------------------
-- Table structure for `ticket_type`
-- ----------------------------
DROP TABLE IF EXISTS `ticket_type`;
CREATE TABLE `ticket_type` (
  `TYPE_ID` int(11) NOT NULL,
  `TYPE_NAME` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`TYPE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ticket_type
-- ----------------------------
INSERT INTO `ticket_type` VALUES ('1', '套票');

-- ----------------------------
-- Table structure for `user_base_info`
-- ----------------------------
DROP TABLE IF EXISTS `user_base_info`;
CREATE TABLE `user_base_info` (
  `USER_ID` int(11) NOT NULL COMMENT '用户_ID',
  `ICON` varchar(128) DEFAULT NULL COMMENT '用户头像',
  `NAME` varchar(32) DEFAULT NULL,
  `NICKNAME` varchar(16) DEFAULT NULL COMMENT '昵称',
  `PASSWORD` varchar(16) DEFAULT NULL COMMENT '密码',
  `BIRTH` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '生日',
  `GENDER` int(11) DEFAULT NULL COMMENT '性别',
  PRIMARY KEY (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户的基础信息:\r\n如：\r\n 1: 昵称\r\n 3：密码';

-- ----------------------------
-- Records of user_base_info
-- ----------------------------
INSERT INTO `user_base_info` VALUES ('2077615322', 'icon/705b53cf-5837-44bd-8314-245104de6eed.png', 'G', 'Hey你好', 'a', '1988-01-01 08:00:00', '0');

-- ----------------------------
-- Table structure for `user_bind_info`
-- ----------------------------
DROP TABLE IF EXISTS `user_bind_info`;
CREATE TABLE `user_bind_info` (
  `USER_ID` int(11) DEFAULT NULL COMMENT '用户_ID',
  `PHONE` varchar(16) DEFAULT NULL COMMENT '用户绑定的手机号'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户的绑定信息:\r\n如:\r\n 1: 电话';

-- ----------------------------
-- Records of user_bind_info
-- ----------------------------
INSERT INTO `user_bind_info` VALUES ('2077615322', '1');

-- ----------------------------
-- Table structure for `user_concerns`
-- ----------------------------
DROP TABLE IF EXISTS `user_concerns`;
CREATE TABLE `user_concerns` (
  `CONCERN_ID` int(11) NOT NULL,
  `USER_ID` int(11) DEFAULT NULL COMMENT '用户_ID',
  `RESOURCE_ID` int(11) DEFAULT NULL COMMENT '资源_ID',
  `REGION_ID` int(11) DEFAULT NULL COMMENT '地区_ID',
  `VENUE_ID` int(11) DEFAULT NULL COMMENT '演出场馆_ID',
  `SITE_ID` int(11) DEFAULT NULL COMMENT '演出场次_ID',
  `TICKET_ID` int(11) DEFAULT NULL COMMENT '票种_ID',
  `INTIME` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '关注时间',
  `ISDEL` int(11) DEFAULT NULL,
  PRIMARY KEY (`CONCERN_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户的关注表';

-- ----------------------------
-- Records of user_concerns
-- ----------------------------
