interface Penguin {
    id: number
    name: string
    address: Address
    company: Company
}

interface Address {
    street: string
    suite: string
    city: string
}

interface Company {
    name: string
}

export type {
    Penguin
}