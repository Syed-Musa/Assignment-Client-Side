import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import HomePage from '../Pages/HomePage';

const ReactTabs = () => {

    
  return (
    <div>
        <Tabs>
            <TabList>
              <Tab>Title 1</Tab>
              {/* <Tab><HomePage></HomePage></Tab> */}
              <Tab>Title 2</Tab>
            </TabList>

            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    </div>
  );
};

export default ReactTabs;
