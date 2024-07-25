import fs from "fs"

export function rf(path) {
    return fs.readFileSync(path).toString()
}

export function wf(path, data) {
    return fs.writeFile(path, data, (err) => {
        if (err) throw err;
    })
}

export var res = {A:0, C:0, T:0, G:0}