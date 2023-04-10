import React, { Component } from 'react';
import './headercss.css'

class Header extends Component {
    render() {
        return (
            <div className="container-fluid rang">
                <div className="container">
                    <div>
                        <input type="text"  class="form-control" placeholder="Search" />
                    </div>
                    <div className='row'>
                        {
                            this.props.arr.map((i, index) => {
                                return (
                                    <div className='col-4 card my-2'>
                                        <iframe src={i.img} alt={i.name} />
                                        <h3>{i.name}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
