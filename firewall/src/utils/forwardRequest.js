const axios = require("axios");
const { backendURL } = require("../rules/firewallRules");

exports.forwardToBackend = async (req) => {
    try {
        const response = await axios.post(
            backendURL + req.originalUrl,    // forward same endpoint
            req.body,                        // encrypted payload untouched
            { headers: req.headers }
        );

        return response.data;

    } catch (err) {
        console.error("❌ Error forwarding request to backend:", err.message);
        return { error: "Backend request failed" };
    }
};
