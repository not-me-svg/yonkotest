# #⛩️Frontend Developer role with Yonko ⛩️#
  
The project is built with [Create React App](https://github.com/facebook/create-react-app). 

In order to optimize the 3D model I've used [gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline) and to be able to use it inside the application, I've used [gltfjsx](https://github.com/pmndrs/gltfjsx).

When it comes to build the 3D scene, I've used [React three fiber](https://github.com/pmndrs/react-three-fiber) together with [Drei](https://github.com/pmndrs/drei).

Text animations have been done using [Framer](https://www.framer.com/).

I've used [styled components](https://styled-components.com/) to create the styles, with a structure that follows a general file with the reusable code and some global variables, and a [reset css](http://meyerweb.com/eric/tools/css/reset/) to remove predefined styles, plus the self-contained styles for each component.

The project has a dummy extra page just to use the new [react router v6](https://reactrouter.com/) that includes several changes compared to the previous version.

I've made a couple of very simple tests in [Jest](https://jestjs.io/) using [Enzyme](https://enzymejs.github.io/enzyme/).

  
  

### Available Scripts

 

In the project directory, you can run:

  

#### `npm start`

  

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.\

You will also see any lint errors in the console.

  

#### `npm test`

  

Launches the test runner in the interactive watch mode.\

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  

#### `npm run build`

  

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  

#### `npm run eject`

  

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

  

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

  

### Learn More

  

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  

To learn React, check out the [React documentation](https://reactjs.org/).