# Brevard Pool Care
[![Netlify Status](https://api.netlify.com/api/v1/badges/a33b35e7-0b9d-431a-bb71-8ee8504c4960/deploy-status)](https://app.netlify.com/sites/brevard-pool-care/deploys)

## Summary
A repository for Brevard Pool Care. A pool service / pool care company, servicing happy customers all over Brevard County, Florida. This site uses [11ty](https://11ty.dev) (with [handlebars.js](https://handlebarsjs.com/)), [TailwindCSS](https://tailwindcss.com), [Forestry](https://forestry.io) & [Netlify](https://netlify.com).

## Purpose
Create a simple way for BPC to edit their website while being modern, fast and easy to maintain. 

## Technologies

### 11ty with handlebars.js

[11ty](https://11ty.dev) is a really powerful and interesting approach to the framework environment we all have transitioned to over the past few years. It allows the developer to create a very simple, straightforward website. Pretty much as simple as the holy trinity sites of the past. I can keep the simplicity of a staticly generated website, but also use all the modern technologies of today; without the "bloated-ness" of other frameworkks.

[handlebars.js](https://handlebarsjs.com/) is a great templating language to build ontop of `11ty`.

### TailwindCSS

TailwindCSS is a major reason why this page is so fast / lightweight. Combining it with the templating of `handlebars` & it is a powerhouse. If this site needed a blog or any type of generated pages, this would be a great combo.

### Forestry

I used `Forestry` for it's ease of use, and although it is deprecated, it is still a powerful asset with `11ty`. It allows BPC to edit all their pages on the fly while maintaining the look and feel of the website. It also allows for easy frontmatter storage that BPC themselves can maintain / edit. 

### Netlify

Previously on GoDaddy, the site is now hosted with Netlify. This helps simplify everything about future changes and updates from BPC on Forestry and when the updates are made, a new build is triggered and once finished, displays the new data. If the build fails, the old version of the site will show for the user.

----

_This project still receives updates from CMS & design / content updates._
