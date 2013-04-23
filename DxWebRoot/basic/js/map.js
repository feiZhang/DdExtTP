/**
 * @author malijie_2007@126.com 
 * @vserion 0.1
 * 利用百度地图提供的api完成一下功能
 * 1、能够在地图上进行多点标注
 * 2、能够对地图上标注点进行说明。
 */

(function($){

	/**
	 * @param string city  显示该城市的地图
	 * @param json   aimData 被标注的信息体
	 *                       例子 
	 * 						 {addr:"文化路128号"，name:"大象通信", html:"<p>郑州大象公司所在地</p>", lng = 113.695781, lat = 34.730864} 
	 *                       其中 lng,lat 代表经度和纬度，可有可无，如果有将按照其生成坐标点
	 *                       或着
	 *                       [{addr:"文化路陈寨", name:"大象通信", html: "<p>大象通信</p>"},{addr:"文化路128号", name:"大象通信", html: "<p>大象通信</p>", lng :113.689313, lat:34.769065}]
	 *                       这样传递数组形式，将标注多个位置
	 * @param json   infoFormat 显示标注点窗口的信息格式，例子{title:'简要',width:290, height:160}
	 * @param string mapContainer 显示地图的容器的id 默认为map
	 */
	$.Map = function(city, aimData, mapContainer){
		var _this = this;
		//地图默认容器
		if (undefined != arguments[2]) {
			$.Map.infoFomat = arguments[2];
		}
		
		if (typeof this != "object") {
			return new $.Map(city, aimData, infoFormat, mapContainer);
		}	
		//实例化地图类
		var map = new BMap.Map(mapContainer);
		map.centerAndZoom(city, 12);
		map.addControl(new BMap.NavigationControl());
		map.enableScrollWheelZoom(); 
		
		
		/**
		 * 根据目标对象是否拥有经度、纬度信息做处理
		 * @param object aimData  目标对象
		 * @param int isSetCenter 是否设置标注点为地图中心 0不设置，1设置 默认为0
		 */
		_this.chooseDeal = function(aimData) {
			var isSetCenter = (2 == arguments.length && 1 == arguments[1]) ? 1 : 0;  
			if (undefined != aimData.lng && "" != aimData.lng && undefined != aimData.lat && "" != aimData.lat) {
				var p = new BMap.Point(aimData.lng, aimData.lat);
				var m = $.Map.setMarker(map, p, aimData, isSetCenter);
				$.Map.setMarkerListener(m);
			} else {
				$.Map.getPoint(map, city, aimData, isSetCenter);
			}
		} // end _this.chooseDeal
				
		if ($.isArray(aimData)) {
			for (var i = 0; i < aimData.length; i++) {
				_this.chooseDeal(aimData[i]);
			}
		} else {
			_this.chooseDeal(aimData);
		}
		
		
	}
	
	/**
	 * 定义地图类全局静态变量
	 */
	$.Map.infoFomat = {title:'简要',width:290, height:160}; //设置消息框的大小及标题
	
	
	/**
	 * 显示消息框
	 * @param object map 地图对象实例
	 * @param json   aimData 被标注的信息体
	 * @returns object  返回百度SearchInfoWindow实例
	 */
	$.Map.setInfoBox = function(map, aimData){
		var title = $.Map.infoFomat.title;
		if (undefined != aimData.name && "" != aimData.name) {
			title = aimData.name;
		}
		return new BMapLib.SearchInfoWindow(map, aimData.html, {
		       title  : title,      //标题
		       width  : $.Map.infoFomat.width,      //宽度
		       height : $.Map.infoFomat.height,     //高度
		       panel  : "panel",               //检索结果面板
		       enableAutoPan : true,           //自动平移
		       searchTypes   :[]
		});
		
	}
	
	/**
	 * 根据坐标创建marker
	 * @param object map 地图实例
	 * @param object p   坐标
	 * @param json   aimData 被标注的信息体
	 * @param int    isSetCenter 是否设置标注点为地图中心 0不设置， 1 设置
	 * @return object  marker对象
	 */
	$.Map.setMarker = function (map, p, aimData) {
		var marker = new BMap.Marker(p);
	    map.addOverlay(marker);
	    marker.aimData = aimData;
	    var info = new BMap.InfoWindow(aimData.name);
	    info.disableCloseOnClick();
	    marker.openInfoWindow(info);
	    if (4 == arguments.length && 1 == arguments[3]) {
	    	marker.map.setCenter(marker.getPosition());
	    }	    
	    return marker;
	}
	
	/**
	 * 设置marker上的监听事件
	 * @param object marker 被添加事件的对象
	 */
	$.Map.setMarkerListener = function(marker) {
		marker.addEventListener("click", function(e){
			//this.map.setCenter(this.getPosition());
			$.Map.setInfoBox(this.map, this.aimData).open(this);
		});
	}
	
	/**
	 * 根据地址获取坐标
	 * @param object   map          地图对象
	 * @param string   city         在指定的城市搜索位置
	 * @param json     aimData      被标注的信息体
	 * @param int      isSetCenter  是否设置标记点为地图中心
	 */
	$.Map.getPoint = function(map, city, aimData, isSetCenter) {
		// 创建地址解析器实例
		var myGeo = new BMap.Geocoder();
		// 将地址解析结果显示在地图上,并调整地图视野
		myGeo.getPoint(aimData.addr, function(point){
			if (point) {
				var m = $.Map.setMarker(map, point, aimData, isSetCenter);
				$.Map.setMarkerListener(m);
		  	}
		}, city);
	}
	
})(jQuery);