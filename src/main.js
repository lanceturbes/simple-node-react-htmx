import Koa from "koa"
import serve from "koa-static"
import cors from "@koa/cors"
import Router from "@koa/router"
import {h} from "preact"
import render from "preact-render-to-string"

import HomePage from "#view/HomePage.js"
import AboutPage from "#view/AboutPage.js"

const app = new Koa()

const router = new Router()
router.get("/", async ctx => {
    ctx.headers["content-type"] = "text/html"
    ctx.body = render(h(HomePage, {}))
})
router.get("/about", async ctx => {
    ctx.headers["content-type"] = "text/html"
    ctx.body = render(h(AboutPage, {}))
})

app.use(cors())
app.use(serve("./public"))
app.use(router.routes())
app.use(router.allowedMethods())

const port = 5000
console.info(`Listening at http://localhost:${port} ...`)
app.listen(port)
