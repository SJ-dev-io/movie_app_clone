import React,{useEffect} from 'react';


const Detail = ({location, history}) => {
    useEffect(() => {
        if(location.state === undefined){
            history.push("/");
        }
    },[])

    return (
        <div>
            {location.state ?  <span>{location.state.title}</span> : null }
        </div>
    );
};

export default Detail;
