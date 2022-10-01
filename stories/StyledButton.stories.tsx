import { ComponentMeta } from '@storybook/react';
import { StyledButton } from '../components/StyledButton';
import MDXDocument from './StyledButton.mdx';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'StyledButton',
  component: StyledButton,
  // argTypes: {
  //   variant: {
  //     control: { type: 'radio' },
  //     options: ['primary', 'success', 'transparent'],
  //   },
  //   children: {
  //     control: { type: 'text' },
  //   },
  // },
  parameters: {
    docs: {
      page: MDXDocument,
    },
  },
} as ComponentMeta<typeof StyledButton>;

// const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />;

// export const TemplateTest = Template.bind({});

// TemplateTest.args = {
//   variant: 'primary',
//   children: 'primary',
// };

export const Primary = (props) => {
  return (
    <StyledButton {...props} variant="primary" onClick={linkTo('StyledButton', 'Success')}>
      Primary
    </StyledButton>
  );
};

export const Success = (props) => {
  return (
    <StyledButton {...props} variant="success" onClick={linkTo('StyledButton', 'Transparent')}>
      Success
    </StyledButton>
  );
};

export const Transparent = (props) => {
  return (
    <StyledButton {...props} variant="transparent" onClick={linkTo('StyledButton', 'Primary')}>
      Transparent
    </StyledButton>
  );
};
