import React from 'react';


const Home = () => {
    return (
        <div>
            <h4 style={{marginLeft:"38%"}}>Home Page</h4>
            <div>&nbsp;</div>
            <h4 style={{marginLeft:"35%"}}>Preventative Maintenance</h4>
            <table className="table table-sm" style={{width:'70%',marginLeft : "16%"}}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

export default Home;