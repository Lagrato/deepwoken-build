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
    // format: HEX numbers representing each stat in order, 2 digits each
    // e.g.: 002030... -> 0 str, 32 frt, 48 agi
    // followed by five 0s or 1s representing bools for each attunement player might have
    // e.g.: 10100 -> flamecharmer + thundercaller
    // followed by more 2 digit hex numbers for all attunement stats in order
    // followed by some way to represent talents I still didnt make
    let parsed_data: string = "";
    parsed_data += $dataStore.strength.toString(16).padStart(2, "0");
    parsed_data += $dataStore.fortitude.toString(16).padStart(2, "0");
    parsed_data += $dataStore.agility.toString(16).padStart(2, "0");
    parsed_data += $dataStore.intelligence.toString(16).padStart(2, "0");
    parsed_data += $dataStore.willpower.toString(16).padStart(2, "0");
    parsed_data += $dataStore.charisma.toString(16).padStart(2, "0");
    parsed_data += $dataStore.light.toString(16).padStart(2, "0");
    parsed_data += $dataStore.med.toString(16).padStart(2, "0");
    parsed_data += $dataStore.heavy.toString(16).padStart(2, "0");

    parsed_data += Number($dataStore.hasFlame).toString();
    parsed_data += Number($dataStore.hasFrost).toString();
    parsed_data += Number($dataStore.hasThunder).toString();
    parsed_data += Number($dataStore.hasGale).toString();
    parsed_data += Number($dataStore.hasShadow).toString();

    parsed_data += $dataStore.flameStat.toString(16).padStart(2, "0");
    parsed_data += $dataStore.frostStat.toString(16).padStart(2, "0");
    parsed_data += $dataStore.thunderStat.toString(16).padStart(2, "0");
    parsed_data += $dataStore.galeStat.toString(16).padStart(2, "0");
    parsed_data += $dataStore.shadowStat.toString(16).padStart(2, "0");
    dataTextArea.value = parsed_data;
  }
  function loadData() {
    if (!dataTextArea) {
      return;
    }
    try {
      let newData = dataTextArea.value.split("");
      $dataStore.strength = parseInt(
        newData.splice(0, 2).reduce((a, b) => a + b),
        16
      );
      $dataStore.fortitude = parseInt(
        newData.splice(0, 2).reduce((a, b) => a + b),
        16
      );
      $dataStore.agility = parseInt(
        newData.splice(0, 2).reduce((a, b) => a + b),
        16
      );
      $dataStore.intelligence = parseInt(
        newData.splice(0, 2).reduce((a, b) => a + b),
        16
      );
      $dataStore.willpower = parseInt(
        newData.splice(0, 2).reduce((a, b) => a + b),
        16
      );
      $dataStore.charisma = parseInt(
        newData.splice(0, 2).reduce((a, b) => a + b),
        16
      );
      $dataStore.light = parseInt(
        newData.splice(0, 2).reduce((a, b) => a + b),
        16
      );
      $dataStore.med = parseInt(
        newData.splice(0, 2).reduce((a, b) => a + b),
        16
      );
      $dataStore.heavy = parseInt(
        newData.splice(0, 2).reduce((a, b) => a + b),
        16
      );

      $dataStore.hasFlame = Boolean(Number(newData.shift()));
      $dataStore.hasFrost = Boolean(Number(newData.shift()));
      $dataStore.hasThunder = Boolean(Number(newData.shift()));
      $dataStore.hasGale = Boolean(Number(newData.shift()));
      $dataStore.hasShadow = Boolean(Number(newData.shift()));

      $dataStore.flameStat = parseInt(
        newData.splice(0, 2).reduce((a, b) => a + b),
        16
      );
      $dataStore.frostStat = parseInt(
        newData.splice(0, 2).reduce((a, b) => a + b),
        16
      );
      $dataStore.thunderStat = parseInt(
        newData.splice(0, 2).reduce((a, b) => a + b),
        16
      );
      $dataStore.galeStat = parseInt(
        newData.splice(0, 2).reduce((a, b) => a + b),
        16
      );
      $dataStore.shadowStat = parseInt(
        newData.splice(0, 2).reduce((a, b) => a + b),
        16
      );
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
