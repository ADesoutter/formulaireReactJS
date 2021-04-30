    class App extends React.Component {

        state = {
            newName: "",
            newMessage: "",
            comments: [`name: ${newName}, message: ${newMessage}`]
        }

        changeName = (event) => {
            this.setState({
                newName: event.target.value,
            })
        }
    
        changeMessage = (event) => {
            this.setState({
            newMessage: event.target.value,
            })
        }
    
        keepHistory = (event) => {
            event.preventDefault();
    
        let allInformations = [...this.state.history, [this.state.newName, this.state.newMessage]]
    
        this.setState({
            comments: allInformations
        })
    
    }



    render(){
        return(
            <div>
                <form className="form">
                <label htmlFor="">Say Something</label>
                    <div>  
                        <input type="text" placeholder="Your Name" 
                        onChange={this.changeName} value={this.state.newName}/>
                    </div>
                    <div>
                        <textarea name="" id="" placeholder="Your comment"
                        onChange={this.changeMessage} value={this.state.newMessage}></textarea>
                    </div>
                    <div>
                        <input onClick={this.keepHistory} type="submit" value="Comment"/>
                    </div>
                </form>
            </div>
        )}
    }

    ReactDOM.render(<App />, document.getElementById('app'));