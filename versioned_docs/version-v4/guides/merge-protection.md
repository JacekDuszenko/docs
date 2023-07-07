---
title: "Merge Protection"
id: "merge-protection"
slug: "merge-protection"
---

# Merge Protection

Reviewpad provides a robust merge protection mechanism. This mechanism essentially allows you to prevent the merging of a Pull Request under certain conditions. For instance:

- A database migration script has been modified but lacks approval from the DBA team.
- The commit messages do not adhere to the conventional commits specification.
- A 'critical' annotated class has been modified but lacks approval from the tech lead.
- The author of the PR is an external contributor and doesn't have approval from the 'safety' team.

## Configuration

To configure this merge protection mechanism, follow these steps:

1. Set up a GitHub branch protection rule to prevent merging as long as the Reviewpad status is not passed (green).
![Configure Status Check](/img/blocking-merge/configure-status-check.png)

2. Invoke the [`failCheckStatus`](/guides/built-ins/#failCheckStatus) built-in to turn the Reviewpad status to failed (red). Note that this built-in doesn't halt the execution of Reviewpad and can be invoked multiple times to accumulate reasons for blocking the merge.
For instance, this is how to fail the Reviewpad status when the head branch name doesn't comply with a naming convention:

```yaml
workflows:
  - name: Merge Protection when the branch name doesn't comply with naming convention
    run:
      - if: $matchString("(fix|feat|docs)/.+", $head()) == false
        then: $failCheckStatus($sprintf("The head branch %s must start either with fix/, feat/ or docs/", [$head()]))
```
3. After Reviewpad execution completes, if the Reviewpad status is red, the merge button is disabled and the reasons for failure can be accessed by clicking on the "Details" link:

![Merge Protection](/img/blocking-merge/merge-protection.png)
![Reviewpad Failure Details](/img/blocking-merge/reviewpad-failed.png)

Once you have this configuration set up, you can use the [`failCheckStatus`](/guides/built-ins/#failCheckStatus) built-in in any workflow to establish comprehensive merge protection.
