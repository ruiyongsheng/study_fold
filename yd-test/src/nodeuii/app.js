import Koa from "koa";
import config from "./config";
import  log4js from 'log4js';
import co from "co";
import errorHandler from "./middwares/errorHandler.js";
import render from "koa-swig";
import serve from "koa-static";
import { createContainer, Lifetime,asClass, asValue } from "awilix";
import { loadControllers, scopePerRequest } from 'awilix-koa';
const app = new Koa();
//ioc控制反转的容器
const container = createContainer();
//每一次请求new
app.use(scopePerRequest(container));
//装载所有的所有的services到controller 完成利用切面的注入
container.loadModules([__dirname+'/services/*.js'], {
    formatName: 'camelCase',
    resolverOptions: {
      lifetime: Lifetime.SCOPED
    }
  });
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: 'memory', 
    varControls:["[[","]]"],
    ext: 'html'
}));
// const config = configure(app);
log4js.configure({
    appenders: { cheese: { type: 'file', filename: `${__dirname}/logs/yd.log` } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');
//错误处理的中心
errorHandler.error(app,logger);
app.use(loadControllers(__dirname + '/controllers/*.js', { cwd: __dirname }))
//静态资源管理
app.use(serve(config.staticDir));
app.listen(config.port,()=>{
 console.log(`yd-web listening on ${config.port}`);
});