<template>
    <div>
        <p>// Loop over all the posts and display them<p>
        <h1>{{ test }}</h1>

        <button @click="setTestValue()">Update value</button>
    </div>
</template>

<script>
    /**
     * The Feed view.
     * @type {Object}
     */

    export default {
        components: {
            // Components
        },
        methods: {
            setTestValue() {
                if (this.test === 'New value') {
                    this.$store.dispatch('setTestValue', 'Old value');
                    return;
                }
                this.$store.dispatch('setTestValue', 'New value');
            }
        },
        computed: {
            test() {
                return this.$store.getters.test;
            }
        }
    };
</script>
