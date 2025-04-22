export const messages = [
    {
        message: 'Hi there!',
        name: 'Balak',
        added: new Date("2023-08-12T16:45:30")
    },
    {
        message: 'Namaskar',
        name: "Charles",
        added: new Date("2024-01-16T20:50:10"),
    },
    {
        message: 'What the hell in this world',
        name: 'Danush',
        added: new Date("2024-02-18T16:45:30"),
    },
    {
        message: 'Thats very nice message',
        name: 'Dev',
        added: new Date("2024-04-10T20:40:30")
    },
    {
        message: 'Well that is very nice',
        name: 'Nortje',
        added: new Date("2024-07-17T12:05:00")
    },
    {
        message: 'Can you tell me?',
        name: 'Sam',
        added: new Date("2024-08-10T23:05:30")
    }
]

export const getMessageById = (messageId) => {
    return messages.find(message => message.id === messageId)
}