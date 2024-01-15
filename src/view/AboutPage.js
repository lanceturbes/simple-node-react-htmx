import {createElement as h} from "react"
import BaseLayout from "#view/BaseLayout.js"

export default function AboutPage() {
    return h(
        BaseLayout,
        {title: "About"},
        h("h1", null, "About"),
        h("p", null, "There's nothing about this about page that's special..."),
    )
}
