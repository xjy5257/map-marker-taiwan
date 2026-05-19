const 本地存储 = localStorage;
const 视窗 = window;
const 文档 = document;
const 取 = fetch;
const 如何做爱元素 = 文档.documentElement;
const 体元素 = 文档.body;
const 头元素 = 文档.head;
const 新建元素 = 名 => 文档.createElement(名);
const 新建图 = _ => new Image();
const 添加事件监控 = (元素, 事件, 回调) => 元素[`on${事件}`] = 回调;
const 获取元素方位 = 元素 => 元素.getBoundingClientRect();
const 设置延时 = setTimeout;
const 数学 = Math;
const 统一资源定位 = URL;
const 点击 = 'click';
const 加载 = 'load';
const 等级 = 'level';
const 样式 = 'style';
const 唯一标识 = 'id';
const 源 = 'src';
const 目标 = 'href';
const 成果 = 'result';
const 那么 = 'then';
const 加末尾 = 'appendChild';
const 设置属性 = 'setAttribute';
const 获取属性 = 'getAttribute';
const 清除属性 = 'removeAttribute';
const 来源 = 'referrer';
const 数据属性头 = 'data-';
const 呢 = 'ing';
const 运行中属性 = 数据属性头 + 'runn' + 呢;
const 加载中属性 = 数据属性头 + 加载 + 呢;
const 停止冒泡 = 'stopPropagation';
const 新建数据地址 = 'createObjectURL';
const 展示 = 'display';
const 肉 = 'innerHTML';
const 宽度 = 'width';
const 高度 = 'height';
const 零 = 0;
const 二 = 2;
const 千 = 1e3;
const 面 = '2d';
const 像素 = 'px';
const 空字 = '';
const 啊 = 'a';
const 靶子 = 'target';
const 无 = 'none';
const 最小 = 'min';
const 最大 = 'max';
const 四舍五入 = 'round';
const 是社交媒体 = /weibo|qq/i.test(navigator.userAgent);

const $ = (名, 元素 = 文档) => 元素.querySelector(名);

const 字体名 = '字体';
const 背景色 = '#efb4b4';
const 本地存储等级们钥匙 = 'taiwan-ex-levels';
const 保存文件名 = `[神奇海螺][台灣制霸].png`;

const 宽 = 1134;
const 高 = 976;
const 比 = 二;
const 最小间距 = 6;

const 县市网格域 = {
	'連江縣(馬祖)': 'mazu',
	'金門縣': 'jinmen',
	'澎湖縣': 'penghu',
	'基隆市': 'jilong',
	'台北市': 'taibei',
	'新北市': 'xinbei',
	'桃園市': 'taoyuan',
	'新竹市': 'zhushi',
	'新竹縣': 'zhuxian',
	'宜蘭縣': 'yilan',
	'苗栗縣': 'miaoli',
	'台中市': 'taizhong',
	'花蓮縣': 'hualian',
	'南投縣': 'nantou',
	'彰化縣': 'zhanghua',
	'雲林縣': 'yunlin',
	'嘉義市': 'jiashi',
	'嘉義縣': 'jiaxian',
	'台南市': 'tainan',
	'高雄市': 'gaoxiong',
	'屏東縣': 'pingdong',
	'台東縣': 'taidong',
};

const 台湾县市数据 = [
	'連江縣(馬祖)',
	'金門縣',
	'澎湖縣',
	'基隆市',
	'台北市',
	'新北市',
	'桃園市',
	'新竹市',
	'新竹縣',
	'宜蘭縣',
	'苗栗縣',
	'台中市',
	'花蓮縣',
	'南投縣',
	'彰化縣',
	'雲林縣',
	'嘉義市',
	'嘉義縣',
	'台南市',
	'高雄市',
	'屏東縣',
	'台東縣',
];

const 短标签 = {
	'台北市': '台北',
	'新北市': '新北',
	'基隆市': '基隆',
	'桃園市': '桃園',
	'新竹市': '竹市',
	'新竹縣': '竹縣',
	'苗栗縣': '苗栗',
	'台中市': '台中',
	'彰化縣': '彰化',
	'南投縣': '南投',
	'雲林縣': '雲林',
	'嘉義市': '嘉市',
	'嘉義縣': '嘉縣',
	'台南市': '台南',
	'高雄市': '高雄',
	'屏東縣': '屏東',
	'宜蘭縣': '宜蘭',
	'花蓮縣': '花蓮',
	'台東縣': '台東',
	'澎湖縣': '澎湖',
	'金門縣': '金門',
	'連江縣(馬祖)': '馬祖',
};

const 等级色 = {
	0: '#FFFFFF',
	1: '#88AEFF',
	2: '#A8FFBE',
	3: '#FFE57E',
	4: '#FFB57E',
	5: '#FF7E7E',
};

const 图例项 = [
	['5', '居住５', 'lv5'],
	['4', '短居４', 'lv4'],
	['3', '游玩３', 'lv3'],
	['2', '出差２', 'lv2'],
	['1', '路过１', 'lv1'],
	['0', '没去过', 'lv0'],
];

const 生成地图HTML = () =>
	台湾县市数据.map(
		名 =>
			`<button type="button" class="县市" id="${名}" ${等级}="0" data-area="${县市网格域[名]}">${短标签[名] || 名}</button>`
	).join('\n');

const 生成舞台HTML = () => {
	const 图例HTML = 图例项
		.map(([, 文案, 类名]) => `<span class="${类名}">${文案}</span>`)
		.join('');

	return [
		'<div id="舞台">',
		'<header class="页头">',
		'<h1>台灣制霸生成器</h1>',
		'<p class="副标题">全台縣市大解鎖，你的台灣足跡得幾分？</p>',
		'<p class="开发者">Developer: JY腦洞自留地</p>',
		'</header>',
		'<div class="主栏">',
		'<aside class="侧栏">',
		'<div id="分数">分数</div>',
		`<div id="等级" class="图例">${图例HTML}</div>`,
		'<p id="金句">地圖上的疆域是有限的，而靈魂的流浪從未有過邊界</p>',
		'</aside>',
		'<div class="地图外壳">',
		'<div id="地区" class="map-container">',
		生成地图HTML(),
		'</div>',
		'</div>',
		'</div>',
		'</div>',
	].join('\n');
};

体元素.insertAdjacentHTML('afterbegin', 生成舞台HTML());

const 保存 = $('#保存');
const 输出 = $('#输出');
const 输出图片 = $('img', 输出);
const 设置等级 = $('#设置等级');
体元素[加末尾](设置等级);

const 画板 = 新建元素('canvas');
const 上下文 = 画板.getContext(面);
画板[宽度] = 宽 * 比;
画板[高度] = 宽 * 比;

const 舞台 = $('#舞台');
const 地区 = $('#地区');
const 分数 = $('#分数');
const 弹窗地区名 = $('#弹窗地区名');
const 关闭设置等级 = $('#关闭设置等级');
const 弹窗选项们 = [...设置等级.querySelectorAll('.弹窗选项 [data-level]')];
const 输出样式 = 输出[样式];

const 全关闭 = _ => 设置等级.classList.remove('显示');

const 更新弹窗当前等级高亮 = 当前等级值 => {
	弹窗选项们.forEach(链接 => {
		链接.classList.toggle('当前', 链接[获取属性](数据属性头 + 等级) === 当前等级值);
	});
};

const 数据 = {};

const 获取点击的县市元素 = 事件 => {
	const 元素 = 事件.target.closest ? 事件.target.closest('.县市') : null;
	return 元素;
};

const 获取所有省元素们 = _ => [...地区.querySelectorAll('.县市')];
const 获取所有省等级们 = _ => 获取所有省元素们().map(元素 => 元素[获取属性](等级) || 零);
const 获取所有省等级们字符串 = _ => 获取所有省等级们().join(空字);

const 保存等级们 = _ => {
	本地存储.setItem(本地存储等级们钥匙, 获取所有省等级们字符串());
};

const 获取等级们并生效 = _ => {
	const 等级们字串 = 本地存储.getItem(本地存储等级们钥匙) || 空字;
	获取所有省元素们().forEach((元素, 下标) => {
		元素[设置属性](等级, 等级们字串[下标] || 零);
	});
};

const 在方块附近显示设置等级 = 省元素 => {
	const 方块方位 = 获取元素方位(省元素);
	const 当前等级值 = 省元素[获取属性](等级) || '0';
	const 县市名 = 省元素[唯一标识];
	const 显示名 = 短标签[县市名] || 县市名.replace(/\(.*\)/, '');

	弹窗地区名[肉] = `@${显示名}`;
	更新弹窗当前等级高亮(当前等级值);
	设置等级.classList.add('显示');
	设置等级[样式].visibility = 'hidden';
	设置等级[样式].left = '0';
	设置等级[样式].top = '0';

	const 菜单宽 = 设置等级.offsetWidth || 200;
	const 菜单高 = 设置等级.offsetHeight || 300;
	const 间隙 = 10;

	let 左 = 方块方位.right + 间隙;
	let 上 = 方块方位.top;

	if (左 + 菜单宽 > 视窗.innerWidth - 最小间距) {
		左 = 方块方位.left - 菜单宽 - 间隙;
	}
	if (左 < 最小间距) {
		左 = 数学[最大](最小间距, 方块方位.left + (方块方位.width - 菜单宽) / 二);
	}
	if (上 + 菜单高 > 视窗.innerHeight - 最小间距) {
		上 = 方块方位.bottom - 菜单高;
	}
	上 = 数学[最大](最小间距, 数学[最小](上, 视窗.innerHeight - 菜单高 - 最小间距));

	设置等级[样式].left = 数学[四舍五入](左) + 像素;
	设置等级[样式].top = 数学[四舍五入](上) + 像素;
	设置等级[样式].visibility = 空字;
};

添加事件监控(地区, 点击, 事件 => {
	事件[停止冒泡]();
	const 省元素 = 获取点击的县市元素(事件);
	if (!省元素) return;
	数据.省元素 = 省元素;
	在方块附近显示设置等级(省元素);
});

添加事件监控(关闭设置等级, 点击, 事件 => {
	事件[停止冒泡]();
	全关闭();
});

添加事件监控(文档, 点击, 事件 => {
	if (设置等级.contains(事件.target)) return;
	if (事件.target.closest && 事件.target.closest('#地区 .县市')) return;
	全关闭();
});

const 计分 = _ => {
	const 分 = 获取所有省等级们().reduce((全, 当前) => 全 + (+当前 || 零), 零);
	分数[肉] = `分数: ${分}`;
};

添加事件监控(设置等级, 点击, 事件 => {
	事件[停止冒泡]();
	const 选项 = 事件.target.closest ? 事件.target.closest('[data-level]') : 事件[靶子];
	if (!选项 || !选项[获取属性](数据属性头 + 等级)) return;
	数据.省元素[设置属性](等级, 选项[获取属性](数据属性头 + 等级));
	计分();
	全关闭();
	保存等级们();
});

获取等级们并生效();
计分();

const 获取字体数据地址 = 地址 =>
	取(地址)
		[那么](资源 => 资源.blob())
		[那么](
			原始数据 =>
				new Promise((resolve, reject) => {
					const 读 = new FileReader();
					读.onload = 事件 => resolve(事件.target.result);
					读.onerror = reject;
					读.readAsDataURL(原始数据);
				})
		);

const 获取字体样式 = (字体名, 回调) => {
	获取字体数据地址(`${字体名}.woff?v={version}`)
		[那么](地址 => 回调(`@font-face{font-family:${字体名};${源}:url(${地址})}`))
		.catch(_ => 回调(空字));
};

const 结束页面加载 = _ => 如何做爱元素[清除属性](加载中属性);

获取字体样式(字体名, 样式字串 => {
	if (样式字串) {
		const 样式元素 = 新建元素(样式);
		样式元素[肉] = 样式字串;
		头元素[加末尾](样式元素);
	}
	设置延时(结束页面加载, 二 * 千);
});
设置延时(结束页面加载, 3 * 千);

const 绘制画布文本 = (文本, x, y, 字号, 对齐 = 'center') => {
	上下文.font = `${字号}px ${字体名}, PingFang SC, Microsoft YaHei, sans-serif`;
	上下文.fillStyle = '#111';
	上下文.textAlign = 对齐;
	上下文.textBaseline = 'middle';
	上下文.fillText(文本, x, y);
};

const 绘制元素到画布 = (元素, 舞台方, sx, sy) => {
	const 方 = 获取元素方位(元素);
	const x = (方.left - 舞台方.left) * sx;
	const y = (方.top - 舞台方.top) * sy;
	const w = 方.width * sx;
	const h = 方.height * sy;

	if (元素.classList.contains('县市')) {
		const lv = 元素[获取属性](等级) || '0';
		上下文.fillStyle = 等级色[lv] || '#FFF';
		上下文.fillRect(x, y, w, h);
		上下文.strokeStyle = '#111';
		上下文.lineWidth = 4 * sx;
		上下文.strokeRect(x + 2 * sx, y + 2 * sy, w - 4 * sx, h - 4 * sy);
		const 字号 = parseFloat(getComputedStyle(元素).fontSize) * sy;
		绘制画布文本(元素.textContent, x + w / 二, y + h / 二, 字号);
		return;
	}

	if (元素.id === '分数') {
		绘制画布文本(元素.textContent, x, y + h / 二, 60 * sy, 'left');
		return;
	}

	if (元素.id === '金句') {
		绘制画布文本(元素.textContent, x, y + h / 二, 20 * sy, 'left');
	}
};

const 日志 = _ =>
	((新建图())[源] = `https://lab.magiconch.com/api/china-ex/log?levels=${获取所有省等级们字符串()}&r=${文档[来源]}`);

const 结束保存状态 = _ => 如何做爱元素[清除属性](运行中属性);

const 保存图像 = _ => {
	if (!舞台 || !保存) return;

	如何做爱元素[设置属性](运行中属性, '');

	const 舞台方 = 获取元素方位(舞台);
	const sx = (宽 * 比) / 舞台方.width;
	const sy = (高 * 比) / 舞台方.height;

	上下文.fillStyle = 背景色;
	上下文.fillRect(零, 零, 宽 * 比, 高 * 比);

	$('.页头 h1', 舞台) &&
		绘制画布文本(
			$('.页头 h1', 舞台).textContent,
			((获取元素方位($('.页头 h1', 舞台)).left +
				获取元素方位($('.页头 h1', 舞台)).right) /
				二 -
				舞台方.left) *
				sx,
			(获取元素方位($('.页头 h1', 舞台)).top + 获取元素方位($('.页头 h1', 舞台)).height / 二 - 舞台方.top) * sy,
			60 * sy
		);

	$('.页头 .副标题', 舞台) &&
		绘制画布文本(
			$('.页头 .副标题', 舞台).textContent,
			((获取元素方位($('.页头 .副标题', 舞台)).left +
				获取元素方位($('.页头 .副标题', 舞台)).right) /
				二 -
				舞台方.left) *
				sx,
			(获取元素方位($('.页头 .副标题', 舞台)).top +
				获取元素方位($('.页头 .副标题', 舞台)).height / 二 -
				舞台方.top) *
				sy,
			28 * sy
		);

	$('.页头 .开发者', 舞台) &&
		绘制画布文本(
			$('.页头 .开发者', 舞台).textContent,
			((获取元素方位($('.页头 .开发者', 舞台)).left +
				获取元素方位($('.页头 .开发者', 舞台)).right) /
				二 -
				舞台方.left) *
				sx,
			(获取元素方位($('.页头 .开发者', 舞台)).top +
				获取元素方位($('.页头 .开发者', 舞台)).height / 二 -
				舞台方.top) *
				sy,
			13 * sy
		);

	获取所有省元素们().forEach(元素 => 绘制元素到画布(元素, 舞台方, sx, sy));

	$('#分数', 舞台) && 绘制元素到画布($('#分数', 舞台), 舞台方, sx, sy);
	$('#金句', 舞台) && 绘制元素到画布($('#金句', 舞台), 舞台方, sx, sy);

	$('#等级 span', 舞台).forEach(span => {
		const 方 = 获取元素方位(span);
		const x = (方.left - 舞台方.left) * sx;
		const y = (方.top - 舞台方.top) * sy;
		const w = 方.width * sx;
		const h = 方.height * sy;
		const 类 = [...span.classList].find(c => c.startsWith('lv'));
		const lv = 类 ? 类.replace('lv', '') : '0';
		上下文.fillStyle = 等级色[lv] || '#FFF';
		上下文.fillRect(x, y, w, h);
		上下文.strokeStyle = '#111';
		上下文.lineWidth = 1.5 * sx;
		上下文.strokeRect(x, y, w, h);
		绘制画布文本(span.textContent, x + w / 二, y + h / 二, 11 * sy);
	});

	画板.toBlob(
		元素数据 => {
			if (!元素数据) {
				结束保存状态();
				视窗.alert('生成图片失败，请换用 Chrome / Safari 浏览器重试。');
				return;
			}
			const 地址 = 统一资源定位[新建数据地址](元素数据);
			输出图片[源] = 地址;
			输出样式[展示] = 'flex';
			设置延时(_ => {
				下载文件(地址, 保存文件名);
				结束保存状态();
			}, 50);
		},
		'image/png'
	);
	日志();
};

const 下载文件 = (地址, 文件名, 元素 = 新建元素(啊)) => {
	if (!是社交媒体) 元素.download = 文件名;
	元素[目标] = 地址;
	元素[点击]();
};

if (保存) {
	添加事件监控(保存, 点击, 事件 => {
		事件[停止冒泡]();
		保存图像();
	});
}

添加事件监控($(啊, 输出), 点击, _ => {
	输出样式[展示] = 无;
});
