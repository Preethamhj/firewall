module.exports = {
    allowedIPs: ["127.0.0.1", "::1"],   // modify based on requirement

    allowedRoutes: ["/api/data"],

    allowedMethods: ["POST"],

    requiredHeaders: ["content-type"],

    message:["hi"],
    
    backendURL: "http://localhost:5000"  // backend server
};
