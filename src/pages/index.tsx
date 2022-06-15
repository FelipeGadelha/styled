import type { NextPage } from 'next'
import Stack from '../components/layout/Stack'
import TextField from '../components/forms/TextField'
import { Heading } from '../components/fundation/Heading'
// import Flex from '../components/layout/Flex'

const Home: NextPage = () => {
  return (
    <Stack as="form">
      <Heading>Hello World</Heading>
      <TextField name="nome" label="nome" type="text"/>
      <TextField name="idade" label="idade" type="text"/>
      <TextField name="cpf" label="cpf" type="text"/>
      <TextField name="descrição" label="descrição" type="text"/>
    </Stack>
  )
}

export default Home
