
import './App.css';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Button } from 'bootstrap';
function App() {
  const array = [1, 2, -1, 5, 10, 10, 5, 12, 10];
  // let tich = 0;
  // let a = 0;
  // let b = 0
  // let max = 0;
  // let c = array[0]; // vị trí trước
  // for (let index = 1; index < array.length; index++) {
  //   tich = c * array[index];
  //   // array[index]  vị trước sau 
  //   if (tich > max) {
  //     max = tich;
  //     a = c;
  //     b = array[index];
  //   }
  //   c = array[index];// vị trí trước 
  // }
  // console.log(5555555555, max, a, b)
  // for (let index = 0; index <= (array.length - 2); index++) {
  //   tich = array[index] * array[index + 1];
  //   if (tich > max) {
  //     max = tich;
  //     a = array[index];
  //     b = array[index + 1];
  //   }
  // }

  // function adjacentElementsProduct(array) {
  //   let tich = 0;
  //   let a = 0;
  //   let b = 0
  //   let max = 0;
  //   let c = array[0]; // vị trí trước
  //   for (let index = 1; index < array.length; index++) {
  //     tich = c * array[index];
  //     // array[index]  vị trước sau 
  //     if (tich > max) {
  //       max = tich;
  //       a = c;
  //       b = array[index];
  //     }
  //     c = array[index];// vị trí trước 
  //   }
  //   console.log(a ,b)
  // }
  // adjacentElementsProduct(array)











  // ==================> bài 2

  // const arraybai2 = [60, 40, 55, 75, 64];
  // function alternatingSums(arraybai2) {
  //   let team1 = 0;
  //   let team2 = 0;
  //   for (let index = 0; index < arraybai2.length; index++) {
  //     if (index % 2 === 0) {
  //       team1 += arraybai2[index];
  //     } else {
  //       team2 += arraybai2[index];
  //     }

  //   }
  //   console.log(team1, team2)
  // }
  // alternatingSums(arraybai2)



  // ===============> bài 3

  const [linkGet, setLinkGet] = useState('');
  const [stateonChangeGetLink, setstateonChangeGetLink] = useState('');
  const [loadding, setLoadding] = useState(false)
  // async { await , await } axios
  // await axios.get("ssssssssssssss")
  // await axios.get("11111111111111111")
  const [stateButton, setStateButton] = useState('')
  const onCLickCallApi = async () => {
    setLoadding(true)
    const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${stateonChangeGetLink}`);
    const { short_link, short_link2, short_link3 } = response.data.result;
    console.log(stateButton == 'short_link2')
    if (stateButton === 'short_link1') {
      setLinkGet(short_link);
    } else if (stateButton === 'short_link2') {
      setLinkGet(short_link2);
    } else if (stateButton === 'short_link3') {
      setLinkGet(short_link3);
    } else if (stateButton === '') {
      setLinkGet(short_link);
    }
    setLoadding(false)
  }
  const getLinkOnChange = (event) => {
    setstateonChangeGetLink(event.target.value);

  }

  const getButtonCLick = (e) => {
    setStateButton(e)
  }
  // useEffect(async () => {
  //   const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=https://mindx.edu.vn/`);
  //   console.log(response)
  // }, []);
  return (

    <div className='inputLink'>
      <InputGroup className="mb-3 ">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={getLinkOnChange}
        />
        <InputGroup.Text id="basic-addon2">
          <button onClick={onCLickCallApi}>
            {
              loadding ? <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner> : 'Call Api'
            }

          </button>
        </InputGroup.Text>
      </InputGroup>
      <div>
        <button onClick={() => getButtonCLick('short_link1')}> short_link1 </button>
        <button onClick={() => getButtonCLick('short_link2')}>short_link 2 </button>
        <button onClick={() => getButtonCLick('short_link3')}>short_link 3 </button>
      </div>

      <label htmlFor="">link generated</label>
      <a href="http://">{linkGet}</a>
    </div>

  );
}

export default App;
