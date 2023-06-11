---
id: "the-reviewpad-way"
slug: "/guides/the-reviewpad-way"
title: "The Reviewpad Way"
---

# The Reviewpad Way

The Reviewpad Way is a set of guidelines that we recommend you follow when using Reviewpad to automate your code review process. We believe that following these guidelines will help you get the most out of Reviewpad and more importantly, will help you improve your code review process.

## Why?

The Reviewpad Way is based on our experience working with many different teams and organizations. We've seen what works and what doesn't, and we've distilled that knowledge into this set of guidelines.

## The Guidelines

### 1. Pull request should be ready to review {#draft-pull-request}

A draft pull request is a work in progress. It is not ready to be reviewed. It is not ready to be merged. It is not ready to be released. It is a work in progress.

Reviewpad automation should only be applied to pull requests that are ready to be reviewed. This means that Reviewpad automation should only be triggered when a pull request is no longer a draft.

### 2. Pull request should have a linked issue {#linked-issue}

When creating a pull request, it is recommended that you link it to an issue. This will help you track the pull request and the issue together while bringing context to the pull request. Context is important because it helps reviewers understand the pull request and the changes that it introduces.

### 3. Pull request should have a description {#description}

When creating a pull request, it is recommended that you add a description. This will help you communicate the purpose of the pull request and the changes that it introduces. This is important because it helps reviewers understand the pull request and the changes that it introduces.

### 4. Repository should have less than 7 open pull requests {#code-review-bottleneck-repository}

We recommend that you keep the number of open pull requests in a repository to less than 7. If you have more than 7 open pull requests, you have a code review bottleneck. This means that you have more work in progress than you can handle, which means that you are not able to review all of the pull requests promptly.

### 5. Developer should have less than 3 open pull requests {#code-review-bottleneck-developer}

We recommend that you keep the number of open pull requests per developer to less than 3. If you have more than 3 open pull requests per developer, you have a code review bottleneck. This might mean that you have developers producing more work than reviewers can handle, or it might mean that you have reviewers that are not reviewing pull requests promptly.

### 6. Pull request commits should follow the conventional commit format {#conventional-commit-format}

We recommend that you follow the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/) when writing commit messages. This will help you create a clear and consistent history of your project. It will also help to create a clear and automatic changelog.

### 7. Pull request titles should follow the conventional commit format {#conventional-commit-format-title}

We recommend that you follow the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/) when writing pull request titles. This is particularly important when merging a pull request with a squash merge strategy where the pull request title becomes the commit message.

### 7. Pull request should not have git conflicts {#no-git-conflicts}

<!-- TODO: Explain why this is important. -->

### 8. Pull request should be updated to date with the base branch {#up-to-date-with-base-branch}

<!-- TODO: Explain why this is important. -->

### 9. Pull request should have a linear history {#linear-history}

<!-- TODO: Explain why this is important. -->

### 10. Pull request checks should pass {#checks-pass}

<!-- TODO: Explain why this is important. -->

### 11. Pull request should have a reviewer {#reviewer}

<!-- TODO: Explain why this is important. -->

### 12. Request changes should be addressed {#address-request-changes}

<!-- TODO: Explain why this is important. -->

### 13. Pull request should be approved {#approved}

<!-- TODO: Explain why this is important. -->

### 14. Pull request should be automatically merged {#automatically-merge}

<!-- TODO: Explain why this is important. -->
