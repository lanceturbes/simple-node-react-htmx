import {createElement as h, Fragment} from "react"

export default function HomePage() {
    return h(
        Fragment,
        null,
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
