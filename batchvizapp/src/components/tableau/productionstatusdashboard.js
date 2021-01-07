import React, {useRef, useEffect} from 'react';
//import TableauReport from 'tableau-react-embed';

 /*
const TableauProductionStatusBoard = props => (
  <TableauReport
    url="http://10.229.19.49/javascripts/api/viz_v1.js"
    token="<TRUSTED TICKET HERE>"
  />
)

https://public.tableau.com/profile/latif.abdul#!/vizhome/Latif-Test-Dashboard/Obesity
https://public.tableau.com/en-us/gallery/?tab=featured&topic=department-sales-analytics

https://public.tableau.com/views/Latif-Test-Dashboard/Obesity?:language=en&:display_count=y&:origin=viz_share_link



*/

const { tableau} = window;

function TableauProductionStatusBoard() {

  const ref = useRef(null);
  console.log(ref);
  //const url =   "http://10.229.19.49/javascripts/api/viz_v1.js";
  //const url =   "https://public.tableau.com/views/Latif-Test-Dashboard/Obesity?:language=en&:display_count=y&:origin=viz_share_link";
  //const url = "http://10.229.19.49/#/views/ProductionstatusDashboard/ProductionstatusDashboard?:iid=2"
  //const url = "http://10.229.19.49/views/ProductionstatusDashboard/ProductionstatusDashboard?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link";  
  const url = " http://10.229.19.49/#/views/ProductionstatusDashboard_newconnection/ProductionstatusDashboard?:iid=1";
  const options = {
    device: "desktop"
  }

  function initViz(){

    new tableau.Viz(ref.current, url, options);

  }

  useEffect(() => {
    initViz()
  }, [] )
  



  return (<div>
    <p> The Tableau Dashboard</p>
    <div ref={ref}> </div>
    </div>)
}



export default TableauProductionStatusBoard;