import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getItems, deleteItem } from '../actions/ItemActions';

class ShoppingList extends Component {

    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    componentDidMount(){
        this.props.getItems();
    }

    render(){
        const { items } = this.props.item;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className='shopping-list'>
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                <Button 
                                    className='remove-btn'
                                    color='danger'
                                    size='sm'
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                    >&times;
                                </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({ 
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);