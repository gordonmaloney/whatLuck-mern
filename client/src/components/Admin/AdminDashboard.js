import { Card, CardHeader, CardBody } from 'reactstrap';
import React from 'react'
import { useSelector } from 'react-redux';

export default function AdminDashboard() {
    const potlucks = useSelector((state) => state.potlucks);
    let NumReplies = 0

    //count replies
    potlucks.map(
        potluck => NumReplies += potluck.replies.length
    )

    return (
        <>
        <br />
        <Card>
            <CardHeader>
            <h1>Dashboard</h1>
            </CardHeader>
            <CardBody>
            Total number of potlucks: {potlucks.length}
            <br />
            Total private potlucks: {potlucks.filter(potluck => potluck.private === true).length}
            <br />
            Total replies: {NumReplies}
            <br />
            Average replies: {Math.round(((NumReplies / potlucks.length) + Number.EPSILON) * 100) / 100}
            </CardBody>
        </Card>
        </>
    )
}
