import React from 'react'
import { Pin } from "./Pin"
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    paragraph: {
        textAlign: "justify",
    },
});
class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const cardInfo = this.props.props
        return (
            <div className='grid grid-cols-12'>
                <div className='col-span-8'>
                    <h2>{cardInfo.title}</h2>
                    <Text style={styles.paragraph} numberOfLines={5} className="card-text"> {cardInfo.text}</Text>
                </div>
                <div className='col-span-4'>
                    <div className='flex flex-col items-end'>
                        <Pin props={cardInfo.isPinned} />
                        <p>{cardInfo.isPinned}</p>
                        <p>{cardInfo.date}</p>
                        <p>{cardInfo.time}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export { Card }