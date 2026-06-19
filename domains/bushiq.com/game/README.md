# Bush IQ Interactive Map Prototype

This folder contains a GitHub Pages-ready HTML5 prototype.

## Files

- `index.html` is the complete interactive game prototype.
- `bush-iq-map.png` is the map artwork used behind the clickable hotspots.

## Run locally

Open `index.html` in a browser.

## Publish on GitHub Pages

1. Add both files to your repository.
2. Put them in the same folder, or keep both at the repository root.
3. Enable GitHub Pages for the repository.
4. Open the GitHub Pages URL.

## Embed in Google Sites

Use an Embed block and paste this after replacing the URL:

```html
<iframe src="YOUR_GITHUB_PAGES_URL_HERE" width="100%" height="780" style="border:0;" loading="lazy"></iframe>
```

## Construct 3 translation notes

Use one layout for the map. Add each hotspot as a button or sprite with instance variables: `locationKey`, `title`, `status`, and `moduleType`.

Use global variables for `Day`, `Health`, `Hunger`, `Thirst`, `Energy`, `Shelter`, and `Knowledge`. Each module should open a modal-like layer with three choices. When a player chooses an action, apply the effects, advance the day, save completion status, and run unlock checks.
