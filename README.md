<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Grahlie Atomic Gatsby Theme
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-new-site https://gitlab.com/grahlie/grahlie-atomic-gatsby-starter
2. **Add this theme as package dependency**
    ```shell
    yarn add @grahlie/gatsby-theme-grahlie-atomic gatsby react react-dom
3. **Create Gatsby Config**
    Add this theme inside your Gatsby config.
    ```shell
    module.exports = {
        plugins: [
            {
                resolve: "@grahlie/gatsby-theme-grahlie-atomic",
                options: {
                    title: `My new Site`,
                    author: `@mynewsite`
                }
            }
        ]
    }
    ```

    Options:
    ```shell
    options: {
      title: `My new Site`,
      author: `@mynewsite`,
      contact: {
        email: 'INFO@EXAMPLECOMPANY.COM',
        phone: '+461253252345',
        address: 'EXAMPLE STREET',
        orgnr: 'ORG NUMBER'
      },
      fontFamily: `Open Sans`,
      fontSizes: [400, 700]
    }

## 🧐 What's inside?

A quick look at the components folder

    .
    ├── atoms
    ├── molecules
    ├── organisms
    └── templates


<!-- AUTO-GENERATED-CONTENT:END -->
