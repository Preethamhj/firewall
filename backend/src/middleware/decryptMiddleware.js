const { decryptPayload } = require("../utils/crypto");

module.exports = (req, res, next) => {
    try {
        const cipherText = req.body.payload;

        if (!cipherText) {
            return res.status(400).json({ message: "Missing payload" });
        }

        const decrypted = decryptPayload(cipherText);

        if (!decrypted) {
            return res.status(400).json({ message: "Invalid encrypted payload" });
        }

        req.decrypted = decrypted;
        next();

    } catch (err) {
        res.status(500).json({ message: "Decryption error" });
    }
};
