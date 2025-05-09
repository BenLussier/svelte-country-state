<script lang="ts">
  import { type ICountry, type IState, Country, State } from 'country-state-city';
  import { SelectField } from 'svelte-ux';
  let { 
    stateLabel = "State",
    countryLabel = "Country",

    stateValue = $bindable(),
    countryValue = $bindable(),
  } = $props();

  const countries: ICountry[] = Country.getAllCountries();
  // let states: IState[] = $derived(State.getStatesOfCountry(countryValue));
  let states: IState[] = $state(State.getStatesOfCountry(countryValue));
</script>

<tr>
  <td>
    {countryLabel}
  </td>
  <td>
    <SelectField
      options={countries.map(c => ({ value: c.isoCode, label: c.name }))}
      clearable={false}
      bind:value={countryValue}
      on:change={() => {
        states = State.getStatesOfCountry(countryValue);
      }}
    />
  </td>
</tr>
<tr>
  <td>
    {stateLabel}
  </td>
  <td>
    <SelectField
      options={states.map(s => ({ value: s.isoCode, label: s.name }))}
      clearable={false}
      bind:value={stateValue}
    />
  </td>
</tr>

<style>
	td {
		padding: 4px 12px;
    vertical-align: baseline;
	}

	td:first-child {
    font-weight: bold;
    text-align: right;
    text-wrap-mode: nowrap;
		width: max-content;
	}

  td:last-child {
		width: 20rem;
	}
</style>