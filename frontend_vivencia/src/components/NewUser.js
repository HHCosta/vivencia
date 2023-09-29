import { Button, TextInput } from '@mantine/core' 
import { Group } from '@mantine/core';
import { Card } from '@mantine/core';
import { Stack } from '@mantine/core';
import { Container } from '@mantine/core';
import { Text } from '@mantine/core';
import { Title } from '@mantine/core';
import { useState, useEffect } from 'react'
import  axios from 'axios'
import './App.css';



const users = [
    {
      data: {id: 'txtNome',inputType: 'text' , text: 'Nome', requiredSymbol: '*'},
      
    },
    {
      data: {id: 'txtEmail',inputType: 'email', text: 'Email', requiredSymbol: '*'},
      
    },
    {
      data: {id: 'txtTelefone',inputType: 'tel', text: 'Telefone', requiredSymbol: ''},
      
    },
    {
      data: {id: 'txtSenha',inputType: 'password', text: 'Senha', requiredSymbol: '*'},
    },
  ]
  function UserAdd({data}) {
    return (
        <Stack>
            <Text size='xs'>
                <Text display="inline">{data.text}</Text>
                <Text size='md'display="inline" c="#CC0000" style={{marginLeft: "5px"}}>{data.requiredSymbol}</Text>
            </Text>
            <TextInput id={data.id} type={data.inputType}></TextInput>
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
    
    const submitForm = () => {
      var name = document.getElementById('txtNome').value
      var email = document.getElementById('txtEmail').value
      var number = document.getElementById('txtTelefone').value
      var password = document.getElementById('txtSenha').value
      document.getElementById("btnSalvar").setAttribute("disabled","disabled")
      axios.post("http://localhost:3000/users",{
        name: name,
        email: email,
        number: number,
        password: password
      }).then((response) =>{
        if (response.status == 200)
        {
          alert(response.data.message)
          document.getElementById("txtNome").value = ""
          document.getElementById("txtEmail").value = ""
          document.getElementById("txtTelefone").value = ""
          document.getElementById("txtSenha").value = ""
        }
        else
        {
          alert("Falha ao salvar")
        }
        document.getElementById("btnSalvar").removeAttribute("disabled")
      })
    }
    return(
        
      
      <Container p='md'>
        <Button variant="transparent" href='/' component='a' size='xl'>く Voltar para lista de úsuarios</Button>
      <Group mb='md'>
        <Stack>
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
        <Button id='btnSalvar' variant='filled' onClick={submitForm} radius='xl' size='lg' color='green'>Salvar</Button>
      </Group>
      </Stack>
      </Card>
      </Container>
      
    
    )
}

export default NewUser