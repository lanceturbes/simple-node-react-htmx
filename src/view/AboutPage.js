import {createElement as h, Fragment} from "react"

export default function AboutPage() {
    return h(
        Fragment,
        null,
        h("h1", null, "About"),
        h("p", null, "There's nothing about this about page that's special..."),
    )
}
