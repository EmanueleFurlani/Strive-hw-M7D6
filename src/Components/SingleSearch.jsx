import React from 'react'
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
import { addToFav, removeFromFav } from '../actions'
import { Star, StarFill } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// const mapStateToProps = (state) => state
// const mapDispatchToProps = (dispatch) => ({
//     addToFavourites: (company) => dispatch(addToFav(company)),
//     removeFromFavourites: (company) => dispatch(removeFromFav(company)),    
//   })

const SingleSearch = ({ data }) => {

    const dispatch = useDispatch()
    
    const likes = useSelector(state => state.likes)

    const isFav = likes.elements.includes(data.company_name)

    const toggleFavourite = () => {
        isFav 
            ? dispatch(removeFromFav(data.company_name))
            : dispatch(addToFav(data.company_name))
             }

    return ( 
        <Col sm={6}>         
            <Card className="m-2">
                <Row>
                    <Col>
                        <Card.Header>{data.title}</Card.Header>                
                        <Card.Body>
                            <Card.Title><Link to={`/${data.company_name}`}>{data.company_name}</Link>                        
                            {
                                isFav
                                    ? <StarFill color="green" size={16} className="ml-4 my-auto" onClick={toggleFavourite}/>
                                    : <Star color="green" size={16} className="ml-4 my-auto" onClick={toggleFavourite} />
                            }
                            </Card.Title>
                                <Card.Text className="text-left">
                                {data.category}
                                </Card.Text>
                                <Button variant="success"><a className="text-white" href={data.url}>Open</a></Button>                             
                        </Card.Body>
                    </Col> 
                </Row>
            </Card>
        </Col>       
    );   
} 

export default SingleSearch