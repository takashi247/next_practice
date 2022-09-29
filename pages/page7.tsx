import { NextPage } from 'next';
import styled from 'styled-components';

const Text = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin: ${(props) => props.theme.space[2]};
`;

const Page7: NextPage = () => {
  return (
    <div>
      <Text>Color referenced from Theme is used in this text</Text>
    </div>
  );
};

export default Page7;