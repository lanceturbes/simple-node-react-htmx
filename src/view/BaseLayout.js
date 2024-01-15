/** @typedef {import("react").ReactNode} ReactNode */
import {createElement as h} from "react"
import NavBar from "#view/NavBar.js"

/**
 * @typedef {Object} BaseLayoutProps
 * @property {string} pageName
 */

/** @param {BaseLayoutProps} props */
export default function BaseLayout(props) {
    return h(
        "html",
        {lang: "en"},
        h(
            "head",
            null,
            h("meta", {charSet: "UTF-8"}),
            h("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0",
            }),
            h("meta", {name: "color-scheme", content: "light dark"}),
            h("script", {src: "https://unpkg.com/htmx.org@1.9.10"}),
            h("title", null, "Music Player"),
        ),
        h(
            "body",
            null,
            h(NavBar, null),
            h("div", {
                id: "body-content",
                "hx-swap": "innerHTML",
                "hx-get": `/view/${props.pageName}`,
                "hx-trigger": "load",
            }),
        ),
    )
}
