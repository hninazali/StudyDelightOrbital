import React, {Component} from "react";
import firebase from "./fbConfig";

function databaseConnect() {
    const [tasks, setTasks] = React.useState([]);
    const [newTaskName, setNewTaskName] = React.useState();

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("users").get("tasks");
            setTasks(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        };
        fetchData();
    }, []);

    const onCreate = () => {
        const db = firebase.firestore();
        db.collection("users").get("tasks").add({name: newTaskName});
    };
}
