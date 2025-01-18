import React from "react";

import { isEmpty, map } from "lodash";

import TaskItem from "../TaskItem/TaskItem";
import NillScreen from "../nillScreen/NillScreen";
import { taskStore } from "@/zustand";

import styles from "./taskList.module.scss";

const TaskList = () => {
  const { tasks } = taskStore();

  return (
    <div>
      {!isEmpty(tasks) ? (
        <div className={styles.wrapper}>
          {map(tasks, (item, id) => {
            return <TaskItem task={item} key={id} />;
          })}
        </div>
      ) : (
        <NillScreen title="You have not created any tasks yet." />
      )}
    </div>
  );
};

export default TaskList;
