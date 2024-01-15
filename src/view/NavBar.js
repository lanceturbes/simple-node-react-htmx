/** @typedef {import("#types").NavLinkItem} NavLinkItem */
import {createElement as h} from "react"

/** @type {NavLinkItem[]} */
const links = [
    {name: "Home", path: "/view/home", pushUrl: "/"},
    {name: "About", path: "/view/about", pushUrl: "/about"},
]

export default function NavBar() {
    return h(
        "header",
        null,
        h(
            "nav",
            null,
            ...links.map(item => {
                return h(
                    "a",
                    {
                        href: item.path,
                        "hx-boost": "true",
                        "hx-target": "#body-content",
                        "hx-swap": "innerHTML",
                        "hx-trigger": "click",
                        "hx-push-url": item.pushUrl,
                    },
                    item.name,
                )
            }),
        ),
    )
}
