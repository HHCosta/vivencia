import { Button } from '@mantine/core' 
import { Group } from '@mantine/core';
import { Card } from '@mantine/core';
import { Stack } from '@mantine/core';
import { Container } from '@mantine/core';
import { Text } from '@mantine/core';
import { Title } from '@mantine/core';
import { useEffect, useState } from 'react';

const users = [
    {
      name: 'John',
      phone: '555-555-5555',
    },
    {
      name: 'Jane',
      phone: '555-555-5555',
    },
    {
      name: 'Jack',
      phone: '555-555-5555',
    },
    {
      name: 'Jill',
      phone: '555-555-5555',
    },
    {
      name: 'Jones',
      phone: '555-555-5555'
    },
  ]
  function UserCard({name, phone}) {
    return (
      <Card shadow="sm" padding="lg" radius="md" withBorder >
        <Group>
          <Stack spacimg={0}>
          <Text size='sm' color='grey'>Nome</Text>
          <Text size='md'>{name}</Text>
          </Stack>
          <Stack spacimg={0}>
          <Text size='sm' color='grey'>Número de telefone</Text>
          <Text size='md'>{phone}</Text>
          </Stack>
        </Group>
      </Card>
    )
  }

function Home() {
    const [color] = useState("#f1f3f5")
    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color])
    const getusers = users
    console.log(getusers)
    return(
        
      
      <Container p='md'>
      <Group justify="space-between" mb='md'>
        <Title order={1}>Lista de usuarios </Title>
        <Button variant="filled" href='/new' component='a' color="green" radius='xl' size='sm'>Adicionar</Button>
      </Group>
      <Stack spacing='md'> 
      {
        getusers.map(user => <UserCard key={user.name} name={user.name} phone={user.phone} />) 
      }
      </Stack>
      </Container>
    
    )
}

export default Home