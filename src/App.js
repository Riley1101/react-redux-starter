import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

// any component

function Home() {
    return (
        <section>
            <h1>React Redux Starter </h1>
        </section>
    )
}