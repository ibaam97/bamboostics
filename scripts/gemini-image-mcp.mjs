import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const envFile = path.join(projectRoot, ".env");
const env = { ...process.env };

if (!env.GEMINI_API_KEY) {
  if (!fs.existsSync(envFile)) {
    throw new Error(`Gemini API key is missing and ${envFile} does not exist.`);
  }

  const contents = fs.readFileSync(envFile, "utf8");
  const keyLine = contents
    .split(/\r?\n/)
    .find((line) => /^\s*(?:export\s+)?GEMINI_API_KEY\s*=/.test(line));

  if (!keyLine) {
    throw new Error(`GEMINI_API_KEY was not found in ${envFile}.`);
  }

  const rawValue = keyLine.replace(/^\s*(?:export\s+)?GEMINI_API_KEY\s*=\s*/, "").trim();
  const quote = rawValue[0];
  if (quote === "'" || quote === '"') {
    if (rawValue.at(-1) !== quote) {
      throw new Error(`GEMINI_API_KEY in ${envFile} has an unterminated quoted value.`);
    }
    env.GEMINI_API_KEY = rawValue.slice(1, -1);
  } else {
    env.GEMINI_API_KEY = rawValue.replace(/\s+#.*$/, "").trim();
  }
}

if (!env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is empty.");
}

env.OUTPUT_DIR = path.join(projectRoot, "public", "ai-generated");

const server = spawn(
  "npx",
  ["-y", "@jimothy-snicket/gemini-image-mcp@0.6.2"],
  { cwd: projectRoot, env, stdio: "inherit" },
);

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => server.kill(signal));
}

server.on("error", (error) => {
  console.error(`Failed to start Gemini Image MCP: ${error.message}`);
  process.exitCode = 1;
});

server.on("exit", (code, signal) => {
  process.exitCode = code ?? (signal ? 1 : 0);
});
