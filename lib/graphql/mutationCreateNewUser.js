export const MUTATION_CREATE_NEW_USER = `
    mutation CreateNewUser(
        $name: String!
        $username: String!
        $email: String!
    ) {
        createUser(input: { name: $name, username: $username, email: $email }) {
            name
            username
            email
        }
    }
`
