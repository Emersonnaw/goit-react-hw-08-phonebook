import styled from '@emotion/styled';

export const Form = styled.form`
   // width: 320px;
    // margin-left:auto;
    // margin-right:auto;
    padding:30px;
    background-color:lightgray;
    border-radius: 10px;
`;

export const Label = styled.label`
     display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    gap: 6px;
`;

export const Button = styled.button`
    font-size: 16px;
    width: 150px;
    height: 40px;
    display: block;
    margin: 0px auto;
    color: white;
    background-color: teal;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 4px;
    opacity: 1;
    transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    border-color: transparent;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    &:hover {
    color: white;
    background-color:#orangered;
    transform: scale(1.1);
    }
`;