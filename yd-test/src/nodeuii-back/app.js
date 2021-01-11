import Koa from "koa";
import controllerInit from "./controllers/controllerInit.js";
import  router  from 'koa-simple-router';
import config from "./config";
import  log4js from 'log4js';
import co from "co";
import errorHandler from "./middwares/errorHandler.js";
import render from "koa-swig";
import serve from "koa-static";
const app = new Koa();
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
//集中的处理所有的路由
controllerInit.getAllrouters(app,router);
//静态资源管理
app.use(serve(config.staticDir));
app.listen(config.port,()=>{
 console.log(`yd-web listening on ${config.port}`);
});