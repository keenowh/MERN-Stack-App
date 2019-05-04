import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup} from'react-transition-group'
import {connect} from 'react-redux'; 
import {getItems, addItems, deleteItems} from '../actions/ItemActions';
import PropTypes from 'prop-types'; 


class ShoppingList extends Component {
  
  componentDidMount() {
    this.props.getItems();
  }

  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuth: PropTypes.bool
  }

  onDeleteClick = (id) => {
    this.props.deleteItems(id)
  }

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        
           <ListGroup>
             <TransitionGroup className="shopping-list">
                {items.map(({ _id, name }) => (
                  <CSSTransition key={_id} timeout={500} classNames="fade">
                    <ListGroupItem>
                      {this.props.isAuth ? <Button 
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                      >&times;</Button> : null}
                      {name}
                    </ListGroupItem>
                  </CSSTransition>
                ))}
             </TransitionGroup>
           </ListGroup>
      </Container>
    )
  }
}



const mapStateToProps = (state) => ({
  item: state.item,
  isAuth: state.auth.isAuth
})
export default connect(
  mapStateToProps,
  { getItems, deleteItems}
)(ShoppingList);
