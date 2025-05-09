<script lang="ts">
  import { AppLayout } from "svelte-ux";
  import SelectCountryState from "$lib/components/SelectCountryState.svelte";
  import { writable } from 'svelte/store';
  const location = writable({
    country1: 'US',
    state1: 'CA',
    country2: 'US',
    state2: ''
  });
</script>

<AppLayout>
  <table>
    <tbody>
      <SelectCountryState
        countryLabel="Country 1"
        bind:countryValue={$location.country1}
        stateLabel="State 1"
        bind:stateValue={$location.state1}
      />
      <SelectCountryState
        countryLabel="Country 2"
        bind:countryValue={$location.country2}
        stateLabel="State 2"
        bind:stateValue={$location.state2}
      />
    </tbody>
  </table>
</AppLayout>