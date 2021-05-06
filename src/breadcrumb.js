import React, {useState, useEffect} from 'react';


function Breadcrumb() {
    const [path, setPath] = useState([]);
    const [obj, setObj] = useState({});
    const [mypath, setMypath] = useState('root');

    

    useEffect(() => {
    fetch('/path/' + mypath)
    .then(res => res.json())
    .then(out => {
        setPath(out.path);
        setObj(out.data);
    })
    }, [mypath]);
 
    const handleClick = e => {
        console.log("e");
        console.log(e.target.value);
        setMypath(e.target.value);
        console.log(mypath);
    }
    
    let child;

    if(obj.type === 'dir' && obj !== undefined) {
        child = Object.keys(obj.children).map(i => {
            console.log("i:" +i)
            return <button onClick={handleClick} value={i} key={i}>{i}</button>
        })
    }else if(obj.type === 'file'){
        child = <div>THIS IS FILE: {mypath}</div>
    }

    var pathOut = [];
    
    if(path.length !== 0 && path !== undefined) {
        pathOut =  path
        .map(t => <button onClick={handleClick} value={t} key={t} >{t}</button>)
        .reduce((a,e) => a === null ? [e] : [a,' / ',e], null)
    }

    console.log(pathOut);



    return(
        <div>
            {pathOut}
            <div>
                {child}
            </div>
        </div>
    );
};


export default Breadcrumb