# Eric Sortland's Professional Portfolio v1

**This website uses CodeBushi's [gatsby-starter-dimension](https://github.com/codebushi/gatsby-starter-dimension) as a template**


## Description

A Web Application built with GatsbyJS, React, GraphQL, and hosted with Netlify. A central location to showcase myself, experience, and personal projects. 

## Features 

- **Gatsby** static site generation 
- **SASS** styling (gatsby-plugin-sass)
- React **v16.12.0** 
- **Prettier** code formatting
- **Netlify** CD pipeline 
- **GitHub** API (gastby-source-graphql)

## Getting Started

If you do not have Gatsby CLI installed.
```text
npm install --global gatsby-cli
```
Clone the repo and navigate to the directory using your terminal then run: 
```text
gatsby develop
```
to start a hot-reloding dev environment at http://localhost:8000

or 

```text
gatsby build
```
to generate a production build for your site.

#### Externals

This website uses the Github API to grab my repositories, their descriptions, URLs, and their updated dates.

To set this up you must create an `.env` file in your root folder and create a GITHUB_API_KEY field:
```text
GITHUB_API_KEY={Insert Key Here}
```
More information on creating your key can be found [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)

## Authors
- [Eric Sortland](https://github.com/esortland)
- [Codebushi](https://github.com/codebushi)

## Licence

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
