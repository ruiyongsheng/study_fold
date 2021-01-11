// const indexController = {
//     indexAction() {
//         return async (ctx, next) => {
//             const indexModelIns = new IndexModel();
//             const result = await indexModelIns.getData();
//             ctx.body = await ctx.render('index/pages/index', { data: result });
//         }
//     }
// }
// export default indexController;

import { route, GET, POST, before } from 'awilix-koa';
@route("/")
@route("/index.html")
export default class IndexController {
    constructor({ indexService }) {
        this.indexService = indexService;
    }
    @GET()
    async getData(ctx, next){
        const result = await this.indexService.getData();
        ctx.body = await ctx.render('index/pages/index', { data: result });
    }
}