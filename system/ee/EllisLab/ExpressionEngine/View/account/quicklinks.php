<?php $this->extend('_templates/default-nav'); ?>

<div class="tbl-ctrls">
<?=form_open($form_url)?>
	<fieldset class="tbl-search right">
		<a class="btn tn action" href="<?=$new?>">create new</a>
	</fieldset>
	<h1>
		<?php echo isset($cp_heading) ? $cp_heading : $cp_page_title?>
	</h1>

	<?php if (isset($filters)) echo $filters; ?>

	<?= $table; ?>

	<?php if ( ! empty($pagination)) $this->embed('_shared/pagination', $pagination); ?>

	<fieldset class="tbl-bulk-act hidden">
		<select name="bulk_action">
			<option value="">-- <?=lang('with_selected')?> --</option>
			<option value="remove" data-confirm-trigger="selected" rel="modal-confirm-remove"><?=lang('remove')?></option>
		</select>
		<button class="btn submit" data-conditional-modal="confirm-trigger"><?=lang('submit')?></button>
	</fieldset>
<?=form_close()?>
</div>

<?php

$modal_vars = array(
	'name'		=> 'modal-confirm-remove',
	'form_url'	=> $form_url,
	'hidden'	=> array(
		'bulk_action'	=> 'remove'
	)
);

$modal = $this->make('ee:_shared/modal_confirm_remove')->render($modal_vars);
ee('CP/Modal')->addModal('remove', $modal);
?>