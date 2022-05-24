# pathwaysfaq.de

A project to be of support for german speaking toastmasters in providing a reference to the Toastmasters International educational program-

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

uses Illustrations from https://undraw.co/illustrations

       <section>
              <div className="container">
                  <div className="row">
                      <div className={"col col--12"}>
                          Du möchtest einen Gastartikel schreiben?

                          Kein Problem, nimm gerne
                          Kontakt auf (bitte nur relevanter Content)
                      </div>
                  </div>
              </div>
          </section>

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
