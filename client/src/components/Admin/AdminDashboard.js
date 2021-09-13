import { Card, CardHeader, CardBody } from 'reactstrap';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
    const potlucks = useSelector((state) => state.potlucks);
    let NumReplies = 0

    //count replies
    potlucks.map(
        potluck => NumReplies += potluck.replies.length
    )

    const mostPopular = potlucks.filter(potluck => 
        potluck.replies.length === (Math.max(...potlucks.map(potluck => (potluck.replies.length))))
    )

    console.log(mostPopular)

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
            <br />
            Most popular {mostPopular.length > 1 ? "potlucks" : "potluck"}:
            
            
            {mostPopular.map((potluck, index) => 
            { return <>
                {" "}
                <Link to={`potlucks/${potluck.idCode}`}>{potluck.potluckTitle}</Link>
                {index < mostPopular.length - 2 ? ", " : ""}
                {index === mostPopular.length - 2 ? " and " : ""}
                </>
                } 
            )}   
            
            </CardBody>
        </Card>
        </>
    )
}
