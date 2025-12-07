const express = require("express");
const app = express();

let requestCount = 0;

app.use((req, res, next) => {
    requestCount++;
    req.start = Date.now();
    res.on("finish", () => {
        const duration = Date.now() - req.start;
        console.log(`Request to ${req.url} took ${duration}ms`);
    });
    next();
});

app.get("/metrics", (req, res) => {
    const mem = process.memoryUsage();
    res.json({
        uptime: process.uptime(),
        requestCount,
        memory: {
            rss: mem.rss,
            heapUsed: mem.heapUsed,
            heapTotal: mem.heapTotal
        },
        timestamp: Date.now()
    });
});



// Render 会提供 PORT 环境变量
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
