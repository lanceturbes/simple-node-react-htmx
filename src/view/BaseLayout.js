import {h} from "preact"
import NavBar from "#view/NavBar.js"

/**
 * @typedef {Object} BaseLayoutProps
 * @property {string} title
 * @property {import("preact").ComponentChildren} [children]
 */

/** @param {BaseLayoutProps} props */
export default function BaseLayout(props) {
    return h("html", {lang: "en"}, [
        h("head", null, [
            h("meta", {charSet: "UTF-8"}),
            h("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0",
            }),
            h("meta", {name: "color-scheme", content: "light dark"}),
            h("title", null, props.title),
        ]),
        h("body", null, [h(NavBar, null), props.children]),
    ])
}
