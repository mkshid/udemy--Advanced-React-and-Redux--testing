import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';


// setup testing env to run like a browser in the ci
global.document = jsdom.jsdom('<!doctype html> <body></body> </html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

// build `renderComponent` helper that should render a given react class

function renderComponent(ComponentClass, props, state){

    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
          <ComponentClass {...props}/>
        </Provider>
    );

    return $(ReactDOM.findDOMNode(componentInstance)); // produce html
}

// Build helper for simulation events
$.fn.simulate = function(eventName, value) {
    if (value){
        this.val(value);
    }
    // [eventName] needs to call some thing like hey.click
    TestUtils.Simulate[eventName](this[0]);
}

// setup chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent , expect };
