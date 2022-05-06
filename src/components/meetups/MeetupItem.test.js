/* eslint-disable testing-library/no-debugging-utils */
import { shallow, mount } from "enzyme";
import MeetupItem from "./MeetupItem";
import AllMeetupsPage from "../../pages/AllMeetupsPage";
import AppProvider from "../../slices";
import { act } from "react-dom/test-utils";

test("<MeetupItem/> renders without crashing", () => {
  const wrapper = shallow(
    <AppProvider>
      <MeetupItem />
    </AppProvider>
  );
  expect(wrapper.exists()).toBe(true);
});

test("when on page 'ALL_MEETUP_PAGE', button 'add to favorites' must be present and when clicking it must disappear", async () => {
  global.fetch = jest.fn();
  global.fetch.mockResolvedValue({ json: () => [{}] });
  const component = mount(
    <AppProvider>
      <AllMeetupsPage>
        <MeetupItem />
      </AllMeetupsPage>
    </AppProvider>
  );
  await act(async () => Promise.resolve());

  component.update();
  const buttons = component.find("button");
  expect(buttons.length).toBe(1);
  const button = buttons.at(0);
  expect(button.text().trim()).toBe("Add to favorites");
  button.simulate("click");
  expect(component.find("button").length).toBe(0);
});
