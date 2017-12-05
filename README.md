# webpack-hmr-issue

Webpack hot module reload appears to break if one of either the main module import or the accepted module to render has an extension in the import name.

```
import App from './App';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
};

...

if (module.hot) {
    module.hot.accept('./App', () => { render(App); });
}

```
With the above code HMR works as expected.

But if you add a file extension to either the main import **or** the accept module name...
```
module.hot.accept('./App.js', () => { render(App); });
```
The browser console reports that the module has been updated i.e:
```
[WDS] App hot update...
[HMR] Checking for updates on the server...
[HMR] Updated modules:
[HMR]  - ./src/App.js
[HMR] App is up to date.
```
But will only fire the `accept` callback once, returning the old (unchanged) version of the module, and doesn't actually import the updated module or update the browser with the changes.
