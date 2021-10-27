import React from "react"
import SingleSearch from "./SingleSearch"
import {Alert, Spinner, Col, Container, Form, Button, Row } from "react-bootstrap";
import uniqid from "uniqid"
import { handleFetch } from "../actions"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const SearchResult = () => {

  const [jobquery, setjobquery] = useState("")
  const dispatch = useDispatch()

  const jobs3 = useSelector(state => state.jobs.elements)
  const isError = useSelector(state => state.jobs.isError)
  const isLoading = useSelector(state => state.jobs.isLoading)


  const handleChange = (e) => {
        setjobquery(e.target.value)
    }

    let baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?search="
    let limit = "&limit=6"

   const handleSub = async (e) => {
      e.preventDefault()
      dispatch(handleFetch(baseEndpoint + jobquery + limit))
    }

      return (

          <Container>
            <Row>
              <Col>
                <Form onSubmit={handleSub}>
                  <Row className="justify-content-md-center">
                    <Form.Group as={Col} controlId="formGridSearch">
                      {/* <Form.Control type="text" placeholder="What job are you looking for?" value={jobquery} onChange={e=> setjobquery(e.target.value)} /> */}
                       <Form.Control type="text" placeholder="What job are you looking for?" value={jobquery} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridButton">
                        <Button type="search" className={"rounded-circle"} variant="outline-success">Search</Button>
                    </Form.Group>
                  </Row>
                </Form>
              </Col>
            </Row>
           {isError?( <Alert variant="danger">Error fetching jobs in list</Alert>)
           : isLoading? (  <Spinner variant="success" animation="border" />)
           :( <Row>
                  {jobs3 && jobs3.map((jobData) => <SingleSearch key={uniqid()} data={jobData} />)}
            </Row>)}

          </Container>
        );
    }

export default SearchResult


// import React from "react"
// import SingleSearch from "./SingleSearch"
// import {Alert, Spinner, Col, Container, Form, Button, Row } from "react-bootstrap";
// import uniqid from "uniqid"
// import { connect } from "react-redux"
// import { handleFetch } from "../actions"

// const mapStateToProps = (state) => ({
//   jobs3: state.jobs.elements,
//   isError: state.jobs.isError,
//   isLoading: state.jobs.isLoading
// })

// const mapDispatchToProps = (dispatch) => ({
//   handleFetch: (baseEndpoint, jobquery, limit) => {
//   dispatch(handleFetch(baseEndpoint, jobquery, limit))
//   }
// })


// class SearchResult extends React.Component{

//     state = {
//         jobquery:"",
//     }

//  baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?search="
//  limit = "&limit=6"


//     handleChange = (e) => {
//         this.setState({jobquery: e.target.value})
//     }

//     handleSub = async (e) => {
//       e.preventDefault()
//       this.props.handleFetch(this.baseEndpoint + this.state.jobquery + this.limit)
//     }
  
//      render() {
//       return (
 
//           <Container>
//             <Row>
//               <Col>
//                 <Form onSubmit={this.handleSub}>
//                   <Row className="justify-content-md-center">
//                     <Form.Group as={Col} controlId="formGridSearch">         
//                       <Form.Control type="text" placeholder="What job are you looking for?" value={this.state.jobquery} onChange={this.handleChange} />
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formGridButton">      
//                         <Button type="search" className={"rounded-circle"} variant="outline-success">Search</Button>
//                     </Form.Group>         
//                   </Row>
//                 </Form>   
//               </Col>
//             </Row> 
//            {this.props.isError?( <Alert variant="danger">Error fetching jobs in list</Alert>)
//            : this.props.isLoading? (  <Spinner variant="success" animation="border" />)
//            :( <Row>
//                   {this.props.jobs3 && this.props.jobs3.map((jobData) => <SingleSearch key={uniqid()} data={jobData} />)} 
//             </Row>)}
           
//           </Container>
//         );  
//     }    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);

