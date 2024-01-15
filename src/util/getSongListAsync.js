/** @typedef {import("#types").MusicFileData} MusicFileData */
import {readdir} from "node:fs/promises"
import {resolve, dirname} from "node:path"
import {fileURLToPath} from "node:url"

const currentDirectoryPath = dirname(fileURLToPath(import.meta.url))
const musicDirectoryPath = resolve(currentDirectoryPath, "../../public/music")

/** @returns {Promise<MusicFileData[]>} */
export async function getSongListAsync() {
    try {
        const fileNames = await readdir(musicDirectoryPath)
        return fileNames.reduce((list, name) => {
            if (name === ".gitkeep") {
                return list
            }
            list.push({
                displayName: convertPathToDisplayName(name),
                path: "/music/" + name,
            })
            return list
        }, /** @type {MusicFileData[]} */ ([]))
    } catch {
        throw new Error("Could not read music directory!")
    }
}

/**
 * @param {string} pathname
 * @returns {string}
 */
function convertPathToDisplayName(pathname) {
    let name = pathname.split("/").pop()
    name = name?.substring(0, name?.lastIndexOf("."))
    name = name?.replace(/[_-]/g, " ")
    name = name?.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
    })
    return name ?? "---"
}
