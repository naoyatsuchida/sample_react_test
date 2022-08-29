import React from 'react';
import Button from '@mui/material/Button';
import { CSSProperties } from '@emotion/serialize';


type ButtonType = {
    text: string,
    onClick: React.MouseEventHandler,
    styles?: CSSProperties,
    disable?: boolean
}

const SquareButton = (props: ButtonType) => {
    const { text, onClick, styles, disable } = props;
    let buttonStyle = { backgroundColor: "#FFF2CC", fontWeight: "bold", fontFamily: "Meiryo UI" };
    // let styled = { ...buttonStyle, ...styles };
    // console.log(styled)
    return (
        <>
        {disable && <Button  variant = "contained" style = { buttonStyle } onClick = { onClick } disabled > { text }</Button >}
        {!disable && <Button  variant = "contained" style = { buttonStyle } onClick = { onClick }  > { text }</Button >}
        </>
  )
}

export default  SquareButton
