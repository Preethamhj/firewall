const { encryptPayload } = require("../utils/crypto");

exports.processData = (req, res) => {
    const input = req.decrypted;

    console.log("📥 Decrypted data:", input);

    const response = {
        status: "success",
        received: input,
        serverTime: new Date()
    };

    const encryptedResponse = encryptPayload(response);

    res.json({ payload: encryptedResponse });
};
