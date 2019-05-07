import React from 'react';

export default function App({state}) {
    return (
        <>
        <style> {`
            code {
                white-space: pre;
            }
        
        `}</style>
        <code>{JSON.stringify(state, null, 2)}</code>
        </>
    )
}