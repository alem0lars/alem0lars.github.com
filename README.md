# alem0lars website

Source code of alem0lars website & blog. <br /> <br />

[![GitHub license][mit-badge]][mit]
[![GitHub tag][tag-badge]][tag]
[![GitHub stars][stars-badge]][stars]
![contributors][contributors-badge]
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
[![code style prettier][prettier-badge]][prettier]

  <br />

![](static/screens/alem0lars.github.com.gif) <br />

  <br />

See the website in action » [here](https://alem0lars.github.com.alem0lars.com/) <br />
For more information visit » [project page](https://github.com/alem0lars/alem0lars.github.com)

## Getting Started

The website uses [Gatsby][gatsby] and
the starter [gatsby-starter-personal-blog][gatsby-starter-personal-blog]

### Setup

After cloning the repository, run:

```shell-session
$ npm i
```

#### External services

The website uses external services for comments, searching, analytics.
To use them you have to secure some access data.

Create an `.env` file like below in the root folder.
Change `...` placeholders with real data.

```text
GOOGLE_ANALYTICS_ID=...
ALGOLIA_APP_ID=...
ALGOLIA_SEARCH_ONLY_API_KEY=...
ALGOLIA_ADMIN_API_KEY=...
ALGOLIA_INDEX_NAME=...
FB_APP_ID=...
```

### Development

```text
$ npm run develop
```

to hot-serve the website on [http://localhost:8000](http://localhost:8000) or:

```text
gatsby build
```

to create static site ready to host (`/public`).

## Authors

* Alessandro Molari [@alem0lars][github-alem0lars]

## Contributing

* Fork the repo
* Create your feature branch (git checkout -b feature/fooBar)
* Commit your changes (git commit -am 'Add some fooBar')
* Push to the branch (git push origin feature/fooBar)
* Create a new Pull Request

## Licence

MIT License

Copyright (c) 2018 alem0lars <br />Copyright (c) 2018 Alessandro Molari

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<!-- ----------------------------------------------------------------------- -->

<!-- Personal -->
[github-alem0lars]: https://github.com/alem0lars

<!-- Badges -->
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/alem0lars/alem0lars.github.com/blob/master/CODE_OF_CONDUCT.md
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[tag-badge]: https://img.shields.io/github/tag/alem0lars/alem0lars.github.com.svg
[tag]: https://github.com/alem0lars/alem0lars.github.com
[stars-badge]: https://img.shields.io/github/stars/alem0lars/alem0lars.github.com.svg
[stars]: https://github.com/alem0lars/alem0lars.github.com/stargazers
[contributors-badge]: https://img.shields.io/github/contributors/alem0lars/alem0lars.github.com.svg
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
[mit-badge]: https://img.shields.io/github/license/alem0lars/alem0lars.github.com.svg
[mit]: https://github.com/alem0lars/alem0lars.github.com/blob/master/LICENSE

<!-- Others -->
[gatsby]: https://www.gatsbyjs.org
[gatsby-starter-personal-blog]: https://github.com/greglobinski/gatsby-starter-personal-blog
