<template>
    <div>
        <h1 style="margin-bottom: 10px">Pregled obaveza i beleski</h1>
        <Todos />
        <Notes />
    </div>
</template>

<script>
import Todos from "../components/Todos";
import Notes from "../components/Notes";

export default {
    name: "Home",
    components: {
        Todos,
        Notes,
    },
};
</script>

<style lang="scss" scoped></style>
