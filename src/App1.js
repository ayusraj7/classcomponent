import React, { Component } from 'react';
import Modal from './Modal';
import { MdCancel } from "react-icons/md";
class App1 extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            msg:'',
            show:false,
        };
        this.handleShow=this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleShow=this.handleShow.bind(this);
        
        setTimeout(()=>{
            console.log('constructor called after 4 seconds ');
        },4000)
    }
    handleChange = (e)=>{
        this.setState({msg:e.target.value});
        console.log('msg',this.state.msg);
    }

    onSubmit=(e)=>{
        e.preventDefault();
        console.log('how are you ')
        this.setState({show:true});
    }

    
    
    componentDidMount(){
        
        setTimeout(()=>{
            console.log('component did mount after 4 seconds  ');
        },4000)
    }
    
    componentDidUpdate(){
        setTimeout(()=>{
            console.log('component get updated')
       },2000)
    }

    shouldComponentUpdate(){
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('prevState--->',prevState.msg)
      }

      handleShow(){
        console.log('clicked on it');
        this.setState({show:false})
        this.setState({msg:''})


        
    }

    componentWillUnmount()
    {
        console.log('component unmounted immediately');
    }
    

    render() {
        return (
            <div className='flex  bg-gray-400 relative h-[100vh] items-center justify-center '>
                <div className='flex gap-2  shaodw shadow-white  px-5 py-4 rounded-md bg-orange-600'>
                    <input type="text" disabled={this.state.show?true :false} className='px-2 py-1 rounded-sm focus:border-none focus:outline-none' name={this.state.msg} id="" value={this.state.msg} onChange={this.handleChange} />
                    <button className='border border-white px-2 rounded-sm text-white hover:bg-blue-500' onClick={this.onSubmit}>Show Me</button>
                   
                </div>
                {
                    this.state.show &&  <div className='absolute h-[150px] w-[400px] border bg-neutral-600 px-4 py-3 flex justify-center items-center text-white text-3xl rounded-sm left-[45%] border-gray-200 top-3 '>
                                            <div>{this.state.msg}</div>
                                            <MdCancel size={20} className='absolute right-2 top-2' onClick={this.handleShow}/>
                                        </div>
                }
            </div>
        );
    }
}

export default App1;