import styled from '@emotion/styled';

export const Form = styled.form`
display: flex;
flex-direction: column;
gap:12px
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 15px;
  font-size:18px;

`;

export const Input = styled.input`
font-size:20px;
  width: 400px;
  padding: 10px;
  border: 1px solid #020202;
`;

export const Button = styled.button`
padding:10px 35px;
font-size:18px;
color: #ffffff;
background-color:#dd0fb0;
border: 1px solid #020202;
box-shadow: 0px 4px 13px 0px rgba(0,0,0,0.75);
cursor: pointer;
margin-top:15px;
`;