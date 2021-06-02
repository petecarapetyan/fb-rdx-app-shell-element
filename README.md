# Firebase auth and Rdx Web Component

## Purpose

This is a standalone web component to be used as a kind of mini-app within an MPA such as [Rocket](https://rocket.modern-web.dev/). This is an experimental concept and no claims are made as to the workability of the idea itself.

Any number of things could, and are expected to, go wrong with this idea.

This will give me an opportunity to see which problems can be overcome, and at what cost.

## How Created?

- started out by forking [rdx-demo](https://github.com/CaptainCodeman/rdx-demo)
- kept removing everything i could until I couldn't think of anything more to remove
- updated lit to latest version

## Why rdx-demo?

- I needed an app web component with auth, state management, etc
- I have grown to respect the very simple and well implemented code and design used within rdx and also it's usage of firebase

## Why hosting within an MPA?

- I need an app which is 99% dumb products and 1% smart shopping cart
- I feel compelled to make the owner maintain their own product pages without touching my shopping cart functionality. So they get dumb pages, I get the one smart page with a separate app web component to maintain.
- hope i can make it work

## Next

- make it work inside @web/dev-server
- maybe upgrade firebase versions once i figure out how to use different api
- then see which of this can be consumed within a project such as
  - [Rocket](https://rocket.modern-web.dev/)
  - [lit-element-starter](https://github.com/PolymerLabs/lit-element-starter-ts)
  - my own rocket themed apps

## notes from rdx-demo

[Demo app](https://rdx-demo.web.app/) showing real-life use of [rdx](https://github.com/CaptainCodeman/rdx) and [rdx-model](https://github.com/CaptainCodeman/rdx-model) for state management.
