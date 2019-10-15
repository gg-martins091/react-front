import styled from 'styled-components';

const Barra = styled.div`
  width: 100%;
  height: 60px;
  padding-right: 50px;
  padding-left: 50px;
  background: #f1f1f2;
  border-bottom: 1px solid #d1d1d2;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .actions {
    display: flex;
    justify-content: space-around;
    width: 30%;
  }
  .logo {
    font-size: 35px;
    color: blue;
  }
`


export { Barra }