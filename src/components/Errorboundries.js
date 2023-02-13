import React from "react";

class ErrorBoundry extends React.Component {
    state={
        error:null,
        errorinfo:null
    }
    componentDidCatch(error,errorinfo){
        this.setState({error,errorinfo})
    }
    render(){
        if(this.state.errorinfo){
            return (
              <div>
                <h2>Something went wrong</h2>
                <details>
                  {this.state.error && this.state.error.toString()} <br />
                  {this.state.errorinfo.componentStack}
                </details>
              </div>
            );
        }
        return this.props.children;
    }
}
export default ErrorBoundry;