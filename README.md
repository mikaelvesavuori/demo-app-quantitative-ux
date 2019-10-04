# Demo application for quantitative UX strategies: Split testing, feature toggling, analytics and UX optimizations

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mikaelvesavuori/demo-app-quantitative-ux)

This demo shows a number of strategies for doing quantitative UX in the context of a React Progressive Web Application.

- **Split testing**: Netlify's [split-testing](https://www.netlify.com/docs/split-testing/) capability to direct traffic to 2 or more branches
- **Feature toggling**: [Split.io](https://www.split.io) for toggling features on or off dynamically based on your own criteria
- **Tag manager**: Google Tag Manager to do version controlled rollouts of tracking, scripts, or behaviors
- **Analytics**: Google Analytics to gather data; this demo used some of the [Enhanced Ecommerce](https://developers.google.com/tag-manager/enhanced-ecommerce) functionality
- **UX optimizations**: Google Optimize to do smaller UX experiments/tweaks without needing to deploy code changes

## Prerequisites

- You need a Google account to use any of their services
- You need a Google Tag Manager account
- You need to activate/setup Google Optimize
- You need a property set up at Google Analytics to send/retrieve analytics data
- You need a Netlify account for split-testing
- You need a Split.io account for feature toggling

## Configuration

- You must provide the Google Tag Manager (GTM) account ID in `src/index.html` in the variable `TAG_MANAGER_ID` as well as update the X's in the iframe src
- You must provide the Google Analytics account ID inside of Google Tag Manager, if you want to get analytics data
- You must provide the Split.io account ID in `src/configuration/config.js` (update `SPLIT_IO_KEY`)
- In order to follow along with the Netlify Split-testing steps, you should deploy your site there (easy way: just use the "Deploy to Netlify" button)

## Installation

- Clone the repo
- Run `yarn` or `npm install`
- Run `yarn dev` or `npm run dev`

## Building

- Run `yarn build` or `npm run build`
- NOTE: I am using the `cp` command from Mac/Linux, so you may need to replace the copying of _\_headers_ and _\_redirects_ somehow, on a non-Bash Windows setup (the files should normally be copied with the CopyWebpackPlugin, but this breaks the Service Worker!)

## Service setup

Below I will list the most important steps in setting up the services.

### Google Tag Manager

Google Tag Manager, as used by me here, has a fair bit of configuration. Make sure to not forget to set the GA variable, and remember to set your GA and Optimize configs.

![Google Tag Manager: Google Analytics configuration](/docimages/gtm-ga-conf.jpg 'Google Tag Manager: Google Analytics configuration')

_Google Analytics configuration_

![Google Tag Manager: Google Optimize configuration](/docimages/gtm-optimize.jpg 'Google Tag Manager: Google Optimize configuration')

_Google Optimize configuration_

![Google Tag Manager: tags configuration](/docimages/gtm-tags.jpg 'Google Tag Manager: tags configuration')

_Tags configuration_

![Google Tag Manager: trigger configuration](/docimages/gtm-trigger.jpg 'Google Tag Manager: triggers configuration')

_Triggers configuration_

![Google Tag Manager: typical event tag configuration](/docimages/gtm-typical-event-tag.jpg 'Google Tag Manager: typical event tag configuration')

_Typical event tag configuration_

### Google Analytics

Given the correct ID and setup from GTM, GA should start outputting visualizations of your data. Since we are using Enhanced Ecommerce, there is additional data available under the `Conversions > E-commerce` panel.

![Google Analytics: shopping](/docimages/analytics-shopping.jpg 'Google Analytics: shopping')

### Google Optimize

Given the correct ID and setup from GTM, Optimize should be able to be used.

![Google Optimize: variants](/docimages/optimize-variants.jpg 'Google Optimize: variants')

_Typical variant setup_

![Google Optimize: objectives](/docimages/optimize-objectives.jpg 'Google Optimize: objectives')

_Linking to Google Analytics and setting up test objective_

### Netlify Split-testing with branch deploys

To activate split-testing, just go to the `Split Testing` panel. The branch `feature/extras` will activate the "extras" (the option to buy Fuzzy Dice on the Product page).

![Netlify: Split-testing example](/docimages/netlify-split-testing-branches.jpg 'Netlify: Split-testing example')

### Split.io

My demo is basically to set up a simple split (`display_purchase_incentive`) with three treatments (`incentive_1`, `incentive_2`, and `off`) in the staging environment and creating a simple "wide" user segment called `window_shoppers`. Logic in the app sets your user key as `WINDOW_SHOPPER` who is a user in that segment, thus sending back one of the incentives.

![Split.io: environments](/docimages/splitio-envs.jpg 'Split.io: environments')

_Environments_

![Split.io: treatments](/docimages/splitio-treatments.jpg 'Split.io: treatments')

_Treatments_

![Split.io: settings](/docimages/splitio-settings.jpg 'Split.io: settings')

_Settings_

![Split.io: segments](/docimages/splitio-segments.jpg 'Split.io: segments')

_Segments_
