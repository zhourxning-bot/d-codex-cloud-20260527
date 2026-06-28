---
name: context-handoff
description: Turn an in-progress conversation into a copy-paste handoff for a new chat. Use when the user wants to continue work in a fresh conversation, says to resume in a new chat, asks for a context summary or handoff note, or needs a file/prompt that preserves decisions, constraints, files, and the next action.
---

# Context Handoff

Use this skill when the goal is not to solve the task directly, but to package the current conversation so another chat can continue without re-reading everything.
Prefer the user's language by default. If the source conversation mixes English and Chinese, keep the handoff in the user's dominant language and keep the restart prompt copy-ready without adding extra translation noise unless the user asked for bilingual output.

## What to produce

Prefer a compact, copy-ready handoff packet. The default output is chat text that the user can paste into a new conversation.

If the user explicitly asks for a file, or if the context is long enough that a file is safer, also write `handoff.md` in the current working directory unless the user gave a different path.

If both text and file are useful, provide both and say so clearly. The user should be able to choose either method without asking again.

If the user explicitly asks for the shortest possible restart, allow an ultra-minimal mode: one `Start here` line plus a single copy-ready sentence. Do not add the full template in that case unless a file is also needed for correctness.

## Output priority

Use this order to decide what to emit:

0. **Ultra-minimal restart**
   - Use only when the user explicitly asks for the shortest possible restart.
   - Emit one `Start here` line plus one copy-ready sentence.
   - Skip the full template unless a file is needed for correctness.

1. **Short text only**
   - Use when the task is straightforward.
   - Use when the next chat only needs a small amount of context.
   - Use when the handoff can fit cleanly in a short prompt without losing important decisions.

2. **Text + file**
   - Use when the task is useful to hand off in chat, but the context is detailed enough that a file would preserve it better.
   - Use when there are several decisions, file paths, constraints, or open questions that matter.
   - Use when the user said a file would be helpful but still wants a fast copy option.

3. **File strongly preferred**
   - Use when the conversation is long, complex, or likely to be pasted poorly if only text is provided.
   - Use when exact wording, paths, ordering, or multiple constraints must survive into the next chat.
   - Use when the user explicitly wants a durable handoff note or asks for something they can keep and reuse later.

If the choice is borderline, default to **text + file**. That gives the user both speed and safety without forcing a second request.

If the user explicitly asks for only the next step, only a short restart line, or only a quick summary, honor that and keep the output text-only unless a file is necessary to preserve correctness.

## Task classification

Before writing the handoff, classify the conversation into one main type. This helps the next chat open with the right tone and level of detail.

- **Action / execution**: the next step is to run tools, edit files, or perform a concrete operation.
- **Analysis / decision**: the next step is to compare options, find causes, or recommend a path.
- **Writing / rewriting**: the next step is to draft, refine, or turn material into a reusable prompt or document.
- **Troubleshooting**: the next step is to diagnose a failure or recover a broken state.
- **Planning / coordination**: the next step is to sequence work, split responsibilities, or prepare a handoff.

Use the classification to shape the opening sentence of the new chat:

- Action / execution -> start with the concrete task and the immediate next move.
- Analysis / decision -> start with the decision question and the criteria that matter.
- Writing / rewriting -> start with the desired output format and tone.
- Troubleshooting -> start with the symptom, the most relevant evidence, and what has already been ruled out.
- Planning / coordination -> start with the end state and the constraints around who does what next.

## Start line

Always generate one short `start here` line for the next chat. This is the fastest possible restart.

Example:

```text
Start here: continue from the current state and finish the handoff as a copy-ready prompt, then write the longer markdown version if needed.
```

When the conversation is complex, make the `start here` line more specific:

- name the task type
- mention the current state
- mention the next action
- mention any hard constraint that should not be lost

The `start here` line should be the first thing the user can paste into a new chat if they only want the fastest possible restart.

## How to decide the handoff shape

Read the current conversation and decide which of these modes fits best:

1. **Continue directly**: use only when the next step is already obvious, the user is still on the same task, and no new packaging decision is needed. In this case, still provide a short handoff summary first, then continue.
2. **Copy-paste handoff**: the task has useful context, decisions, files, or constraints that should survive into a new chat. This is the default.
3. **Minimal reset**: the user only needs the topic restated in one or two lines. Keep it short and avoid inventing structure.

When unsure, choose the copy-paste handoff. The purpose of the skill is to reduce re-explaining, not to preserve the entire transcript.

For very long or complex threads, still give a short text handoff first, then create the file as a more durable version. Say explicitly that the text is the fastest option and the file is the safer option.

## What to extract

Distill the conversation into these items:

- The real goal
- What has already been done
- Current state
- Important decisions already made
- Constraints, risks, and things not to repeat
- Files, paths, links, or artifacts that matter
- The exact next step
- Any open questions that still block progress

Do not dump raw transcript. Do not repeat every side discussion. Preserve only what the next chat needs to continue correctly.

## Output format

Use this exact structure unless the user asks for something different:

```markdown
# Handoff

## Goal
<one sentence>

## Done
- <what is already complete>

## Current State
- <what exists right now>

## Decisions
- <important choices already made>

## Constraints
- <must-not-break items, scope limits, style rules, risk notes>

## Files / Links
- <absolute paths or URLs that matter>

## Next Step
- <the next action that should happen immediately>

## Open Questions
- <only the unresolved items that actually block or change the next step>

## Paste Into New Chat
<a ready-to-paste prompt that tells the next agent exactly how to continue>
```

If the conversation is complex, add a short lead-in before the template that says:

- this is the fastest copy-paste version
- a file is also available for safer handoff
- either method works

## Language handling

- Match the user's language unless the user asks for bilingual output.
- For GitHub-ready handoffs, keep headings and the restart prompt consistent in one primary language. If bilingual output is requested, use the primary language first and keep the second language concise.
- Do not translate the same idea twice unless it materially helps the next chat or the file is meant for reuse by a mixed-language audience.
See the companion examples file for concrete restart shapes, including a publishable GitHub-friendly layout.

## Paste-in prompt rules

Make the final section directly usable in a new chat. Write it as an instruction, not as a summary of the summary.

Good prompt shape:

- State the goal
- Mention the key decisions and constraints
- Include the exact next action
- Ask the next agent to continue from there without re-litigating the old context

Example:

```text
Continue from this context:
- Goal: ...
- Already done: ...
- Constraints: ...
- Next step: ...
Do not restate the whole background. Go straight to the next step and ask only if a missing detail blocks progress.
```

## File output rules

If writing `handoff.md`, mirror the same structure as the chat output.

- Keep the file plain Markdown
- Use the current workspace unless the user specifies another folder
- Use `handoff.md` by default
- If the user asks for multiple handoffs or a task-specific filename, choose a short descriptive name such as `handoff-design.md` or `handoff-debug.md`
- If the user wants both a file and chat output, give both, with the chat text matching the file content closely
- If the context is especially complex, make the file the more complete version and keep the chat version shorter for quick copying
- If both are provided, label which one is faster to use and which one is safer to preserve detail
- If you prepare a GitHub release version, place long bilingual examples outside `SKILL.md` unless they are needed to make the skill usable right away

## Delivery order

When you return the result, use this order:

1. `Start here` line
2. Short copy-paste handoff text
3. Optional file notice, if a file was created or is strongly recommended
4. The file path, if one was written

This order makes the fastest restart obvious first, while still preserving the safer version when needed.

## Quality bar

The handoff is good if a fresh chat can continue without asking for the story again.

That means:

- It names the real objective, not just the topic
- It preserves the current state and decisions
- It tells the next chat what to do first
- It avoids unnecessary detail
- It is short enough to paste without cleanup
