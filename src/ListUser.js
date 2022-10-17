import React, { useState, useEffect } from "react"

import "./listUser.css"

function ListUser() {
  const [listUser, setListUser] = useState([])
  const [ttEdit, setTtEdit] = useState({
    email: '',
    password: ''
  })

  const [changeData, setChangeData] = useState(false)

  useEffect(() => {
    setListUser((JSON.parse(localStorage.getItem('listUser')) || []))
  }, [changeData])

  const [indexEdit, setIndexEdit] = useState(0)
  const updateEmail = (event) => {
    // setEmailUpdate(event.target.value)
    setTtEdit({
      email: event.target.value,
      password: ttEdit.password,
    })
  }
  const updatePassword = (event) => {
    setTtEdit({
      email: ttEdit.email,
      password: event.target.value,
    })
  }
  //	[{"email":"cuong@123","password":"123456"}  0 , {"email":"cuong1@123","password":"123456"} 1 ]
  const deleteUser = (index) => {
    const dataAfterDelete = listUser.filter((e, vt) => vt !== index)
    localStorage.setItem('listUser', JSON.stringify(dataAfterDelete));
    setChangeData(!changeData)

  }
  const editUser = (index) => {
    const dataEdit = listUser.find((e, vt) => vt === index)
    setTtEdit({
      email: dataEdit.email,
      password: dataEdit.password
    })
    setIndexEdit(index)

  }
  const OkeEdit = () => {
    const dataFind = listUser.find(e => e.email === ttEdit.email)
    // check xem tài khoản với email người ta nhập đã tồn tại
    if (dataFind) {
      alert("Đã có người đăng kí tài khoản này với email bạn nhập")
    }
    else {
      listUser[indexEdit].email = ttEdit.email
      listUser[indexEdit].password = ttEdit.password
      localStorage.setItem('listUser', JSON.stringify(listUser));
    }
  }
  return (
    <div style={{ marginLeft: '50px' }}>
      <table>
        <tr>
          <th>Index</th>
          <th>Email</th>
          <th>Password</th>
          <th>Sửa</th>
          <th>Xóa</th>
        </tr>
        {
          listUser.map((e, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td onClick={() => editUser(index)}>Sửa</td>
                <td onClick={() => deleteUser(index)}>Xóa</td>

              </tr>
            )
          })
        }
      </table>
      <h1>Thông tin cần sửa</h1>
      <label htmlFor="">email cần sửa</label>
      <input type="text" id="fname" name="fname" placeholder="user name" value={ttEdit.email} onChange={updateEmail} />
      <br />
      <label htmlFor="">Password cần sửa</label>
      <input type="password" id="fname" name="fname" placeholder="password" value={ttEdit.password} onChange={updatePassword} />
      <br />
      <div className="gr-button">
        <button className="bt1" >Hủy sửa</button>
        <button onClick={OkeEdit}>Oke</button>
      </div>
    </div>
  )


}

export default ListUser