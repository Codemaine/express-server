const express = require('express');
const server = express();

// Create Account Page Functions
const handleCreatePostRequest = (req, res) => {
    res.send('Create Account Method')
}

const handleCreateGetRequest = (req, res) => {
    res.setHeader('content-type', 'text/html')
    res.send('<h3>Create Account Page</h3>')
}

// Delete Account Page Functions
const handleDeleteRequest = (req, res) => {
    res.send('Delete Account Method')
}

const handleDeletePageRequest = (req, res) => {
    res.setHeader('content-type', 'text/html')
    res.send('<h3>Delete Account Page</h3>')
}

// Get Account Page Functions
const handleGetPageRequest = (req, res) => {
    res.setHeader('content-type', 'text/html')
    res.send("<h3>Get Account Page</h3>")
}

// Create Account Routes
server.post('/create-account', handleCreatePostRequest)
server.get('/create-account', handleCreateGetRequest)
// Delete Account Routes
server.delete("/delete-account", handleDeleteRequest)
server.get('/delete-account', handleDeletePageRequest)
//Get Account Routes
server.get('/get-account', handleGetPageRequest)

server.listen(3000, () => console.log("The Server is ready to recieve requests"))