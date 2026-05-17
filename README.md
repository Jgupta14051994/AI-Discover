# AI-Discover

Intelligent AI tool discovery and integration platform — helping developers find the right AI tool for the job without drowning in options.

---

## The Problem

Hundreds of AI tools launch every week. Developers waste hours evaluating tools that don't fit their stack, pricing model, or use case. There's no neutral, structured place to compare them.

---

## What It Does

- **Smart Discovery** — Filter AI tools by category, capability, pricing, and integration complexity
- **Side-by-side Comparison** — Compare features across similar platforms before committing
- **Integration Guides** — Step-by-step setup instructions for each tool
- **Use Case Matching** — Find tools matched to your specific workflow, not just a generic tag
- **Community Ratings** — Real use-case examples and ratings from developers

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + TypeScript |
| Backend | Flask (Python) + RESTful API |
| Database | PostgreSQL |
| DevOps | Docker, GitHub Actions CI/CD |

---

## Quick Start

**With Docker (recommended):**
```bash
git clone https://github.com/Jgupta14051994/AI-Discover.git
cd AI-Discover
docker-compose up
```
App runs at `http://localhost:3000`

**Local setup:**
```bash
# Backend
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py          # runs on :5000

# Frontend (new terminal)
cd frontend
npm install
npm start              # runs on :3000
```

---

## Project Structure

```
AI-Discover/
├── frontend/          # React application
│   ├── src/
│   └── package.json
├── backend/           # Flask API server
│   ├── app.py
│   ├── models/
│   └── routes/
├── .github/
│   └── workflows/     # CI/CD pipelines
└── docker-compose.yml
```

---

## Contributing

1. Fork the repo and create a feature branch
2. Make your changes with clear commit messages
3. Open a pull request — contributions welcome

See [CONTRIBUTING.md](./CONTRIBUTING.md) for full guidelines.

---

## Contact

Built by [Jyoti Gupta](https://jyotigupta.dev) · [LinkedIn](https://linkedin.com/in/jyotigupta7) · jyoti@jyotigupta.dev

Licensed under [MIT](./LICENSE)