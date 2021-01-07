import React, { Component } from 'react';
import tableau from 'tableau-api';


class ProductionStatusBoard extends Component {
    // componentDidMount() {
    //     this.initViz()
    // }


    // initViz() {
    //     try{
    //         const vizUrl = 'http://10.229.19.49/views/ProductionstatusDashboard/ProductionstatusDashboard?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link';
    //         const vizUrl = 'http://10.229.19.49/#/signin';
    //         const vizContainer = this.vizContainer;
    //         let viz = new window.tableau.Viz(vizContainer, vizUrl)
    //     }
    //     catch(error)
    //     {
    //         console.log('error occured')
    //     }

    //  }


    render() {
        return (
            <div>
                <br></br>
                {/* <div ref={(div) => { this.vizContainer = div }}> </div> */}
                {/* <object data="http://10.229.19.49/views/ProductionstatusDashboard/ProductionstatusDashboard" width="100%" height="450"></object> */}
               
                <div className="tableauPlaceholder" style={{width:"100%"}}>

                     <iframe  class="tableauViz" width="100%" height="827" src="http://10.229.19.49/views/ProductionstatusDashboard/ProductionstatusDashboard?:embed=y&amp;:showVizHome=no&amp;:host_url=http%3A%2F%2F10.229.19.49%2F&amp;:embed_code_version=3&amp;:tabs=no&amp;:toolbar=yes&amp;:showAppBanner=false&amp;:display_spinner=no&amp;:loadOrderID=0"></iframe>
                </div>

            </div>
        )
    }
}


export default ProductionStatusBoard;