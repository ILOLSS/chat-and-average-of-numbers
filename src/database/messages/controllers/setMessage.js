
export default async function setMessage(author, text) {
    try {
        const db = require("@/services/database/database.js");
        let author_date = await db.query("SELECT * FROM author WHERE name = $1", [author]);

        if (!author_date.rows.length) {
            await db.query("INSERT INTO author (name) values ($1)", [author]);
            author_date = await db.query("SELECT * FROM author WHERE name = $1", [author]);
        }

        const author_id = author_date.rows[0].id;
        await db.query("INSERT INTO message (text, author_id) values ($1, $2)", [text, author_id]);
    } catch (error) {
        console.error(error);
        throw error;
    }
}
