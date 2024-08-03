import React from 'react'

import ReactDOM from 'react-dom/client'

import {
  Body1,
  Body2,
  Button,
  Caption,
  H1,
  H2,
  H3,
  H4,
  Link1,
  Link2,
  Overline,
  Subtitle1,
  Subtitle2,
} from './src'

// import { Button } from './src/components/ui/button/Button'

const App = () => {
  return (
    <>
      <Button as={'button'} className={'button'} fullWidth={false} variant={'primary'}>
        knbka
      </Button>
      <H1 className={'lala'}>h1</H1>
      <H2 className={'lala'}>h2</H2>
      <H3 className={'lala'}>h3</H3>
      <H4 className={'lala'}>h4</H4>
      <Body1 className={'lala'}>Body1</Body1>
      <Body2 className={'lala'}>Body2</Body2>
      <Subtitle1 className={'lala'}>Subtitle1</Subtitle1>
      <Subtitle2 className={'lala'}>Subtitle2</Subtitle2>
      <Caption className={'lala'}>Caption</Caption>
      <Overline className={'lala'}>Overline</Overline>
      <Link1 className={'lala'}>Link1</Link1>
      <Link2 className={'lala'}>Link2</Link2>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
