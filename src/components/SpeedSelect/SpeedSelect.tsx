import React from 'react';

interface SpeedSelectProps{
    options: {'id': string, 'name': 'string'}[]
}

export default function SpeedSelect(props: SpeedSelectProps){
    return props.options.map(option => <h1>{option.name}</h1>);
}