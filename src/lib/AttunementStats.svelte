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

<div id="attunementStats">
  {#if $dataStore.hasFlame}
    <div id="flameAttr" class="statAttribute">
      <span class="attributeText">Flamecharm: </span>
      <input
        type="number"
        class="attributeNumber"
        bind:value={$dataStore.flameStat}
        on:input={() =>
          remaining < 0 ? ($dataStore.flameStat += remaining) : {}}
        min="0"
        max="100"
      />
      <input
        type="range"
        class="attributeRange"
        bind:value={$dataStore.flameStat}
        on:input={() =>
          remaining < 0 ? ($dataStore.flameStat += remaining) : {}}
        min="0"
        max="100"
      />
    </div>
  {/if}

  {#if $dataStore.hasFrost}
    <div id="frostAttr" class="statAttribute">
      <span class="attributeText">Frostdraw: </span>
      <input
        type="number"
        class="attributeNumber"
        bind:value={$dataStore.frostStat}
        on:input={() =>
          remaining < 0 ? ($dataStore.frostStat += remaining) : {}}
        min="0"
        max="100"
      />
      <input
        type="range"
        class="attributeRange"
        bind:value={$dataStore.frostStat}
        on:input={() =>
          remaining < 0 ? ($dataStore.frostStat += remaining) : {}}
        min="0"
        max="100"
      />
    </div>
  {/if}
  {#if $dataStore.hasThunder}
    <div id="thunderAttr" class="statAttribute">
      <span class="attributeText">Thundercall: </span>
      <input
        type="number"
        class="attributeNumber"
        bind:value={$dataStore.thunderStat}
        on:input={() =>
          remaining < 0 ? ($dataStore.thunderStat += remaining) : {}}
        min="0"
        max="100"
      />
      <input
        type="range"
        class="attributeRange"
        bind:value={$dataStore.thunderStat}
        on:input={() =>
          remaining < 0 ? ($dataStore.thunderStat += remaining) : {}}
        min="0"
        max="100"
      />
    </div>
  {/if}

  {#if $dataStore.hasGale}
    <div id="galeAttr" class="statAttribute">
      <span class="attributeText">Galebreath: </span>
      <input
        type="number"
        class="attributeNumber"
        bind:value={$dataStore.galeStat}
        on:input={() =>
          remaining < 0 ? ($dataStore.galeStat += remaining) : {}}
        min="0"
        max="100"
      />
      <input
        type="range"
        class="attributeRange"
        bind:value={$dataStore.galeStat}
        on:input={() =>
          remaining < 0 ? ($dataStore.galeStat += remaining) : {}}
        min="0"
        max="100"
      />
    </div>
  {/if}

  {#if $dataStore.hasShadow}
    <div id="shadowAttr" class="statAttribute">
      <span class="attributeText">Shadowcast: </span>
      <input
        type="number"
        class="attributeNumber"
        bind:value={$dataStore.shadowStat}
        on:input={() =>
          remaining < 0 ? ($dataStore.shadowStat += remaining) : {}}
        min="0"
        max="100"
      />
      <input
        type="range"
        class="attributeRange"
        bind:value={$dataStore.shadowStat}
        on:input={() =>
          remaining < 0 ? ($dataStore.shadowStat += remaining) : {}}
        min="0"
        max="100"
      />
    </div>
  {/if}
</div>

<style>
  #attunementStats {
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    height: fit-content;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    box-sizing: border-box;
  }
  .statAttribute {
    display: flex;
    margin: 1em;
    box-sizing: border-box;
  }
  .attributeText {
    flex: 2;
    margin-right: 0.5em;
    box-sizing: border-box;
  }
  .attributeNumber {
    flex: 0.2;
    width: 4em;
    margin-right: 1em;
    box-sizing: border-box;
  }
  .attributeRange {
    flex: 1.5;
    width: 4em;
    margin-right: 1em;
    box-sizing: border-box;
  }
</style>
