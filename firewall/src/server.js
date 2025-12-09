const express = require("express");
const cors = require("cors");
const firewallChecks = require("./middleware/firewallChecks");
const { forwardToBackend } = require("./utils/forwardRequest");

const app = express();

app.use(cors());
app.use(express.json({ limit: "2mb" }));

// Middleware firewall check
app.use(firewallChecks);

// Forward all API calls AFTER validation
app.use(async (req, res) => {
    console.log("➡️ Forwarding encrypted payload to backend...");

    const result = await forwardToBackend(req);

    res.json(result);
});

// Start Firewall server
const FIREWALL_PORT = 4000;

app.listen(FIREWALL_PORT, () => {
    console.log(`🛡️ Firewall server running on port ${FIREWALL_PORT}`);
});
