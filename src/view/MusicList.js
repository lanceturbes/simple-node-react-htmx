/** @typedef {import("#types").MusicFileData} MusicFileData */
import {createElement as h} from "react"

/**
 * @typedef {Object} MusicListProps
 * @property {MusicFileData[]} songs
 */

/** @param {MusicListProps} props */
export default function MusicList({songs}) {
    return h(
        "ul",
        null,
        ...songs.map(s => {
            return h(
                "li",
                null,
                h(
                    "label",
                    null,
                    s.displayName,
                    h("audio", {src: s.path, controls: true}),
                ),
            )
        }),
    )
}
