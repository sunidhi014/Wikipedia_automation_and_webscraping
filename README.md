# Wikipedia_automation_and_webscraping

## Overview

In this project, we will automate the browser and open Wikipedia article on alphabet S using an automation script created in Puppeteer using Nodejs. Then we will scrape out the contents of the history, secretary system usage and related character sections using Cheerio. 

The script performs the following tasks: 

1. Goto Wikipedia.

2. Selects language English.

3. Navigate to [All portals](https://en.wikipedia.org/wiki/Wikipedia:Contents/Portals)>[A–Z index](https://en.wikipedia.org/wiki/Wikipedia:Contents/A%E2%80%93Z_index)>[S](https://en.wikipedia.org/wiki/Special:AllPages/S)>[Article on alphabet S](https://en.wikipedia.org/wiki/S).

4. Scrape out history, secretary system usage and related character sections

## Installing Puppeteer

[Puppeteer](https://www.npmjs.com/package/puppeteer) is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.

Run commands:

`npm init -y`

`npm i puppeteer`

## Installing Cheerio

[Cheerio](https://www.npmjs.com/package/cheerio) is a Node.js library that helps developers interpret and analyze web pages using a jQuery-like syntax.

Run command:

`npm install cheerio`

Your project folder will look like this:
