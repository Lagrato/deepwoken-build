<script lang="ts">
    import { dataStore } from "./stores";
    $: totalSpent =
        $dataStore.strength +
        $dataStore.fortitude +
        $dataStore.agility +
        $dataStore.intelligence +
        $dataStore.willpower +
        $dataStore.charisma +
        $dataStore.light +
        $dataStore.med +
        $dataStore.flameStat +
        $dataStore.frostStat +
        $dataStore.thunderStat +
        $dataStore.galeStat +
        $dataStore.shadowStat +
        $dataStore.heavy;
    $: remaining = 327 - totalSpent;
</script>

<div id="baseStats">
    <div id="strength" class="statAttribute">
        <span class="attributeText">Strength: </span>
        <input
            type="number"
            class="attributeNumber"
            bind:value={$dataStore.strength}
            on:input={() =>
                remaining < 0 ? ($dataStore.strength += remaining) : {}}
            min="0"
            max="100"
        />
        <input
            type="range"
            bind:value={$dataStore.strength}
            on:input={() =>
                remaining < 0 ? ($dataStore.strength += remaining) : {}}
            min="0"
            max="100"
        />
    </div>

    <div id="fortitude" class="statAttribute">
        <span class="attributeText">Fortitude: </span>
        <input
            type="number"
            class="attributeNumber"
            bind:value={$dataStore.fortitude}
            on:input={() =>
                remaining < 0 ? ($dataStore.fortitude += remaining) : {}}
            min="0"
            max="100"
        />
        <input
            type="range"
            bind:value={$dataStore.fortitude}
            on:input={() =>
                remaining < 0 ? ($dataStore.fortitude += remaining) : {}}
            min="0"
            max="100"
        />
    </div>

    <div id="agility" class="statAttribute">
        <span class="attributeText">Agility: </span>
        <input
            type="number"
            class="attributeNumber"
            bind:value={$dataStore.agility}
            on:input={() =>
                remaining < 0 ? ($dataStore.agility += remaining) : {}}
            min="0"
            max="100"
        />
        <input
            type="range"
            bind:value={$dataStore.agility}
            on:input={() =>
                remaining < 0 ? ($dataStore.agility += remaining) : {}}
            min="0"
            max="100"
        />
    </div>

    <div id="intelligence" class="statAttribute">
        <span class="attributeText">Intelligence: </span>
        <input
            type="number"
            class="attributeNumber"
            bind:value={$dataStore.intelligence}
            on:input={() =>
                remaining < 0 ? ($dataStore.intelligence += remaining) : {}}
            min="0"
            max="100"
        />
        <input
            type="range"
            bind:value={$dataStore.intelligence}
            on:input={() =>
                remaining < 0 ? ($dataStore.intelligence += remaining) : {}}
            min="0"
            max="100"
        />
    </div>

    <div id="willpower" class="statAttribute">
        <span class="attributeText">Willpower: </span>
        <input
            type="number"
            class="attributeNumber"
            bind:value={$dataStore.willpower}
            on:input={() =>
                remaining < 0 ? ($dataStore.willpower += remaining) : {}}
            min="0"
            max="100"
        />
        <input
            type="range"
            bind:value={$dataStore.willpower}
            on:input={() =>
                remaining < 0 ? ($dataStore.willpower += remaining) : {}}
            min="0"
            max="100"
        />
    </div>

    <div id="charisma" class="statAttribute">
        <span class="attributeText">Charisma: </span>
        <input
            type="number"
            class="attributeNumber"
            bind:value={$dataStore.charisma}
            on:input={() =>
                remaining < 0 ? ($dataStore.charisma += remaining) : {}}
            min="0"
            max="100"
        />
        <input
            type="range"
            bind:value={$dataStore.charisma}
            on:input={() =>
                remaining < 0 ? ($dataStore.charisma += remaining) : {}}
            min="0"
            max="100"
        />
    </div>
    <div id="weaponsBorder">
        <div id="light" class="statAttribute">
            <span class="attributeText">Light: </span>
            <input
                type="number"
                class="attributeNumber"
                bind:value={$dataStore.light}
                on:input={() =>
                    remaining < 0 ? ($dataStore.light += remaining) : {}}
                min="0"
                max="100"
            />
            <input
                type="range"
                bind:value={$dataStore.light}
                on:input={() =>
                    remaining < 0 ? ($dataStore.light += remaining) : {}}
                min="0"
                max="100"
            />
        </div>

        <div id="medium" class="statAttribute">
            <span class="attributeText">Medium: </span>
            <input
                type="number"
                class="attributeNumber"
                bind:value={$dataStore.med}
                on:input={() =>
                    remaining < 0 ? ($dataStore.med += remaining) : {}}
                min="0"
                max="100"
            />
            <input
                type="range"
                bind:value={$dataStore.med}
                on:input={() =>
                    remaining < 0 ? ($dataStore.med += remaining) : {}}
                min="0"
                max="100"
            />
        </div>

        <div id="heavy" class="statAttribute">
            <span class="attributeText">Heavy: </span>
            <input
                type="number"
                class="attributeNumber"
                bind:value={$dataStore.heavy}
                on:input={() =>
                    remaining < 0 ? ($dataStore.heavy += remaining) : {}}
                min="0"
                max="100"
            />
            <input
                type="range"
                bind:value={$dataStore.heavy}
                on:input={() =>
                    remaining < 0 ? ($dataStore.heavy += remaining) : {}}
                min="0"
                max="100"
            />
        </div>
    </div>

    <h2 id="remains">Remaining points: {remaining}</h2>
</div>

<style>
    #baseStats {
        position: relative;
        display: flex;
        flex-direction: column;
        border: 1px solid #ffffff;
        padding: 1em;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;
        box-sizing: border-box;
    }

    #weaponsBorder {
        display: flex;
        flex-direction: column;
        border: 1px solid #ffffff;
        margin-top: 1em;
        margin-bottom: 4.5em;
    }

    .statAttribute {
        display: flex;
        flex-direction: row;
        margin: 0.5em;
    }

    .attributeText {
        flex: 1;
        margin-right: 1em;
    }

    .attributeNumber {
        flex: 0.1;
        width: 4em;
        margin-right: 1em;
    }
    h2 {
        position: absolute;
        text-align: center;
        left: 0em;
        right: 0em;
        bottom: 0em;
    }
</style>
