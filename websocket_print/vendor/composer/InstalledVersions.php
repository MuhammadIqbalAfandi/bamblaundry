<?php

namespace Composer;

use Composer\Semver\VersionParser;






class InstalledVersions
{
private static $installed = array (
  'root' => 
  array (
    'pretty_version' => 'dev-master',
    'version' => 'dev-master',
    'aliases' => 
    array (
    ),
    'reference' => 'a68ad1f58750b8dfe5c72c32579856ab916fc600',
    'name' => 'gen781/print_server',
  ),
  'versions' => 
  array (
    'gen781/print_server' => 
    array (
      'pretty_version' => 'dev-master',
      'version' => 'dev-master',
      'aliases' => 
      array (
      ),
      'reference' => 'a68ad1f58750b8dfe5c72c32579856ab916fc600',
    ),
    'hoa/consistency' => 
    array (
      'pretty_version' => '1.17.05.02',
      'version' => '1.17.05.02',
      'aliases' => 
      array (
      ),
      'reference' => 'fd7d0adc82410507f332516faf655b6ed22e4c2f',
    ),
    'hoa/event' => 
    array (
      'pretty_version' => '1.17.01.13',
      'version' => '1.17.01.13',
      'aliases' => 
      array (
      ),
      'reference' => '6c0060dced212ffa3af0e34bb46624f990b29c54',
    ),
    'hoa/exception' => 
    array (
      'pretty_version' => '1.17.01.16',
      'version' => '1.17.01.16',
      'aliases' => 
      array (
      ),
      'reference' => '091727d46420a3d7468ef0595651488bfc3a458f',
    ),
    'hoa/http' => 
    array (
      'pretty_version' => '1.17.01.13',
      'version' => '1.17.01.13',
      'aliases' => 
      array (
      ),
      'reference' => '6d3e114b48a63cf6b9532f9e9607cebade6314ef',
    ),
    'hoa/protocol' => 
    array (
      'pretty_version' => '1.17.01.14',
      'version' => '1.17.01.14',
      'aliases' => 
      array (
      ),
      'reference' => '5c2cf972151c45f373230da170ea015deecf19e2',
    ),
    'hoa/socket' => 
    array (
      'pretty_version' => '1.17.05.16',
      'version' => '1.17.05.16',
      'aliases' => 
      array (
      ),
      'reference' => '1a43f073d910d0f803de8cc9256779db1027906d',
    ),
    'hoa/stream' => 
    array (
      'pretty_version' => '1.17.02.21',
      'version' => '1.17.02.21',
      'aliases' => 
      array (
      ),
      'reference' => '3293cfffca2de10525df51436adf88a559151d82',
    ),
    'hoa/websocket' => 
    array (
      'pretty_version' => '3.17.01.09',
      'version' => '3.17.01.09',
      'aliases' => 
      array (
      ),
      'reference' => 'a1bd79cefb67278f71ac8a44873ad1416924e906',
    ),
    'mike42/escpos-php' => 
    array (
      'pretty_version' => 'v3.0',
      'version' => '3.0.0.0',
      'aliases' => 
      array (
      ),
      'reference' => 'dcb569a123d75f9f6a4a927aae7625ca6b7fdcf3',
    ),
    'mike42/gfx-php' => 
    array (
      'pretty_version' => 'v0.6',
      'version' => '0.6.0.0',
      'aliases' => 
      array (
      ),
      'reference' => 'ed9ded2a9298e4084a9c557ab74a89b71e43dbdb',
    ),
  ),
);







public static function getInstalledPackages()
{
return array_keys(self::$installed['versions']);
}









public static function isInstalled($packageName)
{
return isset(self::$installed['versions'][$packageName]);
}














public static function satisfies(VersionParser $parser, $packageName, $constraint)
{
$constraint = $parser->parseConstraints($constraint);
$provided = $parser->parseConstraints(self::getVersionRanges($packageName));

return $provided->matches($constraint);
}










public static function getVersionRanges($packageName)
{
if (!isset(self::$installed['versions'][$packageName])) {
throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}

$ranges = array();
if (isset(self::$installed['versions'][$packageName]['pretty_version'])) {
$ranges[] = self::$installed['versions'][$packageName]['pretty_version'];
}
if (array_key_exists('aliases', self::$installed['versions'][$packageName])) {
$ranges = array_merge($ranges, self::$installed['versions'][$packageName]['aliases']);
}
if (array_key_exists('replaced', self::$installed['versions'][$packageName])) {
$ranges = array_merge($ranges, self::$installed['versions'][$packageName]['replaced']);
}
if (array_key_exists('provided', self::$installed['versions'][$packageName])) {
$ranges = array_merge($ranges, self::$installed['versions'][$packageName]['provided']);
}

return implode(' || ', $ranges);
}





public static function getVersion($packageName)
{
if (!isset(self::$installed['versions'][$packageName])) {
throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}

if (!isset(self::$installed['versions'][$packageName]['version'])) {
return null;
}

return self::$installed['versions'][$packageName]['version'];
}





public static function getPrettyVersion($packageName)
{
if (!isset(self::$installed['versions'][$packageName])) {
throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}

if (!isset(self::$installed['versions'][$packageName]['pretty_version'])) {
return null;
}

return self::$installed['versions'][$packageName]['pretty_version'];
}





public static function getReference($packageName)
{
if (!isset(self::$installed['versions'][$packageName])) {
throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}

if (!isset(self::$installed['versions'][$packageName]['reference'])) {
return null;
}

return self::$installed['versions'][$packageName]['reference'];
}





public static function getRootPackage()
{
return self::$installed['root'];
}







public static function getRawData()
{
return self::$installed;
}



















public static function reload($data)
{
self::$installed = $data;
}
}
