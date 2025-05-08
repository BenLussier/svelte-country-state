<script lang="ts">
  import { AppLayout } from "svelte-ux";
  import SelectCountryState from "$lib/components/SelectCountryState.svelte";
</script>

<AppLayout>
  <form>
    <table>
      <tbody>
        <SelectCountryState
          countryLabel="Country 1"
          countryValue="US"
          stateLabel="State 1"
          stateValue="CA"
        />
        <SelectCountryState
          countryLabel="Country 2"
          countryValue="US"
          stateLabel="State 2"
          stateValue="MA"
        />
      </tbody>
    </table>
  </form>
</AppLayout>