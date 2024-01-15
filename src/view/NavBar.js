import {h} from "preact"

/** @type {import("#types").NavLinkItem[]} */
const links = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
]

export default function NavBar() {
    return h("header", null, [
        h("nav", null, [
            ...links.map(item => {
                return h("a", {href: item.path}, item.name)
            }),
        ]),
    ])
}
