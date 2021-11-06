# Contributing

It is our intention that this website be contributable to by the whole of the web developer community. In order to achieve this, we do need to set a few principles and guidelines around contributing (expect these to evolve over time).

## The first rule

Before spending any significant time on any contribution, [raise an issue on our github](https://github.com/mikeyhogarth/green-web-dev/issues)! It's really important to do this **before** creating a pull request so we can discuss the contribution fully and avoid any wasted efforts.

## Prompt stubs

There are a bunch of prompt stubs in the `content` folder which are prompts that we intend to write / include as time goes by. This might be a good place to look if you want to write a prompt, but feel free to also contribute stubs for future writers to pick up if you have a good idea but don't feel like writing a prompt yourself.

## Contributing a Prompt

Prompts should be quick, digestible bits of advice that can help reduce the carbon footprint of a web application, generally this will either be through reducing CPU cycles or reducing data usage by a significant amount. It is intended that prompts take no more than 2 minutes maximum to read.

There are a myriad of ways to save data and CPU cycles so any prompts should be fairly wide-reaching/widely applicable and broad. We don't want to end up just listing every single way to make your code more efficient or we'll be here forever!

You should try to match the language of the existing prompts. The first paragraph should **open with a statement that summarises the entire prompt** and should include a **solid reason that this matters from a sustainability perspective**. The carbon footprint element to this should _not_ be tenuous - it should be direct and clearly explained.

Prompts should not press a developer to sacrifice code quality or maintainability - if there are tradeoffs for adopting the advice, state this clearly within the prompt somewhere (ideally with its own section) - in reality, things like this should probably not be prompts.

A prompt **Should** have the following properties;

- It should be completely readable in **less than 2 minutes**
- Where applicable, the prompt should include good examples and bad examples.
- Where applicable, [caniuse](https://caniuse.com/) links should be provided.
- The prompt should end with some useful links for futher reading, allowing the user to continue investigating the topic should they want to.

## Contributing a Resource

For the time being, resources on this site are core-team only, however if you see a resource written elsewhere that is pertinant to any of the prompts, you are free to suggest it as a relevant link.

## Branching Strategy

Fork the codebase from the `develop` branch - pull requests should also be made back into `develop`.
