import React from 'react'

export default class Example extends React.Component {
    constructor() {
      super()
      this.state = { }
    }
    
    handleInputChangeCopy = (e) => {   
      const val = e.target.value;
      
      console.log('in callback');
      console.log(e.target.value);
      
      this.setState(function (prevState, props) {
          console.log('in async callback');
          console.log(val);
          
          return {
            searchValue: val
          }
      })
    }
    
    handleInputChangePersist = (e) => {
      e.persist();
      console.log('in callback');
      console.log(e.target.value);
      
      this.setState(function (prevState, props) {
          console.log('in async callback');
          console.log({ isNull: e.target === null })
          
          console.log(e.target.value);
          
          return {
            searchValue: e.target.value
          }
      })
    }
    
    handleInputChange = (e) => {
      console.log('in callback');
      console.log(e.target.value);
      
      this.setState(function (prevState, props) {
          console.log('in async callback');
          
          console.log({ isNull: e.target === null })
          console.log({ event: e });
          
          console.log(e.target.value);
          
          return {
              searchValue: e.target.value
          }
      })
    }
    
    render() {
      return (
      <div>
        <div>Copy example</div>
        <input 
          type="text"
          onChange={this.handleInputChangeCopy} 
        />
        
        <p>Persist example</p>
        <input 
          type="text"
          onChange={this.handleInputChangePersist} 
        />
        
        <p>Original example - please note nullified fields of the event in the async callback. <small>Breaks the example, please re-run after a Script error</small></p>
        <input 
          type="text"
          onChange={this.handleInputChange} 
        />
  
        <div style={{height: 300}} />
      </div>
      )
    }
  }
  