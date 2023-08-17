import styled from "styled-components";
import { InputMask } from "primereact/inputmask";
        

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0px 8px;
  color: var(--brand-color);
  font-size: 11px;
 
`;

export const InputBox = styled.div`
  margin-bottom: 8px;
  border-bottom: 1px solid var(--brand-color);
  
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  height: 36px;
  color: var(--white-text);
  font-size: 14px;
  font-weight: 400;
  &:focus {
    outline: none;
  }

`;
export const InputLib = styled(InputMask)`
  border: none;
  background-color: transparent;
  height: 36px;
  color: var(--white-text);
  font-size: 14px;
  font-weight: 400;
  &:focus {
    outline: none;
  }
`;

export const HiddenBtn = styled.button`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 8px;
  border: none;
  border-right: 0.3px solid var(--light-grey);
  background-color: transparent;
  cursor: pointer;
`;

export const PhoneBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  input {
    padding-left: 8px;
  }
`;

export const CountryCode = styled.span`
padding-left: 7px;
  color: var(--white-text);
  font-size: 14px;
  font-weight: 400;
`;

export const Underline = styled.div`
width: 300px; 
  border-bottom: 1px solid var(--brand-color);
`;

export const BtnBox = styled.div`
  margin-top: 56px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--brand-color);
  font-family: Helvetica Light;
  font-size: 13px;
  background-color: transparent;
  border: none;
 padding: 0 8px;
`;