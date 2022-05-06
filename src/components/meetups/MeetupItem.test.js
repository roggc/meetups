/* eslint-disable testing-library/no-debugging-utils */
import { shallow, mount } from "enzyme";
import MeetupItem from "./MeetupItem";
import AllMeetupsPage from "../../pages/AllMeetupsPage";
import AppProvider from "../../slices";
import {act} from 'react-dom/test-utils'

test("<MeetupItem/> renders without crashing", () => {
  const wrapper = shallow(
    <AppProvider>
      <MeetupItem />
    </AppProvider>
  );
  expect(wrapper.exists()).toBe(true);
});

test("when on page 'ALL_MEETUP_PAGE', button 'add to favorites' must be present", async() => {
  global.fetch=jest.fn()
  global.fetch.mockResolvedValue({ json: () => ([{ }])})
  const component = mount(
    <AppProvider>
      <AllMeetupsPage>
      <MeetupItem />
      </AllMeetupsPage>
    </AppProvider>
  );
    await act(async()=> Promise.resolve())
    
    component.update()
      expect(component.find("button").length).toBe(1);
      expect(component.find('button').at(0).text().trim()).toBe('Add to favorites') 
});


