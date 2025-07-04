"use client";
import Loading from "@/app/loading";
import FiltroUser from "@/components/filtroUser";
import Usuarios from "@/components/usuarios_component";
import UserProvider from "@/provider/UserProvider";
import { Box, Divider, Flex, Heading, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export interface UserProviderProps {
  dados: any;
}
export default function UsuariosPage({ dados }: UserProviderProps) {
  const [Dados, setDados] = useState([]);

  useEffect(() => {
    setDados(dados);
  }, [dados]);

  return (
    <>
      <Flex w={"100%"} px={{ base: 2, md: 5 }} py={5} flexDir={"column"}>
        <Flex w={"100%"} justifyContent={"space-between"}>
          <Heading>Usuários</Heading>
          <Link
            href={"/usuarios/cadastrar"}
            _hover={{ textDecoration: "none" }}
          >
            <Box
              py={2}
              px={7}
              border="3px solid green.600"
              borderRadius="8px"
              bg={"green.600"}
              color={"white"}
              _hover={{ bg: "green.500" }}
              boxShadow={"lg"}
              cursor={"pointer"}
            >
              Criar Usuário
            </Box>
          </Link>
        </Flex>
        <Divider w={"100%"} borderColor={"gray.400"} my={5} />
        <Box w={"100%"}>
          <UserProvider>
            <Flex w={"100%"} mb={8} justifyContent="center" alignItems="center">
              <FiltroUser />
            </Flex>
            <Box>
              {Dados.length > 0 ? (
                <Usuarios data={Dados} />
              ) : (
                <>
                  <Flex w={"100%"} justifyContent="center" alignItems="center">
                    <Loading />
                  </Flex>
                </>
              )}
            </Box>
          </UserProvider>
        </Box>
      </Flex>
    </>
  );
}
