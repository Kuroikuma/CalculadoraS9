/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Calculadora} from "./src/calculadora"
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Calculadora);
