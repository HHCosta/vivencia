import { Button, TextInput } from '@mantine/core' 
import { Group } from '@mantine/core';
import { Card } from '@mantine/core';
import { Stack } from '@mantine/core';
import { Container } from '@mantine/core';
import { Text } from '@mantine/core';
import { Title } from '@mantine/core';
import { useState, useEffect } from 'react'
import './App.css';


const users = [
    {
      data: {text: 'Nome', requiredSymbol: '*'},
      
    },
    {
      data: {text: 'Email', requiredSymbol: '*'},
      
    },
    {
      data: {text: 'Telefone', requiredSymbol: ''},
      
    },
    {
      data: {text: 'Senha', requiredSymbol: '*'},
    },
  ]
  function UserAdd({data}) {
    return (
        <Stack>
            <Text size='xs'>
                <Text display="inline">{data.text}</Text>
                <Text size='md'display="inline" c="#CC0000" style={{marginLeft: "5px"}}>{data.requiredSymbol}</Text>
            </Text>
            <TextInput></TextInput>
        </Stack>
    )
  }

function NewUser() {
    const [color] = useState("#f1f3f5")
    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color])
    const getusers = users
    console.log(getusers)
    return(
        
      
      <Container p='md'>
      <Group mb='md'>
        <Stack>
        <Button variant="transparent" href='/' component='a' radius='xl' size='lg'>く Voltar para lista de úsuarios</Button>
        <Group  mb='xs'>
            <Stack>
            <Title order={1}>Novo usuário </Title>
            <Text size='xs' c='gray'>Preencha os dados para cadastrar um novo usuário</Text>
            </Stack>
        </Group>
        </Stack>
        
      </Group>
      <Card shadow="sm" padding="lg" radius="md" withBorder >
      <Stack spacing='md'> 
     
      {
        getusers.map(user => <UserAdd key={user.data} data={user.data}/>) 
      }
      
      
      <Group justify='space-between'>
        <Text> </Text>
        <Button variant='filled' href='/' component='a' radius='xl' size='lg' color='green'>Salvar</Button>

      </Group>
      </Stack>
      </Card>
      </Container>
      
    
    )
}

export default NewUser