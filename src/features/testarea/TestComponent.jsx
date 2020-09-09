import React, { Component } from "react";
import { connect } from "react-redux";
import { increamentAsync, decrementAsync } from "./testActions";
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";
import { openModal } from "../modals/modalActions";

const mapState = (state) => ({
  data: state.test.data,
  loading: state.async.loading,
  buttonName: state.async.elementName
});

const actions = {
  increamentAsync,
  decrementAsync,
  openModal,
};

class TestComponent extends Component {
  render() {
    const {
      data,
      increamentAsync,
      decrementAsync,
      openModal,
      loading,
      buttonName
    } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>The answer is: {data}</h3>
        <Button
          name='increment'
          loading={buttonName === 'increment' && loading}
          onClick={(e) => increamentAsync(e.target.name)}
          positive
          content='Increment'
        />
        <Button
          name='decrement'
          loading={buttonName === 'decrement' && loading}
          onClick={(e) => decrementAsync(e.target.name)}
          negative
          content='Decrement'
        />
        <Button
          onClick={() => openModal("Test Modal", { data: 42 })}
          color='teal'
          content='Open Modal'
        />
        <br />
        <br />
        <TestPlaceInput />
        <SimpleMap />
      </div>
    );
  }
}

export default connect(mapState, actions)(TestComponent);
