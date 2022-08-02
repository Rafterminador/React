import React from 'react'
import { Pin } from "./Pin"
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    paragraph: {
        textAlign: "justify",
    },
    completed: {
        textDecorationLine: "line-through",
    }
});
const isCompleted = (status) => {
    if (status === true) {
        return styles.completed
    } else {
        return ""
    }
}
class Card extends React.Component {
    render() {
        const cardInfo = this.props.props
        let status = isCompleted(cardInfo.completed)
        return (
            <div className={`${status === styles.completed ? "card-completed" : ""} grid grid-cols-12 card`}>
                <div className='col-span-8'>
                    <h2>{cardInfo.title}</h2>
                    <Text style={[styles.paragraph, status]} numberOfLines={5}>
                        {cardInfo.text}
                    </Text>
                </div>
                <div className='col-span-4'>
                    <div className='flex flex-col items-end'>
                        <Pin props={cardInfo.isPinned} id={cardInfo.id} />
                        <p>{cardInfo.isPinned}</p>
                        <p>{cardInfo.date}</p>
                        <p>{cardInfo.time}</p>
                    </div>
                </div>
            </div >
        )
    }
}

export { Card }