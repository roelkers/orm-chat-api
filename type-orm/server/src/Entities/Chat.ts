
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import Users from "./Users";

@Entity()
export class Chat {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Users)
    @JoinColumn({ name: 'admin_id'})
    admin: Users

    @ManyToMany(type => Users)
    @JoinTable({ 
        name: 'user_chat',
        joinColumn: {
            name: "chat_id",
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        }
    })
    users: Users[]
}
 export default Chat