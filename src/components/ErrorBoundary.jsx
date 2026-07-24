import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center px-6 text-center">
          <div>
            <h1 className="text-2xl font-bold text-brand">Something went wrong.</h1>
            <a href="/" className="mt-4 inline-block text-accent underline">Go back home</a>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}