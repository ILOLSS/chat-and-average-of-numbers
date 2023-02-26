import getNumbers from "@/database/numbers/controllers/getNumbers";
import setNumber from "@/database/numbers/controllers/setNumber";
import isNumber from "@/database/numbers/helpers/isNumber";

export default async function handler(req, res) {
    switch (req.method) {
    case "GET":
        try {
            const numbers = await getNumbers();
            res.status(200).json({ numbers: numbers });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
        break;
    case "POST":
        if (!isNumber(req.query.number)) {
            res.status(404).json({ message: "Invalid number" });
            return;
        }

        try {
            const data = await setNumber(Number(req.query.number));
            res.status(200).json({ data: data });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
        break;
    default:
        res.status(404).json({ message: "Not Found" });
    }
}
