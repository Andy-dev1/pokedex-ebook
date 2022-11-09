import styled from 'styled-components/native';

export const PokeCardBox = styled.View`
  width:80%;
  height:180px;
  background-color: #49D0B0;
  border-radius:10px;
  margin-bottom:20px;
  max-width:400px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
`;

export const PokeText = styled.Text`
  color:white;
  font-weight:bold;
  margin-bottom:20px;
`;
export const PokeType = styled(PokeText)`
  border: 1px solid #FFFFFF;
  border-radius: 40px;
  width:60px;
  height:24px
  text-align:center;
`;
export const PokeImage = styled.Image`
  width:40%;
  height:60%;
  margin-right:20px;
`;
export const PokeDataWrapper = styled.View`
  margin-left:20px;
`;