import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Wrapper } from './HomePage.styles';
import * as actions from '../../store/actions';

const HomePage = ({ handleFetchData }) => {
  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <Wrapper>
      homepage
    </Wrapper>
  )
};

const mapStateToProps = state => (
  {
    data: state.data,
  }
);

const mapDispatchToProps = dispatch => (
  {
    handleFetchData: data => dispatch(actions.handleFetchData(data)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
