import React from 'react'
import Header from '../../components/Header/Header'
import Todo from "../../components/Todo/Todo"
import Container from '../../components/Container/Container'

export default function TodoPage() {
    return (
        <div>
            <Container>
                <Todo/>
            </Container>
        </div>
    )
}