---
title: 'Prompting for layout: structuring content before pixels'
date: 2026-02-22T09:49:00
description: How I use LLMs to outline narrative architecture before opening InDesign. Saving hours of revision on every long-form report.
image: ''
---

### Prompting for Layout: Structuring Content Before Pixels

The most expensive revisions in editorial design are structural ones — discovering on page 18 that the information hierarchy doesn't support the chapter conclusion, or that a section's visual rhythm is off because the content never had a defined arc to begin with.

I used to solve this by doing extensive content mapping before opening InDesign. Now I use LLMs as a thinking partner for that mapping stage. This is not about automating design. It is about using a language model to stress-test narrative architecture before I commit to a layout grid.

***

**The problem with opening the file first**

Most design workflows begin with the file. The designer opens InDesign (or PowerPoint, or Figma), creates the first page, and begins placing content. Structure emerges from arrangement — which means structural problems emerge late, when they're expensive.

Long-form reports — the kind I produce for institutional clients, government agencies, and global consultancies — typically run 40 to 150+ pages. A structural revision at page 60 means reworking not just copy, but cross-references, chapter openers, running headers, index entries, and page numbering. It means hours. Sometimes days.

The solution is to solve the structure before opening the file. This is not new wisdom. What has changed is that I now have a conversational tool that can help me work through structure faster and more rigorously than I can alone.

***

**What I actually prompt for**

I don't ask LLMs to write my reports. I ask them to help me audit and stress-test the narrative structure of content I already have.

A typical prompt sequence for a long-form report looks like this:

**Step 1 — Content inventory prompt:** _"Here is a list of sections and their key data points for a report on [topic]. Acting as an editorial strategist, identify: (1) what the logical reading order should be, (2) where the reader will lose the thread, (3) which sections need visual separation vs. which should flow continuously."_

**Step 2 — Hierarchy stress-test prompt:** _"Given this section structure, what is the single most important finding? Is it positioned where a skimming reader will find it first? If not, what structural change would fix that?"_

**Step 3 — Visual rhythm prompt:** _"Based on this section structure, suggest a pattern of text-heavy pages, data-heavy pages, and visual-break pages that would give the report a sustainable reading rhythm for a 60-page document."_

**Step 4 — Layout brief generation:** _"Generate a one-paragraph layout brief for each of these five sections, describing the visual weight, density, and hierarchy required — not the visual style, only the structural and informational demands."_

The output of step 4 is what I bring into InDesign. I know, before I design page one, what each section needs to do structurally. I design to those briefs, not to a blank page.

***

**A concrete example: the LNG sector report**

I directed the design and visualization for a multi-phase LNG sector report that generated 200+ downloads, 300+ engagements, and 200+ LinkedIn interactions after publication. The report synthesized dense technical and economic data for a non-specialist audience.

Before opening InDesign, I used an LLM session to map the narrative arc across the report's major sections. The model helped me identify that two sections which the client had ordered sequentially were actually addressing the same reader question from different angles — they would have produced confusion if kept separate. I proposed a restructure; the client accepted it. That restructure happened before a single layout frame was placed.

The model also flagged a section that was data-heavy without a reader payoff — a finding section that ended with more complexity rather than a conclusion. We reworked the section logic before layout began. The final report's reader feedback specifically cited its clarity of argument.

***

**What LLMs are good at in this workflow (and what they are not)**

_Good for:_

- Identifying logical gaps and redundancies in a content structure
- Generating alternative sequencing options quickly so I can evaluate trade-offs
- Producing layout briefs that translate content characteristics into structural design requirements
- Stress-testing a narrative against a specific reader persona ("a CFO who has 8 minutes with this report")

_Not good for:_

- Making aesthetic design decisions (they will generate aesthetic-sounding advice that is not grounded in the actual document)
- Replacing the designer's judgment about visual hierarchy
- Understanding the specific constraints of a given layout system (column grids, master page constraints, print bleed requirements)
- Producing final copy without significant editorial review

The workflow treats the LLM as a structural editor and a thinking partner, not as a designer or writer.

***

**The prompting principles that matter**

After integrating LLMs into my pre-layout workflow across multiple long-form projects, a few principles have proven consistently valuable:

**Be explicit about the reader.** "A federal policymaker reading this in 10 minutes on a tablet" produces different structural advice than "a portfolio manager reviewing this report in depth before a committee meeting." The model needs a reader to reason about.

**Give it the constraint, not just the content.** "This section must communicate three key findings and must fit on a two-page spread" produces more useful structural advice than "here is the section, what do you think?"

**Ask it to find the problem, not just describe the content.** "Where does this structure fail?" is a more useful prompt than "summarize this structure." You want the model to stress-test, not reflect.

**Iterate.** The first response is rarely the most useful. I treat LLM prompting like a briefing session with a consultant — the first pass surfaces assumptions, the second pass gets into the actual problem.

***

**The time savings in practice**

For a 60-page institutional report, pre-layout content mapping with an LLM session takes roughly 60–90 minutes. Without this step, structural revisions mid-layout typically add 4–8 hours of rework. The efficiency math is not complicated.

More significantly, the final documents are structurally tighter. The argument is clearer. The reader can follow the logic without a tour guide. That is not an aesthetic outcome — it is a communication outcome, and it is what clients actually measure.

***

**Sources and further reading**

- Anthropic — _Claude usage guidelines and prompt design_ — [anthropic.com](https://www.anthropic.com/)
- OpenAI — _Prompt engineering guide_ — [platform.openai.com/docs/guides/prompt-engineering](https://platform.openai.com/docs/guides/prompt-engineering)
- White, J.V. — _Editing by Design_ (3rd ed.) — Allworth Press (structural editorial thinking for visual communicators)
- Lupton, E. — _Thinking with Type_ (2nd ed.) — Princeton Architectural Press (on hierarchy and reading flow)
- Wolstenholme, C. — _Content Strategy for the Web_ — New Riders (on narrative architecture in long-form content)
- Nielsen Norman Group — _Content Prioritization: Importance vs. Priority_ — [nngroup.com](https://www.nngroup.com/)
- Avallain Author — _Structured content authoring methodology_ — [avallain.com](https://www.avallain.com/) _(tool used in my editorial workflow)_
