import {Component, ErrorInfo, ReactNode} from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}
export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
        console.log(error)
        return { hasError: true };
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo){
        console.error('Error details:', error, errorInfo);
    }
    render() {
        if (this.state.hasError){
            return <h1>Oops. Something went wrong!</h1>;
        }
        return this.props.children;
    }
}

