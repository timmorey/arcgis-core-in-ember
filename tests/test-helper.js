import Application from 'arcgis-core-in-ember/app';
import config from 'arcgis-core-in-ember/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
