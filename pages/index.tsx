import { Box, Button, Center, Flex, Heading, Link, Text, IconButton, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverArrow, 
    PopoverCloseButton, PopoverBody, Divider, Radio, Stack, Input, Alert, AlertIcon, Image, Menu, MenuButton, Breadcrumb, BreadcrumbItem, BreadcrumbLink, MenuList, MenuItem, LinkBox, LinkOverlay} from "@chakra-ui/react";
    
import { ChevronRightIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import * as React from "react"
import Head from "next/head"

import validators from '../helpers/validators'

const axios = require('axios');

export default function Home() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [errors,setErrors] = useState([])
    const [success,setSuccess] = useState([])
    const [autoValidation,setAutoValidation] = useState(false)  

    function validate():Boolean {
        let err = []
        if(!validators.minLength(name,3)) { err.push("O nome precisa ter pelo menos 3 caracteres.") }
        if(!validators.IsEmail(email)) { err.push("Digite um e-mail válido.") }
        if (err.length) {
            setErrors(err);
            if (!autoValidation) { setAutoValidation(true) }
            return false
        }
        setErrors([])
        return true
    }

    function handleSubmit () {
        setSuccess([])
        if (!validate()) return
        var m = JSON.stringify({
            query: `
            mutation {
                addNewsletter(
                  name: "${name}"
                  email: "${email}"
                ) {
                  name
                  email
                }
              }              
            `
        }) 
                                    
        axios.post('/api/graphql',m)
        .then(function (response) {
            if (response.data.errors) {
                setErrors(["Desculpe-nos! Ocorreu um erro interno. Por favor, tente novamente ou utilize outras formas de contato."]);
            }
            else {
                if (response.data.data.addNewsletter) {
                    setName("")
                    setEmail("") 
                    setSuccess(["Feito! Você já está cadastrado para concorrer as nossas promoções!"])
                }
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

  return (
  <>
        <Head>
            <title>BORA PRA BC</title>
        </Head>
        <Box 
            w="100%"
            minHeight="100vh"
            bgGradient="linear(gray.100 10%,gray.100 10%, white 90%)"
            pb="20"
            >
            <Flex bg="blue.900" h="2" bgGradient="linear(to-l, #7928CA, #FF0080)"></Flex>
            <Center 
            width="100%" >
                <Flex maxWidth="5xl" width="5xl" flexDirection="column" >
                <Box p={4} display={{ md: "flex" }}>
                    <Box flexShrink={0}>
                        <Image
                        width={{ md: 240 }}
                        src="/boraprabc.svg"
                        alt="BORA PRA BC"
                        />
                    </Box>           
                </Box>
                   
                </Flex>
            </Center>
             
            <Flex justifyContent="center" p="2">
                <Center w={{xl:"1024px",lg:"1024px",md: "100%", sm: "100%",base: "100%" }} p="4" m="2" borderRadius="10px" border="1px" borderColor="gray.200">
                    <Box>
                       <LinkBox as="article" maxW="sm" p="5" m="2" borderWidth="1px" rounded="md">
                            <Heading size="md" my="2">
                                <LinkOverlay href="https://www.youtube.com/channel/UC4hv5oGOGyzTGoUZlWvJDPw">
                                Canal do Youtube →
                                </LinkOverlay>
                            </Heading>
                        </LinkBox>
                        <LinkBox as="article" maxW="sm" m="2" p="5" borderWidth="1px" rounded="md">
                            <Heading size="md" my="2">
                                <LinkOverlay href="https://instagram.com/boraprabc">
                                Instagram →
                                </LinkOverlay>
                            </Heading>
                        </LinkBox>
                        
                        <Flex w="100%"  wrap="wrap" >
                            <Flex flex="1" pt="4" flexWrap="wrap">
                                <Text fontSize="18px" fontWeight="bold" m="2">Concorra a prêmios! Cadastre-se!</Text>
                                <Input placeholder="Nome" value={name} onChange={(e)=>setName(e.target.value)} onKeyUp={()=>{if (autoValidation) {validate()}}} m="2"/>
                                <Input placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} onKeyUp={()=>{if (autoValidation) {validate()}}} m="2"/>
                                <Box m="2" w="100%">
                                    {errors.map((error,i) => { return (
                                        <Alert key={i} status="error">
                                                <AlertIcon />
                                                {error}
                                            </Alert>
                                        )
                                    })}
                                    {success.map((msg,i) => { return (
                                        <Alert key={i} status="success">
                                                <AlertIcon />
                                                {msg}
                                            </Alert>
                                        )
                                    })}
                                </Box>
                                <Button colorScheme="blue" m="2" fontSize="14px" fontWeight="400" onClick={handleSubmit}>Enviar</Button> 
                            </Flex>
                        </Flex>
                    </Box>
                </Center>
            </Flex>

        </Box>
        
    </>
  )
}