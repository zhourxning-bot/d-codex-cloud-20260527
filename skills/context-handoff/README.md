# context-handoff

Create a copy-ready restart for a new chat without dumping raw transcript.

## What it does

- Classifies the current conversation
- Chooses the right handoff shape: short text, text + file, or file-first
- Preserves only the decisions, constraints, files, and next step that the next chat needs
- Keeps the restart line short and paste-ready

## When to use

- The user wants to continue in a fresh conversation
- The user asks for a context summary, handoff note, or restart prompt
- The user wants a file or reusable prompt that preserves decisions and constraints

## Language support

- Default to the user's language
- If the conversation mixes English and Chinese, keep the handoff in the user's dominant language
- Use bilingual output only when the user asks for it or when the handoff is meant for mixed-language reuse

## Files

- `SKILL.md`: the operational skill
- `examples.md`: sample restart shapes for quick reference

