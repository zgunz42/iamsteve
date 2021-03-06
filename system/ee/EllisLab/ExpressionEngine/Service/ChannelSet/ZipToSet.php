<?php
/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

namespace EllisLab\ExpressionEngine\Service\ChannelSet;

use EllisLab\ExpressionEngine\Library\Filesystem\Filesystem;

/**
 * Channel Set Service: Zip to Set
 */
class ZipToSet {

	private $path;
	private $extracted;

	public function __construct($path)
	{
		$this->path = $path;
	}

	/**
	 * Take the zip and extract it to the cache path with the given file name.
	 *
	 * @param String $file_name name to use for the extracted directory
	 * @return Set Channel set importer instance
	 */
	public function extractAs($file_name)
	{
		$zip = new \ZipArchive;

		if ($zip->open($this->path) !== TRUE)
		{
			throw new ImportException('Zip file not readable.');
		}

		$this->ensureNoPHP($zip);

		// create a temporary directory for the contents in our cache folder
		$fs = new Filesystem();

		if ( ! is_dir(PATH_CACHE.'cset/'))
		{
			$fs->mkdir(PATH_CACHE.'cset/');
		}

		$tmp_dir = 'cset/tmp_'.ee('Encrypt')->generateKey();
		$fs->mkdir(PATH_CACHE.$tmp_dir, FALSE);

		// extract the archive
		if ($zip->extractTo(PATH_CACHE.$tmp_dir) !== TRUE)
		{
			throw new ImportException('Could not extract zip file.');
		}

		// Check for an identically named subfolder inside the extracted archive
		$new_path = PATH_CACHE.$tmp_dir;

		if (is_dir($new_path.'/'.basename($file_name, '.zip')))
		{
			$new_path .= '/'.basename($file_name, '.zip');
		}

		return new Set($new_path);
	}

	/**
	 * Ensure there are no PHP files inside the archive before we extract them
	 * on to the server
	 *
	 * @param Resource $zip Opened ZipArchive file
	 */
	protected function ensureNoPHP($zip)
	{
		for ($i = 0; $i < $zip->numFiles; $i++)
		{
			if (stripos($zip->getNameIndex($i), '.php') !== FALSE)
			{
				throw new ImportException('Cannot extract archive that contains PHP files.');
			}
		}
	}
}
