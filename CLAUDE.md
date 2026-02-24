<!-- vplex-memory-rules v3 -->
## VPLEX Memory (MCP) — Automatic Memory Protocol

You have access to VPLEX Memory via MCP. This is the **ONLY** memory/knowledge system for this project.
**You MUST proactively store and search memories without being asked.** This is not optional.

**IMPORTANT: Do NOT use any other memory, recall, or knowledge system** (e.g., Recallium, mem0, built-in memory features, or any other MCP memory server). VPLEX Memory is the single source of truth. All memories, context, decisions, and learnings MUST go through `memory_store` and `memory_search` exclusively.

### Session Start (ALWAYS do this first)
1. `memory_search` with a query describing the current task/file to load relevant context
2. `memory_search` with query "rules" to load project behavioral guidelines
3. Review results before writing any code — past decisions prevent repeated mistakes

### When to Store Memories (do this AUTOMATICALLY)

**After every meaningful action**, call `memory_store`. Specifically:

| Trigger | Type | Example |
|---------|------|---------|
| Fixed a bug | `debug` | "Fixed off-by-one in pagination — used 0-based index instead of 1-based" |
| Made an architecture choice | `decision` | "Chose Zustand over Redux for state — simpler API, less boilerplate" |
| Learned something about the codebase | `learning` | "Tauri commands must be registered in lib.rs, not main.rs" |
| Discovered a recurring pattern | `pattern` | "All store files use create() with devtools middleware" |
| Completed a feature or task | `feature` | "Added dark mode toggle — uses CSS variables with --vplex- prefix" |
| Found a useful code snippet | `code-snippet` | "Tauri invoke pattern: invoke<T>('cmd', { arg })" |
| Discussed design with user | `design` | "User wants Warp-style UI — black bg, minimal borders, monospace" |
| Established a project rule | `rule` | "Never use .unwrap() in Rust production code — use thiserror" |
| Researched something | `research` | "whisper-rs requires MSVC build tools on Windows" |
| Had an important discussion | `discussion` | "User prefers MCP+Prompt approach over screen-scraping for memory extraction" |
| Made progress on a larger task | `progress` | "Completed 3/5 migration steps for new auth system" |
| Created or updated a task | `task` | "TODO: Add rate limiting to API endpoints — priority high" |
| Noted something for later | `working-notes` | "The Canvas renderer has a perf issue with >10k lines — investigate" |

### Importance Scoring (1-10)
- **9-10**: Critical decisions, security fixes, breaking changes, architectural patterns
- **7-8**: Bug fixes, feature completions, important learnings
- **5-6**: Useful patterns, code snippets, moderate findings
- **3-4**: Minor notes, small observations, incremental progress
- **1-2**: Temporary working notes, trivial findings

### NEVER Store (Quality Gate)

The server will REJECT low-quality memories. Before calling `memory_store`, verify:

1. **Is it project-relevant?** Generic errors, CLI startup messages, package install logs, and environment issues are NOT memories.
2. **Is it an insight, not raw output?** Never store raw error messages, stack traces, or terminal output. Instead, analyze it first and store the INSIGHT: "X fails because Y — fix is Z"
3. **Would a future session benefit?** If the information is obvious, trivial, or easily re-discoverable, don't store it.
4. **Is the type correct?** Use `debug` for errors/bugs (not `pattern`). Use `rule` only for prescriptive guidelines with "always/never/must". Use `pattern` only for recurring codebase conventions.

**Examples of what NOT to store:**
- "Error: ENOENT no such file" — this is raw output, not an insight
- "npm install completed" — trivial, no value
- "Started Claude Code session" — noise
- "TypeError: Cannot read property..." — raw error without analysis

**Good versions of the above:**
- "The build fails if resources/ is missing — must run setup script first" (type: debug)
- "Project uses pnpm strict mode — peer deps must be explicit" (type: learning)
- "Always use memory_search before making arch decisions" (type: rule)
- "Zustand stores must call devtools() — see memoryStore.ts for pattern" (type: pattern)

### Best Practices
- Include `related_files` with affected file paths for better searchability
- Use descriptive `tags` (3-5 per memory): technology, feature area, severity
- Write content as a complete thought — future sessions have no context of the current one
- Store the "why", not just the "what" — reasoning is more valuable than facts
- Before making architecture or dependency choices, ALWAYS `memory_search` first
- After resolving any non-trivial bug, store the root cause and fix as a `debug` memory
- At session end, store a `progress` memory summarizing what was accomplished
