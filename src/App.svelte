<script lang="ts">
  import BaseStats from "./lib/BaseStats.svelte";
  import { dataStore } from "./lib/stores";
  import AttunementStats from "./lib/AttunementStats.svelte";
  import AttunementChoice from "./lib/AttunementChoice.svelte";
  import type { DataInterface } from "./lib/types";
  let dataTextArea: HTMLTextAreaElement | null = null;
  window.onload = () => {
    dataTextArea = document.getElementById(
      "dataTextArea"
    ) as HTMLTextAreaElement;
  };
  function saveData() {
    if (!dataTextArea) {
      return;
    }
    dataTextArea.value = btoa(JSON.stringify($dataStore));
  }
  function loadData() {
    if (!dataTextArea) {
      return;
    }
    try {
      let newData = JSON.parse(atob(dataTextArea.value)) as DataInterface;
      $dataStore = newData;
    } catch {
      alert("Invalid build data!");
    }
  }
</script>

<main>
  <div id="stats">
    <BaseStats />

    <AttunementChoice />

    {#if $dataStore.hasFlame || $dataStore.hasFrost || $dataStore.hasThunder || $dataStore.hasGale || $dataStore.hasShadow}
      <AttunementStats />
    {/if}
  </div>
  <div id="save">
    <textarea id="dataTextArea" />
    <button on:click={saveData}>Save</button>
    <button on:click={loadData}>Load</button>
  </div>
</main>

<style>
  #stats {
    display: inline-grid;
    gap: 2em 2em;
    margin-top: 1em;
    margin-left: 1em;
  }
  #save {
    margin: 1em;
  }
  #dataTextArea {
    width: 30em;
    height: 20em;
    resize: none;
  }
  * {
    box-sizing: border-box;
  }
</style>
