import React, { Component } from 'react'
import { MdCancel } from "react-icons/md";

export default class Modal extends Component {
    constructor(props){
        super(props);
        this.handleShow=this.handleShow.bind(this);
    }
    handleShow(){
        console.log('clicked on it');
        this.props.handleShow(false);
        
    }

    componentWillUnmount()
    {
        console.log('component unmounted immediately');
    }
    
  render() {
    return (
      <div className='absolute h-[150px] w-[400px] border bg-neutral-600 px-4 py-3 flex justify-center items-center text-white text-3xl rounded-sm right-4  border-gray-200 top-3 '>
          <div>{this.props.data}</div>
          <MdCancel size={20} className='absolute right-2 top-2' onClick={this.handleShow}/>
      </div>
    )
  }
}
