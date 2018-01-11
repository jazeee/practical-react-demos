import React from "react";
import toJson from "enzyme-to-json";
import {App} from "./App";
import {shallow} from "enzyme";

it("renders without crashing", () => {
	shallow(<App />);
});

it("renders correctly", () => {
	const wrapper = shallow(
		<App/>
	);

	expect(toJson(wrapper)).toMatchSnapshot();
});
