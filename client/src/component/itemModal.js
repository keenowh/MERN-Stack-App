import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItems } from '../actions/ItemActions';
import PropTypes from 'prop-types'

class ItemModal extends Component {
  state = {
    modal: false,
    name: ''
   }

   static propTypes = {
     isAuth: PropTypes.bool
   }

  toggle = () => {this.setState({
    modal : !this.state.modal
  })
};

onChange = (e) =>{
  this.setState({[e.target.name]: e.target.value});
}

onSubmit = (e) => {
  e.preventDefault();
  const newItem = {
    name: this.state.name
  }

  //Add item via addItem
  this.props.addItems(newItem);

  this.toggle();
}
  render() {
    return (
      <div>
        { this.props.isAuth ? 
        
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={this.toggle}
        >Add Item</Button> : <h4 className="mb-3 ml-4">Please login to manage items</h4>}

        <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input 
                type="text"
                name="name"
                id="item"
                placeholder="Add Shopping Item"
                onChange={this.onChange}
              />
              <Button
              color="dark"
              style={{marginTop: '2rem'}}
              block
              >Add Item</Button>
            </FormGroup>
          </Form>
        </ModalBody>
        </Modal>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  item: state.item,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {addItems})(ItemModal)

