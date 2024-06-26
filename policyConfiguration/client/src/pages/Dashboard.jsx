// src/pages/Login.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/dashboard.css'
import { Box, Text, Stack, Card, Link, Button, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const codeParam = urlParams.get('code')
    if (codeParam && (localStorage.getItem("access_token") === null)) {
      axios.get(`${import.meta.env.VITE_POLICY_CONFIGURATION_SERVER_URL}/getGithubAccessToken?code=${codeParam}`)
        .then((response) => {
          var access_token = response.data
          if (access_token) {
            localStorage.setItem("access_token", access_token)
            axios.get(`${import.meta.env.VITE_POLICY_CONFIGURATION_SERVER_URL}/githubUserData`, {
              headers: {
                'Authorization': localStorage.getItem("access_token")
              }
            }).then((response) => {
              axios.post(`${import.meta.env.VITE_POLICY_CONFIGURATION_SERVER_URL}/userApplications`, {
                "username": response.data.login
              })
                .then((response) => {
                  setApplications(response.data)
                })
            })

          }
        })
    } else if (!codeParam && (localStorage.getItem("access_token") === null)) {
      window.location.assign(`${import.meta.env.VITE_BASE_URL}/login`)
    } else if (localStorage.getItem("access_token") !== null) {
      axios.get(`${import.meta.env.VITE_POLICY_CONFIGURATION_SERVER_URL}/githubUserData`, {
        headers: {
          'Authorization': localStorage.getItem("access_token")
        }
      }).then((response) => {
        axios.post(`${import.meta.env.VITE_POLICY_CONFIGURATION_SERVER_URL}/userApplications`, {
          "username": response.data.login
        })
          .then((response) => {
            setApplications(response.data)
          })
      })
    }
  }, [])

  const handleProjectClick = (projectId) => {
    window.location.assign(`/${projectId}`)
  };

  const logout = () => {
    localStorage.removeItem("access_token")

    if (!localStorage.getItem("access_token")) {
      window.location.assign('/login')
    }

  }

  return (
    <>
      <Stack spacing={4} align="center" marginBottom="20px" >
        <Button onClick={logout} backgroundColor='#C2B6B6' _hover={{
          bgColor: "#FFF8DC",
        }} borderRadius="5px" fontSize="16px" fontWeight="bold">
          Logout
        </Button>
      </Stack>
      <Box backgroundColor="#F0F8FF" padding="20px" borderRadius="10px" boxShadow="0 0 10px rgba(0, 0, 0, 0.1)" display="inline-block">
        <Text color="#008080" fontSize="28px" marginBottom="10px">
          Dashboard
        </Text>
        <Text color="#2F4F4F" fontSize="18px" marginBottom="20px">
          Configure your project's policies
        </Text>
        <Stack direction="row" spacing="20px" justifyContent="center" flexWrap="wrap">
          {applications.map((application, index) => (
            <Box key={index} backgroundColor="#FFF8DC" _hover={{
              bgColor: '#C2B6B6',
            }} borderRadius="10px" margin="0 10px 20px" padding="20px" boxShadow="0 0 10px rgba(0, 0, 0, 0.1)" cursor="pointer" transition="background-color 0.3s" onClick={() => handleProjectClick(application.projectId)}>
              <Text color="#008080" fontSize="22px" marginBottom="10px">{application.projectName}</Text>
              <Text color="#2F4F4F" fontSize="16px">Project ID: {application.projectId}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Dashboard;
