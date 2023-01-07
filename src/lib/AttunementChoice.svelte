<script lang="ts">
    import { dataStore } from "./stores";
</script>

<div id="attunementChoice">
    <div>
        <label for="flamecharmer">Flamecharmer</label>
        <input
            type="checkbox"
            id="flamecharmer"
            bind:checked={$dataStore.hasFlame}
        />
    </div>
    <div>
        <label for="frostdrawer">Frostdrawer</label>
        <input
            type="checkbox"
            id="frostdrawer"
            bind:checked={$dataStore.hasFrost}
        />
    </div>
    <div>
        <label for="thundercaller">Thundercaller</label>
        <input
            type="checkbox"
            id="thundercaller"
            bind:checked={$dataStore.hasThunder}
        />
    </div>
    <div>
        <label for="galebreather">Galebreather</label>
        <input
            type="checkbox"
            id="galebreather"
            bind:checked={$dataStore.hasGale}
        />
    </div>
    <div>
        <label for="shadowcaster">Shadowcaster</label>
        <input
            type="checkbox"
            id="shadowcaster"
            bind:checked={$dataStore.hasShadow}
        />
    </div>
</div>

<style>
    #attunementChoice {
        display: flex;
        flex-direction: column;
        border: 1px solid #ffffff;
        padding: 1em;
        height:fit-content;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    #attunementChoice div {
        display: flex;
        margin: 0.1em;
    }

    #attunementChoice div label {
        flex: 1;
        margin-right: 10em;
    }
</style>
