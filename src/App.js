import React from 'react'
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import './app.css'

class App extends React.Component{
    render() {
        return (
            <>
                <Header/>
                <Main/>
                <Footer/>
            </>
        )
    }
}

export default App
