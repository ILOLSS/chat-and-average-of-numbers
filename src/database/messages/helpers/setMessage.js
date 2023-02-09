
export default async function setMessage(author, text) {
    try {
        const fs = require("fs");
        const path = require("path");
        const process = require("process");

        const database_path = path.join(process.cwd(), "src", "database", "messages", "messages.json");
        const data = await fs.promises.readFile(database_path, { encoding: "utf8" });
        const obj = JSON.parse(data);
        obj.messages.unshift({ id: obj.messages.length, author: author, text: text });
        const json = JSON.stringify(obj);
        await fs.promises.writeFile(database_path, json, { encoding: "utf8" });
    } catch (error) {
        console.error(error);
        throw error;
    }
}
