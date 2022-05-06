/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import { shallow, mount } from "enzyme";
import App from "./App";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import AppProvider from './slices'
import { BrowserRouter as Router } from "react-router-dom";

/**
 * Factory funcion to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => mount(<AppProvider><Router><App /></Router></AppProvider>);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test]='${val}'`);

test("renders App without crashing", () => {
  const wrapper = setup();
  // console.log(wrapper.debug());
  expect(wrapper.exists()).toBe(true);
});

test("renders the navigation component", () => {
  const wrapper = setup();
  expect(wrapper.find(MainNavigation).length).toBe(1);
});

test("renders the Layout component", () => {
  const wrapper = setup();
  expect(wrapper.find(Layout).length).toBe(1);
});
