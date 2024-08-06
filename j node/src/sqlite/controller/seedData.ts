import { db } from "../config/db.config";
import { ICard } from "../../model/node-task.module";
import { insertQuery } from "./queries";
 
export const seedTasksTable = async () => {
    const tasksList = [
        {
            task: 'create task 1',
            priority: 'high',
            category: '2 min',
            createdDate: '2024-08-04'
        },
        {
            task: 'create task 2',
            priority: 'low',
            category: 'timed',
            createdDate: '2024-08-01'
        }
    ];

    const insertQuery = `INSERT INTO tasks (task, priority, category, createdDate) VALUES (?, ?, ?, ?)`;

    tasksList.forEach(task => {
        db.run(insertQuery, [task.task, task.priority, task.category, task.createdDate], function (err) {
            if (err) {
                console.log('seedTasksTable fun:- ', err.message);
            } else {
                console.log('data inserted');
            }
        });
    });
};

export const seedCardTable = async (tableName: string, columnNames: string, valuesLength: string) => {
    const cardList: ICard[] = [
        {
            headerText: '2 min',
            priority: 'high',
            title: 'fast work',
            category: ['2 mins', 'timed'],
            description: 'short work!'
        },
        {
            headerText: 'timed 2 min',
            priority: 'medium',
            title: 'Timing',
            category: ['timed'],
            description: 'short work can be done in 2 min!'
        }
    ];

    const query = insertQuery(tableName, columnNames, valuesLength);

    cardList.forEach((card: any) => {

        for(let key in card) {
            if(card[key] === '[object Object]') {
                card.key = JSON.stringify(card[key]);
            }
        }

        // const headerText = card.headerText;
        // const priority = card.priority;
        // const title = card.title;
        // const category = JSON.stringify(card.category); // Serialize the array to a string
        // const description = card.description;  

        db.run(query, [card.headerText, card.priority, card.title, card.category, card.description], function (err) {
        // db.run(query, [headerText, priority, title, category, description], function (err) {
            if (err) {
                console.log('seedCardTable fun:- ', err.message);
            } else {
                console.log('data inserted');
            }
        });
    });

};