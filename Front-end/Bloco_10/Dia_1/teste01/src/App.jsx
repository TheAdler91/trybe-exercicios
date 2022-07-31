import './App.css';
import React, { Component } from 'react'
import Header from './components/header'
import Content from './components/Content'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}
