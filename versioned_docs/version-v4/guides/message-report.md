---
title: "Message Report"
id: "message-report"
slug: "message-report"
---

The Message Report is a GitHub comment which is automatically created when using the built-ins [info](/guides/built-ins#info), [warn](/guides/built-ins#warn), and [error](/guides/built-ins#error) in your Reviewpad file.

The Message Report provides a convenient method to collate various messages into a single comment and categorize them by priority levels: INFO, WARNING, and ERROR.

### Example

Here is an example of a Reviewpad file and the Message Report generated when the pull request gets old.

```yaml
workflows:
  - name: long-live
    run:
      # Verify if the pull request was created more than 10 days ago
      if: $createdAt() < 10 days ago
      then: $info("This pull request is old. Please consider closing it.")
```

![Reviewpad Info Report](/img/reports/info.png)
