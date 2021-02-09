import React from 'react'

class Login extends React.Component{

    render(){
        return(
            <div style = {{background : "red" , alignContent : "center", position : "relative"}}>
                <form>
                <div className="form-group">
                    <label for="name">Username:</label>
                    <input style={{width:'40%'}} type="text" className="form-control" id="name" placeholder="Enter Name" name="name" />
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input style={{width:'40%'}} type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" />
                </div>
               <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;