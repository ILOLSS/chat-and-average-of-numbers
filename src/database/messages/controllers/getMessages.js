
export default async function getMessages() {
    try {
        const db = require("@/services/database/database.js");
        const data = await db.query("SELECT author.name as author, message.text FROM author INNER JOIN message ON author.id=message.author_id");
        return data.rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
