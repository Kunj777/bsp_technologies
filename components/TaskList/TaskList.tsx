import React from "react";

import { isEmpty, map } from "lodash";

import TaskItem from "../TaskItem/TaskItem";
import NillScreen from "../nillScreen/NillScreen";
import { taskStore } from "@/store";

import styles from "./taskList.module.scss";

const TaskList = () => {
  const { tasks } = taskStore();

  return (
    <div className={styles.wrapper}>
      {!isEmpty(tasks) ? (
        map(tasks, (item, id) => {
          return <TaskItem task={item} key={id} />;
        })
      ) : (
        <NillScreen title="You have not created any tasks yet." />
      )}
    </div>
  );
};

export default TaskList;
