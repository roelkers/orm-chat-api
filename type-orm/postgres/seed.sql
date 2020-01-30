TRUNCATE TABLE knex_migrations_id_seq, chat, users, chat_user, message;

INSERT INTO users(name, password, email) VALUES
        ( 'Susanna', '1234', 'susanna@web.de'),
        ( 'Mike', '1234', 'mike@web.de'),
        ( 'George', '1234', 'George@web.de');

INSERT INTO chat(name,admin_id) VALUES
        ( 'Lonely Hearts', 1 ),
        ( '8-Ball', 1 ),
        ( 'My Chat-room', 1 );

INSERT INTO chat_user(chat_id,user_id) VALUES
        (  1, 1  ),
        (  1, 2  ),
        (  1, 3  ),
        (  2, 2  ),
        (  3, 3  ),
        (  2, 3  ),
        (  3, 2  );

INSERT INTO message(text,chat_id,user_id) VALUES
        (  'Hi',  1, 2 ),
        (  'Whatsup?',  1, 1),
        (  'Brb',  3, 3),
        (  'Hey!!',  2, 2),
        (  'Not much', 1, 1);
