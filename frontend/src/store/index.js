import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [],
        notes: [],
    },

    mutations: {
        setTodos: function(state, todos) {
            state.todos = todos;
        },

        newTodo: function(state, todo) {
            state.todos.push(todo);
        },

        removeTodo: function(state, id) {
            for (let i = 0; i < state.todos.length; i++) {
                if (state.todos[i].id === id) {
                    state.todos.splice(i, 1);
                    break;
                }
            }
        },

        updateTodo: function(state, payload) {
            for (let i = 0; i < state.todos.length; i++) {
                if (state.todos[i].id === parseInt(payload.id)) {
                    state.todos[i].content = payload.todo.content;
                    state.todos[i].category = payload.todo.category;
                    break;
                }
            }
        },

        setNotes: function(state, notes) {
            state.notes = notes;
        },

        newNote: function(state, note) {
            state.notes.push(note);
        },

        removeNote: function(state, id) {
            for (let i = 0; i < state.notes.length; i++) {
                if (state.notes[i].id === id) {
                    state.notes.splice(i, 1);
                    break;
                }
            }
        },

        updateNote: function(state, payload) {
            for (let i = 0; i < state.notes.length; i++) {
                if (state.notes[i].id === parseInt(payload.id)) {
                    state.notes[i].content = payload.note.content;
                    state.notes[i].category = payload.note.category;
                    state.notes[i].title = payload.note.title;
                    break;
                }
            }
        },
    },

    actions: {
        getTodos: function({ commit }) {
            fetch("http://localhost:8000/api/todos", { method: "get" })
                .then((response) => {
                    if (!response.ok) throw response;

                    return response.json();
                })
                .then((jsonData) => {
                    commit("setTodos", jsonData);
                })
                .catch((error) => {
                    if (typeof error.text === "function")
                        error.text().then((errorMessage) => {
                            console.log(errorMessage);
                        });
                    else console.log(error);
                });
        },

        deleteTodo: function({ commit }, id) {
            fetch(`http://localhost:8000/api/todo/${id}`, {
                method: "delete",
            })
                .then((response) => {
                    if (!response.ok) throw response;

                    return response.json();
                })
                .then((jsonData) => {
                    commit("removeTodo", jsonData.id);
                })
                .catch((error) => {
                    if (typeof error.text === "function")
                        error.text().then((errorMessage) => {
                            console.log(errorMessage);
                        });
                    else console.log(error);
                });
        },

        addTodo: function({ commit }, todo) {
            fetch("http://localhost:8000/api/todos", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    category: todo.category,
                    content: todo.content,
                }),
            })
                .then((response) => {
                    if (!response.ok) throw response;

                    return response.json();
                })
                .then((jsonData) => {
                    commit("newTodo", jsonData);
                })
                .catch((error) => {
                    if (typeof error.text === "function")
                        error.text().then((errorMessage) => {
                            console.log(errorMessage);
                        });
                    else console.log(error);
                });
        },

        changeTodo: function({ commit }, payload) {
            fetch(`http://localhost:8000/api/todo/${payload.id}`, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload.todo),
            })
                .then((response) => {
                    if (!response.ok) throw response;

                    return response.json();
                })
                .then((jsonData) => {
                    commit("updateTodo", { id: payload.id, todo: jsonData });
                })
                .catch((error) => {
                    if (typeof error.text === "function")
                        error.text().then((errorMessage) => {
                            console.log(errorMessage);
                        });
                    else console.log(error);
                });
        },

        getNotes: function({ commit }) {
            fetch("http://localhost:8000/api/notes", { method: "get" })
                .then((response) => {
                    if (!response.ok) throw response;

                    return response.json();
                })
                .then((jsonData) => {
                    commit("setNotes", jsonData);
                })
                .catch((error) => {
                    if (typeof error.text === "function")
                        error.text().then((errorMessage) => {
                            console.log(errorMessage);
                        });
                    else console.log(error);
                });
        },

        deleteNote: function({ commit }, id) {
            fetch(`http://localhost:8000/api/note/${id}`, { method: "delete" })
                .then((response) => {
                    if (!response.ok) throw response;

                    return response.json();
                })
                .then((jsonData) => {
                    commit("removeNote", jsonData.id);
                })
                .catch((error) => {
                    if (typeof error.text === "function")
                        error.text().then((errorMessage) => {
                            console.log(errorMessage);
                        });
                    else console.log(error);
                });
        },

        addNote: function({ commit }, note) {
            fetch("http://localhost:8000/api/notes", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: note.title,
                    category: note.category,
                    content: note.content,
                }),
            })
                .then((response) => {
                    if (!response.ok) throw response;

                    return response.json();
                })
                .then((jsonData) => {
                    commit("newNote", jsonData);
                })
                .catch((error) => {
                    if (typeof error.text === "function")
                        error.text().then((errorMessage) => {
                            console.log(errorMessage);
                        });
                    else console.log(error);
                });
        },

        changeNote: function({ commit }, payload) {
            fetch(`http://localhost:8000/api/note/${payload.id}`, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload.note),
            })
                .then((response) => {
                    if (!response.ok) throw response;

                    return response.json();
                })
                .then((jsonData) => {
                    commit("updateNote", { id: payload.id, note: jsonData });
                })
                .catch((error) => {
                    if (typeof error.text === "function")
                        error.text().then((errorMessage) => {
                            console.log(errorMessage);
                        });
                    else console.log(error);
                });
        },
    },
});
