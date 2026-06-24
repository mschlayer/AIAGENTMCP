# MCP Server Setup Guide

## Available Official MCP Servers

We've cloned the official MCP servers repository. Available servers:
- `everything` - Filesystem search with ripgrep
- `fetch` - HTTP client for making web requests  
- `filesystem` - Local filesystem access
- `git` - Git repository operations
- `memory` - Persistent memory management
- `sequentialthinking` - Chain-of-thought reasoning
- `time` - Time and date utilities

## Setting Up a MCP Server

### Option 1: Use an Official Server
To set up any of the official servers:

```bash
cd servers/src/[SERVER_NAME]
npm install
npm run build
```

### Option 2: Playwright Server Setup

The Playwright MCP server is not in the official repository. Here are alternatives:

**A) Ecosystem Playwright Server** (Community maintained)
```bash
git clone https://github.com/christophebeling/playwright-mcp.git
cd playwright-mcp
npm install
npm run build
```

**B) Use Playwright with Fetch/Filesystem**
Combine the `fetch` and `filesystem` servers to interact with web pages and files.

### Configure in VS Code

Add to your `.vscode/settings.json` or MCP configuration:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "node",
      "args": ["path/to/playwright-mcp/dist/index.js"]
    }
  }
}
```

## Next Steps

1. Choose which server you want to use
2. Navigate to the server directory
3. Run: `npm install && npm run build`
4. Configure in your VS Code or application settings
5. Test the connection

