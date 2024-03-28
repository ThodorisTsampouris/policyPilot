# PolicyPilot (No Code policies)

## Overview

List of the four services included in the project

    Authentication: The authentication service for the main Application
    mainApplication: The main application that helps to test the codeless policy configuration project
    policyConfiguration: The service responsible for designing and submitting the policies for main application
    poilcyServerJS: The server responsible for applying the policies configured in the policyConfiguration service in mainApplication

## Deployment Instructions
    - Clone the repo
    - In /.env file replace the host with the actual host ip of the machine that the project will be deployed
    - Open a cmd and navigate to the folder in which the repo was cloned
    - Run the command "docker-compose up -d"

