import React from 'react'
import Header from './components/common/Header'
const App = ()=>{
    const title ='React Coin';
    return(
        <div>
            <Header/>
            <h1>{title}</h1>
        </div>
    );
}
export default App