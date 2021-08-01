import React from 'react';
import Card from './Card';
import Data from './Card/data';


function createCard(Data){
     console.log(Data);
    
    return <Card
    key={Data.id}
    src={Data.src}
    alt={Data.alt}
    desc={Data.desc}
    value={Data.value}
    />
    
}


const Reports = () => {
    return (
        <div className="reportsDiv">
           { Data.map(createCard)  
           }
            {/* <Card 
            img={img1}
            alt="helloworld"
            desc="System Junk"
            value="35GB" 
            />
            
                   
            <Card 
            img={img1}
            alt="helloworld"
            desc="Sdfasdf"
            value="35GB" 
            />
            <Card 
            img={img1}
            alt="helloworld"
            desc="vhghhjghjg"
            value="35GB" 
            />
           */}
        </div>
    )
}

export default Reports
