import styled from '@emotion/styled'
export const Ul = styled.ul`
  padding:10px;
`;

 export const Li = styled.li`
    display:flex;
    justify-content: space-between;
    align-items: center;

`;

export const P = styled.p`
    text-transform: capitalize;
    font-size: 25px;
   
`;
export const Button = styled.button`

  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: teal;
  font-weight: 500;
  border:inherit;

  &:hover {
    color: white;
    background-color: white-blue;
    transform: scale(1.2);
  }
`;