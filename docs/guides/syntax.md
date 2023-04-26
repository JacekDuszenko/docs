---
title: "Syntax"
id: "syntax"
slug: "syntax"
---

A Reviewpad configuration file has the following shape:

```yaml
mode: silent | verbose
ignore-errors: true | false
metrics-on-merge: true | false

extends:
  - configuration_1
  - configuration_2
  ...
  - configuration_N

labels:
  label_1
  label_2
  ...
  label_N

groups:
  - group_1
  - group_2
  ...
  - group_N

rules:
  - rule_1
  - rule_2
  ...
  - rule_N

workflows:
  - workflow_1
  - workflow_2
  ...
  - workflow_N

pipelines:
  - pipeline_1
  - pipeline_2
  ...
  - pipeline_N
```

:::note note

You can check the latest formal version of the format [here](https://github.com/reviewpad/schemas/blob/main/latest/schema.json).
:::

## Mode

The `mode` property in Reviewpad serves as a flag to turn on or off the generation of the [executed actions report](/guides/reports#executed-actions-report).

This property is optional and can be set to either `silent` or `verbose`.

By default, this flag is set to `silent`, which means that Reviewpad will not generate the report. If you prefer, you can switch to `verbose` mode so that Reviewpad will provide feedback on the pull request by commenting with the execution results.

#### Example

```yml
mode: verbose
```

## Ignore errors

The `ignore-errors` property is a boolean flag that determines whether or not Reviewpad should disregard any execution errors.

This property is optional and can be set to either `true` or `false`.

By default, this flag is set to `false`, which means that Reviewpad will stop and show an error message if any error occurs.

#### Example

```yml
ignore-errors: true
```

## Metrics on merge

The `metrics-on-merge` property is a boolean flag that determines whether or not a metrics report should be added when a pull request is merged.

This property is optional and can be set to either `true` or `false`.

By default, this flag is set to `false`, so a report will not be added.

If the flag is set to `true`, the metrics report will include the following information:

- `Coding Time`: the duration between the first commit and the issuance of the pull request;
- `Pickup Time`: the duration between the issuance of the pull request and its first review;
- `Review Time`: the duration between the first review and the merge of the pull request.

![Reviewpad metrics report](/img/reports/metrics.png)

#### Example

```yml
metrics-on-merge: true
```

## Extends

The `extends` property allows you to extend other Reviewpad configurations by using their GitHub blob URLs (for example, `https://github.com/reviewpad/reviewpad/blob/main/reviewpad.yml`).

This property is optional and can be set to a list of GitHub blob URLs.

Note that if the URL isn't a GitHub blob, an error will occur.

For more information on the `extends` mechanism, please visit this [page](/guides/extends).

### Example

```yml
extends:
  - https://github.com/reviewpad/.github/blob/main/reviewpad-models/common.yml
```

## Label

A label specifies a label that can be used as an argument to the label-related functions.

The structure of a label is as follows:

```yaml
LABEL-ID:
  name: STRING [OPTIONAL]
  description: STRING [OPTIONAL]
  color: STRING [OPTIONAL]
```

- `LABEL-ID` is used to reference the label in other entities, and if no name is provided, the `LABEL-ID` is considered the name.
- `name` [OPTIONAL] is the name of the label as seen on GitHub.
- `description` [OPTIONAL] is a short description of the label. Must be 100 characters or fewer.
- `color` [OPTIONAL] is the [hexadecimal color code](https://www.color-hex.com/) for the label, with or without the leading `#`.

If the label does not exist in the repository, it will be created.

If the label already exists in the repository and the description or the color is set in the `reviewpad.yml` file, then both the description and the color will be updated based on the `reviewpad.yml` file.

#### Example

```yml
labels:
  small:
    name: small # optional
    description: Defines a small pull request # optional
    color: d2697a # optional
```

## Group

A group specifies a list of entities. At the moment, we only support GitHub users.

There are two ways to specify a group:

### Group by enumeration

```yaml
- name: STRING
  description: STRING [OPTIONAL]
  kind: developers [OPTIONAL]
  spec: "[LIST OF GITHUB USERS]"
```

-   `name` of a group is used to reference it in other entities.
-   `description` [OPTIONAL] is a string that can be used to provide more details about the group.
-   `kind` [OPTIONAL] of group can only be _developers_ at the moment.
-   `spec` is an array of [Aladino](/guides/aladino/specification) specifications.

#### Example

```yaml
groups:
  - name: seniors
    description: project seniors # optional
    kind: developers # optional
    spec: '["peter"]'
```

### Group by filter

```yaml
- name: STRING
  description: STRING [OPTIONAL]
  kind: developers
  type: filter
  param: VARIABLE-NAME
  where: ALADINO-BOOLEAN-EXPRESSION
```

-   `name` of a group is used to reference it in other entities.
-   `description` [OPTIONAL] is a string that can be used to provide more details about the group.
-   `kind` of group can only be _developers_ at the moment.
-   `type` with filter specifies that we will require a _param_ and a boolean _spec_.
-   `param` declares the name of a variable representing a single developer.
-   `where` is an [Aladino](/guides/aladino/specification) boolean expression that uses the _param_ variable to define a condition on which developers should be part of the group.

#### Example

```yaml
groups:
  - name: new-joiners
    description: Groups of developers that have created less than 10 pull requests # optional
    kind: developers
    type: filter
    param: dev
    where: $pullRequestCountBy($dev) < 10
```

## Rule

A Reviewpad rule specifies a boolean condition on a pull request or issue.

The structure of a rule is as follows:

```yaml
- name: STRING
  kind: [patch | author] [OPTIONAL]
  description: STRING [OPTIONAL]
  spec: ALADINO-BOOLEAN-EXPRESSION
```

-   `name` of a rule is used to reference it in other rules and workflows.
-   `kind` [OPTIONAL] of a rule can be either _patch_ or _author._ The kind is related to different properties of pull requests that will be used in the evaluation of the _spec_ field.
-   `description` [OPTIONAL] is a string that can be used to provide more details about the rule.
-   `spec` is a boolean expression in [Aladino](/guides/aladino/specification).

#### Example

```yml
rules:
  - name: small-change
    kind: patch # optional
    description: Checks if the pull request size is small # optional
    spec: $size() < 30
```

## Workflow

A `workflow` is a specification of a list of actions to be executed if the pull request / issues **satisfies** any of the specified rules.

The structure of a workflow is as follows:

```yaml
- name: STRING
  description: STRING [OPTIONAL]
  on:
    - [pull_request | issue]
  run:
    - ACTION_1
    - if: REF_TO_RULE_1 | INLINE_RULE_1
      then: ACTION_2
      else: ALTERNATIVE_ACTION_2
    ...
    - ACTION_N
```

- `name` is a string that identifies the workflows.
- `description` [OPTIONAL] is a string that can be used to provide more details about the workflow.
- `on` [OPTIONAL] field is a list of GitHub entity types that should trigger the workflow. By default, the value is `pull_request`.
- `run` field specifies the action or the list of actions to be executed in the workflow:
    - `if` field specifies the condition that should be satisfied for the `then` field to run. The `if` field can be a reference to a rule by its name or an inline rule.
    - `then` field defines the [Reviewpad action](/guides/built-ins#actions) or the list of [Reviewpad actions](/guides/built-ins#actions) to run when `if` evaluates to true.
    - `else` field defines the [Reviewpad action](/guides/built-ins#actions) or the list of [Reviewpad actions](/guides/built-ins#actions) to run when `if` evaluates to false. This field is optional.

<!-- define ancho as workflow-run -->
### `run` {#workflow-run}

The `run` field can be a single action or a list of actions. An action is an [Aladino](/guides/aladino/specification) expression to be executed.

We can also use the `if ... then ... else` conditional actions to specify a list of actions to run depending on the evaluation of the `if` field.

#### Single action

```yml
workflows:
  - name: label
    run: $addLabel("bug")
```

#### List of actions

```yml
workflows:
  - name: label
    run:
      - $addLabel("bug")
      - $addLabel("documentation")
```

#### Conditional actions

```yml
workflows:
  - name: label
    run:
      - $addLabel("bug")
      - $addLabel("documentation")
      - if: $size() < 100
        then: $addLabel("small")
        else: $addLabel("large")
```

The above configuration specifies one workflow called `label` which automatically labels pull requests with `bug` and `documentation` labels. If the pull request size is less than 100 then the `small` label is added. Otherwise, a `large` label is added.

For a pull request with size 150, the labels `bug`, `documentation`, and `medium` will be added.

##### Nested conditional actions

We can also nest conditional actions by using the `then` and `else` fields.

```yml
workflows:
  - name: label
    run:
      - $addLabel("bug")
      - $addLabel("documentation")
      - if: $size() < 100
        then: $addLabel("small")
        else:
          - if: $size() < 500
            then: $addLabel("medium")
            else: $addLabel("large")
```

In the above example, for a pull request with size 150, the labels `bug`, `documentation`, and `medium` will be added.

It is also important to note both the `then` and `else` fields can have a single action or a list of actions.

#### Example

```yml
workflows:
  - name: label
    run:
      - $addLabel("bug")
      - $addLabel("documentation")
      - if: $size() < 100
        then:
          # Run a list of actions
          - $addLabel("small")
          - $info("The pull request size is small")
        else:
          # Run a list of actions
          - $addLabel("large")
          - if: $size() > 500
            # Run a single action
            then: $info("The pull request size is very large")
          - $assignRandomReviewer()
```

## Pipeline

The structure of a pipeline is as follows:

```yaml
- name: STRING
  description: STRING [OPTIONAL]
  trigger: [STRING | RULE] [OPTIONAL]
  stages:
    - actions:
      - ACTION_1
      - ACTION_2
      ...
      - ACTION_N
      until: [STRING | RULE] [OPTIONAL]
    ...
    - actions:
      - ACTION_1
      - ACTION_2
      ...
      - ACTION_N
      until: [STRING | RULE] [OPTIONAL]
```

-   `name` is a string that identifies the pipeline.
-   `description` [OPTIONAL] is a string that can be used to provide more details about the pipeline.
-   `trigger` [OPTIONAL] field is a rule that if true enables the pipeline.
-   `stages` is a list of stages of the pipeline. Each stage is a list of actions that will execute until the `until` condition is true.

#### Example

```yaml
pipelines:
  - name: security-changes
    trigger: $hasFilePattern("services/db/migrations/**")
    stages:
      - actions:
          - $assignReviewer(["john"], "reviewpad")
        until: $reviewerStatus("john") == "APPROVED"
      - actions:
          - $assignTeamReviewer(["security"])
```

This configuration specifies one pipeline called `security-changes` which is triggered when there are changes to the files in the database migration. After triggering the pipeline, the first stage will assign the reviewer `john` to the pull request and only when `john` approves the changes, the second stage will be triggered and the security team will be assigned to review the pull request.
