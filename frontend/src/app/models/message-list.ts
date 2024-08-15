import { Message } from "./message.model";

export const MessagesList: Message[] = [
    {
        content: 'Hello! How are you?, Let\'s make good times together and also do something else',
        sender: 'Alice',
        timestamp: new Date('2024-08-01T10:00:00'),
        type: 'text'
      },
      {
        content: 'I\'m good, thanks! What about you?',
        sender: 'Bob',
        timestamp: new Date('2024-08-01T10:02:00'),
        type: 'text'
      },
      {
        content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt',
        sender: 'Alice',
        timestamp: new Date('2024-08-01T10:05:00'),
        type: 'image'
      },
      {
        content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGhkJD49TaxpDnqb9aBhtW3XUV0N8q3u2U9A&usqp=CAU',
        sender: 'Alice',
        timestamp: new Date('2024-08-01T10:05:10'),
        type: 'image'
      },
      {
        content: 'That\'s awesome!',
        sender: 'Bob',
        timestamp: new Date('2024-08-01T10:06:00'),
        type: 'text'
      },
      {
        content: 'https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1',
        sender: 'Bob',
        timestamp: new Date('2024-08-01T10:08:00'),
        type: 'gif'
      },
      {
        content: 'https://www.socialpilot.co/wp-content/uploads/2023/02/gif.gif',
        sender: 'Bob',
        timestamp: new Date('2024-08-01T10:08:10'),
        type: 'gif'
      }
]