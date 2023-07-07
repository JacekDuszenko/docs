---
id: 5-minutes-tutorial
slug: /
title: 5 Minutes Tutorial
---

## Welcome to Reviewpad!

**:zap: Reviewpad is an application to speed up, secure, and automate your code review process on GitHub.**

Many actions surrounding pull requests such as reviewer assignment, labeling, and attention drawing differ for each pull request. In most cases, these actions are performed manually. However, we believe that most of these actions follow an implicit team policy that can be explicitly defined and automated.

## Install Reviewpad

If you've navigated to this '5 Minutes Tutorial', you've likely already enabled Reviewpad for one of your GitHub repositories. If not, begin by following the [installation instructions](installation).

## Policy-as-Code

Reviewpad is a GitHub App that responds to all events on pull requests and issues based on instructions contained in a `reviewpad.yml` configuration file. This `reviewpad.yml` configuration file should be located at the root of each repository on which Reviewpad is enabled. Without a `reviewpad.yml` file, Reviewpad will not take any action.

## First Workflow

Your `reviewpad.yml` configuration file primarily consists of a series of **workflows**. By using basic `if ... then ... else` and `forEach ... do` logic statements, you can devise a workflow that enforces a complete process.

Let's start by creating a workflow that adds the label `foo` to every pull request, regardless of the actions taken with this pull request.

1. Create the `reviewpad.yml` configuration file at the root of your repository
2. Define the following content:
```yaml
workflows:
  - name: My First Reviewpad Workflow
    run:
      - $addLabel("foo")
```
3. Commit your changes and merge them into the main branch
4. Create a new Pull Request
5. After a few seconds, Reviewpad will decorate this Pull Request with the `foo` label.

Congratulations! You've completed your first Reviewpad workflow.

:::info

`$addLabel("foo")` is what we call a built-in. Each call to a built-in should start with a `$` sign. Visit the [Built-ins](guides/built-ins) page for a complete list of available built-ins.

:::

## Second Worflow: Trigger Actions when Specific Code Sections are Modified

Let's say you want to implement the following workflow:
- Whenever a source file located in the `authentication` directory is modified:
  - Add the `security` label.
  - Assign for review to the `Security` team.
  - Post a comment to alert the author of the Pull Request.

You can implement this second workflow with Reviewpad as follows:

```yaml
workflows:
  - name: My First Reviewpad Workflow
    run:
      - $addLabel("foo")

  - name: Security Process When Modifying Authentication Layer
    run:
      - if: $hasFilePattern("**/authentication/**")
        then:
          - $addLabel("security")
          - $assignTeamReviewer(["Security"]) # This 'Security' team must exist in your GitHub Repository
          - $commentOnce("The Security team has been involved because the authentication layer is touched")
```

:::info

We recommend you review the documentation for the following built-ins used in this second workflow:
- [`$hasFilePattern`](guides/built-ins/#hasfilepattern)
- [`$addLabel`](guides/built-ins/#addlabel)
- [`$assignTeamReviewer`](guides/built-ins/#assignteamreviewer)
- [`$commentOnce`](guides/built-ins/#commentonce)

:::

## Next steps

Now that you are familiar with Reviewpad, you can start tailoring it to suit your specific needs.

Browse through our [built-ins](/guides/built-ins), [use cases](https://reviewpad.com/code-automation), and [common policies](https://reviewpad.com/automated-code-policies) to discover how Reviewpad can assist you.

:::info Terms and Conditions

By running Reviewpad, you are agreeing with [Reviewpad's Terms and Conditions](https://reviewpad.com/terms-and-conditions/).
:::

## Playground

We have designed a playground for you to **play with Reviewpad** and get a feel of how it works without having to push any changes to your repository.

You will find the following major components:
1. **Use cases** - These are some scenarios you can try. Each use case has a proposed Reviewpad configuration and a pull request to run the configuration against.
2. **Configuration** - This is the Reviewpad configuration defined to represent the use case. You can edit and see the results by running Reviewpad against the selected pull request.
3. **Pull request** - This is the pull request that Reviewpad will run against. You can edit the pull request and see the results by running Reviewpad against it.
4. **Sharable link** - This action generates an unique URL that contains all the configuration details (use case, configuration and pull request) you have selected in the playground allowing you to share these with others without them having to go through the same process of configuring everything from scratch.
5. **Output** - This is the output of Reviewpad when it runs against the selected pull request with the selected configuration. Please note that Reviewpad will run in dry-run mode, so it will not make any changes to the pull request.

<center>
<h1><a href="https://reviewpad.com/playground" target="_blank">Let's play 🦄</a></h1>
</center>

![Reviewpad playground](/img/playground-preview.png)
