# React Electron

*Easy-to-understand-and-use boilerplate code for creating an Electron desktop app simply using Reactjs. Includes React Router.*
<br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), [Electron](https://electronjs.org/), and [electron-builder](https://github.com/electron-userland/electron-builder).

## Build Electron App With React - Video Tutorial
[Video Tutorial at YouTube](https://www.youtube.com/playlist?list=PLASldBPN_pkCXhDdahLI2RIRy1tmGTeit)

## Usage
1. Clone this repository.
```
git clone https://github.com/willjw3/react-electron.git <your-project-name>
```
2. If you havent already, install Yarn globally.
```
npm install -g yarn
```
3. Navigate into project root and install dependencies.
```
cd <your-project-name> && npm install
```
4. Run dev server.
```
npm run start
```
5. Edit package.json file with the appropriate details of your project.
'''
## Deploy to Desktop
1. Run the build process
```
npm run build
```
2. Go into your project folder using your file explorer. Navigate to the `dist` folder and open it. Then double-click `<your-project-name>` Setup 0.1.0. Your app should open and there should now be an icon on your desktop for this app.

**Use a Custom Icon**

Add a 256 x 256 .png or .ico image in your public folder. It should be either `icon.ico` or `icon.png`. Update the `icon` property in your `package.json` if necessary. Currently, it uses an image called `icon.png`, which is a graphic of a coffee cup. You'll only see this in production. For more info, see the [electron-builder documentation](https://www.electron.build/icons)

## Contribute
Feel free to submit an issue or pull request anytime. If a change is made to the codebase with your PR, you'll be listed as a contributor.

### Contributors
@willjw3 | https://github.com/willjw3




