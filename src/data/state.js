let state = {
    profile_page: {
        posts_data: [
            { name: "Roger", text: "hello world", like: 1, id: 1 },
            { name: "Roger", text: "hate world", like: 3, id: 2 },
            { name: "Roger", text: "hell world", like: 4, id: 3 },
        ],
        profile_name: "roger"
    },
    dialog_page: {
        dialog_data: [
            { name: "bill", id: 1 },
            { name: "bob", id: 2 },
            { name: "alone", id: 3 },
        ],
        message_data: [
            { message: "привет,как оно? ", id: 1 },
            { message: "здравствуй", id: 2 },
            { message: "все хорошо ", id: 3 }
        ]
    }
}
export default state