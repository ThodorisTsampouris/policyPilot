# No code policy Configuration

## Overview

List the four services included in the project

    Authentication: The authentication service for the main Application
    mainApplication: The main application that helps to test the codeless policy configuration
    policyConfiguration: The service responsible for designing and submitting the policies for main application
    poilcyServerJS: The server responsible for applying the policies configured in the policyConfiguration service in mainApplication

## Deployment Instructions

    Prerequisites: Node js - v15.14.0, npm - v7.7.6, mongoDB
    Configuration: In every .env file of every server-client folder of each service add your environmental values

## Deployment Steps

## Authentication Service Deployment
    -Navigate to ...Authentication/client folder
    and Run "npm start" to deploy the client

    -Navigate to ...Authentication/server folder
    and Run "npm start" to deploy the server

## mainApplication Service Deployment
    -Navigate to ...mainApplication/Timesheet_frontSdk folder
    and Run "npm start" to deploy the client

    -Navigate to ...mainApplication/Timesheet_server folder
    and Run "npm start" to deploy the server

## policyConfiguration Service Deployment
    -Navigate to ...policyConfiguration/client folder
    and Run "npm start" to deploy the client

    -Navigate to ...policyConfiguration/server folder
    and Run "npm start" to deploy the server

## policyServerJs Service Deployment
    -Navigate to ...policyServerJs folder
    and Run "npm start" to deploy the server

