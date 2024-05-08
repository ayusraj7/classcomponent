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
        this.handleInner=this.handleInner.bind(this);
        
        
            console.log('constructor will be called first ... ');
      
    }
    handleChange = (e)=>{
        this.setState({msg:e.target.value});
        
    }

    onSubmit=(e)=>{
        e.preventDefault();
     
        this.setState({show:true});
    }

    
    
    componentDidMount(){
        
        
            console.log('At last componentDidMount called ....');
       
    }
    
    componentDidUpdate(){
      
            console.log('at last in updating component get called')
     
    }

    static getDerivedStateFromProps(props, state) {
        console.log('prev',props,'current state',state);
        console.log('getDerivedState runs after constructor in mounting and updating')
        return props;
      }

    handleInner(e){
        e.stopPropagation();
        
    }

    shouldComponentUpdate(){
        console.log('seconly after getsnapshot this runs ...')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        
        console.log('thirdly this is called before updation it update state on basics of props value')
        return prevState.msg
      }

      handleShow(){
        console.log('clicked on it');
        this.setState({show:false})
        this.setState({msg:''})


        
    }

    componentWillUnmount()
    {
        console.log('component unmounted called at closing');
    }
    

    render() {
        console.log('After Constructor & getDerivedState render is called ')
        return (
            <div className='flex  bg-gray-200 relative h-[100vh] items-center justify-center '>
                <div className=' flex gap-2  shaodw shadow-white  px-5 py-4 rounded-md bg-orange-600'>
                    <input type="text" disabled={this.state.show?true :false} className='px-2 py-1 rounded-sm focus:border-none focus:outline-none' name={this.state.msg} id="" value={this.state.msg} onChange={this.handleChange} />
                    <button className='border border-white px-2 rounded-sm text-white hover:bg-blue-500' onClick={this.onSubmit}>Show Me</button>
                   
                </div>
                {
                    this.state.show &&  <div className='z-[100] fixed inset-0 !mt-0 grid place-items-center overflow-auto  bg-black bg-opacity-50' onClick={this.handleShow}>
                                            <div className='z-[200] border relative bg- opacity-80 bg-gray-700 border-blue-900 w-[500px] h-[250px] rounded-md flex flex-col gap-3  justify-center items-center' onClick={(e)=>e.stopPropagation()}>
                                                <div className='z-20 text-3xl text-white text-semibold'>{this.state.msg}</div>
                                                <MdCancel size={20} className='absolute right-2 top-2 text-white' onClick={this.handleShow}/>
                                            </div>
                                        </div>
                }
            </div>
        );
    }
}

export default App1;