const merchants = [
  {
    id: 1,
    name: "瑞幸咖啡 Luckin Coffee",
    station: "珠江新城",
    line: "3号线 / 5号线",
    exit: "A1口",
    category: "好吃",
    sorts: ["nearby", "hot", "latest"],
    status: "营业中",
    statusClass: "status-open",
    price: "￥18起",
    hours: "07:30 - 22:00",
    walk: "步行约4分钟",
    phone: "4000800100",
    phoneText: "4000-800-100",
    couponTitle: "悠圈咖啡券",
    couponValue: "新客 6.8 折",
    summary: "通勤友好的咖啡补给点，适合上班前和午后。",
    description:
      "瑞幸和广州地铁的通勤场景很贴合，用户可以在出站后快速取餐，非常适合做悠圈里的高频刚需商家。",
    guide:
      "建议在早高峰前后错峰取餐，珠江新城站周边写字楼密集，适合放在“站点精选”的头部运营位。",
    source: "品牌信息与联系方式参考公开品牌资料页；图片使用 Wikimedia Commons 上的瑞幸门店实景照片。",
    tags: ["咖啡", "通勤补给", "轻食"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Luckin%20coffee.jpg",
    link: "http://www.lkcoffee.com",
  },
  {
    id: 2,
    name: "广州酒家",
    station: "公园前",
    line: "1号线 / 2号线",
    exit: "J口附近",
    category: "好吃",
    sorts: ["nearby", "hot", "favorite"],
    status: "热门推荐",
    statusClass: "status-hot",
    price: "￥80起",
    hours: "营业时间以门店为准",
    walk: "步行约7分钟",
    phone: "4001023388",
    phoneText: "400-1023-388",
    couponTitle: "悠圈早茶券",
    couponValue: "满100减20",
    summary: "老字号广府味代表，适合游客与本地人一起吃。",
    description:
      "广州酒家非常适合放进悠好吃里，能与公园前、陈家祠等老城站点形成很强的内容联动。",
    guide: "更适合周末和游客场景，可与北京路和老城步行路线一起打包推荐。",
    source: "客服与品牌信息参考广州酒家官网；图片使用 Wikimedia Commons 的点心类公共授权照片作为示意图。",
    tags: ["广府味", "点心", "老字号"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dim%20Sum%20for%20One.jpg",
    link: "https://www.gzr.com.cn/",
  },
  {
    id: 3,
    name: "都会尚膳自助餐厅",
    station: "体育西路",
    line: "1号线 / 3号线",
    exit: "G口附近",
    category: "好吃",
    sorts: ["favorite", "latest", "nearby"],
    status: "可预订",
    statusClass: "status-open",
    price: "价格以餐厅实时为准",
    hours: "以酒店餐饮营业时段为准",
    walk: "步行约6分钟",
    phone: "02089928888",
    phoneText: "020-8992-8888",
    couponTitle: "悠圈餐饮礼",
    couponValue: "双人餐赠甜品",
    summary: "酒店内自助餐厅，适合聚会与商务餐叙。",
    description:
      "这类餐饮可以补足悠圈不只是快消品牌的形象，适合节日档、聚会档和商务用户的内容需求。",
    guide: "可与正佳商圈、体育西路站夜间消费场景一起组合成都市生活攻略。",
    source: "餐厅信息参考万豪官网餐饮页面；封面图使用万豪官网公开餐厅图片链接。",
    tags: ["自助餐", "聚会", "酒店餐饮"],
    image:
      "https://cache.marriott.com.cn/content/dam/marriott-renditions/CANTI/canti-restaurant-0749-hor-clsc.jpg?downsize=750px:*&interpolation=progressive-bilinear&output-quality=70",
    link: "https://www.marriott.com.cn/hotels/canti-guangzhou-marriott-hotel-tianhe/overview/",
  },
  {
    id: 4,
    name: "广州塔",
    station: "广州塔",
    line: "3号线 / APM线",
    exit: "B口附近",
    category: "好玩",
    sorts: ["nearby", "hot", "favorite"],
    status: "可游玩",
    statusClass: "status-hot",
    price: "票价以官方为准",
    hours: "09:30 - 22:30",
    walk: "步行约6分钟",
    phone: "02089338222",
    phoneText: "020-89338222",
    couponTitle: "悠圈出游券",
    couponValue: "购票立减20元",
    summary: "广州代表性地标，适合夜景、约会和游客打卡。",
    description:
      "广州塔适合作为悠好玩的超级目的地，既有城市地标属性，也适合承接餐饮、文创和夜游消费。",
    guide: "建议在日落后前往，夜间视觉效果最好，可与广州礼物旗舰店一起做联动推荐。",
    source: "电话、地址与开放时间参考广州塔官网；图片使用 Wikimedia Commons 的广州塔夜景照片。",
    tags: ["地标", "夜景", "约会"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20night%2001.jpg",
    link: "https://www.cantontower.com/",
  },
  {
    id: 5,
    name: "广州地铁博物馆",
    station: "万胜围",
    line: "4号线 / 8号线",
    exit: "A口南侧",
    category: "好玩",
    sorts: ["nearby", "latest", "favorite"],
    status: "预约参观",
    statusClass: "status-rest",
    price: "免费预约",
    hours: "周二至周五 10:00-16:00；周末 9:00-17:00",
    walk: "步行约3分钟",
    phone: "",
    phoneText: "以官方微信预约为准",
    couponTitle: "悠圈亲子券",
    couponValue: "免费预约提醒",
    summary: "地铁文化体验空间，适合亲子和周末深度游。",
    description:
      "馆内非常适合做亲子与品牌文化运营位，也是“广州地铁 App 内嵌生活圈”里最有品牌辨识度的内容之一。",
    guide: "万胜围站出站后步行距离短，适合与文创和会展商圈一起做周末路线推荐。",
    source: "开放时间和位置参考广州地铁博物馆公开资料；图片使用 Wikimedia Commons 的馆外入口照片。",
    tags: ["博物馆", "亲子", "地铁文化"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Entrance%2C_Guangzhou_Metro_Museum_20241116-A.jpg/640px-Entrance%2C_Guangzhou_Metro_Museum_20241116-A.jpg",
    link: "https://zh.wikipedia.org/wiki/%E5%B9%BF%E5%B7%9E%E5%9C%B0%E9%93%81%E5%8D%9A%E7%89%A9%E9%A6%86",
  },
  {
    id: 6,
    name: "江岸夜骑站",
    station: "广州塔",
    line: "3号线 / APM线",
    exit: "江边步道方向",
    category: "好玩",
    sorts: ["nearby", "hot", "latest"],
    status: "今晚有局",
    statusClass: "status-hot",
    price: "￥35起",
    hours: "17:00 - 23:30",
    walk: "步行约8分钟",
    phone: "02088886666",
    phoneText: "020-8888-6666",
    couponTitle: "夜骑体验券",
    couponValue: "首单减10元",
    summary: "江边夜骑与轻社交的集合点。",
    description:
      "这类带社群属性的场景能让悠圈不仅是目录，更像广州地铁用户的晚间生活入口。",
    guide: "适合夜游与运动用户，建议与广州塔夜景内容一起在好玩板块下联动露出。",
    source: "演示型商家数据，用于表现悠圈的运动社群类内容和交互结构。",
    tags: ["夜骑", "江边", "社群"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20Night%2020230722.jpg",
    link: "https://example.com/night-ride",
  },
  {
    id: 7,
    name: "广州礼物旗舰店",
    station: "广州塔",
    line: "3号线 / APM线",
    exit: "景区内直达",
    category: "好物",
    sorts: ["nearby", "latest", "favorite"],
    status: "可选购",
    statusClass: "status-open",
    price: "￥39起",
    hours: "09:30 - 22:30",
    walk: "景区内直达",
    phone: "02089338222",
    phoneText: "020-89338222",
    couponTitle: "悠圈文创券",
    couponValue: "满99减15",
    summary: "地标文创与伴手礼购物点，适合顺手购买。",
    description:
      "适合放在悠好物里承接地标流量，也能和广州塔景区夜游内容一起组成组合运营位。",
    guide: "游客和外地访客更容易转化，可作为站点周边“先逛再买”的落点。",
    source: "购物场景和联系方式参考广州塔官网相关入口；图片使用公共授权广州塔夜景示意。",
    tags: ["伴手礼", "文创", "游客向"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20night.jpg",
    link: "https://www.cantontower.com/visitorservice/contactus/",
  },
  {
    id: 8,
    name: "广州地铁票根文创",
    station: "万胜围",
    line: "4号线 / 8号线",
    exit: "A口南侧",
    category: "好物",
    sorts: ["hot", "latest", "favorite"],
    status: "展陈同款",
    statusClass: "status-hot",
    price: "￥29起",
    hours: "随馆开放",
    walk: "步行约3分钟",
    phone: "",
    phoneText: "以现场/官方渠道为准",
    couponTitle: "悠圈票根券",
    couponValue: "收藏页可领",
    summary: "围绕广州地铁票卡文化延展的文创收藏内容。",
    description:
      "这类内容和你截图里的票根、文创、IP 推荐逻辑非常接近，也更符合广州地铁自有文化产品的展示方式。",
    guide: "适合做节日档和收藏专题，也适合和广州地铁博物馆联动。",
    source: "内容灵感来自广州地铁博物馆公开展陈资料；图片使用广州地铁旧票卡公开图片。",
    tags: ["票根", "文创", "收藏"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Guangzhou_Metro_old_tickets.jpg/640px-Guangzhou_Metro_old_tickets.jpg",
    link: "https://zh.wikipedia.org/wiki/%E5%B9%BF%E5%B7%9E%E5%9C%B0%E9%93%81%E5%8D%9A%E7%89%A9%E9%A6%86",
  },
  {
    id: 9,
    name: "地铁博物馆文创店",
    station: "万胜围",
    line: "4号线 / 8号线",
    exit: "A口南侧",
    category: "好物",
    sorts: ["nearby", "latest"],
    status: "新品上架",
    statusClass: "status-open",
    price: "￥49起",
    hours: "随馆开放",
    walk: "步行约3分钟",
    phone: "",
    phoneText: "以现场/官方渠道为准",
    couponTitle: "文创满减券",
    couponValue: "满99减20",
    summary: "适合做广州地铁 IP、玩偶和纪念品推荐。",
    description:
      "这个卡片用来补足“好物”里的多样性，让它不只是票根，也有玩偶、模型和礼盒类商品。",
    guide: "更适合家庭、情侣和游客人群，适合作为礼物或纪念品购买。",
    source: "演示型商家数据，用于表达广州地铁文创运营位与产品矩阵。",
    tags: ["玩偶", "模型", "纪念品"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20Night%2020220820.jpg",
    link: "https://example.com/metro-museum-shop",
  },
  {
    id: 10,
    name: "广州正佳广场万豪酒店",
    station: "体育西路",
    line: "1号线 / 3号线",
    exit: "G口附近",
    category: "好住",
    sorts: ["nearby", "hot", "favorite"],
    status: "可预订",
    statusClass: "status-open",
    price: "房价以实时预订为准",
    hours: "24小时",
    walk: "步行约6分钟",
    phone: "02089928888",
    phoneText: "020-8992-8888",
    couponTitle: "悠圈住店礼",
    couponValue: "到店赠早餐券",
    summary: "连接商圈与地铁的商务酒店，适合商旅和周末短住。",
    description:
      "这个酒店属于非常典型的地铁近、商圈强、品牌清晰的“悠好住”内容，适合作为头部卡片。",
    guide: "体育西路的交通效率高，适合商旅用户和周末城市短住用户。",
    source: "酒店电话、地址和设施信息参考万豪官网；封面图使用万豪官网公开外观图链接。",
    tags: ["酒店", "商旅", "地铁直达"],
    image:
      "https://cache.marriott.com.cn/content/dam/marriott-renditions/CANTI/canti-exterior-0029-hor-feat.jpg?downsize=1920px:*&interpolation=progressive-bilinear&output-quality=70",
    link: "https://www.marriott.com.cn/hotels/canti-guangzhou-marriott-hotel-tianhe/overview/",
  },
  {
    id: 11,
    name: "珠城优居公寓",
    station: "珠江新城",
    line: "3号线 / 5号线",
    exit: "C口附近",
    category: "好住",
    sorts: ["nearby", "favorite", "latest"],
    status: "可预约看房",
    statusClass: "status-open",
    price: "￥468/晚起",
    hours: "全天",
    walk: "步行约5分钟",
    phone: "02088669922",
    phoneText: "020-8866-9922",
    couponTitle: "短住礼遇",
    couponValue: "连住减100",
    summary: "适合白领差旅和城市周末短住的公寓型选择。",
    description:
      "公寓型住宿更贴近年轻白领和长住需求，也更符合悠圈做本地生活平台时的延展方向。",
    guide: "适合珠江新城商务客群，也适合演唱会、节假日短住人群。",
    source: "演示型商家数据，用于补充“好住”板块的产品层次。",
    tags: ["公寓", "短住", "白领"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20(26523097109).jpg",
    link: "https://example.com/youstay-apartment",
  },
  {
    id: 12,
    name: "佛山南海瞻程酒店（千灯湖店）",
    station: "千灯湖",
    line: "广佛线",
    exit: "站点附近",
    category: "好住",
    sorts: ["hot", "latest"],
    status: "可预订",
    statusClass: "status-open",
    price: "房价以实时预订为准",
    hours: "24小时",
    walk: "步行约8分钟",
    phone: "075786668888",
    phoneText: "0757-8666-8888",
    couponTitle: "住店折扣券",
    couponValue: "85折",
    summary: "适合广佛通勤与短途休闲住宿场景。",
    description:
      "你截图里已经出现酒店类卡片，这一类内容能让广佛线周边生活服务也纳入悠圈的视野。",
    guide: "适合跨城出行和周末休闲用户，能增强广州地铁线网外延服务感。",
    source: "演示型商家数据，用于表现广佛沿线酒店卡片样式与交互。",
    tags: ["广佛线", "酒店", "短途"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20Night%2020230722.jpg",
    link: "https://example.com/foshan-hotel",
  },
  {
    id: 13,
    name: "广州地铁地产·江玥上城",
    station: "东平",
    line: "14号线",
    exit: "站点周边",
    category: "好房",
    sorts: ["hot", "latest", "favorite"],
    status: "在售咨询",
    statusClass: "status-hot",
    price: "价格以现场为准",
    hours: "09:00 - 21:00",
    walk: "步行约5分钟",
    phone: "02039998888",
    phoneText: "020-3999-8888",
    couponTitle: "看房礼券",
    couponValue: "到访送咖啡",
    summary: "贴近地铁的居住型项目，适合放入悠好房板块。",
    description:
      "这类项目和你给的截图一致，属于悠圈里很重要的一种内容类型：围绕地铁站点展开的地产与生活服务。",
    guide: "适合和站点周边生活、教育、通勤效率一起打包成房产导购内容。",
    source: "演示型地产数据，用于表现“悠好房”页面结构和商家子站玩法。",
    tags: ["地铁地产", "看房", "通勤"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20night%2001.jpg",
    link: "https://example.com/metro-home-jiangyue",
  },
  {
    id: 14,
    name: "云胜广场",
    station: "白云公园",
    line: "2号线",
    exit: "商圈步行圈",
    category: "好物",
    sorts: ["nearby", "favorite", "latest"],
    status: "TOD办公商业",
    statusClass: "status-open",
    price: "商务商业综合体",
    hours: "以场内业态为准",
    walk: "步行约6分钟",
    phone: "",
    phoneText: "以广场现场信息为准",
    couponTitle: "广场联动券",
    couponValue: "餐饮零售联动礼",
    summary: "广州地铁地产在白云新城打造的综合体产品，可补足地铁系商业资产目录。",
    description:
      "把云胜广场放进悠圈后，广州地铁不仅有住宅项目，也有办公、商业和城市会客厅类产品，产品层次会更完整。",
    guide: "适合与白云新城办公、周边商场和机场走廊用户场景一起呈现。",
    source: "综合体信息参考公开媒体报道：广州地铁地产白云新城项目云胜广场。",
    tags: ["广州地铁地产", "白云新城", "综合体"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20Night%2020220820.jpg",
    link: "https://www.jiemian.com/article/11560578.html",
  },
  {
    id: 15,
    name: "陶陶居",
    station: "陈家祠",
    line: "1号线",
    exit: "D口附近",
    category: "好吃",
    sorts: ["nearby", "hot", "favorite"],
    status: "老字号热门",
    statusClass: "status-hot",
    price: "￥72起",
    hours: "以门店营业时段为准",
    walk: "步行约8分钟",
    phone: "4006231880",
    phoneText: "400-623-1880",
    couponTitle: "悠圈早茶礼",
    couponValue: "点心88折",
    summary: "百年老字号茶楼，适合西关早茶与游客打卡。",
    description:
      "陶陶居非常适合补足陈家祠、西关片区的老广早茶内容，让悠圈的“好吃”不只覆盖 CBD，也覆盖老城经典路线。",
    guide: "适合和陈家祠、西关步行路线联动，周末和节假日更适合做专题推荐位。",
    source: "品牌信息与联系方式参考陶陶居官网联系页；图片为演示型示意图，用于表现老字号早茶卡片。",
    tags: ["早茶", "老字号", "西关"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dim%20Sum%20for%20One.jpg",
    link: "https://www.taotaoju1880.com/",
  },
  {
    id: 16,
    name: "璇玑地中海自助旋转餐厅",
    station: "广州塔",
    line: "3号线 / APM线",
    exit: "广州塔景区内",
    category: "好吃",
    sorts: ["hot", "latest", "favorite"],
    status: "景观热门",
    statusClass: "status-hot",
    price: "约￥400/人",
    hours: "09:30 - 22:30",
    walk: "景区内直达",
    phone: "02089338218",
    phoneText: "020-8933-8218",
    couponTitle: "云端晚餐券",
    couponValue: "双人赠甜品",
    summary: "广州塔 106 层景观型自助餐厅，适合约会与庆祝。",
    description:
      "这是非常典型的目的地型餐饮内容，适合作为“好吃”里的高客单价头部商家，强化广州塔站点的消费想象力。",
    guide: "更适合晚间预订场景，可与广州塔夜景、礼物旗舰店和景区玩法一起组合推荐。",
    source: "餐厅名称、营业时间和预订电话参考广州塔官网餐饮页。",
    tags: ["景观餐厅", "约会", "高空"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20night%2001.jpg",
    link: "https://www.cantontower.com/food/cafeteria/",
  },
  {
    id: 17,
    name: "筷子荟餐厅",
    station: "广州塔",
    line: "3号线 / APM线",
    exit: "广州塔景区内",
    category: "好吃",
    sorts: ["nearby", "latest"],
    status: "营业中",
    statusClass: "status-open",
    price: "以现场菜单为准",
    hours: "09:30 - 22:30",
    walk: "景区内直达",
    phone: "02089338090",
    phoneText: "020-8933-8090",
    couponTitle: "塔下粤味券",
    couponValue: "到店送饮品",
    summary: "广州塔景区内的粤味餐厅，适合景点顺路用餐。",
    description:
      "相比高空自助餐，这家更适合大众化消费场景，能让广州塔站点内容层次更完整。",
    guide: "更适合家庭游客和顺路用餐用户，推荐与广州塔白天游玩路线搭配。",
    source: "餐厅名称、电话和营业时间参考广州塔官网“筷子荟”页面。",
    tags: ["粤菜", "景区餐饮", "家庭"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20Night%2020230722.jpg",
    link: "https://www.cantontower.com/food/chopsticks/",
  },
  {
    id: 18,
    name: "广州太古汇",
    station: "石牌桥",
    line: "3号线",
    exit: "M层连通",
    category: "好玩",
    sorts: ["nearby", "hot", "favorite"],
    status: "商圈热门",
    statusClass: "status-hot",
    price: "商场消费以店铺为准",
    hours: "10:00 - 22:00",
    walk: "地铁连通",
    phone: "",
    phoneText: "商场公开邮箱见官网",
    couponTitle: "商圈礼遇券",
    couponValue: "限时活动券",
    summary: "石牌桥站直连的大型商圈，适合逛街、看展和城市约会。",
    description:
      "太古汇更像一个综合型生活目的地，放在“好玩”里可以承接商圈逛街、活动和城市休闲内容。",
    guide: "可与石牌桥、体育西路、太古汇内品牌门店一起形成多层级子站内容。",
    source: "地址、交通和营业时间参考广州太古汇官网联系页。",
    tags: ["商圈", "逛街", "城市休闲"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20Night%2020220820.jpg",
    link: "https://www.taikoohui.com/zh-cn/about-us/about-us/contact-us",
  },
  {
    id: 19,
    name: "UNIQLO 广州太古汇店",
    station: "石牌桥",
    line: "3号线",
    exit: "M层连通",
    category: "好物",
    sorts: ["nearby", "latest", "favorite"],
    status: "营业中",
    statusClass: "status-open",
    price: "店内售价为准",
    hours: "10:00 - 22:00",
    walk: "地铁连通",
    phone: "02038088420",
    phoneText: "020-3808-8420",
    couponTitle: "悠圈购物券",
    couponValue: "满299减30",
    summary: "通勤与日常购买都高频的服饰类门店。",
    description:
      "这类品牌很适合出现在悠好物里，因为用户对地铁直连、高频刚需和到店转化都比较敏感。",
    guide: "适合和太古汇站点一起做“下班顺手买”的内容推荐。",
    source: "地址、营业时间和店铺电话参考 UNIQLO 中国官网门店页。",
    tags: ["服饰", "高频消费", "地铁直连"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20(26523097109).jpg",
    link: "https://www.uniqlo.com/cn/shop/shop103.html",
  },
  {
    id: 20,
    name: "Sony Store 广州太古汇店",
    station: "石牌桥",
    line: "3号线",
    exit: "D口附近",
    category: "好物",
    sorts: ["nearby", "hot", "favorite"],
    status: "营业中",
    statusClass: "status-open",
    price: "店内售价为准",
    hours: "10:00 - 22:00",
    walk: "步行约4分钟",
    phone: "02038682903",
    phoneText: "020-3868-2903",
    couponTitle: "数码体验券",
    couponValue: "到店赠周边",
    summary: "石牌桥站附近的数码体验门店，适合科技和影音爱好者。",
    description:
      "把 Sony 这类直营体验店放进悠好物，能让内容从文创、伴手礼扩展到数码消费与体验式门店。",
    guide: "适合和太古汇商圈、影音体验和礼品采购内容组合呈现。",
    source: "地址、营业时间、电话和地铁出口信息参考 Sony Store 官方门店页。",
    tags: ["数码", "直营店", "体验式零售"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20night%2001.jpg",
    link: "https://www.sonystyle.com.cn/store/gz_taigu.htm",
  },
  {
    id: 21,
    name: "星巴克臻选广州 K11 店",
    station: "珠江新城",
    line: "3号线 / 5号线",
    exit: "花城汇方向",
    category: "好吃",
    sorts: ["nearby", "latest", "favorite"],
    status: "营业中",
    statusClass: "status-open",
    price: "￥35起",
    hours: "营业时间以门店为准",
    walk: "步行约7分钟",
    phone: "4008206998",
    phoneText: "400-820-6998",
    couponTitle: "咖啡加价礼",
    couponValue: "第二杯半价",
    summary: "适合商务会面和午后短暂停留的精品咖啡空间。",
    description:
      "这类门店能补充珠江新城片区的商务休闲氛围，让悠圈的“好吃”不只有快取咖啡，也有停留型空间。",
    guide: "适合珠江新城写字楼人群和花城广场周边漫步用户。",
    source: "演示型商家数据，用于扩充珠江新城站周边咖啡与商务会面类内容。",
    tags: ["咖啡", "商务", "臻选店"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Luckin%20Coffee.jpg",
    link: "https://www.starbucks.com.cn/",
  },
  {
    id: 22,
    name: "点都德（猎德店）",
    station: "猎德",
    line: "5号线",
    exit: "A口附近",
    category: "好吃",
    sorts: ["nearby", "hot", "favorite"],
    status: "热门推荐",
    statusClass: "status-hot",
    price: "￥78起",
    hours: "营业时间以门店为准",
    walk: "步行约6分钟",
    phone: "020-0000-0000",
    phoneText: "门店电话以现场为准",
    couponTitle: "粤式点心券",
    couponValue: "满120减25",
    summary: "猎德周边高频早茶和聚餐选择。",
    description:
      "猎德站是珠江新城生活圈的重要外延，补一张早茶卡片可以让站点分布更完整，也更有广州味。",
    guide: "适合工作日午餐和周末家人聚餐，与猎德桥夜景路线可以组合推荐。",
    source: "演示型门店数据，用于补充猎德站周边广式餐饮分布。",
    tags: ["早茶", "聚餐", "粤菜"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dim%20Sum%20for%20One.jpg",
    link: "https://example.com/diandude-liede",
  },
  {
    id: 23,
    name: "炳胜品味（珠江新城店）",
    station: "珠江新城",
    line: "3号线 / 5号线",
    exit: "B1口附近",
    category: "好吃",
    sorts: ["hot", "favorite", "latest"],
    status: "商务热门",
    statusClass: "status-hot",
    price: "￥168起",
    hours: "营业时间以门店为准",
    walk: "步行约8分钟",
    phone: "020-0000-0001",
    phoneText: "门店电话以现场为准",
    couponTitle: "商务餐叙礼",
    couponValue: "赠特色甜品",
    summary: "珠江新城商务宴请与正式聚餐的代表选择。",
    description:
      "这类较高客单价的粤菜店能够拉高珠江新城站的生活内容层次，更像成熟产品里的真实商户分布。",
    guide: "适合和写字楼商务场景一起运营，面向商务宴请和节日聚餐用户。",
    source: "演示型门店数据，用于补充珠江新城高客单价餐饮内容。",
    tags: ["商务餐", "粤菜", "聚会"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dim%20Sum%20for%20One.jpg",
    link: "https://example.com/bingsheng-zhujiang",
  },
  {
    id: 24,
    name: "正佳极地海洋世界",
    station: "体育西路",
    line: "1号线 / 3号线",
    exit: "商圈连通",
    category: "好玩",
    sorts: ["nearby", "hot", "favorite"],
    status: "亲子热门",
    statusClass: "status-hot",
    price: "票价以官方为准",
    hours: "营业时间以景区为准",
    walk: "步行约8分钟",
    phone: "020-0000-0002",
    phoneText: "以景区官方为准",
    couponTitle: "亲子套票券",
    couponValue: "家庭票减30",
    summary: "适合亲子和周末出游的天河商圈室内目的地。",
    description:
      "正佳片区本身就是广州地铁生活圈中的高频目的地，把它纳入悠圈更像真实本地生活入口。",
    guide: "更适合周末白天出行，可与正佳购物、餐饮和酒店内容联动。",
    source: "演示型景点数据，用于补充体育西路站的亲子娱乐内容。",
    tags: ["亲子", "室内景点", "商圈"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20Night%2020220820.jpg",
    link: "https://example.com/zhengjia-ocean",
  },
  {
    id: 25,
    name: "广州 K11 购物艺术中心",
    station: "猎德",
    line: "5号线",
    exit: "花城汇方向",
    category: "好玩",
    sorts: ["nearby", "latest", "favorite"],
    status: "城市热门",
    statusClass: "status-open",
    price: "消费以商场为准",
    hours: "以商场营业时段为准",
    walk: "步行约9分钟",
    phone: "020-0000-0003",
    phoneText: "以商场官方为准",
    couponTitle: "艺术商圈券",
    couponValue: "消费满减",
    summary: "融合艺术、零售与餐饮的城市综合体。",
    description:
      "将 K11 放入好玩板块，可以让猎德与珠江新城周边的商业休闲内容更完整，也更贴近年轻客群。",
    guide: "适合逛展、拍照、下午茶和节日快闪活动场景。",
    source: "演示型商场数据，用于补充猎德站周边大型综合体内容。",
    tags: ["艺术商场", "拍照", "零售"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20Night%2020230722.jpg",
    link: "https://example.com/guangzhou-k11",
  },
  {
    id: 26,
    name: "客村江景步道站",
    station: "客村",
    line: "3号线 / 8号线",
    exit: "江边方向",
    category: "好玩",
    sorts: ["nearby", "hot", "latest"],
    status: "夜游推荐",
    statusClass: "status-hot",
    price: "免费",
    hours: "全天",
    walk: "步行约10分钟",
    phone: "",
    phoneText: "公共开放空间",
    couponTitle: "夜游打卡券",
    couponValue: "到点领徽章",
    summary: "适合夜跑、拍桥景和城市漫步的轻目的地。",
    description:
      "客村站是很典型的“不是传统商家，但非常值得纳入生活圈”的节点，能让悠圈更像城市生活产品。",
    guide: "建议安排在傍晚至夜间，可与餐饮和运动类内容组合。",
    source: "演示型城市生活点位，用于补充客村站周边轻户外场景。",
    tags: ["夜景", "Citywalk", "运动"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20night.jpg",
    link: "https://example.com/kecun-riverwalk",
  },
  {
    id: 27,
    name: "广州大剧院观演指南",
    station: "珠江新城",
    line: "3号线 / 5号线 / APM线",
    exit: "花城广场方向",
    category: "好玩",
    sorts: ["favorite", "latest", "hot"],
    status: "演出进行中",
    statusClass: "status-open",
    price: "票价以演出为准",
    hours: "按场次开放",
    walk: "步行约8分钟",
    phone: "",
    phoneText: "以官方演出信息为准",
    couponTitle: "观演福利券",
    couponValue: "周边饮品券",
    summary: "适合文化消费与夜间观演的城市内容点位。",
    description:
      "珠江新城不仅是商圈，也有很强的文化消费属性，加入大剧院类内容会让好玩板块更成熟。",
    guide: "适合与花城广场夜景、咖啡和晚餐路线做联动推荐。",
    source: "演示型文化场馆数据，用于补充珠江新城文化消费场景。",
    tags: ["演出", "文化", "夜生活"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20(26523097109).jpg",
    link: "https://example.com/grand-theatre-guide",
  },
  {
    id: 28,
    name: "万菱汇城市买手店",
    station: "体育西路",
    line: "1号线 / 3号线",
    exit: "商圈方向",
    category: "好物",
    sorts: ["nearby", "latest", "favorite"],
    status: "新品上架",
    statusClass: "status-open",
    price: "商品售价以店内为准",
    hours: "营业时间以商场为准",
    walk: "步行约7分钟",
    phone: "020-0000-0004",
    phoneText: "以门店现场为准",
    couponTitle: "好物购券",
    couponValue: "满200减25",
    summary: "适合年轻人逛街和挑选礼物的小众好物点位。",
    description:
      "把买手店类内容加进来，能让体育西路不只是餐饮和酒店，也能覆盖潮流消费。",
    guide: "适合和万菱汇、正佳、天河城一起构成完整的商圈购物线路。",
    source: "演示型零售数据，用于补充体育西路商圈购物内容。",
    tags: ["买手店", "潮流", "礼物"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20Night%2020220820.jpg",
    link: "https://example.com/mlh-select-shop",
  },
  {
    id: 29,
    name: "广州图书中心",
    station: "公园前",
    line: "1号线 / 2号线",
    exit: "商圈方向",
    category: "好物",
    sorts: ["nearby", "favorite", "latest"],
    status: "营业中",
    statusClass: "status-open",
    price: "图书定价为准",
    hours: "营业时间以书城为准",
    walk: "步行约9分钟",
    phone: "020-0000-0005",
    phoneText: "以门店现场为准",
    couponTitle: "阅读福利券",
    couponValue: "购书95折",
    summary: "适合书籍、文创和周末慢逛的文化消费空间。",
    description:
      "老城站点不只有餐饮，也有比较强的文化消费属性，书城类内容能让公园前更完整。",
    guide: "更适合下午或周末安排，可与咖啡、步行路线和展览内容联动。",
    source: "演示型文化零售数据，用于补充公园前站周边书店类内容。",
    tags: ["书店", "文创", "文化消费"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Guangzhou%20Metro%20Museum.jpg",
    link: "https://example.com/gz-book-center",
  },
  {
    id: 30,
    name: "广百百货（北京路店）",
    station: "公园前",
    line: "1号线 / 2号线",
    exit: "北京路方向",
    category: "好物",
    sorts: ["hot", "nearby", "latest"],
    status: "商圈热门",
    statusClass: "status-hot",
    price: "消费以商场为准",
    hours: "以商场营业时段为准",
    walk: "步行约8分钟",
    phone: "020-0000-0006",
    phoneText: "以商场官方为准",
    couponTitle: "百货满减券",
    couponValue: "满300减40",
    summary: "适合传统商圈消费与伴手礼采购。",
    description:
      "北京路、公园前站附近的大众零售场景值得放进好物里，能覆盖更广的人群和消费层级。",
    guide: "适合游客采购、本地换季购物和商圈顺路消费。",
    source: "演示型百货商场数据，用于补充公园前 / 北京路商圈内容。",
    tags: ["百货", "北京路", "大众消费"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20night%2001.jpg",
    link: "https://example.com/guangbai-beijingroad",
  },
  {
    id: 31,
    name: "广州南站城际酒店",
    station: "广州南站",
    line: "2号线 / 7号线 / 22号线",
    exit: "站点周边",
    category: "好住",
    sorts: ["nearby", "latest", "favorite"],
    status: "可预订",
    statusClass: "status-open",
    price: "房价以实时预订为准",
    hours: "24小时",
    walk: "步行约10分钟",
    phone: "020-0000-0007",
    phoneText: "以酒店官方为准",
    couponTitle: "中转住宿券",
    couponValue: "深夜入住减80",
    summary: "适合高铁中转和短暂停留的效率型酒店选择。",
    description:
      "南站是非常重要的流量入口，把中转型住宿加进去会让悠圈更符合真实出行场景。",
    guide: "适合出差和临时中转用户，和快补给、候车餐饮内容高度匹配。",
    source: "演示型酒店数据，用于补充广州南站周边住宿内容。",
    tags: ["高铁中转", "酒店", "出差"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20Night%2020230722.jpg",
    link: "https://example.com/gzn-hotel",
  },
  {
    id: 32,
    name: "广州塔江景民宿",
    station: "客村",
    line: "3号线 / 8号线",
    exit: "江边方向",
    category: "好住",
    sorts: ["favorite", "latest"],
    status: "可预订",
    statusClass: "status-open",
    price: "￥388/晚起",
    hours: "全天",
    walk: "步行约9分钟",
    phone: "020-0000-0008",
    phoneText: "以民宿平台为准",
    couponTitle: "夜景住宿礼",
    couponValue: "连住9折",
    summary: "适合看广州塔夜景和周末 staycation 的城市民宿。",
    description:
      "相比商务酒店，民宿类内容更适合年轻客群和周末本地度假场景，能让好住更丰富。",
    guide: "适合情侣和周末出游用户，可与广州塔、客村江景步道和夜游内容联动。",
    source: "演示型住宿数据，用于补充客村 / 广州塔周边住宿内容。",
    tags: ["民宿", "夜景", "周末短住"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20night.jpg",
    link: "https://example.com/river-view-bnb",
  },
  {
    id: 33,
    name: "天河短租公寓中心",
    station: "石牌桥",
    line: "3号线",
    exit: "商圈方向",
    category: "好住",
    sorts: ["nearby", "latest"],
    status: "可预约",
    statusClass: "status-open",
    price: "￥328/晚起",
    hours: "全天",
    walk: "步行约6分钟",
    phone: "020-0000-0009",
    phoneText: "以公寓平台为准",
    couponTitle: "短租礼遇券",
    couponValue: "首住减50",
    summary: "适合商圈短住、差旅与展会人群的公寓型选择。",
    description:
      "石牌桥 / 天河商圈非常适合短租和公寓型内容，可以补强好住板块的真实使用场景。",
    guide: "适合短期商务和展会用户，和太古汇、体育西路内容联动自然。",
    source: "演示型短租数据，用于补充石牌桥站周边住宿内容。",
    tags: ["短租", "公寓", "天河"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20(26523097109).jpg",
    link: "https://example.com/tianhe-shortstay",
  },
  {
    id: 34,
    name: "广州地铁地产·琨耀上城",
    station: "嘉禾望岗",
    line: "2号线 / 3号线 / 14号线",
    exit: "站点周边",
    category: "好房",
    sorts: ["hot", "nearby", "latest"],
    status: "在售咨询",
    statusClass: "status-hot",
    price: "价格以现场为准",
    hours: "09:00 - 21:00",
    walk: "步行约7分钟",
    phone: "020-0000-0010",
    phoneText: "以项目案场为准",
    couponTitle: "到访礼券",
    couponValue: "到访送生活礼包",
    summary: "多线换乘站周边的地铁生活型楼盘内容。",
    description:
      "嘉禾望岗这类换乘大站适合承载“轨道交通 + 居住”的价值叙事，也能让好房不只集中在东平。",
    guide: "适合强调通勤效率、家庭配套和换乘便利性。",
    source: "演示型地产数据，用于扩充多线换乘站周边楼盘内容。",
    tags: ["换乘站", "楼盘", "交通便利"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20Night%2020230722.jpg",
    link: "https://example.com/metro-home-kunyao",
  },
  {
    id: 35,
    name: "广州地铁地产·曜城花园",
    station: "万胜围",
    line: "4号线 / 8号线",
    exit: "站点周边",
    category: "好房",
    sorts: ["nearby", "favorite", "latest"],
    status: "可预约看样板间",
    statusClass: "status-open",
    price: "价格以现场为准",
    hours: "09:00 - 21:00",
    walk: "步行约8分钟",
    phone: "020-0000-0011",
    phoneText: "以项目案场为准",
    couponTitle: "看房专享礼",
    couponValue: "到访送地铁文创",
    summary: "适合会展片区与新城居住场景联动展示的楼盘内容。",
    description:
      "万胜围不只有博物馆和文创，也适合承载新城与居住内容，这能让站点生活圈更完整。",
    guide: "适合强调新城生活、会展片区和周边商务配套。",
    source: "演示型地产数据，用于补充万胜围站的居住内容层级。",
    tags: ["会展片区", "新城", "看房"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Guangzhou%20Metro%20Museum.jpg",
    link: "https://example.com/metro-home-yaocheng",
  },
  {
    id: 36,
    name: "广州地铁地产·珠城天寓",
    station: "猎德",
    line: "5号线",
    exit: "站点周边",
    category: "好房",
    sorts: ["favorite", "latest", "hot"],
    status: "公寓热推",
    statusClass: "status-hot",
    price: "价格以现场为准",
    hours: "09:00 - 21:00",
    walk: "步行约6分钟",
    phone: "020-0000-0012",
    phoneText: "以项目案场为准",
    couponTitle: "置业咨询礼",
    couponValue: "预约送咖啡券",
    summary: "更偏 CBD 居住和资产配置型内容。",
    description:
      "猎德 / 珠江新城片区很适合放公寓和高端置业内容，也符合地铁生活圈向更高价值服务延展的思路。",
    guide: "适合强调 CBD 通勤、夜生活便利和高端配套。",
    source: "演示型地产数据，用于补充猎德站周边置业内容。",
    tags: ["公寓", "CBD", "置业"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20night.jpg",
    link: "https://example.com/metro-home-zhucheng",
  },
  {
    id: 37,
    name: "广州地铁地产·南站上城",
    station: "广州南站",
    line: "2号线 / 7号线 / 22号线",
    exit: "站点周边",
    category: "好房",
    sorts: ["nearby", "latest"],
    status: "新上项目",
    statusClass: "status-open",
    price: "价格以现场为准",
    hours: "09:00 - 21:00",
    walk: "步行约10分钟",
    phone: "020-0000-0013",
    phoneText: "以项目案场为准",
    couponTitle: "高铁生活礼",
    couponValue: "预约送交通礼包",
    summary: "围绕广州南站高铁枢纽形成的居住导购内容。",
    description:
      "南站周边楼盘内容能扩展悠圈的空间想象，也很适合做“交通枢纽周边生活圈”的专题页。",
    guide: "适合面向通勤、跨城和改善型居住需求用户。",
    source: "演示型地产数据，用于补充广州南站周边居住内容。",
    tags: ["高铁枢纽", "置业", "通勤"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20Night%2020220820.jpg",
    link: "https://example.com/metro-home-nanzhan",
  },
  {
    id: 38,
    name: "广州地铁地产·客村都会里",
    station: "客村",
    line: "3号线 / 8号线",
    exit: "站点周边",
    category: "好房",
    sorts: ["nearby", "favorite"],
    status: "可预约咨询",
    statusClass: "status-open",
    price: "价格以现场为准",
    hours: "09:00 - 21:00",
    walk: "步行约7分钟",
    phone: "020-0000-0014",
    phoneText: "以项目案场为准",
    couponTitle: "都会看房礼",
    couponValue: "预约送咖啡券",
    summary: "客村片区都会型居住内容，适合年轻改善与城中生活用户。",
    description:
      "客村是非常典型的城市生活节点，把房产内容补进来后，站点画像会更完整，不只是玩和吃。",
    guide: "适合强调城市便利、夜生活资源和通勤平衡。",
    source: "演示型地产数据，用于补充客村站周边居住内容。",
    tags: ["都会居住", "客村", "生活便利"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20(26523097109).jpg",
    link: "https://example.com/metro-home-kecun",
  },
  {
    id: 39,
    name: "长隆欢乐世界",
    station: "汉溪长隆",
    line: "3号线 / 7号线",
    exit: "E口附近",
    category: "好玩",
    sorts: ["hot", "nearby", "favorite"],
    status: "家庭热门",
    statusClass: "status-hot",
    price: "票价以官方为准",
    hours: "10:00 - 21:00",
    walk: "步行约9分钟",
    phone: "4008830083",
    phoneText: "400-883-0083",
    couponTitle: "乐园出游券",
    couponValue: "亲子票减30元",
    summary: "地铁直达的高热度乐园场景，适合家庭和情侣周末出游。",
    description:
      "汉溪长隆是广州轨道交通里非常典型的目的地型站点，把长隆补进来后，悠圈在周末出游场景会完整很多。",
    guide: "更适合周末和节假日，建议和周边酒店、餐饮做组合推荐。",
    source: "品牌与基础信息按公开常识整理，用于高保真原型展示。",
    tags: ["乐园", "亲子", "周末出游"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chimelong%20Paradise.jpg",
    link: "https://www.chimelong.com/",
  },
  {
    id: 40,
    name: "北京路天河城 B区精选店",
    station: "北京路",
    line: "6号线",
    exit: "B口附近",
    category: "好物",
    sorts: ["latest", "nearby", "hot"],
    status: "逛街推荐",
    statusClass: "status-open",
    price: "￥59起",
    hours: "10:00 - 22:00",
    walk: "步行约5分钟",
    phone: "020-0000-0015",
    phoneText: "以商场现场为准",
    couponTitle: "商场零售券",
    couponValue: "满199减30",
    summary: "老城核心商圈里的零售集合场景，适合补足北京路站消费内容。",
    description:
      "北京路是游客与本地人都高频出现的站点，把零售和商圈内容补进来后，公园前到北京路的生活线会更完整。",
    guide: "适合和老城漫步、广州酒家、广百百货等内容串成一条城市消费路线。",
    source: "演示型商圈数据，用于补充北京路站周边零售内容。",
    tags: ["商圈", "零售", "北京路"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Beijing%20Road%20Pedestrian%20Street%20Guangzhou.jpg",
    link: "https://example.com/beijingroad-curation",
  },
  {
    id: 41,
    name: "地铁悠选·东平站店",
    station: "白云东平",
    line: "14号线",
    exit: "站厅便民区",
    category: "好物",
    sorts: ["latest", "nearby", "hot"],
    status: "地铁自营",
    statusClass: "status-hot",
    price: "民生商品为主",
    hours: "08:30 - 22:30",
    walk: "站内可达",
    phone: "",
    phoneText: "以站内门店信息为准",
    couponTitle: "悠选到店券",
    couponValue: "满39减6",
    summary: "广州地铁自营便民超市，覆盖生鲜、零食、饮料与便民服务。",
    description:
      "这是广州地铁自营“地铁悠选”首批门店之一，适合直接放进悠圈，能体现从交通圈转向生活圈的产品逻辑。",
    guide: "适合上班前补给、下班顺手买菜和快递寄存等轻便民场景。",
    source: "门店站点参考广州地铁便民超市公开报道：首批覆盖白云东平、客村、琶洲等8站。",
    tags: ["地铁自营", "超市", "便民服务"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20Night%2020220820.jpg",
    link: "https://gd.chinadaily.com.cn/a/202510/01/WS68dccc3ca310c4deea5eafb7.html",
  },
  {
    id: 42,
    name: "地铁悠选·客村站店",
    station: "客村",
    line: "3号线 / 8号线",
    exit: "换乘通道便民区",
    category: "好物",
    sorts: ["nearby", "hot", "favorite"],
    status: "站内热门",
    statusClass: "status-hot",
    price: "民生商品为主",
    hours: "08:30 - 22:30",
    walk: "站内可达",
    phone: "",
    phoneText: "以站内门店信息为准",
    couponTitle: "站内补给券",
    couponValue: "满29减5",
    summary: "位于高客流换乘站的地铁自营便民超市，适合通勤补给。",
    description:
      "客村站是典型高流量换乘节点，把地铁悠选放在这里能很自然地承接通勤、社区与沿线生活消费。",
    guide: "适合与咖啡、夜骑、客村周边商圈一起做站点生活圈专题。",
    source: "门店站点参考广州地铁便民超市公开报道。",
    tags: ["地铁悠选", "客村", "通勤补给"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20(26523097109).jpg",
    link: "https://gd.chinadaily.com.cn/a/202510/01/WS68dccc3ca310c4deea5eafb7.html",
  },
  {
    id: 43,
    name: "万胜广场",
    station: "万胜围",
    line: "4号线 / 8号线",
    exit: "A口南侧",
    category: "好物",
    sorts: ["nearby", "latest", "favorite"],
    status: "地铁TOD",
    statusClass: "status-open",
    price: "商务商业综合体",
    hours: "以场内业态为准",
    walk: "步行约2分钟",
    phone: "",
    phoneText: "以商场现场为准",
    couponTitle: "TOD 商业礼",
    couponValue: "停车 / 餐饮联动券",
    summary: "广州地铁地产开发的综合体，集商业、写字楼、博物馆于一体。",
    description:
      "万胜广场本身就是很典型的广州地铁自有TOD资产，放进悠圈后，用户会更直观地理解‘地铁不只是线路，也是生活目的地’。",
    guide: "适合和地铁博物馆、文创店、会展片区内容联动推荐。",
    source: "资产属性参考公开资料：广州地铁地产开发的万胜广场综合体。",
    tags: ["广州地铁地产", "TOD", "商业综合体"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Guangzhou%20Metro%20Museum.jpg",
    link: "https://zh.wikipedia.org/wiki/%E4%B8%87%E8%83%9C%E5%B9%BF%E5%9C%BA",
  },
  {
    id: 44,
    name: "荔胜广百广场",
    station: "坑口",
    line: "1号线",
    exit: "站点直连",
    category: "好物",
    sorts: ["nearby", "latest"],
    status: "地铁联营",
    statusClass: "status-open",
    price: "商场零售为主",
    hours: "10:00 - 22:00",
    walk: "站点直连",
    phone: "",
    phoneText: "以商场现场为准",
    couponTitle: "广场消费券",
    couponValue: "零售满200减30",
    summary: "广州地铁地产与广百合作开发的大型商业综合体。",
    description:
      "荔胜广百广场属于很适合在悠圈里承接‘地铁系消费目的地’的位置，尤其适合坑口站周边家庭消费与周末逛街。",
    guide: "更适合做‘坑口站出站即逛’的站点专题。",
    source: "综合体属性参考公开资料：荔胜广百广场由广百与广州地铁地产联合开发。",
    tags: ["广州地铁地产", "广百", "坑口"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20night.jpg",
    link: "https://commons.wikimedia.org/wiki/Category%3ALisheng_Grandbuy_Plaza",
  },
  {
    id: 45,
    name: "广州地铁地产·云平上品",
    station: "白云东平",
    line: "14号线",
    exit: "站点周边",
    category: "好房",
    sorts: ["hot", "latest", "favorite"],
    status: "在售项目",
    statusClass: "status-hot",
    price: "参考价以案场为准",
    hours: "09:00 - 21:00",
    walk: "步行约4分钟",
    phone: "",
    phoneText: "案场信息以公开渠道为准",
    couponTitle: "到访看房礼",
    couponValue: "预约送咖啡券",
    summary: "广州地铁地产白云板块TOD住宅项目，靠近白云东平站。",
    description:
      "云平上品是用户一眼能理解的‘地铁上盖/临站住宅’内容，很适合放进悠好房，并与白云东平站做强绑定。",
    guide: "适合强调山景改善、地铁通勤与家庭居住场景。",
    source: "项目位置与地铁关系参考公开楼盘资料：白云东平站旁。",
    tags: ["TOD住宅", "白云东平", "广州地铁地产"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20Night%2020220820.jpg",
    link: "https://gz.newhouse.fang.com/loupan/2811212306.htm",
  },
  {
    id: 46,
    name: "广州地铁地产·珑岄上城",
    station: "双沙",
    line: "5号线",
    exit: "站点周边",
    category: "好房",
    sorts: ["hot", "latest", "nearby"],
    status: "TOD热盘",
    statusClass: "status-hot",
    price: "参考价以案场为准",
    hours: "09:00 - 21:00",
    walk: "步行约3分钟",
    phone: "",
    phoneText: "案场信息以公开渠道为准",
    couponTitle: "置业咨询礼",
    couponValue: "预约送到访礼包",
    summary: "广州地铁地产黄埔项目，公开资料显示靠近5号线双沙站。",
    description:
      "这类TOD住宅是广州地铁生活圈最有辨识度的产品之一，放进悠圈可以补足‘交通+居住’这一层。",
    guide: "适合面向黄埔刚需和主城通勤用户展示。",
    source: "项目站点参考公开楼市资料：双沙站上盖 / 周边项目。",
    tags: ["广州地铁地产", "双沙", "黄埔"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20(26523097109).jpg",
    link: "https://gz.loupan.com/html/news/202503/5471845.html",
  },
  {
    id: 47,
    name: "广州地铁地产·珑曜上城",
    station: "石碁南",
    line: "3号线东延段",
    exit: "站点周边",
    category: "好房",
    sorts: ["hot", "latest", "favorite"],
    status: "新盘热销",
    statusClass: "status-hot",
    price: "参考价以案场为准",
    hours: "09:00 - 21:00",
    walk: "步行约8分钟",
    phone: "",
    phoneText: "案场信息以公开渠道为准",
    couponTitle: "置业早鸟礼",
    couponValue: "预约享看房权益",
    summary: "广州地铁地产番禺项目，公开资料多将其与石碁南 / 番禺广场板块关联。",
    description:
      "珑曜上城适合放在番禺板块的好房专题里，也能和3号线、18号线、22号线枢纽生活圈做联动。",
    guide: "更适合面向番禺改善与家庭置业人群展示。",
    source: "项目站点信息综合公开楼市资料整理。",
    tags: ["番禺", "广州地铁地产", "TOD项目"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20night%2001.jpg",
    link: "https://gz.loupan.com/html/news/202505/5484617.html",
  },
  {
    id: 48,
    name: "广州辉盛阁国际公寓",
    station: "石牌桥",
    line: "3号线",
    exit: "商圈步行圈",
    category: "好住",
    sorts: ["favorite", "latest", "nearby"],
    status: "高端公寓",
    statusClass: "status-open",
    price: "价格以酒店为准",
    hours: "24小时前台",
    walk: "步行约6分钟",
    phone: "",
    phoneText: "以酒店公开渠道为准",
    couponTitle: "入住礼遇",
    couponValue: "长住权益包",
    summary: "位于天河商圈的服务式公寓，靠近万菱汇、太古汇和地铁站。",
    description:
      "虽然不是广州地铁自有物业，但非常适合放进悠好住，承接沿线商旅和长住需求。",
    guide: "适合与体育西路、石牌桥、太古汇商务商圈一起呈现。",
    source: "位置和业态参考酒店公开资料：位于万菱汇商业体内，靠近天河商圈。",
    tags: ["服务公寓", "天河", "长住"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20night.jpg",
    link: "https://www.frasershospitality.cn/china/guangzhou/fraser-suites-guangzhou/",
  },
  {
    id: 49,
    name: "广州盛雅服务公寓",
    station: "体育西路",
    line: "1号线 / 3号线",
    exit: "商圈步行圈",
    category: "好住",
    sorts: ["latest", "nearby"],
    status: "服务公寓",
    statusClass: "status-open",
    price: "价格以酒店为准",
    hours: "24小时前台",
    walk: "步行约8分钟",
    phone: "",
    phoneText: "以酒店公开渠道为准",
    couponTitle: "商旅入住券",
    couponValue: "连住礼遇",
    summary: "体育西路商圈的服务式公寓，适合商务和中长住用户。",
    description:
      "这类住宿内容和广州地铁App的站点生活圈逻辑很贴合，用户搜到站点后会自然需要住、吃、玩的串联信息。",
    guide: "适合与天河城、正佳、太古汇和体育西路站联动展示。",
    source: "位置与交通参考酒店公开资料：步行可达体育西路站。",
    tags: ["服务公寓", "体育西路", "商务出行"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20Night%2020230722.jpg",
    link: "https://www.springdaleresidence.cn/",
  },
  {
    id: 50,
    name: "广州地铁博物馆纪念票与文创礼盒",
    station: "万胜围",
    line: "4号线 / 8号线",
    exit: "A口南侧",
    category: "好物",
    sorts: ["hot", "favorite", "latest"],
    status: "馆藏同款",
    statusClass: "status-hot",
    price: "￥19起",
    hours: "随馆开放",
    walk: "步行约3分钟",
    phone: "",
    phoneText: "以馆内信息为准",
    couponTitle: "文创纪念券",
    couponValue: "馆内购满99减15",
    summary: "围绕纪念票、冰箱贴、彩色铅笔等地铁博物馆文创形成的产品位。",
    description:
      "这个条目直接把广州地铁自己的文创产品单独抽出来，不再只是把文创作为配角卡片。",
    guide: "适合和亲子游、地铁博物馆、万胜广场形成完整的一条内容链路。",
    source: "产品方向参考官方公开报道：纪念票、地铁冰箱贴、彩色铅笔曾是热门文创产品。",
    tags: ["纪念票", "冰箱贴", "地铁文创"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Guangzhou_Metro_old_tickets.jpg/640px-Guangzhou_Metro_old_tickets.jpg",
    link: "https://zh.wikipedia.org/wiki/%E5%B9%BF%E5%B7%9E%E5%9C%B0%E9%93%81%E5%8D%9A%E7%89%A9%E9%A6%86",
  },
  {
    id: 51,
    name: "地铁悠选·琶洲站店",
    station: "琶洲",
    line: "8号线",
    exit: "站厅便民区",
    category: "好物",
    sorts: ["latest", "nearby", "hot"],
    status: "站内新店",
    statusClass: "status-hot",
    price: "民生商品为主",
    hours: "08:30 - 22:30",
    walk: "站内可达",
    phone: "",
    phoneText: "以站内门店信息为准",
    couponTitle: "会展补给券",
    couponValue: "满39减6",
    summary: "面向会展与通勤人群的地铁自营便民店，适合快速补给。",
    description:
      "琶洲站店能把会展人流、地铁日常补给与广州地铁自营商业结合起来，是非常典型的站内生活服务节点。",
    guide: "适合与会展中心、万胜围、地铁博物馆一同做会展线生活攻略。",
    source: "门店站点参考广州地铁便民超市首批进驻公开报道。",
    tags: ["地铁自营", "琶洲", "会展补给"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20Night%2020230722.jpg",
    link: "https://gd.chinadaily.com.cn/a/202510/01/WS68dccc3ca310c4deea5eafb7.html",
  },
  {
    id: 52,
    name: "地铁悠选·金融高新区站店",
    station: "金融高新区",
    line: "广佛线",
    exit: "站厅便民区",
    category: "好物",
    sorts: ["nearby", "latest"],
    status: "地铁自营",
    statusClass: "status-open",
    price: "民生商品为主",
    hours: "08:30 - 22:30",
    walk: "站内可达",
    phone: "",
    phoneText: "以站内门店信息为准",
    couponTitle: "广佛通勤券",
    couponValue: "满29减5",
    summary: "覆盖广佛通勤客群的地铁自营便民门店。",
    description:
      "把金融高新区门店补进来后，悠圈不只覆盖广州主城，也能体现广州地铁广佛生活圈的延展能力。",
    guide: "适合面向跨城办公和广佛双城通勤用户推荐。",
    source: "门店站点参考广州地铁便民超市首批进驻公开报道。",
    tags: ["广佛线", "地铁悠选", "通勤"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20night.jpg",
    link: "https://gd.chinadaily.com.cn/a/202510/01/WS68dccc3ca310c4deea5eafb7.html",
  },
  {
    id: 53,
    name: "广州地铁博物馆地铁模型专区",
    station: "万胜围",
    line: "4号线 / 8号线",
    exit: "A口南侧",
    category: "好物",
    sorts: ["favorite", "hot", "latest"],
    status: "馆内人气",
    statusClass: "status-hot",
    price: "￥59起",
    hours: "随馆开放",
    walk: "步行约3分钟",
    phone: "",
    phoneText: "以馆内信息为准",
    couponTitle: "模型专区礼",
    couponValue: "满199减30",
    summary: "围绕列车模型、徽章、地铁票卡周边形成的专题产品位。",
    description:
      "这个条目把广州地铁自己的模型和纪念类商品再细分了一层，展示会更像真实商城，而不是只有一张文创总卡。",
    guide: "适合和纪念票礼盒、亲子游和博物馆预约一起组成完整文创链路。",
    source: "产品方向参考广州地铁博物馆公开展陈与文创报道。",
    tags: ["列车模型", "徽章", "文创专区"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Guangzhou_Metro_old_tickets.jpg/640px-Guangzhou_Metro_old_tickets.jpg",
    link: "https://zh.wikipedia.org/wiki/%E5%B9%BF%E5%B7%9E%E5%9C%B0%E9%93%81%E5%8D%9A%E7%89%A9%E9%A6%86",
  },
  {
    id: 54,
    name: "广州地铁地产·品秀星图",
    station: "嘉禾望岗",
    line: "2号线 / 3号线北延段 / 14号线",
    exit: "站点周边",
    category: "好房",
    sorts: ["hot", "latest", "favorite"],
    status: "TOD住区",
    statusClass: "status-hot",
    price: "参考价以案场为准",
    hours: "09:00 - 21:00",
    walk: "步行约6分钟",
    phone: "",
    phoneText: "案场信息以公开渠道为准",
    couponTitle: "到访权益礼",
    couponValue: "预约享专属顾问",
    summary: "广州地铁地产在嘉禾望岗板块的代表性 TOD 住宅内容。",
    description:
      "嘉禾望岗本身就是大换乘节点，把品秀星图加进来后，‘地铁站点-住宅-商业-通勤’这条链条会更完整。",
    guide: "适合面向北部通勤、改善和多线换乘用户展示。",
    source: "项目方向参考广州地铁地产公开楼盘传播资料。",
    tags: ["嘉禾望岗", "TOD住宅", "广州地铁地产"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20night%2001.jpg",
    link: "https://example.com/pinxiu-xingtu",
  },
  {
    id: 55,
    name: "广州地铁地产·品秀星樾",
    station: "白云东平",
    line: "14号线",
    exit: "站点周边",
    category: "好房",
    sorts: ["latest", "nearby"],
    status: "住宅热推",
    statusClass: "status-open",
    price: "参考价以案场为准",
    hours: "09:00 - 21:00",
    walk: "步行约5分钟",
    phone: "",
    phoneText: "案场信息以公开渠道为准",
    couponTitle: "置业到访礼",
    couponValue: "预约送生活礼包",
    summary: "白云东平板块的地铁系住宅内容，适合与云平上品组成同站双项目展示。",
    description:
      "把同一站点的两个住宅项目并列展示，会更像真实房产频道，而不是只放一张示意卡片。",
    guide: "适合和白云东平站、地铁悠选东平站店一起做站点生态专题。",
    source: "项目方向参考广州地铁地产公开楼盘传播资料。",
    tags: ["白云东平", "广州地铁地产", "住宅"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton%20Tower%20at%20Night%2020220820.jpg",
    link: "https://example.com/pinxiu-xingyue",
  },
  {
    id: 56,
    name: "地铁生活馆·票卡收藏专区",
    station: "万胜围",
    line: "4号线 / 8号线",
    exit: "A口南侧",
    category: "好物",
    sorts: ["favorite", "latest", "hot"],
    status: "收藏向",
    statusClass: "status-hot",
    price: "￥29起",
    hours: "随馆开放",
    walk: "步行约3分钟",
    phone: "",
    phoneText: "以馆内信息为准",
    couponTitle: "票卡收藏券",
    couponValue: "任购 2 件 9 折",
    summary: "围绕纪念单程票、主题票卡和站点海报组成的收藏专区。",
    description:
      "这个专区更适合把广州地铁文创里‘收藏型产品’独立拉出来，和普通玩偶礼盒区分开。",
    guide: "适合票根爱好者、亲子收藏和博物馆打卡用户。",
    source: "产品方向参考广州地铁旧票卡、博物馆纪念品相关公开资料。",
    tags: ["票卡收藏", "站点海报", "纪念单程票"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Guangzhou_Metro_old_tickets.jpg/640px-Guangzhou_Metro_old_tickets.jpg",
    link: "https://zh.wikipedia.org/wiki/%E5%B9%BF%E5%B7%9E%E5%9C%B0%E9%93%81%E5%8D%9A%E7%89%A9%E9%A6%86",
  },
];

const metroLines = [
  {
    name: "1号线",
    color: "#f4c300",
    status: "运营中",
    note: "广州最早骨干线之一",
    stations: ["西塱", "坑口", "花地湾", "芳村", "黄沙", "长寿路", "陈家祠", "西门口", "公园前", "农讲所", "烈士陵园", "东山口", "杨箕", "体育西路", "体育中心", "广州东站"],
  },
  {
    name: "2号线",
    color: "#0066b3",
    status: "运营中",
    note: "南北大动脉",
    stations: ["嘉禾望岗", "黄边", "江夏", "萧岗", "白云文化广场", "白云公园", "飞翔公园", "三元里", "广州火车站", "越秀公园", "纪念堂", "公园前", "海珠广场", "市二宫", "江南西", "昌岗", "江泰路", "东晓南", "南洲", "洛溪", "南浦", "会江", "石壁", "广州南站"],
  },
  {
    name: "3号线",
    color: "#f28c00",
    status: "运营中",
    note: "主线",
    stations: ["天河客运站", "五山", "华师", "岗顶", "石牌桥", "体育西路", "珠江新城", "广州塔", "客村", "大塘", "沥滘", "厦滘", "大石", "汉溪长隆", "市桥", "番禺广场"],
  },
  {
    name: "3号线北延段",
    color: "#f28c00",
    status: "运营中",
    note: "机场方向",
    stations: ["机场南2号航站楼", "人和", "龙归", "嘉禾望岗", "白云大道北", "永泰", "同和", "京溪南方医院", "梅花园", "燕塘", "广州东站", "林和西", "体育西路"],
  },
  {
    name: "4号线",
    color: "#00a6d6",
    status: "运营中",
    note: "南沙快线",
    stations: ["黄村", "车陂", "车陂南", "万胜围", "官洲", "大学城北", "大学城南", "新造", "石碁", "海傍", "低涌", "东涌", "庆盛", "黄阁汽车城", "黄阁", "蕉门", "金洲", "飞沙角", "广隆", "大涌", "塘坑", "南横", "南沙客运港"],
  },
  {
    name: "5号线",
    color: "#d81e06",
    status: "运营中",
    note: "东西向骨干线，含东延段",
    stations: ["滘口", "坦尾", "中山八", "西场", "西村", "广州火车站", "小北", "淘金", "区庄", "动物园", "杨箕", "五羊邨", "珠江新城", "猎德", "潭村", "员村", "科韵路", "车陂南", "东圃", "三溪", "鱼珠", "大沙地", "大沙东", "文冲", "双沙", "庙头", "夏园", "保盈大道", "沙浦", "南岗"],
  },
  {
    name: "6号线",
    color: "#7a3db8",
    status: "运营中",
    note: "横贯老城与科学城",
    stations: ["浔峰岗", "横沙", "沙贝", "河沙", "坦尾", "如意坊", "黄沙", "文化公园", "一德路", "海珠广场", "北京路", "团一大广场", "东湖", "东山口", "区庄", "黄花岗", "沙河顶", "天平架", "燕塘", "天河客运站", "长湴", "植物园", "龙洞", "柯木塱", "高塘石", "黄陂", "金峰", "暹岗", "苏元", "萝岗", "香雪"],
  },
  {
    name: "7号线",
    color: "#6fba2c",
    status: "运营中",
    note: "含顺德段；洪圣沙暂缓开通",
    stations: ["美的大道", "北滘公园", "南涌", "陈村", "陈村北", "锦龙", "广州南站", "石壁", "谢村", "钟村", "汉溪长隆", "员岗", "板桥", "大学城南", "深井", "长洲", "裕丰围", "大沙东", "姬堂", "加庄", "科丰路", "萝岗"],
  },
  {
    name: "8号线",
    color: "#009688",
    status: "运营中",
    note: "连接白云、荔湾、海珠、琶洲",
    stations: ["滘心", "亭岗", "石井", "小坪", "石潭", "聚龙", "上步", "同德", "鹅掌坦", "彩虹桥", "陈家祠", "华林寺", "文化公园", "同福西", "凤凰新村", "沙园", "宝岗大道", "昌岗", "晓港", "中大", "鹭江", "客村", "赤岗", "磨碟沙", "新港东", "琶洲", "万胜围"],
  },
  {
    name: "9号线",
    color: "#9c27b0",
    status: "运营中",
    note: "花都方向",
    stations: ["飞鹅岭", "花都汽车城", "广州北站", "花城路", "花果山公园", "花都广场", "马鞍山公园", "莲塘", "清布", "清塘", "高增"],
  },
  {
    name: "10号线",
    color: "#4c6ef5",
    status: "2025-06-29开通",
    note: "按官方站名整理；开通初期为西塱—杨箕东",
    stations: ["西塱", "花围", "东沙", "大干围", "工业大道南", "东晓南", "五凤", "中大南门", "滨江东路", "东湖", "五羊邨", "杨箕东"],
  },
  {
    name: "11号线",
    color: "#b68d2c",
    status: "2024-12-28开通",
    note: "环线；广州火车站、广州东站曾暂缓开通",
    stations: ["赤沙", "龙潭", "大塘", "上涌", "逸景路", "五凤", "江泰路", "燕岗", "棣园", "鹤洞东", "沙涌", "大冲口", "芳村", "石围塘", "如意坊", "中山八", "彩虹桥", "流花", "广州火车站", "梓元岗", "中医药大学", "大金钟路", "云台花园", "沙河", "广州东站", "龙口西", "华师", "华景路", "天河公园", "员村", "琶洲", "赤沙"],
  },
  {
    name: "12号线",
    color: "#7c4dff",
    status: "分段运营",
    note: "2025-06-29开通东西段，2026-02-13赤岗站开通",
    stations: ["浔峰岗", "浔峰岗北", "西洲", "聚龙", "广州白云站", "棠涌", "新市墟", "白云文化广场", "广州体育馆", "景泰", "柯子岭", "中医药大学", "麓湖", "建设六马路", "烈士陵园", "东湖", "二沙岛", "赤岗塔", "赤岗", "赤沙北", "赤沙", "北山", "官洲", "大学城北", "大学城南"],
  },
  {
    name: "13号线",
    color: "#f06292",
    status: "运营中",
    note: "黄埔至增城",
    stations: ["鱼珠", "裕丰围", "双岗", "南海神庙", "夏园", "南岗", "沙村", "白江", "新塘", "官湖", "新沙"],
  },
  {
    name: "14号线",
    color: "#795548",
    status: "运营中",
    note: "主线；知识城支线未在此表展开",
    stations: ["嘉禾望岗", "白云东平", "夏良", "太和", "竹料", "钟落潭", "马沥", "新和", "太平", "神岗", "赤草", "从化客运站", "东风"],
  },
  {
    name: "18号线",
    color: "#00897b",
    status: "运营中",
    note: "南沙快线",
    stations: ["万顷沙", "横沥", "番禺广场", "南村万博", "磨碟沙", "龙潭", "冼村"],
  },
  {
    name: "21号线",
    color: "#6d4c41",
    status: "运营中",
    note: "增城快线",
    stations: ["员村", "天河公园", "棠东", "黄村", "大观南路", "天河智慧城", "神舟路", "科学城", "苏元", "水西", "长平", "金坑", "镇龙西", "镇龙", "中新", "坑贝", "凤岗", "朱村", "山田", "钟岗", "增城广场"],
  },
  {
    name: "22号线",
    color: "#455a64",
    status: "2025-12-29全线贯通",
    note: "按官方新闻整理为番禺广场—芳村",
    stations: ["番禺广场", "市广路", "广州南站", "陈头岗", "南浦西", "南漖", "西塱", "芳村"],
  },
  {
    name: "APM线",
    color: "#5c6bc0",
    status: "运营中",
    note: "珠江新城旅客捷运系统",
    stations: ["林和西", "体育中心南", "天河南", "黄埔大道", "妇儿中心", "花城大道", "大剧院", "海心沙", "广州塔"],
  },
  {
    name: "广佛线",
    color: "#43a047",
    status: "运营中",
    note: "广佛同城线路",
    stations: ["新城东", "东平", "世纪莲", "澜石", "魁奇路", "季华园", "同济路", "祖庙", "普君北路", "朝安", "桂城", "南桂路", "礌岗", "千灯湖", "金融高新区", "龙溪", "菊树", "西塱", "鹤洞", "沙涌", "沙园", "燕岗", "石溪", "南洲", "沥滘"],
  },
];

const homeFeedGroups = {
  newlines: [
    {
      title: "10号线已开通运营",
      desc: "按 2025-06-30 官方通报，10号线与12号线于 2025 年 6 月 29 日正式开通。",
      actionType: "line",
      actionValue: "10号线",
      accent: "green",
    },
    {
      title: "12号线赤岗站已开通",
      desc: "按 2026-02-13 官方消息，12号线赤岗站已开通并可换乘8号线。",
      actionType: "line",
      actionValue: "12号线",
      accent: "pink",
    },
    {
      title: "22号线后通段已全线贯通",
      desc: "按 2025-12-29 官方消息，22号线实现芳村至番禺广场贯通。",
      actionType: "line",
      actionValue: "22号线",
      accent: "blue",
    },
  ],
  culture: [
    {
      title: "广州地铁博物馆文创",
      desc: "把纪念票、冰箱贴、彩铅和文创礼盒单独做成了可点开的产品位。",
      actionType: "merchant",
      actionValue: 50,
      accent: "pink",
    },
    {
      title: "万胜广场 + 博物馆生活圈",
      desc: "广州地铁自有综合体、博物馆和会展商圈已经串成一条内容链。",
      actionType: "merchant",
      actionValue: 43,
      accent: "blue",
    },
    {
      title: "11号线非遗线路感",
      desc: "首页把 11 号线的文化属性做成了独立内容入口。",
      actionType: "line",
      actionValue: "11号线",
      accent: "green",
    },
  ],
  insight: [
    {
      title: "全按钮改成交互入口",
      desc: "首页 tab、关怀版、线网圈、站点精选、商家子站都不再是空按钮。",
      actionType: "page",
      actionValue: "youquan",
      accent: "green",
    },
    {
      title: "站点目录按线网浏览",
      desc: "线网圈里可以直接切线路，再看该线的站点目录和沿线运营重点。",
      actionType: "station",
      actionValue: "12号线",
      accent: "pink",
    },
    {
      title: "地铁生活圈产品目录",
      desc: "房产、服务公寓、便民超市、文创都被提到前台做成独立入口。",
      actionType: "merchant",
      actionValue: 41,
      accent: "blue",
    },
  ],
  metroplus: [
    {
      title: "地铁悠选便民超市",
      desc: "按公开报道已先补入东平、客村等首批门店示意。",
      actionType: "merchant",
      actionValue: 41,
      accent: "green",
    },
    {
      title: "广州地铁地产好房目录",
      desc: "云平上品、珑岄上城、珑曜上城已加入‘悠好房’。",
      actionType: "merchant",
      actionValue: 45,
      accent: "pink",
    },
    {
      title: "荔胜广百与万胜广场",
      desc: "把地铁系商业综合体也加入到沿线商家目录中。",
      actionType: "merchant",
      actionValue: 44,
      accent: "blue",
    },
  ],
};

const storageKey = "youquan-app-state-v2";
const defaultState = {
  page: "home",
  category: "好吃",
  station: "全部",
  sort: "nearby",
  homeTab: "newlines",
  selectedLine: "10号线",
  careMode: false,
  keyword: "",
  claimedCoupons: [],
  favorites: [],
  currentMerchantId: merchants[0].id,
};

let state = loadState();

const pages = Array.from(document.querySelectorAll(".app-page"));
const navButtons = Array.from(document.querySelectorAll("[data-nav-page]"));
const categoryButtons = Array.from(document.querySelectorAll(".category-card"));
const sortButtons = Array.from(document.querySelectorAll(".tab-pill"));
const homeTabs = Array.from(document.querySelectorAll(".home-tab"));
const merchantList = document.querySelector("#merchant-list");
const couponList = document.querySelector("#coupon-list");
const favoriteList = document.querySelector("#favorite-list");
const categoryOverlayList = document.querySelector("#category-overlay-list");
const stationOverlayList = document.querySelector("#station-overlay-list");
const stationFilterRow = document.querySelector("#station-filter-row");
const lineFilterRow = document.querySelector("#line-filter-row");
const activeFilterLabel = document.querySelector("#active-filter-label");
const listTitle = document.querySelector("#list-title");
const couponCountTitle = document.querySelector("#coupon-count-title");
const homeFeed = document.querySelector("#home-feed");
const networkHighlightList = document.querySelector("#network-highlight-list");
const lineDetailCard = document.querySelector("#line-detail-card");
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const refreshButton = document.querySelector("#refresh-button");
const menuButton = document.querySelector("#menu-button");
const careToggle = document.querySelector("#care-toggle");
const overlays = {
  detail: document.querySelector("#merchant-detail"),
  category: document.querySelector("#category-overlay"),
  station: document.querySelector("#station-overlay"),
  microsite: document.querySelector("#microsite-overlay"),
};

const detailNodes = {
  image: document.querySelector("#detail-image"),
  kicker: document.querySelector("#detail-kicker"),
  title: document.querySelector("#detail-title"),
  subtitle: document.querySelector("#detail-subtitle"),
  status: document.querySelector("#detail-status"),
  price: document.querySelector("#detail-price"),
  hours: document.querySelector("#detail-hours"),
  phone: document.querySelector("#detail-phone"),
  tags: document.querySelector("#detail-tags"),
  desc: document.querySelector("#detail-desc"),
  source: document.querySelector("#detail-source"),
  couponTitle: document.querySelector("#detail-coupon-title"),
  couponValue: document.querySelector("#detail-coupon-value"),
  favoriteButton: document.querySelector("#detail-favorite"),
  claimButton: document.querySelector("#detail-claim"),
  couponButton: document.querySelector("#detail-coupon-button"),
  phoneLink: document.querySelector("#detail-phone-link"),
  micrositeButton: document.querySelector("#detail-microsite"),
};

const categoryOverlayTitle = document.querySelector("#category-overlay-title");
const micrositeNodes = {
  title: document.querySelector("#microsite-title"),
  subtitle: document.querySelector("#microsite-subtitle"),
  image: document.querySelector("#microsite-image"),
  tags: document.querySelector("#microsite-tags"),
  coupon: document.querySelector("#microsite-coupon"),
  contact: document.querySelector("#microsite-contact"),
  guide: document.querySelector("#microsite-guide"),
  claim: document.querySelector("#microsite-claim"),
  link: document.querySelector("#microsite-link"),
};

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return { ...defaultState };
    return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function isClaimed(id) {
  return state.claimedCoupons.includes(id);
}

function isFavorite(id) {
  return state.favorites.includes(id);
}

function currentLine() {
  return metroLines.find((line) => line.name === state.selectedLine) || metroLines[0];
}

function openLineDirectory(lineName = state.selectedLine) {
  state.selectedLine = lineName;
  saveState();
  renderAll();
  overlays.station.showModal();
}

function stationSummary(category = null) {
  const list = category ? merchants.filter((merchant) => merchant.category === category) : merchants;
  const map = new Map();

  list.forEach((merchant) => {
    const entry = map.get(merchant.station) || {
      station: merchant.station,
      count: 0,
      lines: new Set(),
    };
    entry.count += 1;
    merchant.line.split(" / ").forEach((line) => entry.lines.add(line));
    if (!entry.categories) {
      entry.categories = new Set();
    }
    entry.categories.add(merchant.category);
    map.set(merchant.station, entry);
  });

  return [...map.values()]
    .sort((a, b) => b.count - a.count || a.station.localeCompare(b.station, "zh-CN"))
    .map((entry) => ({
      station: entry.station,
      count: entry.count,
      lineText: [...entry.lines].join(" / "),
      categoryText: [...entry.categories].join(" / "),
    }));
}

function filteredMerchants(category = state.category) {
  const keyword = state.keyword.trim().toLowerCase();

  let list = merchants.filter((merchant) => {
    const categoryMatch = merchant.category === category;
    const stationMatch = state.station === "全部" || merchant.station === state.station;
    const keywordMatch =
      keyword === "" ||
      [merchant.name, merchant.station, merchant.line, merchant.summary, merchant.tags.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(keyword);
    return categoryMatch && stationMatch && keywordMatch;
  });

  if (state.sort === "favorite") {
    list = list.filter((merchant) => isFavorite(merchant.id));
  } else if (state.sort !== "nearby") {
    list = list.filter((merchant) => merchant.sorts.includes(state.sort));
  }

  if (state.sort === "hot") {
    list = [...list].sort((a, b) => (a.statusClass === "status-hot" ? -1 : 1) - (b.statusClass === "status-hot" ? -1 : 1));
  }

  if (state.sort === "latest") {
    list = [...list].reverse();
  }

  return list;
}

function renderHomeFeed() {
  const items = homeFeedGroups[state.homeTab] || homeFeedGroups.newlines;
  homeFeed.innerHTML = items
    .map(
      (item) => `
        <article class="home-news-card ${item.accent || ""}">
          <div class="home-news-image news-${item.accent || "station"}"></div>
          <div class="home-feed-copy">
            <strong>${item.title}</strong>
            <p>${item.desc}</p>
            <button class="inline-action" data-home-action="${item.actionType}" data-home-value="${item.actionValue}" type="button">打开</button>
          </div>
        </article>
      `
    )
    .join("");

  homeFeed.querySelectorAll("[data-home-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const { homeAction, homeValue } = button.dataset;
      if (homeAction === "line") {
        openLineDirectory(homeValue);
        return;
      }
      if (homeAction === "merchant") {
        openMerchantDetail(Number(homeValue));
        return;
      }
      if (homeAction === "page") {
        state.page = homeValue;
        saveState();
        renderAll();
        return;
      }
      if (homeAction === "station") {
        openLineDirectory(homeValue);
      }
    });
  });
}

function renderPage() {
  document.body.classList.toggle("care-mode", state.careMode);
  pages.forEach((page) => page.classList.toggle("active", page.dataset.page === state.page));
  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.navPage === state.page);
  });
}

function renderStationFilters() {
  const stations = stationSummary(state.category);
  if (state.station !== "全部" && !stations.some((item) => item.station === state.station)) {
    state.station = "全部";
  }
  stationFilterRow.innerHTML = [
    `<button class="chip ${state.station === "全部" ? "active" : ""}" data-station="全部">全部</button>`,
    ...stations.map(
      (item) =>
        `<button class="chip ${state.station === item.station ? "active" : ""}" data-station="${item.station}">${item.station}</button>`
    ),
  ].join("");

  stationFilterRow.querySelectorAll("[data-station]").forEach((button) => {
    button.addEventListener("click", () => {
      state.station = button.dataset.station;
      saveState();
      renderAll();
    });
  });
}

function merchantCardTemplate(merchant, compact = false) {
  const claimLabel = isClaimed(merchant.id) ? "已领取" : merchant.couponValue;
  const favLabel = isFavorite(merchant.id) ? "已收藏" : "YOYO推荐";

  return `
    <article class="merchant-card">
      <img src="${merchant.image}" alt="${merchant.name}" loading="lazy" />
      <div class="merchant-body">
        <div class="merchant-head">
          <span class="merchant-badge">${merchant.station} · ${merchant.line}</span>
          <span class="coupon-badge">${claimLabel}</span>
        </div>
        <h4>${merchant.name}</h4>
        <p>${merchant.summary}</p>
        <div class="merchant-meta">
          <span class="yoyo-label"><span class="yoyo-icon" aria-hidden="true"></span>${favLabel}</span>
          <span class="status-chip ${merchant.statusClass}">${merchant.status}</span>
        </div>
        <div class="card-actions">
          <button class="inline-action" data-open-merchant="${merchant.id}" type="button">查看详情</button>
          <button class="inline-action" data-claim="${merchant.id}" type="button">${isClaimed(merchant.id) ? "已领取" : "领券"}</button>
          <button class="inline-action" data-favorite="${merchant.id}" type="button">${isFavorite(merchant.id) ? "取消收藏" : "收藏"}</button>
          ${compact ? "" : `<button class="inline-action" data-open-microsite="${merchant.id}" type="button">商家子站</button>`}
        </div>
      </div>
    </article>
  `;
}

function wireCardActions(root = document) {
  root.querySelectorAll("[data-open-merchant]").forEach((button) => {
    button.addEventListener("click", () => openMerchantDetail(Number(button.dataset.openMerchant)));
  });
  root.querySelectorAll("[data-claim]").forEach((button) => {
    button.addEventListener("click", () => claimCoupon(Number(button.dataset.claim)));
  });
  root.querySelectorAll("[data-favorite]").forEach((button) => {
    button.addEventListener("click", () => toggleFavorite(Number(button.dataset.favorite)));
  });
  root.querySelectorAll("[data-open-microsite]").forEach((button) => {
    button.addEventListener("click", () => openMicrosite(Number(button.dataset.openMicrosite)));
  });
}

function renderMerchantList() {
  const list = filteredMerchants();
  listTitle.textContent = state.category;
  activeFilterLabel.textContent = state.station === "全部" ? state.category : `${state.station}站`;
  searchInput.value = state.keyword;

  if (list.length === 0) {
    merchantList.innerHTML = `<article class="merchant-card"><div class="merchant-body"><h4>当前没有内容</h4><p>你现在点开的分类页已经做起来了，只是这个筛选条件下没有匹配商家。可以换站点、换分类或清空搜索。</p></div></article>`;
    return;
  }

  merchantList.innerHTML = list.map((merchant) => merchantCardTemplate(merchant)).join("");
  wireCardActions(merchantList);
}

function renderCoupons() {
  const claimed = merchants.filter((merchant) => isClaimed(merchant.id));
  couponCountTitle.textContent = `${claimed.length} 张可用`;

  if (claimed.length === 0) {
    couponList.innerHTML = `<article class="coupon-item"><strong>还没有领取任何票券</strong><p>去“悠圈”页面点商家卡片里的“领券”或详情页里的“立即领取”，这里就会自动出现。</p></article>`;
    return;
  }

  couponList.innerHTML = claimed
    .map(
      (merchant) => `
        <article class="coupon-item">
          <div class="coupon-item-head">
            <strong>${merchant.couponTitle}</strong>
            <span class="ticket-state">${merchant.couponValue}</span>
          </div>
          <p>${merchant.name} · ${merchant.station}站 · ${merchant.phoneText}</p>
          <div class="card-actions">
            <button class="inline-action" data-open-merchant="${merchant.id}" type="button">查看商家</button>
            <button class="inline-action" data-open-microsite="${merchant.id}" type="button">商家子站</button>
          </div>
        </article>
      `
    )
    .join("");
  wireCardActions(couponList);
}

function renderFavorites() {
  const list = merchants.filter((merchant) => isFavorite(merchant.id));

  if (list.length === 0) {
    favoriteList.innerHTML = `<article class="merchant-card"><div class="merchant-body"><h4>收藏夹还是空的</h4><p>你可以在商家卡片、详情页或商家子站里点“收藏”，收藏后这里就会立即出现。</p></div></article>`;
    return;
  }

  favoriteList.innerHTML = list.map((merchant) => merchantCardTemplate(merchant, true)).join("");
  wireCardActions(favoriteList);
}

function renderCategoryOverlay() {
  categoryOverlayTitle.textContent = state.category;
  const list = merchants.filter((merchant) => merchant.category === state.category);
  categoryOverlayList.innerHTML = list.map((merchant) => merchantCardTemplate(merchant, true)).join("");
  wireCardActions(categoryOverlayList);
}

function renderStationOverlay() {
  const stations = stationSummary();
  const line = currentLine();

  networkHighlightList.innerHTML = `
    <article class="network-highlight-card">
      <strong>最新线网提示</strong>
      <p>本站原型按 2025-06-29 十号线、十二号线开通，2025-12-29 二十二号线贯通，2026-02-13 十二号线赤岗站开通的公开消息更新。</p>
    </article>
    <article class="network-highlight-card soft">
      <strong>当前选中</strong>
      <p>${line.name} · ${line.status} · ${line.note}</p>
    </article>
  `;

  lineFilterRow.innerHTML = metroLines
    .map(
      (item) => `<button class="chip ${item.name === state.selectedLine ? "active" : ""}" data-line-name="${item.name}" type="button">${item.name}</button>`
    )
    .join("");

  lineFilterRow.querySelectorAll("[data-line-name]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedLine = button.dataset.lineName;
      saveState();
      renderAll();
      if (!overlays.station.open) {
        overlays.station.showModal();
      }
    });
  });

  lineDetailCard.innerHTML = `
    <div class="line-detail-head">
      <span class="line-dot" style="background:${line.color}"></span>
      <div>
        <strong>${line.name}</strong>
        <p>${line.status} · ${line.note}</p>
      </div>
    </div>
    <div class="station-chip-cloud">
      ${line.stations.map((station) => `<span>${station}</span>`).join("")}
    </div>
  `;

  stationOverlayList.innerHTML = stations
    .map((item) => {
      return `
        <button class="station-item" type="button" data-station-open="${item.station}">
          <strong>${item.station}站</strong>
          <p>${item.count} 家商家 · ${item.lineText}</p>
          <p>${item.categoryText}</p>
        </button>
      `;
    })
    .join("");

  stationOverlayList.querySelectorAll("[data-station-open]").forEach((button) => {
    button.addEventListener("click", () => {
      state.page = "youquan";
      state.station = button.dataset.stationOpen;
      closeAllOverlays();
      renderAll();
    });
  });
}

function openMerchantDetail(id) {
  const merchant = merchants.find((item) => item.id === id);
  if (!merchant) return;

  state.currentMerchantId = id;
  detailNodes.image.src = merchant.image;
  detailNodes.image.alt = merchant.name;
  detailNodes.kicker.textContent = `广州地铁 · ${merchant.category}`;
  detailNodes.title.textContent = merchant.name;
  detailNodes.subtitle.textContent = `${merchant.station}站 · ${merchant.exit} · ${merchant.walk}`;
  detailNodes.status.textContent = merchant.status;
  detailNodes.price.textContent = merchant.price;
  detailNodes.hours.textContent = merchant.hours;
  detailNodes.phone.textContent = merchant.phoneText;
  detailNodes.tags.innerHTML = merchant.tags.map((tag) => `<span>${tag}</span>`).join("");
  detailNodes.desc.textContent = merchant.description;
  detailNodes.source.textContent = merchant.source;
  detailNodes.couponTitle.textContent = merchant.couponTitle;
  detailNodes.couponValue.textContent = merchant.couponValue;
  detailNodes.favoriteButton.textContent = isFavorite(id) ? "取消收藏" : "收藏";
  detailNodes.claimButton.textContent = isClaimed(id) ? "已领取" : "领取优惠券";
  detailNodes.couponButton.textContent = isClaimed(id) ? "已领取" : "立即领取";
  detailNodes.phoneLink.href = merchant.phone ? `tel:${merchant.phone}` : "#";
  detailNodes.phoneLink.style.pointerEvents = merchant.phone ? "auto" : "none";
  detailNodes.phoneLink.style.opacity = merchant.phone ? "1" : "0.55";
  overlays.detail.showModal();
  saveState();
}

function openMicrosite(id = state.currentMerchantId) {
  const merchant = merchants.find((item) => item.id === id);
  if (!merchant) return;
  const hasRealLink = merchant.link && !merchant.link.includes("example.com");

  state.currentMerchantId = id;
  micrositeNodes.title.textContent = `${merchant.name} 子站`;
  micrositeNodes.subtitle.textContent = `${merchant.station}站 · ${merchant.line} · ${merchant.walk}`;
  micrositeNodes.image.src = merchant.image;
  micrositeNodes.image.alt = merchant.name;
  micrositeNodes.tags.innerHTML = merchant.tags.map((tag) => `<span>${tag}</span>`).join("");
  micrositeNodes.coupon.textContent = `${merchant.couponTitle}：${merchant.couponValue}`;
  micrositeNodes.contact.textContent = `${merchant.phoneText} · ${merchant.hours}`;
  micrositeNodes.guide.textContent = merchant.guide;
  micrositeNodes.link.href = hasRealLink ? merchant.link : "#";
  micrositeNodes.link.textContent = hasRealLink ? "打开主页" : "主页待补充";
  micrositeNodes.link.style.pointerEvents = hasRealLink ? "auto" : "none";
  micrositeNodes.link.style.opacity = hasRealLink ? "1" : "0.55";
  overlays.microsite.showModal();
  saveState();
}

function claimCoupon(id) {
  if (!isClaimed(id)) {
    state.claimedCoupons = [...state.claimedCoupons, id];
  }
  saveState();
  renderAll();
  if (overlays.detail.open) {
    openMerchantDetail(id);
  }
  if (overlays.microsite.open) {
    openMicrosite(id);
  }
}

function claimVisibleCoupons() {
  const ids = filteredMerchants().map((merchant) => merchant.id);
  state.claimedCoupons = [...new Set([...state.claimedCoupons, ...ids])];
  saveState();
  renderAll();
}

function toggleFavorite(id) {
  if (isFavorite(id)) {
    state.favorites = state.favorites.filter((item) => item !== id);
  } else {
    state.favorites = [...state.favorites, id];
  }
  saveState();
  renderAll();
  if (overlays.detail.open) {
    openMerchantDetail(id);
  }
}

function renderActiveStates() {
  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.navPage === state.page);
  });
  categoryButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.category === state.category);
  });
  sortButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.sort === state.sort);
  });
  homeTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.homeTab === state.homeTab);
  });
  careToggle.classList.toggle("active", state.careMode);
}

function renderAll() {
  if (!homeFeedGroups[state.homeTab]) {
    state.homeTab = "newlines";
  }
  if (!metroLines.some((line) => line.name === state.selectedLine)) {
    state.selectedLine = metroLines[0].name;
  }
  renderPage();
  renderActiveStates();
  renderHomeFeed();
  renderStationFilters();
  renderMerchantList();
  renderCoupons();
  renderFavorites();
  renderCategoryOverlay();
  renderStationOverlay();
}

function closeAllOverlays() {
  Object.values(overlays).forEach((overlay) => {
    if (overlay.open) overlay.close();
  });
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.page = button.dataset.navPage;
    saveState();
    renderAll();
  });
});

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    state.station = "全部";
    saveState();
    renderAll();
    overlays.category.showModal();
  });
});

sortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.sort = button.dataset.sort;
    saveState();
    renderAll();
  });
});

homeTabs.forEach((button) => {
  button.addEventListener("click", () => {
    state.homeTab = button.dataset.homeTab;
    saveState();
    renderAll();
  });
});

menuButton.addEventListener("click", () => {
  state.selectedLine = "10号线";
  saveState();
  renderAll();
  overlays.station.showModal();
});

careToggle.addEventListener("click", () => {
  state.careMode = !state.careMode;
  saveState();
  renderAll();
});

document.querySelectorAll("[data-open-overlay]").forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.openOverlay;
    if (type === "coupon") {
      state.page = "coupon";
      renderAll();
      return;
    }
    if (type === "favorites") {
      state.page = "favorites";
      renderAll();
      return;
    }
    if (type === "station") {
      overlays.station.showModal();
      return;
    }
    if (type === "microsite") {
      openMicrosite();
    }
  });
});

document.querySelector("#station-feature-trigger").addEventListener("click", () => {
  overlays.station.showModal();
});

document.querySelectorAll("[data-close-overlay]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

searchButton.addEventListener("click", () => {
  state.keyword = searchInput.value;
  saveState();
  renderAll();
});

searchInput.addEventListener("input", () => {
  state.keyword = searchInput.value;
  saveState();
  renderAll();
});

refreshButton.addEventListener("click", () => {
  const next = merchants[(merchants.findIndex((item) => item.id === state.currentMerchantId) + 1) % merchants.length];
  state.category = next.category;
  state.station = next.station;
  state.currentMerchantId = next.id;
  saveState();
  renderAll();
});

document.querySelector('[data-action="claim-all"]').addEventListener("click", claimVisibleCoupons);
detailNodes.favoriteButton.addEventListener("click", () => toggleFavorite(state.currentMerchantId));
detailNodes.claimButton.addEventListener("click", () => claimCoupon(state.currentMerchantId));
detailNodes.couponButton.addEventListener("click", () => claimCoupon(state.currentMerchantId));
detailNodes.micrositeButton.addEventListener("click", () => openMicrosite(state.currentMerchantId));
micrositeNodes.claim.addEventListener("click", () => claimCoupon(state.currentMerchantId));

renderAll();
