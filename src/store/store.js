import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todos: [
            {
              id: 1,
              title: "Add a new todo",
              completed: false,
              editing: false,
            },
            {
              id: 2,
              title: "Edit a todo by double clicking on it",
              completed: false,
              editing: false,
            },
            {
              id: 3,
              title: "Remove a todo by clicking the trash icon",
              completed: false,
              editing: false,
            },
            {
              id: 4,
              title: "Remove all todos by selecting all",
              completed: false,
              editing: false,
            },
          ],
    }
})