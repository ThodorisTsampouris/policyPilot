// src/pages/Login.jsx
import React, { useState, useEffect } from 'react';
import GithubIcon from 'mdi-react/GithubIcon';
import '../css/login.css'
const CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID
import { Box, Button, Text } from "@chakra-ui/react";

const Login = () => {


  const githubLogin = () => {
    window.location.assign(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`)
  };

  return (
    <Box textAlign="center" marginTop="50px">
      <Text fontSize="36px" fontWeight="bold" fontFamily="Arial, sans-serif" color="#1A2B32" marginBottom="20px">
        Login to PolicyPilot
      </Text>
      <Button
        type="button"
        onClick={githubLogin}
        borderRadius="15px"
        padding="15px 30px"
        backgroundColor='#C2B6B6'
        _hover={{
          bgColor: "#FFF8DC",
        }}
      >
        <GithubIcon className="github-login-button" />
        <Text marginLeft="10px" fontSize="18px" fontWeight="bold" fontFamily="Arial, sans-serif" color="#2E4464">
          Login with Github
        </Text>
      </Button>
    </Box>
  );
};

export default Login;
