import {createElement as h} from "react"
import BaseLayout from "#view/BaseLayout.js"

export default function HomePage() {
    return h(
        BaseLayout,
        {title: "Home"},
        h("h1", null, "Welcome!"),
        h(
            "p",
            null,
            "You have reached the home page. Seems like everything's just aboot good, then, eh?!",
        ),
        h("div", {
            "hx-swap": "outerHTML",
            "hx-get": "/view/music-list",
            "hx-trigger": "load",
        }),
    )
}
