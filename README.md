# React Electron Twitter
Project created using [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate).

Electron-based React application to display a Twitter feed. It uses React with [Ant Design](https://ant.design/docs/react/introduce) for the UI and Electron as a platform to build a desktop app for multiple targets.

## Technical considerations
This app was built in about 9-10 hours and it is just for demo purposes. Due to time constraints, there is room for lots of improvements:
- UI/UX is very simple and could be improved in many ways
- Unit test coverage also could be improved by a lot, as there are just a few tests due again to time constraints
- Error handling could be improved. There is now just a simple message which states that an error has happened
- Tried to keep the distinction betweetn stateless and stateful components to put logic. Used HOC for Redux store handling
## Starting Development

Before starting Development server, please install dependencies using `yarn install`.
Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
yarn start
```

**Important Note: If you're running this application in development mode you're going to need a Twitter Auth Bearer token and put it in an .env file in the root
of the application.**

```
REACT_APP_BEARER_TOKEN=Here goes your Twitter API Bearer Token
```

## Packaging for Production

To package apps for the local platform:

```bash
yarn package
```
Deliverables will be in `release` folder. To build a package for MacOS, you need to be on a Mac 


