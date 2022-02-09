import {AppRegistry} from 'react-native';
import App from './src/app/App';
import {name as appName} from './app.json';
import "mobx-react-lite/batchingForReactNative";

AppRegistry.registerComponent(appName, () => App);
