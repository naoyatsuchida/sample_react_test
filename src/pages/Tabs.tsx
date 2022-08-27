import React, { useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
const Tabs = () => {
    useEffect(() => {
        //フォーカスループしたい要素を取得
        const  button =  document.querySelectorAll('button');

        //フォーカスループした要素数に応じてインデックスを延々と返す関数
        function* next(a: any, num=0):Generator {
            do{
                if (num === a.length  ) {
                    num = 0
                }
                 yield num++;
            } while(num <= a.length )
        }
        var index = next(button);

        //Tabキー押下時のイベントキャッチ
        const tabmove = (e: any) => {
            if (e.key === "Tab") {
                e.preventDefault();
                button[index.next().value].focus();
            }
        }
        document.addEventListener('keydown', tabmove);
    },[])


  return (
    <Container maxWidth="sm">
        <Box>
            <Stack spacing={2} direction="row" >
                <Button variant="contained" color='success' tabIndex={1} >
                    成功
                </Button>
                  <Button variant="contained" color="error" tabIndex={ 2}>
                    失敗
                </Button>
            </Stack>
        </Box>
    </Container>
  )
}

export default Tabs
