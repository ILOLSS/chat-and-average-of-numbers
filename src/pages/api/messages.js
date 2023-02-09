import setMessage from "@/database/messages/helpers/setMessage";

export default async function handler(req, res) {
    if (!req.query.author) {
        res.status(404).json({ message: "Invalid author" });
        return;
    }
    if (!req.query.text) {
        res.status(404).json({ message: "Invalid text" });
        return;
    }
    switch (req.method) {
    case "POST":
        try {
            await setMessage(req.query.author, req.query.text);
            res.status(200).json({ message: "OK" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
        break;
    default:
        res.status(404).json({ message: "Not Found" });
    }
}
