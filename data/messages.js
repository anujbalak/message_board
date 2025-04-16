export const messages = [
    {
        id: 1,
        text: 'Hi there!',
        user: 'Balak',
        added: new Date("2023-08-12T16:45:30")
    },
    {
        id: 2,
        text: 'Namaskar',
        user: "Charles",
        added: new Date("2024-01-16T20:50:10"),
    },
    {
        id: 3,
        text: 'What the hell in this world',
        user: 'Danush',
        added: new Date("2024-02-18T16:45:30"),
    },
    {
        id: 4,
        text: 'Thats very nice message',
        user: 'Dev',
        added: new Date("2024-04-10T20:40:30")
    },
    {
        id: 5,
        text: 'Well that is very nice',
        user: 'Nortje',
        added: new Date("2024-07-17T12:05:00")
    },
    {
        id: 6,
        text: 'Can you tell me?',
        user: 'Sam',
        added: new Date("2024-08-10T23:05:30")
    }
]

export const getMessageById = (messageId) => {
    return messages.find(message => message.id === messageId)
}