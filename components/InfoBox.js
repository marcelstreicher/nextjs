import React from 'react'
import { Box, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const InfoBox = (props) => {
    return (
        <Box {...props}>
                <Text mr="3">BALNEÁRIO CAMBORIÚ/SC</Text>
                <Tooltip label="Instagram @marcel.streicher" aria-label="Instagram @marcel.streicher" placement="auto-start">
                    <IconButton
                    as="a"
                    href="https://instagram.com/marcel.streicher"
                    mt="3"
                    variant="link"
                    colorScheme="white"
                    aria-label="Instagram icon"
                    fontSize="24px"
                    mr="1"
                    icon={<FaInstagram />}
                    />
                </Tooltip>
                <Tooltip label="Facebook: marcelstreicher" aria-label="Facebook marcelstreicher" placement="auto-start">
                    <IconButton
                    as="a"
                    href="https://facebook.com/marcelstreicher"
                    mt="3"
                    variant="link"
                    colorScheme="white"
                    aria-label="Facebook icon"
                    fontSize="24px"
                    mr="1"
                    icon={<FaFacebook/>}
                    />
                </Tooltip>
                <Tooltip label="Chamar no whatsapp" aria-label="Chamar no whatsapp" placement="auto-start">
                    <IconButton
                    as="a"
                    href="https://wa.me/5553991254114"
                    target="_blank"
                    mt="3"
                    variant="link"
                    colorScheme="white"
                    aria-label="Whatsapp icon"
                    fontSize="24px"
                    mr="1"
                    icon={<FaWhatsapp />}
                    />
                </Tooltip>
            </Box>
    )
}
export default InfoBox;