
export default async function getNumbers() {
    try {
        const db = require("@/services/database/database.js");
        const data = await db.query("SELECT * FROM numbers");
        return data.rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
