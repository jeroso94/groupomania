<template>
    <ul class="listStyle" >
        <li><h4>{{ record.title }} ({{ record.updatedAt }})</h4></li>
        <li class="listContent">
            <img class="picture" :src="record.mediaUrl" alt="Illustration"/>
            <p class="postedBy">(<span class="postedByLabel">Publié par</span>: {{ record.email }})</p>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['record']
}
</script>

<style lang="scss" scoped>
    .listStyle {
        list-style-type: none;
        text-align: justify;
        color: lightcoral;
        font-size: 20px;
        font-weight: 500;
    }

    .listContent {
        text-align: center;
    }

    .picture {
        block-size: 20vmax ;
    }

    .postedByLabel {
        font-style: normal;
        border-bottom-style:dotted;
        font-weight: 300;
    }

    .postedBy {
        font-size: 16px;
        font-style: italic;
        font-weight: 300;
    }

    .formStyle {
        margin: auto;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items:center;
        color: lightcoral;
        font-size: 20px;
    }
</style>