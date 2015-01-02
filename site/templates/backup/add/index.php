{embed="add/header"}
<header role="banner">
	<h1>Post an entry</h1>
	{if logged_out}<a href="http://iamsteve.me/login.php">Login</a>{/if}
</header>

<section role="main">
{exp:safecracker channel="blog" return="blog/URL_TITLE" entry_id="{segment_3}" error_handling="inline" preserve_checkboxes="yes"}
	<fieldset>
		<label for="title">Title</label>
		{if instructions}<p>{instructions:title}</p>{/if}
		<input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle();">
		<p>{error:title}</p>
	</fieldset>
	
	<fieldset>
		<label for="url_title">URL Title</label>
		{if instructions}<p>{instructions:url_title}</p>{/if}
		<input type="text" name="url_title" id="url_title" value="{url_title}" maxlength="75" size="50">
		<p>{error:url_title}</p>
	</fieldset>
	<fieldset>
		<label for="categories">Categories</label>
		<select name="category[]" id="categories" size="4" multiple="multiple">
		{categories}
		  <option value="{category_id}"{selected}>{category_name}</option>
		{/categories}
		</select>
	</fieldset>
	<fieldset>
		<label for="status">Status</label>
		<select name="status" id="status">
		{statuses}
		  <option value="{status}"{selected}>{status}</option>
		{/statuses}
		</select>
		<p>{error:status}</p>
	</fieldset>
	
{custom_fields}
<fieldset>

  <label for="{field_name}">{field_label}{if required}<b>*</b>{/if}</label>
  <p>{field_instructions}</p>
  {formatting_buttons}

  {if error}
		<p class="error">{error}</p>
  {/if}

  {if textarea}
		<textarea id="{field_name}" name="{field_name}" dir="{text_direction}" rows="{rows}">{field_data}</textarea>
  {/if}

  {if text}
		<input type="text" dir="{text_direction}" id="{field_name}" name="{field_name}" value="{field_data}" maxlength="{maxlength}">
  {/if}

  {if select}
		<select id="{field_name}" name="{field_name}">
			{options}<option value="{option_value}"{selected}>{option_name}</option>{/options}
		</select>
  {/if}

  {if date}
		<input type="text" id="{field_name}" name="{field_name}" value="{field_data}">
  {/if}

  {if checkbox}
		{options}
		<label class="checkbox">{option_value}
			<input type="checkbox" id="{field_name}" name="{field_name}[]" value="{option_value}"{checked}>
		</label>
		{/options}
  {/if}

  {if radio}
		{options}
		<label class="checkbox">{option_value}<label class="checkbox">
			<input type="radio" id="{field_name}" name="{field_name}" value="{option_value}"{checked}>
		</label>
		{/options}
  {/if}

  {if safecracker_file}
  	{display_field}
  {/if}

  {if relationship}
	<select id="{field_name}" name="{field_name}">
		{options}
			<option value="{option_value}"{selected}>{option_name}</option>
		{/options}
	</select>
  {/if}

  {if multiselect}
		<select id="{field_name}" name="{field_name}[]" multiple="multiple">
		{options}
			<option value="{option_value}"{selected}>{option_name}</option>
		{/options}
		</select>
  {/if}

</fieldset>
{/custom_fields}
	<input type="submit" name="submit" value="Submit">
{/exp:safecracker}

</section>
{embed="add/footer"}