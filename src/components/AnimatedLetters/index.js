import React from 'react';
import './index.scss';

const AnimatLetters = ({letterClass,strArray,idx}) => { // 3 parameters class , array and index , the span is for inline element
    return (
        <span>                                        
         {
            strArray.map((char,i) =>(
                <span key={char+i} className={`${letterClass} _${i + idx}`}>
                   {char} 
                </span>
            ))
         }
        </span>
    );
};

export default AnimatLetters;