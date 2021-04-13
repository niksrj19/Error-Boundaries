import React from 'react'

class  ErrorBoundaries extends React.Component{
 constructor(props){
     super(props);
     this.state={
     isError: false
     }
 }
static getDerivedStateFromError(error){
    return {
    isError:true
    }
} 

componentDidCatch(error,info){
    console.log(error);
    console.log(info);
}

    render(){
        if(this.state.isError){
            return <h1> Something went wrong</h1>
        }
        return(
           this.props.children
        );
    }
}

export default ErrorBoundaries;