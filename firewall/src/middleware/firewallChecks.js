const {
    allowedIPs,
    allowedRoutes,
    allowedMethods,
    requiredHeaders,
} = require("../rules/firewallRules");

module.exports = async (req, res, next) => {
    const clientIP = req.ip.replace("::ffff:", ""); // normalize IP format

    console.log(`🌐 Incoming request from IP: ${clientIP}`);

    // 1. IP Filtering
    if (!allowedIPs.includes(clientIP)) {
        console.log("❌ Blocked: IP not allowed");
        return res.status(403).json({ message: "Blocked by Firewall (IP)" });
    }

    // 2. Route Filtering
    if (!allowedRoutes.includes(req.originalUrl)) {
        console.log("❌ Blocked: Route not allowed");
        return res.status(403).json({ message: "Blocked by Firewall (Route)" });
    }

    // 3. Method Filtering
    if (!allowedMethods.includes(req.method)) {
        console.log("❌ Blocked: Method not allowed");
        return res.status(403).json({ message: "Blocked by Firewall (Method)" });
    }

    // 4. Header Validation
    for (const header of requiredHeaders) {
        if (!req.headers[header]) {
            console.log("❌ Blocked: Missing required header:", header);
            return res.status(400).json({
                message: `Missing required header: ${header}`,
            });
        }
    }

    console.log("✅ Firewall validated request");
    next();
};
