const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "src", "combobox.css");
const destPath = path.join(__dirname, "dist", "combobox.css");

fs.mkdirSync(path.dirname(destPath), { recursive: true });
fs.copyFileSync(sourcePath, destPath);
