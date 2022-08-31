import React from 'react';
import Button from '@mui/material/Button';

type ButtonType = {
    text: string,
    onClick: React.MouseEventHandler,
    styles?: { [key: string]:string },
    disable?: boolean
}

const SquareButton = (props: ButtonType) => {
    const { text, onClick, styles, disable } = props;
    let buttonStyle = {  backgroundColor: "#FFF2CC", fontWeight: "bold", color: "black" ,fontFamily: "Meiryo UI",borderRadius:"0px" ,boxShadow:"2px 2px 2px 1px rgba(0, 0, 0, 0.5)"};
    let styled = { ...buttonStyle, ...styles };
    return (
        <>
        {disable && <Button style={styled} className='SquareButton' variant = "contained"  onClick = { onClick } disabled > { text }</Button >}
            {!disable && <Button style={ styled} className='SquareButton' variant = "contained" onClick = { onClick }  > { text }</Button >}
        </>
  )
}

export default  SquareButton
