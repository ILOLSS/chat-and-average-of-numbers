
export default async function setNumber(number) {
    try {
        const fs = require('fs');
        const path = require('path');
        const process = require('process');

        const database_path = path.join(process.cwd(), 'src', 'database', 'numbers', 'numbers.json');
        const data = await fs.promises.readFile(database_path, { encoding: 'utf8' });
        const obj = JSON.parse(data);
        if (!obj.numbers.length) { // if first response
            obj.numbers.push({ id: 0, previous: null, current: number, average: null });
            const json = JSON.stringify(obj);
            await fs.promises.writeFile(database_path, json, { encoding: 'utf8' });
            return;
        }
        const prev = obj.numbers[0].current;
        const average = (number + prev) / 2;
        obj.numbers.unshift({ id: obj.numbers.length, previous: prev, current: number, average: average });
        const json = JSON.stringify(obj);
        await fs.promises.writeFile(database_path, json, { encoding: 'utf8' });
        return {
            previous: prev,
            current: number,
            average: average
        };
    } catch (error) {
        throw error;
    }
}
