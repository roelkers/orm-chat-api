import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import Chat from "./Chat";
import Users from "./Users";

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @JoinColumn({ name: 'chat_id'})
    @ManyToOne(type => Chat)
    chat: Chat;

    @JoinColumn({ name: 'user_id'})
    @ManyToOne(type => Users)
    user: Users
}
 export default Message