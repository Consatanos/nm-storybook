import type { Meta, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { ButtonComponent } from './button.component';
import { ButtonSizeEnum, ButtonThemeEnum } from '@components/button/button.enum';

export const actionsData = {
  btnClick: action('btnClick'),
};

type StoryType = ButtonComponent & { content: InnerHTML | string };

const meta: Meta<StoryType> = {
  title: 'Design System/Atoms/Button',
  component: ButtonComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  render: (args: StoryType) => {
    const {content, ...props} = args;
    return {
      props,
      onPinTask: actionsData.btnClick,
      template: `
        <nm-button
            [theme]="theme"
            [size]="size"
            [singleIcon]="singleIcon"
            [disabled]="disabled"
            [loading]="loading">
          ${content}
        </nm-button>
      `
    };
  }
}

export default meta;
type Story = StoryObj<StoryType>;

export const Button: Story = {
  args: {
    content: 'Кнопка',
    theme: ButtonThemeEnum.Primary,
    size: ButtonSizeEnum.Medium
  }
};

export const SimpleText: Story = {
  name: 'simple text - соответствует миксину @include button($size: medium, $theme: large, $type: default)',
  args: {
    content: 'Простой текст',
    theme: ButtonThemeEnum.Primary,
    size: ButtonSizeEnum.Large
  }
};

export const TextWithIcon: Story = {
  name: 'text with icon - соответствует миксину @include button($size: medium, $theme: large, $type: default)',
  args: {
    content: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="16px" height="16px" viewBox="0 0 16 16">
        <path fill="currentColor" fill-rule="evenodd"
              d="M8 2a1 1 0 0 0-1 1v4H3a1 1 0 0 0 0 2h4v4a1 1 0 1 0 2 0V9h4a1 1 0 1 0 0-2H9V3a1 1 0 0 0-1-1Z"
              clip-rule="evenodd"/>
      </svg>
      Кнопка
    `,
    theme: ButtonThemeEnum.Primary,
    size: ButtonSizeEnum.Large
  }
};

export const SingleIcon: Story = {
  name: 'single-icon - соответствует миксину @include button($size: medium, $theme: large, $type: single-icon)',
  args: {
    content: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="16px" height="16px" viewBox="0 0 16 16">
        <path fill="currentColor" fill-rule="evenodd"
              d="M8 2a1 1 0 0 0-1 1v4H3a1 1 0 0 0 0 2h4v4a1 1 0 1 0 2 0V9h4a1 1 0 1 0 0-2H9V3a1 1 0 0 0-1-1Z"
              clip-rule="evenodd"/>
      </svg>
    `,
    theme: ButtonThemeEnum.Primary,
    size: ButtonSizeEnum.Large,
    singleIcon: true
  }
};


// Size
export const SizeLarge: Story = {
  name: 'large - соответсвует миксину @include size(large)',
  args: {
    content: 'Кнопка',
    theme: ButtonThemeEnum.Primary,
    size: ButtonSizeEnum.Large
  }
};

export const SizeMedium: Story = {
  name: 'medium - соответсвует миксину @include size(medium)',
  args: {
    content: 'Кнопка',
    theme: ButtonThemeEnum.Primary,
    size: ButtonSizeEnum.Medium
  }
};

export const SizeSmall: Story = {
  name: 'small - соответсвует миксину @include size(small)',
  args: {
    content: 'Кнопка',
    theme: ButtonThemeEnum.Primary,
    size: ButtonSizeEnum.Small
  }
};


// Theme
export const ThemePrimary: Story = {
  name: 'primary - соответсвует миксину @include theme(primary)',
  args: {
    ...SizeMedium.args,
    theme: ButtonThemeEnum.Primary
  }
};

export const ThemeSecondary: Story = {
  name: 'secondary - соответсвует миксину @include theme(secondary)',
  args: {
    ...SizeMedium.args,
    theme: ButtonThemeEnum.Secondary
  }
};

export const ThemeTertiary: Story = {
  name: 'tertiary - соответсвует миксину @include theme(tertiary)',
  args: {
    ...SizeMedium.args,
    theme: ButtonThemeEnum.Tertiary
  }
};

export const ThemeBorderAccent: Story = {
  name: 'border-accent - соответсвует миксину @include theme(border-accent)',
  args: {
    ...SizeMedium.args,
    theme: ButtonThemeEnum.BorderAccent
  }
};

export const ThemeBlueAccent: Story = {
  name: 'blue-accent - соответсвует миксину @include theme(blue-accent)',
  args: {
    ...SizeMedium.args,
    theme: ButtonThemeEnum.BlueAccent

  }
};

export const ThemeSuccess: Story = {
  name: 'success - соответсвует миксину @include theme(success)',
  args: {
    ...SizeMedium.args,
    theme: ButtonThemeEnum.Success
  }
};

export const ThemeDanger: Story = {
  name: 'danger - соответсвует миксину @include theme(danger)',
  args: {
    ...SizeMedium.args,
    theme: ButtonThemeEnum.Danger
  }
};

export const ThemeInvertPrimary: Story = {
  name: 'invert-primary - соответсвует миксину @include theme(invert-primary)',
  args: {
    ...SizeMedium.args,
    theme: ButtonThemeEnum.InvertPrimary
  }
};


// Disabled
export const Disabled: Story = {
  name: 'disabled - соответсвует миксину @include disabled',
  args: {
    ...SizeMedium.args,
    theme: ButtonThemeEnum.Primary,
    disabled: true
  }
};


// Loading
export const Loading: Story = {
  name: 'loading - соответсвует миксину @include loading',
  args: {
    ...SizeMedium.args,
    theme: ButtonThemeEnum.Primary,
    loading: true
  }
};
