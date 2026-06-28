# Codex Context Handoff v1.0.0

Released: 2026-06-28

## Summary

`Codex Context Handoff` is now published as a reusable skill for turning an in-progress conversation into a concise, copy-ready restart for a new chat.

## What is included

- `skills/context-handoff/SKILL.md`
- `skills/context-handoff/README.md`
- `skills/context-handoff/handoff-examples.md`
- `dist/context-handoff.skill`

## Highlights

- Clear output priority: ultra-minimal restart, short text only, text + file, or file-first
- Explicit task classification for action, analysis, writing, troubleshooting, and planning flows
- Short `Start here` line for the fastest possible restart
- English and Chinese support with language selection based on the user's context
- Publishable examples split out of the main skill body to keep the trigger text lean

## Why this is an evolved handoff skill

A basic handoff skill usually just summarizes a conversation. This version goes further and makes the restart itself more reliable in real use:

- It decides the output shape instead of always giving the same format.
- It gives the user an ultra-minimal restart when speed matters.
- It switches to a file-first handoff when precision and preservation matter more than speed.
- It classifies the conversation so the next chat opens with the right tone and next action.
- It keeps the restart line short enough to paste immediately.
- It handles English, Chinese, or mixed-language threads without forcing extra translation noise.
- It separates examples from the core skill so the trigger text stays cleaner and easier to maintain.
- It is designed for reuse and GitHub publishing, not just one-off chat cleanup.

## Install

- Download the packaged skill: `dist/context-handoff.skill`
- Or use the GitHub repository directly: `zhourong-bot/codex-context-handoff`

## Notes

- The skill avoids raw transcript dumping and preserves only what the next chat needs.
- The release tag for this version is `context-handoff-v1.0.0`.
