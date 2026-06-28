# context-handoff

`context-handoff` is a reusable Codex skill for turning an in-progress conversation into a concise, copy-ready restart for a new chat.

It is designed as an evolved handoff workflow, not just a summary generator. Instead of always returning the same shape, it chooses the restart format that best fits the conversation.

## What it solves

When a thread is ending or needs to move into a fresh chat, this skill preserves only the information that matters for continuation:

- the real goal
- what is already done
- the current state
- important decisions
- constraints and risks
- relevant files and links
- the exact next step
- any blocking open questions

It avoids raw transcript dumping and keeps the restart line short enough to paste immediately.

## Key capabilities

- Output shaping
  - ultra-minimal restart
  - short text only
  - text + file
  - file-first handoff

- Task classification
  - action / execution
  - analysis / decision
  - writing / rewriting
  - troubleshooting
  - planning / coordination

- Language handling
  - defaults to the user's language
  - supports English and Chinese threads
  - keeps bilingual output concise when needed

- Reusable publishing structure
  - core behavior stays in `SKILL.md`
  - examples live in `examples.md`
  - usage guidance lives in `README.md`

## Why this is an evolved version

A basic handoff skill usually just summarizes a conversation. This version is more useful in practice because it:

- decides the output shape instead of forcing one format
- gives an ultra-minimal restart when speed matters
- switches to file-first handoff when precision matters more than speed
- classifies the conversation so the next chat opens with the right tone
- keeps the restart line short and copy-ready
- handles English, Chinese, or mixed-language threads without extra translation noise
- separates examples from the core skill so the trigger text stays lean
- is designed for reuse and GitHub publishing

## Installation

### Option 1: Download the packaged skill

Download `dist/context-handoff.skill` and install it in Codex.

### Option 2: Use the repository

Clone or browse this repository directly:

- `zhourxning-bot/d-codex-cloud-20260527`

## File layout

- `skills/context-handoff/SKILL.md` - main skill logic
- `skills/context-handoff/README.md` - skill-local usage notes
- `skills/context-handoff/examples.md` - restart shape examples
- `dist/context-handoff.skill` - packaged installable skill
- `RELEASE.md` - English release note

## Release

- Version: `v1.0.0`
- Tag: `context-handoff-v1.0.0`
- Release note: `RELEASE.md`

## Practical usage

Use this skill when:

- you want to continue work in a fresh conversation
- you need a compact, copy-ready restart prompt
- the thread is complex enough that a file is safer than chat text alone
- you want the restart to be classified and shaped for the next task type

## Notes

- The packaged skill is kept lean so the trigger text stays effective.
- Longer examples are split out of the main skill body on purpose.
- The skill is meant to be reusable across future handoff threads, not just this one.

