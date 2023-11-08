// import { useLoaderData } from 'react-router-dom';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import Jobs from '../LatestJobs/Jobs';

// const ReactTabs = () => {

//     const data = useLoaderData();

//     console.log(data);
//     const filter1 = data?.filter1((p) => p.category.includes("Web"));
//     console.log(filter1);
    
//   return (
//     <div>
//         <Tabs>
//             <TabList>
//               <Tab>Web Development</Tab>
//               <Tab>Title 2</Tab>
//             </TabList>

//                 <TabPanel>
//                   <h2>Any content 1</h2>
//                   <div>
//                     {
//                         filter1?.map((cart)=>(
//                             <Jobs key={cart.id} cart={cart}></Jobs>
//                         ))
//                     }
//                   </div>
//                 </TabPanel>

//             <TabPanel>
//               <h2>Any content 2</h2>
//             </TabPanel>
//         </Tabs>
//     </div>
//   );
// };

// export default ReactTabs;
