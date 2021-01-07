import React, { Component } from 'react';
import tableau from 'tableau-api';


class ProductionStatusBoard extends Component {
    componentDidMount() {
        this.initViz()
    }


    initViz() {
        try{
            // const vizUrl = 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms';
            const vizUrl = 'http://10.229.19.49/#/signin';
            const vizContainer = this.vizContainer;
            let viz = new window.tableau.Viz(vizContainer, vizUrl)
        }
        catch(error)
        {
            console.log('error occured')
        }
      
    }


    render() {
        return (
            <div>
                <br></br>
                <div ref={(div) => { this.vizContainer = div }}>
                </div>
            </div>
        )
    }
}


export default ProductionStatusBoard;