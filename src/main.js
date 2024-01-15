import express from "express"
import cors from "cors"
import {createElement as h} from "react"
import {renderToString as render} from "react-dom/server"

import HomePage from "#view/HomePage.js"
import AboutPage from "#view/AboutPage.js"
import MusicList from "#view/MusicList.js"
import {getSongListAsync} from "#util/getSongListAsync.js"

// Build application instance
const app = express()

// Apply middleware
app.use(cors())
app.use("/", express.static("public"))
app.get("/", (_req, res) => {
    const body = render(h(HomePage))
    res.header("content-type", "text/html")
    res.send(body)
})
app.get("/about", (_req, res) => {
    const body = render(h(AboutPage))
    res.header("content-type", "text/html")
    res.send(body)
})
app.get("/view/music-list", async (_req, res) => {
    const songs = await getSongListAsync()
    const body = render(h(MusicList, {songs}))
    res.header("content-type", "text/html")
    res.send(body)
})

// Start server
const port = 5000
console.info(`Listening at http://localhost:${port} ...`)
app.listen(port)
