import { Button } from '@mantine/core' 
import { Group } from '@mantine/core';
import { Card } from '@mantine/core';
import { Stack } from '@mantine/core';
import { Container } from '@mantine/core';
import { Text } from '@mantine/core';
import { Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import  axios from 'axios'


  function UserCard({name, email}) {
    return (
      <Card shadow="sm" padding="lg" radius="md" withBorder >
        <Group>
          <Stack spacimg={0}>
          <Text size='md'>{name}</Text>
          <Text size='sm' c="grey">{email}</Text>
          </Stack>
        </Group>
      </Card>
    )
  }

function Home() {

    const [color] = useState("#f1f3f5")
    const [users, setUsers] = useState([])
    
    const loadUsers = async () => {
      try {
        const resp = await axios.get('http://localhost:3000/users', { crossDomain: true })
          setUsers(resp.data.users)
        
      } catch(err) {
          console.error(err);
      }
  };
    useEffect(() => {
      if(users.length === 0){
        loadUsers()

      }
  }, [users])
    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color])
  
    return(
        
      
      <Container p='md'>
      <Group justify="space-between" mb='md'>
        <Stack gap='xs'>
          <Title order={1}>Usuários </Title>
          <Text Text size='xs' c='gray'>Adicione, remova e edite usuários</Text>
        </Stack>
        <Button variant="filled" href='/new' component='a' color="green" radius='xl' size='md'>Adicionar</Button>
      </Group>
      <Stack spacing='md'> 
      {
        users.map(user => <UserCard key={user.id} name={user.name} email={user.email} />) 
      }
      </Stack>
      </Container>
    
    )
}

export default Home