import React, {useEffect , useState} from 'react'
import {Card} from 'react-bootstrap';
import "./covid.css";

const Covid = () => {

    const [data, setData]=useState([]);

    const getCovidData = async()=>{
        try {
            
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualdata = await res.json();
            console.log(actualdata.statewise[0]);
            setData(actualdata.statewise[0])

        } catch (error) {

            console.log(error);

        }
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
        <div style={{margin: "10px auto", width:"80%"}} className="d-flex justify-content-center  " >
                    <Card style={{ width: '50rem' , margin : '20px' , color:"#00ED01", color:"#00ED01"}} className="card ">
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted " style={{ paddingLeft :'20px'}}> 🔴  LIVE  </Card.Subtitle>
                            <Card.Text>
                                <h2 style={{textAlign: 'center'}}>  COVID-19 CORONAVIRUS TRACKER  </h2>
                            </Card.Text>
                    </Card.Body>
                </Card>
        </div>



    <div className=" " style={{width: "90%", margin :"auto"}}>
        <div className="container" style={{marginTop: "30px"}}>
            <div className="card-columns d-flex justify-content-center ">
                <Card style={{ width: '25rem' , margin : '20px' ,  color:"#00ED01"}}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted" style={{ paddingLeft :'20px'}}>OUR <span style={{ fontSize: '25px'}}>COUNTRY</span></Card.Subtitle>
                            <Card.Text>
                                <h2 style={{textAlign: 'center'}}> INDIA </h2>
                            </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '25rem' , margin : '20px' , color:"#00ED01"}}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted" style={{ paddingLeft :'20px'}}>TOTAL <span style={{ fontSize: '25px'}}>RECOVERED</span></Card.Subtitle>
                            <Card.Text>
                                <h2 style={{textAlign: 'center'}}> {data.recovered} </h2>
                            </Card.Text>
                    </Card.Body>
                </Card>


                <Card style={{ width: '25rem' , margin : '20px' , color:"#00ED01"}}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted" style={{ paddingLeft :'20px'}}>TOTAL <span style={{ fontSize: '25px'}}>CONFIRMED</span></Card.Subtitle>
                            <Card.Text>
                                <h2 style={{textAlign: 'center'}}> {data.confirmed} </h2>
                            </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        </div>
    
        <div className="container" style={{marginTop: "100px"}}>
            <div className="card-columns d-flex justify-content-center">
                <Card style={{ width: '25rem' , margin : '20px' , color:"#00ED01"}}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted" style={{ paddingLeft :'20px'}}>TOTAL <span style={{ fontSize: '25px'}}>DEATH</span></Card.Subtitle>
                            <Card.Text>
                                <h2 style={{textAlign: 'center'}}> {data.deaths} </h2>
                            </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '25rem' , margin : '20px' , color:"#00ED01"}}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted" style={{ paddingLeft :'20px'}}>TOTAL <span style={{ fontSize: '25px'}}>ACTIVE</span></Card.Subtitle>
                            <Card.Text>
                                <h2 style={{textAlign: 'center'}}> {data.active} </h2>
                            </Card.Text>
                    </Card.Body>
                </Card>


                <Card style={{ width: '25rem' , margin : '20px' , color:"#00ED01"}}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted" style={{ paddingLeft :'20px'}}>LAST <span style={{ fontSize: '25px'}}>UPDATED</span></Card.Subtitle>
                            <Card.Text>
                                <h2 style={{textAlign: 'center'}}> {data.lastupdatedtime} </h2>
                            </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        </div>
    </div>
        
        </>
    )
}

export default Covid
