import { Component } from 'react'
import '../style/Card.scss'
import CardHeader from './CardHeader'
import CardContent from './CardContent'
import CardFooter from './CardFooter'

class Card extends Component {
    render() {
        const { title, content, footer } = this.props;
        return (
            <div className="card">
                <CardHeader title={title} />
                <CardContent>{content}</CardContent>
                {footer && <CardFooter footer={footer} />}
            </div>
        )
    }
}

export default Card