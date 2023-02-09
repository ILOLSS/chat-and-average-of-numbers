
export default async function getMessages() {
    try {
        const fs = require("fs");
        const path = require("path");
        const process = require("process");

        const database_path = path.join(process.cwd(), "src", "database", "messages", "messages.json");
        const data = await fs.promises.readFile(database_path, { encoding: "utf8" });
        const obj = JSON.parse(data);
        return obj.messages;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
