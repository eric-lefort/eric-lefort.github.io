import React from 'react';
import '../App.css';
import './SplitView.css';

export default function SplitView(
    {left, right}
) {
    return (
        <>
            {/* 4 cloumns inside a flex box, the outer 2 are empty */}
            <div className='section'>
                <div className='margin-col'></div>                
                <div className='header-col fade-in-left'>
                    {left}
                </div>
                <div className='text-col fade-in-right'>
                    {right}    
                </div>
                <div className='margin-col'></div>
            </div>
        </>
    );
}