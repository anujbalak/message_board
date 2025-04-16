export const messages = [
    {
        id: 1,
        text: 'Hi there!',
        user: 'Balak',
        added: new Date()
    },
    {
        id: 2,
        text: 'Namskar',
        user: "Charles",
        added: new Date(),
    },
    {
        id: 3,
        text: 'What the hell in this world',
        user: 'Danush',
        added: new Date(),
    }
]

export const getMessageById = (messageId) => {
    return messages.find(message => message.id === messageId)
}