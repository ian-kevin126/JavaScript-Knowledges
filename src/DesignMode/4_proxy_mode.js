/**
 * 代理模式
 *
 * 代理是一个对象，它可以用来控制对本体对象的访问，它与本体对象实现了同样的接口，代理对象会把所有的调用方法传递给本体对象；
 * 代理模式最基本的形式是对访问进行控制，而本体对象则负责执行所分派的那个对象的函数或者类，简单来说本体对象注重的是去执行
 * 页面上的代码，代理对象则控制本体对象何时被实例化，何时被使用；我们在上面的单例模式中是其实就使用过一些代理模式，就是使用
 * 代理模式实现单例模式的实例化，其他的事情就交给本体对象去处理。
 *
 * 代理模式的优点：
 * 1 - 代理对象可代替本体被实例化，并使其可以被远程访问
 * 2 - 它还可以把本体实例化推迟到真正需要的时候，对于实例化比较费时的本体对象，或者因为尺寸比较大以至于不用时保存在内存中
 *     的本体，我们可以推迟实例化该对象。
 *
 */

/**
 * 我们先来理解代理对象代替本体对象被实例化的例子：比如一个男生想送给喜欢的女生一个礼物，但是他不好意思自己去送，就想委托
 * 比人帮他送，于是我们可以这样来使用代理模式编写代码：
 */
// 声明一个女生对象
const Girl = function (name) {
  this.name = name;
};

// 声明一个男生
const Boy = function (girl) {
  this.girl = girl;
  // 送礼物
  this.sendGift = function (gift) {
    console.log(`Hi ${this.girl.name}，send you a gift：${gift}`);
  };
};

// 声明代理人来代替送礼
const ProxyObj = function (girl) {
  this.girl = girl;
  // 代理人送礼物
  this.proxySendGift = function (gift) {
    // 代理模式负责本体对象实例化
    new Boy(this.girl).sendGift(gift);
  };
};

const _proxy = new ProxyObj(new Girl("石原里美"));
_proxy.proxySendGift("满天星"); // Hi 石原里美，send you a gift：满天星

/**
 * 对于我们提到的优点中的第二点，我们下面可以来理解一下虚拟代理，虚拟代理用于控制对那种创建开销很大的本体访问，它会把本体的实例化推迟到
 * 有方法被调用的时候；比如说现在又一个对象的实例化很慢的话，不能在网页加载的时候立即完成，我们可以为其创建一个虚拟代理，让他把该对象的
 * 实例推迟到需要的时候。
 */

/**
 * 1、理解使用虚拟代理实现图片预加载
 *
 * 在网页开发中，图片的预加载是一种比较常用的技术，如果直接给img标签节点设置src的话，如果图片比较大的情况下，或者网速比较慢的时候，
 * 那么图片未加载完之前，图片会有一段时间是空白场景，这样对于用户体验来说是不友好的，那么这个时候我们可以在图片未加载完之前我们可以
 * 使用一个loading加载图来作为占位符，来提示用户该图片正在加载，等图片加载完成后我们可以对该图片直接进行赋值即可。
 */

// 第一种方案：不使用代理的预加载图片函数
const myImage = (function () {
  const imageNode = document.createElement("img");
  document.body.appendChild(imageNode);

  // <img />标签每出现一次，一个Image对象就会被创建。
  const img = new Image();
  // onload：当图像装载完毕时调用的事件句柄
  img.onload = function () {
    imageNode.src = this.src;
  };
  return {
    setSrc: function (src) {
      // 初识状态，加载loading图
      imageNode.src =
        "http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif";
      // 当图片装载完成后再将图片赋值
      img.src = src;
    },
  };
})();
// 调用方式
myImage.setSrc(
  "https://img.alicdn.com/tps/i4/TB1b_neLXXXXXcoXFXXc8PZ9XXX-130-200.png"
);

// 第二种方案：使用代理模式来编写预加载图片的代码
const myImage1 = (function () {
  const imageNode = document.createElement("img");
  document.appendChild(imageNode);
  return {
    setSrc: function (src) {
      imageNode.src = src;
    },
  };
})();

const ProxyImage = (function () {
  const img = new Image();
  img.onload = function () {
    myImage1.setSrc(this.src);
  };
  return {
    setSrc: function (src) {
      myImage1.setSrc(
        "http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif"
      );
      img.src = src;
    },
  };
})();

// 调用方式
ProxyImage.setSrc(
  "https://img.alicdn.com/tps/i4/TB1b_neLXXXXXcoXFXXc8PZ9XXX-130-200.png"
);

/**
 * 第一种方案是使用一般的编码方式实现图片的预加载技术，首选创建 imageNode 节点，然后调用myImage.setSrc方法的时候，先给图片一个预加载loading图片
 * 当图片加载完成之后，再给img元素赋值。
 *
 * 第二种方案是使用代理模式来实现的，myImage函数只负责创建img元素，代理函数ProxyImage负责给图片设置loading图片，当图片真正加载完成后，再调用myImage
 * 中的myImage.setSrc方法设置图片的路径，他们之间的优缺点如下：
 *
 * 1 - 第一种方案一般的方法代码的耦合性太高，一个函数内负责做几件事情，比如创建img元素，和实现给未加载图片完成之前设置loading加载状态等多项事情，
 *     为满足面向对象设计原则中单一职责原则，并且当某个时候不需要代理的时候，需要从myImage函数内把代码删掉，这样代码耦合性太高。
 *
 * 2 - 第二种方案使用代理模式，其中myImage函数只负责做一件事——创建img元素加入到页面，其中的加载loading图片交给代理函数ProxyImage去做，当图片加载成功后
 *     代理函数ProxyImage会通知及执行myImage函数的方法，同时当以后不需要代理对象的时候，我们直接可以调用本体对象的方法即可。
 */

/**
 * 从上面的代理模式我们可以看到，代理模式和本体对象中有相同的方法setSrc，这样设置有如下2个优点：
 *
 * 1 - 用户可以放心地请求代理，他们只关心是否能得到想要的结果。假如我们不需要代理对象的话，直接可以换成本体对象调用该方法即可。
 * 2 - 在任何使用本体对象的地方都可以替换成使用代理。
 *
 * 当然如果代理对象和本体对象都返回一个匿名函数的话，那么也可以认为他们具有一致的接口，比如以下代码：
 */
const myImage2 = (function () {
  const imageNode = document.createElement("img");
  document.body.appendChild(imageNode);
  return function (src) {
    imageNode.src = src;
  };
})();

// 代理模式
const ProxyImage2 = (function () {
  const img = new Image();
  img.onload = function () {
    myImage2(this.src);
  };
  return function (src) {
    myImage2("http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif");
    img.src = src;
  };
})();

// 调用方式
ProxyImage2(
  "https://img.alicdn.com/tps/i4/TB1b_neLXXXXXcoXFXXc8PZ9XXX-130-200.png"
);

/**
 * 2、虚拟代理合并http请求的理解
 *
 * 比如在做后端系统中，有表格数据，每一条数据前面有复选框按钮，当点击复选框按钮时候，需要获取id后传递给服务器发送ajax请求
 * 服务器端需要记录这条数据，去请求，如果我们每点击一次就向服务器发送一个http请求的话，对于服务器的压力太大了，网络请求比较
 * 频繁，但是如果现在该系统的实时数据不是很高的话，我们可以通过一个代理函数收集一段时间内（比如说2-3秒）的所有id，一次性
 * 发ajax请求给服务器，相对来说网络请求频率降低了，服务器压力也就减小了。
 */

// 首先html结构如下：
{
  /* 
<p>
    <label>选择框</label>
    <input type="checkbox" class="j-input" data-id="1"/>
</p>
<p>
    <label>选择框</label>
    <input type="checkbox" class="j-input" data-id = "2"/>
</p>
<p>
    <label>选择框</label>
    <input type="checkbox" class="j-input" data-id="3"/>
</p>
<p>
    <label>选择框</label>
    <input type="checkbox" class="j-input" data-id = "4"/>
</p> 
*/
}

// 一般情况下，JS如下编写
const checkboxs = document.getElementsByClassName("j-input");
for (let i = 0; i < checkboxs.length; i++) {
  (function (j) {
    checkboxs[j].onclick = function () {
      if (this.checked) {
        let id = this.getAttribute("data-id");
        // 如下是ajax请求
      }
    };
  })(i);
}

/**
 * 下面我们通过虚拟代理的方式，演示2秒，在2秒后获取所有选中复选框的按钮id，一次性给服务器发送请求。
 *
 * 通过点击页面的复选框，选中的时候增加一个属性 isFlag，没有选中的时候删除该属性 isFlag，然后延迟个2秒，在2秒后重新判断页面上
 * 所有复选框中有 isFlag 的属性上的 id，存入数组，然后代理函数调用本体函数的方法，把延迟2秒后的所有id一次性发给本体方法，本体
 * 方法可以获取所有的id，可以向服务器发送ajax请求，这样的话，服务器的请求压力相对来说减小了。
 */
// 本体函数
const mainFunc = function (ids) {
  console.log(ids);
  //TODO:再把所有的id一次性发ajax请求给服务器
};
// 代理函数  通过代理函数获取所有的id传给本体函数去执行
const ProxyFunc = (function () {
  let cache = []; // 保存一段时间内的id
  let timer = null; // 定时器
  return function (checkboxs) {
    // 判断如果定时器有的话，就不进行覆盖操作
    if (timer) {
      return;
    }
    timer = setTimeout(function () {
      // 在2秒内获取所有被选中的id，通过属性 isFlag 判断是否被选中
      for (let i = 0; i < checkboxs.length; i++) {
        if (checkboxs[i].hasAttribute("isFlag")) {
          let id = checkboxs[i].getAttribute("data-id");
          cache[cache.length] = id;
        }
      }
      mainFunc(cache.join(",")); // 2秒后需要给本体函数传递所有的id
      // 清空定时器
      clearTimeout(timer);
      timer = null;
      cache = [];
    }, 2000);
  };
})();

const checkboxes = document.getElementsByClassName("j-input");
for (let i = 0; i < checkboxes.length; i++) {
  (function (j) {
    checkboxes[j].onclick = function () {
      if (this.checked) {
        // 给当前节点增加一个 isFlag 属性
        this.setAttribute("isFlag", 1);
      } else {
        this.removeAttribute("isFlag");
      }
      // 调用代理函数
      ProxyFunc(checkboxes);
    };
  })(i);
}

/**
 * 3、理解缓存代理
 *
 * 缓存代理的含义就是对第一次运行时候进行缓存，当再一次运行相同的时候，直接从缓存里面取，这样做的好处是避免重复一次运算功能，如果
 * 运算非常复杂的情况下，对性能很不友好，那么使用缓存对象可以提高性能，我们可以先来理解一个简单的缓存例子：
 */
// 计算乘法
const mult = function () {
  let a = 1;
  for (let i = 0; i < arguments.length; i++) {
    a = a * arguments[i];
  }
  return a;
};

// 计算加法
const plus = function () {
  let a = 0;
  for (let i = 0; i < arguments.length; i += 1) {
    a += arguments[i];
  }
  return a;
};

// 代理函数
const ProxyFunc1 = function (fn) {
  let cache = {}; // 缓存对象
  return function () {
    const args = Array.prototype.join.call(arguments, ",");
    if (args in cache) {
      return cache[args]; // 使用缓存代理
    }
    return (cache[args] = fn.apply(this, arguments));
  };
};

const proxyMult = ProxyFunc1(mult);
console.log(proxyMult(1, 2, 3, 4)); // 24
console.log(proxyMult(1, 2, 3, 4)); // 取缓存24

const proxyPlus = ProxyFunc1(plus);
console.log(proxyPlus(1, 2, 3, 4)); // 10
console.log(proxyPlus(1, 2, 3, 4)); // 缓存取 10
