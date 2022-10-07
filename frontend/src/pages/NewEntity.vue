<template>
    <div>
        <h1 style="margin-bottom: 10px">Dodavanje obaveza i beleski</h1>
        <NewTodo />
        <hr />
        <NewNote />
    </div>
</template>

<script>
import NewTodo from "../components/NewTodo";
import NewNote from "../components/NewNote";

export default {
    name: "NewEntity",
    components: {
        NewTodo,
        NewNote,
    },
};
</script>

<style lang="scss" scoped></style>
