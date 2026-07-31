# Bennis Garage

## Technologies

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Package Manager:** Bun
- **Linting:** ESLint 9 (Flat Config)
- **Formatting:** Prettier

## Getting Started

### Install Bun

Bun needs to be installed once:

```bash
# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"

# macOS / Linux
curl -fsSL https://bun.sh/install | bash
```

### Install Dependencies

```bash
bun install
```

### Start Development Server

```bash
bun run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Script | Description |
|--------|-------------|
| `bun run build` | Create production build |
| `bun run start` | Start production server |
| `bun run lint` | Run ESLint |
| `bun run fmt` | Format code |
| `bun run fmt:check` | Check code formatting |