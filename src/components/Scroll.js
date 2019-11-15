import React  from 'react'

const Scroll=(props)=>{
    return(
        <div style={{height:'1000px',border:'1px solid black' , overflow:'scroll'}}>
           { props.children}
        </div>
    );
}
export default Scroll;