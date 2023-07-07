---
title: "Aladino Language"
id: "aladino-language"
slug: "aladino-language"
---

Aladino is a simple language to specify steps in pull request workflows.

The expressions in the language allow you to easily perform read and write actions on pull requests.

## Syntax

The syntax of Aladino is quite simple. Here's the [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form) grammar representation:

```
prog := stat_list

stat := expr

expr := expr BINOP expr
    | UNARYOP expr
    | TIMESTAMP
    | RELATIVE_TIMESTAMP
    | NUMBER
    | STRING
    | BOOLEAN
    | '(' expr ')'
    | '[' expr_list ']'
    | '$' IDENTIFIER '(' expr_list ')'
    | '(' expr_list '=>' expr  ')'

expr_list :=
        expr ',' expr_list
    | expr
    |

TIMESTAMP :=
        YYYYMMDD
    | YYYY-MM-DD
    | YYYYMMDDTHH:MM:SS
    | YYYY-MM-DDTHH:MM:SS

RELATIVE_TIMESTAMP := NUMBER TIME_UNIT ago

TIME_UNIT :=
        'year'   | 'years'
    | 'month'  | 'months'
    | 'week'   | 'weeks'
    | 'day'    | 'days'
    | 'hour'   | 'hours'
    | 'minute' | 'minutes'

BINOP :=
        '==' | '>=' | '>' | '<' | '<='
    | '&&' | '||'

UNARYOP := '!'
```

This allows us to specify:

1. Logical expressions: e.g. `"a" == "a"` or `$fun() == 1`;
2. Function calls: e.g. `$label("bug")`
3. Lambda functions: e.g. `($dev => $dev == $author())`

## Semantic

Aladino supports five types of values: `booleans`, `numbers`, `strings`, `arrays` and a special type `_action_`.

Since the language is quite simple, it is also straightforward to perform type inference.

There are two requirements when it comes to typing:

1. The type of the expression in a rule `spec` is _bool_. For example, the following rule is invalid:

```yaml
- name: doesnt-type-check-to-bool
  kind: patch
  description: Rule that does not type check to bool
  spec: "hello" # type error
```

2. The type of each action to be _effect._ For example, the following `workflow` is invalid because of its actions:

```yaml
- name: invalid-workflow
  description: Invalid workflow because of action
  run:
    if: rule_1
    then: "hello" # type error
```

Since, by design, you cannot define functions or variables, the usefulness of the language comes down to the set of built-in variables and functions that are provided.
