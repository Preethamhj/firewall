const express = require("express");
const cors = require("cors");
const dataRoutes = require("./routes/dataRoutes");
const { PORT } = require("./config/serverConfig");

const app = express();

app.use(cors());
app.use(express.json({ limit: "2mb" }));

// Routes
app.use("/api", dataRoutes);

// Health check route
app.get("/", (req, res) => {
    res.json({ message: "Backend server running successfully!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Backend server running on port ${PORT}`);
});
