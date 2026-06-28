# Codex Context Handoff

`Codex Context Handoff` is a reusable Codex skill for turning an in-progress conversation into a concise, copy-ready restart for a new chat.

It is designed as an evolved handoff workflow, not just a summary generator. Instead of always returning the same shape, it chooses the restart format that best fits the conversation.

## Status

- Version: `v1.0.0`
- Release tag: `context-handoff-v1.0.0`
- Package: `dist/context-handoff.skill`

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

## Quick start

1. Install `dist/context-handoff.skill` into Codex.
2. Use it when a conversation needs to continue in a new chat.
3. Ask for the output shape you need:
   - `short restart only`
   - `text + file`
   - `file-first handoff`
4. Paste the `Start here` line into the next conversation.

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

## Examples

### Simple restart

Start here: continue the current file rename task and only report the final renamed path.

### Complex handoff

Start here: resume the skill rewrite, keep the ultra-minimal restart branch, and preserve the GitHub-ready language handling rules.

### File-first handoff

Start here: package the current context into a handoff file because the thread is long and the exact decisions need to survive into the next chat.

## Installation

### Option 1: Download the packaged skill

Download `dist/context-handoff.skill` and install it in Codex.

### Option 2: Use the repository

Clone or browse this repository directly:

- `zhourong-bot/codex-context-handoff`

## File layout

- `skills/context-handoff/SKILL.md` - main skill logic
- `skills/context-handoff/README.md` - skill-local usage notes
- `skills/context-handoff/handoff-examples.md` - restart shape examples
- `dist/context-handoff.skill` - packaged installable skill
- `CHANGELOG.md` - English release note

## Release

- Version: `v1.0.0`
- Tag: `context-handoff-v1.0.0`
- Release note: `CHANGELOG.md`

## FAQ

### How is this different from a normal handoff?

A normal handoff usually just summarizes a thread. This skill chooses the output shape, adds task classification, and can switch between short text, text + file, or file-first output so the next chat starts cleanly.

### When should I use the file version?

Use the file version when the conversation is long, precise wording matters, or the restart must survive copy/paste without losing detail.

### Does it support Chinese and English?

Yes. It defaults to the user's language and handles mixed-language threads without forcing extra translation noise.

## Practical usage

Use this skill when:

- you want to continue work in a fresh conversation
- you need a compact, copy-ready restart prompt
- the thread is complex enough that a file is safer than chat text alone
- you want the restart to be classified and shaped for the next task type

## Roadmap

- Keep the skill body lean while expanding examples in docs
- Refine the release notes and usage docs as the skill evolves
- Add more restart samples if new conversation patterns show up in practice

## Contributing

This repository is organized to keep the operational skill compact and the publishing materials easy to update.

- Main logic: `skills/context-handoff/SKILL.md`
- User-facing guidance: `skills/context-handoff/README.md`
- Sample shapes: `skills/context-handoff/handoff-examples.md`
- Packaged artifact: `dist/context-handoff.skill`

## Notes

- The packaged skill is kept lean so the trigger text stays effective.
- Longer examples are split out of the main skill body on purpose.
- The skill is meant to be reusable across future handoff threads, not just this one.
