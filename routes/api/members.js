const express = require('express')
const router = express.Router()
const uuid = require('uuid')
const members = require('../../Members')

// This route gets all members from API call
router.get('/', (req, res) => res.json(members))

// Get single member
// API format for request is :id for member id
router.get('/:id', (req, res) => {
    //Const found is the same as the statement to get the member from the array of members but this is used as a check
    const found = members.some(member => member.id === parseInt(req.params.id))
    // The mentioned check, If it exists, send it. If it does not exist, send back status 400 and an error message in json
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({msg: `No member with id of ${req.params.id}`})
    }

})

// Create Member
router.post('/', (req, res) => {
    //res.send(req.body)
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    // Checks to see if the person is inputting a name and email, if not returns bad status
    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg: 'Please include a name and email'})
    }
    members.push(newMember)
    res.redirect('/')
    //res.json(members)
})

// Update Member
router.put('/:id', (req, res) => {
    //Const found is the same as the statement to get the member from the array of members but this is used as a check
    const found = members.some(member => member.id === parseInt(req.params.id))
    // The mentioned check, If it exists, send it. If it does not exist, send back status 400 and an error message in json
    if(found){
        const updateMember = req.body
        // Updates the fields according to input
        //loop through members
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                // Ternary operator, returns updateMember.email and updateMember.name (first) if true and returns the second field if false
                member.name = updateMember.name ? updateMember.name : member.name
                member.email = updateMember.email ? updateMember.email : member.email

                res.json({ msg: `Member was updated`, member})
            }
        })
    } else {
        res.status(400).json({msg: `No member with id of ${req.params.id}`})
    }

})


// Delete Members
// Get single member
// API format for request is :id for member id
router.delete('/:id', (req, res) => {
    //Const found is the same as the statement to get the member from the array of members but this is used as a check
    const found = members.some(member => member.id === parseInt(req.params.id))
    // The mentioned check, If it exists, send it. If it does not exist, send back status 400 and an error message in json
    if(found){
        res.json({ msg: 'Member deleted', members: members.filter(member => member.id !== parseInt(req.params.id))})
    } else {
        res.status(400).json({msg: `No member with id of ${req.params.id}`})
    }

})


module.exports = router