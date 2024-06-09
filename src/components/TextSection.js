import React from 'react';
import '../App.css';
import './SplitView.css';
import SplitView from './SplitView';

export default function TextSection(
    {header, children}
) {
    return (
        <>
            <SplitView left={<h1>{header}</h1>} right={children} />
        </>
    );
}