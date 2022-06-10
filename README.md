# GoPMS Intro page Code Conventions

# Git

## Commit Conventions

### Format

`<type>: <subject>`

### Example

```termaial
$ git commit -m "🛠Fix: submit button disabled bug" (O)

$ git commit -m "🛠Fix: submit button disabled bug." (X)
$ git commit -m "🛠Fix: Submit button disabled bug" (X)
$ git commit -m "Fixed submit button disabled bug" (X)
$ git commit -m "🛠Fix" (X)
```

### Types

| Name        | Description                                                                                                                                   |
| :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚀Build     | Build related changes (eg: npm related/ adding external dependencies)                                                                         |
| 🔮Chore     | A code change that external user won't see (eg: change to .gitignore file or .prettierrc file)                                                |
| ✨Feat      | A new feature                                                                                                                                 |
| 🛠Fix        | A bug fix                                                                                                                                     |
| ✍️Docs      | Documentation related changes                                                                                                                 |
| 💎Refactor  | A code that neither fix bug nor adds a feature. (eg: You can use this when there is semantic changes like renaming a variable/ function name) |
| 🔥Perf      | A code that improves performance                                                                                                              |
| 🧁Style     | A code that is related to styling                                                                                                             |
| 🧪Test      | Adding new test or making changes to existing test                                                                                            |
| 🔼Upgrade   | Upgrading version of libraries on package.json                                                                                                |
| 🔽Downgrade | Downgrading version of libraries on package.json                                                                                              |

### Subject

1. Use imperative, present tense (eg: use "add" instead of "added" or "adds")
1. Don't use dot(.) at end
1. Don't capitalize first letter

# Vue

1. All page root components go inside `views` folder.
1. Other components must go inside `components` folder.
1. Use absolute route `@/~` when import inside of src folder.
1. Avoid using `id` attribute as much as you can.

# Javascript

## Naming variables & functions

1. Do not use single character

   Exceptions

   1. `i` for 'index' (But recommend using 'index')
   2. `e` for 'event' (But recommend using 'event')

2. Avoid shortening words

   For example, 'btn'(X), 'button'(O)

   Exceptions (also reserved)

   1. `req` for 'request'
   2. `res` for 'response'
   3. `err` for 'error'

3. Prefix 'is' for boolean variables

   For example, `isLoading`, `isOpen`.

# Typescript

1. Do not use `// @ts-ignore` unless the library is not supporting its types.
1. Do not use `any` type unless the library is not supporting its types.
1. Use `Interface`. Use `type` only if when interface is not suitable.

# Styles

1. Do not create .css files. Try best to use tailwind css. If you need to use your own css, do it inside of the component. (Exception: tailwind.css is required for tailwind css)

2. Scss files are only for dealing with the libraries and global settings

3. Use `<style lang="scss" scoped>`. Use scss and scoped style when you have to use custom styles inside of the component. In this case, class has to be named like `scoped-[class name]` or `custom-[class name]`. But try to deal with tailwind css as much as you can.

4. Avoid binding styles to vue component directly. But it's better than using css and switching class when style changes dynamically.
