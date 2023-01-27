
export default async function getNumbers() {
    try {
        const fs = require('fs');
        const path = require('path');
        const process = require('process');

        const database_path = path.join(process.cwd(), 'src', 'database', 'numbers', 'numbers.json');
        const data = await fs.promises.readFile(database_path, { encoding: 'utf8' });
        const obj = JSON.parse(data);
        return obj.numbers;
    } catch (error) {
        throw error;
    }
}
