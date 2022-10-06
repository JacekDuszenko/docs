---
id: reviewer-assignment
slug: /use-cases/reviewer-assignment
title: Reviewer Assignment
---

GitHub already provides code reviewer suggestions and the ability to use CODEOWNERS to automatically assign reviewers.

However, the code reviewer suggestion is still a manual process for developers and the CODEOWNERS feature is very limited:

1. You associate owners to files. For simple changes in those files or large files, CODEOWNERS can be extremely noisy. `reviewpad.yml` files allow you to specify ownership at the semantic level and also based on the nature of the changes.
2. There can only exist a CODEOWNERS file per repository; as opposed, `reviewpad.yml` files will be extensible and you will be able to import central configuration files.
3. Rules have precedence, so you need to understand the context of previous rules for a given rule. Reviewpad workflows allow you to specify when a [workflow should always be](/guides/syntax#workflow) considered regardless of the context.

Out of the box, Reviewpad supports three actions to assign reviewers, [assignReviewer](/guides/built-ins#assignreviewer), [assignTeamReviewer](/guides/built-ins#assignteamreviewer) and [assignRandomReviewer](/guides/built-ins#assignrandomreviewer).
