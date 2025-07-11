"use client";

import { Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { BeatLoader } from "react-spinners";

interface ResendSmsProps {
  id: number | null;
}

export function ResendSms({ id }: ResendSmsProps) {
  const toast = useToast();
  const [Loading, setLoading] = useState(false);

  const handleResendSms = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    const request = await fetch(`/api/ResendSms/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    if (request.ok) {
      toast({
        title: "Sucesso",
        description: data.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
    }
    if (!request.ok) {
      toast({
        title: "Erro",
        description: "Erro ao reenviar SMS",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
    }
  };
  return (
    <>
      <Button
        size={"sm"}
        colorScheme="green"
        textColor={"white"}
        onClick={handleResendSms}
        isLoading={Loading}
        spinner={<BeatLoader size={8} color="white" />}
      >
        Enviar Mensagem
      </Button>
    </>
  );
}
