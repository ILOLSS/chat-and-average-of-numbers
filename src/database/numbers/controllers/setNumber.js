
export default async function setNumber(number) {
    try {

        const db = require("@/services/database/database.js");
        const prev_data = await db.query("SELECT * FROM numbers ORDER BY id DESC LIMIT 1");

        if (!prev_data.rows.length) {
            await db.query("INSERT INTO numbers (current) values ($1)", [number]);
            return { 
                previous: null, 
                current: number, 
                average: null 
            };
        }

        const prev = prev_data.rows[0].current;
        const average = (number + prev) / 2;
        await db.query("INSERT INTO numbers (previous, current, average) values ($1, $2, $3)", [prev, number, average]);

        return {
            previous: prev,
            current: number,
            average: average
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}
