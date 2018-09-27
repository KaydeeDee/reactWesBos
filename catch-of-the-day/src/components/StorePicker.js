import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.gotoStore = this.gotoStore.bind(this);
    // }

    myInput = React.createRef();

    goToStore = (e) =>{
        e.preventDefault();
        const storeName = this.myInput.value.value;
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
        <Fragment>
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={this.myInput}/>
                <button type="submit">Visit Store</button>
            </form>
        </Fragment>
        )
    }
}

export default StorePicker;