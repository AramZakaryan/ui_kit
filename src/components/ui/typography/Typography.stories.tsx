// src/stories/Typography.stories.tsx

import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import * as Typography from './Typography' // Adjust the import path if necessary

export default {
  component: Typography.Typography,
  title: 'Components/Typography',
} as Meta

const Template: StoryObj = () => (
  <div>
    <Typography.H1>Heading 1</Typography.H1>
    <Typography.H2>Heading 2</Typography.H2>
    <Typography.H3>Heading 3</Typography.H3>
    <Typography.H4>Heading 4</Typography.H4>
    <Typography.Subtitle1>Subtitle 1</Typography.Subtitle1>
    <Typography.Subtitle2>Subtitle 2</Typography.Subtitle2>
    <Typography.Body1>Body 1</Typography.Body1>
    <Typography.Body2>Body 2</Typography.Body2>
    <Typography.Overline>Overline</Typography.Overline>
    <Typography.Caption>Caption</Typography.Caption>
    <Typography.Link1 href={'#'}>Link 1</Typography.Link1>
    <Typography.Link2 href={'#'}>Link 2</Typography.Link2>
  </div>
)

export const Default = Template.bind({})
