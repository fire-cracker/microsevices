# Simple Stateless MicroService

[![Build Status](https://travis-ci.org/oyedejipeace/microsevices.svg?branch=master)](https://travis-ci.org/oyedejipeace/microsevices) [![Coverage Status](https://coveralls.io/repos/github/oyedejipeace/microsevices/badge.svg?branch=master)](https://coveralls.io/github/oyedejipeace/microsevices?branch=master)


## Table of Contents

* [Project Overview](#Project-Overview)
* [Features](#Features)
* [Built with](#built-with)
* [API Documentation](#API-Documentation)
* [API End Points](#API-End-Points)
* [Known Issues](#Known-issues)
* [Installation](#Installation)
* [Test](#Test)
* [Contributing](#contributing)
* [License](#License)

## Project Overview
**MicroServices** is the backend of build a Simple Stateless microservice in Nodejs, with three major functionalities - Authentication, JSON patching and Image Thumbnail Generation.it was built from scratch using `JavaScript` and `Node.js`

## Features

- User login,
- JSON patching
- Image Thumbnail Generation

## Built with
- `JavaScript`
- `Node.js`
- `Express framework`


## API Documentation
POSTMAN API documentation  [here](https://documenter.getpostman.com/view/5148818/SVYnSgmi)

## API End Points
<table>
	<tr>
		<th>HTTPS</th>
		<th>ENDPOINT</th>
		<th>DESCRIPTION</th>
	</tr>
	<tr>
		<td>POST</td>
		<td>/users/login</td> 
		<td>Login User</td>
	</tr>
	<tr>
		<td>POST</td>
		<td>/jsonpatch</td> 
		<td>Apply the json patch to a json object</td>
	</tr>
	<tr>
		<td>POST</td>
		<td>/thumbnail</td> 
		<td>Generate Thumbnail</td>
	</tr>
</table>  

 
 ## Known issues
Everything works as expected; However:
- This project is just a backend app, i.e. no frontend implementation.


## Installation
- $ git clone `https://github.com/oyedejipeace/microservices.git`
- $ cd microservices
- $ npm i , to install dependencies
- Create .env file using the .env.sample file as a guide
- $ npm start:dev, to start the server
Once the server starts-up, you can query the api at `http://localhost:5000/` using the end points stated above.

## Test
- $ npm test

## Contributing
>  Feel free to 🍴 fork this repository

>  👯 Clone this repository to your local machine using `https://github.com/oyedejipeace/microservices.git`

> Make Contributions

> 🔃 Create a new pull request using `https://github.com/oyedejipeace/microservices/compare`

## License
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

- **[MIT license](https://oyedejipeace.github.io/microservices/LICENSE.md)**
- Copyright 2018 © <a href="https://github.com/oyedejipeace/microservices" target="_blank">Microservices</a>

