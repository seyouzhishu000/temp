/**
 *模拟数据
 *author 作者
 */
define(['../../../node_modules/mockjs/dist/mock-min'],function(Mock){
	//地址
<<<<<<< HEAD
	Mock.mock(/(\/community\/query|\/community\/query)/,
=======
	Mock.mock(/\/\/localhost:8080\/community\/query/,
>>>>>>> a1b2cfb1e85f0b86fe283abce03f0cf7303f2a04
		{
			"resultcode":1, //1成功 0失败
			"result|2-5": [
				{
					"id": 1,
					"code": "mky",
					"name|1-2": "铭科苑"
				},
				{
					"id": 2,
					"code": "xlc",
					"name": "新龙城"
				}
			],
			"resultmsg":"获取成功"
		}
	);
	//分类
<<<<<<< HEAD
	Mock.mock(/(\/lstype\/query|\/lstype\/query)/,
=======
	Mock.mock(/\/\/localhost:8080\/lstype\/query/,
>>>>>>> a1b2cfb1e85f0b86fe283abce03f0cf7303f2a04
		{
			"resultcode":1,
			"result": [
				{
					"id": 1,
					"code": "qb",
					"name": "全部"
				},
				{
					"id": 2,
					"code": "ls",
					"name": "零食"
				},
				{
					"id": 3,
					"code": "rh",
					"name": "日化"
				}
			],
			"resultmsg":"获取成功"
		}
	);
	//list
<<<<<<< HEAD
	Mock.mock(/(\/ls\/query|\/ls\/query)/,
=======
	Mock.mock(/\/\/localhost:8080\/ls\/query/,
>>>>>>> a1b2cfb1e85f0b86fe283abce03f0cf7303f2a04
		{
			"result": {
				"firstPage": true,
				"lastPage": false,
<<<<<<< HEAD
				"list|0-2": [
=======
				"list|2": [
>>>>>>> a1b2cfb1e85f0b86fe283abce03f0cf7303f2a04
				  {
				    "code": "Lyltsbss001",
				    "count": "12",
				    "detail": "百事可乐330ml听装",
				    "id": "8",
				    "marPrice": "2.00",
				    "price": "1.80",
				    "url": "http://www.earthcenter.com.cn/Lyltsbss001"
				  },
				  {
				    "code": "Lyltsbss006",
				    "count": "12",
				    "detail": "百事七喜330ml听装",
				    "id": "13",
				    "marPrice": "2.00",
				    "price": "1.80",
				    "url": "http://www.earthcenter.com.cn/Lyltsbss006"
				  },
				  {
				    "code": "Lyltsbss102",
				    "count": "12",
				    "detail": "百事可乐600ml",
				    "id": "9",
				    "marPrice": "3.00",
				    "price": "2.50",
				    "url": "http://www.earthcenter.com.cn/Lyltsbss102"
				  },
				  {
				    "code": "Lyltsbss104",
				    "count": "12",
				    "detail": "百事美年达桃味600ml",
				    "id": "11",
				    "marPrice": "3.00",
				    "price": "2.50",
				    "url": "http://www.earthcenter.com.cn/Lyltsbss104"
				  },
				  {
				    "code": "Lyltsbss105",
				    "count": "12",
				    "detail": "百事美年达橙味600ml",
				    "id": "12",
				    "marPrice": "3.00",
				    "price": "2.50",
				    "url": "http://www.earthcenter.com.cn/Lyltsbss105"
				  }
				],
				"pageNumber": 1,
				"pageSize": 5,
				"totalPage": 3,
				"totalRow": 11
			},
			"resultcode": "1",
			"resultmsg": "查询成功"
		}
	);
	//购物车
<<<<<<< HEAD
	Mock.mock(/(\/shopping\/add|\/shopping\/add)/,
=======
	Mock.mock(/\/\/localhost:8080\/shopping\/add/,
>>>>>>> a1b2cfb1e85f0b86fe283abce03f0cf7303f2a04
		{
			"resultcode":1, //1成功 0失败
			"result": [
				{
					"uid": "22222222", //用户id
					"code": "kkkl", //商品的唯一标识
					"number": "1" //商品数量
				}
			],
			"resultmsg":"获取成功"
		}
	);
});