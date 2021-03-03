import React, { useEffect, useState } from "react";
import firebase from "./utils/firebase";
import "firebase/firestore";
import { map } from "lodash";
import { Container, Row, Col } from "react-bootstrap";
import AddTask from "./components/AddTask";
import Task from './components/Task';

import "./App.scss";

const db = firebase.firestore(firebase);

export default function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        db.collection("tasks")
            .orderBy("completed")
            .get()
            .then((response) => {
                const arrayTasks = [];
                // console.log(response);
                map(response.docs, (task) => {                    
                    const data = task.data();
                    data.id = task.id;                    

                    arrayTasks.push(data);
                });
                setTasks(arrayTasks);
            });
    }, []);

    return (
        <Container fluid className="app">
            <div className="title">
                <h1>Diego Perez</h1>
            </div>

            <Row className="todo">
                <Col className="todo__title" xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
                    <h2>Today</h2>
                </Col>
                <Col className="todo__list" xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
                    {map(tasks, (task, index) => (
                        <Task key={index} task={task} />
                    ))}
                </Col>
                <Col className="todo__input" xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
                    <AddTask placeholder="nueva tarea" />
                </Col>
            </Row>
        </Container>
    );
}
