class Koa {
    constructor() {
        this.middleWare = []
    }
    use(fn) {
        this.middleWare.push(fn);
        return this
    }
    listen() {
        // 省去启动服务的步骤，直接让middleWare开始运行
        return compose(this.middleWare)({});
    }
}

function compose(middleWare) {
    return function (ctx) {
        let index = -1;
        function next(i) {
            index = i;
            if (index === middleWare.length) return Promise.resolve()
            let fn = middleWare[index];
            return Promise.resolve(fn(ctx, () => next(i + 1)));
        };
        next(0);
    }
}

let app = new Koa();

app.use(async (ctx, next) => {
    console.log(1);
    await next();
    console.log(2);
}).use(async (ctx, next) => {
    console.log(3);
    await next();
    console.log(4);
}).use(async (ctx, next) => {
    console.log(5);
    await next();
    console.log(6);
});

app.listen();

module.exports = Koa;