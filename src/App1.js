import React, { Component } from 'react';
import Modal from './Modal';

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

    handleShow=(ans)=>{

        this.setState({show:ans});
        this.setState({msg:''})
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

    render() {
        return (
            <div className='flex  bg-gray-400 relative h-[100vh] items-center justify-center '>
                <div className='flex gap-2  shaodw shadow-white  px-5 py-4 rounded-md bg-orange-600'>
                    <input type="text" className='px-2 py-1 rounded-sm focus:border-none focus:outline-none' name={this.state.msg} id="" value={this.state.msg} onChange={this.handleChange} />
                    <button className='border border-white px-2 rounded-sm text-white hover:bg-blue-500' onClick={this.onSubmit}>Show Me</button>
                   
                </div>
                {
                    this.state.show && <Modal data={this.state.msg} handleShow={this.handleShow}/>
                }
            </div>
        );
    }
}

export default App1;