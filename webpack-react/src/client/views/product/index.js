import React from 'react';
import PropTypes from 'prop-types';
import { getData, getLocalData } from '../../api/data';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      localData: '',
      status: 'pending',
    };
  }

  componentDidMount() {
    getData().then((res) => {
      this.setState({
        status: res.statusText,
      });
    });
    getLocalData().then((res) => {
      const { name } = res.data.data[0];
      this.setState({
        localData: name,
      });
    });
  }

  render() {
    const { status, localData } = this.state;
    const { typeCheck } = this.props;
    return <div>{localData} &gt; {status} &gt; {typeCheck}</div>;
  }
}

Product.propTypes = {
  typeCheck: PropTypes.string.isRequired,
};

export default Product;
