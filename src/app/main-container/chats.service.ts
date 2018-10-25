export class ChatsService {
    chats: {
        sender: string,
        message: string
    } [] = [
        {
            sender: 'assistant',
            message: 'How May I Help You?'
        }
    ];
    
    addChat ( sender: string, message: string) {
        this.chats.push({
            sender: sender,
            message: message
        });
    }
}