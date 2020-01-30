import express from 'express'
import { getConnection, getManager } from 'typeorm'
import Users from './Entities/Users'
import Message from './Entities/Message'
import Chat from './Entities/Chat'

const router = express.Router()

router.get('/hi' , (req,res) => {
 res.send("hi")
})

router.post('/user', async (req,res) => {
    const { name, email } = req.body
     await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Users)    
    .values([
        {name , email}
    ])
    .execute()

    res.sendStatus(200)
})

router.post('/chat', async (req,res) => {
    const { name,admin } = req.body

    const chatRepository = await getManager().getRepository(Chat)
    const userRepository = await getManager().getRepository(Users)
    const user = await userRepository.findOne(admin)
    if(!user) return res.status(404).send("admin not found")
    const chat = new Chat()
    chat.name = name;
    chat.admin = admin.id 
    await chatRepository.save(chat)

    res.sendStatus(200)
})

router.post('/message', async (req,res) => {
    const { text, user, chat } = req.body

    const messageRepository = await getManager().getRepository(Message)
    const userRepository = await getManager().getRepository(Users)
    const userEntity = await userRepository.findOne(user)

    if(!userEntity) return res.status(404).send("admin not found")

    const message = messageRepository.create({
    text,
    chat,
    })
    message.user = userEntity
    await messageRepository.save(message)

    res.status(200).send(message)
})

export default router