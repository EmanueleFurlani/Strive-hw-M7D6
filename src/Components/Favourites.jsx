import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import { StarFill } from 'react-bootstrap-icons'
// import { connect } from 'react-redux'
import { removeFromFav } from '../actions'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// const mapDispatchToProps = (dispatch) => ({
//     removeFromFavKey: (c) => { dispatch(removeFromFav(c)) }
// })


const Favourites = () => {

    const likes = useSelector(state => state.likes)
    const dispatch = useDispatch()

        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <ListGroup className="mt-2">
                        {
                            likes.elements.map(c => (
                                <ListGroupItem >
                                    <StarFill className="mr-3" onClick={() => dispatch(removeFromFav(c))} />
                                    <Link to={`/${ c }`}>{ c }</Link>
                                </ListGroupItem>
                            ))

                        }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )

}

export default Favourites